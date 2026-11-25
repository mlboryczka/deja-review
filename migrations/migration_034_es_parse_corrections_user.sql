-- migration_034: link Spanish card corrections to accounts (2026-11-25)
--
-- WHAT WAS MISSING
--
-- es_parse_corrections (migration_021) is the one Spanish table with no link
-- from user_id to auth.users, while the French parse_corrections has one
-- (migration_002, on delete set null).
--
-- WHAT THIS ADDS
--
-- That same link, es_parse_corrections_user_fk: if an account is ever
-- deleted, its correction rows stay with an empty user_id. It is added for
-- new rows first and then checked against the rows already there; if a row
-- names an account that does not exist, the check is skipped and the link
-- still guards new rows. No row is changed. Safe to run more than once.

do $$
begin
  if to_regclass('public.es_parse_corrections') is not null
     and not exists (select 1 from pg_constraint where conname = 'es_parse_corrections_user_fk') then
    alter table public.es_parse_corrections add constraint es_parse_corrections_user_fk
      foreign key (user_id) references auth.users(id) on delete set null not valid;
    begin
      alter table public.es_parse_corrections validate constraint es_parse_corrections_user_fk;
    exception when foreign_key_violation then
      raise notice 'es_parse_corrections has rows naming accounts that do not exist; the link guards new rows only';
    end;
  end if;
end $$;
