-- Ejecutar una vez en Supabase → SQL Editor, ANTES de desplegar el código que lo usa.
-- Es compatible con la versión actual de la web: track_view sigue aceptando la llamada anterior.

-- 1. De dónde llega cada visita (solo se rellena en la primera página de cada entrada)
alter table public.page_views add column if not exists source text;

-- 2. Partidas iniciadas: primera interacción real con el juego
create table if not exists public.game_plays (
  id bigint generated always as identity primary key,
  session_id text not null,
  game_slug text not null,
  device text not null,
  created_at timestamptz not null default now()
);
create index if not exists game_plays_created_at_idx on public.game_plays (created_at);

alter table public.game_plays enable row level security;
revoke all on public.game_plays from anon, authenticated;

-- 3. track_view con origen opcional
drop function if exists public.track_view(text, text, text, text);

create or replace function public.track_view(
  p_session_id text, p_page text, p_game_slug text, p_device text, p_source text default null
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_session_id is null or length(p_session_id) > 64
     or p_page is null or length(p_page) > 200
     or length(coalesce(p_game_slug, '')) > 100
     or length(coalesce(p_source, '')) > 100
     or p_device not in ('mobile', 'desktop') then
    return;
  end if;

  insert into page_views (session_id, page, game_slug, device, source)
  values (p_session_id, p_page, p_game_slug, p_device, p_source);

  insert into sessions (id, device, last_seen)
  values (p_session_id, p_device, now())
  on conflict (id) do update set last_seen = now(), device = excluded.device;
end $$;

revoke all on function public.track_view(text, text, text, text, text) from public;
grant execute on function public.track_view(text, text, text, text, text) to anon, authenticated;

-- 4. Registrar una partida iniciada
create or replace function public.track_play(
  p_session_id text, p_game_slug text, p_device text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_session_id is null or length(p_session_id) > 64
     or p_game_slug is null or length(p_game_slug) > 100
     or p_device not in ('mobile', 'desktop') then
    return;
  end if;

  insert into game_plays (session_id, game_slug, device)
  values (p_session_id, p_game_slug, p_device);
end $$;

revoke all on function public.track_play(text, text, text) from public;
grant execute on function public.track_play(text, text, text) to anon, authenticated;

-- 5. Que la API de Supabase vea los cambios de inmediato
notify pgrst, 'reload schema';
