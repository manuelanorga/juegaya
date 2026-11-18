import type { Guia } from './tipo'

export const guiaAhorcado: Guia = {
  slug: 'trucos-para-ganar-al-ahorcado',
  gameSlug: 'ahorcado',
  title: 'Trucos para ganar al ahorcado: qué letras usar y en qué orden',
  seoTitle: 'Trucos para ganar al ahorcado: qué letras usar',
  description:
    'Qué letras usar en el ahorcado y en qué orden, con datos reales de nuestras palabras: vocales, consonantes, terminaciones y cómo aprovechar el tema como pista.',
  publishedAt: '2026-11-18',
  intro: [
    'El ahorcado parece un juego de suerte, pero no lo es. Cada letra que pruebas te da información, y el orden en que las pruebas decide si llegas al final con globos de sobra o con el último colgando.',
    'Para escribir esta guía analizamos todas las palabras que usa nuestra versión del juego, unas 400 repartidas en 20 temas. Los porcentajes que vas a leer salen de esa lista, no de una tabla genérica, así que sirven directamente para jugar aquí.',
  ],
  secciones: [
    {
      titulo: 'Cómo funciona nuestra versión',
      parrafos: [
        'En nuestra versión no hay horca: un personaje flota bajo 6 globos y cada letra equivocada revienta uno. Con el sexto error baja hasta el suelo y se revela la palabra. Probar una letra que ya usaste no cuenta como error.',
        'Siempre ves dos pistas antes de empezar: el tema y la cantidad de letras. Las palabras tienen entre 4 y 11 letras, se escriben sin tildes y la Ñ es una letra aparte, con su propia tecla.',
        'Hay dos modos. El reto diario es la misma palabra para todos, cambia a la medianoche de tu hora local y tienes un solo intento. En el modo libre juegas sin límite y puedes elegir uno de los 20 temas o dejar que salga uno al azar.',
      ],
    },
    {
      titulo: 'Qué letras aparecen más en nuestras palabras',
      parrafos: [
        'Lo que importa en el ahorcado no es cuántas veces se repite una letra en un texto, sino en cuántas palabras aparece al menos una vez. Si la letra está, se descubre en todas sus posiciones de golpe, así que una A repetida tres veces vale lo mismo que una sola para evitar un error.',
        'Este es el porcentaje de palabras de nuestra lista que contienen cada letra:',
      ],
      lista: [
        'A: 72 %, casi 3 de cada 4 palabras.',
        'O: 55 %, algo más de la mitad.',
        'R: 43 %.',
        'E: 41 %.',
        'I: 37 %.',
        'N: 33 %.',
        'C: 32 %.',
        'L: 30 %.',
        'T: 28 %.',
        'U y M: 23 % cada una.',
        'S: 21 %.',
        'B, P, D y G: entre 12 % y 17 %.',
        'K, W, X, Ñ y Q: menos del 3 % cada una.',
      ],
    },
    {
      titulo: 'Por qué no conviene copiar la frecuencia general del español',
      parrafos: [
        'En los textos en español, las letras más comunes suelen ser E, A, O, S, R, N, I, D, L, C, T y U, más o menos en ese orden. Esa tabla sirve para libros y conversaciones, pero aquí falla en varios puntos.',
        'La S es el mejor ejemplo. En el idioma general está entre las más frecuentes porque aparece en plurales y conjugaciones, pero nuestras palabras son casi todas sustantivos en singular, como frutas, animales o países. Por eso la S solo está en 1 de cada 5 palabras y la D en apenas 1 de cada 8.',
        'Con la E pasa algo parecido: en el español general suele ir primera, y en nuestra lista queda cuarta, detrás de la A, la O y la R. Si vienes de otros juegos con la E como primera letra, aquí te conviene empezar por la A.',
      ],
    },
    {
      titulo: 'El orden de apertura que recomendamos',
      parrafos: [
        'Empieza con A, luego O, luego E. Con solo esas tres letras, el 99 % de nuestras palabras ya muestra al menos una letra. En promedio te cuestan algo más de un error y descubren más de un tercio de la palabra.',
        'Después de la E, detente y mira el tablero antes de seguir con vocales. Probar las cinco vocales seguidas cuesta en promedio casi 3 errores, es decir, la mitad de tus globos. La U es la más cara: no está en 3 de cada 4 palabras.',
        'Para las consonantes, el orden con mejores números en nuestra lista es R, N, C, L y T. Úsalo como base cuando el tablero todavía no te sugiere nada concreto.',
      ],
      lista: [
        'Paso 1: A, O, E.',
        'Paso 2: mira huecos, tema y largo, y piensa en dos o tres palabras posibles.',
        'Paso 3: si no tienes candidatas, sigue con R, N, C, L y T.',
        'Paso 4: guarda I y U para cuando el patrón de huecos las pida.',
        'Paso 5: deja las letras raras para el final, solo si ya sospechas una palabra.',
      ],
    },
    {
      titulo: 'El tema y el largo son tu mejor pista',
      parrafos: [
        'Hicimos una prueba: si juegas todas las palabras de la lista siguiendo un orden fijo de letras, sin pensar en el tema, ganarías apenas 1 de cada 10 partidas. Las letras frecuentes te acercan, pero lo que gana la partida es combinar esas letras con el tema.',
        'Un ejemplo con el tema Frutas y 5 letras. Pruebas A, O y E, y el tablero queda así: _ A _ _ O. Ya no necesitas seguir el orden general: piensas en frutas de cinco letras que terminen en O y tengan la A en segundo lugar, y una sola letra bien elegida suele confirmarla.',
        'El largo también cambia qué letras convienen. En las palabras de 4 letras, después de A y O aparecen la C, la R y la U, todas por encima del 20 %. En las de 8 letras o más, la E, la R y la I están en más de la mitad de las palabras, así que vale la pena probarlas antes.',
      ],
    },
    {
      titulo: 'Fíjate en cómo terminan las palabras',
      parrafos: [
        'El 70 % de nuestras palabras termina en A o en O, y casi 8 de cada 10 terminan en vocal. Si después de tus primeras letras el último hueco sigue vacío, es muy probable que lo llene una vocal.',
        'Las terminaciones de dos letras más comunes en la lista son TA, NO, ON, RO, RA e IA. Si ves una A al final con un hueco justo antes, la T, la R y la N son buenas apuestas. Si la palabra termina en un hueco después de una O, la N es la candidata más probable.',
      ],
    },
    {
      titulo: 'Letras dobles, dígrafos y letras raras',
      parrafos: [
        'Más de la mitad de nuestras palabras repite alguna letra, y eso juega a tu favor: cada acierto puede descubrir dos o tres casillas a la vez. Una palabra larga con muchos huecos no siempre es más difícil que una corta.',
        'Si aparece una L, piensa en la LL: está en unas 20 palabras de la lista. La RR aparece en unas 10 y la CH en unas 20. La Q siempre viene seguida de U, así que si confirmas la Q, la U es un acierto seguro.',
        'La Ñ aparece en muy pocas palabras y la K, la W y la X son todavía más raras. Probarlas a ciegas casi siempre cuesta un globo. Úsalas solo cuando el tema y el patrón ya te hagan pensar en una palabra concreta, como una que termine en ÑA.',
      ],
    },
    {
      titulo: 'Cómo administrar tus 6 globos',
      parrafos: [
        'Piensa en tus globos como un presupuesto. Los dos primeros errores son normales al abrir la partida. Desde el tercero, cada letra que pruebes debería tener una razón: completar una terminación, confirmar una palabra candidata o descartar entre dos opciones.',
        'Cuando dudas entre dos palabras, elige la letra que las separa y que además aparece en otras candidatas. Si las dos opciones comparten casi todas las letras, una sola prueba te dice cuál es.',
        'En el modo libre, antes de tocar la primera letra puedes cambiar la palabra. Una vez que empiezas, el botón pasa a ser Rendirse, y rendirte cuenta como derrota y reinicia tu racha del modo libre. En el reto diario no hay opción de rendirse ni de cambiar la palabra, y si recargas la página la partida sigue donde la dejaste.',
      ],
    },
    {
      titulo: 'Pon a prueba estos trucos',
      parrafos: [
        'La mejor forma de aprender estos patrones es jugar unas cuantas partidas en el modo libre, eligiendo un tema distinto cada vez, y fijarte en qué letras te funcionan. Cuando te sientas listo, prueba el reto del día e intenta resolverlo con la menor cantidad de errores. Si terminas sin perder un solo globo, el juego te lo celebra.',
      ],
    },
  ],
}
