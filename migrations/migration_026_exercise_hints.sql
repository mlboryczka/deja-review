-- migration_026: how much of the hint showed, kept with each Spanish exercise answer (2026-11-07)
--
-- WHAT THIS IS FOR
--
-- The owner (2026-11-07), deciding later how Stats should count the Spanish
-- exercises and dialogues: "make sure everything is being logged properly",
-- then "Yes, record hints". Until now a hint was never kept, so an answer
-- typed after Hint had shown the whole answer looked just like one the
-- student knew.
--
-- WHAT THIS ADDS
--
-- es_exercise_answers.hints: how much of the hint showed when the answer was
-- checked. 0 is none, 1 the first letter of each word, 2 the first two, and
-- so on, until the whole answer shows (src/lib/exerciseMarking.js, hintText
-- and hintLevels). Exercises and Dialogues both. Empty (null) on every answer
-- kept before this, since nobody knows.
--
-- Nothing existing is changed, and the students' app never reads this table.
-- Until this is run, answers are still marked and kept, only without it.
-- Safe to run more than once.

alter table public.es_exercise_answers add column if not exists hints smallint;

-- So the app sees the new column at once.
notify pgrst, 'reload schema';
