export interface Game {
  slug: string
  name: string
  icon: string | null
  iframeSrc: string
  category: string
  categorySlug: string
  tags: string[]
  description: string
  tips: string[]
  faqs: { q: string; a: string }[]
  /** Guía "Cómo jugar": objetivo, controles y estrategia (texto propio para cada juego) */
  guide?: { objetivo: string; controles: string; estrategia: string }
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
    badge: 'Nuevo',
    difficulty: 80,
    color: 'from-amber-900 to-yellow-900',
    tags: ['IQ', 'Historia', 'Test', 'Viral', 'Mobile'],
    description: 'Preguntas generadas por IA sobre historia mundial y latinoamericana, con 10 segundos para responder cada una. Casi todas las partidas son diferentes.',
    tips: ['Tienes 10 segundos por pregunta: responde rápido lo que sabes','Cada segundo que te sobra suma 10 puntos de bono','Comparte tu resultado para retar amigos'],
    faqs: [
      { q: '¿Las preguntas son siempre las mismas?', a: 'Normalmente no: la IA genera 10 preguntas nuevas para cada partida. En momentos de mucho tráfico se puede repetir una partida generada antes.' },
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin registro ni descargas.' },
    ],
    guide: {
      objetivo: "Responde 10 preguntas de opción múltiple sobre historia mundial y latinoamericana. Cada pregunta tiene cuatro opciones y solo una es correcta. Un acierto vale 100 puntos más un bono de 10 puntos por cada segundo que te quede en el reloj; un error o quedarte sin tiempo no suma nada. Al final ves tus aciertos, el bono acumulado y un puntaje de \"IQ histórico\" entre 70 y 160 calculado a partir de tus respuestas y tu rapidez.",
      controles: "En PC haz clic sobre la opción que creas correcta; en el celular simplemente tócala. No hay atajos de teclado. Tienes 10 segundos por pregunta y una barra te muestra el tiempo restante (se pone en rojo en los últimos 3 segundos). Tras responder, el juego avanza solo a la siguiente pregunta.",
      estrategia: "Como el bono depende de los segundos que sobran, responder rápido lo que sabes con certeza vale casi el doble que acertar en el último segundo. Si dudas, descarta primero las opciones que no encajan con la época o la región de la pregunta y elige entre las que quedan antes de que se acabe el reloj: dejar que el tiempo se agote cuenta igual que fallar. Después de cada respuesta aparece la opción correcta y un dato curioso; léelos, porque los temas suelen repetirse entre partidas y te ayudan a mejorar. Al final puedes compartir tu resultado por WhatsApp.",
    },
  },
  {
    slug: 'escape-vikingo',
    name: 'El Escape del Vikingo',
    icon: '/juegos/escape-vikingo/icons/icon-256.png',
    iframeSrc: '/juegos/escape-vikingo/index.html',
    category: 'Aventura',
    categorySlug: 'aventura',
    tags: ['Aventura', 'Acción', 'Vikingos', 'Plataformas', 'Mobile'],
    description: 'El Escape del Vikingo es un juego de acción y aventura en el que vuelas sobre un dragón, derrotas goblins con tus armas y esquivas trampas para llegar a la meta antes de que se acabe el tiempo.',
    tips: ['Guarda las bombas para los enemigos más resistentes','Cambia de arma con Ctrl o con el botón de arma','Recoge las cajas de bonificación de +30 y +50','Vigila el reloj: tienes 3 minutos para llegar'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
    guide: {
      objetivo: "Controlas a un vikingo que vuela sobre un dragón a través de un bosque lleno de goblins, plantas carnívoras y criaturas voladoras. La pantalla avanza sola y debes recorrer la distancia indicada (empieza en 3000) antes de que el reloj de 3:00 llegue a cero. Tu barra de vida baja con los golpes de enemigos y trampas; si se vacía, pierdes. Monedas, gemas y enemigos derrotados suman a tu puntaje.",
      controles: "En PC muévete en cuatro direcciones con las flechas o con W, A, S y D, ataca con la barra espaciadora y cambia de arma con Ctrl. En el celular usa las flechas en pantalla, el botón de ataque y el botón de arma de la esquina izquierda. Hay botón de pausa, música y pantalla completa.",
      estrategia: "Cada arma tiene munición propia: empiezas con muchos proyectiles del arma básica y pocas bombas, así que guarda las bombas para enemigos resistentes y usa el arma básica contra los voladores. Algunos goblins tienen mucha vida y armadura; en el menú de información (botón \"i\") puedes revisar la ficha de los 16 enemigos con su vida, velocidad, daño, armadura y recompensa. Además de los enemigos, cuidado con mazas colgantes, pinchos, tótems, fuego y agua. Recoge las cajas de bonificación (+30 o +50) y las monedas en tu camino, pero no te desvíes tanto que pierdas vida o tiempo.",
    },
  },
  {
    slug: 'gelatinas-locas',
    name: 'Gelatinas Locas',
    icon: '/juegos/gelatinas-locas/icons/icon-256.png',
    iframeSrc: '/juegos/gelatinas-locas/index.html',
    category: 'Puzzle',
    categorySlug: 'puzzle',
    tags: ['Puzzle', 'Match 3', 'Colores', 'Casual', 'Mobile'],
    description: 'Combina 3 o más gelatinas iguales para eliminarlas y sumar puntos antes de que se vacíe la barra de tiempo.',
    tips: ['Cada combinación recarga la barra de tiempo','Combina en la parte baja para provocar cascadas','Busca dos iguales juntas y la tercera a una casilla'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
    guide: {
      objetivo: "Es un juego de combinar tres en un tablero de 10 por 6 con cinco tipos de gelatina. Intercambia dos gelatinas vecinas para formar líneas de tres o más iguales; desaparecen, caen nuevas y puedes encadenar combinaciones. La barra vertical de la izquierda es tu tiempo: baja sin parar y se recarga con cada combinación. Cuando se vacía, termina la partida. Tu nivel sube al alcanzar ciertos puntajes.",
      controles: "En PC haz clic sobre una gelatina y arrástrala hacia la casilla vecina (arriba, abajo, izquierda o derecha) con la que quieres intercambiarla. En el celular desliza el dedo de la misma forma. Si el intercambio no forma una línea, las piezas vuelven a su lugar. Hay botones de pausa, reinicio, música y sonido.",
      estrategia: "Como el tiempo es lo que te elimina, la prioridad es no quedarte quieto: haz combinaciones rápidas para mantener la barra llena y busca las jugadas grandes solo cuando tengas margen. Prefiere las combinaciones en la parte baja del tablero, porque las gelatinas que caen pueden formar cascadas que suman puntos sin gastar tiempo. Mira primero dónde hay dos iguales juntas y busca la tercera a una casilla de distancia. El marcador lateral te muestra cuántas gelatinas has eliminado (BLOCK), tus movimientos (MOVES) y tu nivel, que sube a los 2000, 5000 y 10 000 puntos, entre otros.",
    },
  },
  {
    slug: 'cazador-zombies',
    name: 'Cazador de Zombies',
    icon: '/juegos/cazador-zombies/icons/icon-256.png',
    iframeSrc: '/juegos/cazador-zombies/index.html',
    category: 'Acción',
    categorySlug: 'accion',
    tags: ['Acción', 'Disparos', 'Zombies', '20 Niveles', 'Arcade'],
    description: 'Elimina a todos los zombis de cada nivel con munición limitada. 20 niveles con físicas: derriba cajas, detona bombas y encadena caídas.',
    tips: ['Cuenta tus balas: cada nivel trae munición limitada','Detona las bombas cerca de varios zombis','Derriba las pilas de cajas para eliminar a más de uno'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Cuántos niveles tiene?', a: '20 niveles repartidos en un mapa mundial, cada uno con su propia cantidad de zombis y balas.' },
    ],
    guide: {
      objetivo: "Eres un tirador que debe eliminar a todos los zombis de cada escenario usando una cantidad limitada de balas. Los niveles usan físicas: los disparos empujan cajas, derriban a los zombis y pueden activar bombas. Si eliminas a todos, ganas el nivel, recibes estrellas y desbloqueas el siguiente; si te quedas sin munición antes, toca reintentar. El juego tiene 20 niveles en un mapa mundial.",
      controles: "En PC apunta y dispara haciendo clic en el punto hacia donde quieres tirar; el personaje gira hacia el cursor. En el celular toca la pantalla en la dirección del disparo. No se usa teclado. Se recomienda jugar en horizontal en el celular. Hay botones de pausa, reinicio, mapa de niveles y sonido.",
      estrategia: "Cada nivel trae munición contada (por ejemplo, el primero tiene 6 zombis y 36 balas), así que piensa antes de disparar. Aprovecha las físicas: derribar una pila de cajas o detonar una bomba cerca de varios zombis puede eliminar a más de uno con un solo tiro, y los cuerpos que caen también arrastran a otros. Cuando un obstáculo tapa la línea directa, busca un ángulo libre en lugar de gastar balas contra la madera. Los distintos tipos de zombi dan recompensas distintas (entre 40 y 120 monedas), y al cerrar cada nivel recibes una calificación en estrellas que queda registrada en el mapa.",
    },
  },
  {
    slug: 'test-iq',
    name: 'Test de IQ Latam',
    icon: null,
    iframeSrc: '/juegos/test-iq.html',
    category: 'Inteligencia',
    categorySlug: 'inteligencia',
    fixedHeight: '620px',
    tags: ['IQ', 'Inteligencia', 'Trivia', 'Test', 'Viral', 'Latam'],
    description: 'Evalúa tu razonamiento con 10 preguntas de lógica, series numéricas, cálculo mental y analogías. El resultado es un IQ estimado de entretenimiento.',
    tips: ['Lee con calma cada pregunta','Tienes 20 segundos por pregunta','Elimina opciones incorrectas'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin registro ni pagos.' },
      { q: '¿Puedo compartir mi resultado?', a: 'Sí, por WhatsApp con un clic.' },
    ],
    guide: {
      objetivo: "Responde 10 preguntas de lógica, series numéricas, cálculo mental, analogías y razonamiento verbal. Cada pregunta tiene un valor distinto según su dificultad (de 10 a 30 puntos, hasta 195 en total) y solo sumas si aciertas. Al terminar, tu puntaje se convierte en un \"IQ estimado\" de entretenimiento (72, 88, 100, 115, 128 o 142) con un título y la opción de compartirlo.",
      controles: "En PC haz clic en la respuesta que elijas; en el celular tócala. Hay cuatro opciones por pregunta y 20 segundos para contestar cada una; el contador está visible arriba. Si se acaba el tiempo, el juego marca la respuesta correcta y pasa a la siguiente sin darte puntos.",
      estrategia: "Las últimas preguntas valen más (la serie final vale 30 puntos frente a los 10 de la primera), así que no te confíes al final del test. En las series, busca la regla comparando cada número con el anterior: ¿se suma, se multiplica o se suman los dos anteriores? En los problemas con distancias o días de la semana, haz la cuenta paso a paso en lugar de elegir la opción que \"suena\" bien; algunas preguntas tienen trampas de redacción. Veinte segundos alcanzan para leer dos veces el enunciado, y no hay penalización por usar el tiempo completo. Recuerda que el resultado es orientativo y no reemplaza una prueba psicométrica.",
    },
  },
  {
    slug: 'neon-bird',
    name: 'Neon Bird',
    icon: null,
    iframeSrc: '/juegos/neon-bird.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    aspectRatio: '3/4',
    tags: ['Arcade', 'Habilidad', 'Neón', 'Reflejos', 'Mobile'],
    description: 'Esquiva obstáculos con tu pájaro neón y supera tu propio récord.',
    tips: ['Da un solo toque justo antes del hueco','Mantén ritmo constante','Mira el espacio entre obstáculos'],
    faqs: [
      { q: '¿Cómo jugar?', a: 'Haz clic, toca la pantalla o pulsa la barra espaciadora o la flecha arriba para volar, y esquiva los pilares.' },
      { q: '¿Funciona en celular?', a: 'Sí, en Android e iOS.' },
    ],
    guide: {
      objetivo: "Guía a un pájaro de neón a través de pares de pilares verdes que avanzan hacia ti. Cada pilar que superas suma un punto. La partida termina si chocas con un pilar, tocas el suelo o tocas el borde superior de la pantalla. Al perder ves tu puntaje y tu mejor marca de la sesión, y puedes volver a empezar al instante.",
      controles: "En PC haz clic sobre el juego o presiona la barra espaciadora o la flecha hacia arriba para aletear. En el celular toca la pantalla. Cada aleteo da un pequeño impulso hacia arriba; entre aleteos la gravedad hace caer al pájaro. La misma acción sirve para empezar y para reiniciar tras perder.",
      estrategia: "La velocidad de los pilares y el tamaño del hueco no cambian durante la partida, así que todo depende del ritmo. Mantén al pájaro cerca de la altura del siguiente hueco antes de llegar a él, en lugar de corregir a último momento. Evita aletear varias veces seguidas: cada toque reinicia el impulso hacia arriba y es fácil terminar contra el techo, que también elimina. Es mejor dejarte caer un poco y dar un solo toque justo antes del hueco. Ojo al perder: un toque inmediato reinicia la partida, así que respira antes de seguir.",
    },
  },
  {
    slug: 'test-reflejos',
    name: 'Test de Reflejos',
    icon: null,
    iframeSrc: '/juegos/test-reflejos.html',
    category: 'Habilidad',
    categorySlug: 'habilidad',
    fixedHeight: '560px',
    tags: ['Reflejos', 'Velocidad', 'Habilidad', 'Test', 'Viral'],
    description: 'Mide tu tiempo de reacción en tres intentos. Como referencia general, el tiempo de reacción visual suele estar entre 200 y 300 ms. ¿Cuánto tardas tú?',
    tips: ['Descansa los ojos antes','Mantén el dedo cerca','No anticipes — espera el verde'],
    faqs: [
      { q: '¿Cómo funciona?', a: 'Espera el verde y toca lo más rápido que puedas. 3 intentos.' },
      { q: '¿Cuál es el tiempo normal?', a: 'Entre 200-300ms. Menos de 200ms es excelente.' },
    ],
    guide: {
      objetivo: "Mide tu tiempo de reacción en tres intentos. En cada uno la zona de juego se muestra en rojo con el mensaje \"Espera...\" y, tras una pausa aleatoria, cambia a verde: en ese momento debes tocar lo más rápido posible. El juego te muestra el tiempo de cada intento en milisegundos y al final calcula tu promedio, que define tu rango, desde \"Necesitas practicar\" hasta \"Reflejos de Dios\".",
      controles: "En PC haz clic sobre el recuadro de juego; en el celular tócalo. No hay controles de teclado. Si tocas mientras sigue en rojo, aparece \"¡Muy pronto!\" y ese intento se pierde. Al terminar puedes compartir tu resultado por WhatsApp o intentarlo de nuevo.",
      estrategia: "La espera antes del verde cambia en cada intento (entre 1,5 y 4,5 segundos aproximadamente), así que no sirve contar mentalmente: adelantarte solo te hace perder el intento. Los intentos fallidos no entran en el promedio, pero si fallas los tres tu resultado queda en 999 ms. Ponte cómodo, deja el dedo o el cursor ya sobre el recuadro y concentra la vista en el color, no en el texto. Si usas mouse, un clic con el dedo índice ya apoyado suele ser más rápido que mover la mano. Haz varias rondas: el primer intento casi siempre es el más lento.",
    },
  },
  {
    slug: 'corre-mi-bro',
    name: 'Corre mi Bro',
    icon: null,
    iframeSrc: '/juegos/corre-mi-bro.html',
    category: 'Arcade',
    categorySlug: 'arcade',
    fixedHeight: '620px',
    tags: ['Runner', 'Arcade', 'Latino', 'Lima', 'CDMX', 'Mobile'],
    description: 'Corre por las calles de Lima, CDMX, Bogotá y Buenos Aires esquivando obstáculos.',
    tips: ['Desliza a los lados para cambiar carril','Recoge monedas doradas','La velocidad aumenta cada 200m'],
    faqs: [
      { q: '¿Es gratis?', a: 'Sí, 100% gratis. Sin descargas ni registro.' },
      { q: '¿Puedo elegir ciudad?', a: 'Sí. Lima, CDMX, Bogotá y Buenos Aires.' },
    ],
    guide: {
      objetivo: "Elige una de cuatro ciudades (Lima, CDMX, Bogotá o Buenos Aires) y un personaje (El Bro o La Bro) y corre por una calle de tres carriles. Los obstáculos bajan hacia ti y cada choque te quita una de tus tres vidas; al perderlas todas termina la partida. Tu rango final depende de los metros recorridos, y las monedas que recoges suman puntos aparte.",
      controles: "En PC usa las flechas izquierda y derecha para cambiar de carril, flecha arriba o barra espaciadora para saltar y flecha abajo para deslizarte. En el celular desliza el dedo hacia los lados para cambiar de carril, hacia arriba para saltar y hacia abajo para deslizarte. No hay control con mouse.",
      estrategia: "La forma más segura de esquivar un obstáculo es cambiar de carril a tiempo. Muévete con anticipación, porque el personaje tarda un instante en llegar al carril nuevo, y fíjate en los obstáculos que vienen más lejos para no quedar encerrado entre dos. La velocidad sube cada 200 metros y los obstáculos aparecen con más frecuencia a medida que avanzas, así que conviene aprovechar los primeros tramos, más tranquilos, para juntar monedas (10 puntos cada una). Las ciudades cambian los colores y los obstáculos decorativos, como mototaxis en Lima o tacos en CDMX, pero no la dificultad: elige la que más te guste.",
    },
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
