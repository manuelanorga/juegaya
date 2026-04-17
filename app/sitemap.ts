import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://juegaya.app'
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/juego/neon-bird/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/juego/test-iq/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/juego/test-reflejos/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/juegos/arcade/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${base}/ranking/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ]
}
