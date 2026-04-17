import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Escape del Vikingo — Jugar Gratis Online | JuegaYa',
  description: 'Juega El Escape del Vikingo gratis online en español. Ayuda al vikingo a escapar de los enemigos en esta aventura de acción. Sin descargar, sin registro.',
  keywords: ['escape del vikingo gratis', 'juego vikingo online', 'juegos de vikingos gratis', 'aventura vikingo español'],
}

export default function EscapeVikingoPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Aventura</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">El Escape del Vikingo</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">El Escape del Vikingo — Aventura Gratis 🪖</h1>
        <p className="text-white/50 mb-6">Aventura · ⭐ 4.8 · 👥 7,650 jugadores · 🆓 Gratis · 📱 Mobile</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 w-full bg-black" style={{height:'600px'}}>
          <iframe
            src="/juegos/escape-vikingo/index.html"
            style={{width:'100%', height:'100%', border:'none'}}
            title="El Escape del Vikingo juego gratis online"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Jugar de nuevo</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir por WhatsApp</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Sobre El Escape del Vikingo</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            El Escape del Vikingo es un juego de aventura y plataformas donde debes ayudar
            a tu vikingo a escapar de enemigos y trampas. Con gráficos HD y niveles
            desafiantes, ¿puedes completar todos los niveles?
          </p>
          <p className="text-white/60 leading-relaxed">
            Juega directamente desde tu navegador sin descargar nada. Compatible con PC y móvil. 100% gratis.
          </p>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Detalles del juego</h2>
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Categoría',            'Aventura / Plataformas'],
                ['Idioma',              'Español'],
                ['Plataforma',          'Navegador web (PC y móvil)'],
                ['Precio',              '🆓 Gratis'],
                ['Requiere instalación','No'],
                ['Requiere registro',   'No'],
                ['Valoración',          '⭐ 4.8/5'],
              ].map(([label, value], i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="py-2 text-white/40 font-semibold w-40">{label}</td>
                  <td className="py-2 font-bold">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-black mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {[
              { q: '¿El Escape del Vikingo es gratis?', a: 'Sí, es 100% gratis en JuegaYa. Sin descargas ni registro necesario.' },
              { q: '¿Funciona en celular?', a: 'Sí, está optimizado para móvil y funciona en Android e iOS desde el navegador.' },
              { q: '¿Cuántos niveles tiene?', a: 'El juego tiene múltiples niveles con dificultad creciente. Cada nivel trae nuevos enemigos y obstáculos.' },
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
