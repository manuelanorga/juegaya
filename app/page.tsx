import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'JuegaYa — Juegos Gratis Online Sin Descargar',
  description: 'Juega gratis los mejores juegos HTML5 en español. Sin registro, sin descargas.',
}

const GAMES = [
  { slug: 'escape-vikingo', name: 'El Escape del Vikingo', description: 'Ayuda al vikingo a escapar de sus enemigos', emoji: '🪖', icon: '/juegos/escape-vikingo/icons/icon-256.png', difficulty: 68, players: '7,650', color: 'from-orange-900 to-yellow-900', badge: 'Nuevo' },
  { slug: 'gelatinas-locas', name: 'Gelatinas Locas', description: 'Combina 3 y supera todos los niveles', emoji: '🍬', icon: '/juegos/gelatinas-locas/icons/icon-256.png', difficulty: 45, players: '11,430', color: 'from-pink-900 to-purple-900', badge: 'Nuevo' },
  { slug: 'cazador-zombies', name: 'Cazador de Zombies', description: 'Elimina hordas de zombies — 20 niveles', emoji: '🧟', icon: '/juegos/cazador-zombies/icons/icon-256.png', difficulty: 75, players: '9,240', color: 'from-green-900 to-gray-900', badge: 'Nuevo' },
  { slug: 'test-iq', name: 'Test de IQ Latam', description: '¿Eres más inteligente que el 97%?', emoji: '🧠', icon: null, difficulty: 85, players: '15,020', color: 'from-purple-900 to-pink-900', badge: 'Viral' },
  { slug: 'neon-bird', name: 'Neon Bird', description: 'Esquiva los obstáculos y sube al ranking', emoji: '🐦', icon: null, difficulty: 58, players: '12,380', color: 'from-blue-900 to-purple-900', badge: 'Popular' },
  { slug: 'test-reflejos', name: 'Test de Reflejos', description: '¿Tus reflejos son de élite o de abuelo?', emoji: '⚡', icon: null, difficulty: 70, players: '8,430', color: 'from-yellow-900 to-orange-900', badge: 'Nuevo' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px]">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center gap-6">
        <div className="text-2xl font-black text-yellow-400">JUÉGAYA</div>
        <div className="flex-1 max-w-md mx-auto">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="text-white/30">🔍</span>
            <input type="text" placeholder="Buscar juegos..." className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full" />
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-3 py-1.5">
          <span>🪙</span>
          <span className="text-sm font-black text-yellow-400">0</span>
        </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <main>
          <div className="relative rounded-2xl overflow-hidden h-[240px] mb-8 border border-orange-500/15 bg-gradient-to-br from-[#1a0020] via-[#2d0015] to-[#1a1000]">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10">
              <h1 className="text-3xl font-black leading-tight mb-2">
                🔥 El 97% falla<br />
                <span className="text-yellow-400">este juego...</span>
              </h1>
              <p className="text-lg font-black text-yellow-400 mb-5">¿y tú?</p>
              <Link href="/juego/neon-bird" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-8 py-3 rounded-full">
                ¡JUGAR AHORA!
              </Link>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[120px] leading-none animate-bounce">🧠</div>
          </div>

          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black">Juegos populares</h2>
              <span className="text-xs text-white/40">👥 11,155</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {GAMES.map((game, i) => (
                <Link key={i} href={`/juego/${game.slug}`} className="flex-shrink-0 w-[200px] bg-[#1e1e34] rounded-2xl border border-white/10 overflow-hidden hover:-translate-y-1 transition-all group">
                  <div className={`h-[130px] bg-gradient-to-br ${game.color} flex items-center justify-center relative`}>
                    {game.icon
  ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
  : <span className="text-[60px] group-hover:scale-110 transition-transform">{game.emoji}</span>
}
                    <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[11px] font-black px-2 py-0.5 rounded">{game.difficulty}%</span>
                    <span className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{game.badge}</span>
                  </div>
                  <div className="p-3">
                    <div className="font-black text-sm mb-1">{game.name}</div>
                    <div className="text-[11px] text-white/40 mb-2">{game.description}</div>
                    <div className="text-[11px] text-white/40">⭐ +{game.players} Jugando</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="rounded-2xl bg-gradient-to-r from-[#1a1200] to-[#2a1800] border border-yellow-400/20 p-5 flex items-center gap-4 mb-8">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="font-black text-yellow-400">¡Sube de Nivel y Gana Premios! 🚀</div>
              <div className="text-xs text-white/40 mt-0.5">Cada semana recompensamos a los mejores jugadores</div>
            </div>
          </div>
        </main>

        <aside className="flex flex-col gap-4">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <span className="font-black text-sm">Ranking Semanal 🔥</span>
              <span className="text-xs font-bold text-yellow-400">Ver todo ›</span>
            </div>
            {[
              { pos: '1', name: 'CarloPro',   pts: '3,555', color: 'text-yellow-400' },
              { pos: '2', name: 'AnitaGamer', pts: '3,410', color: 'text-slate-300' },
              { pos: '3', name: 'LuisCrack',  pts: '3,250', color: 'text-orange-400' },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5">
                <span className={`text-sm font-black w-4 ${r.color}`}>{r.pos}</span>
                <span>🪙</span>
                <span className="flex-1 text-sm font-bold">{r.name}</span>
                <span className="text-xs font-black text-yellow-400">🪙 {r.pts}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/10 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <span className="font-black text-sm">🗂️ Categorías</span>
            </div>
            <div className="grid grid-cols-2 gap-2 p-3">
              {[
                { name: 'Arcade',       emoji: '👾', bg: 'from-blue-900 to-indigo-900',  count: '+4,550' },
                { name: 'Inteligencia', emoji: '🧠', bg: 'from-purple-900 to-pink-900', count: '+18,310' },
              ].map((cat, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-yellow-400/20 transition-all">
                  <div className={`h-16 bg-gradient-to-br ${cat.bg} flex items-center justify-center text-3xl`}>{cat.emoji}</div>
                  <div className="bg-[#262640] px-3 py-2">
                    <div className="text-xs font-black">{cat.name}</div>
                    <div className="text-[10px] text-white/40">{cat.count} Jugando</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
