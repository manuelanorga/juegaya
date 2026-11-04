import { NextResponse, type NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { hit, pushToPool, randomFromPool, clientIp } from '@/lib/rate-limit'
import { QuizSchema, normalizeQuiz, isPlayableQuiz } from '@/lib/quiz'

const POOL_KEY = 'preguntas:pool'
const POOL_MAX = 100
const PER_IP_LIMIT = 10          // partidas nuevas por IP…
const PER_IP_WINDOW = 60 * 10    // …cada 10 minutos
const DAILY_LIMIT = Number(process.env.PREGUNTAS_DAILY_LIMIT ?? 300)
const MAX_ATTEMPTS = 2

const client = new Anthropic()

async function generate() {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const response = await client.messages.parse({
      model: 'claude-haiku-5-5',
      max_tokens: 6000,
      output_config: {
        effort: 'low',
        format: zodOutputFormat(QuizSchema),
      },
      messages: [{
        role: 'user',
        // Se piden de más: a veces devuelve alguna menos, y normalizeQuiz se queda con 10 válidas
        content: 'Genera exactamente 12 preguntas de trivia en español sobre historia mundial y latinoamericana. Cada pregunta tiene 4 opciones distintas; "correct" es el índice (0-3) de la opción correcta. "fact" es un dato curioso breve relacionado.',
      }],
    })
    const quiz = response.parsed_output && normalizeQuiz(response.parsed_output)
    if (quiz) return quiz
    console.warn(`[api/preguntas] intento ${attempt}: partida incompleta`)
  }
  throw new Error('El modelo no devolvió suficientes preguntas válidas')
}

async function playableFromPool() {
  for (let i = 0; i < 3; i++) {
    const cached = await randomFromPool(POOL_KEY)
    if (cached && isPlayableQuiz(cached)) return cached
  }
  return null
}

const json = (body: string) => new NextResponse(body, { headers: { 'Content-Type': 'application/json' } })

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
  if (!allowed) {
    const cached = await playableFromPool()
    return cached
      ? json(cached)
      : NextResponse.json({ error: 'Demasiadas partidas seguidas. Intenta en unos minutos.' }, { status: 429 })
  }

  try {
    const body = JSON.stringify(await generate())
    await pushToPool(POOL_KEY, body, POOL_MAX)
    return json(body)
  } catch (err) {
    console.error('[api/preguntas]', err)
    const cached = await playableFromPool()
    return cached
      ? json(cached)
      : NextResponse.json({ error: 'No se pudieron generar las preguntas. Intenta de nuevo.' }, { status: 500 })
  }
}
