import type { Metadata } from 'next'
import Link from 'next/link'
import { GAMES, gameBadge, type Game } from '@/lib/games'
import RecentGames from '@/app/components/RecentGames'
import AdUnit from '@/app/components/AdUnit'
import SearchBox from '@/app/components/SearchBox'
import LazyVideo from '@/app/components/LazyVideo'
import { getVisitCounts, formatVisits } from '@/lib/stats'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: { absolute: 'JuegaYa — Juegos Gratis Online Sin Descargar' },
  description: 'Juega gratis los mejores juegos HTML5 en español. Sin registro, sin descargas.',
  alternates: { canonical: '/' },
}

const isDaily = (g: Game) => g.tags?.includes('Diario')

// Cada sección se puede cambiar desde el panel, en "Juegos Destacados"
const SECCIONES = [
  { title: '🧩 Puzzles e ingenio', slug: 'puzzle', destacado: 'gelatinas-locas',
    filter: (g: Game) => !isDaily(g) && ['puzzle', 'inteligencia'].includes(g.categorySlug) },
  { title: '⚔️ Acción y arcade', slug: 'accion', destacado: 'cazador-zombies',
    filter: (g: Game) => !isDaily(g) && ['accion', 'aventura', 'arcade', 'habilidad'].includes(g.categorySlug) },
]

const PREVIEW_VIDEOS: Record<string, string> = {
  'gelatinas-locas': '/previews/gelatinas-locas.mp4',
  'neon-bird': '/previews/neon-bird.mp4',
  'cazador-zombies': '/previews/cazador-zombies.mp4',
}

function Badge({ game, className = '' }: { game: Game; className?: string }) {
  const badge = gameBadge(game)
  if (!badge) return null
  return <span className={`bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded ${className}`}>{badge}</span>
}

function GameCard({ game, visits, fluid }: { game: Game; visits: string | null; fluid?: boolean }) {
  return (
    <Link href={`/juego/${game.slug}`} className={`group ${fluid ? 'block min-w-0' : 'flex-shrink-0 w-[140px] md:w-[160px]'}`}>
      <div className={`w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'} relative`}>
        {game.icon
          ? <img src={game.icon} alt={game.name} width={256} height={256} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          : <div className="w-full h-full flex items-center justify-center text-5xl">{game.emoji || '🎮'}</div>
        }
        <Badge game={game} className="absolute top-2 left-2" />
      </div>
      <div className="mt-2 px-0.5">
        <div className="font-black text-sm truncate">{game.name}</div>
        <div className="text-[11px] text-white/35 mt-0.5 truncate">{visits ? `👁 ${visits}` : game.category}</div>
      </div>
    </Link>
  )
}

function RetoCard({ game }: { game: Game }) {
  return (
    <Link href={`/juego/${game.slug}`} className="group flex items-center gap-3 p-2.5 rounded-2xl bg-[#1e1e34] border border-white/5 hover:border-yellow-400/40 transition-colors min-w-0">
      <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl overflow-hidden relative bg-[#262640]">
        {game.icon && <img src={game.icon} alt={game.name} width={256} height={256} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />}
      </div>
      <div className="min-w-0">
        <div className="font-black text-[13px] md:text-sm leading-tight line-clamp-2">{game.name}</div>
        <div className="text-[11px] font-black text-yellow-400 mt-1">¡Jugar! →</div>
      </div>
    </Link>
  )
}

function Destacado({ game }: { game: Game }) {
  const video = PREVIEW_VIDEOS[game.slug]
  return (
    <Link href={`/juego/${game.slug}`} className="group block mx-4 md:mx-6 mb-4 rounded-2xl overflow-hidden relative h-[150px] md:h-[190px] border border-white/10 hover:border-yellow-400/40 transition-colors">
      <div className={`absolute inset-0 bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'}`} />
      {game.icon && (
        <img src={game.icon} alt="" width={256} height={256} loading="lazy" decoding="async" className="absolute right-0 top-0 h-full w-auto object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
      )}
      {video && <LazyVideo src={video} className="absolute inset-0 w-full h-full object-cover opacity-60" />}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute left-5 right-5 top-1/2 -translate-y-1/2">
        <Badge game={game} className="inline-block mb-2" />
        <div className="font-black text-lg md:text-xl mb-1">{game.name}</div>
        <div className="text-white/70 text-xs mb-3 max-w-[70%]">{game.tagline}</div>
        <span className="inline-block bg-yellow-400 text-black font-black text-xs px-4 py-1.5 rounded-full group-hover:scale-105 transition-transform">
          ¡Jugar ahora!
        </span>
      </div>
    </Link>
  )
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mb-3 px-4 md:px-6">
      <h2 className="text-base font-black">{title}</h2>
      {href && <Link href={href} className="text-xs font-bold text-yellow-400 hover:underline">Ver todo →</Link>}
    </div>
  )
}

function Seccion({ title, slug, games, destacadoSlug, visits }: { title: string; slug: string; games: Game[]; destacadoSlug: string; visits: Record<string, number> }) {
  const destacado = GAMES.find(g => g.slug === destacadoSlug) ?? games[0]
  const resto = games.filter(g => g.slug !== destacado?.slug)
  return (
    <section className="mb-9">
      <SectionHeader title={title} href={`/juegos/${slug}`} />
      {destacado && <Destacado game={destacado} />}
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 md:px-6 scrollbar-hide">
        {resto.map(game => <GameCard key={game.slug} game={game} visits={formatVisits(visits[game.slug])} />)}
      </div>
    </section>
  )
}

// Recalcula destacados y visitas reales como máximo una vez por hora
export const revalidate = 3600

export default async function Home() {
  const [{ data: destacadosData }, visits] = await Promise.all([
    supabase.from('destacados').select('*'),
    getVisitCounts(GAMES.map(g => g.slug)),
  ])
  const destacadosMap: Record<string, string> = {}
  if (destacadosData) destacadosData.forEach((d: { seccion: string; game_slug: string }) => { destacadosMap[d.seccion] = d.game_slug })

  const byVisits = (a: Game, b: Game) => (visits[b.slug] ?? 0) - (visits[a.slug] ?? 0)
  const retos = GAMES.filter(isDaily).sort(byVisits)
  const populares = GAMES.filter(g => !isDaily(g)).sort(byVisits).slice(0, 6)

  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[52px]">
        <div className="pl-14 pr-4 md:px-6 h-full flex items-center gap-4">
          <img src="/logo.png" alt="JuegaYa" className="h-28 w-auto" />
          <div className="flex-1 max-w-md">
            <SearchBox games={GAMES.map(({ slug, name, category, tags, icon, emoji }) => ({ slug, name, category, tags, icon, emoji }))} />
          </div>
        </div>
      </header>

      {/* PRESENTACIÓN */}
      <div className="px-4 md:px-6 pt-5 pb-4">
        <h1 className="text-xl md:text-2xl font-black leading-tight">Juegos gratis online en español</h1>
        <p className="text-sm text-white/50 mt-1">Sin descargar y sin registro. Retos nuevos cada día.</p>
      </div>

      {/* RETOS DE HOY */}
      <section className="mb-8">
        <SectionHeader title="🎯 Retos de hoy" href="/juegos/diarios" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 px-4 md:px-6">
          {retos.map(game => <RetoCard key={game.slug} game={game} />)}
        </div>
      </section>

      {/* SEGUIR JUGANDO */}
      <RecentGames />

      {/* POPULARES */}
      <Seccion title="🔥 Populares" slug="populares" games={populares} visits={visits}
        destacadoSlug={destacadosMap.populares ?? populares[0]?.slug} />

      {/* AD — tras la primera sección completa */}
      <div className="px-4 md:px-6 mb-8">
        <AdUnit format="horizontal" />
      </div>

      {SECCIONES.map(sec => (
        <Seccion key={sec.slug} title={sec.title} slug={sec.slug} games={GAMES.filter(sec.filter)} visits={visits}
          destacadoSlug={destacadosMap[sec.slug] ?? sec.destacado} />
      ))}

      {/* TODOS LOS JUEGOS */}
      <section className="mb-9">
        <SectionHeader title="🎮 Todos los juegos" />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 px-4 md:px-6">
          {GAMES.map(game => <GameCard key={game.slug} game={game} visits={null} fluid />)}
        </div>
      </section>

      {/* TEXTO PARA QUIEN QUIERA SABER MÁS (Y PARA BUSCADORES) */}
      <section className="px-4 md:px-6 mb-8 max-w-3xl">
        <h2 className="text-base font-black mb-2">Juegos online sin descargar</h2>
        <p className="text-sm text-white/50 leading-relaxed">
          JuegaYa reúne juegos gratis para jugar directo en el navegador, desde el celular o la computadora, sin instalar nada ni crear una cuenta.
          Cada día puedes resolver un reto nuevo en los <Link href="/juegos/diarios" className="text-yellow-400 hover:underline">juegos diarios</Link>,
          como Palabro o la Sopa de Letras del Día, y comparar tu resultado con el de otros jugadores.
          También encontrarás <Link href="/juegos/puzzle" className="text-yellow-400 hover:underline">juegos de puzzle</Link> como Bloques Locos y Flechas Locas,
          {' '}<Link href="/juegos/inteligencia" className="text-yellow-400 hover:underline">juegos de inteligencia</Link> y{' '}
          <Link href="/juegos/accion" className="text-yellow-400 hover:underline">juegos de acción</Link>, con partidas cortas para cualquier momento.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0e0e1a] py-6 px-4 md:px-6">
        <div className="flex flex-wrap gap-4 text-xs text-white/30 font-semibold">
          <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link>
          <Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link>
          <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
          <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          <span className="ml-auto">Español</span>
        </div>
      </footer>

    </div>
  )
}
