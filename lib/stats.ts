import 'server-only'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Por debajo de esto no se muestra la cifra: "3 visitas" resta más de lo que aporta
export const MIN_VISITS_TO_SHOW = 100

/** Visitas reales (page_views) de cada juego. Si Supabase falla, devuelve {} y no se muestra nada. */
export async function getVisitCounts(slugs: string[]): Promise<Record<string, number>> {
  try {
    const results = await Promise.all(slugs.map(async slug => {
      const { count, error } = await supabaseAdmin
        .from('page_views')
        .select('*', { count: 'exact', head: true })
        .eq('game_slug', slug)
      return [slug, error ? 0 : count ?? 0] as const
    }))
    return Object.fromEntries(results)
  } catch (err) {
    console.error('[stats] getVisitCounts', err)
    return {}
  }
}

/** "1.234 visitas", o null si no llega al mínimo */
export function formatVisits(count: number | undefined) {
  if (!count || count < MIN_VISITS_TO_SHOW) return null
  return `${count.toLocaleString('es')} visitas`
}
