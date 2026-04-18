'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'

const NAV = [
  { section: 'Destacados' },
  { label: 'Populares',    href: '/juegos/populares',    icon: 'M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z' },
  { label: 'Nuevos',       href: '/juegos/nuevos',       icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
  { label: 'Inteligencia', href: '/juegos/inteligencia', icon: 'M12 3C8.59 3 5.69 4.07 3.8 5.8L2 4v5h5L5.25 7.25C6.68 6.03 9.04 5 12 5c4.42 0 8 2.24 8 5s-3.58 5-8 5c-1.85 0-3.56-.5-4.88-1.34L1.76 15.3C3.61 17.45 7.53 19 12 19c5.52 0 10-3.13 10-7s-4.48-7-10-7z' },
  { label: 'Virales',      href: '/juegos/virales',      icon: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z' },
  { label: 'Difíciles',    href: '/juegos/dificiles',    icon: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z' },
  { label: 'Sociales',     href: '/juegos/sociales',     icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { label: 'Rápidos',      href: '/juegos/rapidos',      icon: 'M13 2.05V4.05C17.39 4.59 20.5 8.58 19.96 12.97C19.5 16.61 16.64 19.5 13 19.93V21.93C18.5 21.38 22.5 16.5 21.95 11C21.5 6.25 17.73 2.5 13 2.05M11 2.06C9.05 2.25 7.19 3 5.67 4.26L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2.06M4.26 5.67C3 7.19 2.25 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67M2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06M7.1 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37Z' },
  { label: 'Ranking',      href: '/ranking',             icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z' },
  { label: 'Gana Puntos',  href: '/juegos/premios',      icon: 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' },
  { divider: true },
  { section: 'Categorías' },
  { label: 'Arcade',       href: '/juegos/arcade',       icon: 'M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5S20.33 13 19.5 13z' },
  { label: 'Puzzle',       href: '/juegos/puzzle',       icon: 'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z' },
  { label: 'Carreras',     href: '/juegos/carreras',     icon: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z' },
  { label: 'Deportes',     href: '/juegos/deportes',     icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z' },
  { label: 'Acción',       href: '/juegos/accion',       icon: 'M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z' },
  { label: 'Stickman',     href: '/juegos/stickman',     icon: 'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z' },
  { label: 'Simulación',   href: '/juegos/simulacion',   icon: 'M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' },
  { label: 'Estrategia',   href: '/juegos/estrategia',   icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z' },
  { divider: true },
  { section: 'SEO' },
  { label: 'Juegos gratis online',   href: '/juegos-gratis-online',   icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
  { label: 'Sin descargar',          href: '/juegos-sin-descargar',   icon: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' },
  { label: 'Multijugador',           href: '/juegos-multijugador',    icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { label: 'Para celular',           href: '/juegos-para-celular',    icon: 'M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z' },
]

const ICON_OPEN  = "M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"
const ICON_CLOSE = "M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm15 9.17L14.83 12 18 8.83V6l-6 6 6 6v-2.83z"

export default function Sidebar() {
  const [iconsVisible, setIconsVisible] = useState(false)
  const [expanded, setExpanded]         = useState(false)
  const justClicked = useRef(false)

  function toggle() {
    const next = !iconsVisible
    setIconsVisible(next)
    if (!next) setExpanded(false)
    justClicked.current = true
    setTimeout(() => { justClicked.current = false }, 300)
  }

  function onMouseEnter() {
    if (!iconsVisible || justClicked.current) return
    setExpanded(true)
  }

  function onMouseLeave() {
    setExpanded(false)
  }

  const width = expanded ? 'w-[220px]' : iconsVisible ? 'w-[52px]' : 'w-[40px]'

  return (
    <aside
      className={`${width} bg-[#0e0e1a] border-r border-white/5 hidden md:flex flex-col flex-shrink-0 z-50 overflow-hidden transition-all duration-200 h-screen sticky top-0`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Toggle */}
      <button
        onClick={toggle}
        className="w-[40px] min-w-[40px] h-[52px] flex items-center justify-center border-b border-white/5 hover:bg-white/5 transition-colors flex-shrink-0"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/50">
          <path d={iconsVisible ? ICON_CLOSE : ICON_OPEN} />
        </svg>
      </button>

      {/* Items */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {NAV.map((item, i) => {
          if (item.divider) return <div key={i} className="h-px bg-white/5 mx-3 my-1 flex-shrink-0" />
          if (item.section) return (
            <div key={i} className={`text-[10px] font-semibold uppercase tracking-wider text-white/20 px-4 pt-3 pb-1 whitespace-nowrap flex-shrink-0 transition-opacity duration-150 ${expanded ? 'opacity-100' : 'opacity-0 h-0 pt-0 pb-0'}`}>
              {item.section}
            </div>
          )
          return (
            <Link
              key={i}
              href={item.href || '/'}
              className="flex items-center h-10 hover:bg-white/5 transition-colors flex-shrink-0 group"
            >
              <div className={`w-[52px] min-w-[52px] h-10 flex items-center justify-center transition-opacity duration-200 ${iconsVisible || expanded ? 'opacity-100' : 'opacity-0'}`}>
                <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-white/40 group-hover:fill-yellow-400 transition-colors">
                  <path d={item.icon} />
                </svg>
              </div>
              <span className={`text-[13px] font-medium text-white/55 group-hover:text-white transition-opacity duration-150 whitespace-nowrap ${expanded ? 'opacity-100' : 'opacity-0'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
