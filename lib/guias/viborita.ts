import type { Guia } from './tipo'

export const guiaViborita: Guia = {
  slug: 'trucos-para-el-juego-de-la-viborita',
  gameSlug: 'viborita',
  title: 'Trucos para el juego de la viborita: cómo ganar en snake',
  seoTitle: 'Trucos para el juego de la viborita y cómo ganar en snake',
  description:
    'Trucos para el juego de la serpiente: rutas por el borde y en zigzag, cómo no encerrarte, cómo planear los giros y qué hacer cuando sube la velocidad.',
  publishedAt: '2026-11-18',
  intro: [
    'El juego de la viborita parece de reflejos, y al principio lo es: la fruta está lejos, la cola es corta y casi cualquier camino sirve. Pero a partir de cierto largo la partida cambia. Ya no pierdes por lento, sino porque te metiste en un rincón del que no hay salida. Desde ese momento gana quien piensa dos o tres movimientos antes.',
    'Esta guía explica cómo jugar snake con un plan: qué rutas conviene seguir según el largo de la viborita, cómo evitar encerrarte, cómo encadenar giros sin errores y cómo manejar la velocidad.',
  ],
  secciones: [
    {
      titulo: 'Las reglas de nuestra versión',
      parrafos: [
        'El tablero tiene 15 columnas. Cada fruta normal suma 1 punto y alarga la viborita una casilla. Cuando comes la quinta fruta normal, y luego la décima, la decimoquinta y así, aparece además, si no hay otra a la vista, una fruta dorada que vale 3 puntos y también te hace crecer. Dura 40 movimientos: un anillo a su alrededor se va vaciando y, cuando le queda poco, parpadea.',
        'Pierdes si chocas con una pared, con una roca o con tu propio cuerpo. Sí puedes entrar en la casilla que deja la punta de tu cola, porque en ese paso se corre.',
        'En el reto del día todos juegan el mismo tablero de 15 por 20 casillas, con las mismas rocas y las frutas en los mismos lugares si se hacen los mismos movimientos. Las paredes matan, la velocidad sube un poco cada 5 frutas y solo cuenta tu primera partida. En el modo libre no hay rocas: eliges con o sin paredes (sin ellas, sales por el lado contrario) y una velocidad lenta, normal o rápida que no cambia.',
      ],
    },
    {
      titulo: 'La regla de oro: deja siempre una salida',
      parrafos: [
        'Casi todas las derrotas con una viborita larga tienen la misma causa: entraste a una zona cerrada por tu propio cuerpo y el espacio libre ahí dentro era más chico que tu largo.',
        'Antes de ir por una fruta, pregúntate por dónde vas a salir después de comerla. Si la fruta está en un hueco rodeado por tu cuerpo y las paredes, entrar es fácil, pero al comerla creces una casilla y el hueco queda todavía más justo. A veces conviene dar una vuelta larga y esperar a que tu cola abra el paso.',
        'Una forma práctica de pensarlo: tu cola es un reloj. Cada movimiento libera la casilla donde estaba la punta. Si sabes por dónde pasó tu cuerpo, sabes qué casillas se van a liberar primero, y ese suele ser el camino más seguro.',
      ],
    },
    {
      titulo: 'Al principio: ruta corta y lejos de los bordes',
      parrafos: [
        'Con menos de 15 o 20 casillas de largo, lo más eficiente es ir directo a la fruta, primero en una dirección y después en la otra. Por ejemplo, si la fruta está 4 filas arriba y 6 columnas a la derecha, sube las 4 filas y luego gira a la derecha. Hacer escalones no te lleva más rápido y te da más ocasiones de equivocarte.',
        'Mientras eres corto, evita pegarte a las paredes sin necesidad. Desde el centro tienes cuatro direcciones libres; junto a una pared tienes tres, y en una esquina solo dos. En el reto del día, además, las rocas están separadas de los bordes, así que el anillo exterior del tablero queda libre: úsalo como pasillo para dar la vuelta, no como lugar donde quedarte.',
      ],
    },
    {
      titulo: 'Con la viborita larga: el perímetro y el zigzag',
      parrafos: [
        'Cuando tu cuerpo ocupa buena parte del tablero, recorre el tablero en orden. Hay dos rutas clásicas.',
        'La primera es el perímetro: das vueltas pegado a las paredes y entras hacia el centro solo para buscar la fruta, volviendo enseguida al borde. Así tu cuerpo forma un anillo y el centro queda libre para maniobrar.',
        'La segunda es el zigzag, o serpentina: recorres una fila entera, bajas una casilla, recorres la fila siguiente en sentido contrario, y así hasta el final; luego subes por una columna que dejaste libre en un costado. Con 15 columnas, cada fila te lleva 14 movimientos de lado a lado. Es lento, pero tu cuerpo queda en franjas paralelas y la cola se libera en orden, así que no te encierras.',
        'Un buen plan mezcla ambos y toma un atajo hacia la fruta solo cuando tienes claro el regreso. En el reto del día las rocas cortan algunas filas: si una roca está en medio de tu zigzag, da la vuelta antes de llegar a ella, en vez de esquivarla por el medio.',
      ],
    },
    {
      titulo: 'Cómo planear los giros',
      parrafos: [
        'El giro más útil y más peligroso es la vuelta en U: vas hacia la derecha, giras hacia abajo y en el paso siguiente giras hacia la izquierda. Es la base del zigzag y exige dos órdenes seguidas.',
        'Nuestra versión guarda hasta 2 giros en espera, así que puedes deslizar hacia abajo y enseguida hacia la izquierda, o tocar las dos flechas, y la viborita los hará en los dos pasos siguientes, uno por paso. También ignora la media vuelta: si vas a la derecha y pides izquierda, no pasa nada, y no te mueres por un toque equivocado. Al deslizar no hace falta soltar el dedo: si cambias de dirección, cuenta como otro giro.',
        'La trampa de la cola de giros es pedir demasiado antes de tiempo. Si encadenas dos giros pensando en una fruta que está a cinco casillas, la viborita los hará de inmediato, no cuando llegues. Da cada orden justo antes de la casilla donde quieres girar.',
      ],
    },
    {
      titulo: 'Perseguir la cola',
      parrafos: [
        'Cuando no sabes qué hacer, sigue tu propia cola. La casilla de la punta siempre queda libre en el paso siguiente, así que ir detrás de ella es un camino que nunca se cierra mientras no comas. Es el recurso de emergencia cuando la fruta aparece en un lugar incómodo: das vueltas detrás de tu cola hasta que tu cuerpo libere un pasillo hacia ella.',
        'Eso sí, perseguir la cola solo compra tiempo: no suma puntos. Úsalo para esperar, no como estrategia de toda la partida. Mientras das vueltas, mira qué parte de tu cuerpo se va a liberar primero y sal hacia la fruta en cuanto ese pasillo se abra, dejando otra vez tu cola como salida.',
      ],
    },
    {
      titulo: 'La fruta dorada: cuándo ir y cuándo dejarla',
      parrafos: [
        'La dorada vale tres frutas normales, pero solo dura 40 movimientos. Si está a menos de 20 o 25 casillas de camino y la ruta es segura, ve por ella: tienes margen. Si para llegar tienes que cruzar un pasillo entre tu cuerpo y una pared, o dejar atrás un hueco del que después no sabrás salir, déjala ir. Perderla te cuesta 3 puntos; encerrarte por ella te cuesta la partida.',
        'Un truco: la dorada aparece justo cuando comes la quinta, décima o decimoquinta fruta normal. Antes de comer esa fruta, colócate en una zona abierta del tablero para tener caminos libres en todas direcciones cuando salga.',
      ],
    },
    {
      titulo: 'Velocidad, rocas y paredes',
      parrafos: [
        'En el reto del día la viborita arranca tranquila y acelera un poco cada 5 frutas, sumando normales y doradas, hasta un límite. A mayor velocidad, menos tiempo para corregir, así que el orden se vuelve más importante: con un zigzag limpio basta repetir el mismo par de giros en cada borde.',
        'En el modo libre sin paredes, salir por un borde te hace entrar por el opuesto. Eso abre atajos, pero también hace que tu cuerpo aparezca del otro lado: antes de cruzar, mira qué hay en la casilla por donde vas a entrar. Practica en lenta y luego sube a normal y rápida: el reto diario siempre se juega con paredes. Y evita estos errores comunes:',
      ],
      lista: [
        'Ir a la fruta por el camino más corto con la viborita ya larga.',
        'Meterse entre tu cuerpo y una roca o una pared, con un solo camino libre.',
        'Encadenar giros demasiado pronto y girar antes de la casilla correcta.',
        'Cruzar un borde en el modo sin paredes sin mirar qué hay del otro lado.',
        'Perseguir la dorada hasta un rincón cerrado.',
      ],
    },
    {
      titulo: 'Usa la pausa y pon a prueba lo aprendido',
      parrafos: [
        'Pausa con Espacio, P o el botón de pausa (al seguir hay una cuenta de 3, 2, 1) y mira por dónde vas a salir. Luego juega el reto del día, compara tu puntaje con el de los demás y practica rutas en el modo libre.',
      ],
    },
  ],
}
