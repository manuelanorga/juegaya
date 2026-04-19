'use client'
import { useState } from 'react'

const ACCENT_COLORS = [
  { name: 'Amarillo',  value: '#ffd000' },
  { name: 'Naranja',   value: '#ff6b00' },
  { name: 'Verde',     value: '#00c864' },
  { name: 'Azul',      value: '#0088ff' },
  { name: 'Púrpura',   value: '#8855ff' },
  { name: 'Rosa',      value: '#ff0088' },
  { name: 'Rojo',      value: '#ff3344' },
  { name: 'Teal',      value: '#00ccaa' },
]

const SIDEBAR_COLORS = [
  { name: 'Negro azulado', value: '#0e0e1a' },
  { name: 'Negro puro',    value: '#080808' },
  { name: 'Gris oscuro',   value: '#1a1a1a' },
  { name: 'Azul marino',   value: '#0a0f1e' },
]

const BG_COLORS = [
  { name: 'Azul oscuro',   value: '#111120' },
  { name: 'Negro puro',    value: '#0a0a0a' },
  { name: 'Gris oscuro',   value: '#141414' },
  { name: 'Azul profundo', value: '#080d1a' },
]

export default function ThemePage() {
  const [accent, setAccent] = useState('#ffd000')
  const [sidebar, setSidebar] = useState('#0e0e1a')
  const [bg, setBg] = useState('#111120')
  const [radius, setRadius] = useState('12')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black">Theme</h1>
        <p className="text-white/40 text-sm mt-1">Personaliza los colores y estilo visual del portal</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl">

        {/* PREVIEW */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl overflow-hidden border border-white/5" style={{ background: bg }}>
            <div className="flex">
              <div className="w-12 flex flex-col items-center py-3 gap-4" style={{ background: sidebar }}>
                <div className="w-6 h-1 rounded" style={{ background: accent }} />
                <div className="w-6 h-1 rounded bg-white/10" />
                <div className="w-6 h-1 rounded bg-white/10" />
                <div className="w-6 h-1 rounded bg-white/10" />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="font-black text-sm" style={{ color: accent }}>JUÉGAYA</div>
                  <div className="flex-1 h-6 bg-white/5 rounded-full" />
                  <div className="px-3 py-1 rounded-full text-xs font-black text-black" style={{ background: accent }}>0 🪙</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="rounded-xl overflow-hidden bg-white/5" style={{ borderRadius: radius + 'px' }}>
                      <div className="h-16 bg-white/5" />
                      <div className="p-2">
                        <div className="h-2 bg-white/20 rounded mb-1" />
                        <div className="h-1.5 bg-white/10 rounded w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-white/30 mt-2 text-center">Vista previa en tiempo real</p>
        </div>

        {/* COLOR DE ACENTO */}
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
          <h2 className="font-black text-base mb-1">Color de acento</h2>
          <p className="text-xs text-white/40 mb-4">Botones, highlights y elementos interactivos</p>
          <div className="grid grid-cols-4 gap-3">
            {ACCENT_COLORS.map(color => (
              <button key={color.value} onClick={() => setAccent(color.value)}
                className="flex flex-col items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl transition-all"
                  style={{ background: color.value, outline: accent === color.value ? `3px solid white` : '3px solid transparent', outlineOffset: '2px' }} />
                <span className="text-[10px] text-white/40 group-hover:text-white transition-colors">{color.name}</span>
              </button>
            ))}
          </div>
          <div className="mt-4">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Color personalizado</label>
            <div className="flex items-center gap-3">
              <input type="color" value={accent} onChange={e => setAccent(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
              <input type="text" value={accent} onChange={e => setAccent(e.target.value)}
                className="flex-1 bg-[#111120] border border-white/10 rounded-xl px-4 py-2 text-sm text-white outline-none font-mono" />
            </div>
          </div>
        </div>

        {/* COLOR SIDEBAR */}
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
          <h2 className="font-black text-base mb-1">Color del sidebar</h2>
          <p className="text-xs text-white/40 mb-4">Fondo del menú lateral izquierdo</p>
          <div className="grid grid-cols-2 gap-3">
            {SIDEBAR_COLORS.map(color => (
              <button key={color.value} onClick={() => setSidebar(color.value)}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all"
                style={{ borderColor: sidebar === color.value ? accent : 'rgba(255,255,255,0.1)' }}>
                <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: color.value }} />
                <span className="text-xs font-semibold text-white/60">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* COLOR FONDO */}
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
          <h2 className="font-black text-base mb-1">Color de fondo</h2>
          <p className="text-xs text-white/40 mb-4">Fondo principal del portal</p>
          <div className="grid grid-cols-2 gap-3">
            {BG_COLORS.map(color => (
              <button key={color.value} onClick={() => setBg(color.value)}
                className="flex items-center gap-3 p-3 rounded-xl border transition-all"
                style={{ borderColor: bg === color.value ? accent : 'rgba(255,255,255,0.1)' }}>
                <div className="w-8 h-8 rounded-lg flex-shrink-0 border border-white/10" style={{ background: color.value }} />
                <span className="text-xs font-semibold text-white/60">{color.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* BORDER RADIUS */}
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
          <h2 className="font-black text-base mb-1">Border radius</h2>
          <p className="text-xs text-white/40 mb-4">Redondez de las tarjetas de juegos</p>
          <div className="flex items-center gap-4 mb-4">
            <input type="range" min="4" max="24" value={radius} onChange={e => setRadius(e.target.value)}
              className="flex-1 accent-yellow-400" />
            <span className="text-sm font-black text-yellow-400 min-w-[40px]">{radius}px</span>
          </div>
          <div className="flex gap-3">
            {['4','8','12','16','24'].map(r => (
              <button key={r} onClick={() => setRadius(r)}
                className="flex-1 py-2 text-xs font-bold transition-all border"
                style={{
                  borderRadius: r + 'px',
                  background: radius === r ? accent : 'rgba(255,255,255,0.05)',
                  color: radius === r ? '#000' : 'rgba(255,255,255,0.5)',
                  borderColor: radius === r ? accent : 'rgba(255,255,255,0.1)',
                }}>
                {r}px
              </button>
            ))}
          </div>
        </div>

        {/* SAVE */}
        <div className="lg:col-span-2 flex justify-end">
          <button onClick={handleSave}
            className={`px-8 py-3 rounded-xl font-black text-sm transition-all ${saved ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
            {saved ? '✓ Tema guardado' : 'Aplicar tema'}
          </button>
        </div>

      </div>
    </div>
  )
}
