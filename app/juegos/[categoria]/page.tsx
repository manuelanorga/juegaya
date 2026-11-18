import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GAMES } from '@/lib/games'
import { CATEGORIAS, gamesForCategoria, esIndexable } from '@/lib/categorias'
import { CONTENIDO_CATEGORIAS } from '@/lib/categorias-contenido'
import { getVisitCounts, formatVisits } from '@/lib/stats'
import CategoriaView from './CategoriaView'

export const revalidate = 3600

export function generateStaticParams() {
  return Object.keys(CATEGORIAS).map(categoria => ({ categoria }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ categoria: string }> }
): Promise<Metadata> {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) return {}
  const title = /^Juegos/.test(cat.title) && !/Gratis/.test(cat.title) ? `${cat.title} Gratis Online` : cat.title
  return {
    title,
    description: cat.descriptionFull,
    alternates: { canonical: `/juegos/${categoria}` },
    openGraph: { title: `${title} | JuegaYa`, description: cat.description, url: `/juegos/${categoria}`, images: ['/og.jpg'] },
    // Pocos juegos, catálogo repetido o sin texto propio: útil para navegar, pero no para Google
    ...(!esIndexable(categoria, GAMES) && { robots: { index: false, follow: true } }),
  }
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) notFound()

  const propios = gamesForCategoria(categoria, GAMES)
  const juegos = propios.length > 0 ? propios : GAMES
  const { title, description, descriptionFull } = cat
  const counts = await getVisitCounts(juegos.map(g => g.slug))
  const visits: Record<string, string> = {}
  for (const g of juegos) {
    const label = formatVisits(counts[g.slug])
    if (label) visits[g.slug] = label
  }

  return <CategoriaView cat={{ title, description, descriptionFull }} juegos={juegos} visits={visits} contenido={CONTENIDO_CATEGORIAS[categoria]} />
}
