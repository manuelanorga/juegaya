import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://juegaya.app/sitemap.xml',
    host: 'https://juegaya.app',
  }
}
