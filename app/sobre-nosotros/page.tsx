import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | JuegaYa',
  description: 'Conoce JuegaYa — la plataforma de juegos HTML5 gratis más grande de Latinoamérica.',
}

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-yellow-400 text-sm font-bold hover:underline mb-8 block">← Volver al inicio</Link>

        <div className="flex items-center gap-4 mb-10">
          <img src="/logo.png" alt="JuegaYa" className="h-16 w-auto" />
        </div>

        <h1 className="text-3xl font-black mb-6">Sobre JuegaYa</h1>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <p className="text-lg text-white/80">JuegaYa es la plataforma de juegos HTML5 gratuitos más grande de Latinoamérica. Nacimos con una misión simple: hacer que los mejores juegos online estén disponibles para todos, sin descargas, sin registro y completamente gratis.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">Nuestra misión</h2>
            <p>Creemos que jugar debe ser simple y accesible. En JuegaYa puedes jugar directamente desde tu navegador, ya sea en tu celular, tablet o computadora. Sin instalaciones, sin pagos, sin complicaciones. Solo diversión.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">¿Qué ofrecemos?</h2>
            <p className="mb-3">En JuegaYa encontrarás:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Juegos arcade, puzzle, acción, inteligencia y más.</li>
              <li>Tests virales de IQ y reflejos diseñados para Latam.</li>
              <li>Contenido 100% en español.</li>
              <li>Actualizaciones constantes con nuevos juegos cada semana.</li>
              <li>Ranking semanal para competir con jugadores de toda Latinoamérica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">Para los jugadores de Latam</h2>
            <p>JuegaYa fue creado pensando en los jugadores de México, Perú, Argentina, Colombia y toda Latinoamérica. Nuestro contenido está diseñado para resonar con nuestra cultura y humor. Somos de aquí, para los de aquí.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">Contacto</h2>
            <p>¿Tienes preguntas, sugerencias o quieres colaborar con nosotros? Escríbenos a <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline">hola@juegaya.app</a> y te respondemos a la brevedad.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
