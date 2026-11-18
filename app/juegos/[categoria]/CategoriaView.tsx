'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { gameBadge, type Game } from '@/lib/games'
import type { ContenidoCategoria } from '@/lib/categorias'

const PER_PAGE = 30

interface Props {
  cat: { title: string; description: string; descriptionFull: string }
  juegos: Game[]
  /** Etiqueta de visitas reales por slug (solo los que superan el mínimo) */
  visits: Record<string, string>
  /** Texto propio de la categoría, debajo de los juegos */
  contenido?: ContenidoCategoria
}

export default function CategoriaView({ cat, juegos, visits, contenido }: Props) {
  const router = useRouter()
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(juegos.length / PER_PAGE)
  const paginated = juegos.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function randomGame() {
    const r = juegos[Math.floor(Math.random() * juegos.length)]
    router.push(`/juego/${r.slug}`)
  }

  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <div className="px-4 md:px-8 pt-14 md:pt-8 pb-6 border-b border-white/5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="text-xs text-white/30 font-semibold mb-1">
              <Link href="/" className="hover:text-white transition-colors">Juegos</Link>
              <span className="mx-1">»</span>
              <span className="text-white/50">{cat.title}</span>
            </div>
            <h1 className="text-2xl font-black">{cat.title}</h1>
          </div>
          <button
            onClick={randomGame}
            className="flex-shrink-0 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-sm px-4 py-2.5 rounded-full transition-colors"
          >
            🎲 Juego Random
          </button>
        </div>

        <div className="max-w-3xl">
          <p className="text-white/50 text-sm leading-relaxed">{cat.descriptionFull}</p>
        </div>

        {/* Contador */}
        <div className="mt-3 text-xs text-white/25 font-semibold">
          {juegos.length} juego{juegos.length !== 1 ? 's' : ''} disponibles
        </div>
      </div>

      {/* GRID */}
      <div className="px-4 md:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {paginated.map((game, i) => (
            <Link
              key={i}
              href={`/juego/${game.slug}`}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e34] border border-white/5 hover:border-yellow-400/20 hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`w-full aspect-square bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'} flex items-center justify-center relative overflow-hidden`}>
                {game.icon
                  ? <img src={game.icon} alt={game.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  : <span className="text-5xl">{game.emoji || '🎮'}</span>
                }
                {gameBadge(game) && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded z-10">
                    {gameBadge(game)}
                  </span>
                )}
              </div>
              <div className="p-2.5">
                <div className="font-black text-sm leading-tight truncate">{game.name}</div>
                <div className="text-[11px] text-white/35 mt-0.5">{visits[game.slug] ? `👁 ${visits[game.slug]}` : game.category}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINACIÓN */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-10 h-10 rounded-full bg-[#1e1e34] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all disabled:opacity-30"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-10 h-10 rounded-full font-black text-sm transition-all ${
                  page === n
                    ? 'bg-yellow-400 text-black'
                    : 'bg-[#1e1e34] border border-white/10 text-white/50 hover:text-white hover:border-white/30'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 rounded-full bg-[#1e1e34] border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all disabled:opacity-30"
            >
              →
            </button>
          </div>
        )}
      </div>

      {contenido && <Contenido contenido={contenido} juegos={juegos} />}
    </div>
  )
}

function Contenido({ contenido, juegos }: { contenido: ContenidoCategoria; juegos: Game[] }) {
  const bySlug = new Map(juegos.map(g => [g.slug, g]))
  const items = contenido.eleccion?.items.filter(i => bySlug.has(i.slug)) ?? []
  return (
    <section className="px-4 md:px-8 pb-12 max-w-3xl">
      <h2 className="text-lg font-black mb-3">{contenido.titulo}</h2>
      {contenido.parrafos.map((p, i) => (
        <p key={i} className="text-sm text-white/60 leading-relaxed mb-3">{p}</p>
      ))}
      {items.length > 0 && (
        <>
          <h2 className="text-lg font-black mt-8 mb-3">{contenido.eleccion!.titulo}</h2>
          <ul className="space-y-2">
            {items.map(({ slug, texto }) => {
              const g = bySlug.get(slug)!
              return (
                <li key={slug}>
                  <Link href={`/juego/${slug}`} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#1e1e34] border border-white/5 hover:border-yellow-400/40 transition-colors">
                    {g.icon
                      ? <img src={g.icon} alt="" width={48} height={48} loading="lazy" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                      : <span className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0">{g.emoji || '🎮'}</span>}
                    <span className="text-sm leading-snug">
                      <span className="font-black text-white">{g.name}.</span>{' '}
                      <span className="text-white/60">{texto}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </section>
  )
}
