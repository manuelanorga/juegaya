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
}

export const GAMES: Game[] = [
  {
    slug: 'escape-vikingo',
    name: 'El Escape del Vikingo',
    icon: '/juegos/escape-vikingo/icons/icon-256.png',
    iframeSrc: '/juegos/escape-vikingo/index.html',
    category: 'Aventura',
    categorySlug: 'aventura',
    rating: 4.8,
    votes: '7,650',
    players: '7,650',
    tags: ['Aventura', 'Acción', 'Vikingos', 'Plataformas', 'Mobile'],
    description: 'El Escape del Vikingo es un juego de aventura donde debes ayudar a tu vikingo a escapar de enemigos y trampas. Con gráficos HD y múltiples niveles desafiantes.',
    tips: [
      'Usa el escudo para bloquear los ataques enemigos',
      'Recoge todas las monedas para desbloquear mejoras',
      'Los enemigos rojos son más fuertes — evítalos si puedes',
      'Aprovecha los trampolines para llegar a zonas secretas',
    ],
    faqs: [
      { q: '¿El Escape del Vikingo es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
      { q: '¿Cuántos niveles tiene?', a: 'Múltiples niveles con dificultad creciente y nuevos enemigos.' },
    ],
  },
  {
    slug: 'gelatinas-locas',
    name: 'Gelatinas Locas',
    icon: '/juegos/gelatinas-locas/icons/icon-256.png',
    iframeSrc: '/juegos/gelatinas-locas/index.html',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    rating: 4.9,
    votes: '11,430',
    players: '11,430',
    tags: ['Puzzle', 'Match 3', 'Colores', 'Casual', 'Mobile', 'Adictivo'],
    description: 'Gelatinas Locas es el juego de puzzle más adictivo de JuegaYa. Combina 3 o más gelatinas del mismo color para eliminarlas y sumar puntos.',
    tips: [
      'Combina 4 o más gelatinas para obtener power-ups especiales',
      'Planifica tus movimientos antes de hacer clic',
      'Los combos encadenados multiplican tus puntos',
      'Usa los boosters en los niveles más difíciles',
    ],
    faqs: [
      { q: '¿Gelatinas Locas es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
      { q: '¿Cómo se juega?', a: 'Combina 3 o más gelatinas del mismo color tocándolas o haciendo clic.' },
      { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
    ],
  },
  {
    slug: 'cazador-zombies',
    name: 'Cazador de Zombies',
    icon: '/juegos/cazador-zombies/icons/icon-256.png',
    iframeSrc: '/juegos/cazador-zombies/index.html',
    category: 'Acción',
    categorySlug: 'accion',
    rating: 4.8,
    votes: '9,240',
    players: '9,240',
    tags: ['Acción', 'Disparos', 'Zombies', '20 Niveles', 'Arcade', 'Mobile'],
    description: 'Cazador de Zombies es un juego de acción con 20 niveles de dificultad creciente. Elimina hordas de zombies antes de que te alcancen.',
    tips: [
      'Apunta a la cabeza para eliminar zombies con un solo disparo',
      'Guarda munición para los jefes al final de cada mundo',
      'Los zombies más lentos hacen más daño — mantenlos lejos',
      'Recoge los power-ups amarillos para munición extra',
    ],
    faqs: [
      { q: '¿Cazador de Zombies es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
      { q: '¿Cuántos niveles tiene?', a: '20 niveles con dificultad creciente.' },
      { q: '¿Funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
    ],
  },
  {
    slug: 'test-iq',
    name: 'Test de IQ Latam',
    icon: null,
    iframeSrc: '/juegos/test-iq.html',
    category: 'Inteligencia',
    categorySlug: 'inteligencia',
    rating: 4.8,
    votes: '15,020',
    players: '15,020',
    tags: ['IQ', 'Inteligencia', 'Trivia', 'Test', 'Viral', 'Latam'],
    description: 'Este test de IQ gratis evalúa tu capacidad de razonamiento lógico con 10 preguntas diseñadas para el público latinoamericano.',
    tips: [
      'Lee cada pregunta con calma antes de responder',
      'Tienes 20 segundos por pregunta — no te apures',
      'Si no sabes la respuesta, elimina las opciones incorrectas',
      'Comparte tu resultado para ver si tus amigos te superan',
    ],
    faqs: [
      { q: '¿El test de IQ es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin registro ni pagos.' },
      { q: '¿Qué tan preciso es el resultado?', a: 'Es un test de entretenimiento. Para un test clínico consulta un psicólogo.' },
      { q: '¿Puedo compartir mi resultado?', a: 'Sí, al terminar puedes compartir tu IQ por WhatsApp con un clic.' },
    ],
  },
  {
    slug: 'neon-bird',
    name: 'Neon Bird',
    icon: null,
    iframeSrc: '/juegos/neon-bird.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    rating: 4.9,
    votes: '12,380',
    players: '12,380',
    tags: ['Arcade', 'Habilidad', 'Neón', 'Reflejos', 'Mobile', 'Adictivo'],
    description: 'Neon Bird es un juego arcade de habilidad donde debes esquivar obstáculos con tu pájaro neón. Sube en el ranking latinoamericano.',
    tips: [
      'Toca con suavidad para controlar mejor la altura del pájaro',
      'Mantén el ritmo constante en lugar de tocar rápido',
      'Concéntrate en el espacio entre los obstáculos, no en el pájaro',
      'Juega con auriculares para mejor concentración',
    ],
    faqs: [
      { q: '¿Cómo jugar Neon Bird gratis?', a: 'Haz clic o toca la pantalla para volar y esquiva los obstáculos.' },
      { q: '¿Neon Bird funciona en celular?', a: 'Sí, optimizado para móvil. Funciona en Android e iOS.' },
      { q: '¿Puedo competir con amigos?', a: 'Sí, comparte tu puntaje por WhatsApp y reta a tus amigos.' },
    ],
  },
  {
    slug: 'test-reflejos',
    name: 'Test de Reflejos',
    icon: null,
    iframeSrc: '/juegos/test-reflejos.html',
    category: 'Habilidad',
    categorySlug: 'habilidad',
    rating: 4.7,
    votes: '8,430',
    players: '8,430',
    tags: ['Reflejos', 'Velocidad', 'Habilidad', 'Test', 'Viral', 'Mobile'],
    description: 'Este test mide tu tiempo de reacción visual. El promedio humano es 200-300ms. ¿Eres más rápido que el 95% de Latam?',
    tips: [
      'Descansa tus ojos antes de jugar para mejores reflejos',
      'Mantén el dedo cerca de la pantalla pero sin tocarla',
      'No anticipes — espera ver el color verde',
      'La cafeína puede mejorar levemente el tiempo de reacción',
    ],
    faqs: [
      { q: '¿Cómo funciona el test?', a: 'Espera que la pantalla se ponga verde y toca lo más rápido que puedas. 3 intentos.' },
      { q: '¿Cuál es el tiempo normal?', a: 'El promedio humano está entre 200-300ms. Menos de 200ms es excelente.' },
      { q: '¿Puedo mejorar mis reflejos?', a: 'Sí. Con práctica y descanso adecuado puedes mejorar tu tiempo de reacción.' },
    ],
  },
  {
    slug: 'corre-mi-bro',
    name: 'Corre mi Bro',
    icon: null,
    iframeSrc: '/juegos/corre-mi-bro.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    rating: 4.6,
    votes: '6,200',
    players: '6,200',
    tags: ['Runner', 'Arcade', 'Latino', 'Lima', 'CDMX', 'Bogotá', 'Mobile'],
    description: 'Corre mi Bro es el primer runner ambientado en las calles de Latinoamérica. Elige tu ciudad y corre esquivando obstáculos típicos de cada lugar.',
    tips: [
      'Desliza a los lados para cambiar de carril rápidamente',
      'Recoge las monedas doradas para mayor puntaje',
      'La velocidad aumenta cada 200 metros — prepárate',
      'Desliza hacia abajo para esquivar obstáculos bajos',
    ],
    faqs: [
      { q: '¿Corre mi Bro es gratis?', a: 'Sí, 100% gratis en JuegaYa. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí. Desliza para moverte, salta y esquiva obstáculos.' },
      { q: '¿Puedo elegir ciudad?', a: 'Sí. Lima, CDMX, Bogotá y Buenos Aires, cada una con obstáculos únicos.' },
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return GAMES.find(g => g.slug === slug)
}

export function getAllSlugs(): string[] {
  return GAMES.map(g => g.slug)
}
