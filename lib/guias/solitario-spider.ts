import type { Guia } from './tipo'

export const guiaSolitarioSpider: Guia = {
  slug: 'como-jugar-solitario-spider',
  gameSlug: 'solitario-spider',
  title: 'Cómo jugar solitario Spider: reglas, trucos y estrategia',
  seoTitle: 'Cómo jugar solitario Spider: reglas y trucos',
  description:
    'Reglas del solitario Spider con 1, 2 y 4 palos, cuándo repartir, cómo usar las columnas vacías y los trucos que más ayudan a armar las ocho escaleras.',
  publishedAt: '2026-11-18',
  intro: [
    'El Spider tiene fama de difícil, y con razón: se juega con dos barajas, hay diez columnas y casi todo lo que haces tiene consecuencias varios turnos después. Pero sus reglas son pocas, y una vez que entiendes la diferencia entre poner una carta y mover un grupo, las partidas empiezan a tener sentido.',
    'Aquí repasamos las reglas completas, el momento justo para repartir, las técnicas con columnas vacías y los errores que más partidas cuestan, con ejemplos concretos.',
  ],
  secciones: [
    {
      titulo: 'Cómo se reparten las cartas',
      parrafos: [
        'Se usan 104 cartas, dos barajas francesas sin comodines. Según el modo, los palos cambian: con 1 palo las 104 son picas, con 2 palos hay 52 picas y 52 corazones, y con 4 palos hay dos juegos completos de cada palo. En todos los casos hay exactamente ocho series de la K al A, una por cada escalera que tendrás que armar.',
        'Se reparten 54 cartas en diez columnas: las cuatro primeras reciben seis y las otras seis reciben cinco. Solo la carta de arriba de cada columna queda boca arriba, así que empiezas con 44 cartas ocultas. Las 50 restantes forman el mazo, que alcanza para cinco repartos de diez cartas.',
      ],
    },
    {
      titulo: 'Poner una carta no es lo mismo que mover un grupo',
      parrafos: [
        'Esta es la regla que define el Spider. Para poner una carta sobre otra, solo importa el número: tiene que ser un punto más baja, sin importar el palo. Un 7 de picas puede ir sobre un 8 de corazones, y un 4 de tréboles sobre un 5 de diamantes.',
        'Pero para mover varias cartas juntas, el grupo tiene que bajar en orden y ser todo del mismo palo. Imagina una columna con un 9 de corazones, encima un 8 de picas y encima un 7 de picas. Puedes mover el 7 solo, o el 8 y el 7 juntos, pero no las tres cartas, porque el 9 es de otro palo. Ese corte entre corazones y picas es una traba: para separarlo necesitarás un lugar donde dejar el 8 y el 7.',
        'Por eso, al decidir dónde poner una carta, la pregunta no es solo si encaja, sino si después podrás moverla junto con su vecina. Una carta del mismo palo te deja el grupo libre; una de otro palo lo deja pegado.',
      ],
    },
    {
      titulo: 'Las escaleras completas',
      parrafos: [
        'Cuando una columna termina en una escalera de trece cartas, de la K al A y del mismo palo, esa escalera sale sola de la mesa. No hace falta que la columna empiece con la K: puede haber cartas debajo, incluso ocultas, y la que quede arriba se da vuelta. Tampoco importa cómo se completó: puede ser con una jugada tuya o con un reparto que dejó justo el A que faltaba.',
        'Lo que no sirve es una escalera interrumpida. Si en medio de la serie hay una carta de otro palo, la escalera no sale aunque tenga los trece números en orden. Habrá que separarla, pasar la parte de abajo a otro lugar y volver a unirla con la carta correcta.',
      ],
    },
    {
      titulo: 'Cuándo repartir',
      parrafos: [
        'Repartir deja una carta nueva, boca arriba, encima de cada una de las diez columnas. Eso trae cartas frescas, pero también tapa todo lo que tenías ordenado. Si una columna terminaba en un 6 de picas esperando al 5, después del reparto ese 6 queda debajo de una carta cualquiera.',
        'Hay una regla clásica que nuestra versión respeta: no se puede repartir si hay una columna vacía. Antes de tocar el mazo, todas las columnas tienen que tener al menos una carta. Si tienes un hueco y quieres repartir, pon ahí la carta que menos te estorbe, idealmente una K o el comienzo de una escalera de un solo palo, que no tapa a nadie.',
      ],
      lista: [
        'Reparte cuando ya no te queden jugadas que destapen cartas, vacíen columnas o unan cartas del mismo palo.',
        'Antes de repartir, deja arriba de cada columna la carta más alta posible: una K o una Q reciben más cartas que un 3.',
        'Si tienes una columna vacía, aprovéchala para reordenar todo lo que puedas antes de llenarla y repartir.',
      ],
    },
    {
      titulo: 'Técnicas con columnas vacías',
      parrafos: [
        'Una columna vacía acepta cualquier carta o grupo, y es la herramienta más poderosa del juego. El uso más común es separar grupos mezclados. Vuelve al ejemplo del 9 de corazones con el 8 y el 7 de picas encima: si tienes un hueco, mueve el 8 y el 7 ahí, pon el 9 de corazones sobre un 10 libre y la columna de abajo queda destapada.',
        'Otra técnica es intercambiar cartas cruzadas. Supón que en una columna tienes el 6 de picas sobre un 7 de corazones, y en otra el 6 de corazones sobre un 7 de picas. Pasa el 6 de picas al hueco, lleva el 6 de corazones sobre el 7 de corazones y después el 6 de picas sobre el 7 de picas. El hueco vuelve a quedar libre y ganaste dos parejas del mismo palo sin gastar nada.',
        'Las K merecen atención especial. Una K solo puede ir a una columna vacía, así que una K boca arriba encima de cartas ocultas es un tapón que solo se saca con un hueco. En cambio, una K en el fondo de una columna es la mejor base posible, porque nunca tendrás que moverla.',
      ],
    },
    {
      titulo: 'Cómo cambia el juego con 1, 2 y 4 palos',
      parrafos: [
        'Con 1 palo todas las cartas son picas, así que cualquier serie en orden se mueve entera. La dificultad está en el orden de los repartos y en vaciar columnas a tiempo. Es el mejor modo para aprender a pensar en huecos.',
        'Con 2 palos aparece el problema central del Spider: elegir entre poner una carta donde encaja o esperar a un lugar del mismo palo. Muchas veces conviene poner un corazón sobre una pica para destapar una carta, sabiendo que después habrá que separarlos.',
        'Con 4 palos los cortes son tan frecuentes que casi nunca puedes mover más de dos o tres cartas juntas. Aquí cada columna vacía vale oro, y conviene pensar dos o tres jugadas antes de cada movimiento. En nuestra versión los cuatro palos tienen colores distintos, picas en negro, corazones en rojo, tréboles en verde y diamantes en azul, para que no confundas picas con tréboles en una pantalla chica.',
      ],
    },
    {
      titulo: 'Errores comunes',
      parrafos: [
        'La mayoría de las partidas perdidas no se pierden por un mal reparto, sino por jugadas que parecían inofensivas.',
      ],
      lista: [
        'Mover un grupo de una carta a otra del mismo número y otro palo sin destapar nada. Solo cambia el problema de lugar.',
        'Repartir con jugadas útiles pendientes. Después del reparto, muchas de esas jugadas quedan tapadas.',
        'Llenar una columna vacía apenas aparece, solo para poder repartir, en lugar de usarla primero para ordenar.',
        'Dejar para el final las columnas de seis cartas. Tienen más cartas ocultas y suelen guardar las que te faltan.',
        'Mezclar palos en una escalera casi completa. Si a una serie de corazones de la K al 5 le pones un 4 de picas, tendrás que separarla para terminarla.',
      ],
    },
    {
      titulo: 'Cómo aprovechar nuestra versión',
      parrafos: [
        'Al tocar una carta, se mueve con todo lo que tiene encima al mejor destino: primero sobre una carta del mismo palo, después sobre cualquier carta un punto más alta y, por último, a una columna vacía. Si quieres un destino distinto, arrástrala. El botón Pista recorre las jugadas útiles una por una, empezando por las que completan escaleras o destapan cartas, y cuando no queda ninguna te sugiere repartir.',
        'Deshacer no tiene límite y también vuelve atrás los repartos y las escaleras completadas, así que puedes probar un camino sin miedo. Los puntos empiezan en 500, cada jugada resta 1, cada escalera suma 100 y deshacer devuelve el punto. El reto del día es de 2 palos y su reparto se comprueba antes con un solucionador, así que la salida existe; si reinicias, el reloj y las jugadas siguen contando. En el modo libre los repartos son al azar y no se comprueban.',
      ],
    },
    {
      titulo: 'A practicar',
      parrafos: [
        'La mejor forma de mejorar en el Spider es jugar con un objetivo concreto en cada partida: una vez, vaciar una columna antes del primer reparto; otra, no mezclar palos salvo para destapar. Empieza con 1 palo, pasa a 2 cuando ganes seguido y prueba con 4 cuando quieras un desafío de verdad. Reparte y empieza por la columna con menos cartas ocultas.',
      ],
    },
  ],
}
