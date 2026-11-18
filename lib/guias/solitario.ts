import type { Guia } from './tipo'

export const guiaSolitario: Guia = {
  slug: 'reglas-y-estrategia-del-solitario',
  gameSlug: 'solitario',
  title: 'Reglas del solitario Klondike y estrategia para ganar más partidas',
  seoTitle: 'Reglas del solitario Klondike y cómo ganar',
  description:
    'Reglas completas del solitario Klondike y una estrategia en orden de prioridad para ganar más: qué jugar primero, errores comunes y cuándo no hay solución.',
  publishedAt: '2026-11-18',
  intro: [
    'El solitario Klondike parece un juego de suerte, pero las decisiones pesan mucho. Dos personas con el mismo reparto pueden terminar una ganando y la otra atascada, solo por el orden en que movieron las cartas.',
    'Primero repasamos las reglas completas, incluidas las variantes más comunes. Después viene una estrategia ordenada por prioridad, los errores que más partidas cuestan y cómo saber si un reparto ya no tiene salida.',
  ],
  secciones: [
    {
      titulo: 'Cómo se reparten las cartas',
      parrafos: [
        'Se usa una baraja francesa de 52 cartas, sin comodines. Se reparten siete columnas de izquierda a derecha: la primera con 1 carta, la segunda con 2 y así hasta la séptima, con 7. En cada columna solo la carta de arriba queda boca arriba; las demás quedan ocultas.',
        'En total hay 28 cartas en las columnas, 21 de ellas boca abajo. Las 24 restantes forman el mazo. Arriba hay cuatro espacios vacíos para las pilas de base, una por palo.',
      ],
    },
    {
      titulo: 'Las reglas de movimiento',
      parrafos: [
        'El objetivo es subir las 52 cartas a las cuatro pilas de base, cada una de un solo palo y en orden ascendente, desde el A hasta la K.',
      ],
      lista: [
        'En las columnas se construye en orden descendente y alternando colores: sobre una Q negra va una J roja, sobre esa J un 10 negro, y así.',
        'Puedes mover una sola carta o un grupo ya ordenado, siempre que la primera carta del grupo encaje en el destino.',
        'Cuando una columna se queda sin cartas visibles, la carta oculta de arriba se da vuelta y entra en juego.',
        'Una columna vacía solo acepta una K, sola o con el grupo ordenado que tenga encima.',
        'Del mazo se sacan cartas al descarte. Solo la carta de arriba del descarte se puede jugar.',
        'Cuando el mazo se acaba, el descarte se da vuelta y vuelve a ser el mazo, en el mismo orden.',
      ],
    },
    {
      titulo: 'Variantes: de a una o de a tres',
      parrafos: [
        'Hay dos formas clásicas de sacar del mazo. Con robo de 1 sacas una carta cada vez y puedes ver todas en cada vuelta. Con robo de 3 sacas tres juntas y solo puedes jugar la de arriba, así que muchas cartas quedan fuera de alcance hasta que cambia el orden. Algunas versiones, además, limitan el número de vueltas al mazo.',
        'En nuestra versión se saca una carta cada vez y las vueltas son ilimitadas. Eso cambia la estrategia: ninguna carta del mazo se pierde nunca, y sacar del mazo no te quita opciones, solo te da información.',
        'También en nuestra versión puedes bajar la carta de arriba de una pila de base a una columna, cuando encaja. Sirve, por ejemplo, para bajar un 6 de corazones y apoyar sobre él un 5 negro que tienes bloqueado.',
      ],
    },
    {
      titulo: 'Estrategia en orden de prioridad',
      parrafos: [
        'Cuando tengas varias jugadas posibles, revísalas en este orden. No es una regla rígida, pero evita la mayoría de los atascos.',
      ],
      lista: [
        'Sube los A y los 2 en cuanto aparezcan. Sobre un A no se apoya nada y sobre un 2 solo cabría un A, que también conviene subir, así que nunca los vas a necesitar abajo.',
        'Juega lo que destape una carta oculta. Cada carta nueva puede abrir varias jugadas.',
        'Entre dos jugadas que destapan, elige la de la columna con más cartas boca abajo: es donde más cartas tienes atrapadas.',
        'Sube una carta más alta solo cuando sea segura: un 5 rojo, por ejemplo, ya no hace falta abajo cuando los dos 4 negros están en las pilas, porque su única función en las columnas es recibirlos.',
        'Vacía una columna solo si tienes una K lista para ocuparla, y elige su color según lo que esperas colocar: si tienes libre una Q roja, te conviene una K negra.',
        'Recorre el mazo cuando ya no queden jugadas útiles en las columnas, y fíjate qué cartas trae para planear los próximos pasos.',
      ],
    },
    {
      titulo: 'Errores comunes',
      parrafos: [
        'Casi todas las partidas perdidas por error tienen el mismo origen: mover cartas porque se puede, no porque sirva. Antes de cada jugada, pregúntate qué carta te deja libre.',
      ],
      lista: [
        'Pasar un grupo de una columna a otra sin destapar nada. Solo cambia el problema de lugar.',
        'Subir a las pilas un 7 o un 8 que todavía hace falta para colocar un 6 o un 7 de color contrario.',
        'Llenar un hueco con la primera K que aparece, cuando otra K con cartas ocultas debajo lo necesitaba más.',
        'Sacar del descarte una carta que no abre nada y que tapa una columna donde ibas a jugar otra.',
        'Dejar para el final la columna más larga. Sus cartas ocultas suelen ser las que bloquean al resto.',
      ],
    },
    {
      titulo: 'Cómo aprovechar nuestra versión',
      parrafos: [
        'En nuestra versión, al tocar una carta se mueve sola: primero a las pilas de base, si puede; si no, a una columna con cartas, y por último a una columna vacía. Si quieres dejar una carta en las columnas en lugar de subirla, arrástrala en vez de tocarla.',
        'Deshacer no tiene límite y retrocede también las cartas sacadas del mazo, así que puedes probar un camino y volver. En el reto del día, Reiniciar vuelve al reparto inicial, pero el reloj y las jugadas siguen contando. Cuando todas las cartas de las columnas están boca arriba aparece Autocompletar, porque a partir de ahí la partida ya está ganada.',
      ],
    },
    {
      titulo: 'Cuándo un reparto no tiene solución',
      parrafos: [
        'No todos los repartos se pueden ganar. Los estudios hechos con programas que conocen la posición de todas las cartas estiman que, con robo de 1 y vueltas ilimitadas, alrededor de 8 de cada 10 repartos tienen solución. Jugando sin ver las cartas ocultas, una persona gana menos, porque a veces tiene que elegir sin saber qué hay debajo.',
        'Un ejemplo de reparto imposible: en una columna, de abajo hacia arriba, están ocultos el 3 de picas, el 3 de tréboles y el A de corazones, y encima, visible, el 2 de corazones. El 2 no puede subir porque su A está debajo, no puede ir sobre un 3 negro porque los dos están debajo, y no puede ir a un hueco porque no es una K. Esa columna no se abre nunca.',
        'Con robo de 1 hay una señal clara de que estás bloqueado: si recorres el mazo completo sin poder hacer ni una jugada, la partida ya no va a cambiar. En nuestra versión, el reparto del reto del día se comprueba antes con un solucionador, así que si te trabas ahí, la salida existe: vuelve atrás con Deshacer y prueba otro orden.',
      ],
    },
    {
      titulo: 'Pon a prueba la estrategia',
      parrafos: [
        'La mejor forma de aprender es jugar el mismo reparto dos veces: una por instinto y otra siguiendo el orden de prioridades. En el reto del día todos reciben las mismas cartas, así que también puedes comparar tu tiempo. Reparte y empieza por la columna con más cartas ocultas.',
      ],
    },
  ],
}
