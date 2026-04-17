import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corre mi Bro — Runner Latino Gratis Online | JuegaYa',
  description: 'Corre por las calles de Lima, CDMX, Bogotá y Buenos Aires. Esquiva obstáculos, recoge monedas y comparte tu record por WhatsApp. ¡El runner más latino de internet!',
  keywords: ['corre mi bro', 'juego runner latino', 'subway surfers español', 'runner online gratis'],
}

export default function CorreMiBroPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Arcade</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Corre mi Bro</span>
      </header>

      <div className="max-w-xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Corre mi Bro — El Runner Latino 🏃</h1>
        <p className="text-white/50 mb-4">Arcade · ⭐ 4.8 · 👥 6,200 jugadores · 🆓 Gratis · 📱 Mobile</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 w-full" style={{height:'580px'}}>
          <iframe
            src="/juegos/corre-mi-bro.html"
            style={{width:'100%', height:'100%', border:'none'}}
            title="Corre mi Bro runner latino gratis"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Jugar de nuevo</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir record</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">¿Qué es Corre mi Bro?</h2>
          <p className="text-white/60 leading-relaxed mb-3">Corre mi Bro es el primer juego runner ambientado en las calles de Latinoamérica. Elige tu ciudad y corre esquivando obstáculos típicos de cada lugar.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Controles</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: '← →', action: 'Cambiar de carril' },
              { key: '↑ / Tap', action: 'Saltar' },
              { key: '↓ / Swipe', action: 'Deslizarse' },
              { key: '🪙', action: 'Recoger monedas' },
            ].map((control, i) => (
              <div key={i} className="bg-[#1e1e34] rounded-xl border border-white/10 p-3 flex items-center gap-3">
                <span className="bg-yellow-400 text-black font-black text-xs px-2 py-1 rounded-lg">{control.key}</span>
                <span className="text-sm text-white/60">{control.action}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿Corre mi Bro es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas, sin registro.' },
              { q: '¿Funciona en celular?', a: 'Sí. Desliza a los lados para cambiar carril, arriba para saltar y abajo para deslizarte.' },
              { q: '¿Puedo elegir ciudad?', a: 'Sí. Lima, CDMX, Bogotá y Buenos Aires, cada una con obstáculos únicos.' },
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
