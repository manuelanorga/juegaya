'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { GAMES } from '@/lib/games'

export async function getStats(range: number) {
  await requireAdmin()
  const days = z.number().int().min(1).max(365).parse(range)
  const from = new Date(Date.now() - days * 86_400_000).toISOString()

  const [{ data: views }, { data: sessions }] = await Promise.all([
    supabaseAdmin.from('page_views').select('*').gte('created_at', from),
    supabaseAdmin.from('sessions').select('*').gte('first_seen', from),
  ])
  return { views: views ?? [], sessions: sessions ?? [] }
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
