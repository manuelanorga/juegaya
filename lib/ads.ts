export const ADSENSE_CLIENT = 'ca-pub-0626686325162895'

// IDs de bloques de anuncios (AdSense → Anuncios → Por bloque de anuncios).
// Las variables NEXT_PUBLIC_ se incrustan al compilar: tras cambiarlas hay que redesplegar.
export const AD_SLOTS = {
  // Banner horizontal adaptable: debajo del juego y en la home
  horizontal: process.env.NEXT_PUBLIC_ADSENSE_SLOT_HORIZONTAL,
  // Rectángulo 300×250: junto a los tips (escritorio) y tras la descripción (móvil)
  rectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE,
  // Vertical 300×600 fijo en el lateral del juego (solo escritorio)
  vertical: process.env.NEXT_PUBLIC_ADSENSE_SLOT_VERTICAL,
}

export type AdFormat = keyof typeof AD_SLOTS
