'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { GAMES } from '@/lib/games'

const RangeSchema = z.object({ from: z.iso.datetime(), to: z.iso.datetime() })
  .refine(r => r.from <= r.to, 'Rango de fechas inválido')

const PAGE_SIZE = 1000

// Supabase devuelve como máximo 1000 filas por consulta: se piden por páginas hasta tenerlas todas
async function fetchInRange<T>(table: string, columns: string, from: string, to: string) {
  const rows: T[] = []
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const { data, error } = await supabaseAdmin
      .from(table)
      .select(columns)
      .gte('created_at', from)
      .lte('created_at', to)
      .order('id')
      .range(offset, offset + PAGE_SIZE - 1)
    if (error) throw new Error(`No se pudo leer ${table}`)
    rows.push(...(data as T[]))
    if (!data || data.length < PAGE_SIZE) return rows
  }
}

export interface ViewRow {
  created_at: string
  session_id: string
  game_slug: string | null
  device: string
  source: string | null
}
export interface PlayRow {
  created_at: string
  session_id: string
  game_slug: string
}

// Primer registro: las métricas nuevas no existen antes de esa fecha y el panel debe avisarlo
async function firstCreatedAt(table: string, notNull?: string) {
  let query = supabaseAdmin.from(table).select('created_at').order('created_at').limit(1)
  if (notNull) query = query.not(notNull, 'is', null)
  const { data } = await query
  return (data?.[0]?.created_at as string | undefined) ?? null
}

export async function getStats(from: string, to: string) {
  await requireAdmin()
  const range = RangeSchema.parse({ from, to })
  const [views, plays, playsSince, sourcesSince] = await Promise.all([
    fetchInRange<ViewRow>('page_views', 'created_at,session_id,game_slug,device,source', range.from, range.to),
    fetchInRange<PlayRow>('game_plays', 'created_at,session_id,game_slug', range.from, range.to),
    firstCreatedAt('game_plays'),
    firstCreatedAt('page_views', 'source'),
  ])
  return { views, plays, playsSince, sourcesSince }
}

export async function getDestacados() {
  await requireAdmin()
  const { data } = await supabaseAdmin.from('destacados').select('*')
  return data ?? []
}

const DestacadoSchema = z.object({
  seccion: z.string().min(1).max(50),
  gameSlug: z.string().refine(s => GAMES.some(g => g.slug === s), 'Juego no existe'),
})

export async function saveDestacado(seccion: string, gameSlug: string) {
  await requireAdmin()
  const input = DestacadoSchema.parse({ seccion, gameSlug })
  const { error } = await supabaseAdmin.from('destacados').upsert({
    seccion: input.seccion,
    game_slug: input.gameSlug,
    updated_at: new Date().toISOString(),
  }, { onConflict: 'seccion' })
  if (error) throw new Error('No se pudo guardar')
  revalidatePath('/')
}
