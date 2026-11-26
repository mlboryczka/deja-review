-- migration_037: the test of how the app marks the owner's Spanish answers (2026-11-26)
--
-- WHAT THIS IS FOR
--
-- The first test of the evaluation harness for Spanish
-- (api/_lib/markingChecks.js): the server re-marks the owner's disputed
-- Exercises and Dialogues answers and the class sentences he decided himself,
-- the way the app marks them, and compares with his calls. Each run is kept in
-- eval_runs, like the other tests of Claude's work, under the kind 'marks'.
--
-- WHAT THIS CHANGES
--
-- eval_runs.kind may now be 'marks' as well as 'answers', 'notes' and
-- 'repeats'. Nothing else changes, and nothing is deleted. Until this is run
-- the test does nothing and asks Claude nothing. Safe to run more than once.

do $$
begin
  if to_regclass('public.eval_runs') is not null then
    alter table public.eval_runs drop constraint if exists eval_runs_kind_check;
    alter table public.eval_runs add constraint eval_runs_kind_check
      check (kind in ('answers', 'notes', 'repeats', 'marks'));
  end if;
end;
$$;

notify pgrst, 'reload schema';
