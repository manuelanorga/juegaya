import 'server-only'
import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

export const SESSION_COOKIE = 'jy_admin'
const SESSION_TTL = 60 * 60 * 24 // 24 horas

function secret() {
  const s = process.env.ADMIN_SESSION_SECRET
  if (!s || s.length < 32) throw new Error('ADMIN_SESSION_SECRET no configurado (mínimo 32 caracteres)')
  return s
}

function sign(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('base64url')
}

function safeEqual(a: string, b: string) {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  return ba.length === bb.length && timingSafeEqual(ba, bb)
}

// Token = "<expira>.<firma>". No guarda datos sensibles, solo prueba que el servidor lo emitió.
export function createToken() {
  const exp = String(Math.floor(Date.now() / 1000) + SESSION_TTL)
  return `${exp}.${sign(exp)}`
}

export function verifyToken(token: string | undefined) {
  if (!token) return false
  const [exp, sig] = token.split('.')
  if (!exp || !sig) return false
  if (Number(exp) < Date.now() / 1000) return false
  return safeEqual(sig, sign(exp))
}

export function checkPassword(input: string) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  // Comparamos hashes para que la comparación sea de longitud fija.
  return safeEqual(sign(input), sign(expected))
}

export async function createSession() {
  const store = await cookies()
  store.set(SESSION_COOKIE, createToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: SESSION_TTL,
  })
}

export async function deleteSession() {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
}

export async function isAdmin() {
  const store = await cookies()
  return verifyToken(store.get(SESSION_COOKIE)?.value)
}

// Usar al inicio de cada Server Action del dashboard: el proxy no las cubre siempre.
export async function requireAdmin() {
  if (!(await isAdmin())) throw new Error('No autorizado')
}
