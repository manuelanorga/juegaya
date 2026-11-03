import 'server-only'
import { createClient } from '@supabase/supabase-js'

// Cliente con service_role: ignora RLS. Solo se usa en el servidor, detrás de requireAdmin().
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)
