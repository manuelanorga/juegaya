'use client'
import { useState } from 'react'

const INITIAL_PAGES = [
  {
    id: 1,
    title: 'Términos y Condiciones',
    slug: 'terminos',
    content: 'Estos son los términos y condiciones de uso de JuegaYa. Al acceder y usar este sitio web, aceptas estar sujeto a estos términos...',
    created: '2026-01-15',
  },
  {
    id: 2,
    title: 'Política de Privacidad',
    slug: 'privacidad',
    content: 'En JuegaYa nos tomamos muy en serio tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información...',
    created: '2026-01-15',
  },
  {
    id: 3,
    title: 'Sobre Nosotros',
    slug: 'sobre-nosotros',
    content: 'JuegaYa es la plataforma de juegos HTML5 gratis más grande de Latinoamérica...',
    created: '2026-01-20',
  },
]

export default function PaginasPage() {
  const [tab, setTab] = useState(0)
  const [pages, setPages] = useState(INITIAL_PAGES)
  const [editPage, setEditPage] = useState<any>(null)
  const [form, setForm] = useState<any>({})
  const [saved, setSaved] = useState(false)
  const [newPage, setNewPage] = useState({ title: '', slug: '', content: '', created: new Date().toISOString().slice(0,10) })
  const [published, setPublished] = useState(false)

  function slugify(name: string) {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  function openEdit(page: any) {
    setEditPage(page)
    setForm({ ...page })
    setSaved(false)
  }

  function handleSave() {
    setPages(prev => prev.map(p => p.id === form.id ? { ...form } : p))
    setSaved(true)
    setTimeout(() => { setSaved(false); setEditPage(null) }, 1500)
  }

  function handleDelete(id: number) {
    if (confirm('¿Eliminar esta página?')) {
      setPages(prev => prev.filter(p => p.id !== id))
    }
  }

  function handlePublish() {
    const id = Math.max(...pages.map(p => p.id)) + 1
    setPages(prev => [...prev, { ...newPage, id }])
    setPublished(true)
    setTimeout(() => {
      setPublished(false)
      setNewPage({ title: '', slug: '', content: '', created: new Date().toISOString().slice(0,10) })
      setTab(0)
    }, 1500)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black">Páginas</h1>
        <p className="text-white/40 text-sm mt-1">Gestiona las páginas estáticas del portal</p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-8 bg-[#1e1e34] p-1.5 rounded-2xl w-fit">
        {['Páginas', 'Add Page'].map((t, i) => (
          <button key={i} onClick={() => setTab(i)}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${tab === i ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* TAB 1 — PÁGINAS */}
      {tab === 0 && (
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/5">
                {['#','ID','Título','Creado','Slug','URL','Acción'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-white/30 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pages.map((page, i) => (
                <tr key={page.id} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                  <td className="px-4 py-3 text-sm text-white/30">{i + 1}</td>
                  <td className="px-4 py-3 text-xs text-white/40 font-mono">#{page.id}</td>
                  <td className="px-4 py-3 font-bold text-sm">{page.title}</td>
                  <td className="px-4 py-3 text-sm text-white/40">{page.created}</td>
                  <td className="px-4 py-3 text-xs text-white/40 font-mono">/{page.slug}</td>
                  <td className="px-4 py-3">
                    <a href={`/${page.slug}`} target="_blank"
                      className="text-xs font-bold text-yellow-400 hover:underline">
                      Visit
                    </a>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(page)}
                        className="w-8 h-8 bg-white/5 hover:bg-yellow-400/10 hover:text-yellow-400 rounded-lg flex items-center justify-center text-white/50 transition-all text-sm">
                        ✏️
                      </button>
                      <button onClick={() => handleDelete(page.id)}
                        className="w-8 h-8 bg-white/5 hover:bg-red-400/10 hover:text-red-400 rounded-lg flex items-center justify-center text-white/50 transition-all text-sm">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {pages.length === 0 && (
            <div className="text-center py-12 text-white/30 text-sm">No hay páginas creadas</div>
          )}
        </div>
      )}

      {/* TAB 2 — ADD PAGE */}
      {tab === 1 && (
        <div className="max-w-2xl">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-5">

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Título de página *</label>
              <input type="text" value={newPage.title} placeholder="Ej: Términos y Condiciones"
                onChange={e => setNewPage({...newPage, title: e.target.value, slug: slugify(e.target.value)})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Page Slug</label>
              <div className="flex items-center gap-2 bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5">
                <span className="text-white/30 text-sm">juegaya.app/</span>
                <input type="text" value={newPage.slug} onChange={e => setNewPage({...newPage, slug: e.target.value})}
                  className="bg-transparent text-sm text-white outline-none flex-1 font-mono" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Contenido *</label>
              <textarea value={newPage.content} onChange={e => setNewPage({...newPage, content: e.target.value})}
                placeholder="Escribe el contenido de la página aquí..." rows={12}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none leading-relaxed" />
              <div className="text-xs text-white/25 mt-1">{newPage.content.length} caracteres</div>
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Fecha de publicación</label>
              <input type="date" value={newPage.created} onChange={e => setNewPage({...newPage, created: e.target.value})}
                className="bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>

            <button onClick={handlePublish} disabled={!newPage.title || !newPage.content}
              className={`w-full py-3 rounded-xl font-black text-sm transition-all ${
                published ? 'bg-green-400 text-black' :
                (!newPage.title || !newPage.content) ? 'bg-white/10 text-white/30 cursor-not-allowed' :
                'bg-yellow-400 text-black hover:bg-yellow-300'
              }`}>
              {published ? '✓ Página publicada' : 'Publicar página'}
            </button>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editPage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={e => { if(e.target === e.currentTarget) setEditPage(null) }}>
          <div className="bg-[#1e1e34] rounded-2xl border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 sticky top-0 bg-[#1e1e34]">
              <h2 className="font-black text-base">Editar página</h2>
              <button onClick={() => setEditPage(null)} className="text-white/30 hover:text-white text-xl">x</button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Título de página</label>
                <input type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Page Slug</label>
                <div className="flex items-center gap-2 bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5">
                  <span className="text-white/30 text-sm">juegaya.app/</span>
                  <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})}
                    className="bg-transparent text-sm text-white outline-none flex-1 font-mono" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Contenido</label>
                <textarea value={form.content} onChange={e => setForm({...form, content: e.target.value})} rows={12}
                  className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none leading-relaxed" />
                <div className="text-xs text-white/25 mt-1">{form.content?.length || 0} caracteres</div>
              </div>
            </div>

            <div className="flex gap-3 px-6 py-4 border-t border-white/5 sticky bottom-0 bg-[#1e1e34]">
              <button onClick={() => setEditPage(null)}
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
