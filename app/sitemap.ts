import type { MetadataRoute } from 'next'
import { GAMES } from '@/lib/games'
import { CATEGORIAS, gamesForCategoria } from '@/lib/categorias'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const juegos = GAMES.map(g => ({
    url: `${SITE_URL}/juego/${g.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Solo categorías con juegos: las vacías son noindex
  const categorias = Object.keys(CATEGORIAS)
    .filter(slug => gamesForCategoria(slug, GAMES).length > 0)
    .map(slug => ({
      url: `${SITE_URL}/juegos/${slug}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    }))

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    ...juegos,
    ...categorias,
  ]
}
