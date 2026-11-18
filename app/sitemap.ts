import type { MetadataRoute } from 'next'
import { GAMES } from '@/lib/games'
import { CATEGORIAS, esIndexable } from '@/lib/categorias'
import { GUIAS } from '@/lib/guias'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const juegos = GAMES.map(g => ({
    url: `${SITE_URL}/juego/${g.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Solo categorías con juegos suficientes y texto propio: el resto es noindex
  const categorias = Object.keys(CATEGORIAS)
    .filter(slug => esIndexable(slug, GAMES))
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
    { url: `${SITE_URL}/guias`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...GUIAS.map(g => ({
      url: `${SITE_URL}/guias/${g.slug}`,
      lastModified: new Date(g.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
