import type { Metadata } from 'next'
import GamePage from '@/app/components/GamePage'

export const metadata: Metadata = {
  title: 'Test de IQ Gratis Online — ¿Cuál es tu inteligencia? | JuegaYa',
  description: 'Haz el test de IQ gratis online en español. 10 preguntas, resultado inmediato. Descubre si eres más inteligente que el 97% de Latam.',
  keywords: ['test de iq gratis', 'test de inteligencia online', 'iq en español', 'test iq latam'],
}

export default function TestIQPage() {
  return (
    <GamePage game={{
      slug: 'test-iq',
      name: 'Test de IQ Latam',
      iframeSrc: '/juegos/test-iq.html',
      category: 'Inteligencia',
      categorySlug: 'inteligencia',
      rating: 4.8,
      votes: '15,020',
      players: '15,020',
      tags: ['IQ', 'Inteligencia', 'Trivia', 'Test', 'Viral', 'Latam'],
      description: 'Este test de IQ gratis evalúa tu capacidad de razonamiento lógico con 10 preguntas diseñadas para el público latinoamericano. Al terminar recibes tu IQ estimado y tu posición en el ranking de Latam.',
      tips: [
        'Lee cada pregunta con calma antes de responder',
        'Tienes 20 segundos por pregunta — no te apures',
        'Si no sabes la respuesta, elimina las opciones incorrectas',
        'Comparte tu resultado para ver si tus amigos te superan',
      ],
      faqs: [
        { q: '¿El test de IQ es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin registro ni pagos.' },
        { q: '¿Qué tan preciso es el resultado?', a: 'Es un test de entretenimiento. Para un test clínico consulta un psicólogo.' },
        { q: '¿Puedo compartir mi resultado?', a: 'Sí, al terminar puedes compartir tu IQ por WhatsApp con un clic.' },
      ],
    }} />
  )
}
