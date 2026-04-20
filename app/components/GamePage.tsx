'use client'
import { useEffect } from 'react'
import Link from 'next/link'

interface Game {
  slug: string
  name: string
  icon?: string | null
  iframeSrc: string
  category: string
  categorySlug: string
  rating: number
  votes: string
  players: string
  tags: string[]
  description: string
  tips: string[]
  faqs: { q: string; a: string }[]
  aspectRatio?: string
  fixedHeight?: string
}

const ALL_GAMES = [
  { slug: 'escape-vikingo',  name: 'El Escape del Vikingo', icon: '/juegos/escape-vikingo/icons/icon-256.png' },
  { slug: 'gelatinas-locas', name: 'Gelatinas Locas',       icon: '/juegos/gelatinas-locas/icons/icon-256.png' },
  { slug: 'cazador-zombies', name: 'Cazador de Zombies',    icon: '/juegos/cazador-zombies/icons/icon-256.png' },
  { slug: 'test-iq',         name: 'Test de IQ Latam',      icon: null },
  { slug: 'neon-bird',       name: 'Neon Bird',             icon: null },
  { slug: 'test-reflejos',   name: 'Test de Reflejos',      icon: null },
  { slug: 'corre-mi-bro',    name: 'Corre mi Bro',          icon: null },
]

const AdSlot = ({ size, label }: { size: string; label?: string }) => (
  <div className="rounded-xl bg-[#1e1e34] border border-dashed border-white/10 flex flex-col items-center justify-center gap-1 text-white/20 text-xs font-bold"
    style={{ minHeight: size === '728x90' ? '90px' : '250px', minWidth: size === '300x250' ? '300px' : undefined }}>
    <span className="text-lg opacity-30">📢</span>
    <span>{label || `Publicidad · ${size}`}</span>
  </div>
)

export default function GamePage({ game }: { game: Game }) {
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("jy_history") || "[]")
    const filtered = history.filter((s: string) => s !== game.slug)
    localStorage.setItem("jy_history", JSON.stringify([game.slug, ...filtered].slice(0, 5)))
  }, [game.slug])
  const related = ALL_GAMES.filter(g => g.slug !== game.slug)

  // Calcular valor numérico del aspect ratio para el max-width dinámico
  const arParts = (game.aspectRatio || '16/9').split('/').map(Number)
  const arValue = arParts[0] / arParts[1]

  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[52px]">
        <div className="px-3 h-full flex items-center gap-2">
          <Link href="/"><img src="/logo.png" alt="JuegaYa" className="h-36 w-auto" /></Link>
          <span className="text-white/20 hidden sm:block">›</span>
          <Link href={`/juegos/${game.categorySlug}`} className="text-sm text-white/40 hidden sm:block hover:text-white transition-colors">{game.category}</Link>
          <span className="text-white/20 hidden sm:block">›</span>
          <span className="text-sm text-white/70 truncate hidden sm:block">{game.name}</span>
          <div className="ml-auto">
            <button className="text-sm bg-[#25D366] text-white font-black px-3 py-1.5 rounded-full">💬 Compartir</button>
          </div>
        </div>
      </header>

      <div className="flex flex-col xl:flex-row xl:h-[calc(100vh-52px)]">

        {/* COLUMNA PRINCIPAL */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">

          {/* IFRAME — contain universal: el juego siempre cabe entero */}
          <div className="w-full bg-[#111120] flex items-center justify-center">
            <div style={game.fixedHeight
              ? { height: game.fixedHeight, width: '100%' }
              : {
                  width: '100%',
                  aspectRatio: game.aspectRatio || '16/9',
                  maxHeight: '80vh',
                  maxWidth: `calc(80vh * ${arValue})`,
                }
            }>
              <iframe
                src={game.iframeSrc}
                className="w-full h-full block"
                title={`${game.name} gratis online`}
                allow="fullscreen"
              />
            </div>
          </div>

          {/* BARRA DEBAJO DEL JUEGO */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-white/5">
            <div className="flex items-center gap-2 flex-shrink-0 mr-2">
              <div className="w-7 h-7 rounded-lg bg-yellow-400 flex items-center justify-center text-xs font-black text-black">J</div>
              <span className="font-black text-sm truncate max-w-[140px]">{game.name}</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">👍</button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">🤍</button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">💬</button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">🎵</button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white">⛶</button>
            </div>
          </div>

          {/* AD 728x90 — justo debajo de la barra */}
          <div className="px-3 py-2">
            <AdSlot size="728x90" />
          </div>

          {/* INFO */}
          <div className="p-4 space-y-4">
            <div>
              <h1 className="text-xl font-black mb-2">{game.name}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                <span>⭐ {game.rating} ({game.votes} votos)</span>
                <span>👥 {game.players} jugando</span>
                <span>🆓 Gratis</span>
                <span>📱 PC · Móvil</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {game.tags.map(tag => (
                <span key={tag} className="bg-white/5 border border-white/10 text-white/60 text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer hover:border-yellow-400/30 hover:text-white transition-all">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/60 text-sm leading-relaxed">{game.description}</p>

            {/* TIPS + AD 300x250 al lado */}
            {game.tips.length > 0 && (
              <div className="bg-[#1e1e34] rounded-xl border border-white/10 p-4">
                <div className="font-black text-sm mb-3">💡 Tips y trucos</div>
                <div className="flex gap-4 items-start">
                  <ul className="space-y-2 flex-1">
                    {game.tips.map((tip, i) => (
                      <li key={i} className="text-white/50 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-0.5 flex-shrink-0">•</span>{tip}
                      </li>
                    ))}
                  </ul>
                  <div className="flex-shrink-0">
                    <AdSlot size="300x250" label="Publicidad · 300×250" />
                  </div>
                </div>
              </div>
            )}

            {/* Juegos relacionados — mobile */}
            <div className="xl:hidden">
              <div className="font-black text-sm text-white/60 uppercase tracking-wider mb-3">Más juegos</div>
              <div className="grid grid-cols-2 gap-3">
                {related.slice(0, 6).map((g, i) => (
                  <Link key={i} href={`/juego/${g.slug}`} className="flex items-center gap-2 bg-[#1e1e34] border border-white/10 rounded-xl p-2.5 hover:border-yellow-400/20 transition-all group">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#262640] flex-shrink-0 flex items-center justify-center text-xl">
                      {g.icon ? <img src={g.icon} alt={g.name} className="w-full h-full object-cover" /> : '🎮'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-xs truncate group-hover:text-yellow-400 transition-colors">{g.name}</div>
                      <div className="text-[10px] text-white/40 mt-0.5">Jugar →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[#1e1e34] rounded-xl border border-white/10 p-4">
              <h2 className="font-black text-sm mb-4">Preguntas frecuentes</h2>
              <div className="space-y-4">
                {game.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <dt className="font-black text-sm mb-1">{faq.q}</dt>
                    <dd className="text-white/50 text-sm leading-relaxed">{faq.a}</dd>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SIDEBAR — desktop */}
        <div className="hidden xl:flex flex-col w-[300px] flex-shrink-0 border-l border-white/5 overflow-y-auto bg-[#0e0e1a]">

          {/* AD 300x250 — ARRIBA */}
          <div className="p-3 border-b border-white/5">
            <AdSlot size="300x250" label="Publicidad · 300×250" />
          </div>

          {/* Juegos relacionados */}
          <div className="p-2">
            <div className="font-black text-xs text-white/40 uppercase tracking-wider mb-3 px-2">Más juegos</div>
            {related.map((g, i) => (
              <Link key={i} href={`/juego/${g.slug}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#1e1e34] flex-shrink-0 flex items-center justify-center text-2xl">
                  {g.icon ? <img src={g.icon} alt={g.name} className="w-full h-full object-cover" /> : '🎮'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-black text-sm truncate group-hover:text-yellow-400 transition-colors">{g.name}</div>
                  <div className="text-xs text-white/40 mt-1">Jugar gratis →</div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}
