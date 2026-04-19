import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | JuegaYa',
  description: 'Términos y condiciones de uso de JuegaYa — plataforma de juegos HTML5 gratis en español para Latinoamérica.',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-yellow-400 text-sm font-bold hover:underline mb-8 block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black mb-2">Términos y Condiciones</h1>
        <p className="text-white/40 text-sm mb-10">Última actualización: 18 de abril de 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-3">1. Aceptación de los términos</h2>
            <p>Al acceder y utilizar JuegaYa (juegaya.app), aceptas estar sujeto a estos Términos y Condiciones de uso. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestro sitio web. JuegaYa se reserva el derecho de modificar estos términos en cualquier momento, siendo efectivos los cambios desde su publicación en el sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">2. Descripción del servicio</h2>
            <p>JuegaYa es una plataforma gratuita de juegos HTML5 en español dirigida a usuarios de Latinoamérica. Ofrecemos juegos de diversas categorías — arcade, puzzle, inteligencia, acción, entre otros — sin necesidad de descarga ni registro. El acceso a todos los juegos es completamente gratuito.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">3. Uso aceptable</h2>
            <p className="mb-3">Al usar JuegaYa, te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar el sitio únicamente para fines lícitos y personales.</li>
              <li>No intentar acceder de forma no autorizada a ninguna parte del sitio o sus sistemas.</li>
              <li>No reproducir, duplicar, copiar, vender ni explotar ninguna parte del servicio sin permiso expreso de JuegaYa.</li>
              <li>No usar bots, scrapers u otros medios automatizados para acceder al contenido.</li>
              <li>No interferir con el funcionamiento normal del sitio web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">4. Propiedad intelectual</h2>
            <p>El contenido de JuegaYa, incluyendo pero no limitado a diseño, logotipos, textos, gráficos y código fuente, es propiedad de JuegaYa o de sus respectivos titulares y está protegido por las leyes de propiedad intelectual aplicables. Los juegos de terceros distribuidos en nuestra plataforma pertenecen a sus respectivos desarrolladores.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">5. Publicidad</h2>
            <p>JuegaYa muestra publicidad a través de Google AdSense y otras redes publicitarias para mantener el servicio gratuito. Los anuncios mostrados son seleccionados automáticamente por dichas plataformas. JuegaYa no es responsable del contenido de los anuncios de terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">6. Limitación de responsabilidad</h2>
            <p>JuegaYa proporciona el servicio "tal como está" sin garantías de ningún tipo. No nos hacemos responsables de daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. El servicio puede experimentar interrupciones por mantenimiento o causas técnicas.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">7. Edad mínima</h2>
            <p>JuegaYa está dirigido a usuarios mayores de 13 años. Si eres menor de 13 años, necesitas el consentimiento de tu padre, madre o tutor legal para utilizar este sitio. No recopilamos intencionalmente información de menores de 13 años.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">8. Ley aplicable</h2>
            <p>Estos términos se rigen por las leyes aplicables en Latinoamérica. Cualquier disputa será resuelta en los tribunales competentes del domicilio del operador del sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">9. Contacto</h2>
            <p>Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos en: <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline">hola@juegaya.app</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
