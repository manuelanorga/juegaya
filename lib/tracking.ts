import { supabase } from '@/lib/supabase'

// Solo se mide el sitio real: las pruebas en localhost no ensucian las estadísticas
export function canTrack() {
  return /(^|\.)juegaya\.app$/.test(window.location.hostname)
}

export function getSessionId() {
  let id = localStorage.getItem('jy_session')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('jy_session', id)
  }
  return id
}

export function getDevice() {
  return /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
}

const SOURCES: [RegExp, string][] = [
  [/(^|\.)google\./, 'google'],
  [/(^|\.)(bing|yahoo|duckduckgo|ecosia|yandex)\./, 'otros-buscadores'],
  [/whatsapp/, 'whatsapp'],
  [/(^|\.)(facebook|fb)\.|com\.facebook/, 'facebook'],
  [/instagram/, 'instagram'],
  [/tiktok/, 'tiktok'],
  [/(^|\.)(twitter|x)\.com$|^t\.co$/, 'x'],
  [/youtube|youtu\.be/, 'youtube'],
  [/telegram|^t\.me$/, 'telegram'],
]

/**
 * Origen de una entrada al sitio. Guarda solo el dominio, nunca la URL completa.
 * Null si viene de una página de JuegaYa. WhatsApp y otras apps suelen no enviar
 * referrer: por eso los enlaces para compartir llevan utm_source.
 */
export function getEntrySource(): string | null {
  const utm = new URLSearchParams(window.location.search).get('utm_source')
  if (utm) return utm.toLowerCase().replace(/[^a-z0-9._-]/g, '').slice(0, 50) || 'directo'
  if (!document.referrer) return 'directo'
  let host: string
  try {
    host = new URL(document.referrer).hostname.replace(/^www\./, '')
  } catch {
    return 'otros'
  }
  if (!host) return 'directo'
  if (/(^|\.)juegaya\.app$/.test(host)) return null
  return SOURCES.find(([re]) => re.test(host))?.[1] ?? host.slice(0, 100)
}

export function trackPlay(gameSlug: string) {
  if (!canTrack()) return
  supabase.rpc('track_play', {
    p_session_id: getSessionId(),
    p_game_slug: gameSlug,
    p_device: getDevice(),
  }).then()
}
