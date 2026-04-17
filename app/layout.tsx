import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'

const nunito = Nunito({ subsets: ['latin'], weight: ['400','600','700','800','900'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://juegaya.app'),
  title: { default: 'JuegaYa — Juegos Gratis Online Sin Descargar', template: '%s | JuegaYa' },
  description: 'JuegaYa es la plataforma de juegos HTML5 gratis más grande de Latinoamérica.',
  keywords: ['juegos gratis online', 'juegos html5', 'juegos sin descargar', 'juegos en español'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'es_MX', url: 'https://juegaya.app', siteName: 'JuegaYa',
    title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
    description: 'Juega gratis los mejores juegos HTML5 en español.',
    images: [{ url: 'https://juegaya.app/og.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${nunito.className} bg-[#111120] text-white flex min-h-screen`}>
        <Sidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </body>
    </html>
  )
}
