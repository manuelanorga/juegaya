import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test de IQ Gratis Online — ¿Cuál es tu inteligencia? | JuegaYa',
  description: 'Haz el test de IQ gratis online en español. 10 preguntas, resultado inmediato. Descubre si eres más inteligente que el 97% de Latam. Sin registro.',
  keywords: ['test de iq gratis', 'test de inteligencia online', 'iq en español', 'test iq latam'],
}

export default function TestIQPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Inteligencia</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Test de IQ</span>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Test de IQ Gratis Online — ¿Eres un Genio?</h1>
        <p className="text-white/50 mb-6">Inteligencia · ⭐ 4.8 · 👥 15,020 jugadores · 🆓 Gratis · ⏱ 3 minutos</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6" style={{height:'560px'}}>
          <iframe
            src="/juegos/test-iq.html"
            className="w-full h-full"
            title="Test de IQ gratis online en español"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">
            🔄 Repetir test
          </button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">
            💬 Compartir resultado
          </button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">¿Qué mide este test de IQ?</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Este test de IQ gratis evalúa tu capacidad de razonamiento lógico, 
            pensamiento matemático y agilidad mental con 10 preguntas diseñadas 
            para el público latinoamericano. Al terminar recibes tu IQ estimado 
            y tu posición en el ranking de Latam.
          </p>
          <p className="text-white/60 leading-relaxed">
            ¿Eres más inteligente que el 97% de México, Colombia, Perú y Argentina? 
            Comparte tu resultado por WhatsApp y reta a tus amigos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Cómo funciona</h2>
          <ol className="space-y-2">
            {[
              'Responde 10 preguntas de lógica y matemáticas',
              'Tienes 20 segundos por pregunta',
              'Al terminar recibes tu IQ estimado y nivel',
              'Comparte tu resultado por WhatsApp y reta a tus amigos',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-white/60">
                <span className="bg-yellow-400 text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Niveles de IQ</h2>
          <div className="space-y-2">
            {[
              { range: 'Menos de 85',  label: 'Por debajo del promedio', color: 'text-red-400' },
              { range: '85 – 100',     label: 'Inteligencia normal',     color: 'text-yellow-400' },
              { range: '100 – 115',    label: 'Por encima del promedio', color: 'text-cyan-400' },
              { range: '115 – 130',    label: 'Inteligencia superior',   color: 'text-purple-400' },
              { range: 'Más de 130',   label: '¡Genio Latam! 🔥',       color: 'text-yellow-300' },
            ].map((level, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-white/40 font-semibold w-32">{level.range}</span>
                <span className={`text-sm font-bold ${level.color}`}>{level.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              {
                q: '¿El test de IQ es gratis?',
                a: 'Sí, el test de IQ en JuegaYa es 100% gratis. No necesitas registrarte ni pagar nada.',
              },
              {
                q: '¿Qué tan preciso es el resultado?',
                a: 'Es un test de entretenimiento basado en preguntas de lógica. Da una estimación aproximada. Para un test clínico oficial consulta un psicólogo.',
              },
              {
                q: '¿Puedo compartir mi resultado?',
                a: 'Sí. Al terminar el test puedes compartir tu IQ y nivel directamente por WhatsApp con un solo clic.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-[#1e1e34] rounded-xl border border-white/10 p-4">
                <dt className="font-black mb-2">{faq.q}</dt>
                <dd className="text-white/50 text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
