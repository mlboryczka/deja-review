-- migration_036: every answer to the French Exercises and Dialogues (2026-11-25)
--
-- WHAT THIS IS FOR
--
-- The French Exercises and Dialogues (owner, 2026-11-25: "extend the spanish
-- dialogue and exercises modules to french"): the written exercises of each of
-- Laura Caufour's French sheets, and each lesson's text typed back into French
-- from the sheet's English. The same pages as the Spanish ones
-- (migration_022, 026, 027 and 030), with the answers kept in tables of their
-- own: French tables carry no prefix, as with every French table.
--
-- WHAT THIS ADDS
--
-- exercise_answers: one row per answer, as es_exercise_answers has them,
-- hints column included from the start. A Dialogues sentence is kept under a
-- key of its own ("dialogo-lecon8/1/5"), as in Spanish.
--   item_key      lesson/exercise/item, e.g. "lecon8/7/5"
--   prompt, typed the item as shown and the answer as one line
--   verdict       'right', 'almost' or 'wrong'
--   marked_by     'key', 'claude' or 'class'
--   note, correct Claude's sentence and the answer corrected
--   model, prompt_version  for Claude's marking
--   hints         how much of the hint showed (0 none), null where unknown
-- exercise_disputes: one row per press of "My answer should be accepted", as
-- es_exercise_disputes has them.
--
-- The server writes the rows with the service role; a student reads only
-- their own; nobody updates or deletes one. Nothing existing is changed: two
-- new, empty tables, which the students' app never reads. Until this is run,
-- the French pages still mark answers but say they aren't being kept.
-- Safe to run more than once.
create table if not exists public.exercise_answers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_key text not null,
  lesson text not null,
  prompt text not null,
  typed text not null,
  verdict text not null check (verdict in ('right', 'almost', 'wrong')),
  marked_by text not null check (marked_by in ('key', 'claude', 'class')),
  note text not null default '',
  correct text not null default '',
  model text,
  prompt_version text,
  hints smallint,
  answered_at timestamptz not null default now()
);

create index if not exists exercise_answers_user_time_idx
  on public.exercise_answers (user_id, answered_at);

alter table public.exercise_answers enable row level security;
drop policy if exists "read own exercise answers" on public.exercise_answers;
create policy "read own exercise answers" on public.exercise_answers
  for select to authenticated using (auth.uid() = user_id);
grant select on table public.exercise_answers to authenticated;
grant all on table public.exercise_answers to service_role;

create table if not exists public.exercise_disputes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  item_key text not null,
  lesson text not null,
  prompt text not null,
  typed text not null,
  marked text check (marked in ('right', 'almost', 'wrong')),
  review text check (review in ('accept', 'reject', 'uncertain')),
  reasoning text not null default '',
  accepted boolean not null,
  forced boolean not null default false,
  model text,
  prompt_version text,
  created_at timestamptz not null default now()
);

create index if not exists exercise_disputes_user_item_idx
  on public.exercise_disputes (user_id, item_key);

alter table public.exercise_disputes enable row level security;
drop policy if exists "read own exercise disputes" on public.exercise_disputes;
create policy "read own exercise disputes" on public.exercise_disputes
  for select to authenticated using (auth.uid() = user_id);
grant select on table public.exercise_disputes to authenticated;
grant all on table public.exercise_disputes to service_role;

-- So the app sees the new tables at once.
notify pgrst, 'reload schema';
