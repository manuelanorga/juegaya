'use server'
import { redirect } from 'next/navigation'
import { checkPassword, createSession, deleteSession } from '@/lib/auth'

export async function login(_prev: { error: boolean }, formData: FormData) {
  const password = formData.get('password')
  if (typeof password !== 'string' || !checkPassword(password)) {
    // Pequeña pausa para frenar ataques de fuerza bruta
    await new Promise(r => setTimeout(r, 800))
    return { error: true }
  }
  await createSession()
  redirect('/dashboard')
}

export async function logout() {
  await deleteSession()
  redirect('/admin-login')
}
