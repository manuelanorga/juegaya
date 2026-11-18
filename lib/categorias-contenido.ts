import type { ContenidoCategoria } from './categorias'

/**
 * Texto propio de cada categoría indexable. Una categoría sin texto aquí no va a Google:
 * un listado de juegos sin nada más se considera contenido de poco valor.
 */
export const CONTENIDO_CATEGORIAS: Record<string, ContenidoCategoria> = {
  'juegos-gratis-online': {
    titulo: 'Qué vas a encontrar en JuegaYa',
    parrafos: [
      'Todos los juegos de esta página se abren directo en el navegador, en el celular o en la computadora. No hace falta instalar una app, crear una cuenta ni dejar tu correo. Entras, eliges un juego y empiezas a jugar en unos segundos.',
      'El catálogo tiene cuatro grupos. Los retos diarios, como el sudoku, el crucigrama o Palabro, cambian cada medianoche y son iguales para todos, así que puedes comparar tu resultado con el de otros jugadores. Los puzzles, como Bloques Locos o 2048, no tienen apuro y sirven para pensar con calma. Los juegos de acción y arcade, como Neon Bird o Corre mi Bro, son partidas cortas de reflejos. Y los tests, como el de reflejos o el de historia, te dan un resultado en un par de minutos.',
      'Tu progreso se guarda en tu propio navegador: la racha de los retos diarios, tus mejores tiempos y la partida que dejaste a medias. No necesitamos saber quién eres para eso. Si borras los datos del navegador o cambias de dispositivo, empiezas de cero.',
      'Si no sabes por dónde empezar, piensa en cuánto tiempo tienes. Abajo te dejamos una recomendación según el momento.',
    ],
    eleccion: {
      titulo: 'Qué jugar según el tiempo que tienes',
      items: [
        { slug: 'test-reflejos', texto: 'Menos de un minuto: mide tu tiempo de reacción en tres intentos y reta a alguien a superarlo.' },
        { slug: 'neon-bird', texto: 'Un par de minutos: cada partida dura lo que aguanten tus reflejos, y siempre quieres una más.' },
        { slug: 'palabro', texto: 'Cinco minutos: adivina la palabra del día en seis intentos y comparte tu resultado sin revelar la respuesta.' },
        { slug: 'ahorcado', texto: 'Cinco minutos: una palabra por día con el tema como pista, y un modo libre para seguir jugando.' },
        { slug: 'crucigrama', texto: 'Diez minutos: un crucigrama corto en español con definiciones de vocabulario común.' },
        { slug: 'sudoku', texto: 'Quince minutos o más: el reto diario es de nivel medio, y en el modo libre eliges fácil o difícil.' },
        { slug: 'solitario', texto: 'Sin apuro: el clásico de cartas, con deshacer ilimitado y un reparto diario que siempre se puede ganar.' },
        { slug: 'bloques-locos', texto: 'Para relajarte: no hay reloj, solo piezas que encajar y filas que completar.' },
      ],
    },
  },

  'juegos-para-celular': {
    titulo: 'Cómo se juega en el celular',
    parrafos: [
      'Todos los juegos de esta lista funcionan en la pantalla del teléfono y se controlan con toques y gestos, sin mouse ni teclado. Los juegos de palabras traen su propio teclado en español, con la Ñ, para que el teclado del teléfono no tape el tablero.',
      'No hay nada que descargar de una tienda de aplicaciones: el juego se carga en el navegador cuando lo abres. Si quieres tenerlo a mano como una app, en Chrome o Safari puedes usar la opción "Agregar a la pantalla de inicio" del menú del navegador.',
      'Un consejo práctico: en los juegos de reflejos, juega con el celular apoyado o con las dos manos, y baja el brillo si la partida va a ser larga. En los puzzles y los retos diarios puedes salir en cualquier momento; la partida se guarda en tu navegador y la retomas donde la dejaste.',
    ],
    eleccion: {
      titulo: 'Juegos según cómo se controlan',
      items: [
        { slug: 'neon-bird', texto: 'Un solo toque: tocas para volar y esquivar los pilares. Ideal para jugar con una mano.' },
        { slug: 'bloques-locos', texto: 'Arrastrar: llevas cada pieza con el dedo hasta su lugar en el tablero.' },
        { slug: 'solitario', texto: 'Tocar o arrastrar: al tocar una carta se mueve sola al mejor destino, y también la puedes arrastrar.' },
        { slug: '2048', texto: 'Deslizar: mueves todo el tablero hacia arriba, abajo, izquierda o derecha.' },
        { slug: 'palabro', texto: 'Teclado en pantalla: escribes cada intento con el teclado propio del juego.' },
        { slug: 'sudoku', texto: 'Tocar casilla y número: el teclado numérico te muestra cuántos faltan de cada número.' },
        { slug: 'flechas-locas', texto: 'Un toque por flecha: lanzas cada flecha y piensas el orden para que ninguna choque.' },
      ],
    },
  },

  diarios: {
    titulo: 'Cómo funcionan los retos diarios',
    parrafos: [
      'Cada uno de estos juegos tiene un reto nuevo por día. El reto es el mismo para todos los jugadores y cambia a la medianoche de tu hora local, así que alguien en Lima y alguien en Ciudad de México juegan el mismo tablero en su propio día.',
      'Al terminar ves tu resultado y tu racha de días seguidos. Cuando ya jugaron suficientes personas ese día, también ves cuántos lo hicieron y a cuántos superaste. Esa comparación no pide cuenta ni correo: se hace con un identificador anónimo que se guarda en tu navegador.',
      'Puedes compartir tu resultado por WhatsApp o redes sin revelar la respuesta, para que tus amigos jueguen el mismo reto sin spoilers. Además, casi todos tienen un modo libre para seguir jugando cuando terminas el del día.',
      'Lo que cuenta en la comparación cambia según el juego. En algunos gana quien usa menos intentos o comete menos errores; en otros, quien termina más rápido, con segundos de penalización si pide ayuda o se equivoca. Esta es la medida de cada uno:',
    ],
    eleccion: {
      titulo: 'Qué mide cada reto',
      items: [
        { slug: 'palabro', texto: 'Intentos: cuantos menos necesites para adivinar la palabra de cinco letras, mejor. Tienes seis.' },
        { slug: 'ahorcado', texto: 'Errores: cada letra que no está revienta uno de tus seis globos. Un solo intento por día.' },
        { slug: 'crucigrama', texto: 'Tiempo: Comprobar suma 10 segundos si encuentra errores nuevos, y cada letra revelada suma 15.' },
        { slug: 'sudoku', texto: 'Tiempo: el reto diario es de nivel medio, y cada error o pista suma 10 segundos.' },
        { slug: 'solitario', texto: 'Tiempo: el reparto se comprueba antes con un solucionador para que siempre se pueda ganar.' },
        { slug: 'sopa-de-letras', texto: 'Tiempo: encuentra todas las palabras del tema del día lo más rápido posible.' },
        { slug: 'flechas-locas', texto: 'Tiempo: saca todas las flechas lo antes posible; cada pista suma 10 segundos.' },
        { slug: 'bloques-locos', texto: 'Puntos: aquí gana quien suma más con las mismas piezas que reciben todos.' },
      ],
    },
  },

  inteligencia: {
    titulo: 'Juegos para pensar, no para medir tu inteligencia',
    parrafos: [
      'Esta categoría reúne juegos que te hacen razonar: deducir una palabra con pocas pistas, ubicar números sin repetirlos, encontrar palabras escondidas o responder preguntas contra el reloj. Son buenos para mantener la cabeza activa en un rato libre.',
      'Una aclaración honesta: ninguno de estos juegos es una prueba psicológica. El Test de IQ Latam da un IQ estimado de entretenimiento, calculado con sus 10 preguntas, y no reemplaza a un test hecho por un profesional. Tómalo como un juego para compararte con tus amigos.',
      'Si quieres mejorar de verdad en alguno, el sudoku es el que más premia la práctica: cada nivel exige técnicas nuevas, y en nuestra guía de sudoku las explicamos paso a paso. En Palabro, aprender qué letras conviene probar primero cambia mucho tus resultados.',
      'Para sacarles provecho, juega con constancia más que con intensidad: un sudoku o un Palabro por día, siempre a la misma hora, te deja ver tu progreso en la racha y en tus tiempos. Y si un tablero se te resiste, déjalo un rato y vuelve después; muchas veces la deducción que no veías aparece sola con la cabeza descansada.',
    ],
    eleccion: {
      titulo: 'Qué pone a prueba cada juego',
      items: [
        { slug: 'sudoku', texto: 'Lógica pura: cada tablero tiene una sola solución y se resuelve sin adivinar.' },
        { slug: 'palabro', texto: 'Deducción: cada intento te da colores que descartan letras y posiciones.' },
        { slug: 'sopa-de-letras', texto: 'Atención visual: encontrar palabras escondidas entre letras sueltas entrena la vista.' },
        { slug: 'test-iq', texto: 'Razonamiento: series numéricas, cálculo mental y analogías en 10 preguntas.' },
        { slug: 'cuanto-sabes-historia', texto: 'Memoria y cultura general: preguntas de historia mundial y latinoamericana con 10 segundos cada una.' },
      ],
    },
  },

  arcade: {
    titulo: 'Arcade de reflejos, en partidas de un minuto',
    parrafos: [
      'Los juegos arcade de esta categoría se aprenden en segundos y se dominan con práctica: una sola regla, reflejos y la tentación de jugar una partida más para superar tu récord. No hay niveles que desbloquear ni nada que comprar.',
      'Cada uno se controla de forma distinta. En Neon Bird todo es un solo toque, y el secreto está en el ritmo, no en la velocidad. En Corre mi Bro tienes que leer el obstáculo que viene, porque saltar no sirve contra un bus y agacharse no sirve contra algo en el suelo. En La Viborita la dificultad sale de tu propio cuerpo: cuanto más larga es la serpiente, más tienes que planear las vueltas.',
      'Un consejo para los tres: no juegues con prisa después de perder. La mayoría de las partidas cortas se pierden por reaccionar tarde a algo que ya se veía venir, así que mirar un poco más adelante en la pantalla rinde más que tocar más rápido.',
      'Funcionan en el celular con toques y gestos, y en la computadora con el teclado. Tu mejor marca queda guardada en tu navegador para que tengas siempre un número que superar.',
    ],
    eleccion: {
      titulo: 'Cuál elegir',
      items: [
        { slug: 'viborita', texto: 'Si te gusta planear: come fruta, crece y no te encierres. Tiene un reto diario igual para todos.' },
        { slug: 'neon-bird', texto: 'Si quieres algo de un solo toque: pasa entre los pilares y cuida el ritmo.' },
        { slug: 'corre-mi-bro', texto: 'Si prefieres acción: corre por calles de Lima, CDMX, Bogotá y Buenos Aires esquivando obstáculos.' },
      ],
    },
  },

  puzzle: {
    titulo: 'Seis tipos de puzzle distintos',
    parrafos: [
      'Aunque todos son puzzles, cada juego de esta categoría pide una forma distinta de pensar. Algunos tienen reloj y te obligan a decidir rápido; otros no tienen límite de tiempo y premian planear varias jugadas por adelantado.',
      'Si te gusta jugar con calma, empieza por Bloques Locos o 2048: no hay prisa y cada partida es más larga cuanto mejor planeas. Si prefieres algo con tensión, Gelatinas Locas tiene una barra de tiempo que se vacía. Y si buscas un reto que se resuelva, como un acertijo, Flechas Locas tiene una solución exacta en cada tablero.',
      'Un truco que sirve en casi todos: mira el tablero completo antes de mover. En los juegos de fusión y de bloques, la mayoría de las partidas se pierden por llenar un rincón sin pensar en la pieza o el número que vendrá después.',
      'Si quieres mejorar en 2048, en nuestra guía explicamos la estrategia de la esquina paso a paso: dónde dejar la ficha más alta, qué movimientos evitar y cómo recuperarte cuando se sale de su lugar. Y en Bloques Locos, el reto diario reparte las mismas piezas a todos, así que es la mejor forma de comparar tu planificación con la de otros jugadores.',
    ],
    eleccion: {
      titulo: 'Cuál elegir según lo que te gusta',
      items: [
        { slug: 'bloques-locos', texto: 'Encajar piezas: completa filas y columnas para borrarlas y encadena combos. Sin reloj.' },
        { slug: '2048', texto: 'Fusionar números: desliza el tablero y une iguales hasta llegar al 2048.' },
        { slug: 'flechas-locas', texto: 'Ordenar: encuentra en qué orden sacar las flechas para que ninguna choque.' },
        { slug: 'frutas-locas', texto: 'Físicas: une frutas iguales para crear otras más grandes, hasta llegar a la sandía.' },
        { slug: 'buscaminas', texto: 'Deducir: cada número te dice cuántas minas tiene alrededor; abre todo sin pisar ninguna.' },
        { slug: 'gelatinas-locas', texto: 'Combinar contra el reloj: junta tres o más gelatinas iguales antes de que se acabe el tiempo.' },
      ],
    },
  },

  palabras: {
    titulo: 'Juegos de palabras pensados en español',
    parrafos: [
      'Los juegos de esta categoría están hechos para el español, no traducidos de otro idioma. Tienen la Ñ como letra propia, usan vocabulario de uso común en Latinoamérica y tienen un reto nuevo cada día.',
      'En el ahorcado y en el crucigrama las tildes no cuentan: escribes las palabras sin acentos y la Ñ va en su propia tecla. Así no pierdes una partida por un detalle de ortografía y te concentras en encontrar la palabra.',
      'Son un buen ejercicio de vocabulario: el crucigrama trabaja definiciones y sinónimos, el ahorcado y Palabro te hacen pensar en qué letras son más frecuentes, y la sopa de letras entrena la atención. Si quieres mejorar, en nuestras guías explicamos qué letras conviene probar primero y cómo leer las definiciones de un crucigrama.',
      'Para jugar en grupo, los retos diarios son lo más práctico: todos reciben la misma palabra o el mismo tablero, así que puedes mandar tu resultado al chat de la familia o de la oficina y ver quién lo resolvió con menos intentos o en menos tiempo. El resultado se comparte sin revelar la respuesta.',
    ],
    eleccion: {
      titulo: 'Cuál elegir',
      items: [
        { slug: 'palabro', texto: 'Si te gusta deducir: adivina una palabra de cinco letras con las pistas de colores.' },
        { slug: 'ahorcado', texto: 'Si prefieres algo más relajado: letra por letra, con el tema como pista.' },
        { slug: 'crucigrama', texto: 'Si te gustan las definiciones: entre 9 y 13 palabras cruzadas en un tablero corto.' },
        { slug: 'sopa-de-letras', texto: 'Si quieres algo visual: encuentra las palabras de un tema escondidas en el tablero.' },
      ],
    },
  },
}
