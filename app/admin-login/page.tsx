'use client'
import { useActionState } from 'react'
import { login } from './actions'

export default function AdminLogin() {
  const [state, formAction, pending] = useActionState(login, { error: false })

  return (
    <div className="min-h-screen bg-[#0a0a18] flex items-center justify-center">
      <form action={formAction} className="bg-[#1e1e34] rounded-2xl border border-white/5 p-8 w-full max-w-sm">
        <img src="/logo.png" alt="JuegaYa" className="h-12 w-auto mx-auto mb-6" />
        <h1 className="text-lg font-black text-white text-center mb-6">Panel de administración</h1>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          autoComplete="current-password"
          required
          className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-yellow-400/50 mb-3"
        />
        {state.error && <p className="text-red-400 text-xs mb-3">Contraseña incorrecta</p>}
        <button type="submit" disabled={pending}
          className="w-full py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all disabled:opacity-50">
          {pending ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  )
}
