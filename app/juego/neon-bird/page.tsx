import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neon Bird — Jugar Gratis Online Sin Descargar | JuegaYa',
  description: 'Juega Neon Bird gratis online. El clásico juego de esquivar obstáculos con efectos neón. Sin descargar, sin registro. ¡Reta a tus amigos!',
  keywords: ['neon bird gratis', 'jugar neon bird online', 'neon bird sin descargar'],
}

export default function NeonBirdPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">

      <header className="sticky top-0 z-50 bg-[#111120]/95 backdrop-blur border-b border-white/5 h-[60px] flex items-center px-6 gap-4">
        <a href="/" className="text-2xl font-black text-yellow-400">JUÉGAYA</a>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white/60">Arcade</span>
        <span className="text-white/30">›</span>
        <span className="text-sm font-bold text-white">Neon Bird</span>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">

        <h1 className="text-3xl font-black mb-2">Neon Bird — Jugar Gratis Online</h1>
        <p className="text-white/50 mb-6">Arcade · ⭐ 4.9 · 👥 18,240 jugadores · 🆓 Gratis · 📱 Funciona en móvil</p>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6" style={{height: '520px'}}>
          <iframe
            src="/juegos/neon-bird.html"
            className="w-full h-full"
            title="Jugar Neon Bird gratis online"
            allow="fullscreen"
          />
        </div>

        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black py-3 rounded-xl text-base">
            ▶ Jugar de nuevo
          </button>
          <button className="flex-1 bg-[#25D366] text-white font-black py-3 rounded-xl text-base">
            💬 Retar en WhatsApp
          </button>
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Sobre Neon Bird</h2>
          <p className="text-white/60 leading-relaxed mb-3">
            Neon Bird es un juego arcade de habilidad donde debes esquivar obstáculos con
            tu pájaro neón. Con cada partida mejorarás tus reflejos y subirás en el ranking
            latinoamericano. ¿Puedes llegar al Top 10 de tu país?
          </p>
          <p className="text-white/60 leading-relaxed">
            Juega directamente desde tu navegador sin descargar nada. Compatible con
            celular Android, iPhone y computadora. 100% gratis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-black mb-3">Cómo jugar Neon Bird</h2>
          <ol className="space-y-2">
            {[
              'Haz clic o toca la pantalla para hacer volar al pájaro',
              'Esquiva los obstáculos verdes sin tocarlos',
              'Cuanto más lejos llegues, más puntos ganas',
              'Comparte tu puntaje por WhatsApp y reta a tus amigos',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-white/60">
                <span className="bg-yellow-400 text-black text-xs font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i+1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-8 bg-[#1e1e34] rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-black mb-4">Detalles del juego</h2>
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Categoría',            'Arcade'],
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
              {
                q: '¿Cómo jugar Neon Bird gratis?',
                a: 'Puedes jugar Neon Bird gratis directamente desde tu navegador en JuegaYa. No necesitas descargar nada ni crear una cuenta. Solo haz clic en Jugar y empieza.',
              },
              {
                q: '¿Neon Bird funciona en celular?',
                a: 'Sí, Neon Bird está optimizado para móvil y funciona en Android e iOS. Solo abre juegaya.com desde tu navegador.',
              },
              {
                q: '¿Puedo jugar Neon Bird con amigos?',
                a: 'Sí. Al terminar una partida puedes compartir tu puntaje por WhatsApp. Tu amigo recibe un enlace con tu score y puede intentar superarte.',
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
