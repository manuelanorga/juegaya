import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://juegaya.app'),
  title: {
    default: 'JuegaYa — Juegos Gratis Online Sin Descargar',
    template: '%s | JuegaYa',
  },
  description: 'JuegaYa es la plataforma de juegos HTML5 gratis más grande de Latinoamérica. Juega arcade, puzzle, trivia y más sin descargar nada. 100% gratis, 100% en español.',
  keywords: ['juegos gratis online', 'juegos html5', 'juegos sin descargar', 'juegos en español', 'juegos latam'],
  authors: [{ name: 'JuegaYa', url: 'https://juegaya.app' }],
  creator: 'JuegaYa',
  publisher: 'JuegaYa',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://juegaya.app',
    siteName: 'JuegaYa',
    title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
    description: 'Juega gratis los mejores juegos HTML5 en español. Sin registro, sin descargas.',
    images: [{ url: 'https://juegaya.app/og.jpg', width: 1200, height: 630, alt: 'JuegaYa' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@juegaya',
    title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
    description: 'Juega gratis los mejores juegos HTML5 en español.',
    images: ['https://juegaya.app/og.jpg'],
  },
  alternates: {
    canonical: 'https://juegaya.app',
    languages: {
      'es-MX': 'https://juegaya.app',
      'es-CO': 'https://juegaya.app',
      'es-PE': 'https://juegaya.app',
      'es-AR': 'https://juegaya.app',
      'es':    'https://juegaya.app',
      'x-default': 'https://juegaya.app',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'JuegaYa',
              url: 'https://juegaya.app',
              description: 'Plataforma de juegos HTML5 gratis en español para Latinoamérica',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://juegaya.app/juegos/?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
              inLanguage: 'es',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'JuegaYa',
              url: 'https://juegaya.app',
              sameAs: [
                'https://www.instagram.com/juegaya',
                'https://www.tiktok.com/@juegaya',
              ],
            }),
          }}
        />
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
