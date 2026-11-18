import type { Guia } from './tipo'

export const guiaCrucigrama: Guia = {
  slug: 'trucos-para-resolver-crucigramas',
  gameSlug: 'crucigrama',
  title: 'Trucos para resolver crucigramas: cómo leer las pistas y no atascarte',
  seoTitle: 'Cómo resolver crucigramas: trucos y estrategias',
  description:
    'Aprende a resolver crucigramas en español: tipos de definiciones, en qué orden atacar, cómo usar los cruces, terminaciones frecuentes y qué hacer si te atascas.',
  publishedAt: '2026-11-18',
  intro: [
    'Resolver un crucigrama no depende solo de saber muchas palabras. Depende de leer bien cada definición, elegir por dónde empezar y sacarle provecho a cada letra que ya tienes. Son habilidades que se entrenan, y se notan desde la primera semana.',
    'Esta guía reúne técnicas que sirven para cualquier crucigrama en español, y en varios puntos explica cómo funciona el nuestro. Para eso analizamos el banco de definiciones del Crucigrama del Día, que al momento de escribir tiene más de 680 palabras repartidas en 20 temas.',
  ],
  secciones: [
    {
      titulo: 'Reconoce el tipo de definición',
      parrafos: [
        'Casi todas las pistas caben en unas pocas familias. Si identificas a cuál pertenece la que tienes delante, sabes qué clase de palabra buscar antes de pensar en letras.',
      ],
      lista: [
        'Sinónimo directo: "Sinónimo de veloz" pide una palabra que signifique lo mismo. Suele haber varias candidatas, así que el número de letras decide.',
        'Contrario: "Lo contrario de cerca" pide el antónimo. Es el tipo más fácil de confirmar, porque cada palabra tiene pocos opuestos claros.',
        'Categoría más rasgo: "Ave nocturna de ojos grandes" o "Fruta tropical de cáscara rugosa". La primera palabra te da el grupo y el resto lo reduce a uno.',
        'Función o acción: "Persona que apaga incendios" o "Sirve para cortar papel". Piensa en oficios, herramientas y objetos de uso diario.',
        'Dato concreto: "Capital de Paraguay" o "Cantidad de patas de una araña". O lo sabes o lo deduces con los cruces.',
        'Definición de diccionario: "Moverse a pie a gran velocidad". Pide reformular una idea en una sola palabra, casi siempre un verbo o un sustantivo.',
      ],
    },
    {
      titulo: 'La respuesta copia la forma de la pista',
      parrafos: [
        'Una regla que se cumple en casi todos los crucigramas: la respuesta concuerda en número, género y tiempo verbal con la definición. Si la pista está en plural, la respuesta también. Si dice "Lo contrario de alto", la respuesta es masculina y singular, BAJO y no BAJA.',
        'Con los verbos pasa lo mismo. "Moverse en el agua con brazos y piernas" está en infinitivo, así que la respuesta también: NADAR, no NADA ni NADANDO. En nuestro banco, los 45 verbos están en infinitivo y 33 de ellos terminan en AR. Si una pista describe una acción, prueba primero esa terminación en las dos últimas casillas.',
        'En nuestra versión, además, no hay sustantivos comunes en plural: las pocas respuestas que terminan en S son nombres propios o palabras que ya llevan esa letra, como un día de la semana o un número. No pierdas tiempo buscando plurales.',
        'En otros crucigramas, una pista marcada con "abrev." pide una abreviatura. En el nuestro no hay abreviaturas ni siglas: todas las respuestas son palabras completas.',
      ],
    },
    {
      titulo: 'En qué orden atacar el tablero',
      parrafos: [
        'No empieces por la pista número 1 solo porque es la primera. Lee todas, horizontales y verticales, antes de escribir nada. En el nuestro puedes hacerlo con el botón Pistas, que muestra la lista completa.',
        'Este orden funciona bien en la mayoría de los tableros:',
      ],
      lista: [
        'Primero los contrarios y los datos concretos que sepas con seguridad: son las respuestas con menos margen de error.',
        'Después las palabras que cruzan a esas primeras, ya con una o dos letras puestas.',
        'Luego las largas que tengan al menos dos letras colocadas. Una palabra de 8 letras con dos letras fijas casi siempre se adivina.',
        'Al final los sinónimos y las definiciones abiertas, que admiten varias respuestas y necesitan cruces para decidirse.',
      ],
    },
    {
      titulo: 'Aprovecha los cruces y su límite',
      parrafos: [
        'Cada letra correcta es una pista gratis para la palabra que la cruza. Por eso conviene encadenar: resuelves una horizontal, pasas a la vertical que comparte una casilla con ella y sigues.',
        'En nuestro crucigrama las palabras nunca se tocan de costado: dos palabras paralelas no quedan pegadas, así que cada fila de letras es una sola respuesta. La consecuencia práctica es que muchas casillas pertenecen a una sola palabra. Mira el tablero y cuenta cuántas letras de cada respuesta se cruzan con otra: las que tienen tres o más cruces son las que más te van a ayudar.',
        'También sirve saber que, en nuestra versión, una pista nunca contiene la respuesta de otra palabra del mismo tablero, y que no salen más de tres palabras del mismo tema ni más de dos de tres letras. Si ya resolviste tres palabras sobre días y meses, puedes descartar que otra respuesta sea de ese tema.',
      ],
    },
    {
      titulo: 'Patrones de letras del español',
      parrafos: [
        'Cuando una palabra se resiste, la forma del español te ayuda. En nuestro banco, casi la mitad de las letras son vocales y la A es la más común, con cerca del 16 % del total, seguida de O, E y R. Si tienes un hueco entre dos consonantes, lo más probable es que vaya una vocal, y la A es la primera que conviene probar.',
        'La última letra también es muy predecible: tres de cada cuatro respuestas terminan en vocal, y más del 60 % termina en O o en A. Las terminaciones de tres letras más repetidas son ADO, LLO, LLA y ERO. Si te falta la última casilla de una palabra que nombra un objeto o un animal, prueba con O o A antes que con cualquier otra.',
      ],
      lista: [
        'Las respuestas se escriben sin tildes: CAMIÓN se escribe CAMION. Esto vale para la terminación CIÓN, que en el tablero ocupa cuatro casillas: C, I, O, N.',
        'La Ñ es una letra propia y ocupa su casilla. Si una palabra como ARAÑA no encaja, revisa que no hayas puesto N.',
        'LL, RR, CH y QU ocupan dos casillas cada una. Tras una Q casi siempre viene U.',
        'Las palabras de 5 y 6 letras son más de la mitad de nuestro banco. Si dudas entre dos respuestas, la de esa longitud suele ser la buena, aunque el número sobre la pista siempre manda.',
        'En crucigramas tradicionales abundan las terminaciones MENTE y CIÓN: búscalas cuando la pista empiece con "De manera..." o "Acción de...". En el nuestro casi no aparecen.',
      ],
    },
    {
      titulo: 'Cómo salir de un atasco',
      parrafos: [
        'Atascarse casi nunca significa que no sepas la palabra. Lo habitual es que la busques con la forma equivocada o que una letra vecina esté mal.',
      ],
      lista: [
        'Relee la pista buscando otro significado: "Planta" puede ser un vegetal o la parte de abajo del pie.',
        'Escribe mentalmente el patrón con las letras que tienes, por ejemplo _A_A_A, y recorre el abecedario solo en la primera casilla vacía.',
        'Cambia de categoría gramatical: si buscabas un sustantivo, prueba con un adjetivo o un verbo.',
        'Pasa a otra palabra y vuelve en un minuto. Al regresar, muchas veces la respuesta aparece sola.',
        'Desconfía de la letra que pusiste con menos seguridad. Si esa casilla está en un cruce, borra la palabra más dudosa de las dos.',
      ],
    },
    {
      titulo: 'Las ayudas de nuestro crucigrama, bien usadas',
      parrafos: [
        'En el Crucigrama del Día cada palabra correcta se pone verde y queda fija. Usa esto como comprobación gratuita: si completas una palabra y no cambia de color, tiene al menos un error, y puedes buscarlo sin gastar nada.',
        'Comprobar marca en rojo las letras incorrectas y suma 10 segundos solo si encuentra errores que no estaban marcados. Pista revela la letra de la casilla actual y suma 15 segundos por letra. Entonces, si tienes varias palabras llenas sin confirmar, un solo Comprobar te dice qué letras fallan en todas a la vez por 10 segundos. Y si te falta una letra concreta en un cruce, revelarla puede destrabarte dos palabras con un solo uso.',
      ],
    },
    {
      titulo: 'Cómo ampliar tu vocabulario jugando',
      parrafos: [
        'La mejor forma de mejorar es aprender de cada tablero. Cuando una respuesta te sorprenda, anótala junto a su definición. Al repasarla una semana después, ya no se te olvida.',
        'Repasa también contrarios, sinónimos de uso diario y los países de América Latina con sus capitales: son grupos cerrados y fáciles de estudiar. Con las definiciones que no resolviste, piensa qué palabra de la pista te hubiera llevado a la respuesta.',
        'El modo libre sirve justamente para eso: resolver muchos tableros sin la presión del reto diario y fijarte en cómo están escritas las pistas.',
      ],
    },
    {
      titulo: 'Pon a prueba estos trucos',
      parrafos: [
        'Cada día hay un crucigrama nuevo, el mismo para todos, con entre 9 y 13 palabras. Empieza por los contrarios, encadena los cruces y fíjate en las terminaciones. Si te quedas con ganas, el modo libre te da otro tablero cuando quieras.',
      ],
    },
  ],
}
