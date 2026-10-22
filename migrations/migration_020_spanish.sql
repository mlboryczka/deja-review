-- migration_020: the Spanish module's own deck (2026-10-22)
--
-- WHAT WAS MISSING
--
-- The owner asked for a Spanish module: the 23-lesson Latin American Spanish
-- course (adapted from Laura Caufour's LFL METHOD) as lessons in the app,
-- studied the way the French lessons are. A Spanish card can't live in
-- user_cards: the students' app, the morning check, the cahier sync, the
-- repeat clean-up and the daily FSRS fit all read that table as the French
-- deck, so a Spanish card there would come up in French study and be judged
-- as French.
--
-- WHAT THIS ADDS
--
-- The Spanish deck, in tables of its own with the same columns as the
-- French ones, so the app's study code runs on them unchanged (it only
-- swaps the table names, src/lib/course.js). Nothing existing is changed or
-- read differently: the students' app never sees these tables.
--
--   es_user_cards        the Spanish cards, like user_cards. Inside the app
--                        the Spanish side of a card is the "fr" side (the
--                        side in the language being learned): columns,
--                        directions and code keep that name.
--   es_card_reviews      every answer to a Spanish card, like card_reviews
--   es_dealt_sets        every set of Spanish cards dealt, like dealt_sets
--   es_user_review_dates the days Spanish was studied, like user_review_dates
--   es_card_progress     the old per-card tally, like card_progress
--   es_card_alternates   answers accepted after "my answer should be
--                        accepted", like card_alternates
--
-- Each is made LIKE its French table, which copies the columns, defaults,
-- checks and indexes (the unique (user_id, front) the lesson sync upserts
-- on included), but not foreign keys, policies or triggers, which are added
-- below. Safe to run more than once.

create table if not exists public.es_user_cards (like public.user_cards including all);
alter table public.es_user_cards add column if not exists archived_reason text;
alter table public.es_user_cards add column if not exists archived_at timestamptz;
alter table public.es_user_cards add column if not exists merged_into bigint;
alter table public.es_user_cards add column if not exists said_per_million real;
alter table public.es_user_cards add column if not exists said_counted_at timestamptz;
alter table public.es_user_cards add column if not exists flagged_at timestamptz;

create table if not exists public.es_card_reviews (like public.card_reviews including all);
create table if not exists public.es_dealt_sets (like public.dealt_sets including all);
create table if not exists public.es_user_review_dates (like public.user_review_dates including all);
create table if not exists public.es_card_progress (like public.card_progress including all);
create table if not exists public.es_card_alternates (like public.card_alternates including all);

-- Foreign keys: whose rows they are, and a card's answers go with the card
-- (as card_reviews' do: the app never deletes an answered card).
do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'es_user_cards_user_fk') then
    alter table public.es_user_cards add constraint es_user_cards_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_user_cards_merged_fk') then
    alter table public.es_user_cards add constraint es_user_cards_merged_fk
      foreign key (merged_into) references public.es_user_cards(id) on delete set null;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_card_reviews_user_fk') then
    alter table public.es_card_reviews add constraint es_card_reviews_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_card_reviews_card_fk') then
    alter table public.es_card_reviews add constraint es_card_reviews_card_fk
      foreign key (card_id) references public.es_user_cards(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_dealt_sets_user_fk') then
    alter table public.es_dealt_sets add constraint es_dealt_sets_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_user_review_dates_user_fk') then
    alter table public.es_user_review_dates add constraint es_user_review_dates_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_card_progress_user_fk') then
    alter table public.es_card_progress add constraint es_card_progress_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_card_alternates_user_fk') then
    alter table public.es_card_alternates add constraint es_card_alternates_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
end $$;

-- A card back in study no longer says why it was out (migration_016's
-- trigger, on the Spanish cards).
drop trigger if exists es_user_cards_clear_archived_reason on public.es_user_cards;
create trigger es_user_cards_clear_archived_reason
  before update of source on public.es_user_cards
  for each row execute function public.user_cards_clear_archived_reason();

-- Row-level security: each student reads and writes only their own rows,
-- exactly as on the French tables.
alter table public.es_user_cards enable row level security;
alter table public.es_card_reviews enable row level security;
alter table public.es_dealt_sets enable row level security;
alter table public.es_user_review_dates enable row level security;
alter table public.es_card_progress enable row level security;
alter table public.es_card_alternates enable row level security;

drop policy if exists "Users can read own cards" on public.es_user_cards;
create policy "Users can read own cards" on public.es_user_cards
  for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own cards" on public.es_user_cards;
create policy "Users can insert own cards" on public.es_user_cards
  for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update own cards" on public.es_user_cards;
create policy "Users can update own cards" on public.es_user_cards
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
drop policy if exists "Users can delete own cards" on public.es_user_cards;
create policy "Users can delete own cards" on public.es_user_cards
  for delete using (auth.uid() = user_id);

-- No delete policy, as on card_reviews: the record of answers is not
-- something the app removes.
drop policy if exists "Users can read own reviews" on public.es_card_reviews;
create policy "Users can read own reviews" on public.es_card_reviews
  for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own reviews" on public.es_card_reviews;
create policy "Users can insert own reviews" on public.es_card_reviews
  for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update own reviews" on public.es_card_reviews;
create policy "Users can update own reviews" on public.es_card_reviews
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users can read own dealt sets" on public.es_dealt_sets;
create policy "Users can read own dealt sets" on public.es_dealt_sets
  for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own dealt sets" on public.es_dealt_sets;
create policy "Users can insert own dealt sets" on public.es_dealt_sets
  for insert with check (auth.uid() = user_id);

drop policy if exists "Users can read own review dates" on public.es_user_review_dates;
create policy "Users can read own review dates" on public.es_user_review_dates
  for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own review dates" on public.es_user_review_dates;
create policy "Users can insert own review dates" on public.es_user_review_dates
  for insert with check (auth.uid() = user_id);
drop policy if exists "Users can delete own review dates" on public.es_user_review_dates;
create policy "Users can delete own review dates" on public.es_user_review_dates
  for delete using (auth.uid() = user_id);

drop policy if exists "Users can read own progress" on public.es_card_progress;
create policy "Users can read own progress" on public.es_card_progress
  for select using (auth.uid() = user_id);
drop policy if exists "Users can insert own progress" on public.es_card_progress;
create policy "Users can insert own progress" on public.es_card_progress
  for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update own progress" on public.es_card_progress;
create policy "Users can update own progress" on public.es_card_progress
  for update using (auth.uid() = user_id);
drop policy if exists "Users can delete own progress" on public.es_card_progress;
create policy "Users can delete own progress" on public.es_card_progress
  for delete using (auth.uid() = user_id);

drop policy if exists "Users read their own alternates" on public.es_card_alternates;
create policy "Users read their own alternates" on public.es_card_alternates
  for select using (auth.uid() = user_id);
drop policy if exists "Users manage their own alternates" on public.es_card_alternates;
create policy "Users manage their own alternates" on public.es_card_alternates
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

grant select, insert, update, delete on table
  public.es_user_cards, public.es_card_reviews, public.es_dealt_sets,
  public.es_user_review_dates, public.es_card_progress, public.es_card_alternates
  to authenticated;
grant all on table
  public.es_user_cards, public.es_card_reviews, public.es_dealt_sets,
  public.es_user_review_dates, public.es_card_progress, public.es_card_alternates
  to service_role;
