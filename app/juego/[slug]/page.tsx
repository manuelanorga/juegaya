import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGame, getAllSlugs } from '@/lib/games'
import GamePage from '@/app/components/GamePage'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return {}
  return {
    title: `${game.name} — Jugar Gratis Online | JuegaYa`,
    description: `Juega ${game.name} gratis online en español. Sin descargar, sin registro.`,
    keywords: game.tags.map(t => t.toLowerCase()),
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) notFound()
  return <GamePage game={game} />
}
