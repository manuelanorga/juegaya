'use client'
import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export interface SearchItem {
  slug: string
  name: string
  category: string
  tags: string[]
  icon: string | null
  emoji?: string
}

// Minúsculas y sin tildes: "accion" encuentra "Acción"
const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

export default function SearchBox({ games }: { games: SearchItem[] }) {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)

  const results = useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return []
    return games
      .filter(g => normalize([g.name, g.category, ...g.tags].join(' ')).includes(q))
      .slice(0, 6)
  }, [query, games])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (results[0]) router.push(`/juego/${results[0].slug}`)
  }

  return (
    <div ref={boxRef} className="relative"
      onBlur={e => { if (!boxRef.current?.contains(e.relatedTarget as Node)) setOpen(false) }}>
      <form onSubmit={handleSubmit} role="search"
        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
        <span className="text-white/30 text-sm" aria-hidden>🔍</span>
        <input type="search" value={query} placeholder="Buscar juegos..." aria-label="Buscar juegos"
          onChange={e => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full" />
      </form>
      {open && query.trim() && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-[#1e1e34] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
          {results.length === 0 ? (
            <div className="px-4 py-3 text-sm text-white/40">No encontramos juegos con “{query}”.</div>
          ) : results.map(g => (
            <Link key={g.slug} href={`/juego/${g.slug}`} onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2 hover:bg-white/5 transition-colors">
              <div className="w-9 h-9 rounded-lg overflow-hidden bg-[#262640] flex-shrink-0 flex items-center justify-center text-lg">
                {g.icon ? <img src={g.icon} alt="" className="w-full h-full object-cover" /> : (g.emoji || '🎮')}
              </div>
              <div className="min-w-0">
                <div className="text-sm font-black truncate">{g.name}</div>
                <div className="text-[11px] text-white/40">{g.category}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
