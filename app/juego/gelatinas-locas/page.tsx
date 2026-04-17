import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Gelatinas Locas — Jugar Gratis Online | JuegaYa',
  description: 'Juega Gelatinas Locas gratis online. Combina 3 gelatinas del mismo color y supera todos los niveles. Sin descargar.',
  keywords: ['gelatinas locas gratis', 'jelly match 3 español', 'puzzle gratis online'],
}

export default function GelatinasLocasPage() {
  return (
    <GamePage game={{
      slug: 'gelatinas-locas',
      name: 'Gelatinas Locas',
      iframeSrc: '/juegos/gelatinas-locas/index.html',
      category: 'Puzzle',
      categorySlug: 'puzzle',
      rating: 4.9,
      votes: '11,430',
      players: '11,430',
      tags: ['Puzzle', 'Match 3', 'Colores', 'Casual', 'Mobile', 'Adictivo'],
      description: 'Gelatinas Locas es el juego de puzzle más adictivo de JuegaYa. Combina 3 o más gelatinas del mismo color para eliminarlas y sumar puntos. Con decenas de niveles de dificultad creciente.',
      tips: [
        'Combina 4 o más gelatinas para obtener power-ups especiales',
        'Planifica tus movimientos antes de hacer clic',
        'Los combos encadenados multiplican tus puntos',
        'Usa los boosters en los niveles más difíciles',
      ],
      faqs: [
        { q: '¿Gelatinas Locas es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
        { q: '¿Cómo se juega?', a: 'Combina 3 o más gelatinas del mismo color tocándolas o haciendo clic.' },
        { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
      ],
    }} />
  )
}
