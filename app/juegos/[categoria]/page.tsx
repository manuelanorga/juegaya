import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GAMES } from '@/lib/games'
import { CATEGORIAS, gamesForCategoria } from '@/lib/categorias'
import CategoriaView from './CategoriaView'

export function generateStaticParams() {
  return Object.keys(CATEGORIAS).map(categoria => ({ categoria }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ categoria: string }> }
): Promise<Metadata> {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) return {}
  const vacia = gamesForCategoria(categoria, GAMES).length === 0
  const title = /^Juegos/.test(cat.title) && !/Gratis/.test(cat.title) ? `${cat.title} Gratis Online` : cat.title
  return {
    title,
    description: cat.descriptionFull,
    alternates: { canonical: `/juegos/${categoria}` },
    openGraph: { title: `${title} | JuegaYa`, description: cat.description, url: `/juegos/${categoria}`, images: ['/og.jpg'] },
    // Sin juegos propios mostraría el catálogo completo: contenido duplicado
    ...(vacia && { robots: { index: false, follow: true } }),
  }
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) notFound()

  const propios = gamesForCategoria(categoria, GAMES)
  const juegos = propios.length > 0 ? propios : GAMES
  const { title, description, descriptionFull } = cat

  return <CategoriaView cat={{ title, description, descriptionFull }} juegos={juegos} />
}
