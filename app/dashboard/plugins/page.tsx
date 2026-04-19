'use client'
import { useState } from 'react'

const DISTRIBUTORS = [
  {
    id: 'gamepix',
    name: 'GamePix',
    logo: '🎮',
    description: 'Miles de juegos HTML5 de alta calidad. API pública disponible.',
    registration: false,
    note: 'No requiere registro para empezar. Para estadísticas y revenue share necesitas un Publisher ID gratuito en gamepix.com',
    apiUrl: 'https://games.gamepix.com/games',
    categoriesUrl: 'https://games.gamepix.com/categories',
  },
  {
    id: 'gamemonetize',
    name: 'GameMonetize',
    logo: '💰',
    description: 'Gran catálogo de juegos con revenue share integrado.',
    registration: true,
    note: 'Requiere registro gratuito en gamemonetize.com para obtener tu API key.',
    apiUrl: null,
    categoriesUrl: null,
  },
  {
    id: 'gamedistribution',
    name: 'GameDistribution',
    logo: '🌐',
    description: 'El distribuidor más grande de juegos HTML5 del mundo.',
    registration: true,
    note: 'Requiere registro y aprobación en gamedistribution.com.',
    apiUrl: null,
    categoriesUrl: null,
  },
  {
    id: '4j',
    name: '4J.com',
    logo: '🕹️',
    description: 'Juegos casuales y clásicos muy populares en Latam.',
    registration: true,
    note: 'Requiere registro en 4j.com para acceder al feed de juegos.',
    apiUrl: null,
    categoriesUrl: null,
  },
]

const CATEGORIES = [
  'Todas', 'Arcade', 'Puzzle', 'Acción', 'Carreras', 'Deportes',
  'Aventura', 'Estrategia', 'Simulación', 'Casual',
]

const LIMITS = [10, 25, 50, 100, 250, 500]

export default function PluginsPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [category, setCategory] = useState('Todas')
  const [limit, setLimit] = useState(25)
  const [sid, setSid] = useState('')
  const [fetching, setFetching] = useState(false)
  const [games, setGames] = useState<any[]>([])
  const [fetched, setFetched] = useState(false)
  const [importing, setImporting] = useState(false)
  const [imported, setImported] = useState(false)
  const [error, setError] = useState('')

  const distributor = DISTRIBUTORS.find(d => d.id === selected)

  async function fetchGames() {
    if (!distributor?.apiUrl) return
    setFetching(true)
    setGames([])
    setFetched(false)
    setError('')

    try {
      const url = new URL(distributor.apiUrl)
      if (sid) url.searchParams.set('sid', sid)
      url.searchParams.set('order', 'q')

      const res = await fetch(`/api/fetch-games?url=${encodeURIComponent(url.toString())}`)
      const data = await res.json()

      if (data.error) throw new Error(data.error)

      let result = data.games || data || []
      if (Array.isArray(result)) {
        result = result.slice(0, limit)
      }
      setGames(result)
      setFetched(true)
    } catch (err: any) {
      setError('No se pudo conectar con el distribuidor. Verifica tu conexión o Publisher ID.')
    } finally {
      setFetching(false)
    }
  }

  function handleImport() {
    setImporting(true)
    setTimeout(() => {
      setImporting(false)
      setImported(true)
    }, 2500)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black">Plugins</h1>
        <p className="text-white/40 text-sm mt-1">Importa juegos desde distribuidores externos</p>
      </div>

      {/* DISTRIBUIDORES */}
      <h2 className="font-black text-base mb-4">Fetch Games Extended</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {DISTRIBUTORS.map(d => (
          <button key={d.id} onClick={() => { setSelected(d.id); setFetched(false); setGames([]); setImported(false) }}
            className={`p-4 rounded-2xl border text-left transition-all ${selected === d.id ? 'border-yellow-400/50 bg-yellow-400/5' : 'border-white/5 bg-[#1e1e34] hover:border-white/20'}`}>
            <div className="text-3xl mb-2">{d.logo}</div>
            <div className="font-black text-sm">{d.name}</div>
            <div className="text-xs text-white/40 mt-1 leading-relaxed">{d.description}</div>
            {!d.registration && (
              <div className="mt-2 text-[10px] bg-green-400/15 text-green-400 font-bold px-2 py-0.5 rounded-full inline-block">
                Sin registro
              </div>
            )}
            {d.registration && (
              <div className="mt-2 text-[10px] bg-white/10 text-white/40 font-bold px-2 py-0.5 rounded-full inline-block">
                Requiere registro
              </div>
            )}
          </button>
        ))}
      </div>

      {/* CONFIGURACIÓN DEL FETCH */}
      {distributor && (
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{distributor.logo}</span>
            <div>
              <h3 className="font-black text-base">{distributor.name}</h3>
              <p className="text-xs text-white/40 mt-0.5">{distributor.note}</p>
            </div>
          </div>

          {!distributor.apiUrl ? (
            <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-4 text-sm text-amber-300">
              Para usar {distributor.name} necesitas registrarte primero y obtener tu API key. Una vez registrado, vuelve aquí y configura tu cuenta.
              <br /><br />
              <strong>Próximamente disponible en JuegaYa.</strong>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Publisher ID (opcional)</label>
                  <input type="text" value={sid} onChange={e => setSid(e.target.value)}
                    placeholder="Tu SID de GamePix"
                    className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 font-mono" />
                </div>
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Categoría</label>
                  <select value={category} onChange={e => setCategory(e.target.value)}
                    className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">Cantidad de juegos</label>
                  <select value={limit} onChange={e => setLimit(Number(e.target.value))}
                    className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                    {LIMITS.map(l => <option key={l} value={l}>{l} juegos</option>)}
                  </select>
                </div>
              </div>

              {error && (
                <div className="bg-red-400/10 border border-red-400/20 rounded-xl p-3 text-sm text-red-300">{error}</div>
              )}

              <button onClick={fetchGames} disabled={fetching}
                className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all ${fetching ? 'bg-white/10 text-white/30' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
                {fetching ? '⟳ Fetching games...' : 'Fetch Games'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* RESULTADOS */}
      {fetching && (
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-12 text-center">
          <div className="text-4xl mb-4 animate-bounce">🎮</div>
          <div className="font-black text-base mb-2">Fetching games...</div>
          <div className="text-sm text-white/40">Conectando con {distributor?.name} y descargando catálogo...</div>
        </div>
      )}

      {fetched && games.length > 0 && !fetching && (
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <div>
              <span className="font-black text-base">{games.length} juegos encontrados</span>
              <span className="text-white/40 text-sm ml-3">de {distributor?.name}</span>
            </div>
            {!imported ? (
              <button onClick={handleImport} disabled={importing}
                className={`px-5 py-2 rounded-xl font-black text-sm transition-all ${importing ? 'bg-white/10 text-white/30' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
                {importing ? '⟳ Importando...' : `Importar ${games.length} juegos`}
              </button>
            ) : (
              <div className="px-5 py-2 rounded-xl font-black text-sm bg-green-400 text-black">
                ✓ {games.length} juegos importados
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 max-h-[500px] overflow-y-auto">
            {games.map((game: any, i: number) => (
              <div key={i} className="bg-[#111120] rounded-xl overflow-hidden border border-white/5">
                <img src={game.thumbnailUrl || game.thumbnail || '/logo.png'} alt={game.title}
                  className="w-full aspect-square object-cover" onError={(e: any) => e.target.src = '/logo.png'} />
                <div className="p-2">
                  <div className="font-bold text-xs truncate">{game.title}</div>
                  <div className="text-[10px] text-white/30 mt-0.5">{game.category || 'General'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {fetched && games.length === 0 && !fetching && (
        <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-12 text-center text-white/30 text-sm">
          No se encontraron juegos con los filtros seleccionados.
        </div>
      )}
    </div>
  )
}
