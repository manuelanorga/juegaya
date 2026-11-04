'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import AdUnit from './AdUnit'
import { trackPlay } from '@/lib/tracking'

interface Game {
  slug: string
  name: string
  icon?: string | null
  iframeSrc: string
  category: string
  categorySlug: string
  tags: string[]
  description: string
  tips: string[]
  faqs: { q: string; a: string }[]
  /** Guía "Cómo jugar": objetivo, controles y estrategia (texto propio para cada juego) */
  guide?: { objetivo: string; controles: string; estrategia: string }
  aspectRatio?: string
  fixedHeight?: string
}

const injectResponsiveCSS = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
  try {
    const doc = (e.target as HTMLIFrameElement).contentDocument;
    if (doc) {
      const s = doc.createElement('style');
      s.textContent = 'html,body{height:100%!important;min-height:0!important}';
      doc.head.appendChild(s);
    }
  } catch(_){}
}

export interface RelatedGame { slug: string; name: string; icon: string | null; emoji?: string }

export default function GamePage({ game, visits, related }: { game: Game; visits: string | null; related: RelatedGame[] }) {
  // Menú nativo de compartir en móvil; en escritorio, WhatsApp Web
  async function share() {
    const url = `${window.location.origin}/juego/${game.slug}`
    const text = `¡Juega ${game.name} gratis en JuegaYa!`
    if (navigator.share) {
      try { await navigator.share({ title: game.name, text, url: `${url}?utm_source=compartido` }); return } catch { return }
    }
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}?utm_source=whatsapp`)}`, '_blank', 'noopener')
  }

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("jy_history") || "[]")
    const filtered = history.filter((s: string) => s !== game.slug)
    localStorage.setItem("jy_history", JSON.stringify([game.slug, ...filtered].slice(0, 5)))
  }, [game.slug])

  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Partida iniciada: primera interacción dentro del juego. Abrir la página sin jugar no cuenta.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const EVENTS = ['pointerdown', 'touchstart', 'keydown']
    let played = false
    let win: Window | null = null
    const detach = () => EVENTS.forEach(ev => win?.removeEventListener(ev, onPlay, true))
    function onPlay() {
      detach()
      if (played) return
      played = true
      trackPlay(game.slug)
    }
    function attach() {
      if (played) return
      detach()
      win = iframe!.contentWindow
      // En captura: el juego no puede ocultarnos el evento aunque detenga su propagación
      EVENTS.forEach(ev => win?.addEventListener(ev, onPlay, true))
    }
    iframe.addEventListener('load', attach)
    // El iframe pudo terminar de cargar antes de que React se active en la página
    try {
      const doc = iframe.contentDocument
      if (doc?.readyState === 'complete' && doc.location.href !== 'about:blank') attach()
    } catch {}
    return () => {
      iframe.removeEventListener('load', attach)
      detach()
    }
  }, [game.slug])

  const toggleFullscreen = () => {
    const el = iframeRef.current
    if (!el) return
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      el.requestFullscreen().catch(() => {})
    }
  }

  const arStr = game.aspectRatio || '16/9'
  const arParts = arStr.split('/').map(Number)
  const arValue = arParts[0] / arParts[1]
  const isLandscape = arValue > 1

  return (
    <div className="min-h-screen bg-[#111120] text-white">

      <style>{`
        .game-frame {
          width: 100%;
          ${isLandscape
            ? `aspect-ratio: ${arStr}; max-height: calc(100svh - 52px);`
            : `height: calc(100svh - 52px);`
          }
        }
        @media (min-width: 1280px) {
          .game-frame {
            height: auto;
            aspect-ratio: ${arStr};
            max-height: calc(100vh - 52px);
            max-width: min(100%, calc((100vh - 52px) * ${arValue}));
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[52px]">
        <div className="pl-14 pr-3 md:px-3 h-full flex items-center gap-2">
          <Link href="/"><img src="/logo.png" alt="JuegaYa" className="h-36 w-auto" /></Link>
          <span className="text-white/20 hidden sm:block">›</span>
          <Link href={`/juegos/${game.categorySlug}`} className="text-sm text-white/40 hidden sm:block hover:text-white transition-colors">{game.category}</Link>
          <span className="text-white/20 hidden sm:block">›</span>
          <span className="text-sm text-white/70 truncate hidden sm:block">{game.name}</span>
          <div className="ml-auto">
            <button onClick={share} className="text-sm bg-[#25D366] text-white font-black px-3 py-1.5 rounded-full">💬 Compartir</button>
          </div>
        </div>
      </header>

      <div className="flex flex-col xl:flex-row xl:h-[calc(100vh-52px)]">

        {/* COLUMNA PRINCIPAL */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">

          {/* IFRAME */}
          <div className="w-full bg-[#111120] flex items-start justify-center">
            {game.fixedHeight ? (
              <div style={{ height: game.fixedHeight, width: '100%' }}>
                <iframe
                  ref={iframeRef}
                  src={game.iframeSrc}
                  className="w-full h-full block"
                  title={`${game.name} gratis online`}
                  allow="fullscreen"
                  onLoad={injectResponsiveCSS}
                />
              </div>
            ) : (
              <iframe
                ref={iframeRef}
                src={game.iframeSrc}
                className="game-frame block"
                title={`${game.name} gratis online`}
                allow="fullscreen"
                onLoad={injectResponsiveCSS}
              />
            )}
          </div>

          {/* BARRA DEBAJO DEL JUEGO */}
          <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a2e] border-b border-white/5">
            <div className="flex items-center gap-2 flex-shrink-0 mr-2">
              <div className="w-7 h-7 rounded-lg bg-yellow-400 flex items-center justify-center text-xs font-black text-black">J</div>
              <span className="font-black text-sm truncate max-w-[140px]">{game.name}</span>
            </div>
            <div className="flex items-center gap-1 ml-auto">
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white" onClick={toggleFullscreen} title="Pantalla completa" aria-label="Pantalla completa">⛶</button>
            </div>
          </div>

          {/* AD horizontal — solo escritorio y separado de los botones del juego.
              En móvil no hay banner bajo el juego: está pegado a los controles táctiles (clics accidentales). */}
          <div className="hidden xl:block px-3 pt-6 pb-2">
            <AdUnit format="horizontal" />
          </div>

          {/* INFO */}
          <div className="p-4 space-y-4">
            <div>
              <h1 className="text-xl font-black mb-2">{game.name}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-white/50">
                {visits && <span>👁 {visits}</span>}
                <span>🆓 Gratis</span>
                <span>📱 PC · Móvil</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {game.tags.map(tag => (
                <span key={tag} className="bg-white/5 border border-white/10 text-white/60 text-xs font-bold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-white/60 text-sm leading-relaxed">{game.description}</p>

            {game.guide && (
              <section className="bg-[#1e1e34] rounded-xl border border-white/10 p-4 space-y-4">
                <h2 className="font-black text-sm">🎮 Cómo jugar {game.name}</h2>
                {([
                  ['Objetivo', game.guide.objetivo],
                  ['Controles', game.guide.controles],
                  ['Estrategia', game.guide.estrategia],
                ] as const).map(([titulo, texto]) => (
                  <div key={titulo}>
                    <h3 className="text-xs font-black text-yellow-400 uppercase tracking-wider mb-1">{titulo}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{texto}</p>
                  </div>
                ))}
              </section>
            )}

            {/* AD 300x250 — solo móvil, tras la descripción y lejos del juego */}
            <div className="xl:hidden">
              <AdUnit format="rectangle" />
            </div>

            {/* TIPS + AD 300x250 al lado en desktop */}
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
                  <div className="flex-shrink-0 hidden xl:block">
                    <AdUnit format="rectangle" />
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
                      {g.icon ? <img src={g.icon} alt={g.name} className="w-full h-full object-cover" /> : (g.emoji || '🎮')}
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
        <div className="hidden xl:flex flex-col w-[324px] flex-shrink-0 border-l border-white/5 overflow-y-auto bg-[#0e0e1a]">

          {/* AD lateral — siempre visible: la columna del juego tiene su propio scroll.
              300×600 solo en pantallas altas, para no tapar "Más juegos" en portátiles. */}
          <div className="p-3 border-b border-white/5">
            <div className="hidden [@media(min-height:900px)]:block"><AdUnit format="vertical" /></div>
            <div className="[@media(min-height:900px)]:hidden"><AdUnit format="rectangle" /></div>
          </div>

          {/* Juegos relacionados */}
          <div className="p-2">
            <div className="font-black text-xs text-white/40 uppercase tracking-wider mb-3 px-2">Más juegos</div>
            {related.map((g, i) => (
              <Link key={i} href={`/juego/${g.slug}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-[#1e1e34] flex-shrink-0 flex items-center justify-center text-2xl">
                  {g.icon ? <img src={g.icon} alt={g.name} className="w-full h-full object-cover" /> : (g.emoji || '🎮')}
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
