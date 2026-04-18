import type { Metadata } from 'next'
import Link from 'next/link'
import { GAMES } from '@/lib/games'

export const metadata: Metadata = {
  title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
  description: 'Juega gratis los mejores juegos HTML5 en español. Sin registro, sin descargas.',
}

const SECCIONES = [
  { title: '🔥 Populares',      slug: 'populares',    filter: () => true },
  { title: '🧠 Inteligencia',   slug: 'inteligencia', filter: (g: any) => g.tags?.includes('IQ') || g.categorySlug === 'inteligencia' },
  { title: '😂 Virales',        slug: 'virales',      filter: (g: any) => g.tags?.includes('Viral') || g.badge === 'Viral' },
  { title: '🔥 Difíciles',      slug: 'dificiles',    filter: (g: any) => (g.difficulty || 0) >= 68 },
  { title: '🕹️ Arcade',         slug: 'arcade',       filter: (g: any) => g.categorySlug === 'arcade' },
  { title: '🧩 Puzzle',         slug: 'puzzle',       filter: (g: any) => g.categorySlug === 'puzzle' },
  { title: '⚡ Rápidos',        slug: 'rapidos',      filter: (g: any) => g.tags?.includes('Mobile') },
  { title: '⚔️ Acción',         slug: 'accion',       filter: (g: any) => g.categorySlug === 'accion' },
]

function GameCard({ game }: { game: any }) {
  return (
    <Link
      href={`/juego/${game.slug}`}
      className="flex-shrink-0 w-[140px] md:w-[160px] group"
    >
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

function Seccion({ title, slug, games }: { title: string; slug: string; games: any[] }) {
  const mostrar = games.length > 0 ? games : GAMES
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4 md:px-6">
        <h2 className="text-base font-black">{title}</h2>
        <Link href={`/juegos/${slug}`} className="text-xs font-bold text-yellow-400 hover:underline">
          Ver todo →
        </Link>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 md:px-6 scrollbar-hide">
        {mostrar.slice(0, 10).map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[52px]">
        <div className="px-4 md:px-6 h-full flex items-center gap-4">
          <img src="/logo.png" alt="JuegaYa" className="h-8 w-auto" />
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

      {/* HERO */}
      <div className="px-4 md:px-6 py-4">
        <div className="relative rounded-2xl overflow-hidden h-[200px] md:h-[240px] border border-orange-500/15 bg-gradient-to-br from-[#1a0020] via-[#2d0015] to-[#1a1000]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,60,0,0.2),transparent_50%)]" />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-2">
              🔥 El 97% falla<br />
              <span className="text-yellow-400">este juego...</span>
            </h1>
            <p className="text-base font-black text-yellow-400 mb-4">¿y tú?</p>
            <Link href="/juego/test-iq" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-6 py-2.5 rounded-full text-sm">
              ¡JUGAR AHORA!
            </Link>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[80px] md:text-[100px] leading-none">🧠</div>
        </div>
      </div>

      {/* SECCIONES */}
      <div className="py-2">
        {SECCIONES.map((sec, i) => {
          const games = GAMES.filter(sec.filter)
          return <Seccion key={i} title={sec.title} slug={sec.slug} games={games} />
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
