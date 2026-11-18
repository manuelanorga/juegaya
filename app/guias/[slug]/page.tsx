import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIAS, getGuia, palabras } from '@/lib/guias'
import { getGame } from '@/lib/games'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import AdUnit from '@/app/components/AdUnit'

export function generateStaticParams() {
  return GUIAS.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const g = getGuia(slug)
  if (!g) return {}
  return {
    title: g.seoTitle,
    description: g.description,
    alternates: { canonical: `/guias/${g.slug}` },
    openGraph: { type: 'article', title: g.title, description: g.description, url: `/guias/${g.slug}`, publishedTime: g.publishedAt },
  }
}

function fecha(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

export default async function GuiaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const g = getGuia(slug)
  if (!g) notFound()
  const juego = getGame(g.gameSlug)
  const url = `${SITE_URL}/guias/${g.slug}`
  const minutos = Math.max(1, Math.round(palabras(g) / 200))
  const otras = GUIAS.filter(x => x.slug !== g.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: g.title,
        description: g.description,
        datePublished: g.publishedAt,
        inLanguage: 'es',
        url,
        mainEntityOfPage: url,
        author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        ...(juego?.icon && { image: `${SITE_URL}${juego.icon}` }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Juegos', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE_URL}/guias` },
          { '@type': 'ListItem', position: 3, name: g.title, item: url },
        ],
      },
    ],
  }

  const Jugar = () => juego ? (
    <Link href={`/juego/${juego.slug}`} className="flex items-center gap-4 p-3 rounded-2xl bg-[#1e1e34] border border-yellow-400/30 hover:border-yellow-400/60 transition-colors my-8">
      {juego.icon && <img src={juego.icon} alt="" width={56} height={56} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />}
      <span className="min-w-0">
        <span className="block font-black">{juego.name}</span>
        <span className="block text-xs text-white/50">{juego.tagline}</span>
      </span>
      <span className="ml-auto flex-shrink-0 bg-yellow-400 text-black font-black text-xs px-4 py-2 rounded-full">¡Jugar!</span>
    </Link>
  ) : null

  const mitad = Math.ceil(g.secciones.length / 2)

  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <article className="max-w-3xl mx-auto px-4 md:px-8 pt-14 md:pt-10 pb-12">
        <div className="text-xs text-white/30 font-semibold mb-2">
          <Link href="/" className="hover:text-white transition-colors">Juegos</Link>
          <span className="mx-1">»</span>
          <Link href="/guias" className="hover:text-white transition-colors">Guías</Link>
        </div>
        <h1 className="text-2xl md:text-3xl font-black leading-tight mb-2">{g.title}</h1>
        <div className="text-xs text-white/35 mb-6">Publicado el {fecha(g.publishedAt)} · {minutos} min de lectura</div>

        <div className="text-[15px] text-white/70 leading-relaxed space-y-4">
          {g.intro.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <Jugar />

        {g.secciones.map((s, i) => (
          <section key={i} className="mt-8">
            <h2 className="text-lg md:text-xl font-black mb-3">{s.titulo}</h2>
            <div className="text-[15px] text-white/70 leading-relaxed space-y-4">
              {s.parrafos.map((p, j) => <p key={j}>{p}</p>)}
            </div>
            {s.lista && (
              <ul className="mt-4 space-y-2">
                {s.lista.map((item, j) => (
                  <li key={j} className="text-[15px] text-white/70 leading-relaxed flex gap-2">
                    <span className="text-yellow-400 flex-shrink-0">•</span>{item}
                  </li>
                ))}
              </ul>
            )}
            {i === mitad - 1 && <div className="mt-8"><AdUnit format="horizontal" /></div>}
          </section>
        ))}

        <Jugar />

        <nav className="mt-10">
          <h2 className="text-base font-black mb-3">Más guías</h2>
          <ul className="space-y-2">
            {otras.map(o => (
              <li key={o.slug}>
                <Link href={`/guias/${o.slug}`} className="text-sm text-yellow-400 hover:underline">{o.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </article>
    </div>
  )
}
