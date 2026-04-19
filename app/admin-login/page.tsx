'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  function handleLogin() {
    if (password === 'juegaya2026') {
      document.cookie = 'dashboard_auth=juegaya_admin_2026; path=/; max-age=86400'
      router.push('/dashboard')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a18] flex items-center justify-center">
      <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-8 w-full max-w-sm">
        <img src="/logo.png" alt="JuegaYa" className="h-12 w-auto mx-auto mb-6" />
        <h1 className="text-lg font-black text-white text-center mb-6">Panel de administración</h1>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(false) }}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
          className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-yellow-400/50 mb-3"
        />
        {error && <p className="text-red-400 text-xs mb-3">Contraseña incorrecta</p>}
        <button onClick={handleLogin}
          className="w-full py-3 rounded-xl font-black text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition-all">
          Entrar
        </button>
      </div>
    </div>
  )
}
