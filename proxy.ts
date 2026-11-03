import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SESSION_COOKIE, verifyToken } from '@/lib/auth'

// Chequeo optimista: redirige si no hay sesión válida. Cada Server Action vuelve a verificar.
export function proxy(request: NextRequest) {
  if (!verifyToken(request.cookies.get(SESSION_COOKIE)?.value)) {
    return NextResponse.redirect(new URL('/admin-login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*',
}
