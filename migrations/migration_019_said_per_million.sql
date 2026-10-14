-- migration_019: how often each card's French is said (2026-10-14)
--
-- WHAT WAS MISSING
--
-- After the last two weeks of classes, a student's older cards came in order
-- of how many classes they appeared in, not how useful they are. The owner
-- asked for them to come most-said first, each card counted as a whole
-- phrase: "avoir besoin de" is a very common phrase even though "besoin" is
-- only an ordinary word.
--
-- WHAT THIS ADDS
--
-- Two columns on user_cards:
--
--   said_per_million  how many times per million words the card's French is
--                     said in French film and TV subtitles (OpenSubtitles
--                     2018, from the OPUS project), every form of its words
--                     counted (Lexique 3.83). 0 when it is said fewer than 5
--                     times: most full sentences and grammar drills, which
--                     keep their place in the order (src/lib/sessionQueue.js).
--   said_counted_at   when it was counted; empty means not counted yet.
--
-- And set_said(), which writes both for a batch of the student's cards and
-- nothing else. scripts/count-phrases.mjs counts the cards on the owner's Mac,
-- where the subtitles are, and calls it with the server's key.
--
-- Adds columns and a function only; renames and drops nothing, so it is safe
-- while the testing branch holds unreleased work. Run it once in Supabase's
-- SQL editor; running it again changes nothing.

alter table public.user_cards add column if not exists said_per_million real;
alter table public.user_cards add column if not exists said_counted_at timestamptz;

create or replace function public.set_said(p_user_id uuid, p_rows jsonb)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  n integer;
begin
  update public.user_cards c
     set said_per_million = (x->>'said')::real,
         said_counted_at = coalesce((x->>'at')::timestamptz, now())
    from jsonb_array_elements(p_rows) x
   where c.id = (x->>'id')::bigint
     and c.user_id = p_user_id;
  get diagnostics n = row_count;
  return n;
end;
$$;

revoke all on function public.set_said(uuid, jsonb) from public, anon, authenticated;
grant execute on function public.set_said(uuid, jsonb) to service_role;
