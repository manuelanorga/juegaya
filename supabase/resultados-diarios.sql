-- Ejecutar una vez en Supabase → SQL Editor.
-- Resultados de los retos diarios para comparar a cada jugador con los demás del mismo día.
-- Sin datos personales: solo el identificador anónimo del navegador.

create table if not exists public.daily_results (
  game text not null,
  puzzle_date date not null,
  session_id text not null,
  value numeric not null,          -- Sopa: segundos. Palabro: intentos (7 = no la adivinó). Menos es mejor.
  created_at timestamptz not null default now(),
  primary key (game, puzzle_date, session_id)
);

alter table public.daily_results enable row level security;
revoke all on public.daily_results from anon, authenticated;

-- Guarda el primer resultado de cada jugador en cada reto y devuelve cómo le fue frente a los demás.
-- Solo la llama el servidor de la web: el público no tiene acceso.
create or replace function public.submit_daily_result(
  p_game text, p_date date, p_session_id text, p_value numeric
) returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  mine numeric;
begin
  insert into daily_results (game, puzzle_date, session_id, value)
  values (p_game, p_date, p_session_id, p_value)
  on conflict (game, puzzle_date, session_id) do nothing;

  select value into mine from daily_results
  where game = p_game and puzzle_date = p_date and session_id = p_session_id;

  return (
    select jsonb_build_object(
      'total', count(*),
      'beaten', count(*) filter (where value > mine),
      'value', mine
    )
    from daily_results
    where game = p_game and puzzle_date = p_date
  );
end $$;

revoke all on function public.submit_daily_result(text, date, text, numeric) from public, anon, authenticated;
grant execute on function public.submit_daily_result(text, date, text, numeric) to service_role;

notify pgrst, 'reload schema';
