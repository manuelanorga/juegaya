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
    aspectRatio: '3/4',
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
  {
    slug: 'palabro',
    name: 'Palabro',
    icon: '/juegos/palabro/icons/icon-256.png',
    emoji: '🔤',
    iframeSrc: '/juegos/palabro/index.html',
    aspectRatio: '3/4',
    category: 'Inteligencia',
    categorySlug: 'inteligencia',
    rating: 4.8, votes: '0', players: '8,000',
    badge: 'Nuevo',
    difficulty: 60,
    color: 'from-cyan-900 to-blue-900',
    tags: ['Palabras', 'Wordle', 'Diario', 'Español', 'Puzzle', 'Mobile'],
    description: 'Adivina la palabra secreta de 5 letras en 6 intentos. Palabro es un juego diario de palabras en español inspirado en el popular Wordle, donde todos los jugadores enfrentan la misma palabra cada día. Tras cada intento, los colores te dicen qué tan cerca estás: verde para letra correcta en posición correcta, amarillo para letra correcta en otra posición, gris para letra que no está. Incluye modo libre ilimitado, estadísticas detalladas con distribución de intentos, racha de victorias y compartir resultados estilo cuadraditos. Sin tildes, con ñ, 100% en español latam.',
    tips: [
      'Empieza con palabras que tengan muchas vocales: AVION, RUEDA, CAMPO o SOBRE abren mucho el juego.',
      'Las palabras no llevan tildes: escribí MAMA, no MAMÁ.',
      'Usá la Ñ cuando tenga sentido: palabras como NIÑOS, CAÑON o LEÑAS aparecen.',
      'Si tu primera palabra descartó muchas letras, en la segunda tirá letras totalmente nuevas para maximizar información.',
      'Las letras grises del teclado te dicen qué descartar en próximos intentos.',
      'La palabra diaria es la misma para todo el mundo, competí con amigos a ver quién la saca en menos intentos.',
    ],
    faqs: [
      { q: '¿Qué es Palabro?', a: 'Palabro es un juego de adivinar palabras de 5 letras en español, similar al Wordle original pero en nuestro idioma. Cada día hay una palabra secreta que todos los jugadores tienen que adivinar en máximo 6 intentos.' },
      { q: '¿Cómo se juega Palabro?', a: 'Escribí una palabra de 5 letras en español y presioná Enter. Cada letra se colorea según su posición: verde significa letra correcta en posición correcta, amarillo significa que la letra está pero en otra posición, gris significa que la letra no está en la palabra.' },
      { q: '¿Cuántos intentos tengo?', a: 'Tenés 6 intentos para adivinar la palabra diaria. Si no la sacás, se te muestra la palabra correcta y podés volver a intentar mañana con una nueva.' },
      { q: '¿Cuándo cambia la palabra diaria?', a: 'La palabra cambia a medianoche de tu zona horaria local. Después de terminar la diaria podés ver un contador que te muestra cuánto falta para la próxima.' },
      { q: '¿Puedo jugar ilimitado?', a: 'Sí. Además del modo diaria (una palabra al día), tenés un modo libre con palabras infinitas al azar. Pero solo la diaria suma a tus estadísticas y racha.' },
      { q: '¿Se guarda mi progreso?', a: 'Tus estadísticas, racha de victorias y el estado de la partida diaria se guardan en tu navegador, así que podés volver cuando quieras. Si cambiás de dispositivo o limpiás caché, empezás de cero.' },
      { q: '¿Puedo compartir mi resultado?', a: 'Sí, hay un botón de compartir que genera el resultado con cuadraditos de colores sin revelar la palabra, para que puedas pegarlo en WhatsApp, Twitter o donde quieras sin hacerle spoiler a tus amigos.' },
    ],
  },
  {
    slug: '2048',
    name: '2048',
    icon: '/juegos/2048/icons/icon-256.png',
    emoji: '🔢',
    iframeSrc: '/juegos/2048/index.html',
    aspectRatio: '1/1',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    rating: 4.9, votes: '0', players: '15,000',
    badge: 'Nuevo',
    difficulty: 55,
    color: 'from-blue-900 to-amber-700',
    tags: ['Puzzle', '2048', 'Números', 'Fusión', 'Mobile', 'Estrategia'],
    description: '2048 es el juego de puzzle con números que se volvió un fenómeno mundial. Fusiona tiles iguales deslizando el tablero en cuatro direcciones para crear números cada vez más grandes. Empiezas con tiles de 2 y la meta es llegar al 2048. Simple de aprender, difícil de dominar: cada movimiento cuenta porque el tablero se va llenando. Funciona con flechas del teclado o deslizando el dedo en celular, incluye botón de deshacer un movimiento y guarda tu récord personal.',
    tips: [
      'Mantené tu tile más alta siempre en la misma esquina, no la muevas de lugar.',
      'Construí "cadenas" descendentes desde tu tile más alta: al lado 1024, después 512, después 256, etc.',
      'Evitá mover hacia arriba si tu tile máxima está abajo: rompe la estrategia de esquina.',
      'Hacé movimientos rápidos en dos direcciones (izquierda y abajo por ejemplo) para no dispersar tiles.',
      'Usá el botón de deshacer cuando hagas un movimiento que no tenías planeado: un movimiento malo puede costar la partida.',
      'No te apures por llegar a 2048: primero llená el tablero con tiles medianas y fusionalas en orden.',
    ],
    faqs: [
      { q: '¿Cómo se juega 2048?', a: 'Deslizá el tablero en las cuatro direcciones (arriba, abajo, izquierda, derecha) para mover todas las tiles. Cuando dos tiles con el mismo número se tocan al moverse, se fusionan en una tile con el doble del valor. El objetivo es crear una tile con el número 2048.' },
      { q: '¿Cómo se controla en celular?', a: 'Deslizá con el dedo sobre el tablero en la dirección que quieras mover las tiles. Los controles táctiles están optimizados para Android y iPhone.' },
      { q: '¿Se puede seguir jugando después de llegar a 2048?', a: 'Sí. Cuando alcances el 2048, el juego te felicita pero podés elegir seguir jugando para ver hasta dónde llegás. Con buena estrategia podés alcanzar 4096, 8192 o incluso más.' },
      { q: '¿Qué hace el botón de deshacer?', a: 'Deshace tu último movimiento. Solo podés deshacer una vez seguida, así que usalo sabiamente cuando hagas una jugada mala que no tenías planeada.' },
      { q: '¿Se guarda mi récord?', a: 'Sí. Tu récord personal de puntos se guarda en tu navegador. Si cambiás de dispositivo o limpiás caché, empezás de cero.' },
      { q: '¿Por qué se terminó la partida si todavía tengo tiles?', a: 'La partida termina cuando no hay movimientos posibles: no hay celdas vacías y ninguna tile adyacente tiene el mismo valor para poder fusionarse. Reintentá y planificá mejor.' },
    ],
  },
]

export function getGame(slug: string): Game | undefined {
  return GAMES.find(g => g.slug === slug)
}

export function getAllSlugs(): string[] {
  return GAMES.map(g => g.slug)
}
