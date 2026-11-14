-- migration_028: feedback is accepted only in the name of the account that sends it (2026-11-14)
--
-- WHAT THIS IS FOR
--
-- Code check of 2026-11-07, problem 9. The only rule on adding feedback was
-- "Users can submit beta feedback", which asks only that the sender is signed
-- in. So anyone who made an account could add feedback straight to the
-- database under another person's account and email (the owner's address is
-- in the app's public code), with a made-up "Claude's review" already on it,
-- or already marked as dealt with.
--
-- WHAT THIS ADDS
--
-- One more rule on adding feedback, "Feedback only in the sender's own name".
-- It is a restrictive rule: the database applies it on top of the old one, so
-- a new row must pass both. A row is refused unless
--   user_id     is the account sending it,
--   user_email  is that account's own email (or empty, for an account with
--               no email), and
--   review, reviewed_at, resolved_at and resolution are all empty: only the
--               server writes Claude's review, and only the owner marks
--               feedback as dealt with.
--
-- Nothing is dropped or renamed: the old rule stays, and this one narrows it.
-- Existing feedback is not touched, read or changed. The server's own scripts
-- (the morning check, resolve-feedback) use the service role, which these
-- rules don't apply to, so they work as before.
--
-- WHAT IT DOES TO THE APPS
--
-- Both apps share this database, so it protects both the moment it is run.
-- "Send feedback" on both the students' app (main) and the test app (testing)
-- already sends the signed-in account's own id and email and nothing else
-- from this list (src/BetaFeedback.jsx), so sending feedback keeps working on
-- both. Safe to run more than once.

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'beta_feedback'
      and policyname = 'Feedback only in the sender''s own name'
  ) then
    create policy "Feedback only in the sender's own name"
      on public.beta_feedback
      as restrictive
      for insert
      to authenticated
      with check (
        user_id = auth.uid()
        and lower(coalesce(user_email, '')) = lower(coalesce(auth.jwt() ->> 'email', ''))
        and review is null
        and reviewed_at is null
        and resolved_at is null
        and resolution is null
      );
  end if;
end $$;
