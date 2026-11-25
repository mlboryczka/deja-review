-- migration_021: Spanish's own logs of Claude's marking and card corrections
-- (2026-10-22)
--
-- WHAT WAS MISSING
--
-- The owner asked that the Spanish module be logged and checked "just as"
-- the French one: Claude's verdicts on disputed answers (answer_reviews), and
-- the corrections log of card edits (parse_corrections). Those two tables are
-- read every day by the students' app (the re-test of Claude's marking, the
-- notes test, the status check), which knows only French: a Spanish verdict
-- there would be asked again as French, and a Spanish card's id (its own
-- numbering, es_user_cards) could be matched to a French card.
--
-- WHAT THIS ADDS
--
-- es_answer_reviews and es_parse_corrections, made LIKE the French ones, for
-- the Spanish module's rows only. The students' app never reads them. As on
-- the French tables, only the server writes and reads them (the service
-- role): row-level security is on, with no policy for anyone else. Safe to
-- run more than once.

create table if not exists public.es_answer_reviews (like public.answer_reviews including all);
create table if not exists public.es_parse_corrections (like public.parse_corrections including all);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'es_answer_reviews_user_fk') then
    alter table public.es_answer_reviews add constraint es_answer_reviews_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
end $$;

alter table public.es_answer_reviews enable row level security;
alter table public.es_parse_corrections enable row level security;

grant all on table public.es_answer_reviews, public.es_parse_corrections to service_role;
