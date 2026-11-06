'use client'
import { useEffect, useRef, useState } from 'react'

// El vídeo solo se descarga al acercarse a la pantalla y se pausa al salir de ella.
// Con ahorro de datos o movimiento reducido no se carga: queda la imagen de debajo.
export default function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (connection?.saveData || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoad(true)
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    }, { rootMargin: '150px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return <video ref={ref} src={load ? src : undefined} autoPlay muted loop playsInline preload="none" className={className} />
}
