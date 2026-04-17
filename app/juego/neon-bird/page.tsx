import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Neon Bird — Jugar Gratis Online Sin Descargar | JuegaYa',
  description: 'Juega Neon Bird gratis online. El clásico juego de esquivar obstáculos con efectos neón. Sin descargar, sin registro.',
  keywords: ['neon bird gratis', 'jugar neon bird online', 'neon bird sin descargar'],
}

export default function NeonBirdPage() {
  return (
    <GamePage game={{
      slug: 'neon-bird',
      name: 'Neon Bird',
      iframeSrc: '/juegos/neon-bird.html',
      category: 'Arcade',
      categorySlug: 'arcade',
      rating: 4.9,
      votes: '12,380',
      players: '12,380',
      tags: ['Arcade', 'Habilidad', 'Neón', 'Reflejos', 'Mobile', 'Adictivo'],
      description: 'Neon Bird es un juego arcade de habilidad donde debes esquivar obstáculos con tu pájaro neón. Con cada partida mejorarás tus reflejos y subirás en el ranking latinoamericano.',
      tips: [
        'Toca con suavidad para controlar mejor la altura del pájaro',
        'Mantén el ritmo constante en lugar de tocar rápido',
        'Concéntrate en el espacio entre los obstáculos, no en el pájaro',
        'Juega con auriculares para mejor concentración',
      ],
      faqs: [
        { q: '¿Cómo jugar Neon Bird gratis?', a: 'Haz clic o toca la pantalla para volar y esquiva los obstáculos.' },
        { q: '¿Neon Bird funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
        { q: '¿Puedo competir con amigos?', a: 'Sí, comparte tu puntaje por WhatsApp y reta a tus amigos.' },
      ],
    }} />
  )
}
