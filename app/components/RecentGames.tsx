'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GAMES } from '@/lib/games'

export default function RecentGames() {
  const [recent, setRecent] = useState<any[]>([])

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('jy_history') || '[]')
    const games = history
      .map((slug: string) => GAMES.find(g => g.slug === slug))
      .filter(Boolean)
    setRecent(games)
  }, [])

  if (recent.length === 0) return null

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3 px-4 md:px-6">
        <h2 className="text-base font-black">▶️ Seguir jugando</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 px-4 md:px-6 scrollbar-hide">
        {recent.map((game, i) => (
          <Link key={i} href={`/juego/${game.slug}`} className="flex-shrink-0 w-[140px] md:w-[160px] group">
            <div className={`w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'} relative`}>
              {game.icon
                ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                : <div className="w-full h-full flex items-center justify-center text-5xl">{game.emoji || '🎮'}</div>
              }
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-3xl">▶️</span>
              </div>
            </div>
            <div className="mt-2 px-0.5">
              <div className="font-black text-sm truncate">{game.name}</div>
              <div className="text-[11px] text-yellow-400/70 mt-0.5 font-semibold">Continuar →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
