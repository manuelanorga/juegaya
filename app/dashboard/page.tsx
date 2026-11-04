'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getStats, type PlayRow, type ViewRow } from './actions'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { format, subDays, eachDayOfInterval } from 'date-fns'
import { es } from 'date-fns/locale'
import { GAMES } from '@/lib/games'

const COLORS = ['#ffd000','#00c864','#ff4444','#00aaff','#ff8800','#aa00ff','#00ffcc','#ff0088','#88ff00','#0088ff']
const PRESETS = [7, 15, 30]

const SOURCE_LABELS: Record<string, string> = {
  google: 'Google',
  'otros-buscadores': 'Otros buscadores',
  directo: 'Directo o sin dato',
  whatsapp: 'WhatsApp',
  compartido: 'Enlace compartido',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  x: 'X (Twitter)',
  youtube: 'YouTube',
  telegram: 'Telegram',
}

interface Range { from: string; to: string }   // yyyy-MM-dd en la hora local del administrador

const toDay = (d: Date) => format(d, 'yyyy-MM-dd')
const startOf = (day: string) => new Date(`${day}T00:00:00`)
const presetRange = (days: number): Range => ({ from: toDay(subDays(new Date(), days - 1)), to: toDay(new Date()) })
const shortDate = (iso: string) => format(new Date(iso), "d 'de' MMM yyyy", { locale: es })

export default function Dashboard() {
  // El rango se calcula al montar: esta página se genera al compilar y "hoy" sería la fecha del build
  const [range, setRange] = useState<Range | null>(null)
  const [views, setViews] = useState<ViewRow[]>([])
  const [plays, setPlays] = useState<PlayRow[]>([])
  const [playsSince, setPlaysSince] = useState<string | null>(null)
  const [sourcesSince, setSourcesSince] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const requestId = useRef(0)

  useEffect(() => { setRange(presetRange(7)) }, [])

  useEffect(() => {
    if (!range) return
    const id = ++requestId.current
    setLoading(true)
    setError(false)
    getStats(startOf(range.from).toISOString(), new Date(`${range.to}T23:59:59.999`).toISOString())
      .then(data => {
        if (id !== requestId.current) return   // ya se pidió otro rango
        setViews(data.views)
        setPlays(data.plays)
        setPlaysSince(data.playsSince)
        setSourcesSince(data.sourcesSince)
      })
      .catch(() => { if (id === requestId.current) setError(true) })
      .finally(() => { if (id === requestId.current) setLoading(false) })
  }, [range])

  function changeFrom(from: string) {
    if (!from || !range) return
    setRange({ from, to: from > range.to ? from : range.to })
  }
  function changeTo(to: string) {
    if (!to || !range) return
    setRange({ from: to < range.from ? to : range.from, to })
  }

  const stats = useMemo(() => {
    const dayOf = (iso: string) => toDay(new Date(iso))

    // Visitas y usuarios distintos por día, en hora local
    const perDay = new Map<string, { visitas: number; sessions: Set<string> }>()
    const games = new Map<string, { opens: number; sessionDays: Map<string, Set<string>> }>()
    const sources = new Map<string, number>()
    const allSessions = new Set<string>()
    let mobile = 0, desktop = 0

    for (const v of views) {
      const day = dayOf(v.created_at)
      const d = perDay.get(day) ?? { visitas: 0, sessions: new Set<string>() }
      d.visitas++
      d.sessions.add(v.session_id)
      perDay.set(day, d)
      allSessions.add(v.session_id)
      if (v.device === 'mobile') mobile++
      else if (v.device === 'desktop') desktop++
      if (v.source) sources.set(v.source, (sources.get(v.source) ?? 0) + 1)
      if (v.game_slug) {
        const g = games.get(v.game_slug) ?? { opens: 0, sessionDays: new Map() }
        g.opens++
        const days = g.sessionDays.get(v.session_id) ?? new Set<string>()
        days.add(day)
        g.sessionDays.set(v.session_id, days)
        games.set(v.game_slug, g)
      }
    }

    const playCounts = new Map<string, number>()
    for (const p of plays) playCounts.set(p.game_slug, (playCounts.get(p.game_slug) ?? 0) + 1)

    const gameRows = [...new Set([...games.keys(), ...playCounts.keys()])].map(slug => {
      const g = games.get(slug)
      const users = g?.sessionDays.size ?? 0
      const returning = g ? [...g.sessionDays.values()].filter(days => days.size > 1).length : 0
      return {
        slug,
        name: GAMES.find(x => x.slug === slug)?.name ?? slug,
        opens: g?.opens ?? 0,
        users,
        plays: playCounts.get(slug) ?? 0,
        returning,
        returningPct: users ? Math.round((returning / users) * 100) : 0,
      }
    }).sort((a, b) => b.opens - a.opens)

    const catCounts: Record<string, number> = {}
    for (const row of gameRows) {
      const game = GAMES.find(g => g.slug === row.slug)
      if (game) catCounts[game.category] = (catCounts[game.category] || 0) + row.opens
    }

    const sourceRows = [...sources.entries()]
      .map(([key, value]) => ({ key, label: SOURCE_LABELS[key] ?? key, value }))
      .sort((a, b) => b.value - a.value)

    const chart = !range ? [] : eachDayOfInterval({ start: startOf(range.from), end: startOf(range.to) }).map(day => {
      const d = perDay.get(toDay(day))
      const sameYear = range.from.slice(0, 4) === range.to.slice(0, 4)
      return {
        date: format(day, sameYear ? 'dd MMM' : 'dd MMM yy', { locale: es }),
        visitas: d?.visitas ?? 0,
        unicos: d?.sessions.size ?? 0,
      }
    })

    return {
      chart,
      gameRows,
      sourceRows,
      catData: Object.entries(catCounts).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value),
      deviceData: [{ name: 'Mobile', value: mobile }, { name: 'Desktop', value: desktop }],
      totalViews: views.length,
      totalUnicos: allSessions.size,
      totalOpens: gameRows.reduce((sum, g) => sum + g.opens, 0),
      totalPlays: plays.length,
    }
  }, [views, plays, range])

  const top10 = stats.gameRows.slice(0, 10)
  const topGame = top10[0]
  const maxSource = stats.sourceRows[0]?.value || 1

  function exportCSV() {
    if (!range) return
    const rows = [
      ['Fecha', 'Visitas', 'Únicos'],
      ...stats.chart.map(d => [d.date, d.visitas, d.unicos]),
      [],
      ['Juego', 'Aperturas', 'Usuarios', 'Partidas iniciadas', 'Vuelven otro día'],
      ...stats.gameRows.map(g => [`"${g.name}"`, g.opens, g.users, g.plays, g.returning]),
    ]
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `juegaya-stats-${range.from}_a_${range.to}.csv`; a.click()
    URL.revokeObjectURL(url)
  }

  const today = toDay(new Date())
  const dateInput = 'bg-white/5 border border-white/10 rounded-full px-3 py-2 text-sm font-bold text-white outline-none focus:border-yellow-400/50 [color-scheme:dark]'

  return (
    <div className="min-h-screen bg-[#0a0a18] text-white p-6">

      {/* HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-black">Dashboard</h1>
          <p className="text-white/40 text-sm mt-1">Estadísticas en tiempo real de JuegaYa</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {PRESETS.map(d => {
            const p = presetRange(d)
            const active = range?.from === p.from && range?.to === p.to
            return (
              <button key={d} onClick={() => setRange(p)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${active ? 'bg-yellow-400 text-black' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                {d} días
              </button>
            )
          })}
          <div className="flex items-center gap-2">
            <input type="date" aria-label="Desde" value={range?.from ?? ''} max={today} onChange={e => changeFrom(e.target.value)} className={dateInput} />
            <span className="text-white/30 text-sm">a</span>
            <input type="date" aria-label="Hasta" value={range?.to ?? ''} max={today} onChange={e => changeTo(e.target.value)} className={dateInput} />
          </div>
          <button onClick={exportCSV} className="px-4 py-2 rounded-full text-sm font-bold bg-white/5 text-white/50 hover:bg-white/10 transition-all">
            ↓ Exportar CSV
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-sm rounded-2xl p-4 mb-6">
          No se pudieron cargar las estadísticas. Recarga la página; si sigue fallando, vuelve a iniciar sesión.
        </div>
      )}

      {/* METRIC CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        {[
          { label: 'Visitas totales', value: stats.totalViews.toLocaleString(), icon: '👁️', color: '#ffd000' },
          { label: 'Usuarios únicos', value: stats.totalUnicos.toLocaleString(), icon: '👤', color: '#00c864' },
          { label: 'Aperturas de juegos', value: stats.totalOpens.toLocaleString(), icon: '📂', color: '#00aaff' },
          { label: 'Partidas iniciadas', value: stats.totalPlays.toLocaleString(), icon: '🎮', color: '#aa00ff' },
          { label: 'Juego top', value: topGame?.name || '—', icon: '🏆', color: '#ff8800' },
        ].map((card, i) => (
          <div key={i} className="bg-[#1e1e34] rounded-2xl p-5 border border-white/5">
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-2xl font-black truncate" style={{ color: card.color }}>{loading ? '…' : card.value}</div>
            <div className="text-xs text-white/40 mt-1 font-semibold">{card.label}</div>
          </div>
        ))}
      </div>

      {/* AREA CHART */}
      <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5 mb-6">
        <h2 className="font-black text-base mb-6">Visitas y usuarios únicos</h2>
        {loading ? (
          <div className="h-[240px] flex items-center justify-center text-white/30">Cargando...</div>
        ) : (
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={stats.chart}>
              <defs>
                <linearGradient id="gVisitas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffd000" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffd000" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="gUnicos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00c864" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00c864" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="date" minTickGap={24} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis allowDecimals={false} tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#1e1e34', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff' }} />
              <Area type="monotone" dataKey="visitas" stroke="#ffd000" fill="url(#gVisitas)" strokeWidth={2} name="Visitas" />
              <Area type="monotone" dataKey="unicos" stroke="#00c864" fill="url(#gUnicos)" strokeWidth={2} name="Únicos" />
            </AreaChart>
          </ResponsiveContainer>
        )}
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"/><span className="text-xs text-white/50">Visitas</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-green-400"/><span className="text-xs text-white/50">Únicos</span></div>
        </div>
      </div>

      {/* RENDIMIENTO POR JUEGO */}
      <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5 mb-6">
        <h2 className="font-black text-base">Rendimiento por juego</h2>
        <p className="text-xs text-white/40 mt-1 mb-5">
          Partidas iniciadas: alguien tocó el juego tras abrirlo{playsSince ? `, medido desde el ${shortDate(playsSince)}` : ' (aún sin datos)'}.
          {' '}Vuelven: usuarios que abrieron el juego en 2 o más días del periodo elegido.
        </p>
        {stats.gameRows.length === 0 ? (
          <div className="text-white/30 text-sm">{loading ? 'Cargando...' : 'Sin datos en este periodo'}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="text-xs text-white/40 text-left">
                  <th className="font-semibold pb-3">Juego</th>
                  <th className="font-semibold pb-3 text-right">Aperturas</th>
                  <th className="font-semibold pb-3 text-right">Usuarios</th>
                  <th className="font-semibold pb-3 text-right">Partidas iniciadas</th>
                  <th className="font-semibold pb-3 text-right">Vuelven otro día</th>
                </tr>
              </thead>
              <tbody>
                {stats.gameRows.map(g => (
                  <tr key={g.slug} className="border-t border-white/5">
                    <td className="py-2.5 font-bold">{g.name}</td>
                    <td className="py-2.5 text-right">{g.opens}</td>
                    <td className="py-2.5 text-right">{g.users}</td>
                    <td className="py-2.5 text-right">{g.plays}</td>
                    <td className="py-2.5 text-right">{g.returning} <span className="text-white/40">({g.returningPct}%)</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* TOP 10 GAMES */}
        <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
          <h2 className="font-black text-base mb-6">Top 10 juegos por aperturas</h2>
          {top10.length === 0 ? (
            <div className="text-white/30 text-sm">Sin datos aún</div>
          ) : (
            <div className="space-y-3">
              {top10.map((game, i) => (
                <div key={game.slug} className="flex items-center gap-3">
                  <span className="text-xs font-black w-5 text-white/30">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate">{game.name}</div>
                    <div className="h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(game.opens / (top10[0]?.opens || 1)) * 100}%`, background: COLORS[i] }} />
                    </div>
                  </div>
                  <span className="text-xs font-black" style={{ color: COLORS[i] }}>{game.opens}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ORIGEN + CATEGORÍAS + DISPOSITIVOS */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
            <h2 className="font-black text-base">De dónde llegan</h2>
            <p className="text-xs text-white/40 mt-1 mb-4">
              {sourcesSince ? `Entradas al sitio, medido desde el ${shortDate(sourcesSince)}.` : 'Aún sin datos: se mide desde esta actualización.'}
            </p>
            {stats.sourceRows.length === 0 ? (
              <div className="text-white/30 text-sm">Sin datos en este periodo</div>
            ) : (
              <div className="space-y-3">
                {stats.sourceRows.map((s, i) => (
                  <div key={s.key}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold truncate">{s.label}</span>
                      <span className="font-black ml-3">{s.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(s.value / maxSource) * 100}%`, background: COLORS[i % COLORS.length] }} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
            <h2 className="font-black text-base mb-4">Categorías más visitadas</h2>
            {stats.catData.length === 0 ? (
              <div className="text-white/30 text-sm">Sin datos aún</div>
            ) : (
              <ResponsiveContainer width="100%" height={stats.catData.length * 30 + 10}>
                <BarChart data={stats.catData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" interval={0} tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip contentStyle={{ background: '#1e1e34', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff' }} />
                  <Bar dataKey="value" fill="#ffd000" radius={[0, 4, 4, 0]} name="Aperturas" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
            <h2 className="font-black text-base mb-4">Dispositivos</h2>
            <div className="flex items-center gap-6">
              <PieChart width={80} height={80}>
                <Pie data={stats.deviceData} cx={35} cy={35} innerRadius={22} outerRadius={38} dataKey="value" strokeWidth={0}>
                  {stats.deviceData.map((_, i) => <Cell key={i} fill={i === 0 ? '#00aaff' : '#ffd000'} />)}
                </Pie>
              </PieChart>
              <div className="space-y-2">
                {stats.deviceData.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: i === 0 ? '#00aaff' : '#ffd000' }} />
                    <span className="text-sm text-white/60">{d.name}</span>
                    <span className="text-sm font-black ml-auto">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
