'use client'
import { useState } from 'react'

const EMAIL = 'hola@juegaya.app'
const ASUNTOS = ['Consulta general', 'Reportar un problema', 'Sugerir un juego', 'Publicidad y partnerships', 'Otro']
const INPUT = 'w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50'
const LABEL = 'text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block'

// Abre el cliente de correo del visitante con el mensaje ya redactado: no guardamos datos en el servidor.
export default function ContactForm() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nombre = String(data.get('nombre') ?? '')
    const email = String(data.get('email') ?? '')
    const asunto = String(data.get('asunto') ?? '')
    const mensaje = String(data.get('mensaje') ?? '')
    const body = `${mensaje}\n\n—\n${nombre} <${email}>`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`[JuegaYa] ${asunto}`)}&body=${encodeURIComponent(body)}`
    setEnviado(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className={LABEL}>Nombre</label>
        <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required className={INPUT} />
      </div>
      <div>
        <label htmlFor="email" className={LABEL}>Email</label>
        <input id="email" name="email" type="email" placeholder="tu@email.com" required className={INPUT} />
      </div>
      <div>
        <label htmlFor="asunto" className={LABEL}>Asunto</label>
        <select id="asunto" name="asunto" className={INPUT}>
          {ASUNTOS.map(a => <option key={a}>{a}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className={LABEL}>Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} required className={`${INPUT} resize-none`} />
      </div>
      <button type="submit" className="w-full py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
        Enviar mensaje
      </button>
      {enviado && (
        <p className="text-white/50 text-xs text-center">
          Se abrió tu aplicación de correo con el mensaje listo. Si no se abrió, escríbenos a{' '}
          <a href={`mailto:${EMAIL}`} className="text-yellow-400 hover:underline">{EMAIL}</a>.
        </p>
      )}
    </form>
  )
}
