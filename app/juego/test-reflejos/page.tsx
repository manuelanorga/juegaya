import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test de Reflejos Online Gratis — ¿Qué tan rápido eres? | JuegaYa',
  description: 'Mide tu tiempo de reacción gratis. ¿Tus reflejos son de élite o de abuelo? 3 intentos, resultado inmediato. Comparte por WhatsApp y reta a tus amigos.',
  keywords: ['test de reflejos', 'tiempo de reaccion online', 'test reflejos gratis', 'medir reflejos'],
}

export default function TestReflejosPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Reflejos</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Test de Reflejos</span>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Test de Reflejos — ¿Eres más rápido que el 95% de Latam?</h1>
        <p className="text-white/50 mb-6">Reflejos · ⭐ 4.7 · 👥 8,430 jugadores · 🆓 Gratis · ⏱ 1 minuto</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6" style={{height:'480px'}}>
          <iframe src="/juegos/test-reflejos.html" className="w-full h-full" title="Test de reflejos online gratis" allow="fullscreen" />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Repetir test</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir resultado</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">¿Qué mide el test de reflejos?</h2>
          <p className="text-white/60 leading-relaxed mb-3">Este test mide tu tiempo de reacción visual — cuántos milisegundos tardas en responder a un estímulo visual. El promedio humano es entre 200-300ms. Los deportistas de élite suelen estar por debajo de 200ms.</p>
          <p className="text-white/60 leading-relaxed">Comparte tu resultado por WhatsApp y descubre quién tiene los mejores reflejos entre tus amigos.</p>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Clasificación de reflejos</h2>
          <div className="space-y-2">
            {[
              { range: 'Menos de 150ms', label: '🔥 Reflejos de Dios — Top 1%',    color: 'text-yellow-400' },
              { range: '150 – 200ms',    label: '⚡ Élite — Top 5%',               color: 'text-cyan-400' },
              { range: '200 – 250ms',    label: '😎 Crack — Top 15%',              color: 'text-purple-400' },
              { range: '250 – 300ms',    label: '👍 Bueno — Por encima del promedio', color: 'text-green-400' },
              { range: '300 – 400ms',    label: '😊 Normal — Promedio Latam',      color: 'text-yellow-300' },
              { range: 'Más de 400ms',   label: '😅 Necesitas practicar',          color: 'text-orange-400' },
            ].map((level, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-white/40 font-semibold w-36">{level.range}</span>
                <span className={`text-sm font-bold ${level.color}`}>{level.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿Cómo funciona el test de reflejos?', a: 'Espera a que la pantalla se ponga verde y toca lo más rápido que puedas. Tienes 3 intentos y se calcula tu promedio.' },
              { q: '¿Cuál es el tiempo de reacción normal?', a: 'El promedio humano está entre 200-300ms. Menos de 200ms es considerado excelente. Los jugadores profesionales de videojuegos suelen tener entre 150-200ms.' },
              { q: '¿Puedo mejorar mis reflejos?', a: 'Sí. Con práctica constante puedes mejorar tu tiempo de reacción. Jugar videojuegos de acción, hacer deporte y descansar bien ayudan a tener mejores reflejos.' },
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
