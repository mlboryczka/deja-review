-- migration_027: "My answer should be accepted" on the Spanish exercises and dialogues (2026-11-07)
--
-- WHAT THIS IS FOR
--
-- The owner (2026-11-07), of a Wrong on Dialogues: "instead of ask the tutor,
-- this should be the same my answer should be correct button as we have for
-- the flashcards". As on a card, pressing it has Claude look at the answer
-- again; if Claude agrees, or the student presses Accept anyway, the answer is
-- right, and the same answer to the same item is right from then on.
--
-- WHAT THIS ADDS
--
-- es_exercise_disputes: one row per press, whatever came of it, kept like
-- answer_reviews is for the cards.
--   item_key      the item, as in es_exercise_answers ("leccion12-1/9/18",
--                 "dialogo-leccion12-1/1/10")
--   prompt, typed the item as shown and the answer as kept
--   marked        how the app had marked it: 'almost' or 'wrong'
--   review        Claude's second look: 'accept', 'reject' or 'uncertain';
--                 empty for Accept anyway, which asks nobody
--   reasoning     Claude's sentence to the student
--   accepted      whether the answer is now right: Claude agreed, or the
--                 student pressed Accept anyway (forced)
--   model, prompt_version  for Claude's review, as in es_exercise_answers
--
-- The answer's own row in es_exercise_answers is never changed: the page shows
-- an accepted answer as Right, and the answer key takes it from then on.
-- The server writes the rows; a student reads only their own. Nothing
-- existing is changed, and the students' app never reads this table. Until
-- this is run, a press still works on the page, but nothing is kept. Safe to
-- run more than once.

create table if not exists public.es_exercise_disputes (
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

create index if not exists es_exercise_disputes_user_item_idx
  on public.es_exercise_disputes (user_id, item_key);

alter table public.es_exercise_disputes enable row level security;

drop policy if exists "read own exercise disputes" on public.es_exercise_disputes;
create policy "read own exercise disputes" on public.es_exercise_disputes
  for select to authenticated using (auth.uid() = user_id);

grant select on table public.es_exercise_disputes to authenticated;
grant all on table public.es_exercise_disputes to service_role;

-- So the app sees the new table at once.
notify pgrst, 'reload schema';
