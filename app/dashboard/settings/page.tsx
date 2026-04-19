'use client'
import { useState } from 'react'

const TABS = ['General', 'Usuario', 'SEO', 'Monetización']

export default function SettingsPage() {
  const [tab, setTab] = useState(0)
  const [saved, setSaved] = useState<string | null>(null)

  function save(section: string) {
    setSaved(section)
    setTimeout(() => setSaved(null), 2000)
  }

  const [general, setGeneral] = useState({
    siteTitle: 'JuegaYa — Juegos Gratis Online Sin Descargar',
    siteDescription: 'JuegaYa es la plataforma de juegos HTML5 gratis más grande de Latinoamérica.',
    siteMeta: 'juegos gratis online, juegos html5, juegos sin descargar, juegos en español, juegos latam',
    siteUrl: 'https://juegaya.app',
    siteLanguage: 'es',
    maintenanceMode: false,
    minAge: '13',
  })

  const [user, setUser] = useState({
    registration: true,
    uploadAvatar: true,
    comments: false,
    moderateComments: true,
    showLogin: true,
    captcha: false,
    minAge: '13',
  })

  const [seo, setSeo] = useState({
    gscCode: '',
    googleAnalytics: '',
    robotsTxt: 'User-agent: *\nAllow: /\nDisallow: /dashboard/\nSitemap: https://juegaya.app/sitemap.xml',
    metaGlobal: '',
  })

  const [monetization, setMonetization] = useState({
    adsenseId: '',
    slotBanner728: true,
    slot300x250Content: true,
    slot300x250Sidebar: true,
    adblockDetection: true,
    adblockMessage: 'Por favor desactiva tu AdBlock para apoyar JuegaYa y seguir jugando gratis.',
  })

  const SaveBtn = ({ section }: { section: string }) => (
    <button onClick={() => save(section)}
      className={`px-6 py-2.5 rounded-xl font-black text-sm transition-all ${saved === section ? 'bg-green-400 text-black' : 'bg-yellow-400 text-black hover:bg-yellow-300'}`}>
      {saved === section ? '✓ Guardado' : 'Guardar cambios'}
    </button>
  )

  const Field = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div>
      <label className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1.5 block">{label}</label>
      {children}
    </div>
  )

  const Input = ({ value, onChange, placeholder, mono }: any) => (
    <input type="text" value={value} onChange={onChange} placeholder={placeholder}
      className={`w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 ${mono ? 'font-mono' : ''}`} />
  )

  const Textarea = ({ value, onChange, placeholder, rows = 3 }: any) => (
    <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
      className="w-full bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50 resize-none" />
  )

  const Toggle = ({ label, sub, checked, onChange }: any) => (
    <div className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
      <div>
        <div className="text-sm font-semibold">{label}</div>
        {sub && <div className="text-xs text-white/40 mt-0.5">{sub}</div>}
      </div>
      <button onClick={() => onChange(!checked)}
        className={`w-11 h-6 rounded-full transition-all flex-shrink-0 relative ${checked ? 'bg-yellow-400' : 'bg-white/10'}`}>
        <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${checked ? 'left-5' : 'left-0.5'}`} />
      </button>
    </div>
  )

  const FileUpload = ({ label, format, size }: { label: string, format: string, size: string }) => (
    <div className="bg-[#111120] border border-white/10 rounded-xl p-4">
      <div className="text-sm font-bold mb-1">{label}</div>
      <div className="text-xs text-white/30 mb-3">Formato: {format} · Tamaño recomendado: {size}</div>
      <div className="flex items-center gap-3">
        <label className="flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 cursor-pointer hover:border-yellow-400/30 transition-colors">
          <span className="text-white/30 text-sm">📁</span>
          <span className="text-xs text-white/40">Seleccionar archivo...</span>
          <input type="file" className="hidden" />
        </label>
        <button className="px-4 py-2 bg-yellow-400 text-black font-black text-xs rounded-lg hover:bg-yellow-300 transition-colors">
          Subir
        </button>
      </div>
    </div>
  )

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-black">Settings</h1>
        <p className="text-white/40 text-sm mt-1">Configuración general del portal</p>
      </div>

      {/* TABS */}
      <div className="flex gap-2 mb-8 bg-[#1e1e34] p-1.5 rounded-2xl w-fit">
        {TABS.map((t, i) => (
          <button key={i} onClick={() => setTab(i)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${tab === i ? 'bg-yellow-400 text-black' : 'text-white/40 hover:text-white'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* TAB 1 — GENERAL */}
      {tab === 0 && (
        <div className="max-w-2xl space-y-6">

          {/* Modo mantenimiento */}
          {general.maintenanceMode && (
            <div className="bg-red-400/10 border border-red-400/25 rounded-xl p-4 flex items-center gap-3">
              <span className="text-lg">⚠️</span>
              <div className="text-sm text-red-300 font-semibold">El sitio está en modo mantenimiento — no es visible al público</div>
            </div>
          )}

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Información del sitio</h2>
            <Field label="Site Title">
              <Input value={general.siteTitle} onChange={(e: any) => setGeneral({...general, siteTitle: e.target.value})} />
            </Field>
            <Field label="Site URL">
              <Input value={general.siteUrl} onChange={(e: any) => setGeneral({...general, siteUrl: e.target.value})} mono />
            </Field>
            <Field label="Site Description">
              <Textarea value={general.siteDescription} onChange={(e: any) => setGeneral({...general, siteDescription: e.target.value})} />
            </Field>
            <Field label="Meta Keywords">
              <Input value={general.siteMeta} onChange={(e: any) => setGeneral({...general, siteMeta: e.target.value})}
                placeholder="palabra1, palabra2, palabra3..." />
            </Field>
            <Field label="Site Language">
              <select value={general.siteLanguage} onChange={e => setGeneral({...general, siteLanguage: e.target.value})}
                className="bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                <option value="es">Español (ES)</option>
                <option value="en">English (EN)</option>
                <option value="pt">Português (PT)</option>
              </select>
            </Field>
            <Field label="Edad mínima requerida">
              <select value={general.minAge} onChange={e => setGeneral({...general, minAge: e.target.value})}
                className="bg-[#111120] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-yellow-400/50">
                <option value="13">+13 años</option>
                <option value="16">+16 años</option>
                <option value="18">+18 años</option>
              </select>
            </Field>
            <div className="flex items-center justify-between pt-2">
              <Toggle label="Modo mantenimiento" sub="El sitio mostrará una página de 'Volvemos pronto'"
                checked={general.maintenanceMode} onChange={(v: boolean) => setGeneral({...general, maintenanceMode: v})} />
            </div>
            <div className="flex justify-end pt-2">
              <SaveBtn section="general" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Imágenes del sitio</h2>
            <FileUpload label="Site Logo" format="PNG con fondo transparente" size="400×120px · Máx 500KB" />
            <FileUpload label="Login Logo" format="PNG con fondo transparente" size="300×100px · Máx 300KB" />
            <FileUpload label="Site Icon (Favicon)" format=".ICO o PNG" size="512×512px · Máx 100KB" />
            <div className="flex justify-end pt-2">
              <SaveBtn section="logos" />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2 — USUARIO */}
      {tab === 1 && (
        <div className="max-w-2xl space-y-6">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
            <h2 className="font-black text-base border-b border-white/5 pb-3 mb-4">Configuración de usuarios</h2>
            <Toggle label="Registro de usuarios / jugadores" sub="Permite que los usuarios creen una cuenta"
              checked={user.registration} onChange={(v: boolean) => setUser({...user, registration: v})} />
            <Toggle label="Subir avatar" sub="Los usuarios pueden subir su foto de perfil"
              checked={user.uploadAvatar} onChange={(v: boolean) => setUser({...user, uploadAvatar: v})} />
            <Toggle label="Comentarios" sub="Los usuarios pueden comentar en las páginas de juegos"
              checked={user.comments} onChange={(v: boolean) => setUser({...user, comments: v})} />
            <Toggle label="Moderar comentarios" sub="Los comentarios requieren aprobación antes de publicarse"
              checked={user.moderateComments} onChange={(v: boolean) => setUser({...user, moderateComments: v})} />
            <Toggle label="Mostrar botón de login" sub="Muestra el botón de iniciar sesión en el header"
              checked={user.showLogin} onChange={(v: boolean) => setUser({...user, showLogin: v})} />
            <div className="flex justify-end pt-4">
              <SaveBtn section="user" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
            <h2 className="font-black text-base border-b border-white/5 pb-3 mb-4">CAPTCHA</h2>
            <Toggle label="Mostrar CAPTCHA en registro" sub="Añade verificación anti-bot en el formulario de registro"
              checked={user.captcha} onChange={(v: boolean) => setUser({...user, captcha: v})} />
            <div className="flex justify-end pt-4">
              <SaveBtn section="captcha" />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3 — SEO */}
      {tab === 2 && (
        <div className="max-w-2xl space-y-6">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Google</h2>
            <Field label="Google Search Console — Verification Code">
              <Input value={seo.gscCode} onChange={(e: any) => setSeo({...seo, gscCode: e.target.value})}
                placeholder="google-site-verification=XXXXXXXXXX" mono />
              <p className="text-xs text-white/30 mt-1">Obtén este código en Google Search Console → Verificar propiedad → Etiqueta HTML</p>
            </Field>
            <Field label="Google Analytics ID">
              <Input value={seo.googleAnalytics} onChange={(e: any) => setSeo({...seo, googleAnalytics: e.target.value})}
                placeholder="G-XXXXXXXXXX" mono />
            </Field>
            <div className="flex justify-end">
              <SaveBtn section="seo-google" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Robots.txt</h2>
            <Textarea value={seo.robotsTxt} onChange={(e: any) => setSeo({...seo, robotsTxt: e.target.value})}
              rows={8} />
            <div className="flex justify-end">
              <SaveBtn section="robots" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Meta Tags Globales</h2>
            <Field label="Meta tags adicionales (se insertan en el head)">
              <Textarea value={seo.metaGlobal} onChange={(e: any) => setSeo({...seo, metaGlobal: e.target.value})}
                placeholder='<meta name="..." content="..." />' rows={4} />
            </Field>
            <div className="flex justify-end">
              <SaveBtn section="meta" />
            </div>
          </div>
        </div>
      )}

      {/* TAB 4 — MONETIZACIÓN */}
      {tab === 3 && (
        <div className="max-w-2xl space-y-6">
          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">Google AdSense</h2>
            <Field label="Publisher ID">
              <Input value={monetization.adsenseId} onChange={(e: any) => setMonetization({...monetization, adsenseId: e.target.value})}
                placeholder="ca-pub-XXXXXXXXXXXXXXXX" mono />
            </Field>
            <div className="flex justify-end">
              <SaveBtn section="adsense" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6">
            <h2 className="font-black text-base border-b border-white/5 pb-3 mb-4">Slots de publicidad</h2>
            <Toggle label="Banner 728×90 debajo del juego" sub="Mayor visibilidad — justo debajo del iframe"
              checked={monetization.slotBanner728} onChange={(v: boolean) => setMonetization({...monetization, slotBanner728: v})} />
            <Toggle label="Bloque 300×250 en contenido" sub="Dentro de la sección Tips — mayor CTR"
              checked={monetization.slot300x250Content} onChange={(v: boolean) => setMonetization({...monetization, slot300x250Content: v})} />
            <Toggle label="Bloque 300×250 en sidebar" sub="Siempre visible en desktop"
              checked={monetization.slot300x250Sidebar} onChange={(v: boolean) => setMonetization({...monetization, slot300x250Sidebar: v})} />
            <div className="flex justify-end pt-4">
              <SaveBtn section="slots" />
            </div>
          </div>

          <div className="bg-[#1e1e34] rounded-2xl border border-white/5 p-6 space-y-4">
            <h2 className="font-black text-base border-b border-white/5 pb-3">AdBlock Detection</h2>
            <Toggle label="Activar detección de AdBlock" sub="Muestra un mensaje cuando el usuario tiene AdBlock activado"
              checked={monetization.adblockDetection} onChange={(v: boolean) => setMonetization({...monetization, adblockDetection: v})} />
            {monetization.adblockDetection && (
              <Field label="Mensaje para usuarios con AdBlock">
                <Textarea value={monetization.adblockMessage} onChange={(e: any) => setMonetization({...monetization, adblockMessage: e.target.value})} />
              </Field>
            )}
            <div className="flex justify-end">
              <SaveBtn section="adblock" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
