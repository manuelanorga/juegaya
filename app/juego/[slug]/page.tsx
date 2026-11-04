import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GAMES, getGame, getAllSlugs, type Game } from '@/lib/games'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import { getVisitCounts, formatVisits } from '@/lib/stats'
import GamePage from '@/app/components/GamePage'

export const revalidate = 3600

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

// Recorta en el último espacio para que la meta descripción no supere ~155 caracteres
function metaDescription(text: string, max = 155) {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:]$/, '') + '…'
}

function gameImage(game: Game) {
  return game.icon ?? '/og.jpg'
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return {}
  const title = `${game.name} — Jugar Gratis Online`
  const description = metaDescription(game.description)
  const url = `/juego/${game.slug}`
  return {
    title,
    description,
    keywords: game.tags.map(t => t.toLowerCase()),
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      images: [{ url: gameImage(game), alt: game.name }],
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

function jsonLd(game: Game) {
  const url = `${SITE_URL}/juego/${game.slug}`
  const graph: object[] = [
    {
      '@type': 'VideoGame',
      '@id': `${url}#game`,
      name: game.name,
      description: game.description,
      url,
      image: new URL(gameImage(game), SITE_URL).toString(),
      genre: game.category,
      keywords: game.tags.join(', '),
      inLanguage: 'es',
      gamePlatform: 'Navegador web',
      applicationCategory: 'Game',
      operatingSystem: 'Any',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Juegos', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: game.category, item: `${SITE_URL}/juegos/${game.categorySlug}` },
        { '@type': 'ListItem', position: 3, name: game.name, item: url },
      ],
    },
  ]
  if (game.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: game.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) notFound()
  const counts = await getVisitCounts([game.slug])
  // Primero los de su categoría; así cada juego enlaza a todos los demás
  const related = GAMES
    .filter(g => g.slug !== game.slug)
    .sort((a, b) => Number(b.categorySlug === game.categorySlug) - Number(a.categorySlug === game.categorySlug))
    .map(({ slug, name, icon, emoji }) => ({ slug, name, icon, emoji }))
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(game)).replace(/</g, '\\u003c') }}
      />
      <GamePage game={game} visits={formatVisits(counts[game.slug])} related={related} />
    </>
  )
}
