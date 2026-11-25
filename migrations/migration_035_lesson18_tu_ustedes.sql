-- migration_035: Spanish Lesson 18's ten verb-form cards say (tú) and (ustedes) (2026-11-25)
--
-- WHAT WAS MISSING
--
-- The ten verb-form phrase cards of Spanish Lesson 18 used to end in "(to a
-- friend)" or "(to several people)"; the lesson now says "(tú)" and
-- "(ustedes)" as the rest of the course does. A deck that already holds these
-- cards keeps the English it was given, because the app rewrites a stored
-- English only when a card is renamed.
--
-- WHAT THIS DOES
--
-- For each of the ten cards, in es_user_cards only, replaces the English side
-- with the new wording, but only on a lesson card (source starts "lesson:")
-- whose French side is the card's and whose English side is still exactly the
-- old text. A card the student edited is left alone. The French side, the
-- schedule, answers, streak and place in a set are not touched. Until it is
-- run, old decks show the old brackets and the app works as before. Safe to
-- run more than once.

update public.es_user_cards c
   set back = v.new_back
  from (values
  ('Vuelve pronto a Guadalajara', 'Come back to Guadalajara soon / Come back soon to Guadalajara / Return to Guadalajara soon (to a friend, with volver)', 'Come back to Guadalajara soon / Come back soon to Guadalajara / Return to Guadalajara soon (tú, with volver)'),
  ('Haz la maleta esta noche', 'Pack your suitcase tonight / Pack tonight / Pack your bag tonight / Pack the suitcase tonight (to a friend, with hacer)', 'Pack your suitcase tonight / Pack tonight / Pack your bag tonight / Pack the suitcase tonight (tú, with hacer)'),
  ('Ve derecho dos cuadras', 'Go straight for two blocks / Go straight two blocks / Go straight ahead for two blocks (to a friend, with ir)', 'Go straight for two blocks / Go straight two blocks / Go straight ahead for two blocks (tú, with ir)'),
  ('Pon las maletas en el ascensor', 'Put the suitcases in the elevator / Put the suitcases in the lift (to a friend)', 'Put the suitcases in the elevator / Put the suitcases in the lift (tú)'),
  ('Ten todo listo para mañana', 'Have everything ready for tomorrow (to a friend)', 'Have everything ready for tomorrow (tú)'),
  ('Ven a mi edificio: está enfrente de un parque', 'Come to my building: it''s across from a park / Come to my building: it is across from a park / Come to my building: it''s opposite a park / Come to my building: it''s in front of a park (to a friend, with enfrente)', 'Come to my building: it''s across from a park / Come to my building: it is across from a park / Come to my building: it''s opposite a park / Come to my building: it''s in front of a park (tú, with enfrente)'),
  ('Empiecen a comer', 'Start eating / Start to eat / Begin eating / Begin to eat (to several people)', 'Start eating / Start to eat / Begin eating / Begin to eat (ustedes)'),
  ('No digas eso enfrente de los niños', 'Don''t say that in front of the kids / Don''t say that in front of the children / Do not say that in front of the kids (to a friend, with enfrente)', 'Don''t say that in front of the kids / Don''t say that in front of the children / Do not say that in front of the kids (tú, with enfrente)'),
  ('No vayas al centro en carro', 'Don''t go downtown by car / Do not go downtown by car / Don''t drive downtown (to a friend)', 'Don''t go downtown by car / Do not go downtown by car / Don''t drive downtown (tú)'),
  ('No seas egoísta', 'Don''t be selfish / Do not be selfish (to a friend)', 'Don''t be selfish / Do not be selfish (tú)')
  ) as v(front, old_back, new_back)
 where c.front = v.front
   and c.back = v.old_back
   and c.source like 'lesson:%';
