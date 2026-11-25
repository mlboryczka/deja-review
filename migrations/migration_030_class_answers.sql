-- migration_030: Spanish answers from the owner's live classes with Laura (2026-11-25)
--
-- WHAT THIS IS FOR
--
-- The owner (2026-11-25) wants the exercises and dialogues done in his live
-- Spanish classes with Laura, recorded in Wispr, to count on Spanish Stats.
-- Each night the morning review reads a new class, marks each sentence from
-- Laura's reaction and the answer key, and asks him about the sentences where
-- the two disagree. Once he has marked those, every sentence of the class is
-- kept as an answer in es_exercise_answers.
--
-- WHAT THIS CHANGES
--
-- es_exercise_answers.marked_by may now be 'class' as well as 'key' and
-- 'claude'. A 'class' row is one sentence said in class: typed is what the
-- recording heard him say, verdict is 'right' or 'wrong' as settled from
-- Laura and the key (or by the owner), answered_at is the class's date and
-- time, and hints is 0. Stats keeps a class row's verdict as it is and never
-- re-marks it against the key (src/lib/spanishMastery.js).
--
-- The class date needs no new column: answered_at holds it.
--
-- Nothing existing is changed: no row is touched. The Exercises and Dialogues
-- pages leave class rows out (src/lib/exerciseApi.js), so only Stats shows
-- them. Safe to run more than once.

alter table public.es_exercise_answers
  drop constraint if exists es_exercise_answers_marked_by_check;
alter table public.es_exercise_answers
  add constraint es_exercise_answers_marked_by_check
  check (marked_by in ('key', 'claude', 'class'));

-- So the app sees the change at once.
notify pgrst, 'reload schema';
