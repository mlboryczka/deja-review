-- migration_033: drop a lookup nothing uses (2026-11-25)
--
-- WHAT WAS MISSING
--
-- card_alternates has had a lookup by card alone since the first schema, for
-- French and (copied by migration_020) for Spanish. Nothing reads by card
-- alone: the one read filters on the account, and both writes use the full
-- unique key of account, card, direction and answer. The lookup only slows
-- each saved accepted answer a little.
--
-- WHAT THIS DOES
--
-- Drops, if it is there, the non-unique lookup on card_id alone from
-- card_alternates and from es_card_alternates. No row is touched, and the
-- unique rule against a repeated accepted answer stays. A fresh build from
-- supabase/schema.sql now holds that rule once. Safe to run more than once.

do $$
declare r record;
begin
  for r in
    select schemaname, indexname from pg_indexes
     where schemaname = 'public'
       and tablename in ('card_alternates', 'es_card_alternates')
       and indexdef ~ 'USING btree \(card_id\)$'
       and indexdef not like 'CREATE UNIQUE%'
  loop
    execute format('drop index if exists %I.%I', r.schemaname, r.indexname);
  end loop;
end $$;
