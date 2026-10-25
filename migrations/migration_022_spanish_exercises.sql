-- migration_022: every answer to the Spanish exercises (2026-10-24)
--
-- WHAT THIS IS FOR
--
-- The Spanish module's Exercises (owner, 2026-10-24: "create a new module
-- only in the spanish module for quizzing me on the exercises you put
-- together for each lesson"): the written exercises of each lesson's sheet,
-- answered one item at a time and marked against the answer key, or by
-- Claude when the key doesn't have the answer.
--
-- WHAT THIS ADDS
--
-- es_exercise_answers: one row per answer, kept like card_reviews and
-- podcast_answers, so the app can learn the student's level from them. An
-- item's state on the page is its latest answer; trying an item again adds
-- a row and never changes the earlier one.
--   item_key      lesson/exercise/item, e.g. "leccion1/2/5"
--   prompt        the item as shown, so the row stands alone if the
--                 exercises are ever rewritten
--   typed         the answer as one line: the blanks filled in brackets
--                 ("Yo [soy] estadounidense…"), or "Verdadero. …"
--   verdict       'right', 'almost' (right but for an accent or a small slip)
--                 or 'wrong'
--   marked_by     'key' (it matched the answer key) or 'claude'
--   note, correct Claude's sentence to the student, and their answer
--                 corrected (empty when the key marked it)
--   model, prompt_version  for Claude's marking, as in podcast_answers
--
-- The server writes the rows with the service role; a student reads only
-- their own; nobody updates or deletes one. Nothing existing is changed: one
-- new, empty table, which the students' app never reads. Until this is run,
-- the Exercises page still marks answers but says they aren't being kept.
-- Safe to run more than once.

create table if not exists public.es_exercise_answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_key text not null,
  lesson text not null,
  prompt text not null,
  typed text not null,
  verdict text not null check (verdict in ('right', 'almost', 'wrong')),
  marked_by text not null check (marked_by in ('key', 'claude')),
  note text not null default '',
  correct text not null default '',
  model text,
  prompt_version text,
  answered_at timestamptz not null default now()
);

create index if not exists es_exercise_answers_user_time_idx
  on public.es_exercise_answers (user_id, answered_at);

alter table public.es_exercise_answers enable row level security;

drop policy if exists "read own exercise answers" on public.es_exercise_answers;
create policy "read own exercise answers" on public.es_exercise_answers
  for select to authenticated using (auth.uid() = user_id);

grant select on table public.es_exercise_answers to authenticated;
grant all on table public.es_exercise_answers to service_role;
