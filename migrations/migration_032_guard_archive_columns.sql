-- migration_032: only the server may mark a card as a repeat (2026-11-25)
--
-- WHAT WAS MISSING
--
-- A signed-in student's browser may change its own cards, so it could write
-- archived_reason = 'duplicate' and merged_into on them. The morning check's
-- test of Claude's same-or-different question reads those two columns, so a
-- made-up pair could count as a case in the owner's test. Nothing in the app
-- writes them from the browser: only the server (service role) does.
--
-- WHAT THIS ADDS
--
-- A trigger on user_cards that refuses, for a request from a student's
-- browser (role authenticated or anon), any insert or update that puts a
-- value in archived_reason, merged_into or archived_by. Emptying them is still
-- allowed, so a card that comes back into study (the tutor adding the same
-- French again) still loses its reason, as migration_016 does. Writes by the
-- server, and changes made in the Supabase editor, are not affected.
--
-- No row is changed here. No answer, schedule, streak or place in a set is
-- touched, and students see no difference. Safe to run more than once.

create or replace function public.user_cards_guard_archive_columns()
returns trigger
language plpgsql
as $$
declare
  claims text := nullif(current_setting('request.jwt.claims', true), '');
  who text := coalesce(case when claims is null then null else claims::json ->> 'role' end,
                       current_setting('request.jwt.claim.role', true), '');
  col text;
begin
  if who not in ('authenticated', 'anon') then
    return new;
  end if;
  foreach col in array array['archived_reason', 'merged_into', 'archived_by'] loop
    if to_jsonb(new) ->> col is not null
       and (tg_op = 'INSERT' or (to_jsonb(new) ->> col) is distinct from (to_jsonb(old) ->> col)) then
      raise exception 'user_cards.% can only be set by the server', col using errcode = '42501';
    end if;
  end loop;
  return new;
end;
$$;

drop trigger if exists user_cards_guard_archive_columns on public.user_cards;
create trigger user_cards_guard_archive_columns
  before insert or update on public.user_cards
  for each row execute function public.user_cards_guard_archive_columns();
