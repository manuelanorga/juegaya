import type { Guia } from './tipo'

export const guiaBuscaminas: Guia = {
  slug: 'como-jugar-buscaminas-y-ganar',
  gameSlug: 'buscaminas',
  title: 'Cómo jugar buscaminas y ganar: reglas, patrones y trucos',
  seoTitle: 'Cómo jugar buscaminas: patrones y trucos para ganar',
  description:
    'Aprende a jugar buscaminas: qué indican los números, los patrones 1-1, 1-2, 1-2-1 y 1-2-2-1, cómo abrir vecinas rápido y cómo adivinar cuando no hay otra.',
  publishedAt: '2026-11-18',
  intro: [
    'El buscaminas parece un juego de suerte la primera vez, pero casi todo se resuelve con lógica. Cada número es una pista exacta, y la mayoría de las casillas se pueden deducir combinando dos o tres de esas pistas.',
    'Esta guía va de lo más simple a lo más fino. Para los ejemplos, imagina una fila de casillas tapadas que llamamos A, B, C, D, de izquierda a derecha, y justo debajo una fila de números ya abiertos.',
  ],
  secciones: [
    {
      titulo: 'Las reglas en un minuto',
      parrafos: [
        'El campo es una cuadrícula con minas escondidas. Al abrir una casilla libre aparece un número del 1 al 8, que cuenta cuántas minas hay entre sus ocho vecinas: las de arriba, abajo, los costados y las cuatro diagonales. Si no hay ninguna, la casilla queda vacía y el juego abre solo sus vecinas.',
        'Ganas cuando abres todas las casillas que no tienen mina. Las banderas son una ayuda para ti: sirven para no abrir una mina por descuido y para abrir vecinas desde un número, pero no hace falta marcar todas las minas para ganar.',
      ],
    },
    {
      titulo: 'Las dos reglas básicas de cada número',
      parrafos: [
        'Primera regla: si un número tiene tantas vecinas tapadas como su valor, todas son minas. Un 3 en una esquina interior con exactamente tres casillas tapadas alrededor tiene una mina en cada una. Márcalas.',
        'Segunda regla: si un número ya tiene alrededor tantas banderas como su valor, el resto de sus vecinas tapadas son libres. Un 1 que ya tiene su bandera deja libres a todas las demás.',
        'Aplícalas en cadena: cada bandera nueva puede completar otro número y liberar casillas que antes no se podían tocar.',
      ],
    },
    {
      titulo: 'Comparar dos números: los patrones 1-1 y 1-2',
      parrafos: [
        'Cuando ningún número se resuelve solo, toca mirarlos de a pares. La idea es que si las casillas de un número están todas incluidas entre las de otro, la diferencia te dice algo.',
        'Patrón 1-1 contra una pared. Supón que la fila tapada A, B, C empieza en el borde del tablero y debajo de A y B hay dos números 1. El 1 de abajo de A solo ve A y B, así que hay una mina entre esas dos. El 1 de abajo de B ve A, B y C. Como la mina de A o B ya completa su 1, C es libre. En general, si las casillas de un 1 están todas dentro de las de otro 1, las que solo ve el segundo son libres.',
        'Patrón 1-2. Ahora tienes un 1 debajo de B y un 2 debajo de C, en una fila donde el 1 ve A, B, C y el 2 ve B, C, D. Las casillas B y C las comparten. El 2 necesita una mina más que el 1, y la única casilla que tiene de más es D. Entonces D es mina, y A, la casilla que solo ve el 1, es libre. En general: si un número supera a su vecino en tantas minas como casillas exclusivas tiene, todas esas casillas son minas y las exclusivas del otro son libres.',
      ],
    },
    {
      titulo: 'Los patrones 1-2-1 y 1-2-2-1',
      parrafos: [
        'Aparecen en bordes rectos y salen del mismo razonamiento.',
        '1-2-1: tres números seguidos, 1, 2 y 1, debajo de las casillas A, B y C, con nada más tapado a los costados. El primer 1 ve A y B; el 2 ve A, B y C; el último 1 ve B y C. Comparando el 2 con el primer 1, C es mina. Comparándolo con el último 1, A es mina. Con eso los dos 1 ya están completos y B, la del centro, es libre. Regla corta: en un 1-2-1, minas sobre los unos y libre sobre el dos.',
        '1-2-2-1: cuatro números, 1, 2, 2 y 1, debajo de A, B, C y D. El primer 1 ve A y B, y el primer 2 ve A, B y C: entonces C es mina. Del otro lado, el último 1 ve C y D, y el segundo 2 ve B, C y D: entonces B es mina. Los unos de las puntas quedan completos, así que A y D son libres. Regla corta: en un 1-2-2-1, minas sobre los dos y libres sobre los unos.',
        'Si el borde no es recto o hay casillas tapadas a los costados, no apliques el patrón de memoria. Vuelve a comparar los números de a dos, que es lo que siempre funciona.',
      ],
    },
    {
      titulo: 'Abrir vecinas desde un número',
      parrafos: [
        'Abrir casilla por casilla es lento. Cuando un número ya tiene todas sus banderas, puedes tocarlo para abrir de una vez todas sus otras vecinas tapadas. En el reto diario, donde cuenta el reloj, es lo que más tiempo ahorra.',
        'El riesgo es claro: el juego confía en tus banderas. Si una está mal puesta, al abrir las vecinas se abre una mina. Por eso conviene poner banderas solo cuando la deducción es segura, nunca para recordar una sospecha. Si tocas un número al que le faltan banderas, no pasa nada: en nuestra versión aparece un aviso con las banderas que necesita.',
      ],
    },
    {
      titulo: 'El contador de minas y el final',
      parrafos: [
        'Arriba se muestra cuántas minas faltan por marcar: el total menos tus banderas. Al final suele ser la última pista. Si quedan dos casillas tapadas sin números cerca y el contador dice 0, las dos son libres. Si dice 2, las dos son minas.',
        'También sirve combinado con un número. Si el contador dice 1 y un 1 del borde ya tiene su mina entre dos casillas, cualquier otra casilla tapada del tablero es libre. Esto solo vale si tus banderas son correctas.',
      ],
    },
    {
      titulo: 'Cuándo hay que adivinar y cómo hacerlo bien',
      parrafos: [
        'En un buscaminas generado al azar, a veces no hay ninguna deducción posible. El caso típico son dos casillas tapadas encerradas, con números que dicen que hay exactamente una mina entre ellas y nada más que las distinga. Ahí no existe lógica que ayude: es mitad y mitad. Antes de aceptarlo, revisa los pares de números del borde: muchos empates aparentes se rompen con un 1-2 que se pasó por alto.',
        'Si de verdad hay que adivinar, hazlo cuanto antes. Perder en el primer minuto cuesta menos que perder en el último.',
        'Compara el riesgo de cada opción. Una casilla suelta, lejos de los números, tiene un riesgo parecido a la densidad de minas que quedan: el contador dividido por las casillas tapadas. En el nivel difícil, al comienzo, son 99 minas en 480 casillas, un poco más de una de cada cinco. Junto a un 1 que reparte su mina entre seis vecinas tapadas, y sin otros números que las condicionen, el riesgo ronda una de cada seis. Junto a un 1 con solo dos tapadas es mitad y mitad, la peor opción.',
        'A igual riesgo, elige la casilla que más información puede darte: una que, si sale bien, muestre un número que resuelva a sus vecinas.',
      ],
    },
    {
      titulo: 'Errores comunes',
      parrafos: ['Casi todas las derrotas evitables vienen de los mismos descuidos.'],
      lista: [
        'Contar mal las vecinas: las diagonales también cuentan, y en los bordes del tablero un número tiene menos vecinas de las que parece.',
        'Poner banderas por sospecha y después abrir vecinas desde un número que depende de ellas.',
        'Aplicar un patrón de memoria cuando hay otra casilla tapada al costado que lo cambia.',
        'Adivinar con apuro cuando todavía queda una deducción en otra parte del tablero.',
        'Olvidar el contador de minas en el final.',
      ],
    },
    {
      titulo: 'Practica en nuestro buscaminas',
      parrafos: [
        'En el modo libre tienes tres niveles: fácil de 9×9 con 10 minas, medio de 16×16 con 40 y difícil de 16×30 con 99. La primera casilla que abres nunca tiene mina y siempre abre una zona. Si la pantalla es más alta que ancha, el difícil se muestra en vertical, con 30 filas y 16 columnas, para que las casillas sean más grandes.',
        'El reto del día es un campo de 10 columnas por 14 filas con 22 minas, igual para todos y pensado para caber entero en el celular, que empieza con una zona abierta. Cada uno se comprueba al generarse con un programa que solo usa las reglas de esta guía: las dos reglas de cada número, la comparación de pares y el contador de minas. Si el programa no puede terminarlo sin adivinar, se descarta y se prueba otro. Tienes un solo intento por día, así que piensa cada jugada y pon a prueba estos patrones.',
      ],
    },
  ],
}
