-- migration_024: the caderno's save, for the deck's real date column (2026-11-07)
--
-- The first read of the caderno failed on the live database: "column dates is
-- of type text[] but expression is of type jsonb". The live deck keeps a card's
-- class dates as text[], while supabase/schema.sql says jsonb, and migration_023
-- copied migration_016's function, written for the schema file. This replaces
-- the Spanish save with one for text[], and leaves out the two steps the caderno
-- never uses (taking cards out of study and bringing them back), which refuse
-- to run rather than do nothing. Nothing else changes, and no card is touched.
-- Running it again is safe.

create or replace function public.save_es_notes_reading(
  p_user_id uuid,
  p_run_id uuid,
  -- [{front, back, category, dates, source, batch_id}]
  p_inserts jsonb default '[]'::jsonb,
  -- [{id, dates}]: class dates to add to cards the student already has
  p_dates jsonb default '[]'::jsonb,
  -- not used by the caderno
  p_archive jsonb default '[]'::jsonb,
  p_restore jsonb default '[]'::jsonb,
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
  v_refused jsonb := '[]'::jsonb;
  v_fresh boolean;
  v_card record;
begin
  if jsonb_array_length(coalesce(p_archive, '[]'::jsonb)) > 0 or jsonb_array_length(coalesce(p_restore, '[]'::jsonb)) > 0 then
    raise exception 'The caderno never takes cards out of study.';
  end if;

  -- Only the run whose turn it is may save.
  perform 1 from public.es_notes_read
    where user_id = p_user_id and run_id = p_run_id
    for update;
  if not found then
    raise exception 'This reading of the notes lost its turn: another one started after it ran out of time.'
      using errcode = 'NR409';
  end if;

  -- New cards. A card that already holds the same Spanish only gains the class
  -- dates. All at once, and if the database refuses any card, one at a time:
  -- the others are saved and the refused ones named in the reply.
  begin
    with incoming as (
      select x.front, x.back, coalesce(x.category, 'V') as category,
             array(select jsonb_array_elements_text(coalesce(x.dates, '[]'::jsonb))) as dates, x.source, x.batch_id
      from jsonb_to_recordset(coalesce(p_inserts, '[]'::jsonb))
        as x(front text, back text, category text, dates jsonb, source text, batch_id uuid)
    ), written as (
      insert into public.es_user_cards as c (user_id, front, back, category, dates, source, batch_id)
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
          insert into public.es_user_cards as c (user_id, front, back, category, dates, source, batch_id)
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
    update public.es_user_cards c
       set dates = (select coalesce(array_agg(d order by d), '{}'::text[])
                    from (select distinct unnest(c.dates || u.dates) as d) s)
      from u
     where c.id = u.id and c.user_id = p_user_id
    returning c.id
  )
  select count(*) into v_dated from done;

  -- The record of lines read, and the turn.
  update public.es_notes_read
     set classes = coalesce(p_classes, classes),
         run_id = case when p_finish then null else run_id end,
         run_kind = case when p_finish then null else run_kind end,
         run_expires_at = case when p_finish then null else run_expires_at end,
         updated_at = now()
   where user_id = p_user_id;

  return jsonb_build_object('inserted', v_inserted, 'joined', v_joined, 'dated', v_dated, 'refused', v_refused);
end;
$$;

revoke all on function public.save_es_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) from public, anon, authenticated;
grant execute on function public.save_es_notes_reading(uuid, uuid, jsonb, jsonb, jsonb, jsonb, jsonb, jsonb, boolean) to service_role;

notify pgrst, 'reload schema';
