import type { Guia } from './tipo'

export const guia2048: Guia = {
  slug: 'como-ganar-en-2048',
  gameSlug: '2048',
  title: 'Cómo ganar en 2048: la estrategia de la esquina paso a paso',
  seoTitle: 'Cómo ganar en 2048: estrategia y trucos',
  description:
    'Estrategia para ganar en 2048: cómo funcionan las fusiones, la técnica de la esquina, la cadena en serpiente, qué movimientos evitar y cómo recuperarte.',
  publishedAt: '2026-11-18',
  intro: [
    'En 2048 no gana quien piensa más rápido, sino quien mantiene el tablero ordenado. Si mueves al azar, el tablero se llena mucho antes de que te acerques al 2048. Con un método claro, esa ficha se vuelve un objetivo realista.',
    'Esta guía explica ese método paso a paso y cómo aplicarlo en nuestra versión del juego, con datos tomados directamente de su código.',
  ],
  secciones: [
    {
      titulo: 'Las reglas que importan para la estrategia',
      parrafos: [
        'El tablero es de 4 por 4. Cada vez que deslizas, todas las fichas se mueven hasta el borde en esa dirección, y dos fichas iguales que chocan se funden en una con el doble de valor. Una ficha recién creada no vuelve a fusionarse en el mismo movimiento: una fila con 2, 2, 2 y 2 queda como 4 y 4, no como 8.',
        'Cuando hay tres iguales seguidas, se funden primero las que están más cerca del borde hacia el que mueves. Si deslizas a la izquierda una fila con 4, 4 y 4, el resultado es 8 y 4, con el 8 pegado a la izquierda. Esto sirve para decidir hacia qué lado mover cuando quieres que la ficha nueva quede junto a tu cadena.',
        'Después de cada movimiento válido aparece una ficha nueva en una casilla vacía elegida al azar. En nuestra versión es un 2 el 90 % de las veces y un 4 el 10 % restante. Si un movimiento no desplaza ninguna ficha, no cuenta y no aparece nada.',
        'La partida termina cuando el tablero está lleno y ninguna ficha tiene a su lado, arriba, abajo o a los costados, otra del mismo valor.',
      ],
    },
    {
      titulo: 'Cómo se calculan los puntos en nuestra versión',
      parrafos: [
        'Cada fusión suma el valor de la ficha que se forma: unir dos 8 da 16 puntos, unir dos 512 da 1024. Las fichas que aparecen solas no suman nada, ni siquiera cuando nacen como 4.',
        'Esto tiene una consecuencia curiosa: una ficha vale muchos más puntos de lo que dice. Para construir un 2048 solo con doses hacen falta fusiones que suman 20.480 puntos. Cada 4 que aparece por sorteo te ahorra trabajo, pero también esos puntos, así que dos partidas que llegan a la misma ficha pueden tener puntajes algo distintos.',
        'Ten en cuenta también el ritmo: cada movimiento agrega en promedio 2,2 al total del tablero, así que llegar a una ficha de 2048 exige más de 900 movimientos. La paciencia rinde más que la velocidad.',
      ],
    },
    {
      titulo: 'La estrategia de la esquina',
      parrafos: [
        'Elige una esquina, por ejemplo la de abajo a la izquierda, y decide que tu ficha más alta vivirá siempre ahí. Todo lo demás se ordena alrededor de ella. Una ficha grande en el centro del tablero bloquea fusiones en cuatro direcciones; en una esquina solo estorba en dos.',
        'Para mantenerla en su lugar, usa sobre todo dos direcciones: abajo e izquierda. La tercera, derecha, se usa cuando las otras dos no mueven nada o cuando la fila de abajo está completa. La cuarta, arriba, es la que saca la ficha de la esquina, y la dejas solo para emergencias.',
        'Un detalle que cambia mucho: procura que la fila de abajo esté siempre llena. Si la fila está completa y no tiene dos fichas iguales juntas, mover a la derecha no puede desplazar la ficha de la esquina, porque no hay espacio a dónde ir. Si hay una pareja igual en esa fila, fusiónala primero con un movimiento a la izquierda.',
      ],
    },
    {
      titulo: 'Arma una cadena en forma de serpiente',
      parrafos: [
        'La esquina sola no alcanza: la clave es que las fichas vayan en orden descendente desde ella. Si en la esquina tienes 512, a su lado debería ir 256, luego 128 y luego 64. Cuando llega un 64 nuevo, se funde con el último de la cadena y la fusión avanza como una ola hasta la esquina.',
        'Cuando la fila de abajo se termina, la cadena sube a la fila siguiente y vuelve en sentido contrario, como una serpiente. Un ejemplo de tablero bien ordenado, leído de abajo hacia arriba:',
      ],
      lista: [
        'Fila de abajo, de izquierda a derecha: 1024, 512, 256, 128.',
        'Segunda fila, de derecha a izquierda: 64, 32, 16, 8.',
        'Tercera y cuarta filas: espacio libre para que entren fichas chicas y se combinen.',
        'Tu trabajo es llevar cada ficha chica hasta la punta de la serpiente, que en este ejemplo es el 8, y no dejarla en cualquier lado.',
      ],
    },
    {
      titulo: 'Movimientos que conviene evitar',
      parrafos: [
        'La mayoría de las partidas perdidas tienen el mismo origen: un movimiento hecho sin mirar qué casillas quedan libres. Antes de deslizar, pregúntate dónde puede aparecer la próxima ficha y si te molestaría ahí.',
      ],
      lista: [
        'Mover hacia arriba con la fila de abajo incompleta: deja un hueco junto a tu ficha mayor y ahí puede caer un 2.',
        'Mover a la derecha cuando la fila de abajo tiene huecos: tu ficha grande se despega de la esquina.',
        'Fusionar fichas chicas lejos de la cadena solo porque se puede: creas un 32 suelto que después cuesta llevar a su lugar.',
        'Dejar dos fichas grandes separadas, por ejemplo un 256 en cada extremo del tablero. Hay que juntarlas pronto o se vuelven dos obstáculos.',
        'Jugar en piloto automático cuando quedan tres o cuatro casillas libres. Ese es el momento de ir más lento, no más rápido.',
      ],
    },
    {
      titulo: 'Qué hacer si la ficha grande sale de la esquina',
      parrafos: [
        'A veces no queda otra que mover hacia arriba. Si pasa, no entres en pánico: en la mayoría de los casos se puede volver a la situación anterior.',
        'Mira la casilla de la esquina que quedó vacía. Si la ficha nueva no cayó ahí, mueve de inmediato hacia abajo para devolver la ficha grande a su lugar. Si sí cayó un 2 en la esquina, trabaja para fusionarlo cuanto antes con fichas pequeñas de la fila y vuelve a llenar la fila de abajo. Durante unos movimientos tu cadena estará desordenada, así que prioriza recuperar la esquina antes que sumar puntos.',
        'En nuestra versión tienes además el botón Deshacer, que revierte tu último movimiento. Solo guarda una jugada: después de usarlo, se desactiva hasta que vuelvas a mover. Úsalo para corregir un deslizamiento accidental, sobre todo en el celular, donde basta un gesto de 30 píxeles para que cuente. Al repetir un movimiento después de deshacer, la ficha nueva vuelve a sortearse y puede caer en otra casilla.',
      ],
    },
    {
      titulo: 'Después del 2048',
      parrafos: [
        'En nuestra versión, al formar la primera ficha de 2048 aparece un aviso con dos opciones: Seguir jugando o Nueva partida. Si sigues, el aviso no vuelve a salir y puedes apuntar a 4096 o más.',
        'A partir de aquí la estrategia es la misma, pero el margen es menor. Un 2048 ocupa una casilla durante todo el resto de la partida, y para formar otro necesitas armar de nuevo la cadena 1024, 512, 256 y siguientes con solo las casillas que quedan. Llena primero la fila de abajo con valores altos ordenados y usa la segunda fila como zona de trabajo.',
        'Recuerda que el récord se guarda en tu navegador, pero la partida no: si recargas o cierras la página, empiezas un tablero nuevo. Antes de salir, piensa si quieres terminarla.',
      ],
    },
    {
      titulo: 'Controles en nuestra versión',
      parrafos: [
        'En la computadora puedes jugar con las flechas del teclado o con las teclas W, A, S y D. En el celular, desliza el dedo sobre el tablero en la dirección que quieras. El botón de reinicio pide confirmación si ya tienes puntos, para que no pierdas una partida por un toque accidental.',
      ],
    },
    {
      titulo: 'Prueba la estrategia',
      parrafos: [
        'Elige tu esquina, mantén llena la fila de abajo y arma la serpiente con paciencia. La primera partida con método puede no llegar al 2048, pero vas a notar enseguida que el tablero se llena mucho más despacio.',
      ],
    },
  ],
}
