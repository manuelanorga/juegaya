'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function getSessionId() {
  let id = localStorage.getItem('jy_session')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('jy_session', id)
  }
  return id
}

function getDevice() {
  return /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop'
}

export default function Tracker() {
  const pathname = usePathname()

  useEffect(() => {
    const sessionId = getSessionId()
    const device = getDevice()
    const gameSlug = pathname.startsWith('/juego/') ? pathname.split('/')[2] : null

    // RPC con permisos limitados: el cliente no puede leer ni modificar las tablas directamente
    supabase.rpc('track_view', {
      p_session_id: sessionId,
      p_page: pathname,
      p_game_slug: gameSlug,
      p_device: device,
    }).then()

  }, [pathname])

  return null
}
