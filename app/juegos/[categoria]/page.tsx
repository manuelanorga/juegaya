'use client'
import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import { useState, use } from 'react'
import { GAMES } from '@/lib/games'

const CATEGORIAS: Record<string, { title: string; description: string; descriptionFull: string; filter: (g: any) => boolean }> = {
  'populares':           { title: 'Juegos Populares', description: 'Los juegos más jugados de JuegaYa.', descriptionFull: 'Los juegos más jugados de JuegaYa. Actualizados cada semana con los títulos más populares de Latinoamérica. Juega gratis sin descargar nada.', filter: () => true },
  'nuevos':              { title: 'Juegos Nuevos', description: 'Los últimos juegos agregados a JuegaYa.', descriptionFull: 'Los últimos juegos agregados a JuegaYa. Siempre hay algo nuevo para descubrir. Sin descargar, sin registro, 100% gratis.', filter: () => true },
  'inteligencia':        { title: 'Juegos de Inteligencia', description: 'Tests de IQ, lógica y memoria.', descriptionFull: 'Tests de IQ, lógica y memoria para poner a prueba tu mente. ¿Eres más inteligente que el 97% de Latam? Descúbrelo gratis online.', filter: g => g.categorySlug === 'inteligencia' || g.tags?.includes('IQ') },
  'virales':             { title: 'Juegos Virales', description: 'Los más compartidos por WhatsApp en Latam.', descriptionFull: 'Los juegos más compartidos por WhatsApp, TikTok e Instagram en Latinoamérica. Reta a tus amigos y presume tu puntaje.', filter: g => g.tags?.includes('Viral') },
  'dificiles':           { title: 'Juegos Difíciles', description: 'Solo para valientes. El 90% no pasa del nivel 3.', descriptionFull: 'Solo para valientes. Juegos con dificultad extrema que pondrán a prueba tus reflejos y paciencia. ¿Puedes completarlos?', filter: g => (g.difficulty || 0) >= 68 },
  'sociales':            { title: 'Juegos Sociales', description: 'Para jugar con amigos o en pareja.', descriptionFull: 'Juegos para jugar con amigos, en pareja o retar a quien sea. Comparte tu resultado y demuestra quién es el mejor.', filter: g => g.tags?.includes('Sociales') },
  'rapidos':             { title: 'Juegos Rápidos', description: 'Partidas de 30 a 60 segundos. Perfectos para móvil.', descriptionFull: 'Partidas de 30 a 60 segundos. Perfectos para móvil, para el recreo o cuando tienes 1 minuto libre. Sin complicaciones.', filter: g => g.tags?.includes('Mobile') },
  'premios':             { title: 'Gana Puntos y Premios', description: 'Juega y acumula monedas en el ranking semanal.', descriptionFull: 'Juega, acumula monedas y sube en el ranking semanal de JuegaYa. Los mejores jugadores de Latam compiten cada semana.', filter: () => true },
  'arcade':              { title: 'Juegos Arcade', description: 'Clásicos del arcade gratis online. Sin descargar.', descriptionFull: 'Los mejores juegos arcade gratis online. Clásicos renovados y nuevos títulos que puedes jugar directo en el navegador sin descargar nada.', filter: g => g.categorySlug === 'arcade' },
  'puzzle':              { title: 'Juegos de Puzzle', description: 'Desafía tu mente con los mejores puzzles online.', descriptionFull: 'Desafía tu mente con los mejores puzzles online gratis. Desde match-3 hasta rompecabezas lógicos. Sin descargar, 100% gratis.', filter: g => g.categorySlug === 'puzzle' },
  'carreras':            { title: 'Juegos de Carreras', description: 'Velocidad pura. Los mejores juegos de carreras gratis.', descriptionFull: 'Velocidad pura. Los mejores juegos de carreras gratis online. Coches, motos y más. Sin descargar, juega directo en el navegador.', filter: g => g.categorySlug === 'carreras' },
  'deportes':            { title: 'Juegos de Deportes', description: 'Fútbol, basket y más deportes gratis online.', descriptionFull: 'Los mejores juegos de deportes gratis online. Fútbol, basket, tenis y más. Sin descargar, sin registro, 100% en español.', filter: g => g.categorySlug === 'deportes' },
  'accion':              { title: 'Juegos de Acción', description: 'Disparos, peleas y aventuras de acción gratis.', descriptionFull: 'Los mejores juegos de acción gratis online. Disparos, peleas, zombies y aventuras de acción sin descargar. 100% en español.', filter: g => g.categorySlug === 'accion' },
  'stickman':            { title: 'Juegos Stickman', description: 'Los mejores juegos de stickman gratis online.', descriptionFull: 'Los mejores juegos de stickman gratis online. Peleas, carreras y aventuras con el famoso personaje de palitos. Sin descargar.', filter: g => g.tags?.includes('Stickman') },
  'simulacion':          { title: 'Juegos de Simulación', description: 'Simula mundos, ciudades y vidas completas.', descriptionFull: 'Simula mundos, ciudades y vidas completas. Los mejores juegos de simulación gratis online sin descargar en español.', filter: g => g.categorySlug === 'simulacion' },
  'estrategia':          { title: 'Juegos de Estrategia', description: 'Piensa antes de actuar.', descriptionFull: 'Piensa antes de actuar. Los mejores juegos de estrategia gratis online. Torre de defensa, conquista y más. Sin descargar.', filter: g => g.categorySlug === 'estrategia' },
  'juegos-gratis-online':{ title: 'Juegos Gratis Online', description: 'Todos los juegos gratis online en un solo lugar.', descriptionFull: 'Todos los juegos gratis online de JuegaYa en un solo lugar. Sin descargar, sin registro, 100% gratis y en español para Latinoamérica.', filter: () => true },
  'juegos-sin-descargar':{ title: 'Juegos Sin Descargar', description: 'Juega directo en el navegador. Sin instalaciones.', descriptionFull: 'Juega directo en el navegador sin descargar nada. Todos nuestros juegos funcionan en PC, móvil y tablet sin instalaciones.', filter: () => true },
  'juegos-multijugador': { title: 'Juegos Multijugador', description: 'Compite contra otros jugadores en tiempo real.', descriptionFull: 'Compite contra otros jugadores en tiempo real. Los mejores juegos multijugador gratis online para Latinoamérica.', filter: g => g.tags?.includes('Multijugador') },
  'juegos-para-celular': { title: 'Juegos para Celular', description: 'Optimizados para Android e iOS.', descriptionFull: 'Juegos optimizados para Android e iOS. Juega desde tu celular sin descargar nada. 100% gratis, 100% en español.', filter: g => g.tags?.includes('Mobile') },
}

const PER_PAGE = 30

export default function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = use(params)
  const cat = CATEGORIAS[categoria]
  const router = useRouter()
  const [expanded, setExpanded] = useState(false)
  const [page, setPage] = useState(1)

  if (!cat) notFound()

  const todos = GAMES.filter(cat.filter)
  const juegos = todos.length > 0 ? todos : GAMES
  const totalPages = Math.ceil(juegos.length / PER_PAGE)
  const paginated = juegos.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  function randomGame() {
    const r = juegos[Math.floor(Math.random() * juegos.length)]
    router.push(`/juego/${r.slug}`)
  }

  return (
    <div className="min-h-screen bg-[#111120] text-white">

      {/* HEADER */}
      <div className="px-4 md:px-8 pt-8 pb-6 border-b border-white/5">
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

        {/* Descripción expandible */}
        <div className="max-w-3xl">
          <p className="text-white/40 text-sm leading-relaxed">
            {expanded ? cat.descriptionFull : cat.description}
            {' '}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-yellow-400 font-semibold hover:underline text-sm"
            >
              {expanded ? 'Ver menos' : 'Ver más'}
            </button>
          </p>
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
                  ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  : <span className="text-5xl">{game.emoji || '🎮'}</span>
                }
                {game.badge && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded z-10">
                    {game.badge}
                  </span>
                )}
              </div>
              <div className="p-2.5">
                <div className="font-black text-sm leading-tight truncate">{game.name}</div>
                <div className="text-[11px] text-white/35 mt-0.5">⭐ +{game.players}</div>
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
    </div>
  )
}
