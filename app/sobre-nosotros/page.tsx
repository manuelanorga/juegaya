import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Qué es JuegaYa, cómo hacemos los juegos y los retos diarios, cómo cuidamos tu privacidad sin pedirte una cuenta y cómo se financia el sitio.',
  alternates: { canonical: '/sobre-nosotros' },
}

const H2 = 'text-xl font-black text-white mb-3'

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
            <p className="text-lg text-white/80">
              JuegaYa es un sitio de juegos gratis en español que se juegan directo en el navegador, en el celular o en la
              computadora. No hace falta descargar nada, crear una cuenta ni dejar un correo: entras, eliges un juego y juegas.
            </p>
          </section>

          <section>
            <h2 className={H2}>Cómo hacemos los juegos</h2>
            <p className="mb-3">
              Los retos diarios son desarrollo propio: <Link href="/juego/sudoku" className="text-yellow-400 hover:underline">Sudoku</Link>,{' '}
              <Link href="/juego/solitario" className="text-yellow-400 hover:underline">Solitario</Link>,{' '}
              <Link href="/juego/crucigrama" className="text-yellow-400 hover:underline">Crucigrama</Link>,{' '}
              <Link href="/juego/ahorcado" className="text-yellow-400 hover:underline">Ahorcado</Link>,{' '}
              <Link href="/juego/sopa-de-letras" className="text-yellow-400 hover:underline">Sopa de Letras</Link>,{' '}
              <Link href="/juego/palabro" className="text-yellow-400 hover:underline">Palabro</Link>,{' '}
              <Link href="/juego/bloques-locos" className="text-yellow-400 hover:underline">Bloques Locos</Link> y{' '}
              <Link href="/juego/flechas-locas" className="text-yellow-400 hover:underline">Flechas Locas</Link>.
              También lo son el Test de IQ, el Test de Reflejos y la trivia de historia. Otros juegos del catálogo los
              publicamos con licencia de sus creadores.
            </p>
            <p className="mb-3">
              Las palabras, las pistas del crucigrama y los temas de la sopa de letras están escritos en español de uso común
              en Latinoamérica, con la Ñ como letra propia. Los tableros diarios se generan con reglas que comprobamos antes de
              publicarlos: cada sudoku tiene una sola solución y cada reparto diario del solitario se verifica con un
              solucionador para que se pueda ganar.
            </p>
            <p>
              Las preguntas de <Link href="/juego/cuanto-sabes-historia" className="text-yellow-400 hover:underline">¿Cuánto sabes de Historia?</Link>{' '}
              las genera una inteligencia artificial, así que alguna puede tener un error. Si encuentras uno, escríbenos y lo
              revisamos.
            </p>
          </section>

          <section>
            <h2 className={H2}>Cómo funcionan los retos diarios</h2>
            <p>
              Cada día hay un reto nuevo, igual para todos los jugadores, que cambia a la medianoche de tu hora local. Al terminar
              puedes ver cuántas personas jugaron ese día y a cuántas superaste, y compartir tu resultado sin revelar la respuesta.
              Explicamos el detalle de cada juego en la página de <Link href="/juegos/diarios" className="text-yellow-400 hover:underline">juegos diarios</Link>,
              y las técnicas para mejorar en nuestras <Link href="/guias" className="text-yellow-400 hover:underline">guías</Link>.
            </p>
          </section>

          <section>
            <h2 className={H2}>Tu privacidad</h2>
            <p>
              No pedimos registro. Tu racha, tus mejores tiempos y las partidas a medias se guardan en tu propio navegador. Para
              comparar resultados usamos un identificador anónimo generado al azar, que no está ligado a tu nombre ni a tu correo.
              También contamos visitas y partidas para saber qué juegos gustan más. Los detalles están en la{' '}
              <Link href="/privacidad" className="text-yellow-400 hover:underline">política de privacidad</Link>.
            </p>
          </section>

          <section>
            <h2 className={H2}>Cómo se financia</h2>
            <p>
              JuegaYa es gratis para los jugadores y se sostiene con publicidad. Ubicamos los anuncios fuera del área de juego,
              para que no interrumpan una partida ni se confundan con los controles.
            </p>
          </section>

          <section>
            <h2 className={H2}>Contacto</h2>
            <p>
              ¿Encontraste un error, tienes una idea para un juego o quieres colaborar? Escríbenos a{' '}
              <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline">hola@juegaya.app</a> o usa el{' '}
              <Link href="/contacto" className="text-yellow-400 hover:underline">formulario de contacto</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
