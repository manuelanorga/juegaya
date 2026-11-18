import type { Guia } from './guias/tipo'
import { guiaSudoku } from './guias/sudoku'
import { guiaSolitario } from './guias/solitario'
import { guiaAhorcado } from './guias/ahorcado'
import { guiaPalabro } from './guias/palabro'
import { guiaCrucigrama } from './guias/crucigrama'
import { guia2048 } from './guias/2048'

export type { Guia }

export const GUIAS: Guia[] = [guiaSudoku, guiaSolitario, guiaAhorcado, guiaPalabro, guiaCrucigrama, guia2048]

export function getGuia(slug: string) {
  return GUIAS.find(g => g.slug === slug)
}

/** Solo lo que necesita la página del juego para enlazar su guía */
export function guiaDeJuego(gameSlug: string) {
  const g = GUIAS.find(x => x.gameSlug === gameSlug)
  return g ? { slug: g.slug, title: g.title } : undefined
}

export function palabras(g: Guia) {
  const texto = [...g.intro, ...g.secciones.flatMap(s => [s.titulo, ...s.parrafos, ...(s.lista ?? [])])].join(' ')
  return texto.split(/\s+/).filter(Boolean).length
}
