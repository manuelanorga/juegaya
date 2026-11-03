import 'server-only'
import { Redis } from '@upstash/redis'

// Usa Upstash si está configurado (compartido entre instancias de Vercel).
// Si no, cae a memoria: protege menos porque cada instancia lleva su propia cuenta.
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? Redis.fromEnv()
  : null

const memCounters = new Map<string, { count: number; resetAt: number }>()
const memLists = new Map<string, string[]>()

/** Suma 1 al contador `key` y devuelve true si sigue dentro de `limit` en la ventana. */
export async function hit(key: string, limit: number, windowSec: number) {
  if (redis) {
    const count = await redis.incr(key)
    if (count === 1) await redis.expire(key, windowSec)
    return count <= limit
  }
  const now = Date.now()
  const entry = memCounters.get(key)
  if (!entry || entry.resetAt < now) {
    memCounters.set(key, { count: 1, resetAt: now + windowSec * 1000 })
    return true
  }
  entry.count++
  return entry.count <= limit
}

/** Guarda `value` en una lista circular de como máximo `max` elementos. */
export async function pushToPool(key: string, value: string, max: number) {
  if (redis) {
    await redis.lpush(key, value)
    await redis.ltrim(key, 0, max - 1)
    return
  }
  const list = memLists.get(key) ?? []
  list.unshift(value)
  memLists.set(key, list.slice(0, max))
}

export async function randomFromPool(key: string): Promise<string | null> {
  if (redis) {
    const len = await redis.llen(key)
    if (!len) return null
    const item = await redis.lindex(key, Math.floor(Math.random() * len))
    if (item == null) return null
    // Upstash deserializa JSON automáticamente
    return typeof item === 'string' ? item : JSON.stringify(item)
  }
  const list = memLists.get(key)
  if (!list?.length) return null
  return list[Math.floor(Math.random() * list.length)]
}

export function clientIp(headers: Headers) {
  return headers.get('x-forwarded-for')?.split(',')[0].trim()
    || headers.get('x-real-ip')
    || 'unknown'
}
