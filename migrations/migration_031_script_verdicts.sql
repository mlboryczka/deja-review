-- migration_031: let the old-disputes script save Claude's verdicts (2026-11-25)
--
-- WHAT WAS MISSING
--
-- scripts/resolve-disputes.mjs clears the old backlog of disputes in
-- feedback_submissions. Unlike the app, it saves no verdict anywhere, because
-- a saved verdict read as the owner's own call would count in the test of
-- Claude's marking, and these disputes were not the owner's decisions. The
-- source column of answer_reviews only allows 'asked' and 'kept'.
--
-- WHAT THIS ADDS
--
-- 'script' as a third value allowed in answer_reviews.source: a verdict the
-- script saved. The test never reads it as the owner's call (ownerCall in
-- api/_lib/answerChecks.js). Nothing else changes: no row is written or
-- changed here, and no answer, schedule, streak or place in a set is touched.
--
-- Until this is run the script saves no verdicts, as before. Safe to run
-- more than once.

alter table public.answer_reviews drop constraint if exists answer_reviews_source_check;
alter table public.answer_reviews
  add constraint answer_reviews_source_check
  check (source in ('asked', 'kept', 'script'));
