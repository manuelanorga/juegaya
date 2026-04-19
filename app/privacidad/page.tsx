import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | JuegaYa',
  description: 'Política de privacidad de JuegaYa. Conoce cómo recopilamos, usamos y protegemos tu información.',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link href="/" className="text-yellow-400 text-sm font-bold hover:underline mb-8 block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black mb-2">Política de Privacidad</h1>
        <p className="text-white/40 text-sm mb-10">Última actualización: 18 de abril de 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-black text-white mb-3">1. Información que recopilamos</h2>
            <p className="mb-3">JuegaYa recopila información de forma automática cuando visitas nuestro sitio:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Datos de uso:</strong> páginas visitadas, juegos jugados, tiempo de sesión y dispositivo utilizado.</li>
              <li><strong className="text-white">Datos técnicos:</strong> tipo de navegador, sistema operativo y dirección IP anonimizada.</li>
              <li><strong className="text-white">Cookies:</strong> para mejorar tu experiencia y mostrar publicidad relevante.</li>
            </ul>
            <p className="mt-3">No recopilamos nombre, email ni datos personales identificables sin tu consentimiento.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">2. Cómo usamos tu información</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mejorar el rendimiento y experiencia del sitio.</li>
              <li>Mostrar estadísticas anónimas de uso.</li>
              <li>Recordar tu historial de juegos recientes.</li>
              <li>Mostrar publicidad relevante a través de Google AdSense.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">3. Cookies</h2>
            <p className="mb-3">Utilizamos cookies esenciales, de preferencias, publicitarias y analíticas. Puedes desactivarlas en tu navegador aunque esto puede afectar la funcionalidad del sitio.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">4. Google AdSense</h2>
            <p>Usamos Google AdSense para mostrar publicidad. Google puede usar cookies para anuncios personalizados. Puedes desactivarlo en <a href="https://www.google.com/settings/ads" target="_blank" className="text-yellow-400 hover:underline">Configuración de anuncios de Google</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">5. Seguridad</h2>
            <p>Los datos se almacenan de forma anónima en servidores en América del Sur. Tomamos medidas razonables para proteger tu información.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">6. Menores de edad</h2>
            <p>No recopilamos información de menores de 13 años. Si eres padre o tutor y tienes dudas, contáctanos.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">7. Tus derechos</h2>
            <p>Puedes solicitar acceso, rectificación o eliminación de tus datos escribiendo a <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline">hola@juegaya.app</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">8. Contacto</h2>
            <p>Para preguntas sobre privacidad: <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline">hola@juegaya.app</a></p>
          </section>
        </div>
      </div>
    </div>
  )
}
