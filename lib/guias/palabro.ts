import type { Guia } from './tipo'

export const guiaPalabro: Guia = {
  slug: 'como-jugar-palabro-y-adivinar-la-palabra',
  gameSlug: 'palabro',
  title: 'Cómo jugar Palabro y adivinar la palabra del día',
  seoTitle: 'Palabro: mejores palabras para empezar y trucos',
  description:
    'Las mejores palabras para empezar en Palabro, una buena segunda jugada y qué letras van en cada posición, con datos calculados sobre nuestra lista de palabras.',
  publishedAt: '2026-11-18',
  intro: [
    'Adivinar una palabra de 5 letras en 6 intentos tiene mucho de deducción y muy poco de suerte. La diferencia entre resolverla en tres intentos o quedarte sin ellos suele estar en las dos primeras palabras que escribes.',
    'Para esta guía analizamos la lista de respuestas posibles de nuestro juego, alrededor de mil palabras, y las más de diez mil palabras que el juego acepta al escribir. Los números que vas a leer salen de ahí, así que sirven para jugar aquí y no en otro lado.',
  ],
  secciones: [
    {
      titulo: 'Las reglas de nuestra versión',
      parrafos: [
        'En nuestra versión tienes 6 intentos para adivinar una palabra de 5 letras. Tras cada intento, cada letra se pinta de verde si está en la palabra y en ese lugar, de amarillo si está pero en otro lugar, y de gris si no está. Si prefieres más contraste, el modo daltónico cambia el verde y el amarillo por azul y naranja.',
        'Las palabras van sin tildes y la Ñ tiene su propia tecla. Si escribes algo que no está en la lista de palabras aceptadas, el juego te avisa que no es válida y no pierdes el intento.',
        'La palabra diaria es la misma para todos y cambia a la medianoche de tu hora local. Puedes jugarla una vez. Además hay un modo libre con palabras al azar, sin límite, que no suma a tus estadísticas ni a tu racha.',
      ],
    },
    {
      titulo: 'Qué letras aparecen más',
      parrafos: [
        'Lo primero es saber qué letras tienen más chances de pintarse. Este es el porcentaje de respuestas posibles que contienen cada letra al menos una vez:',
      ],
      lista: [
        'A: 66 %, dos de cada tres palabras.',
        'O: 49 %, prácticamente la mitad.',
        'E y R: 36 % cada una.',
        'S: 32 %.',
        'I: 28 %.',
        'L: 25 %.',
        'N y T: 22 % cada una.',
        'C: 21 %.',
        'U: 18 %.',
        'Ñ, Q, X, K y W: casi nunca, menos del 1 % cada una.',
      ],
    },
    {
      titulo: 'Las mejores palabras para empezar',
      parrafos: [
        'Una buena primera palabra no es la que tiene más vocales, sino la que mejor separa las respuestas posibles. Calculamos, para miles de palabras válidas, cuántas respuestas quedan en promedio después de usarlas como primer intento.',
        'Las que mejor salieron combinan las cinco letras más frecuentes de la lista: A, O, E, R y una consonante común. CAREO, por ejemplo, deja en promedio unas 27 candidatas de alrededor de mil, es decir, en un solo intento descartas más del 97 % de las opciones. Menos de 1 de cada 200 respuestas no comparte ninguna letra con ella.',
        'Para comparar, una palabra con letras poco frecuentes como HUMOS deja cerca de 100 candidatas, casi cuatro veces más. Otras aperturas con números casi iguales a CAREO son estas:',
      ],
      lista: [
        'CAREO: A, O, E, R y C.',
        'SERIA: se escribe sin tilde, con S, E, R, I y A.',
        'NORIA: N, O, R, I y A.',
        'MAREO: cambia la C por la M, casi igual de buena.',
      ],
    },
    {
      titulo: 'Una segunda palabra que complemente a la primera',
      parrafos: [
        'Si tu primera palabra dejó pocas pistas, la segunda debería probar cinco letras nuevas. La pareja que mejor resultado dio en nuestros cálculos es CAREO seguida de SUTIL.',
        'Con esas dos palabras pruebas diez letras distintas: A, O, E, R, C, S, U, T, I y L, casi todas las más frecuentes de la lista. En promedio quedan solo unas 3 respuestas posibles, y en 4 de cada 10 partidas ya queda una sola. Además, en promedio, casi 4 de las 5 letras de la respuesta están entre esas diez.',
        'Si prefieres otra apertura, también funcionan bien SERIA seguida de CUPON, y NORIA seguida de CULPE, ambas sin tilde. En las tres parejas quedan alrededor de 3 candidatas.',
        'La regla general: usa la segunda palabra para explorar, no para adivinar. Si la primera te dio un verde, no hace falta repetirlo en la segunda; es mejor gastar esa casilla en una letra nueva.',
      ],
    },
    {
      titulo: 'Qué letras suelen ir en cada posición',
      parrafos: [
        'Saber que una letra está en la palabra ayuda, pero saber dónde suele ir ayuda todavía más. Esto es lo que encontramos posición por posición:',
      ],
      lista: [
        'Primera letra: C es la más común, en el 13 % de las respuestas, seguida de P, A y M.',
        'Segunda letra: casi siempre una vocal. La A sola ocupa ese lugar en 1 de cada 4 palabras, seguida de O, E y U.',
        'Tercera letra: es la posición más repartida, con R, N y L como las más frecuentes.',
        'Cuarta letra: vuelve a dominar la A, seguida de O, T y E.',
        'Quinta letra: A en el 28 %, O en el 25 % y S en el 18 %. Más de la mitad de las respuestas termina en A o en O.',
      ],
    },
    {
      titulo: 'Vocales y letras repetidas',
      parrafos: [
        'Casi todas las respuestas tienen dos o tres vocales: unas 7 de cada 10 tienen exactamente dos, y casi todas las demás tienen tres. Si después de dos intentos solo encontraste una vocal, lo más probable es que falte otra.',
        'Las letras repetidas son más comunes de lo que parece: cerca del 40 % de las respuestas repite alguna letra. La más repetida es la A, que aparece dos veces en casi 1 de cada 5 palabras. Le siguen la O, la R y la E.',
        'En nuestra versión, si escribes una letra dos veces y la respuesta la tiene una sola vez, solo una de las dos se pinta y la otra queda gris. Si ambas se pintan, la letra está repetida. Por eso, cuando te quedan pocas candidatas y ninguna letra nueva encaja, prueba repetir una A o una O.',
      ],
    },
    {
      titulo: 'Cómo pensar los intentos tres a seis',
      parrafos: [
        'A partir del tercer intento ya tienes bastante información y conviene ir más despacio. Antes de escribir, arma mentalmente el patrón: qué letras están fijas, cuáles están pero no en ese lugar y cuáles descartaste. El teclado del juego te ayuda, porque cada tecla queda marcada con el mejor color que obtuvo.',
        'Si una letra amarilla puede ir en varios lugares, ubícala primero en la posición donde más se repite según la sección anterior. Una R amarilla, por ejemplo, tiene buenas chances en el tercer lugar.',
        'Cuando quedan varias candidatas que difieren en una sola letra, como ocurre con palabras que comparten cuatro letras, no las pruebes una por una. Busca una palabra válida que incluya varias de esas letras distintas a la vez; un intento así puede ahorrarte dos.',
      ],
    },
    {
      titulo: 'Detalles que conviene recordar',
      parrafos: [
        'La lista de respuestas incluye plurales y formas verbales, no solo sustantivos en singular. Por eso la S es tan frecuente al final: las terminaciones de dos letras más comunes en la lista son AS, AR y OS.',
        'Si quieres un desafío extra, en la configuración puedes activar el modo difícil. En ese modo, cada verde tiene que quedar en su lugar y cada amarilla tiene que volver a usarse en los intentos siguientes. Eso casi siempre te impide usar una segunda palabra de exploración como SUTIL, así que la elección de la primera pesa todavía más.',
      ],
    },
    {
      titulo: 'Practica y prueba tu racha',
      parrafos: [
        'El modo libre es ideal para probar aperturas: juega varias partidas con CAREO y SUTIL, y luego con otra pareja, y compara en cuántos intentos las resuelves. Cuando tengas tu favorita, úsala en la palabra del día y cuida tu racha. Al terminar puedes compartir tu resultado en cuadraditos de colores, sin revelar la palabra.',
      ],
    },
  ],
}
