/** Una guía de estrategia: texto propio que acompaña a un juego */
export interface Guia {
  slug: string
  /** slug del juego en lib/games.ts */
  gameSlug: string
  /** H1 de la página */
  title: string
  /** <title>, sin "| JuegaYa" (se agrega solo); máximo ~60 caracteres */
  seoTitle: string
  /** meta description, 140–160 caracteres */
  description: string
  /** AAAA-MM-DD */
  publishedAt: string
  /** Párrafos de entrada, antes de la primera sección */
  intro: string[]
  secciones: {
    titulo: string
    parrafos: string[]
    /** Lista opcional que se muestra después de los párrafos */
    lista?: string[]
  }[]
}
