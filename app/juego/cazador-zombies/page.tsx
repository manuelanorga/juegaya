import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cazador de Zombies — Jugar Gratis Online | JuegaYa',
  description: 'Juega Cazador de Zombies gratis online en español. 20 niveles de acción y disparos. Sin descargar, sin registro. ¡Elimina todos los zombies!',
  keywords: ['cazador de zombies gratis', 'juego zombies online', 'zombie buster español', 'juegos de zombies gratis'],
}

export default function CazadorZombiesPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Acción</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Cazador de Zombies</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Cazador de Zombies — Jugar Gratis Online 🧟</h1>
        <p className="text-white/50 mb-6">Acción · ⭐ 4.8 · 👥 9,240 jugadores · 🆓 Gratis · 20 niveles</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 w-full bg-black" style={{height:'600px'}}>
          <iframe
            src="/juegos/cazador-zombies/index.html"
            style={{width:'100%', height:'100%', border:'none'}}
            title="Cazador de Zombies gratis online"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Jugar de nuevo</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir por WhatsApp</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Sobre Cazador de Zombies</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Cazador de Zombies es un juego de acción y disparos con 20 niveles de dificultad creciente.
            Elimina hordas de zombies antes de que te alcancen. ¿Puedes llegar al nivel 20?
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
                ['Categoría',            'Acción / Disparos'],
                ['Niveles',             '20 niveles'],
                ['Idioma',              'Español'],
                ['Plataforma',          'Navegador web (PC y móvil)'],
                ['Precio',              '🆓 Gratis'],
                ['Requiere instalación','No'],
                ['Requiere registro',   'No'],
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
              { q: '¿Cazador de Zombies es gratis?', a: 'Sí, es 100% gratis en JuegaYa. Sin descargas ni registro.' },
              { q: '¿Cuántos niveles tiene?', a: 'El juego tiene 20 niveles con dificultad creciente. Cada nivel trae más zombies y más desafíos.' },
              { q: '¿Funciona en celular?', a: 'Sí, está optimizado para móvil y funciona en Android e iOS desde el navegador.' },
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
