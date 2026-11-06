import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { hit, clientIp } from '@/lib/rate-limit'

// Rangos posibles de cada juego: menos es mejor
const GAMES = {
  'sopa-de-letras': { min: 3, max: 86400 },   // segundos
  'flechas-locas': { min: 3, max: 86400 },    // segundos, con penalizaciones incluidas
  palabro: { min: 1, max: 7 },                // intentos; 7 = no adivinó la palabra
  'bloques-locos': { min: -9_999_999, max: -1 }, // puntos en negativo: aquí más puntos es mejor
} as const

const BodySchema = z.object({
  game: z.enum(['sopa-de-letras', 'palabro', 'bloques-locos', 'flechas-locas']),
  date: z.iso.date(),
  session: z.string().regex(/^[a-z0-9]{1,64}$/i),
  value: z.number(),
})

const DAY_MS = 86_400_000

export async function POST(request: NextRequest) {
  const site = request.headers.get('sec-fetch-site')
  if (site && site !== 'same-origin') {
    return NextResponse.json({ error: 'Origen no permitido' }, { status: 403 })
  }
  if (!(await hit(`resultado:ip:${clientIp(request.headers)}`, 30, 60))) {
    return NextResponse.json({ error: 'Demasiadas solicitudes' }, { status: 429 })
  }

  const parsed = BodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })
  const { game, date, session, value } = parsed.data

  // La fecha es la local del jugador: puede diferir un día de la de UTC según su zona horaria
  const offset = Math.abs(new Date(`${date}T12:00:00Z`).getTime() - Date.now())
  const { min, max } = GAMES[game]
  if (offset > 1.5 * DAY_MS || value < min || value > max) {
    return NextResponse.json({ error: 'Resultado no válido' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin.rpc('submit_daily_result', {
    p_game: game,
    p_date: date,
    p_session_id: session,
    p_value: value,
  })
  if (error) {
    console.error('[api/resultado-diario]', error.message)
    return NextResponse.json({ error: 'No disponible' }, { status: 503 })
  }
  return NextResponse.json(data)
}
