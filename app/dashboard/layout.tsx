'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { label: 'Dashboard',      href: '/dashboard',                icon: '📊' },
  { label: 'Juegos Destacados', href: '/dashboard/destacados', icon: '⭐' },
  { label: 'Game List',      href: '/dashboard/games',          icon: '🎮' },
  { label: 'Add Game',       href: '/dashboard/add',            icon: '➕' },
  { label: 'Categorías',     href: '/dashboard/categorias',     icon: '🗂️' },
  { label: 'Páginas',        href: '/dashboard/paginas',        icon: '📄' },
  { label: 'Theme',          href: '/dashboard/theme',          icon: '🎨' },
  { label: 'Plugins',        href: '/dashboard/plugins',        icon: '🔌' },
  { label: 'Settings',       href: '/dashboard/settings',       icon: '⚙️' },
  { label: 'Updater',        href: '/dashboard/updater',        icon: '🔄' },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#0a0a18] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-[220px] min-h-screen bg-[#0e0e1a] border-r border-white/5 flex flex-col flex-shrink-0 sticky top-0 h-screen">
        {/* Logo */}
        <div className="px-5 py-4 border-b border-white/5">
          <Link href="/" className="block">
            <img src="/logo.png" alt="JuegaYa" className="h-10 w-auto" />
          </Link>
          <div className="text-[10px] text-white/30 font-bold mt-1 uppercase tracking-wider">Admin Panel</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 overflow-y-auto">
          {NAV.map((item, i) => {
            const active = pathname === item.href
            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? 'bg-yellow-400/10 text-yellow-400 border-r-2 border-yellow-400'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-4 border-t border-white/5">
          <Link href="/" className="flex items-center gap-2 text-xs text-white/30 hover:text-white transition-colors">
            ← Volver al portal
          </Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}
