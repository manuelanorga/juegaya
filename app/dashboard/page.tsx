'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { format, subDays, eachDayOfInterval } from 'date-fns'
import { es } from 'date-fns/locale'
import { GAMES } from '@/lib/games'

const COLORS = ['#ffd000','#00c864','#ff4444','#00aaff','#ff8800','#aa00ff','#00ffcc','#ff0088','#88ff00','#0088ff']

export default function Dashboard() {
  const [range, setRange] = useState(7)
  const [views, setViews] = useState<any[]>([])
  const [sessions, setSessions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadData() }, [range])

  async function loadData() {
    setLoading(true)
    const from = subDays(new Date(), range).toISOString()

    const [{ data: viewsData }, { data: sessionsData }] = await Promise.all([
      supabase.from('page_views').select('*').gte('created_at', from),
      supabase.from("sessions").select("*").gte("first_seen", from),
    ])

    setViews(viewsData || [])
    setSessions(sessionsData || [])
    setLoading(false)
  }

  // Chart data — visits per day
  const days = eachDayOfInterval({ start: subDays(new Date(), range - 1), end: new Date() })
  const chartData = days.map(day => {
    const dayStr = format(day, 'yyyy-MM-dd')
    const dayViews = views.filter(v => {
      const d = v.created_at ? new Date(v.created_at).toISOString().slice(0,10) : ''
      return d === dayStr
    })
    const daySessions = sessions.filter(s => {
      const d = s.first_seen ? new Date(s.first_seen).toISOString().slice(0,10) : ''
      return d === dayStr
    })
    return {
      date: format(day, 'dd MMM', { locale: es }),
      visitas: dayViews.length,
      unicos: daySessions.length,
    }
  })

  // Top 10 games
  const gameViews = views.filter(v => v.game_slug)
  const gameCounts: Record<string, number> = {}
  gameViews.forEach(v => { gameCounts[v.game_slug] = (gameCounts[v.game_slug] || 0) + 1 })
  const top10 = Object.entries(gameCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([slug, count]) => {
      const game = GAMES.find(g => g.slug === slug)
      return { slug, name: game?.name || slug, count }
    })

  // Device breakdown
  const deviceData = [
    { name: 'Mobile', value: views.filter(v => v.device === 'mobile').length },
    { name: 'Desktop', value: views.filter(v => v.device === 'desktop').length },
  ]

  // Category breakdown
  const catCounts: Record<string, number> = {}
  gameViews.forEach(v => {
    const game = GAMES.find(g => g.slug === v.game_slug)
    if (game) catCounts[game.category] = (catCounts[game.category] || 0) + 1
  })
  const catData = Object.entries(catCounts).map(([name, value]) => ({ name, value }))

  function exportCSV() {
    const rows = [['Fecha','Visitas','Únicos'], ...chartData.map(d => [d.date, d.visitas, d.unicos])]
    const csv = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `juegaya-stats-${range}dias.csv`; a.click()
  }

  const totalViews = views.length
  const totalUnicos = sessions.length
  const totalGames = gameViews.length
  const topGame = top10[0]

  return (
    <div className="min-h-screen bg-[#0a0a18] text-white p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black">Dashboard</h1>
          <p className="text-white/40 text-sm mt-1">Estadísticas en tiempo real de JuegaYa</p>
        </div>
        <div className="flex items-center gap-3">
          {[7, 15, 30].map(d => (
            <button key={d} onClick={() => setRange(d)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${range === d ? 'bg-yellow-400 text-black' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
              {d} días
            </button>
          ))}
          <button onClick={exportCSV} className="px-4 py-2 rounded-full text-sm font-bold bg-white/5 text-white/50 hover:bg-white/10 transition-all">
            ↓ Exportar CSV
          </button>
        </div>
      </div>

      {/* METRIC CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Visitas totales', value: totalViews.toLocaleString(), icon: '👁️', color: '#ffd000' },
          { label: 'Usuarios únicos', value: totalUnicos.toLocaleString(), icon: '👤', color: '#00c864' },
          { label: 'Partidas jugadas', value: totalGames.toLocaleString(), icon: '🎮', color: '#00aaff' },
          { label: 'Juego top', value: topGame?.name || '—', icon: '🏆', color: '#ff8800' },
        ].map((card, i) => (
          <div key={i} className="bg-[#1e1e34] rounded-2xl p-5 border border-white/5">
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-2xl font-black truncate" style={{ color: card.color }}>{card.value}</div>
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
            <AreaChart data={chartData}>
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
              <XAxis dataKey="date" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }} axisLine={false} tickLine={false} />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* TOP 10 GAMES */}
        <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
          <h2 className="font-black text-base mb-6">Top 10 juegos</h2>
          {top10.length === 0 ? (
            <div className="text-white/30 text-sm">Sin datos aún</div>
          ) : (
            <div className="space-y-3">
              {top10.map((game, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-black w-5 text-white/30">{i + 1}</span>
                  <div className="flex-1">
                    <div className="text-sm font-bold truncate">{game.name}</div>
                    <div className="h-1.5 bg-white/5 rounded-full mt-1 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(game.count / (top10[0]?.count || 1)) * 100}%`, background: COLORS[i] }} />
                    </div>
                  </div>
                  <span className="text-xs font-black" style={{ color: COLORS[i] }}>{game.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CATEGORÍAS + DISPOSITIVOS */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5 flex-1">
            <h2 className="font-black text-base mb-4">Categorías más jugadas</h2>
            {catData.length === 0 ? (
              <div className="text-white/30 text-sm">Sin datos aún</div>
            ) : (
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={catData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} axisLine={false} tickLine={false} width={80} />
                  <Tooltip contentStyle={{ background: '#1e1e34', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#fff' }} />
                  <Bar dataKey="value" fill="#ffd000" radius={[0, 4, 4, 0]} name="Partidas" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          <div className="bg-[#1e1e34] rounded-2xl p-6 border border-white/5">
            <h2 className="font-black text-base mb-4">Dispositivos</h2>
            <div className="flex items-center gap-6">
              <PieChart width={80} height={80}>
                <Pie data={deviceData} cx={35} cy={35} innerRadius={22} outerRadius={38} dataKey="value" strokeWidth={0}>
                  {deviceData.map((_, i) => <Cell key={i} fill={i === 0 ? '#00aaff' : '#ffd000'} />)}
                </Pie>
              </PieChart>
              <div className="space-y-2">
                {deviceData.map((d, i) => (
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
