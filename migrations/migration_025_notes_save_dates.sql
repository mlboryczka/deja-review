-- migration_025: the French notes save, for the deck's real date column (2026-11-07)
--
-- The live deck keeps a card's class dates as text[], while supabase/schema.sql
-- said jsonb, and migration_016's save_notes_reading was written for the schema
-- file. On the live database every call has failed since 2026-10-07: "column
-- dates is of type text[] but expression is of type jsonb". The owner's linked
-- cahier has saved nothing since 2026-10-06, and an upload's save fails the same
-- way. The owner (2026-11-07), of this and the same fault in Spanish: "yes fix
-- both". This is the same function with its dates handled as text[]; nothing
-- else about it changes. No card is touched by running it. The next reading of
-- the notes then saves, so the classes it could not save become cards. Running
-- it again is safe.

create or replace function public.save_notes_reading(
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
  -- Claude's verdicts, as card_pairs rows; a new card is named by its front
  -- (a_new_front, b_new_front) and its id looked up once it is saved
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
  v_pairs integer := 0;
  v_refused jsonb := '[]'::jsonb;
  v_fresh boolean;
  v_card record;
begin
  -- Only the run whose turn it is may save. One that ran out of time and lost
  -- its turn saves nothing.
  perform 1 from public.notes_read
    where user_id = p_user_id and run_id = p_run_id
    for update;
  if not found then
    raise exception 'This reading of the notes lost its turn: another one started after it ran out of time.'
      using errcode = 'NR409';
  end if;

  -- New cards. A card that already holds the same French (written meanwhile
  -- by something else) only gains the class dates: nothing about it is
  -- written over.
  --
  -- All at once, and if the database refuses any card (a French side too
  -- long for the deck's index, say), one at a time: the others are saved and
  -- the refused ones named in the reply. Both happen inside this one step, so
  -- a refused card can never leave the rest saved and the lines unread. That
  -- used to be possible, and the next reading then added Claude's new
  -- spellings beside the saved cards.
  begin
    with incoming as (
      select x.front, x.back, coalesce(x.category, 'V') as category,
             array(select jsonb_array_elements_text(coalesce(x.dates, '[]'::jsonb))) as dates, x.source, x.batch_id
      from jsonb_to_recordset(coalesce(p_inserts, '[]'::jsonb))
        as x(front text, back text, category text, dates jsonb, source text, batch_id uuid)
    ), written as (
      insert into public.user_cards as c (user_id, front, back, category, dates, source, batch_id)
      select p_user_id, front, back, category, dates, source, batch_id from incoming
      on conflict (user_id, front) do update
        set dates = (select coalesce(array_agg(d order by d), '{}'::text[])
                     from (select distinct unnest(c.dates || excluded.dates) as d) s)
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
               array(select jsonb_array_elements_text(coalesce(r.dates, '[]'::jsonb))) as dates, r.source, r.batch_id
        from jsonb_to_recordset(coalesce(p_inserts, '[]'::jsonb))
          as r(front text, back text, category text, dates jsonb, source text, batch_id uuid)
      loop
        begin
          insert into public.user_cards as c (user_id, front, back, category, dates, source, batch_id)
          values (p_user_id, v_card.front, v_card.back, v_card.category, v_card.dates, v_card.source, v_card.batch_id)
          on conflict (user_id, front) do update
            set dates = (select coalesce(array_agg(d order by d), '{}'::text[])
                         from (select distinct unnest(c.dates || excluded.dates) as d) s)
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
    select x.id, array(select jsonb_array_elements_text(coalesce(x.dates, '[]'::jsonb))) as dates
    from jsonb_to_recordset(coalesce(p_dates, '[]'::jsonb)) as x(id bigint, dates jsonb)
  ), done as (
    update public.user_cards c
       set dates = (select coalesce(array_agg(d order by d), '{}'::text[])
                    from (select distinct unnest(c.dates || u.dates) as d) s)
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
    update public.user_cards c
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
    update public.user_cards c
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

  -- Claude's verdicts.
  insert into public.card_pairs
    (user_id, card_a, card_b, a_front, a_back, b_front, b_back, verdict, version, model, source)
  select p_user_id,
         coalesce(x.card_a, (select c.id from public.user_cards c where c.user_id = p_user_id and c.front = x.a_new_front)),
         coalesce(x.card_b, (select c.id from public.user_cards c where c.user_id = p_user_id and c.front = x.b_new_front)),
         x.a_front, x.a_back, x.b_front, x.b_back, x.verdict, x.version, x.model, x.source
    from jsonb_to_recordset(coalesce(p_pairs, '[]'::jsonb))
      as x(card_a bigint, a_new_front text, card_b bigint, b_new_front text,
           a_front text, a_back text, b_front text, b_back text,
           verdict text, version text, model text, source text)
   where x.verdict in ('same', 'different')
     and (x.card_a is null or exists (select 1 from public.user_cards c where c.id = x.card_a and c.user_id = p_user_id));
  get diagnostics v_pairs = row_count;

  -- The record of lines read, and the turn.
  update public.notes_read
     set classes = coalesce(p_classes, classes),
         run_id = case when p_finish then null else run_id end,
         run_kind = case when p_finish then null else run_kind end,
         run_expires_at = case when p_finish then null else run_expires_at end,
         updated_at = now()
   where user_id = p_user_id;

  return jsonb_build_object('inserted', v_inserted, 'joined', v_joined, 'dated', v_dated,
    'archived', v_archived, 'restored', v_restored, 'pairs', v_pairs, 'refused', v_refused);
end;
$$;

revoke all on function public.save_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) from public, anon, authenticated;
grant execute on function public.save_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) to service_role;

notify pgrst, 'reload schema';
