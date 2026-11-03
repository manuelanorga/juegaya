'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ADSENSE_CLIENT, AD_SLOTS, type AdFormat } from '@/lib/ads'

declare global {
  interface Window { adsbygoogle?: unknown[] }
}

// Tamaños fijos salvo el horizontal, que es adaptable (alto mínimo 90)
const SIZES: Record<AdFormat, { height: number; width?: number }> = {
  horizontal: { height: 90 },
  rectangle: { height: 250, width: 300 },
  vertical: { height: 600, width: 300 },
}
const LABEL_HEIGHT = 18

interface Props {
  format: AdFormat
}

function AdInner({ format }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pushed = useRef(false)
  const [visible, setVisible] = useState(false)
  const slot = AD_SLOTS[format]
  const size = SIZES[format]

  // push() rellena el primer <ins> pendiente de la página, no "el nuestro": un <ins> dentro de
  // un contenedor oculto (xl:hidden, etc.) se llevaría el anuncio. Solo lo creamos si se ve.
  useEffect(() => {
    if (slot && containerRef.current && containerRef.current.offsetWidth > 0) setVisible(true)
  }, [slot])

  useEffect(() => {
    if (!visible || pushed.current) return // pushed evita el doble push de StrictMode
    pushed.current = true
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // Bloqueador de anuncios o script aún no cargado: el espacio queda vacío
    }
  }, [visible])

  if (!slot) {
    // Sin ID configurado: nada en producción, recuadro de referencia en desarrollo
    if (process.env.NODE_ENV === 'production') return null
    return (
      <div className="rounded-xl bg-[#1e1e34] border border-dashed border-white/10 flex items-center justify-center text-white/20 text-xs font-bold mx-auto"
        style={{ height: size.height, width: size.width }}>
        📢 Anuncio {format} (falta NEXT_PUBLIC_ADSENSE_SLOT_{format.toUpperCase()})
      </div>
    )
  }

  return (
    // El alto se reserva desde el primer render para que la página no salte al cargar el anuncio (CLS)
    <div ref={containerRef}
      className="ad-slot mx-auto text-center"
      style={{ width: size.width ?? '100%', minHeight: size.height + LABEL_HEIGHT }}>
      {/* Google solo permite las etiquetas "Anuncios" o "Enlaces patrocinados" */}
      <div className="text-[10px] text-white/25 font-semibold uppercase tracking-wider" style={{ height: LABEL_HEIGHT }}>Anuncios</div>
      {visible && (format === 'horizontal' ? (
        <ins className="adsbygoogle"
          style={{ display: 'block', minHeight: size.height }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format="horizontal"
          data-full-width-responsive="true" />
      ) : (
        <ins className="adsbygoogle"
          style={{ display: 'inline-block', width: size.width, height: size.height }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot} />
      ))}
    </div>
  )
}

// La key por ruta fuerza un <ins> nuevo al navegar entre juegos: AdSense no rellena dos veces el mismo.
export default function AdUnit(props: Props) {
  const pathname = usePathname()
  return <AdInner key={pathname} {...props} />
}
