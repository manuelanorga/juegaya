import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Cazador de Zombies — Jugar Gratis Online | JuegaYa',
  description: 'Juega Cazador de Zombies gratis online en español. 20 niveles de acción y disparos. Sin descargar, sin registro.',
  keywords: ['cazador de zombies gratis', 'juego zombies online', 'zombie buster español'],
}

export default function CazadorZombiesPage() {
  return (
    <GamePage game={{
      slug: 'cazador-zombies',
      name: 'Cazador de Zombies',
      iframeSrc: '/juegos/cazador-zombies/index.html',
      category: 'Acción',
      categorySlug: 'accion',
      rating: 4.8,
      votes: '9,240',
      players: '9,240',
      tags: ['Acción', 'Disparos', 'Zombies', '20 Niveles', 'Arcade', 'Mobile'],
      description: 'Cazador de Zombies es un juego de acción y disparos con 20 niveles de dificultad creciente. Elimina hordas de zombies antes de que te alcancen. Cada nivel trae nuevos tipos de enemigos más difíciles. ¿Puedes sobrevivir hasta el nivel 20?',
      tips: [
        'Apunta a la cabeza para eliminar zombies con un solo disparo',
        'Guarda munición para los jefes al final de cada mundo',
        'Los zombies más lentos hacen más daño — mantenlos lejos',
        'Recoge los power-ups amarillos para munición extra',
      ],
      faqs: [
        { q: '¿Cazador de Zombies es gratis?', a: 'Sí, es 100% gratis en JuegaYa. Sin descargas ni registro.' },
        { q: '¿Cuántos niveles tiene?', a: '20 niveles con dificultad creciente. Cada nivel trae más zombies.' },
        { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS desde el navegador.' },
      ],
    }} />
  )
}
