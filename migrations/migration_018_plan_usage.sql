-- migration_018: how much of Supabase's free plan the app uses (2026-10-14)
--
-- WHAT WAS MISSING
--
-- The owner asked the morning check to say when it's time to consider a paid
-- Vercel or Supabase plan. Supabase's free plan holds 500 MB of database and
-- 1 GB of stored files; past the first the database stops taking writes, so
-- students' answers would stop saving. Nothing the morning check could read
-- said how much is used: the size is only known inside Postgres.
--
-- WHAT THIS ADDS
--
-- One function, plan_usage(), that reads both sizes and changes nothing.
-- Only the server's key may call it. scripts/status-check.mjs --everyone
-- reads it each morning and raises it once past 80%, and again past 95%.
--
-- Adds a function only; renames and drops nothing, so it is safe while the
-- testing branch holds unreleased work.

create or replace function public.plan_usage()
returns json
language sql
stable
security definer
set search_path = pg_catalog, public
as $$
  select json_build_object(
    'database_bytes', pg_database_size(current_database()),
    'storage_bytes', coalesce((select sum((o.metadata->>'size')::bigint) from storage.objects o), 0)
  );
$$;

revoke all on function public.plan_usage() from public, anon, authenticated;
grant execute on function public.plan_usage() to service_role;
