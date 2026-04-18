import type { Metadata } from 'next'
import Link from 'next/link'
import { GAMES, Game } from '@/lib/games'
import RecentGames from '@/app/components/RecentGames'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
  description: 'Juega gratis los mejores juegos HTML5 en español. Sin registro, sin descargas.',
}

const SECCIONES = [
  { title: '🔥 Populares',    slug: 'populares',    filter: () => true,                                                          destacado: 'cuanto-sabes-historia' },
  { title: '🧠 Inteligencia', slug: 'inteligencia', filter: (g: Game) => g.tags?.includes('IQ') || g.categorySlug === 'inteligencia', destacado: 'test-iq' },
  { title: '😂 Virales',      slug: 'virales',      filter: (g: Game) => g.tags?.includes('Viral') || g.badge === 'Viral',       destacado: 'test-reflejos' },
  { title: '🔥 Difíciles',    slug: 'dificiles',    filter: (g: Game) => (g.difficulty || 0) >= 68,                              destacado: 'cazador-zombies' },
  { title: '🕹️ Arcade',       slug: 'arcade',       filter: (g: Game) => g.categorySlug === 'arcade',                           destacado: 'neon-bird' },
  { title: '🧩 Puzzle',       slug: 'puzzle',       filter: (g: Game) => g.categorySlug === 'puzzle',                           destacado: 'gelatinas-locas' },
  { title: '⚡ Rápidos',      slug: 'rapidos',      filter: (g: Game) => g.tags?.includes('Mobile'),                            destacado: 'test-reflejos' },
  { title: '⚔️ Acción',       slug: 'accion',       filter: (g: Game) => g.categorySlug === 'accion',                           destacado: 'cazador-zombies' },
]

const PREVIEW_VIDEOS: Record<string, string> = {
  'gelatinas-locas': '/previews/gelatinas-locas.mp4',
  'neon-bird': '/previews/neon-bird.mp4',
  'cuanto-sabes-historia': '/previews/cuanto-sabes-historia.mp4',
  'cazador-zombies': '/previews/cazador-zombies.mp4',
}

function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/juego/${game.slug}`} className="flex-shrink-0 w-[140px] md:w-[160px] group">
      <div className={`w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'} relative`}>
        {game.icon
          ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          : <div className="w-full h-full flex items-center justify-center text-5xl">{game.emoji || '🎮'}</div>
        }
        {game.badge && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded">
            {game.badge}
          </span>
        )}
      </div>
      <div className="mt-2 px-0.5">
        <div className="font-black text-sm truncate">{game.name}</div>
        <div className="text-[11px] text-white/35 mt-0.5">⭐ +{game.players}</div>
      </div>
    </Link>
  )
}

function Destacado({ game }: { game: Game }) {
  const video = PREVIEW_VIDEOS[game.slug]
  return (
    <Link href={`/juego/${game.slug}`} className="group block mx-4 md:mx-6 mb-4 rounded-2xl overflow-hidden relative h-[160px] md:h-[200px] border border-white/5 hover:border-yellow-400/20 transition-all">
      <div className={`absolute inset-0 bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />

      {/* Video o imagen de fondo */}
      {video ? (
        <video src={video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60" />
      ) : game.icon ? (
        <img src={game.icon} alt={game.name} className="absolute right-0 top-0 h-full w-auto object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[80px] opacity-60">{game.emoji || '🎮'}</div>
      )}

      {/* Info */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20">
        {game.badge && (
          <span className="inline-block bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded mb-2">
            {game.badge}
          </span>
        )}
        <div className="font-black text-lg md:text-xl mb-1">{game.name}</div>
        <div className="text-white/50 text-xs mb-3">{game.description?.slice(0, 60)}...</div>
        <span className="inline-block bg-yellow-400 text-black font-black text-xs px-4 py-1.5 rounded-full group-hover:scale-105 transition-transform">
          ¡Jugar ahora!
        </span>
      </div>
    </Link>
  )
}

function Seccion({ title, slug, games, destacadoSlug }: { title: string; slug: string; games: Game[]; destacadoSlug: string }) {
  const mostrar = games.length > 0 ? games : GAMES
  const destacado = GAMES.find(g => g.slug === destacadoSlug) || mostrar[0]
  const resto = mostrar.filter(g => g.slug !== destacado?.slug)

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-3 px-4 md:px-6">
        <h2 className="text-base font-black">{title}</h2>
        <Link href={`/juegos/${slug}`} className="text-xs font-bold text-yellow-400 hover:underline">Ver todo →</Link>
      </div>

      {/* Destacado */}
      {destacado && <Destacado game={destacado} />}

      {/* Scroll horizontal */}
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 md:px-6 scrollbar-hide">
        {resto.slice(0, 10).map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </section>
  )
}

export default async function Home() {
  const { data: destacadosData } = await supabase.from('destacados').select('*')
  const destacadosMap: Record<string, string> = {}
  if (destacadosData) destacadosData.forEach((d: any) => { destacadosMap[d.seccion] = d.game_slug })
  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[52px]">
        <div className="px-4 md:px-6 h-full flex items-center gap-4">
          <img src="/logo.png" alt="JuegaYa" className="h-28 w-auto" />
          <div className="flex-1 max-w-md">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="text-white/30 text-sm">🔍</span>
              <input type="text" placeholder="Buscar juegos..." className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full" />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-3 py-1.5">
            <span>🪙</span>
            <span className="text-sm font-black text-yellow-400">0</span>
          </div>
        </div>
      </header>

      {/* SEGUIR JUGANDO */}
      <div className="pt-4">
        <RecentGames />
      </div>

      {/* SECCIONES */}
      <div className="py-2">
        {SECCIONES.map((sec, i) => {
          const games = GAMES.filter(sec.filter)
          return <Seccion key={i} title={sec.title} slug={sec.slug} games={games} destacadoSlug={destacadosMap[sec.slug] || sec.destacado} />
        })}
      </div>

      {/* PROMO */}
      <div className="px-4 md:px-6 mb-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#1a1200] to-[#2a1800] border border-yellow-400/20 p-5 flex items-center gap-4">
          <span className="text-3xl">🏆</span>
          <div>
            <div className="font-black text-yellow-400">¡Sube de Nivel y Gana Premios! 🚀</div>
            <div className="text-xs text-white/40 mt-0.5">Cada semana recompensamos a los mejores jugadores</div>
          </div>
        </div>
      </div>

      {/* AD */}
      <div className="px-4 md:px-6 mb-8">
        <div className="rounded-2xl bg-[#1e1e34] border border-dashed border-white/8 h-[90px] flex items-center justify-center gap-3 text-white/25 text-sm font-bold">
          <span>📢</span><span>Publicidad · Google AdSense</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0e0e1a] py-6 px-4 md:px-6">
        <div className="flex flex-wrap gap-4 text-xs text-white/30 font-semibold mb-3">
          <span className="cursor-pointer hover:text-white">Sobre nosotros</span>
          <span className="cursor-pointer hover:text-white">Contacto</span>
          <span className="cursor-pointer hover:text-white">Términos</span>
          <span className="cursor-pointer hover:text-white">Privacidad</span>
          <span className="ml-auto">🇪🇸 Español</span>
        </div>
      </footer>

    </div>
  )
}
