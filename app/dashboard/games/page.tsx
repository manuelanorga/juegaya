'use client'
import { useState } from 'react'
import { GAMES } from '@/lib/games'

export default function GameListPage() {
  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState('')
  const [editGame, setEditGame] = useState<any>(null)
  const [form, setForm] = useState<any>({})
  const [saved, setSaved] = useState(false)

  const categories = [...new Set(GAMES.map(g => g.category))]

  const filtered = GAMES.filter(g => {
    const matchSearch = g.name.toLowerCase().includes(search.toLowerCase()) || g.slug.includes(search.toLowerCase())
    const matchCat = filterCat ? g.category === filterCat : true
    return matchSearch && matchCat
  })

  function openEdit(game: any) {
    setEditGame(game)
    setForm({
      name: game.name,
      slug: game.slug,
      description: game.description,
      instructions: game.tips?.join('\n') || '',
      iframeSrc: game.iframeSrc,
      category: game.category,
      tags: game.tags?.join(', ') || '',
      published: true,
    })
    setSaved(false)
  }

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-8">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-black">Game List</h1>
          <p className="text-white/40 text-sm mt-1">{GAMES.length} juegos en total</p>
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 flex items-center gap-2 bg-[#1e1e34] border border-white/10 rounded-xl px-4 py-2.5">
          <span className="text-white/30">🔍</span>
          <input
            type="text"
            placeholder="Buscar por nombre o slug..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent text-sm text-white placeholder-white/30 outline-none w-full"
          />
        </div>
        <select
          value={filterCat}
          onChange={e => setFilterCat(e.target.value)}
          className="bg-[#1e1e34] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none"
        >
          <option value="">Todas las categorías</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-[#1e1e34] rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {['#','ID','Thumbnail','Nombre','Categoría','Source','URL','Acción'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-white/30 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((game, i) => (
              <tr key={game.slug} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="px-4 py-3 text-sm text-white/30">{i + 1}</td>
                <td className="px-4 py-3 text-xs text-white/40 font-mono">{game.slug.slice(0, 12)}...</td>
                <td className="px-4 py-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-[#111120] flex items-center justify-center">
                    {game.icon
                      ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover" />
                      : <span className="text-xl">{game.emoji || '🎮'}</span>
                    }
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="font-bold text-sm">{game.name}</div>
                  {game.badge && <span className="text-[10px] bg-yellow-400/15 text-yellow-400 font-bold px-2 py-0.5 rounded-full">{game.badge}</span>}
                </td>
                <td className="px-4 py-3 text-sm text-white/50">{game.category}</td>
                <td className="px-4 py-3 text-sm text-white/50">
                  {game.iframeSrc.startsWith('http') ? '🌐 Externo' : '📁 Local'}
                </td>
                <td className="px-4 py-3">
                  
                    href={`/juego/${game.slug}`}
                    target="_blank"
                    className="text-xs font-bold text-yellow-400 hover:underline"
                  >
                    ► Play
                  </a>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEdit(game)}
                      className="w-8 h-8 bg-white/5 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg flex items-center justify-center text-white/50 transition-all text-sm"
                      title="Editar"
                    >✏️</button>
                    <button
                      className="w-8 h-8 bg-white/5 hover:bg-red-400/10 hover:text-red-400 rounded-lg flex items-center justify-center text-white/50 transition-all text-sm"
                      title="Eliminar"
                      onClick={() => confirm(`¿Eliminar ${game.name}?`)}
                    >🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-white/30 text-sm">No se encontraron juegos</div>
        )}
      </div>

      {/* EDIT MODAL */}
      {editGame && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={e => { if(e.target === e.currentTarget) setEditGame(null) }}>
          <div className="bg-[#1e1e34] rounded-2xl border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 sticky top-0 bg-[#1e1e34]">
              <h2 className="font-black text-base">Editar juego</h2>
              <button onClick={() => setEditGame(null)} className="text-white/30 hover:text-white text-xl">✕</button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Título del juego</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Slug</label>
                <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Descripción</label>
                <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={3}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Instrucciones / Tips</label>
                <textarea value={form.instructions} onChange={e => setForm({...form, instructions: e.target.value})} rows={3}
                  placeholder="Una instrucción por línea..."
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">URL del juego</label>
                <input type="text" value={form.iframeSrc} onChange={e => setForm({...form, iframeSrc: e.target.value})}
                  placeholder="https://... o /juegos/mi-juego.html"
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Categoría</label>
                <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Tags (separados por coma)</label>
                <input type="text" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})}
                  placeholder="Arcade, Mobile, Viral..."
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="published" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})}
                  className="w-4 h-4 accent-yellow-400" />
                <label htmlFor="published" className="text-sm font-semibold text-white/70">Publicar juego</label>
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-white/5 sticky bottom-0 bg-[#1e1e34]">
              <button onClick={() => setEditGame(null)}
                className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-white/5 text-white/50 hover:bg-white/10 transition-all">
                Cerrar
              </button>
              <button onClick={handleSave}
                className={`flex-1 py-2.5 rounded-xl font-black text-sm transition-all ${saved ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
                {saved ? '✓ Guardado' : 'Guardar cambios'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
