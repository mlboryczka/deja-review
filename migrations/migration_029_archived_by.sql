-- migration_029: which put-away repeats were the daily run's own (2026-11-25)
--
-- WHAT WAS MISSING
--
-- The test of Claude's same-or-different question about look-alike cards must
-- check Claude only against repeats the owner approved (the 2026-10-06
-- clean-up). Since 2026-10-12 the daily run also puts away a repeat on
-- Claude's own verdict, and nothing marked those rows apart, so the test told
-- them apart by date (12 October on). A date is not exact.
--
-- WHAT THIS ADDS
--
-- 1. user_cards.archived_by: 'daily-run' on a card the daily run put away as a
--    repeat on Claude's verdict. Empty on every other card, including each
--    card the owner approved in the clean-up.
-- 2. The rows already put away by the daily run (reason "duplicate", on or
--    after 2026-10-12) are marked 'daily-run'. Nothing else about them, and
--    nothing about any card in study, changes. No answer, schedule or place
--    in a set is touched.
-- 3. A card that comes back (its source no longer starts "archived:") loses
--    archived_by along with its reason and time, as migration_016 does.
--
-- Until this is run the test keeps using the date. Safe to run more than once.

alter table public.user_cards add column if not exists archived_by text;

update public.user_cards
   set archived_by = 'daily-run'
 where archived_reason = 'duplicate'
   and archived_by is null
   and archived_at >= '2026-10-12'::timestamptz;

create or replace function public.user_cards_clear_archived_reason()
returns trigger
language plpgsql
as $$
begin
  if new.source is null or new.source not like 'archived:%' then
    new.archived_reason := null;
    new.archived_at := null;
    new.archived_by := null;
  end if;
  return new;
end;
$$;
