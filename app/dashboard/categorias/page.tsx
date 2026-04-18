'use client'
import { useState } from 'react'
import { GAMES } from '@/lib/games'

const INITIAL_CATEGORIES = [
  { id: 1, name: 'Arcade',       slug: 'arcade',       description: 'Juegos arcade clásicos y modernos', meta: 'Juegos arcade gratis online sin descargar. Los mejores juegos arcade en español para Latam.', priority: 1, hidden: false },
  { id: 2, name: 'Puzzle',       slug: 'puzzle',       description: 'Juegos de lógica y rompecabezas', meta: 'Juegos puzzle gratis online. Pon a prueba tu mente con los mejores puzzles en español.', priority: 2, hidden: false },
  { id: 3, name: 'Acción',       slug: 'accion',       description: 'Juegos de acción y disparos', meta: 'Juegos de acción gratis online sin descargar. Disparos, zombies y aventuras en español.', priority: 3, hidden: false },
  { id: 4, name: 'Inteligencia', slug: 'inteligencia', description: 'Tests de IQ, lógica y memoria', meta: 'Test de IQ gratis online en español. Juegos de inteligencia y lógica para Latam.', priority: 4, hidden: false },
  { id: 5, name: 'Aventura',     slug: 'aventura',     description: 'Juegos de aventura y exploración', meta: 'Juegos de aventura gratis online sin descargar en español.', priority: 5, hidden: false },
  { id: 6, name: 'Habilidad',    slug: 'habilidad',    description: 'Juegos de habilidad y reflejos', meta: 'Juegos de habilidad gratis online. Pon a prueba tus reflejos en español.', priority: 6, hidden: false },
]

export default function CategoriasPage() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES)
  const [editCat, setEditCat] = useState<any>(null)
  const [form, setForm] = useState<any>({})
  const [saved, setSaved] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [newCat, setNewCat] = useState({ name: '', slug: '', description: '', meta: '' })
  const [addSaved, setAddSaved] = useState(false)

  function slugify(name: string) {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  function gameCount(catName: string) {
    return GAMES.filter(g => g.category === catName).length
  }

  function openEdit(cat: any) {
    setEditCat(cat)
    setForm({ ...cat })
    setSaved(false)
  }

  function handleSave() {
    setCategories(prev => prev.map(c => c.id === form.id ? { ...form } : c))
    setSaved(true)
    setTimeout(() => { setSaved(false); setEditCat(null) }, 1500)
  }

  function toggleHidden(id: number) {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, hidden: !c.hidden } : c))
  }

  function handleAddSave() {
    const id = Math.max(...categories.map(c => c.id)) + 1
    setCategories(prev => [...prev, { ...newCat, id, priority: id, hidden: false }])
    setAddSaved(true)
    setTimeout(() => { setAddSaved(false); setShowAdd(false); setNewCat({ name: '', slug: '', description: '', meta: '' }) }, 1500)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black">Categorías</h1>
          <p className="text-white/40 text-sm mt-1">{categories.length} categorías · {categories.filter(c => !c.hidden).length} visibles</p>
        </div>
        <button onClick={() => setShowAdd(true)}
          className="px-5 py-2.5 rounded-full font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
          + Nueva categoría
        </button>
      </div>

      {/* ADD FORM */}
      {showAdd && (
        <div className="bg-[#1e1e34] rounded-2xl border border-yellow-400/20 p-6 mb-6 space-y-4">
          <h2 className="font-black text-base">Nueva categoría</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Nombre *</label>
              <input type="text" value={newCat.name} placeholder="Ej: Deportes"
                onChange={e => setNewCat({...newCat, name: e.target.value, slug: slugify(e.target.value)})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Slug</label>
              <input type="text" value={newCat.slug} onChange={e => setNewCat({...newCat, slug: e.target.value})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
            </div>
          </div>
          <div>
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Descripción</label>
            <input type="text" value={newCat.description} onChange={e => setNewCat({...newCat, description: e.target.value})}
              placeholder="Descripción corta de la categoría"
              className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
          </div>
          <div>
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Meta descripción (SEO)</label>
            <textarea value={newCat.meta} onChange={e => setNewCat({...newCat, meta: e.target.value})}
              placeholder="Descripción optimizada para Google..." rows={2}
              className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowAdd(false)}
              className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-white/5 text-white/50 hover:bg-white/10 transition-all">
              Cancelar
            </button>
            <button onClick={handleAddSave}
              className={`flex-1 py-2.5 rounded-xl font-black text-sm transition-all ${addSaved ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
              {addSaved ? '✓ Categoría creada' : 'Crear categoría'}
            </button>
          </div>
        </div>
      )}

      {/* LIST */}
      <div className="bg-[#1e1e34] rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              {['ID','Nombre','Slug','Juegos','Prioridad','Estado','Acción'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-white/30 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories.sort((a,b) => a.priority - b.priority).map(cat => (
              <tr key={cat.id} className={`border-b border-white/5 transition-colors ${cat.hidden ? 'opacity-40' : 'hover:bg-white/2'}`}>
                <td className="px-4 py-3 text-sm text-white/30">#{cat.id}</td>
                <td className="px-4 py-3 font-bold text-sm">{cat.name}</td>
                <td className="px-4 py-3 text-xs text-white/40 font-mono">{cat.slug}</td>
                <td className="px-4 py-3">
                  <span className="bg-yellow-400/15 text-yellow-400 text-xs font-black px-2.5 py-1 rounded-full">
                    {gameCount(cat.name)} juegos
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-white/40">{cat.priority}</td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleHidden(cat.id)}
                    className={`text-xs font-bold px-3 py-1 rounded-full transition-all ${cat.hidden ? 'bg-red-400/15 text-red-400' : 'bg-green-400/15 text-green-400'}`}>
                    {cat.hidden ? 'Oculta' : 'Visible'}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => openEdit(cat)}
                    className="w-8 h-8 bg-white/5 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg flex items-center justify-center text-white/50 transition-all text-sm">
                    ✏️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editCat && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={e => { if(e.target === e.currentTarget) setEditCat(null) }}>
          <div className="bg-[#1e1e34] rounded-2xl border border-white/10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 sticky top-0 bg-[#1e1e34]">
              <h2 className="font-black text-base">Editar categoría</h2>
              <button onClick={() => setEditCat(null)} className="text-white/30 hover:text-white text-xl">x</button>
            </div>

            <div className="p-6 space-y-4">

              {/* Aviso importante */}
              <div className="bg-amber-400/10 border border-amber-400/25 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">⚠️</span>
                  <div>
                    <div className="font-black text-sm text-amber-400 mb-1">Atención al cambiar el nombre</div>
                    <div className="text-xs text-white/50 leading-relaxed">
                      Cambiar el nombre de esta categoría actualizará cómo aparece en el portal, pero los juegos asignados a <strong className="text-white/70">"{editCat.name}"</strong> necesitarán actualizarse manualmente en <code className="bg-white/10 px-1 rounded">lib/games.ts</code> para reflejar el nuevo nombre.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">ID</label>
                  <input type="text" value={form.id} disabled
                    className="w-full bg-[#111120]/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white/30 font-mono" />
                </div>
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Prioridad</label>
                  <input type="number" value={form.priority} onChange={e => setForm({...form, priority: parseInt(e.target.value)})}
                    className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Nombre</label>
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
                <input type="text" value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Meta descripción (SEO)</label>
                <textarea value={form.meta} onChange={e => setForm({...form, meta: e.target.value})} rows={3}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
              </div>

              <div className="flex items-center gap-3 py-1">
                <input type="checkbox" id="hidden" checked={form.hidden} onChange={e => setForm({...form, hidden: e.target.checked})}
                  className="w-4 h-4 accent-yellow-400" />
                <label htmlFor="hidden" className="text-sm font-semibold text-white/70">Ocultar esta categoría del portal</label>
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-white/5 sticky bottom-0 bg-[#1e1e34]">
              <button onClick={() => setEditCat(null)}
                className="flex-1 py-2.5 rounded-xl font-bold text-sm bg-white/5 text-white/50 hover:bg-white/10 transition-all">
                Cancelar
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
