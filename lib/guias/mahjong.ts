import type { Guia } from './tipo'

export const guiaMahjong: Guia = {
  slug: 'como-jugar-mahjong-solitario',
  gameSlug: 'mahjong',
  title: 'Cómo jugar mahjong solitario: reglas, estrategia y trucos',
  seoTitle: 'Cómo jugar mahjong solitario: reglas y trucos',
  description:
    'Reglas del mahjong solitario con ejemplos: qué ficha está libre, qué pareja elegir, fichas apiladas, el truco de las cuatro iguales y cuándo mezclar.',
  publishedAt: '2026-11-18',
  intro: [
    'El mahjong solitario usa las fichas del mahjong tradicional, pero no se parece en nada a ese juego de cuatro personas. Es un rompecabezas para una sola persona: las fichas están apiladas en capas formando una figura y hay que quitarlas todas, de a pares iguales.',
    'Al principio parece un juego de buena vista, pero en cuanto el tablero se complica, lo que decide la partida es el orden en que sacas las parejas. Esta guía explica las reglas con precisión y las ideas que evitan trabarse cerca del final.',
  ],
  secciones: [
    {
      titulo: 'Las fichas y cuáles forman pareja',
      parrafos: [
        'El juego completo tiene 144 fichas. Hay tres palos numerados del 1 al 9: círculos, bambúes y caracteres, con cuatro copias de cada número. Después vienen los honores: cuatro vientos (este, sur, oeste y norte) y tres dragones (rojo, verde y blanco), también con cuatro copias cada uno. Por último hay ocho fichas especiales: cuatro flores y cuatro estaciones, todas distintas entre sí.',
        'Dos fichas forman pareja si son idénticas: el 7 de bambúes solo va con otro 7 de bambúes, nunca con el 7 de círculos. Las excepciones son las flores, que combinan con cualquier otra flor, y las estaciones, que combinan con cualquier otra estación. Una flor nunca va con una estación.',
        'En la práctica, las cuatro flores se comportan igual que cuatro fichas idénticas, y lo mismo pasa con las estaciones. Por eso, todo lo que esta guía dice sobre "las cuatro fichas de una cara" vale también para ellas.',
      ],
    },
    {
      titulo: 'Qué ficha está libre',
      parrafos: [
        'Solo se pueden tomar fichas libres. Una ficha está libre cuando se cumplen dos condiciones a la vez:',
      ],
      lista: [
        'No tiene ninguna ficha encima. Basta con que otra ficha la tape en parte, aunque sea una esquina, para que quede bloqueada.',
        'Tiene despejado el lado izquierdo o el lado derecho. Con uno alcanza; si tiene fichas pegadas a los dos costados, está bloqueada.',
      ],
    },
    {
      titulo: 'Leer las filas y las capas',
      parrafos: [
        'La regla de los costados tiene una consecuencia simple: en una fila de cinco fichas de la misma capa, solo las dos de las puntas están libres. La del medio necesita que saquen todas las de un lado antes de poder moverse.',
        'Lo de arriba y lo de abajo no cuenta como costado. Una ficha que está en la capa superior, al lado de otra que está en la capa de abajo, no la bloquea por el costado. Y las fichas montadas a medias sobre otras bloquean a todas las que tocan: una ficha apoyada en el centro de un cuadrado de cuatro tapa a las cuatro.',
        'Una buena costumbre antes de cada jugada es preguntarse qué fichas quedan libres después de hacerla. Una pareja que libera tres fichas nuevas suele valer más que una que no libera nada.',
      ],
    },
    {
      titulo: 'Elegir qué pareja sacar',
      parrafos: [
        'El error más común es sacar cualquier pareja apenas aparece. Funciona en tableros fáciles, pero en los difíciles es la forma más rápida de trabarse. Estas son las prioridades que conviene seguir:',
      ],
      lista: [
        'Primero, las fichas de las capas altas. Cada una tapa a varias, y mientras sigan ahí, todo lo que está debajo queda congelado.',
        'Segundo, las puntas de las filas más largas. Una fila de doce fichas necesita muchas jugadas para desarmarse desde un solo lado; si puedes, trabájala desde los dos.',
        'Tercero, las parejas que no tienen alternativa: si de una cara solo quedan dos fichas en el tablero y las dos están libres, sácalas, porque no pueden ir con ninguna otra.',
        'Por último, las que no liberan nada. No son malas, pero pueden esperar, y tenerlas guardadas te da una salida cuando el resto se complica.',
      ],
    },
    {
      titulo: 'El truco de las cuatro iguales',
      parrafos: [
        'Cada cara aparece cuatro veces, y eso permite una cuenta muy útil. Si las cuatro fichas de una cara están libres, sácalas todas: es imposible que esa decisión te perjudique.',
        'El caso interesante es cuando hay tres libres y la cuarta está bloqueada. Tienes que elegir qué dos sacar, y la que dejes será la pareja de la cuarta cuando aparezca. Deja la que menos estorba: una ficha suelta en la capa de abajo, que no tapa a nada. Saca las que bloquean a otras.',
        'Un ejemplo: tienes tres dragones rojos libres. Uno está arriba de todo, en la cima del tablero; otro está en la punta de una fila larga; el tercero está solo en una esquina, sin vecinas. El cuarto está enterrado en el centro. Saca el de la cima y el de la punta, y deja el de la esquina esperando.',
        'Si solo hay dos libres, revisa dónde están las otras dos: tienen que poder salir juntas más adelante.',
      ],
    },
    {
      titulo: 'Fichas apiladas: el bloqueo que no tiene arreglo',
      parrafos: [
        'La trampa más clásica del mahjong solitario es tener dos fichas iguales una encima de la otra cuando ya son las últimas de su cara. La de arriba solo puede irse con su pareja, y su pareja está debajo de ella: ninguna de las dos va a salir nunca.',
        'Algo parecido pasa en una fila. Si de dos caras solo quedan cuatro fichas, todas en la misma fila y alternadas (dragón rojo, viento norte, dragón rojo, viento norte), solo están libres las dos puntas, que no son pareja. Las del medio nunca se liberan, porque cada una espera a que salga una ficha que solo puede irse con ella.',
        'Para evitarlo, cuando veas una pila de dos o tres fichas, revisa qué caras tiene. Si una ficha de abajo tiene la misma cara que una de arriba, no gastes las otras dos copias de esa cara en otra parte. Guárdalas: serán las compañeras que permitan desarmar la pila.',
      ],
    },
    {
      titulo: 'Deshacer, pistas y cuándo mezclar',
      parrafos: [
        'Cuando no quedan parejas libres, hay dos salidas: volver atrás o mezclar las fichas que quedan. Deshacer conviene cuando sabes dónde te equivocaste, por ejemplo si gastaste dos fichas que eran las únicas compañeras posibles de una pila. Mezclar conviene cuando no ves el error o cuando estás muy avanzado y no quieres rehacer muchas jugadas.',
        'Mezclar no es hacer trampa: es una ayuda común en el mahjong solitario. Lo que sí conviene es no mezclar apenas te trabas. Revisa antes si hay una pareja que se te pasó, sobre todo flores o estaciones de distinto dibujo, que son las que más se pasan por alto. En nuestro reto del día, además, cada mezcla cuesta 30 segundos; en el modo libre no tiene costo.',
      ],
    },
    {
      titulo: 'Errores comunes',
      parrafos: ['Casi todas las partidas trabadas vienen de alguno de estos descuidos.'],
      lista: [
        'Sacar parejas de la capa de abajo mientras las capas altas siguen intactas.',
        'Gastar las cuatro copias de una cara en lugares fáciles y dejar sin compañera a una ficha enterrada.',
        'Confundir números de palos distintos: el 4 de círculos y el 4 de bambúes no son pareja.',
        'Pensar que una ficha está libre porque se ve casi entera, cuando otra la tapa apenas por una esquina.',
        'Trabajar una fila larga solo desde una punta cuando podía desarmarse desde las dos.',
      ],
    },
    {
      titulo: 'Practica en nuestro mahjong',
      parrafos: [
        'En nuestra versión, cada reparto se arma al revés: el programa elige dos posiciones que estarían libres, les asigna una pareja y las quita, hasta vaciar la figura. Así siempre existe un orden que gana. Si te quedas sin parejas, el botón Mezclar reacomoda las fichas que quedan con el mismo método, de modo que la partida vuelve a tener solución; si la forma que queda ya no se puede vaciar de ninguna manera, te avisa para que deshagas.',
        'Cada ficha tiene una marca fácil de leer aunque sea chica: el número en la esquina en los tres palos, una letra grande (E, S, O o N) en los vientos y R, V o B en la esquina de los dragones. Las flores tienen fondo rosado y las estaciones, fondo celeste. Las fichas bloqueadas se ven más oscuras, y el botón Resaltar libres las oscurece todavía más.',
        'En el modo libre puedes jugar la Pirámide, de 72 fichas; la Mariposa, de 96; el Puente, de 128; y la Tortuga clásica, de 144 fichas en cinco capas. El reto del día cambia cada medianoche, es igual para todos y rota entre cuatro tableros de 9 fichas de ancho pensados para el celular. Ahí compites por el menor tiempo, y cada pista suma 15 segundos y cada mezcla 30. Elige un tablero y pon a prueba el truco de las cuatro iguales.',
      ],
    },
  ],
}
