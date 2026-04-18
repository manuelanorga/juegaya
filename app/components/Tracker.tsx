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

    supabase.from('page_views').insert({
      session_id: sessionId,
      page: pathname,
      game_slug: gameSlug,
      device,
    }).then()

    supabase.from('sessions').upsert({
      id: sessionId,
      device,
      last_seen: new Date().toISOString(),
    }, { onConflict: 'id' }).then()

  }, [pathname])

  return null
}
