-- migration_023: the Spanish caderno, linked (2026-11-02)
--
-- WHAT THIS IS FOR
--
-- The owner's Spanish class notes with Laura are a Google Doc, the caderno
-- ("Caderno español"). On 2026-10-27 its classes of 8 to 27 October were put
-- into the Spanish deck by hand; the owner then asked for it to keep itself
-- up to date, as the French cahier link does ("Yes, build it"). Each class
-- Laura adds becomes Spanish cards on its own (api/cahier-sync.js with
-- course "es").
--
-- WHAT THIS ADDS
--
-- es_cahier_links   the linked caderno, one per student, like cahier_links
--                   (migration_011)
-- es_notes_read     what of the caderno has been read, line by line, like
--                   notes_read (migration_016)
-- claim_es_notes_reading, save_es_notes_reading
--                   migration_016's two functions, word for word, on the
--                   Spanish tables, with one step left out: Claude's verdicts
--                   on look-alike cards aren't kept, because card_pairs holds
--                   French cards and the owner's checks read it as French.
--
-- Nothing existing is changed: no French card, link or record is touched.
-- Run it once in Supabase's SQL editor; running it again is safe. Until it
-- is run, linking the caderno says this migration is needed, and nothing
-- else in the app changes.

create table if not exists public.es_cahier_links (like public.cahier_links including all);
create table if not exists public.es_notes_read (like public.notes_read including all);

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'es_cahier_links_user_fk') then
    alter table public.es_cahier_links add constraint es_cahier_links_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'es_notes_read_user_fk') then
    alter table public.es_notes_read add constraint es_notes_read_user_fk
      foreign key (user_id) references auth.users(id) on delete cascade;
  end if;
end;
$$;

alter table public.es_cahier_links enable row level security;
alter table public.es_notes_read enable row level security;

-- The app reads, makes and removes its own link, as with cahier_links. The
-- record of lines read is the server's alone, as notes_read is.
drop policy if exists "Users can read own caderno link" on public.es_cahier_links;
create policy "Users can read own caderno link"
  on public.es_cahier_links for select
  using (auth.uid() = user_id);

drop policy if exists "Users can link own caderno" on public.es_cahier_links;
create policy "Users can link own caderno"
  on public.es_cahier_links for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own caderno link" on public.es_cahier_links;
create policy "Users can update own caderno link"
  on public.es_cahier_links for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can unlink own caderno" on public.es_cahier_links;
create policy "Users can unlink own caderno"
  on public.es_cahier_links for delete
  using (auth.uid() = user_id);

drop function if exists public.claim_es_notes_reading(uuid, uuid, text, integer);

create or replace function public.claim_es_notes_reading(
  p_user_id uuid,
  p_run_id uuid,
  p_kind text,
  p_lease_seconds integer default 600,
  -- true: only renew this run's own turn, never take a free one
  p_renew boolean default false
) returns jsonb
language plpgsql
set search_path = public
as $$
declare
  r public.es_notes_read%rowtype;
begin
  insert into public.es_notes_read (user_id) values (p_user_id)
    on conflict (user_id) do nothing;

  -- Ours already, or (for a new run) free or run out: take it. Two runs
  -- asking at once queue on the row, and the second finds it taken. A run
  -- renewing its turn finds it gone if another reading took it, even one that
  -- has finished since: the record may have changed under it.
  update public.es_notes_read
     set run_id = p_run_id,
         run_kind = p_kind,
         run_started_at = case when run_id = p_run_id then run_started_at else now() end,
         run_expires_at = now() + make_interval(secs => greatest(coalesce(p_lease_seconds, 600), 30))
   where user_id = p_user_id
     and (run_id = p_run_id
          or (not coalesce(p_renew, false)
              and (run_id is null or run_expires_at is null or run_expires_at < now())))
  returning * into r;

  if not found then
    select * into r from public.es_notes_read where user_id = p_user_id;
    return jsonb_build_object('claimed', false, 'run_kind', r.run_kind,
      'run_started_at', r.run_started_at, 'run_expires_at', r.run_expires_at);
  end if;
  return jsonb_build_object('claimed', true, 'classes', r.classes);
end;
$$;

create or replace function public.save_es_notes_reading(
  p_user_id uuid,
  p_run_id uuid,
  -- [{front, back, category, dates, source, batch_id}]
  p_inserts jsonb default '[]'::jsonb,
  -- [{id, dates}]: class dates to add to cards the student already has
  p_dates jsonb default '[]'::jsonb,
  -- [{id, reason}]: cards to take out of study
  p_archive jsonb default '[]'::jsonb,
  -- [id]: cards "Replace" took out, to bring back
  p_restore jsonb default '[]'::jsonb,
  -- Claude's verdicts: not kept for Spanish (see above)
  p_pairs jsonb default '[]'::jsonb,
  -- the whole record of lines read; null leaves it as it is
  p_classes jsonb default null,
  -- give the turn back
  p_finish boolean default true
) returns jsonb
language plpgsql
set search_path = public
as $$
declare
  v_inserted integer := 0;
  v_joined integer := 0;
  v_dated integer := 0;
  v_archived integer := 0;
  v_restored integer := 0;
  v_refused jsonb := '[]'::jsonb;
  v_fresh boolean;
  v_card record;
begin
  -- Only the run whose turn it is may save. One that ran out of time and lost
  -- its turn saves nothing.
  perform 1 from public.es_notes_read
    where user_id = p_user_id and run_id = p_run_id
    for update;
  if not found then
    raise exception 'This reading of the notes lost its turn: another one started after it ran out of time.'
      using errcode = 'NR409';
  end if;

  -- New cards. A card that already holds the same Spanish (written meanwhile
  -- by something else) only gains the class dates: nothing about it is
  -- written over.
  --
  -- All at once, and if the database refuses any card (a Spanish side too
  -- long for the deck's index, say), one at a time: the others are saved and
  -- the refused ones named in the reply. Both happen inside this one step, so
  -- a refused card can never leave the rest saved and the lines unread. That
  -- used to be possible, and the next reading then added Claude's new
  -- spellings beside the saved cards.
  begin
    with incoming as (
      select x.front, x.back, coalesce(x.category, 'V') as category,
             coalesce(x.dates, '[]'::jsonb) as dates, x.source, x.batch_id
      from jsonb_to_recordset(coalesce(p_inserts, '[]'::jsonb))
        as x(front text, back text, category text, dates jsonb, source text, batch_id uuid)
    ), written as (
      insert into public.es_user_cards as c (user_id, front, back, category, dates, source, batch_id)
      select p_user_id, front, back, category, dates, source, batch_id from incoming
      on conflict (user_id, front) do update
        set dates = (select coalesce(jsonb_agg(d order by d), '[]'::jsonb)
                     from (select distinct jsonb_array_elements_text(c.dates || excluded.dates) as d) s)
      returning (xmax = 0) as fresh
    )
    select count(*) filter (where fresh), count(*) filter (where not fresh)
      into v_inserted, v_joined
      from written;
  exception
    when data_exception or integrity_constraint_violation or program_limit_exceeded or cardinality_violation then
      v_inserted := 0;
      v_joined := 0;
      for v_card in
        select r.front, r.back, coalesce(r.category, 'V') as category,
               coalesce(r.dates, '[]'::jsonb) as dates, r.source, r.batch_id
        from jsonb_to_recordset(coalesce(p_inserts, '[]'::jsonb))
          as r(front text, back text, category text, dates jsonb, source text, batch_id uuid)
      loop
        begin
          insert into public.es_user_cards as c (user_id, front, back, category, dates, source, batch_id)
          values (p_user_id, v_card.front, v_card.back, v_card.category, v_card.dates, v_card.source, v_card.batch_id)
          on conflict (user_id, front) do update
            set dates = (select coalesce(jsonb_agg(d order by d), '[]'::jsonb)
                         from (select distinct jsonb_array_elements_text(c.dates || excluded.dates) as d) s)
          returning (xmax = 0) into v_fresh;
          if v_fresh then v_inserted := v_inserted + 1; else v_joined := v_joined + 1; end if;
        exception
          when data_exception or integrity_constraint_violation or program_limit_exceeded or cardinality_violation then
            v_refused := v_refused || jsonb_build_array(
              jsonb_build_object('front', v_card.front, 'error', sqlerrm, 'code', sqlstate));
        end;
      end loop;
  end;

  -- Class dates added to cards the student already has.
  with u as (
    select x.id, x.dates
    from jsonb_to_recordset(coalesce(p_dates, '[]'::jsonb)) as x(id bigint, dates jsonb)
  ), done as (
    update public.es_user_cards c
       set dates = (select coalesce(jsonb_agg(d order by d), '[]'::jsonb)
                    from (select distinct jsonb_array_elements_text(c.dates || u.dates) as d) s)
      from u
     where c.id = u.id and c.user_id = p_user_id
    returning c.id
  )
  select count(*) into v_dated from done;

  -- Out of study, kept, with the reason. "Replace" never takes out a card
  -- the student has answered, either way round, whatever the classes say
  -- (src/lib/replaceDeck.js decides the same; this holds even if it didn't).
  with a as (
    select x.id, x.reason
    from jsonb_to_recordset(coalesce(p_archive, '[]'::jsonb)) as x(id bigint, reason text)
  ), done as (
    update public.es_user_cards c
       set source = 'archived:' || coalesce(c.source, ''),
           archived_reason = a.reason,
           archived_at = now()
      from a
     where c.id = a.id and c.user_id = p_user_id
       and (c.source is null or c.source not like 'archived:%')
       and (a.reason is distinct from 'replaced'
            or (coalesce(c.fsrs_state, 0) = 0 and coalesce(c.en_fsrs_state, 0) = 0
                and coalesce(c.reps, 0) = 0 and coalesce(c.en_reps, 0) = 0
                and c.last_review is null and c.en_last_review is null))
    returning c.id
  )
  select count(*) into v_archived from done;

  -- Back into study: only cards a Replace took out.
  with done as (
    update public.es_user_cards c
       set source = nullif(substr(c.source, 10), ''),
           archived_reason = null,
           archived_at = null
     where c.user_id = p_user_id
       and c.id in (select (jsonb_array_elements_text(coalesce(p_restore, '[]'::jsonb)))::bigint)
       and c.source like 'archived:%'
       and c.archived_reason = 'replaced'
    returning c.id
  )
  select count(*) into v_restored from done;

  -- The record of lines read, and the turn.
  update public.es_notes_read
     set classes = coalesce(p_classes, classes),
         run_id = case when p_finish then null else run_id end,
         run_kind = case when p_finish then null else run_kind end,
         run_expires_at = case when p_finish then null else run_expires_at end,
         updated_at = now()
   where user_id = p_user_id;

  return jsonb_build_object('inserted', v_inserted, 'joined', v_joined, 'dated', v_dated,
    'archived', v_archived, 'restored', v_restored, 'refused', v_refused);
end;
$$;

grant select, insert, update, delete on table public.es_cahier_links to authenticated;
grant all on table public.es_cahier_links, public.es_notes_read to service_role;

revoke all on function public.claim_es_notes_reading(uuid, uuid, text, integer, boolean) from public, anon, authenticated;
revoke all on function public.save_es_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) from public, anon, authenticated;
grant execute on function public.claim_es_notes_reading(uuid, uuid, text, integer, boolean) to service_role;
grant execute on function public.save_es_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) to service_role;

notify pgrst, 'reload schema';
