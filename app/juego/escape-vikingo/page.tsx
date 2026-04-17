import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'El Escape del Vikingo — Jugar Gratis Online | JuegaYa',
  description: 'Juega El Escape del Vikingo gratis online en español. Aventura y acción sin descargar ni registrarte.',
  keywords: ['escape del vikingo gratis', 'juego vikingo online', 'aventura vikingo español'],
}

export default function EscapeVikingoPage() {
  return (
    <GamePage game={{
      slug: 'escape-vikingo',
      name: 'El Escape del Vikingo',
      iframeSrc: '/juegos/escape-vikingo/index.html',
      category: 'Aventura',
      categorySlug: 'aventura',
      rating: 4.8,
      votes: '7,650',
      players: '7,650',
      tags: ['Aventura', 'Acción', 'Vikingos', 'Plataformas', 'Mobile'],
      description: 'El Escape del Vikingo es un juego de aventura donde debes ayudar a tu vikingo a escapar de enemigos y trampas. Con gráficos HD y múltiples niveles desafiantes.',
      tips: [
        'Usa el escudo para bloquear los ataques enemigos',
        'Recoge todas las monedas para desbloquear mejoras',
        'Los enemigos rojos son más fuertes — evítalos si puedes',
        'Aprovecha los trampolines para llegar a zonas secretas',
      ],
      faqs: [
        { q: '¿El Escape del Vikingo es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
        { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
        { q: '¿Cuántos niveles tiene?', a: 'Múltiples niveles con dificultad creciente y nuevos enemigos.' },
      ],
    }} />
  )
}
