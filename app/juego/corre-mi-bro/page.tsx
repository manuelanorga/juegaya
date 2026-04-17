import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Corre mi Bro — Runner Latino Gratis Online | JuegaYa',
  description: 'Corre por las calles de Lima, CDMX, Bogotá y Buenos Aires. Esquiva obstáculos y comparte tu record por WhatsApp.',
  keywords: ['corre mi bro', 'juego runner latino', 'runner online gratis'],
}

export default function CorreMiBroPage() {
  return (
    <GamePage game={{
      slug: 'corre-mi-bro',
      name: 'Corre mi Bro',
      iframeSrc: '/juegos/corre-mi-bro.html',
      category: 'Arcade',
      categorySlug: 'arcade',
      rating: 4.6,
      votes: '6,200',
      players: '6,200',
      tags: ['Runner', 'Arcade', 'Latino', 'Lima', 'CDMX', 'Bogotá', 'Mobile'],
      description: 'Corre mi Bro es el primer runner ambientado en las calles de Latinoamérica. Elige tu ciudad — Lima, CDMX, Bogotá o Buenos Aires — y corre esquivando obstáculos típicos de cada lugar.',
      tips: [
        'Desliza a los lados para cambiar de carril rápidamente',
        'Recoge las monedas doradas para mayor puntaje',
        'La velocidad aumenta cada 200 metros — prepárate',
        'Desliza hacia abajo para esquivar obstáculos bajos',
      ],
      faqs: [
        { q: '¿Corre mi Bro es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
        { q: '¿Funciona en celular?', a: 'Sí. Desliza para moverte, salta y esquiva obstáculos.' },
        { q: '¿Puedo elegir ciudad?', a: 'Sí. Lima, CDMX, Bogotá y Buenos Aires, cada una con obstáculos únicos.' },
      ],
    }} />
  )
}
