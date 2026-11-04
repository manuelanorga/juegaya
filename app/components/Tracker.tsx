'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { canTrack, getDevice, getEntrySource, getSessionId } from '@/lib/tracking'

// El origen solo se guarda en la primera página: al navegar dentro del sitio el referrer ya no cambia
let isEntry = true

export default function Tracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!canTrack()) return
    const source = isEntry ? getEntrySource() : null
    isEntry = false
    const gameSlug = pathname.startsWith('/juego/') ? pathname.split('/')[2] : null

    // RPC con permisos limitados: el cliente no puede leer ni modificar las tablas directamente
    supabase.rpc('track_view', {
      p_session_id: getSessionId(),
      p_page: pathname,
      p_game_slug: gameSlug,
      p_device: getDevice(),
      p_source: source,
    }).then()

  }, [pathname])

  return null
}
