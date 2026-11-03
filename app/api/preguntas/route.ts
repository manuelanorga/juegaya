import { NextResponse, type NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { z } from 'zod'
import { hit, pushToPool, randomFromPool, clientIp } from '@/lib/rate-limit'

const QuizSchema = z.object({
  questions: z.array(z.object({
    question: z.string(),
    options: z.array(z.string()),
    correct: z.number().int(),
    category: z.string(),
    fact: z.string(),
  })),
})

const POOL_KEY = 'preguntas:pool'
const POOL_MAX = 100
const PER_IP_LIMIT = 10          // partidas nuevas por IP…
const PER_IP_WINDOW = 60 * 10    // …cada 10 minutos
const DAILY_LIMIT = Number(process.env.PREGUNTAS_DAILY_LIMIT ?? 300)

const client = new Anthropic()

async function generate() {
  const response = await client.messages.parse({
    model: 'claude-haiku-5-5',
    max_tokens: 4000,
    output_config: {
      effort: 'low',
      format: zodOutputFormat(QuizSchema),
    },
    messages: [{
      role: 'user',
      content: 'Genera exactamente 10 preguntas de trivia en español sobre historia mundial y latinoamericana. Cada pregunta tiene 4 opciones; "correct" es el índice (0-3) de la opción correcta. "fact" es un dato curioso breve relacionado.',
    }],
  })
  const quiz = response.parsed_output
  if (!quiz || quiz.questions.length === 0) throw new Error('Respuesta vacía')
  return quiz
}

function fromPool(cached: string | null) {
  if (!cached) return NextResponse.json({ error: 'Demasiadas solicitudes, intenta en unos minutos.' }, { status: 429 })
  return new NextResponse(cached, { headers: { 'Content-Type': 'application/json' } })
}

export async function GET(request: NextRequest) {
  // Solo aceptar llamadas desde nuestro propio sitio (el juego corre en el mismo dominio).
  const site = request.headers.get('sec-fetch-site')
  if (site && site !== 'same-origin') {
    return NextResponse.json({ error: 'Origen no permitido' }, { status: 403 })
  }

  const ip = clientIp(request.headers)
  const today = new Date().toISOString().slice(0, 10)
  const allowed =
    (await hit(`preguntas:ip:${ip}`, PER_IP_LIMIT, PER_IP_WINDOW)) &&
    (await hit(`preguntas:day:${today}`, DAILY_LIMIT, 60 * 60 * 25))

  // Sin cupo: servimos una partida ya generada en lugar de gastar en la API.
  if (!allowed) return fromPool(await randomFromPool(POOL_KEY))

  try {
    const quiz = await generate()
    const body = JSON.stringify(quiz)
    await pushToPool(POOL_KEY, body, POOL_MAX)
    return new NextResponse(body, { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    console.error('[api/preguntas]', err)
    const cached = await randomFromPool(POOL_KEY)
    if (cached) return fromPool(cached)
    return NextResponse.json({ error: 'No se pudieron generar preguntas' }, { status: 500 })
  }
}
