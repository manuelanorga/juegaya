export interface Game {
  slug: string
  name: string
  icon: string | null
  iframeSrc: string
  category: string
  categorySlug: string
  rating: number
  votes: string
  players: string
  tags: string[]
  description: string
  tips: string[]
  faqs: { q: string; a: string }[]
  color?: string
  emoji?: string
  badge?: string
  difficulty?: number
  aspectRatio?: string
  fixedHeight?: string
}

export const GAMES: Game[] = [
  {
    slug: 'cuanto-sabes-historia',
    name: '¿Cuánto sabes de Historia?',
    icon: null,
    emoji: '🏛️',
    iframeSrc: '/juegos/cuanto-sabes-historia.html',
    category: 'Inteligencia',
    categorySlug: 'inteligencia',
    rating: 4.9,
    votes: '0',
    players: '0',
    badge: 'Nuevo',
    difficulty: 80,
    color: 'from-amber-900 to-yellow-900',
    tags: ['IQ', 'Historia', 'Test', 'Viral', 'Mobile'],
    description: 'Preguntas únicas generadas por IA sobre historia mundial y latinoamericana. Cada partida es diferente.',
    tips: ['Lee bien antes de responder','Los primeros segundos valen más puntos','Comparte tu resultado para retar amigos'],
    faqs: [
      { q: '¿Las preguntas son siempre las mismas?', a: 'No. La IA genera 10 preguntas únicas en cada partida.' },
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin registro ni descargas.' },
    ],
  },
  {
    slug: 'escape-vikingo',
    name: 'El Escape del Vikingo',
    icon: '/juegos/escape-vikingo/icons/icon-256.png',
    iframeSrc: '/juegos/escape-vikingo/index.html',
    category: 'Aventura',
    categorySlug: 'aventura',
    rating: 4.8, votes: '7,650', players: '7,650',
    tags: ['Aventura', 'Acción', 'Vikingos', 'Plataformas', 'Mobile'],
    description: 'El Escape del Vikingo es un juego de aventura donde debes ayudar a tu vikingo a escapar de enemigos y trampas.',
    tips: ['Usa el escudo para bloquear ataques','Recoge monedas para mejoras','Evita los enemigos rojos','Usa trampolines para zonas secretas'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
  },
  {
    slug: 'gelatinas-locas',
    name: 'Gelatinas Locas',
    icon: '/juegos/gelatinas-locas/icons/icon-256.png',
    iframeSrc: '/juegos/gelatinas-locas/index.html',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    rating: 4.9, votes: '11,430', players: '11,430',
    tags: ['Puzzle', 'Match 3', 'Colores', 'Casual', 'Mobile'],
    description: 'Combina 3 o más gelatinas del mismo color para eliminarlas y sumar puntos.',
    tips: ['Combina 4+ para power-ups','Planifica antes de hacer clic','Los combos multiplican puntos'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
  },
  {
    slug: 'cazador-zombies',
    name: 'Cazador de Zombies',
    icon: '/juegos/cazador-zombies/icons/icon-256.png',
    iframeSrc: '/juegos/cazador-zombies/index.html',
    category: 'Acción',
    categorySlug: 'accion',
    rating: 4.8, votes: '9,240', players: '9,240',
    tags: ['Acción', 'Disparos', 'Zombies', '20 Niveles', 'Arcade'],
    description: 'Elimina hordas de zombies en 20 niveles de dificultad creciente.',
    tips: ['Apunta a la cabeza','Guarda munición para jefes','Recoge power-ups amarillos'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Cuántos niveles tiene?', a: '20 niveles con dificultad creciente.' },
    ],
  },
  {
    slug: 'test-iq',
    name: 'Test de IQ Latam',
    icon: null,
    iframeSrc: '/juegos/test-iq.html',
    category: 'Inteligencia',
    categorySlug: 'inteligencia',
    rating: 4.8, votes: '15,020', players: '15,020',
    fixedHeight: '620px',
    tags: ['IQ', 'Inteligencia', 'Trivia', 'Test', 'Viral', 'Latam'],
    description: 'Evalúa tu razonamiento lógico con 10 preguntas diseñadas para Latinoamérica.',
    tips: ['Lee con calma cada pregunta','Tienes 20 segundos por pregunta','Elimina opciones incorrectas'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin registro ni pagos.' },
      { q: '¿Puedo compartir mi resultado?', a: 'Sí, por WhatsApp con un clic.' },
    ],
  },
  {
    slug: 'neon-bird',
    name: 'Neon Bird',
    icon: null,
    iframeSrc: '/juegos/neon-bird.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    rating: 4.9, votes: '12,380', players: '12,380',
    aspectRatio: '3/4',
    tags: ['Arcade', 'Habilidad', 'Neón', 'Reflejos', 'Mobile'],
    description: 'Esquiva obstáculos con tu pájaro neón y sube en el ranking latinoamericano.',
    tips: ['Toca con suavidad','Mantén ritmo constante','Mira el espacio entre obstáculos'],
    faqs: [
      { q: '¿Cómo jugar?', a: 'Haz clic o toca para volar y esquiva los obstáculos.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
  },
  {
    slug: 'test-reflejos',
    name: 'Test de Reflejos',
    icon: null,
    iframeSrc: '/juegos/test-reflejos.html',
    category: 'Habilidad',
    categorySlug: 'habilidad',
    rating: 4.7, votes: '8,430', players: '8,430',
    fixedHeight: '560px',
    tags: ['Reflejos', 'Velocidad', 'Habilidad', 'Test', 'Viral'],
    description: 'Mide tu tiempo de reacción. El promedio humano es 200-300ms. ¿Eres más rápido que el 95% de Latam?',
    tips: ['Descansa los ojos antes','Mantén el dedo cerca','No anticipes — espera el verde'],
    faqs: [
      { q: '¿Cómo funciona?', a: 'Espera el verde y toca lo más rápido que puedas. 3 intentos.' },
      { q: '¿Cuál es el tiempo normal?', a: 'Entre 200-300ms. Menos de 200ms es excelente.' },
    ],
  },
  {
    slug: 'corre-mi-bro',
    name: 'Corre mi Bro',
    icon: null,
    iframeSrc: '/juegos/corre-mi-bro.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    rating: 4.6, votes: '6,200', players: '6,200',
    fixedHeight: '620px',
    tags: ['Runner', 'Arcade', 'Latino', 'Lima', 'CDMX', 'Mobile'],
    description: 'Corre por las calles de Lima, CDMX, Bogotá y Buenos Aires esquivando obstáculos.',
    tips: ['Desliza a los lados para cambiar carril','Recoge monedas doradas','La velocidad aumenta cada 200m'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Puedo elegir ciudad?', a: 'Sí. Lima, CDMX, Bogotá y Buenos Aires.' },
    ],
  },
  {
    slug: 'frutas-locas',
    name: 'Frutas Locas',
    icon: '/juegos/frutas-locas/icons/icon-256.png',
    emoji: '🍉',
    iframeSrc: '/juegos/frutas-locas/index.html',
    aspectRatio: '2/3',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    rating: 4.9, votes: '0', players: '5,000',
    badge: 'Nuevo',
    difficulty: 45,
    color: 'from-rose-900 to-emerald-900',
    tags: ['Puzzle', 'Físicas', 'Viral', 'Mobile', 'Casual', 'Frutas'],
    description: 'Fusiona frutas iguales para crear frutas más grandes. Empiezas con cerezas y la meta es llegar a la sandía. Un juego de físicas adictivo inspirado en los juegos de fusión de frutas que arrasaron en TikTok, similar al popular Suika Game. Cada fusión suma puntos, pero cuidado: si apilas mal y las frutas salen del contenedor, pierdes.',
    tips: [
      'Planifica antes de soltar: las frutas rebotan y apilan mal si las tiras al azar.',
      'Mantén las frutas pequeñas en el centro para que choquen entre sí.',
      'Deja espacio libre en los bordes: las frutas grandes necesitan mucho espacio.',
      'Haz cadenas: una fusión que desencadena otra vale mucho más.',
      'Si logras dos sandías y las juntas, desbloqueas un bonus de 100 puntos.',
      'No te obsesiones con la sandía: sobrevivir y acumular también gana.',
    ],
    faqs: [
      { q: '¿Cómo se juega Frutas Locas?', a: 'Mueve el dedo o mouse para apuntar y suelta la fruta con tap o click. Dos frutas iguales se fusionan en la siguiente más grande. La meta es crear una sandía.' },
      { q: '¿Cuántas frutas hay?', a: 'Once frutas en la cadena: cereza, fresa, uva, naranja, durazno, manzana, pera, mango, piña, melón y sandía.' },
      { q: '¿Cuándo se pierde?', a: 'Cuando una fruta queda apilada por encima de la línea superior por más de un segundo y medio.' },
      { q: '¿En qué se inspira?', a: 'En el género de fusión de frutas que se volvió viral en 2023 en TikTok, donde Suika Game fue el título más popular.' },
      { q: '¿Funciona en celular?', a: 'Sí, en cualquier celular con navegador moderno. Los controles táctiles están optimizados para Android y iPhone.' },
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return GAMES.find(g => g.slug === slug)
}

export function getAllSlugs(): string[] {
  return GAMES.map(g => g.slug)
}
