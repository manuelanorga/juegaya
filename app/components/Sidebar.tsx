'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface NavItem { label: string; href: string; emoji: string; color: string }
interface NavGroup { title: string; items: NavItem[] }

const NAV: NavGroup[] = [
  { title: 'Explora', items: [
    { label: 'Inicio',       href: '/',                     emoji: '🏠', color: '#38bdf8' },
    { label: 'Populares',    href: '/juegos/populares',     emoji: '🔥', color: '#fb923c' },
    { label: 'Nuevos',       href: '/juegos/nuevos',        emoji: '✨', color: '#facc15' },
    { label: 'Diarios',      href: '/juegos/diarios',       emoji: '📅', color: '#22c55e' },
    { label: 'Virales',      href: '/juegos/virales',       emoji: '😂', color: '#f472b6' },
    { label: 'Rápidos',      href: '/juegos/rapidos',       emoji: '⚡', color: '#fde047' },
    { label: 'Difíciles',    href: '/juegos/dificiles',     emoji: '💀', color: '#f87171' },
    { label: 'Sociales',     href: '/juegos/sociales',      emoji: '👯', color: '#c084fc' },
  ] },
  { title: 'Categorías', items: [
    { label: 'Palabras',     href: '/juegos/palabras',      emoji: '📝', color: '#fbbf24' },
    { label: 'Cartas',       href: '/juegos/cartas',        emoji: '🃏', color: '#f87171' },
    { label: 'Inteligencia', href: '/juegos/inteligencia',  emoji: '🧠', color: '#f9a8d4' },
    { label: 'Arcade',       href: '/juegos/arcade',        emoji: '🕹️', color: '#a78bfa' },
    { label: 'Puzzle',       href: '/juegos/puzzle',        emoji: '🧩', color: '#34d399' },
    { label: 'Carreras',     href: '/juegos/carreras',      emoji: '🏎️', color: '#f87171' },
    { label: 'Deportes',     href: '/juegos/deportes',      emoji: '⚽', color: '#4ade80' },
    { label: 'Acción',       href: '/juegos/accion',        emoji: '💥', color: '#fb923c' },
    { label: 'Aventura',     href: '/juegos/aventura',      emoji: '🗺️', color: '#2dd4bf' },
    { label: 'Habilidad',    href: '/juegos/habilidad',     emoji: '🎯', color: '#f87171' },
    { label: 'Stickman',     href: '/juegos/stickman',      emoji: '🤸', color: '#60a5fa' },
    { label: 'Simulación',   href: '/juegos/simulacion',    emoji: '🏙️', color: '#22d3ee' },
    { label: 'Estrategia',   href: '/juegos/estrategia',    emoji: '♟️', color: '#94a3b8' },
  ] },
  { title: 'Más formas de jugar', items: [
    { label: 'Juegos gratis online', href: '/juegos/juegos-gratis-online', emoji: '🎁', color: '#fb7185' },
    { label: 'Sin descargar',        href: '/juegos/juegos-sin-descargar', emoji: '🚀', color: '#818cf8' },
    { label: 'Multijugador',         href: '/juegos/juegos-multijugador',  emoji: '🎮', color: '#a3e635' },
    { label: 'Para celular',         href: '/juegos/juegos-para-celular',  emoji: '📱', color: '#38bdf8' },
  ] },
]

const LEGAL = [
  { label: 'Sobre nosotros', href: '/sobre-nosotros' },
  { label: 'Contacto',       href: '/contacto' },
  { label: 'Términos',       href: '/terminos' },
  { label: 'Privacidad',     href: '/privacidad' },
]

const STORAGE_KEY = 'jy_menu_expanded'

// Una categoría aparece en cuanto tiene juegos; un grupo sin elementos no se muestra
function visibleNav(activeCategories: string[]) {
  const active = new Set(activeCategories)
  return NAV
    .map(group => ({
      ...group,
      items: group.items.filter(item => {
        const m = item.href.match(/^\/juegos\/(.+)$/)
        return !m || active.has(m[1])
      }),
    }))
    .filter(group => group.items.length > 0)
}

function Burger({ open }: { open: boolean }) {
  const bar = 'absolute left-0 h-[2.5px] rounded-full bg-white transition-all duration-200'
  return (
    <span className="relative block w-5 h-4" aria-hidden>
      <span className={`${bar} top-0 ${open ? 'w-3 rotate-[-40deg] translate-y-[3px] -translate-x-[1px]' : 'w-5'}`} />
      <span className={`${bar} top-[7px] w-5`} />
      <span className={`${bar} bottom-0 ${open ? 'w-3 rotate-[40deg] -translate-y-[3px] -translate-x-[1px]' : 'w-5 opacity-70'}`} />
    </span>
  )
}

interface MenuProps {
  groups: NavGroup[]
  expanded: boolean
  pathname: string
  rolling: boolean
  onSurprise: () => void
  onHover?: (label: string | null, top: number) => void
}

function Menu({ groups, expanded, pathname, rolling, onSurprise, onHover }: MenuProps) {
  const tip = (label: string) => (e: React.MouseEvent | React.FocusEvent) => {
    const r = e.currentTarget.getBoundingClientRect()
    onHover?.(label, r.top + r.height / 2)
  }
  const hideTip = () => onHover?.(null, 0)

  return (
    <>
      <div className="px-2.5 pt-3 pb-1">
        <button onClick={onSurprise} disabled={rolling} aria-label="Juego sorpresa"
          onMouseEnter={tip('Juego sorpresa')} onMouseLeave={hideTip} onFocus={tip('Juego sorpresa')} onBlur={hideTip}
          className={`nav-item w-full h-11 flex items-center rounded-xl bg-gradient-to-r from-[#ffd000] to-[#ff9d00] text-[#1a1000] font-black text-[13px] shadow-[0_4px_14px_rgba(255,170,0,.25)] hover:brightness-110 transition ${expanded ? 'px-1.5 gap-2.5' : 'justify-center'}`}>
          <span className={`text-xl leading-none ${rolling ? 'dice-roll' : 'nav-tile'}`} aria-hidden>🎲</span>
          {expanded && <span className="whitespace-nowrap">Juego sorpresa</span>}
        </button>
      </div>

      {groups.map((group, g) => (
        <div key={group.title} className="px-2.5">
          {expanded
            ? <div className="text-[11px] font-black uppercase tracking-wider text-white/30 px-2 pt-4 pb-1.5 whitespace-nowrap">{group.title}</div>
            : g > 0 && <div className="h-px bg-white/10 mx-2 my-2.5" />}
          {group.items.map(item => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                aria-label={item.label}
                aria-current={active ? 'page' : undefined}
                onMouseEnter={tip(item.label)} onMouseLeave={hideTip} onFocus={tip(item.label)} onBlur={hideTip}
                style={active ? { backgroundColor: `${item.color}26` } : undefined}
                className={`nav-item relative flex items-center h-11 rounded-xl transition-colors hover:bg-white/[.07] ${expanded ? 'px-1.5 gap-2.5' : 'justify-center'}`}>
                {active && <span className="absolute -left-2.5 top-2 bottom-2 w-1 rounded-r-full" style={{ backgroundColor: item.color }} />}
                <span className="nav-tile w-8 h-8 flex-shrink-0 rounded-[10px] flex items-center justify-center text-[17px] leading-none"
                  style={{ backgroundColor: `${item.color}${active ? '55' : '24'}` }} aria-hidden>
                  {item.emoji}
                </span>
                {expanded && (
                  <span className={`text-[13.5px] whitespace-nowrap ${active ? 'font-black text-white' : 'font-bold text-white/70'}`}>{item.label}</span>
                )}
              </Link>
            )
          })}
        </div>
      ))}

      {expanded && (
        <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 pt-5 pb-5 text-[11px] font-semibold text-white/30">
          {LEGAL.map(l => <Link key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</Link>)}
        </div>
      )}
    </>
  )
}

export default function Sidebar({ activeCategories, gameSlugs }: { activeCategories: string[]; gameSlugs: string[] }) {
  const pathname = usePathname()
  const router = useRouter()
  const groups = visibleNav(activeCategories)

  const [expanded, setExpanded] = useState(false)       // barra de escritorio
  const [drawerOpen, setDrawerOpen] = useState(false)   // panel del móvil
  const [rolling, setRolling] = useState(false)
  const [tooltip, setTooltip] = useState<{ label: string; top: number } | null>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Se lee al montar: en el servidor no existe localStorage
  useEffect(() => {
    try { setExpanded(localStorage.getItem(STORAGE_KEY) === '1') } catch {}
  }, [])

  function toggleExpanded() {
    setTooltip(null)
    setExpanded(prev => {
      try { localStorage.setItem(STORAGE_KEY, prev ? '0' : '1') } catch {}
      return !prev
    })
  }

  useEffect(() => { setDrawerOpen(false) }, [pathname])

  useEffect(() => {
    if (!drawerOpen) return
    const burger = burgerRef.current
    closeRef.current?.focus()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDrawerOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKey)
      burger?.focus()
    }
  }, [drawerOpen])

  function surprise() {
    const current = pathname.startsWith('/juego/') ? pathname.split('/')[2] : null
    const options = gameSlugs.filter(s => s !== current)
    if (!options.length) return
    setRolling(true)
    setTimeout(() => {
      setRolling(false)
      setDrawerOpen(false)
      router.push(`/juego/${options[Math.floor(Math.random() * options.length)]}`)
    }, 450)
  }

  // El panel de administración tiene su propio menú
  if (pathname.startsWith('/dashboard') || pathname.startsWith('/admin-login')) return null

  const menuProps = { groups, pathname, rolling, onSurprise: surprise }

  return (
    <>
      {/* MÓVIL: botón fijo y panel deslizante */}
      <button ref={burgerRef} onClick={() => setDrawerOpen(true)} aria-label="Abrir menú" aria-expanded={drawerOpen}
        className="md:hidden fixed left-2 top-1 z-[60] w-11 h-11 flex items-center justify-center rounded-xl bg-[#1e1e34]/90 backdrop-blur border border-white/10 active:scale-95 transition-transform">
        <Burger open={false} />
      </button>

      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="drawer-backdrop absolute inset-0 bg-black/60" onClick={() => setDrawerOpen(false)} />
          <nav className="drawer-panel absolute left-0 top-0 bottom-0 w-[270px] max-w-[85vw] bg-[#0e0e1a] border-r border-white/10 flex flex-col">
            <div className="h-[52px] flex items-center justify-between px-4 border-b border-white/5 flex-shrink-0">
              <span className="font-black text-yellow-400">Menú</span>
              <button ref={closeRef} onClick={() => setDrawerOpen(false)} aria-label="Cerrar menú"
                className="w-9 h-9 -mr-2 flex items-center justify-center rounded-lg hover:bg-white/10 text-white/70 text-lg">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <Menu {...menuProps} expanded />
            </div>
          </nav>
        </div>
      )}

      {/* ESCRITORIO: barra de iconos que se expande */}
      <aside className={`hidden md:flex flex-col flex-shrink-0 sticky top-0 h-dvh z-50 bg-[#0e0e1a] border-r border-white/5 transition-[width] duration-200 ${expanded ? 'w-[232px]' : 'w-[68px]'}`}>
        <div className={`h-[52px] flex items-center border-b border-white/5 flex-shrink-0 ${expanded ? 'px-3 gap-2' : 'justify-center'}`}>
          <button onClick={toggleExpanded} aria-label={expanded ? 'Contraer menú' : 'Expandir menú'} aria-expanded={expanded}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 transition-colors">
            <Burger open={expanded} />
          </button>
          {expanded && <span className="font-black text-sm text-white/60">Menú</span>}
        </div>
        <nav className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide pb-3" aria-label="Categorías de juegos"
          onScroll={() => setTooltip(null)}>
          <Menu {...menuProps} expanded={expanded}
            onHover={(label, top) => setTooltip(label && !expanded ? { label, top } : null)} />
        </nav>
        {/* Fuera de la zona con scroll para que no se recorte */}
        {tooltip && !expanded && (
          <div role="tooltip" className="fixed left-[76px] -translate-y-1/2 z-[70] pointer-events-none bg-white text-[#14142a] text-xs font-black px-2.5 py-1.5 rounded-lg shadow-xl whitespace-nowrap"
            style={{ top: tooltip.top }}>
            {tooltip.label}
          </div>
        )}
      </aside>
    </>
  )
}
