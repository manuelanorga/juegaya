import type { Guia } from './tipo'

export const guiaSudoku: Guia = {
  slug: 'como-resolver-un-sudoku',
  gameSlug: 'sudoku',
  title: 'Cómo resolver un sudoku: técnicas de la más fácil a la más difícil',
  seoTitle: 'Cómo resolver un sudoku: técnicas paso a paso',
  description:
    'Aprende a resolver sudokus paso a paso: barrido, casillas únicas, notas, parejas, candidatos bloqueados, X-Wing, Swordfish y Y-Wing, con ejemplos concretos.',
  publishedAt: '2026-11-18',
  intro: [
    'Un sudoku bien construido nunca obliga a adivinar. Cada número se puede deducir a partir de los que ya están, y lo único que cambia de un nivel a otro es qué tan escondida está esa deducción.',
    'Esta guía recorre las técnicas en el orden en que conviene aprenderlas. Para los ejemplos, las filas se numeran del 1 al 9 de arriba hacia abajo, las columnas del 1 al 9 de izquierda a derecha y las cajas de 3×3 del 1 al 9, como se lee un libro: la caja 1 arriba a la izquierda, la caja 5 en el centro y la caja 9 abajo a la derecha.',
  ],
  secciones: [
    {
      titulo: 'Primer paso: el barrido',
      parrafos: [
        'El barrido consiste en tomar un número y seguirlo por todo el tablero para ver dónde ya no puede ir.',
        'Un ejemplo: el 5 aparece en la fila 1, columna 7 (caja 3) y en la fila 2, columna 5 (caja 2). Entonces, dentro de la caja 1, el 5 no puede estar en las filas 1 ni 2, así que tiene que ir en la fila 3. Si además hay un 5 en la columna 1, más abajo, y la casilla de la fila 3, columna 3 ya tiene un número, solo queda la fila 3, columna 2. Eso es un simple oculto: el número tiene un único lugar posible dentro de una caja, fila o columna.',
        'Empieza por los números que ya aparecen seis o siete veces: sus casillas pendientes suelen caer solas.',
      ],
    },
    {
      titulo: 'La casilla con una sola opción',
      parrafos: [
        'La otra cara del barrido es mirar una casilla y preguntarse qué números le quedan. Si la fila de esa casilla ya tiene 1, 2, 4 y 7, su columna tiene 3, 6 y 8 y su caja tiene el 5, la única opción es el 9. Esto se llama simple desnudo.',
        'Usa el barrido cuando el tablero está muy vacío y revisa casilla por casilla en las líneas a las que les faltan dos o tres números. Con estas dos técnicas se termina cualquier sudoku fácil.',
      ],
    },
    {
      titulo: 'Cómo usar bien las notas',
      parrafos: [
        'Cuando los simples se acaban, toca anotar candidatos: los números pequeños que todavía son posibles en cada casilla. No anotes desde el primer minuto: el barrido descarta muchas opciones en segundos.',
        'Anota caja por caja y revisa cada candidato contra su fila, columna y caja. Una nota equivocada es peor que ninguna, porque te hará descartar el número correcto.',
        'En nuestra versión, las notas se activan con el botón Notas y solo se pueden poner en casillas vacías. Al colocar un número, su nota se borra sola en toda la fila, la columna y la caja, y Deshacer las recupera. El teclado muestra cuántos quedan de cada número, lo que ayuda a elegir cuál barrer.',
      ],
    },
    {
      titulo: 'Parejas desnudas y ocultas',
      parrafos: [
        'Una pareja desnuda aparece cuando dos casillas de la misma fila, columna o caja solo tienen los mismos dos candidatos. Por ejemplo, si en la fila 4 las casillas de las columnas 2 y 6 solo admiten el 3 y el 8, esos dos números quedan reservados para ellas. Puedes borrar el 3 y el 8 de las notas de todas las demás casillas de la fila 4.',
        'La pareja oculta es lo mismo visto desde los números. Si en la caja 9 el 1 y el 6 solo pueden ir en la casilla de la fila 7, columna 7 y en la de la fila 8, columna 9, esas dos casillas son el 1 y el 6 en algún orden. Cualquier otro candidato que tengan se puede borrar.',
      ],
    },
    {
      titulo: 'Candidatos bloqueados',
      parrafos: [
        'Esta técnica cruza una caja con una línea, y tiene dos formas.',
        'Forma apuntadora: en la caja 4 (filas 4 a 6, columnas 1 a 3), el 7 solo puede ir en la fila 5, columna 1 o en la fila 5, columna 3. Sea cual sea, el 7 de la caja 4 está en la fila 5, así que ninguna otra casilla de la fila 5, en las cajas 5 y 6, puede ser 7.',
        'Forma reclamante: en la columna 8, el 2 solo cabe en la fila 1 o en la fila 3. Las dos casillas están en la caja 3, así que el 2 de esa caja ya está decidido entre ellas. Borra el 2 de las demás casillas de la caja 3, en las columnas 7 y 9.',
      ],
    },
    {
      titulo: 'Tríos: tres casillas, tres números',
      parrafos: [
        'Un trío desnudo funciona como la pareja, pero con tres casillas que entre todas solo usan tres números. No hace falta que cada casilla tenga los tres.',
        'Por ejemplo, en la fila 6 la columna 1 admite 2 y 5, la columna 4 admite 5 y 9, y la columna 8 admite 2, 5 y 9. Esas tres casillas se van a quedar con el 2, el 5 y el 9, así que esos números se borran del resto de la fila 6. El trío oculto es la versión inversa: tres números que en una fila, columna o caja solo aparecen en las mismas tres casillas.',
      ],
    },
    {
      titulo: 'X-Wing, Swordfish y Y-Wing',
      parrafos: [
        'X-Wing: el 4 en la fila 2 solo puede ir en las columnas 3 y 7, y en la fila 8 también solo en las columnas 3 y 7. Hay dos posibilidades: el 4 está en fila 2, columna 3 y fila 8, columna 7, o en fila 2, columna 7 y fila 8, columna 3. En las dos, las columnas 3 y 7 reciben su 4 en las filas 2 u 8, así que puedes borrar el 4 del resto de esas dos columnas.',
        'Swordfish es el mismo razonamiento con tres líneas. Si el 6 en la fila 1 solo cabe en las columnas 2 y 5, en la fila 4 solo en las columnas 5 y 9, y en la fila 7 solo en las columnas 2 y 9, esas tres filas ponen sus tres 6 en las columnas 2, 5 y 9. Ninguna otra casilla de esas columnas, fuera de las filas 1, 4 y 7, puede tener un 6.',
        'Y-Wing usa tres casillas con dos candidatos cada una. El pivote, en la fila 5, columna 5, admite 3 y 7. Un ala, en la misma fila y en la columna 8, admite 3 y 9. La otra ala, en la misma caja y en la fila 4, columna 4, admite 7 y 9. Si el pivote es 3, la primera ala es 9; si es 7, la segunda es 9. Una de las dos alas es 9 seguro, así que cualquier casilla que vea a ambas no puede serlo: en este caso, las de la fila 4 en las columnas 7, 8 y 9, y las de la fila 5 en las columnas 4 y 6.',
      ],
    },
    {
      titulo: 'Qué técnicas pide cada nivel en nuestra versión',
      parrafos: [
        'En nuestra versión, cada tablero se resuelve con un programa que siempre aplica la técnica más simple disponible, y el nivel depende de la más difícil que tuvo que usar. Por eso vale la pena volver a buscar simples después de cada eliminación avanzada: casi siempre destraban varias casillas.',
        'Las pistas iniciales también cambian, aunque no son lo que define el nivel. Para tener una referencia, un sudoku de 9×9 necesita al menos 17 pistas para tener solución única, y los nuestros nunca bajan de 24.',
      ],
      lista: [
        'Fácil: entre 36 y 42 pistas, y se termina solo con barrido y casillas de una sola opción.',
        'Medio: entre 28 y 34 pistas, y necesita además candidatos bloqueados o parejas, desnudas u ocultas. El sudoku del día es siempre de este nivel.',
        'Difícil: entre 24 y 30 pistas, y pide además tríos, X-Wing, Swordfish o Y-Wing.',
      ],
    },
    {
      titulo: 'Practica con nuestro sudoku',
      parrafos: [
        'Si estás empezando, juega varios tableros fáciles hasta que el barrido te salga sin pensar, y después pasa al medio con las notas activadas. En nuestra versión, cada error o pista suma 10 segundos a tu tiempo, y la pista coloca el número correcto en la casilla que tengas elegida, si todavía le falta. Úsala solo cuando de verdad no encuentres ninguna deducción.',
        'En el difícil, busca primero parejas y candidatos bloqueados, y solo después los patrones de tres casillas. Elige tu nivel y prueba estas técnicas en un tablero real.',
      ],
    },
  ],
}
