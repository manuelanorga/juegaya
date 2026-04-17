import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corre mi Bro — Runner Latino Gratis Online | JuegaYa',
  description: 'Corre por las calles de Lima, CDMX, Bogotá y Buenos Aires. Esquiva obstáculos, recoge monedas y comparte tu record por WhatsApp. ¡El runner más latino de internet!',
  keywords: ['corre mi bro', 'juego runner latino', 'subway surfers español', 'runner online gratis', 'juego correr calles'],
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

      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Corre mi Bro — El Runner Latino 🏃</h1>
        <p className="text-white/50 mb-6">Arcade · ⭐ 4.8 · 👥 6,200 jugadores · 🆓 Gratis · 📱 Mobile</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6" style={{height:'600px'}}>
          <iframe src="/juegos/corre-mi-bro.html" className="w-full h-full" title="Corre mi Bro runner latino gratis" allow="fullscreen" />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Jugar de nuevo</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir record</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">¿Qué es Corre mi Bro?</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Corre mi Bro es el primer juego runner ambientado en las calles de Latinoamérica.
            Elige tu ciudad — Lima, CDMX, Bogotá o Buenos Aires — y corre esquivando
            obstáculos típicos de cada ciudad. ¡Recoge monedas y llega lo más lejos posible!
          </p>
          <p className="text-white/60 leading-relaxed">
            Comparte tu distancia por WhatsApp y reta a tus amigos a superarte.
            ¿Quién es el verdadero rey de las calles latinas?
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Cómo jugar</h2>
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

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Las 4 ciudades</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { flag:'🇵🇪', city:'Lima', obs:'Mototaxis, combis, cubos' },
              { flag:'🇲🇽', city:'CDMX', obs:'Tacos, peseros, obras' },
              { flag:'🇨🇴', city:'Bogotá', obs:'Arepas, TransMilenio, gasolineras' },
              { flag:'🇦🇷', city:'Buenos Aires', obs:'Asados, colectivos, columnas' },
            ].map((c, i) => (
              <div key={i} className="bg-[#262640] rounded-xl p-3">
                <div className="text-2xl mb-1">{c.flag}</div>
                <div className="font-black text-sm mb-1">{c.city}</div>
                <div className="text-xs text-white/40">{c.obs}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Rankings de distancia</h2>
          <div className="space-y-2">
            {[
              { range: 'Más de 1,000m', label: '👑 Leyenda del Barrio',  color: 'text-yellow-400' },
              { range: '500 – 1,000m',  label: '🔥 Crack Total',         color: 'text-orange-400' },
              { range: '250 – 500m',    label: '💪 Buen Corredor',        color: 'text-cyan-400' },
              { range: '100 – 250m',    label: '😅 Te falta cardio',      color: 'text-purple-400' },
              { range: 'Menos de 100m', label: '💀 Ni arrancaste',        color: 'text-red-400' },
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
              { q: '¿Corre mi Bro es gratis?', a: 'Sí, Corre mi Bro es 100% gratis en JuegaYa. Sin descargas, sin registro, sin pagos.' },
              { q: '¿Funciona en celular?', a: 'Sí. Usa swipe para moverte — desliza a los lados para cambiar carril, arriba para saltar y abajo para deslizarte.' },
              { q: '¿Puedo elegir mi personaje?', a: 'Sí. Puedes jugar con el Bro o la Bro y elegir entre Lima, CDMX, Bogotá y Buenos Aires.' },
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
