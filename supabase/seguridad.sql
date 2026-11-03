-- Ejecutar una vez en Supabase → SQL Editor.
-- Deja las tablas cerradas al público (clave anon). El dashboard usa la service_role desde el servidor.

-- 1. Activar RLS en todas las tablas
alter table public.page_views enable row level security;
alter table public.sessions   enable row level security;
alter table public.destacados enable row level security;

-- 2. Borrar políticas anteriores (pueden haber dado acceso total)
do $$
declare p record;
begin
  for p in select policyname, tablename from pg_policies
           where schemaname = 'public' and tablename in ('page_views','sessions','destacados')
  loop
    execute format('drop policy %I on public.%I', p.policyname, p.tablename);
  end loop;
end $$;

-- 3. destacados: el home puede leerlos, nadie puede escribirlos con la clave pública
create policy "destacados lectura publica" on public.destacados
  for select to anon, authenticated using (true);

-- 4. Analítica: sin acceso directo. El Tracker solo puede llamar a esta función.
revoke all on public.page_views, public.sessions from anon, authenticated;

create or replace function public.track_view(
  p_session_id text, p_page text, p_game_slug text, p_device text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_session_id is null or length(p_session_id) > 64
     or p_page is null or length(p_page) > 200
     or length(coalesce(p_game_slug, '')) > 100
     or p_device not in ('mobile', 'desktop') then
    return;
  end if;

  insert into page_views (session_id, page, game_slug, device)
  values (p_session_id, p_page, p_game_slug, p_device);

  insert into sessions (id, device, last_seen)
  values (p_session_id, p_device, now())
  on conflict (id) do update set last_seen = now(), device = excluded.device;
end $$;

revoke all on function public.track_view(text, text, text, text) from public;
grant execute on function public.track_view(text, text, text, text) to anon, authenticated;
