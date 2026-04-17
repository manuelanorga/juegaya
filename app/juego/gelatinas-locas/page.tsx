import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gelatinas Locas — Juego de Combinar Gratis Online | JuegaYa',
  description: 'Juega Gelatinas Locas gratis online. Combina 3 gelatinas del mismo color y supera todos los niveles. Sin descargar, sin registro. ¡El mejor juego de puzzle!',
  keywords: ['gelatinas locas gratis', 'jelly match 3 español', 'juego combinar colores', 'puzzle gratis online', 'juegos de gelatinas'],
}

export default function GelatinasLocasPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Puzzle</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Gelatinas Locas</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-black mb-2">Gelatinas Locas — Combina y Gana 🍬</h1>
        <p className="text-white/50 mb-6">Puzzle · ⭐ 4.9 · 👥 11,430 jugadores · 🆓 Gratis · 📱 Mobile</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 w-full bg-black" style={{height:'600px'}}>
          <iframe
            src="/juegos/gelatinas-locas/index.html"
            style={{width:'100%', height:'100%', border:'none'}}
            title="Gelatinas Locas juego gratis online"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl">🔄 Jugar de nuevo</button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl">💬 Compartir por WhatsApp</button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Sobre Gelatinas Locas</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Gelatinas Locas es el juego de puzzle más adictivo de JuegaYa. Combina 3 o más
            gelatinas del mismo color para eliminarlas y sumar puntos. Con decenas de niveles
            de dificultad creciente, ¿puedes completarlos todos?
          </p>
          <p className="text-white/60 leading-relaxed">
            Perfecto para jugar en el celular o en la computadora. Sin descargas, sin registro. 100% gratis.
          </p>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Detalles del juego</h2>
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Categoría',            'Puzzle / Match 3'],
                ['Idioma',              'Español'],
                ['Plataforma',          'Navegador web (PC y móvil)'],
                ['Precio',              '🆓 Gratis'],
                ['Requiere instalación','No'],
                ['Requiere registro',   'No'],
                ['Valoración',          '⭐ 4.9/5'],
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
              { q: '¿Gelatinas Locas es gratis?', a: 'Sí, es 100% gratis en JuegaYa. Sin descargas ni registro necesario.' },
              { q: '¿Cómo se juega?', a: 'Combina 3 o más gelatinas del mismo color tocándolas o haciendo clic. Cuantas más combines de una vez, más puntos ganas.' },
              { q: '¿Funciona en celular?', a: 'Sí, Gelatinas Locas está optimizado para móvil. Funciona en Android e iOS desde el navegador.' },
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
