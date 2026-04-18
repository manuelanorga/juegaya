'use client'
import { useState } from 'react'
import { GAMES } from '@/lib/games'

const CATEGORIES = [...new Set(GAMES.map(g => g.category))]
const TABS = ['Upload Game', 'Fetch Game', 'Remote Add', 'JSON Importer']

export default function AddGamePage() {
  const [tab, setTab] = useState(0)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    name: '', slug: '', description: '', instructions: '',
    category: CATEGORIES[0], tags: '', published: true,
    iframeSrc: '', remoteUrl: '', json: '',
  })

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function slugify(name: string) {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black">Add Game</h1>
        <p className="text-white/40 text-sm mt-1">Agrega un nuevo juego a JuegaYa</p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-8 bg-[#1e1e34] p-1.5 rounded-2xl w-fit">
        {TABS.map((t, i) => (
          <button key={i} onClick={() => setTab(i)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${tab === i ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* TAB 1 — UPLOAD GAME */}
      {tab === 0 && (
        <div className="max-w-xl">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-5">

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Título del juego *</label>
              <input type="text" value={form.name} placeholder="Ej: Aventura Espacial"
                onChange={e => setForm({...form, name: e.target.value, slug: slugify(e.target.value)})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Slug (auto-generado)</label>
              <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Descripción *</label>
              <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})}
                placeholder="Describe el juego en 2-3 líneas..." rows={3}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Instrucciones</label>
              <textarea value={form.instructions} onChange={e => setForm({...form, instructions: e.target.value})}
                placeholder="Una instrucción por línea..." rows={3}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
            </div>

            {/* Imagen */}
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Thumbnail del juego</label>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-yellow-400/30 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🖼️</div>
                <div className="text-sm font-bold text-white/50 mb-1">Arrastra tu imagen aquí</div>
                <div className="text-xs text-white/30">PNG o JPG · Tamaño recomendado: 256×256px · Máx 2MB</div>
                <input type="file" accept="image/png,image/jpeg" className="hidden" />
                <button className="mt-3 text-xs font-bold text-yellow-400 hover:underline">o selecciona un archivo</button>
              </div>
            </div>

            {/* Video preview */}
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Video preview (opcional)</label>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-yellow-400/30 transition-colors cursor-pointer">
                <div className="text-3xl mb-2">🎬</div>
                <div className="text-sm font-bold text-white/50 mb-1">Video de gameplay</div>
                <div className="text-xs text-white/30">MP4 o MOV · Máx 30 segundos · Máx 20MB</div>
                <input type="file" accept="video/mp4,video/quicktime" className="hidden" />
                <button className="mt-3 text-xs font-bold text-yellow-400 hover:underline">o selecciona un archivo</button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Categoría *</label>
              <select value={form.category} onChange={e => setForm({...form, category: e.target.value})}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Tags (separados por coma)</label>
              <input type="text" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})}
                placeholder="Arcade, Mobile, Viral, HTML5..."
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>

            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="pub" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})}
                className="w-4 h-4 accent-yellow-400" />
              <label htmlFor="pub" className="text-sm font-semibold text-white/70">Publicar inmediatamente</label>
            </div>

            <button onClick={handleSave}
              className={`w-full py-3 rounded-xl font-black text-sm transition-all ${saved ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
              {saved ? '✓ Juego subido' : 'SUBIR EL JUEGO'}
            </button>
          </div>
        </div>
      )}

      {/* TAB 2 — FETCH GAME */}
      {tab === 1 && (
        <div className="max-w-xl">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-5">
            <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4 text-sm text-blue-300">
              Pega la URL de un portal de juegos (CrazyGames, GameDistribution, etc.) y extraeremos automáticamente los datos del juego.
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">URL del juego</label>
              <input type="url" placeholder="https://www.crazygames.com/game/..."
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
            </div>
            <button className="w-full py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
              Extraer datos del juego
            </button>
            <div className="bg-white/3 rounded-xl p-4 text-sm text-white/30 text-center">
              Los datos extraídos aparecerán aquí para que los revises antes de publicar.
            </div>
          </div>
        </div>
      )}

      {/* TAB 3 — REMOTE ADD */}
      {tab === 2 && (
        <div className="max-w-xl">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-5">
            <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4 text-sm text-blue-300">
              Agrega un juego externo usando su URL de iframe. El juego se cargará directamente desde el servidor del desarrollador.
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Título del juego *</label>
              <input type="text" placeholder="Nombre del juego"
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50" />
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">URL del iframe *</label>
              <input type="url" placeholder="https://games.example.com/game/index.html"
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Categoría</label>
              <select className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Vista previa</label>
              <div className="bg-[#111120] rounded-xl h-[200px] flex items-center justify-center border border-white/5 text-white/20 text-sm">
                La vista previa aparecerá aquí
              </div>
            </div>
            <button className="w-full py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
              Agregar juego remoto
            </button>
          </div>
        </div>
      )}

      {/* TAB 4 — JSON IMPORTER */}
      {tab === 3 && (
        <div className="max-w-xl">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-5">
            <div className="bg-blue-400/10 border border-blue-400/20 rounded-xl p-4 text-sm text-blue-300">
              Importa uno o varios juegos pegando un JSON con el formato de JuegaYa. Ideal para migraciones masivas.
            </div>
            <div>
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">JSON de juegos</label>
              <textarea value={form.json} onChange={e => setForm({...form, json: e.target.value})}
                placeholder={`[\n  {\n    "name": "Mi Juego",\n    "slug": "mi-juego",\n    "iframeSrc": "/juegos/mi-juego.html",\n    "category": "Arcade"\n  }\n]`}
                rows={12}
                className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none font-mono" />
            </div>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-xl font-black text-sm bg-white/5 text-white/50 hover:bg-white/10 transition-all">
                Validar JSON
              </button>
              <button className="flex-1 py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
                Importar juegos
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
