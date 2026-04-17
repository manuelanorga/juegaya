import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Test de Reflejos Online Gratis — ¿Qué tan rápido eres? | JuegaYa',
  description: 'Mide tu tiempo de reacción gratis. ¿Tus reflejos son de élite o de abuelo? 3 intentos, resultado inmediato.',
  keywords: ['test de reflejos', 'tiempo de reaccion online', 'test reflejos gratis'],
}

export default function TestReflejosPage() {
  return (
    <GamePage game={{
      slug: 'test-reflejos',
      name: 'Test de Reflejos',
      iframeSrc: '/juegos/test-reflejos.html',
      category: 'Habilidad',
      categorySlug: 'habilidad',
      rating: 4.7,
      votes: '8,430',
      players: '8,430',
      tags: ['Reflejos', 'Velocidad', 'Habilidad', 'Test', 'Viral', 'Mobile'],
      description: 'Este test mide tu tiempo de reacción visual — cuántos milisegundos tardas en responder a un estímulo. El promedio humano es 200-300ms. ¿Eres más rápido que el 95% de Latam?',
      tips: [
        'Descansa tus ojos antes de jugar para mejores reflejos',
        'Mantén el dedo cerca de la pantalla pero sin tocarla',
        'No anticipes — espera ver el color verde',
        'La cafeína puede mejorar levemente el tiempo de reacción',
      ],
      faqs: [
        { q: '¿Cómo funciona el test?', a: 'Espera que la pantalla se ponga verde y toca lo más rápido que puedas. 3 intentos.' },
        { q: '¿Cuál es el tiempo normal?', a: 'El promedio humano está entre 200-300ms. Menos de 200ms es excelente.' },
        { q: '¿Puedo mejorar mis reflejos?', a: 'Sí. Con práctica y descanso adecuado puedes mejorar tu tiempo de reacción.' },
      ],
    }} />
  )
}
