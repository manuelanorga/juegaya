import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIAS, palabras } from '@/lib/guias'
import { getGame } from '@/lib/games'

export const metadata: Metadata = {
  title: 'Guías y Trucos para Juegos de Palabras, Lógica y Cartas',
  description: 'Guías en español para mejorar en sudoku, solitario, ahorcado, crucigramas, 2048 y Palabro: reglas, técnicas paso a paso y errores comunes.',
  alternates: { canonical: '/guias' },
}

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-[#111120] text-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8 pt-14 md:pt-10 pb-12">
        <div className="text-xs text-white/30 font-semibold mb-1">
          <Link href="/" className="hover:text-white transition-colors">Juegos</Link>
          <span className="mx-1">»</span>
          <span className="text-white/50">Guías</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black mb-3">Guías y trucos</h1>
        <p className="text-sm text-white/60 leading-relaxed mb-8">
          Explicaciones paso a paso para mejorar en nuestros juegos: las reglas completas, las técnicas que usan los
          jugadores con experiencia y los errores más comunes. Cada guía termina con el juego listo para practicar.
        </p>
        <ul className="space-y-3">
          {GUIAS.map(g => {
            const juego = getGame(g.gameSlug)
            return (
              <li key={g.slug}>
                <Link href={`/guias/${g.slug}`} className="flex items-center gap-4 p-3 rounded-2xl bg-[#1e1e34] border border-white/5 hover:border-yellow-400/40 transition-colors">
                  {juego?.icon && <img src={juego.icon} alt="" width={64} height={64} loading="lazy" className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />}
                  <span className="min-w-0">
                    <span className="block font-black leading-snug">{g.title}</span>
                    <span className="block text-sm text-white/50 mt-1 line-clamp-2">{g.description}</span>
                    <span className="block text-xs text-white/30 mt-1">{Math.max(1, Math.round(palabras(g) / 200))} min de lectura</span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
