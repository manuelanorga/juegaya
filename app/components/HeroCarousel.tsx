'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { GAMES } from '@/lib/games'

const DESTACADOS = [
  { slug: 'test-iq',         label: '🔥 Viral',    tagline: 'El 97% falla este test...', sub: '¿Eres del 3% restante?',     cta: '¡Demostrar ahora!' },
  { slug: 'cazador-zombies', label: '💥 Acción',   tagline: 'Sobrevive la horda zombie', sub: '20 niveles. Sin piedad.',     cta: '¡Jugar gratis!' },
  { slug: 'gelatinas-locas', label: '🧩 Puzzle',   tagline: 'Combina y supera records',  sub: 'El puzzle más adictivo.',    cta: '¡Empezar!' },
  { slug: 'neon-bird',       label: '⚡ Arcade',   tagline: 'Reflejos de élite',         sub: '¿Cuánto aguantas?',          cta: '¡Volar ahora!' },
  { slug: 'test-reflejos',   label: '🧠 Test',     tagline: '¿Más rápido que el 95%?',  sub: 'Mide tu tiempo de reacción.', cta: '¡Medir reflejos!' },
]

const COLORS = [
  'from-[#2d0015] via-[#1a0020] to-[#0a0015]',
  'from-[#0a1500] via-[#001a0a] to-[#001510]',
  'from-[#1a0020] via-[#200015] to-[#150010]',
  'from-[#00101a] via-[#001520] to-[#000a15]',
  'from-[#1a1000] via-[#201500] to-[#150a00]',
]

const GLOWS = [
  'rgba(255,0,80,0.15)',
  'rgba(0,255,100,0.1)',
  'rgba(180,0,255,0.15)',
  'rgba(0,150,255,0.12)',
  'rgba(255,180,0,0.12)',
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = (index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }

  const next = () => goTo((current + 1) % DESTACADOS.length)

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(next, 4000)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [current, isHovered])

  const item = DESTACADOS[current]
  const game = GAMES.find(g => g.slug === item.slug)
  if (!game) return null

  return (
    <div className="px-4 md:px-6 pb-2">
      <div
        className={`relative rounded-2xl overflow-hidden h-[220px] md:h-[260px] bg-gradient-to-br ${COLORS[current]} transition-all duration-500`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow background */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ background: `radial-gradient(ellipse at 20% 50%, ${GLOWS[current]}, transparent 60%)` }}
        />

        {/* Contenido */}
        <div className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${animating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}`}>
          <span className="inline-block bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 text-[11px] font-black px-3 py-1 rounded-full mb-3">
            {item.label}
          </span>
          <h2 className="text-2xl md:text-3xl font-black leading-tight mb-1 max-w-[220px]">
            {item.tagline}
          </h2>
          <p className="text-white/50 text-sm mb-4">{item.sub}</p>
          <Link
            href={`/juego/${item.slug}`}
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black px-6 py-2.5 rounded-full text-sm hover:scale-105 transition-transform"
          >
            {item.cta}
          </Link>
        </div>

        {/* Imagen/Preview del juego */}
        <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${animating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {game.icon ? (
            <div className="relative">
              <div className="absolute inset-0 blur-2xl opacity-40 scale-110" style={{ background: GLOWS[current] }} />
              <img
                src={game.icon}
                alt={game.name}
                className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-2xl object-cover shadow-2xl relative z-10"
              />
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20" />
            </div>
          ) : (
            <div className="text-[90px] md:text-[110px] leading-none filter drop-shadow-2xl">
              {game.emoji || '🎮'}
            </div>
          )}
        </div>

        {/* Dots navegación */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {DESTACADOS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-yellow-400'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Flechas */}
        <button
          onClick={() => goTo((current - 1 + DESTACADOS.length) % DESTACADOS.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all z-20"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all z-20"
        >
          ›
        </button>

        {/* Barra de progreso */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            key={current}
            className="h-full bg-yellow-400"
            style={{ animation: isHovered ? 'none' : 'progress 4s linear forwards' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  )
}
