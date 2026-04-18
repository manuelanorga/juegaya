'use client'
import { useState } from 'react'
import { GAMES } from '@/lib/games'

const SECCIONES = [
  { slug: 'populares',    title: '🔥 Populares' },
  { slug: 'inteligencia', title: '🧠 Inteligencia' },
  { slug: 'virales',      title: '😂 Virales' },
  { slug: 'dificiles',    title: '🔥 Difíciles' },
  { slug: 'arcade',       title: '🕹️ Arcade' },
  { slug: 'puzzle',       title: '🧩 Puzzle' },
  { slug: 'rapidos',      title: '⚡ Rápidos' },
  { slug: 'accion',       title: '⚔️ Acción' },
]

const PREVIEW_VIDEOS: Record<string, string> = {
  'gelatinas-locas':      '/previews/gelatinas-locas.mp4',
  'cazador-zombies':      '/previews/cazador-zombies.mp4',
  'neon-bird':            '/previews/neon-bird.mp4',
  'cuanto-sabes-historia':'/previews/cuanto-sabes-historia.mp4',
}

const DEFAULT_DESTACADOS: Record<string, string> = {
  'populares':    'cuanto-sabes-historia',
  'inteligencia': 'test-iq',
  'virales':      'test-reflejos',
  'dificiles':    'cazador-zombies',
  'arcade':       'neon-bird',
  'puzzle':       'gelatinas-locas',
  'rapidos':      'test-reflejos',
  'accion':       'cazador-zombies',
}

export default function DestacadosPage() {
  const [destacados, setDestacados] = useState<Record<string, string>>(DEFAULT_DESTACADOS)
  const [saved, setSaved] = useState(false)

  function handleChange(seccion: string, slug: string) {
    setDestacados(prev => ({ ...prev, [seccion]: slug }))
    setSaved(false)
  }

  function handleSave() {
    localStorage.setItem('jy_destacados', JSON.stringify(destacados))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black">Juegos Destacados</h1>
          <p className="text-white/40 text-sm mt-1">Elige el juego destacado para cada sección del home</p>
        </div>
        <button
          onClick={handleSave}
          className={`px-6 py-2.5 rounded-full font-black text-sm transition-all ${saved ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}
        >
          {saved ? '✓ Guardado' : 'Guardar cambios'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SECCIONES.map(sec => {
          const selectedSlug = destacados[sec.slug]
          const selectedGame = GAMES.find(g => g.slug === selectedSlug)
          const video = PREVIEW_VIDEOS[selectedSlug]

          return (
            <div key={sec.slug} className="bg-[#1e1e34] rounded-2xl border border-white/5 overflow-hidden">
              {/* Preview */}
              <div className="relative h-[140px] bg-[#111120]">
                {video ? (
                  <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70" />
                ) : selectedGame?.icon ? (
                  <img src={selectedGame.icon} alt={selectedGame.name} className="w-full h-full object-cover opacity-70" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
                    {selectedGame?.emoji || '🎮'}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e34] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <div className="text-xs font-bold text-white/50 mb-0.5">{sec.title}</div>
                  <div className="font-black text-sm">{selectedGame?.name || '—'}</div>
                </div>
                {video && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                    VIDEO
                  </div>
                )}
              </div>

              {/* Selector */}
              <div className="p-4">
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2 block">
                  Juego destacado
                </label>
                <select
                  value={selectedSlug}
                  onChange={e => handleChange(sec.slug, e.target.value)}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm font-semibold text-white outline-none focus:border-yellow-400/50 transition-colors"
                >
                  {GAMES.map(game => (
                    <option key={game.slug} value={game.slug}>
                      {game.name} {PREVIEW_VIDEOS[game.slug] ? '🎬' : game.icon ? '🖼️' : '🎮'}
                    </option>
                  ))}
                </select>

                {/* Info del juego seleccionado */}
                {selectedGame && (
                  <div className="mt-3 flex items-center gap-3 bg-white/3 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#111120] flex-shrink-0 flex items-center justify-center">
                      {selectedGame.icon
                        ? <img src={selectedGame.icon} alt={selectedGame.name} className="w-full h-full object-cover" />
                        : <span className="text-xl">{selectedGame.emoji || '🎮'}</span>
                      }
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-black truncate">{selectedGame.name}</div>
                      <div className="text-xs text-white/40 mt-0.5 flex items-center gap-2">
                        <span>{selectedGame.category}</span>
                        {PREVIEW_VIDEOS[selectedGame.slug] && <span className="text-red-400 font-bold">• Video preview</span>}
                        {selectedGame.badge && <span className="text-yellow-400 font-bold">• {selectedGame.badge}</span>}
                      </div>
                    </div>
                    <div className="text-xs font-black text-white/30">⭐ {selectedGame.rating}</div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
