import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GAMES } from '@/lib/games'

const CATEGORIAS: Record<string, { title: string; description: string; filter: (g: any) => boolean }> = {
  'populares':           { title: 'Juegos Populares',        description: 'Los juegos más jugados de JuegaYa. Actualizados cada semana.', filter: () => true },
  'nuevos':              { title: 'Juegos Nuevos',           description: 'Los últimos juegos agregados a JuegaYa.', filter: () => true },
  'inteligencia':        { title: 'Juegos de Inteligencia',  description: 'Tests de IQ, lógica y memoria. ¿Eres más listo que el 97%?', filter: g => g.categorySlug === 'inteligencia' || g.tags.includes('IQ') },
  'virales':             { title: 'Juegos Virales',          description: 'Los juegos más compartidos por WhatsApp en Latam.', filter: g => g.tags.includes('Viral') || g.badge === 'Viral' },
  'dificiles':           { title: 'Juegos Difíciles',        description: 'Solo para valientes. El 90% no pasa del nivel 3.', filter: g => g.difficulty >= 70 },
  'sociales':            { title: 'Juegos Sociales',         description: 'Para jugar con amigos, en pareja o retar a quien sea.', filter: g => g.tags.includes('Sociales') },
  'rapidos':             { title: 'Juegos Rápidos',          description: 'Partidas de 30 a 60 segundos. Perfectos para móvil.', filter: g => g.tags.includes('Rápidos') || g.tags.includes('Mobile') },
  'premios':             { title: 'Gana Puntos y Premios',   description: 'Juega, acumula monedas y sube en el ranking semanal.', filter: () => true },
  'arcade':              { title: 'Juegos Arcade',           description: 'Clásicos del arcade gratis online. Sin descargar.', filter: g => g.categorySlug === 'arcade' },
  'puzzle':              { title: 'Juegos de Puzzle',        description: 'Desafía tu mente con los mejores puzzles online.', filter: g => g.categorySlug === 'puzzle' },
  'carreras':            { title: 'Juegos de Carreras',      description: 'Velocidad pura. Los mejores juegos de carreras gratis.', filter: g => g.categorySlug === 'carreras' },
  'deportes':            { title: 'Juegos de Deportes',      description: 'Fútbol, basket y más deportes gratis online.', filter: g => g.categorySlug === 'deportes' },
  'accion':              { title: 'Juegos de Acción',        description: 'Disparos, peleas y aventuras de acción gratis.', filter: g => g.categorySlug === 'accion' },
  'stickman':            { title: 'Juegos Stickman',         description: 'Los mejores juegos de stickman gratis online.', filter: g => g.tags.includes('Stickman') },
  'simulacion':          { title: 'Juegos de Simulación',    description: 'Simula mundos, ciudades y vidas completas.', filter: g => g.categorySlug === 'simulacion' },
  'estrategia':          { title: 'Juegos de Estrategia',    description: 'Piensa antes de actuar. Los mejores juegos de estrategia.', filter: g => g.categorySlug === 'estrategia' },
  'juegos-gratis-online':{ title: 'Juegos Gratis Online',    description: 'Todos nuestros juegos gratis online en un solo lugar.', filter: () => true },
  'juegos-sin-descargar':{ title: 'Juegos Sin Descargar',    description: 'Juega directo en el navegador. Sin instalaciones.', filter: () => true },
  'juegos-multijugador': { title: 'Juegos Multijugador',     description: 'Compite contra otros jugadores en tiempo real.', filter: g => g.tags.includes('Multijugador') },
  'juegos-para-celular': { title: 'Juegos para Celular',     description: 'Optimizados para Android e iOS. Juega desde tu cel.', filter: g => g.tags.includes('Mobile') },
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIAS).map(categoria => ({ categoria }))
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) return {}
  return {
    title: `${cat.title} — Jugar Gratis Online | JuegaYa`,
    description: cat.description,
  }
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params
  const cat = CATEGORIAS[categoria]
  if (!cat) notFound()

  const juegos = GAMES.filter(cat.filter)
  const mostrar = juegos.length > 0 ? juegos : GAMES

  return (
    <div className="min-h-screen bg-[#111120] text-white">
      {/* HEADER */}
      <div className="px-4 md:px-8 pt-8 pb-6 border-b border-white/5">
        <h1 className="text-2xl font-black mb-1">{cat.title}</h1>
        <p className="text-white/40 text-sm">{cat.description}</p>
      </div>

      {/* GRID */}
      <div className="px-4 md:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {mostrar.map((game, i) => (
            <Link
              key={i}
              href={`/juego/${game.slug}`}
              className="group relative rounded-xl overflow-hidden bg-[#1e1e34] border border-white/5 hover:border-yellow-400/20 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className={`w-full aspect-square bg-gradient-to-br ${game.color || 'from-blue-900 to-purple-900'} flex items-center justify-center relative overflow-hidden`}>
                {game.icon
                  ? <img src={game.icon} alt={game.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  : <span className="text-5xl">{game.emoji || '🎮'}</span>
                }
                {/* Badge */}
                {game.badge && (
                  <span className="absolute top-2 left-2 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded z-10">
                    {game.badge}
                  </span>
                )}
              </div>
              {/* Name */}
              <div className="p-2.5">
                <div className="font-black text-sm leading-tight truncate">{game.name}</div>
                <div className="text-[11px] text-white/35 mt-0.5">⭐ +{game.players}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
