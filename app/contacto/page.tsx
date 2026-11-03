import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con el equipo de JuegaYa. Estamos aquí para ayudarte.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-yellow-400 text-sm font-bold hover:underline mb-8 block">← Volver al inicio</Link>
        <h1 className="text-3xl font-black mb-2">Contacto</h1>
        <p className="text-white/40 text-sm mb-10">Estamos aquí para ayudarte. Escríbenos y te respondemos pronto.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
            <div className="text-3xl mb-3">📧</div>
            <div className="font-black text-base mb-1">Email general</div>
            <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline text-sm">hola@juegaya.app</a>
            <p className="text-white/40 text-xs mt-2">Para consultas generales, sugerencias y colaboraciones.</p>
          </div>
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
            <div className="text-3xl mb-3">🤝</div>
            <div className="font-black text-base mb-1">Publicidad y partnerships</div>
            <a href="mailto:hola@juegaya.app" className="text-yellow-400 hover:underline text-sm">hola@juegaya.app</a>
            <p className="text-white/40 text-xs mt-2">Para oportunidades de publicidad y colaboraciones comerciales.</p>
          </div>
        </div>

        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 mb-6">
          <h2 className="font-black text-base mb-5">Envíanos un mensaje</h2>
          <ContactForm />
        </div>

        <p className="text-white/30 text-xs text-center">Respondemos en menos de 48 horas hábiles.</p>
      </div>
    </div>
  )
}
