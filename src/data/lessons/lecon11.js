// Leçon 11 · Les verbes pronominaux — built from Laura Caufour's LFL METHOD
// Leçon 11 sheets, which come in two parts. Part 1: Elsa tells a friend
// about her sleep problems; dormir, s'endormir and se rendormir; verbs with
// se (verbes pronominaux) in the present, their three kinds, and verbs that
// change meaning with or without se. Part 2: Agathe tells her godmother how
// she met her boyfriend; se souvenir; verbs with se that mean "each other";
// verbs with se in the passé composé. For each part, the exercise sheet and
// her answer key. The two parts are one lesson, as Leçon 6's three are.
// There is no numbers section.
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–10 and nothing else: by
// now être, aller, avoir, the -er verbs, vouloir, pouvoir, prendre, savoir,
// faire, voir, venir, dire and devoir, the passé composé with avoir and être
// and its negative, on, and me, te, lui, nous, vous, leur. No card asks for
// more than that plus this lesson. Questions are asked the way Laura asks
// them, by intonation ("Tu t'es réveillé tôt ?", "Comment vous vous êtes
// rencontrés ?"), never by inversion. Leçons 12–20 teach connaître, mettre,
// the imparfait and others, so none of them is asked for here.
//
// Card shapes:
//   "se coucher (présent) → je" / "je me couche"        drill; its line comes from its shape
//   "se souvenir (passé composé) → elle" / "elle s'est souvenue"
//                                                        the same, in the passé composé
//   "s'asseoir → participe passé" / "assis"             the participle alone, as in Leçon 7
//   "Tu te dis que tu dois travailler plus ? → Oui, …"  answer yes in a full sentence (her ex. 2,
//                                                        3 and 6 of each part), with or without
//                                                        the Oui the prompt already shows
//   "se réveiller ou réveiller → Je ___ mes enfants tôt le matin"
//                                                        with se or without it (her grammar's pairs)
//   "de, du ou que → Je me souviens ___ ta sœur"        what follows se souvenir
//   "Je me souviens → au négatif"                       make it negative
//   "Ils s'endorment tard → au passé composé"           put it in the passé composé
//   "se réveiller" / "to wake up"                       words and phrases, both ways round
//
// WHY THE PRONOUN, THE HELPER VERB AND THE ENDINGS ARE ON → CARDS. Word and
// phrase cards are marked with typo tolerance, and this lesson's points are
// a word or a letter wide. Tried with lessoncheck --try, French typed:
//   - the se left out: shown "to wake up", "réveiller" passes for "se
//     réveiller" as close enough (it is inside the longer answer), and so
//     do "lever" for "se lever" and "ennuyer" for "s'ennuyer"; "J'ennuie
//     beaucoup au travail en ce moment" passes on the sentence card;
//   - the wrong ending: "Comment vous vous êtes rencontré ?" passes for "…
//     rencontrés ?" (one letter), and "On s'est envoyés des messages toute la
//     nuit" for "On s'est envoyé …";
//   - avoir for être: "Comment vous vous avez rencontrés ?" passes (three
//     letters, at the limit for a sentence that long);
//   - the pronoun dropped in a sentence: "Comment vous êtes rencontrés ?"
//     passes (the marker takes the same words, once each, in any order), and
//     so do "Je vois dans le miroir", "On voit tous les lundis", and "je
//     m'endors" for "je me rendors" in the si sentence.
// So every pronoun (me, te, se, nous, vous, m', t', s'), every form of être
// and every ending the lesson teaches is asked on an arrow card, marked
// exactly, with one verb or another: the drills (vous vous êtes is "se
// rencontrer (passé composé) → vous", since the vous sentence card passes
// "vous vous avez"), the with-or-without-se gaps, the answer-yes cards
// (which refuse "je me brosse mes dents", "on s'est racontés nos vies", "je
// me suis rencontré mon copain", and "il ennuie" or "ils s'ennuie" on the
// James card, which is there for s'ennuyer's se), and the passé composé cards
// (which refuse "Les enfants se sont brossés les dents" and "Elsa s'est
// maquillé"). S'embrasser and se disputer have no arrow card: their "each
// other" se is asked exactly through se rencontrer. Se reposer and se sentir
// are word cards only, for their meaning: their pronouns are the ones the
// arrow cards ask. The phrase cards are there for what the sentences mean:
// oneself or each other, texting, si, and s'asseoir, "to sit down". Its
// participle assis, the lesson's one participle that follows no pattern, is
// checked exactly on "s'asseoir → participe passé", as Leçon 7 drills pris:
// on the phrase card, "On s'est asseyé …", "On s'est assi …", "On s'est
// asseoir …", "On s'est assise …" and "On est assis …" all pass.
//
// Typo tolerance also lets a word the students know through on a word card,
// none of it this lesson's grammar: "dormir" for "s'endormir" and the other
// way round (one is inside the other), "demain" for "le lendemain", "amener"
// for "ramener", "late" for "later" and "chez toi" for "chez moi"; on the
// sentence card, "I'm very boring at work" for "I'm very bored" (the word
// card s'ennuyer refuses "to be boring"). Dormir against s'endormir has no
// gap card: in her sentences with s'endormir, dormir is French too ("je
// m'endors facilement" and "je dors facilement"; "sans problème", "devant la
// télé", "dans son lit"), so a gap asking for s'endormir would refuse a right
// answer, and one asking for dormir ("Tu ___ chez ton amie ce soir ?") would
// test the mistake a student is least likely to make. Her exercises never
// set the two against each other, and every drill names its verb.
//
// WHY THE PASSÉ COMPOSÉ DRILLS NAME ONE PERSON. An "il/elle" or "ils/elles"
// drill also accepts its answer with the other pronoun swapped in and
// nothing else changed (personAlternates in src/lib/cardInstruction.js). For
// "il s'est souvenu" that would accept "elle s'est souvenu", the very mistake
// the card is for. So the être drills say "→ elle", "→ ils", "→ elles", and
// tu, nous and vous take every ending a teacher would accept ("tu t'es
// souvenu / tu t'es souvenue"; se rencontrer → vous takes rencontrés and
// rencontrées, not the singular, since "each other" is two or more). The
// present drills keep "il/elle" and "ils/elles": nothing agrees in the
// present, so the swap is always right. Dormir's passé composé takes avoir
// and nothing agrees either; it is drilled with je, for j'ai. The participle
// drill "s'asseoir → participe passé" names no person and takes only assis,
// the form with no ending.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Drills. Dormir in six persons: a new irregular verb, as every new verb
//     in Leçons 2–10. Its passé composé once, "→ je" (j'ai dormi, not je suis
//     dormi: the s'endormir card in the passé composé takes être). Se coucher,
//     her model verb with se, in six persons: the six pronouns me, te, se,
//     nous, vous, se. S'endormir, her table's second column, in three: je, tu
//     and ils/elles for m', t' and s' before a vowel (its nous and vous are
//     se coucher's pronouns on dormir's endings). Se rendormir once, "→ je":
//     me stays whole before the r. Se souvenir in six persons, a new
//     irregular verb, and three of its passé composé: tu (t'es), elle (-e)
//     and nous (-s). Se rencontrer, her "each other" model, in the passé
//     composé with ils (-s), elles (-es) and vous (vous vous êtes, the one
//     form of être no other card asks for exactly); her table gives no
//     singular, and its on form is the answer card from her part 2 ex. 4 no.
//     1. S'asseoir's participle once, "s'asseoir → participe passé" /
//     "assis", in Leçon 7's shape ("prendre → participe passé" / "pris"): it
//     is the one participle here that follows no pattern, and on the phrase
//     card a wrong one passes. Leçon 7 already has "se lever (passé composé)
//     → je", so je me suis is not drilled again. Left out as repeats:
//     s'endormir with il/elle, nous and vous; se rendormir with every person
//     but je; se souvenir in the passé composé with je, il, vous and ils; se
//     coucher in the passé composé.
//   - Part 1, ex. 1 (write a sentence with each form of dormir) has no single
//     answer: the drills ask for every form, and her lesson's examples are in
//     the notes.
//   - Part 1, ex. 2 (answer yes, tu, 12 questions): no. 5 (se dire, where
//     every tu in the sentence becomes je) and no. 9 (les dents, which stays
//     les and does not become mes). The others repeat te → me.
//   - Part 1, ex. 3 (the same questions with vous): no. 1, vous vous → on se
//     or nous nous. Her key stops at no. 9 of 12; the rest repeat the switch.
//   - Part 1, ex. 4 (retell Elsa's routine) is open writing. Ex. 5 ("They're
//     getting dressed" …) is the drills' ils / elles again.
//   - Part 1, ex. 6 (answer yes, mixed): no. 7, "Tu sais ce qui se passe ?",
//     where se stays because it goes with ce qui, not with tu; and no. 11,
//     "James s'ennuie quand il pleut ?" (her key's "ils s'ennuie" corrected
//     to il), where se stays because the question is about someone else, and
//     the one card that asks for s'ennuyer's se exactly (il pleut is Leçon
//     9's). The others repeat ex. 2 and 3 (several with slips: see
//     DEPARTURES).
//   - Part 1, ex. 7 is the word list: every item but five. "too / too much –
//     trop" is Leçon 6's card, "generally – en général" Leçon 9's and
//     "several – plusieurs" Leçon 8's. "to try – essayer de" is Leçon 5's word
//     essayer, and Leçon 8 asks for its de on the gap card "Il essaye ___
//     français". "the thing / stuff / trick – le truc" is carried by the card
//     "Le truc c'est que …". Added from the grammar and the dialogue, as
//     Leçon 4 added three words from its dialogue: s'endormir and se coucher,
//     her two model verbs, so that no drill conjugates a verb whose meaning
//     has no card; and se reposer and se sentir, the two verbs with se of her
//     dialogue ("je me repose dans la journée", "je me sens très fatiguée")
//     that her list leaves out, though seven exercise items of hers use se
//     reposer (part 1 ex. 2 no. 3, ex. 3 no. 3, ex. 6 nos. 15, 19; part 2
//     ex. 2 no. 4, ex. 3 no. 19, ex. 9 no. 5) and eight se sentir (part 1
//     ex. 2 nos. 4, 10, ex. 3 no. 4, ex. 6 no. 12, ex. 8 no. 24, the
//     dictation's no. 8; part 2 ex. 6 nos. 1, 9).
//   - Part 1, ex. 8 (translation, 25 sentences): two phrase cards, no. 14 (si
//     and two verbs with se) and no. 6 ("very bored" is je m'ennuie beaucoup).
//     The others repeat an answer or drill card; nos. 9 and 19 write a time in
//     figures ("à 6h", "vers 22h"), and on a phrase card "22 heures" typed out
//     is refused; nos. 18, 21, 23 and 25 are negative, kept off phrase cards as in
//     Leçons 5, 9 and 10 ("Le réveil a pas sonné" passes); no. 5 has a slip.
//     The si card lists six English versions (during / in / at night, go back
//     to sleep / fall back asleep), all natural, so its English prompt is the
//     longest in the lesson.
//   - Part 1 grammar, with or without se: two pairs of gap cards from her
//     examples (réveiller, maquiller). Her third pair, "Il se dit que c'est
//     super / Elle lui dit que c'est super", changes the pronoun too (lui, Leçon
//     10's), so a gap can't ask for it alone; it is in the notes.
//   - The three kinds: two phrase cards for se voir, oneself and each other
//     (her part 2 Remarque). The third kind, "Ça se traduit facilement", is in
//     the notes only: no exercise of hers asks for it.
//   - Part 2, ex. 1 (a sentence with each form of se souvenir): the drills ask
//     for every form; her no. 5, corrected (see DEPARTURES), is the que gap
//     card. "de" is her lesson's example (Je me souviens de ta sœur) and "du"
//     her ex. 5 no. 9. The que card is not her no. 2, "Alex se souvient
//     qu'il doit partir": its answer would be "qu'", and "qu'il" typed in the
//     gap was refused; elision is not the point, de against que is. Her
//     no. 2 is the notes' example for qu'. Her list's "I don't remember" is
//     the negative card.
//   - Part 2, ex. 2 and 3 (French into English, oral): nothing to type in
//     French. Two of their sentences are the answers of passé composé cards
//     (ex. 2 no. 6 "Ils se sont endormis tard", no. 11 "On s'est revus le
//     lendemain"), and others are examples in the notes.
//   - Part 2, ex. 4 (answer yes in the passé composé, vous → on): no. 1
//     (rencontrés: the ending) and no. 4 (raconté vos vies: no ending before
//     nos vies, and vos → nos). No. 5, envoyé des messages, is no. 4's rule
//     again; the dialogue's sentence with it is a phrase card.
//   - Part 2, ex. 5 (answer yes, with and without se): no. 1 (Tu as rencontré
//     ton copain … ?: no se, so avoir) and no. 14 (tu t'es → je me suis).
//   - Part 2, ex. 6 (answer yes, everything): no. 11 (se souvenir de ma
//     marraine → ta). No. 15 ("Vous vous disputez rarement ?", each other in
//     the present) was a card and was dropped: it asked for the same vous
//     vous → on se, nous nous or je me as part 1 ex. 3 no. 1, and the "each
//     other" meaning changes nothing the student types.
//   - Part 2, ex. 7 is the word list: every item but these. "to take someone
//     (somewhere) – amener" is Leçon 10's card amener. "to pick up – venir
//     chercher" is on it twice and is one card. "I remember" and "Do you
//     remember?" are the se souvenir drills → je and → tu, marked exactly;
//     "I don't remember" is the negative card, since on a phrase card "Je me
//     souviens pas" passed. "Far – loin" is carried by "pas loin de". "the
//     first night – le premier soir" is Leçon 1's premier and Leçon 7's le
//     soir; "the whole night – toute la nuit" is Leçon 4's toute la famille
//     and this list's la nuit. "happy – heureux, heureuse" is heureux:
//     généreux / généreuse (Leçon 6) asks for the -euse.
//   - Part 2, ex. 8 and 9 (translation): ex. 8 no. 5, "Comment vous vous êtes
//     rencontrés ?"; ex. 8 no. 6, "On s'est assis pas loin de la tour
//     Eiffel", for s'asseoir, the verb of her dialogue's "On s'est assis" and
//     of seven exercise items (part 2 ex. 2 nos. 7, 20; ex. 3 no. 3; ex. 5 no.
//     13; ex. 6 nos. 14, 20; ex. 8 no. 6), all in the passé composé, so its
//     card is a sentence with assis, not the infinitive (assis itself is
//     checked exactly on the drill "s'asseoir → participe passé"); and the
//     dialogue's "On s'est envoyé des messages toute la nuit". Two passé composé cards
//     are her part 1 sentences put in the past (part 1 ex. 6 no. 16, "Elsa se
//     maquille et ensuite elle s'habille", and the dictation's "Les enfants se
//     brossent les dents après le petit-déjeuner"), as her part 2 ex. 9 does
//     with the same verbs. The others repeat these, are negative, or have
//     slips. The envoyé card lists seven English versions (texted / messaged
//     / sent each other messages, all night / the whole night), so its prompt
//     is long too.
//   - Left out: the dictations (part 1 ex. 9; part 2 ex. 12, whose key repeats
//     part 1's word for word and is not counted again), the oral exercises
//     (part 1 ex. 10–11, part 2 ex. 11, 13–14), part 2 ex. 10 (open writing),
//     and the dialogues. Part 1 ex. 4's model text and the dialogues are used
//     only as notes examples.
//
// DEPARTURES FROM HER SHEETS:
//   - Part 1 list no. 19, "exhausted – crever": the adjective is crevé (her
//     own ex. 8 no. 7 writes "elle doit être crevée"). Larousse, crever: v.t.
//     familier, "épuiser de fatigue" ("La course, la chaleur m'a crevé"); Le
//     Robert gives crevé (familier) for épuisé. The card says "(informal,
//     masc.)".
//   - Part 1 list no. 25, "to dress up – s'habiller": s'habiller is "to get
//     dressed, to dress"; "to dress up" is s'habiller only for dressing smartly
//     or in costume (Larousse français-anglais, habiller). Her own dialogue
//     translation says "get dressed", and so does the card.
//   - Part 1 list no. 17, "le trucs c'est que": le truc, as in her dialogue
//     and her list's no. 33. The card is written "Le truc c'est que …" without
//     the comma her dictation puts after truc: with it, the marker would take
//     "Le truc" alone.
//   - Part 1 list no. 16, "late – en retard": right for "not on time", so the
//     card says "late (not on time)". The dialogue's "plus tard", "later", is
//     its own card.
//   - Part 1 list no. 32, "around (+ time) – vers": the card also takes
//     "towards", which a teacher would accept: it is vers's first sense
//     (Larousse, vers: "Indique : la direction dans laquelle un mouvement se
//     fait").
//   - Part 2 list no. 19, "love at first time": love at first sight, as in her
//     dialogue translation. Her list writes "le coup de foudre" and her ex. 6
//     no. 16 "on a eu un coup de foudre". Shown "love at first sight", a front
//     "le coup de foudre" marked "un coup de foudre" as "Wrong article", a
//     miss, so the front is "coup de foudre (m)", the gender shown as on "des
//     somnifères (m)": le, un or no article all pass. The cost: "la coup de
//     foudre" passes too, though the (m) on the prompt says masculine.
//   - Part 2 list no. 21, "honest – honnête", is the card "pour être
//     honnête", "to be honest", the way her ex. 8 no. 16 and ex. 9 nos. 2 and
//     10 use it; a card of the bare cognate would teach only its spelling.
//   - Part 2 ex. 5 no. 9, "rendez vous": rendez-vous, with its hyphen
//     (Larousse, rendez-vous n.m. inv.), on the du gap card.
//   - Part 2 ex. 8 no. 6, "la Tour Eiffel": la tour Eiffel, the generic tour
//     with a small letter (OQLF, Banque de dépannage linguistique, "Emploi de
//     la majuscule pour les noms de bâtiments, de monuments et de lieux
//     publics", which gives "la tour Eiffel"). Case isn't marked.
//   - Part 2 grammar: her example "Je me suis souvenu qu'il était en vacances"
//     uses the imparfait, which the students haven't met. The notes use her
//     ex. 1 no. 2, "Alex se souvient qu'il doit partir", for qu'.
//   - Part 2 ex. 1 no. 5, "Tu ne te souviens que Théo est à l'école ?": "Tu ne
//     te souviens pas que …" (ne … que says "only"), on the que gap card and
//     in the notes.
//   - The answer cards accept a little more than her key, where a teacher
//     would. Each is also accepted without the Oui the prompt already shows,
//     as in Leçons 2–10. Her key answers vous with on; nous is accepted too,
//     and je where vous can be one person (part 1 ex. 3 no. 1). Where the
//     question's -s says vous is more than one (rencontrés, vos vies), only on
//     and nous, as in Leçon 9. Part 2 ex. 4 no. 1 takes "on s'est rencontrés"
//     but not rencontrées: the question's rencontrés says one of them is a
//     man. Part 2 ex. 5 no. 14
//     ("Tu t'es réveillé tôt ?") takes réveillée too, as Leçons 3 and 7 take a
//     woman's ending in answer to a question put to a man. Part 1 ex. 2 no. 9
//     takes "3 fois" or "trois fois". Part 1 ex. 6 no. 11 takes il or James.
//   - Her part 2 table writes "On s'est rencontré(s)", as if the -s could go.
//     When on means "we", the participle takes the gender and number of the
//     people it stands for, with no other choice: Larousse, on, "l'accord se
//     fait en genre et en nombre avec le sujet représenté par on" ("on est
//     arrivés ce matin", "alors, on est contentes ?"); OQLF, Vitrine
//     linguistique, "Accord de l'adjectif avec le pronom on" ("le participe
//     passé ou l'adjectif qui s'y rapporte prend le genre et le nombre du
//     sujet représenté par on": "Mon ami et moi, on s'est disputés", "on
//     s'est séparées"); Académie française, Questions de langue QDL059 ("l'accord
//     se fait tout naturellement en genre et en nombre"). The masculine
//     singular is for an on that means "people in general" ("à quinze ans, on
//     est encore naïf"), which no card here has. So the notes and cards have
//     "on s'est rencontrés", the notes do not say the form without -s is
//     correct, and no card accepts "on s'est rencontré" or "on s'est revu".
//     (Leçon 8's draft notes say "On est parti … without the -s, is also
//     correct", and its on cards accept it; by these sources that needs the
//     same change there.)
//   - "On se revoit le lendemain → au passé composé" (her part 2 ex. 2 no. 11
//     put back in the present) says nothing about who on is, so it takes
//     revus and revues, as Leçon 7's "rester → Vous ___ à la maison toute la
//     journée ?" takes every ending; on for two or more women takes -es (the
//     OQLF's "on s'est séparées" above). Not revu or revue: se revoir here is
//     "each other", two or more people.
//   - "petit-déjeuner": her dictation writes "petit déjeuner", her exercises
//     "petit-déjeuner". Larousse heads the noun "petit déjeuner" and the verb
//     "petit-déjeuner"; Leçon 7's card is "le petit-déjeuner". Hyphens are
//     marked, so the card takes both.
//   - Her rule for the passé composé is the subject's endings, "règle
//     simplifiée". Her own key leaves the participle as it is before an
//     object ("on s'est raconté nos vies", "on s'est envoyé des messages",
//     "Vous vous êtes brossé les dents ?"), which is correct: Académie
//     française, Questions de langue, "Accord du participe passé des verbes
//     pronominaux" ("Elles se sont lavées" but "Elles se sont lavé les
//     mains"); OQLF, Vitrine linguistique ("Elle s'est fixé des objectifs
//     ambitieux"). The notes state it, and the cards ask for it.
//   - "Certains verbes sont toujours pronominaux, comme se reposer": reposer
//     is a verb on its own too ("reposer sa tête", "laisser reposer"), and the
//     OQLF's list of verbs only ever used with se has souvenir (se) but not
//     reposer (se) (Vitrine linguistique, "Liste de verbes essentiellement
//     pronominaux"). The notes give se souvenir as the example; se reposer
//     is a word card.
//   - Her table of the three kinds lists se parler, se traduire and se regarder
//     as passive. Ils se parlent and ils se regardent mostly mean "each other",
//     so the notes give only her sentence "Ça se traduit facilement".
//   - Hints on the English side, so a right answer from another card isn't
//     marked wrong: "se coucher" "to go to bed (not aller dormir or aller au
//     lit)" and "s'endormir" "… to go to sleep (not aller dormir)" (Leçon 7's
//     aller dormir is "to go to sleep / to go to bed (with dormir)", and its
//     notes teach "je suis allé au lit", "I went to bed"); "le sommeil"
//     "sleep (not the verb)"; "se sentir" "to feel (well, ill, tired)", the
//     sense with se; "pas terrible" "not great / not very good (not très
//     bon)", since pas très bon, built from Leçon 6's bon, is right French
//     for both and was refused (a hint naming terrible would leave only pas
//     to recall); "chez moi" "(with chez)", since à la maison is "home" too;
//     the si sentence "(with dans)", since this lesson's own word card gives
//     la nuit for "at night" and "during the night", and "Si je me réveille
//     la nuit …" was refused; "Je m'ennuie beaucoup au travail en ce moment"
//     "(with beaucoup and en ce moment)", since Leçon 8's vraiment ("really")
//     and Leçon 4's maintenant ("now") fit its English and were refused,
//     while dropping those English versions would refuse them typed in
//     English; "On se voit tous les lundis" "(with on and tous les)", since
//     Leçon 6's le lundi is "on Mondays / every Monday" and "On se voit le
//     lundi" was refused; the other on sentences "(with on)"; the vous
//     question "(vous)". "un copain" is her "a boyfriend" only: a friend is
//     Leçon 4's un ami.
//   - More English accepted than her list gives, where a teacher would:
//     "se brosser les dents" takes "to brush my teeth" (the Forms note says
//     English uses my there); "se dire" takes "to tell yourself" and "to say
//     to oneself" (Larousse anglais-français, say: "I said to myself" → "je
//     me suis dit"); "combien de temps" takes "how much time".
//   - Slips in her sheets, none copied (most are on sentences with no card):
//     part 1 ex. 1 "J' ai", "Vous avec bien dormi"; ex. 3 no. 5 "on se dit que
//     je dois" (qu'on doit); ex. 4 "qu'elle ne rendort" (se rendort),
//     "plusieurs heure", "elle d'habille"; ex. 5 nos. 1 and 9 statements with
//     "?", no. 5 without "facilement", no. 8 "auelle", no. 9 "Les enfant", no.
//     12 "mauqillent"; ex. 6 no. 1 "on ss rendort" (on s'endort: the question
//     is s'endormir), no. 5 "elle se maquillent", no. 10 "je dis souvent ça"
//     (je me dis), no. 11 "ils s'ennuie" (il s'ennuie, on the James card), no.
//     20 "on se repose" (on se rendort); ex. 8 no. 5 "se couchent plus trop
//     tard". Part 2 ex. 1 "se sont souvenu" (souvenus), "s'est souvenu" for
//     son amie (souvenue); ex. 2 no. 11's English; ex. 3 no. 17's English in
//     the past for a present French, no. 20 "TWe"; ex. 5 no. 17 a statement
//     with "?"; ex. 6 no. 9 "là- bas", no. 19 "a Sandra"; ex. 8 no. 1
//     "Agatha", no. 14 "vous vous été", no. 18 "embrassé"; ex. 9 no. 13's
//     English "got dress"; her list no. 8's English "the fist night"; the
//     dialogue's "il m'a amené" (Agathe is a woman: amenée, as she writes
//     ramenée two lines later; not used, since agreement after avoir is not
//     this lesson's); her "(réfléchis)" for réfléchi.
//
// THE NOTES are her lesson, translated and restructured on the impératif's
// model: Use (what verbs with se are, their kinds, with or without se),
// Forms (her present table, before a vowel, answering yes), then one tab for
// each of her other sections: Dormir, Se souvenir, Each other, Past. Her
// grammar examples have no English except in the three kinds; the English
// beside them is ours. "Verbs with se" stands for her "verbes pronominaux",
// a word the notes don't need. No word list (owner, 2026-10-05).
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her examples, tables or key show
// each of these, but her lesson never says it, and a card needs it:
//   - Use, the lead: the se "changes to match the subject" (her table shows
//     it; her definition says only "un pronom réfléchi après le sujet").
//   - Use: the two meanings, oneself and each other, as sentences (her table
//     gives them as column heads); "Réveiller, maquiller and dire can have it
//     or not, and the meaning changes: with se, the person does it to
//     themselves; without se, they do it to someone else" (her three pairs
//     show it); the third kind under "Detail · advanced", "Se can also say
//     what can be done to something" (her "le verbe est passif"). "Passer du
//     temps … but se passer means to happen", for the card "Tu sais ce qui se
//     passe ?" (her dialogue's ce qui se passe; passer du temps is Leçon 6's
//     word).
//   - Forms, the lead: the pronoun goes "between the subject and the verb"
//     "to match the subject"; "Before a vowel or an h, me, te and se become
//     m', t' and s'" (her table shows je m'endors); "On takes se, like il and
//     elle" (her key answers vous with on se); "With a part of the body,
//     French says les where English says my, your or his" (her list's "se
//     brosser les dents – to brush one's teeth" and ex. 8 no. 12).
//   - Forms, Answering yes: all four notes (her part 1 ex. 2, 3 and 6 key),
//     including "When the question is about someone else, se stays se" (her
//     ex. 6 no. 11) and "In ce qui se passe, se goes with ce qui" (ex. 6 no.
//     7).
//   - Dormir: the lead's "take the same endings"; "Dormir takes avoir …
//     s'endormir and se rendormir take être, like every verb with se" (her
//     dormir table and her part 2 rule).
//   - Se souvenir: the endings note (-e, -s, -es); "De and le become du, and
//     de and les become des"; que "or qu' before a vowel" (her Construction
//     line gives de and que only); Saying no, "Ne goes straight before me,
//     te, se, nous or vous, and pas after the verb" (her examples); Answering
//     yes, "my" and "your" switch (her ex. 6 no. 11).
//   - Each other: the lead, "When se means each other, the subject is two or
//     more people, so it is on, nous, vous, ils or elles", puts her Remarque
//     ("se conjuguent seulement au pluriel") as a rule about that meaning; it
//     is said of the meaning, not the verb, because her ex. 5 no. 6 has se
//     disputer with one person.
//   - Past: the lead's "usually changes to match the subject" (her
//     "accorder avec le sujet"; "usually" because of the trap); the endings
//     notes (the wording is Leçon 7's), and "When on means 'we', the
//     participle takes -s, or -es if they are all women" (Larousse, OQLF and
//     the Académie: see DEPARTURES); "S'endormir, se revoir and se souvenir
//     have dormir, voir and venir inside them, and their past participles end
//     the same way" (her tables show endormi, souvenu; her key revu; said of
//     these three verbs only, since connaître against naître, Leçon 12's
//     connu against Leçon 7's né, breaks it as a general rule), and
//     "S'asseoir has a past participle of its own, assis … It already ends
//     in s, so it takes no second s" (her dialogue's "On s'est assis" and
//     ex. 8 no. 6); the lesson's one "The trap:", no ending when the verb is
//     followed by what is brushed, told or sent (see DEPARTURES); "Without
//     se, the verb takes avoir" (her part 2 ex. 5); Answering yes (her ex. 4
//     and 5 key).
// Left out of the notes as helping no card: the dialogues and their
// translations, and her list of verbs with se beyond the ones in her tables
// and examples.

export const CARDS = [
  // ── Part 1: her word list (ex. 7), less the words other lessons own, plus
  //    her two model verbs and the two verbs with se of her dialogue that her
  //    list leaves out (see WHAT WAS SAMPLED)
  ["un réveil", "an alarm clock / an alarm", "V", "words1"],
  ["se réveiller", "to wake up", "V", "words1"],
  ["peut-être", "maybe / perhaps", "V", "words1"],
  ["avouer", "to admit / to confess", "V", "words1"],
  ["se brosser les dents", "to brush one's teeth / to brush your teeth / to brush my teeth", "V", "words1"],
  ["le sommeil", "sleep (not the verb)", "V", "words1"],
  ["dormir", "to sleep", "V", "words1"],
  ["la nuit", "at night / during the night / in the night / the night", "V", "words1"],
  ["s'ennuyer", "to be bored / to get bored", "V", "words1"],
  ["se maquiller", "to put on make-up / to put make-up on / to do one's make-up", "V", "words1"],
  ["Mince !", "Damn! / Darn! / Shoot!", "E", "words1"],
  ["seulement", "only", "V", "words1"],
  ["en retard", "late (not on time)", "V", "words1"],
  ["Le truc c'est que …", "The thing is …", "E", "words1"],
  ["au lit", "in bed", "V", "words1"],
  ["crevé", "exhausted / worn out (informal, masc.)", "V", "words1"],
  ["se lever", "to get up", "V", "words1"],
  ["sonner", "to ring / to go off (alarm)", "V", "words1"],
  ["se dire", "to tell oneself / to tell yourself / to say to oneself / to think to oneself", "V", "words1"],
  ["se rendormir", "to go back to sleep / to fall back asleep / to fall asleep again", "V", "words1"],
  ["allumer", "to turn on / to switch on", "V", "words1"],
  ["s'habiller", "to get dressed / to dress", "V", "words1"],
  ["des somnifères (m)", "sleeping pills", "V", "words1"],
  ["pas terrible", "not great / not very good (not très bon)", "V", "words1"],
  ["si", "if", "V", "words1"],
  ["plus tard", "later", "V", "words1"],
  ["en ce moment", "at the moment / currently / these days", "V", "words1"],
  ["vers", "around (with a time) / at about (with a time) / towards", "V", "words1"],
  ["s'endormir", "to fall asleep / to go to sleep (not aller dormir)", "V", "words1"],
  ["se coucher", "to go to bed (not aller dormir or aller au lit)", "V", "words1"],
  ["se reposer", "to rest / to have a rest / to take a rest", "V", "words1"],
  ["se sentir", "to feel (well, ill, tired)", "V", "words1"],

  // ── Part 1, grammar 1: dormir in the present, and its passé composé
  //    (avoir, where s'endormir takes être)
  ["dormir (présent) → je", "je dors", "G", "dormir"],
  ["dormir (présent) → tu", "tu dors", "G", "dormir"],
  ["dormir (présent) → il/elle", "il dort", "G", "dormir"],
  ["dormir (présent) → nous", "nous dormons", "G", "dormir"],
  ["dormir (présent) → vous", "vous dormez", "G", "dormir"],
  ["dormir (présent) → ils/elles", "ils dorment", "G", "dormir"],
  ["dormir (passé composé) → je", "j'ai dormi", "G", "dormir"],

  // ── Part 1, grammar 2: verbs with se in the present. Se coucher for the six
  //    pronouns; s'endormir for m', t' and s'; se rendormir for me before r
  ["se coucher (présent) → je", "je me couche", "G", "reflexive"],
  ["se coucher (présent) → tu", "tu te couches", "G", "reflexive"],
  ["se coucher (présent) → il/elle", "il se couche", "G", "reflexive"],
  ["se coucher (présent) → nous", "nous nous couchons", "G", "reflexive"],
  ["se coucher (présent) → vous", "vous vous couchez", "G", "reflexive"],
  ["se coucher (présent) → ils/elles", "ils se couchent", "G", "reflexive"],
  ["s'endormir (présent) → je", "je m'endors", "G", "endormir"],
  ["s'endormir (présent) → tu", "tu t'endors", "G", "endormir"],
  ["s'endormir (présent) → ils/elles", "ils s'endorment", "G", "endormir"],
  ["se rendormir (présent) → je", "je me rendors", "G", "endormir"],

  // Answer yes (her ex. 2 nos. 5 and 9, ex. 3 no. 1, ex. 6 nos. 7 and 11):
  // every tu becomes je; les dents stays les; vous vous becomes on se, nous
  // nous or je me; a se that goes with ce qui stays, and so does the se of a
  // question about someone else. Each also without the Oui.
  ["Tu te dis que tu dois travailler plus ? → Oui, …", "Oui, je me dis que je dois travailler plus / Je me dis que je dois travailler plus", "G", "yes1"],
  ["Tu te brosses les dents 3 fois par jour ? → Oui, …", "Oui, je me brosse les dents 3 fois par jour / Oui, je me brosse les dents trois fois par jour / Je me brosse les dents 3 fois par jour / Je me brosse les dents trois fois par jour", "G", "yes1"],
  ["Vous vous endormez facilement le soir ? → Oui, …", "Oui, on s'endort facilement le soir / Oui, nous nous endormons facilement le soir / Oui, je m'endors facilement le soir / On s'endort facilement le soir / Nous nous endormons facilement le soir / Je m'endors facilement le soir", "G", "yes1"],
  ["Tu sais ce qui se passe ? → Oui, …", "Oui, je sais ce qui se passe / Je sais ce qui se passe", "G", "yes1"],
  ["James s'ennuie quand il pleut ? → Oui, …", "Oui, il s'ennuie quand il pleut / Oui, James s'ennuie quand il pleut / Il s'ennuie quand il pleut / James s'ennuie quand il pleut", "G", "yes1"],

  // With se or without it: her grammar's pairs, the verb in the present
  ["se réveiller ou réveiller → Je ___ tôt le matin", "me réveille", "G", "meaning"],
  ["se réveiller ou réveiller → Je ___ mes enfants tôt le matin", "réveille", "G", "meaning"],
  ["se maquiller ou maquiller → Elle ___ le matin", "se maquille", "G", "meaning"],
  ["se maquiller ou maquiller → Elle ___ les acteurs", "maquille", "G", "meaning"],

  // Her translations (ex. 8 nos. 14 and 6), for the whole sentence
  ["Si je me réveille dans la nuit, je me rendors facilement", "If I wake up during the night, I go back to sleep easily / If I wake up in the night, I go back to sleep easily / If I wake up at night, I go back to sleep easily / If I wake up during the night, I fall back asleep easily / If I wake up in the night, I fall back asleep easily / If I wake up at night, I fall back asleep easily (with dans)", "E", "sentences1"],
  ["Je m'ennuie beaucoup au travail en ce moment", "I'm very bored at work at the moment / I'm really bored at work at the moment / I'm very bored at work right now / I'm very bored at work these days / I get very bored at work at the moment (with beaucoup and en ce moment)", "E", "sentences1"],

  // ── Part 2: her word list (ex. 7), less the words other cards or lessons own
  ["ramener", "to take back / to bring back (someone, somewhere)", "V", "words2"],
  ["s'embrasser", "to kiss each other / to kiss", "V", "words2"],
  ["un copain", "a boyfriend", "V", "words2"],
  ["un premier rendez-vous", "a first date", "V", "words2"],
  ["déjà", "already", "V", "words2"],
  ["venir chercher", "to pick up / to come and pick up / to come and get (someone)", "V", "words2"],
  ["une marraine", "a godmother", "V", "words2"],
  ["se rencontrer", "to meet each other / to meet (for the first time)", "V", "words2"],
  ["combien de temps", "how long / how much time", "V", "words2"],
  ["se souvenir", "to remember", "V", "words2"],
  ["le lendemain", "the next day / the following day / the day after", "V", "words2"],
  ["pas loin de", "not far from", "V", "words2"],
  ["se revoir", "to see each other again / to meet again", "V", "words2"],
  ["coup de foudre (m)", "love at first sight", "V", "words2"],
  ["rarement", "rarely / seldom", "V", "words2"],
  ["pour être honnête", "to be honest", "E", "words2"],
  ["chez moi", "at my place / at my house / home (with chez)", "V", "words2"],
  ["une appli", "an app", "V", "words2"],
  ["il y a 6 mois", "6 months ago / six months ago", "V", "words2"],
  ["heureux", "happy (masc.)", "V", "words2"],
  ["se disputer", "to argue / to fight / to have an argument / to have a fight", "V", "words2"],

  // ── Part 2, grammar 1: se souvenir in the present and the passé composé,
  //    then answering yes with it (her ex. 6 no. 11)
  ["se souvenir (présent) → je", "je me souviens", "G", "souvenir"],
  ["se souvenir (présent) → tu", "tu te souviens", "G", "souvenir"],
  ["se souvenir (présent) → il/elle", "il se souvient", "G", "souvenir"],
  ["se souvenir (présent) → nous", "nous nous souvenons", "G", "souvenir"],
  ["se souvenir (présent) → vous", "vous vous souvenez", "G", "souvenir"],
  ["se souvenir (présent) → ils/elles", "ils se souviennent", "G", "souvenir"],
  ["se souvenir (passé composé) → tu", "tu t'es souvenu / tu t'es souvenue", "G", "souvenir"],
  ["se souvenir (passé composé) → elle", "elle s'est souvenue", "G", "souvenir"],
  ["se souvenir (passé composé) → nous", "nous nous sommes souvenus / nous nous sommes souvenues", "G", "souvenir"],
  ["Tu te souviens de ma marraine ? → Oui, …", "Oui, je me souviens de ta marraine / Je me souviens de ta marraine", "G", "souvenir"],

  // Se souvenir de a thing or a person, que a sentence (her Construction line)
  ["de, du ou que → Je me souviens ___ ta sœur", "de", "G", "souvenirde"],
  ["de, du ou que → Ils se sont souvenus ___ rendez-vous", "du", "G", "souvenirde"],
  ["de, du ou que → Tu ne te souviens pas ___ Théo est à l'école ?", "que", "G", "souvenirde"],

  // Ne before the pronoun (her list's "I don't remember")
  ["Je me souviens → au négatif", "Je ne me souviens pas", "G", "negative"],

  // ── Part 2, grammar 2: each other. Se voir both ways (her Remarque)
  ["Je me vois dans le miroir", "I see myself in the mirror", "E", "eachother"],
  ["On se voit tous les lundis", "We see each other every Monday / We see each other on Mondays (with on and tous les)", "E", "eachother"],

  // ── Part 2, grammar 3: the passé composé with être. The endings, none
  //    before what is brushed, told or sent, être for s'endormir, the
  //    participle of se revoir, and s'asseoir's assis
  ["se rencontrer (passé composé) → ils", "ils se sont rencontrés", "G", "past"],
  ["se rencontrer (passé composé) → elles", "elles se sont rencontrées", "G", "past"],
  ["se rencontrer (passé composé) → vous", "vous vous êtes rencontrés / vous vous êtes rencontrées", "G", "past"],
  ["Elsa se maquille et ensuite elle s'habille → au passé composé", "Elsa s'est maquillée et ensuite elle s'est habillée", "G", "past"],
  ["Les enfants se brossent les dents après le petit-déjeuner → au passé composé", "Les enfants se sont brossé les dents après le petit-déjeuner / Les enfants se sont brossé les dents après le petit déjeuner", "G", "past"],
  ["Ils s'endorment tard → au passé composé", "Ils se sont endormis tard", "G", "past"],
  ["s'asseoir → participe passé", "assis", "G", "past"],
  ["On se revoit le lendemain → au passé composé", "On s'est revus le lendemain / On s'est revues le lendemain", "G", "past"],

  // Answer yes in the passé composé (her ex. 4 nos. 1 and 4, ex. 5 nos. 1
  // and 14). Each also without the Oui.
  ["Vous vous êtes rencontrés à l'hôpital ? → Oui, …", "Oui, on s'est rencontrés à l'hôpital / Oui, nous nous sommes rencontrés à l'hôpital / On s'est rencontrés à l'hôpital / Nous nous sommes rencontrés à l'hôpital", "G", "yes2"],
  ["Vous vous êtes raconté vos vies ? → Oui, …", "Oui, on s'est raconté nos vies / Oui, nous nous sommes raconté nos vies / On s'est raconté nos vies / Nous nous sommes raconté nos vies", "G", "yes2"],
  ["Tu t'es réveillé tôt ? → Oui, …", "Oui, je me suis réveillé tôt / Oui, je me suis réveillée tôt / Je me suis réveillé tôt / Je me suis réveillée tôt", "G", "yes2"],
  ["Tu as rencontré ton copain chez des amis ? → Oui, …", "Oui, j'ai rencontré mon copain chez des amis / J'ai rencontré mon copain chez des amis", "G", "yes2"],

  // Her dialogue and ex. 8 nos. 5 and 6, for the whole sentence
  ["On s'est envoyé des messages toute la nuit", "We texted all night / We texted the whole night / We texted each other all night / We texted each other the whole night / We messaged each other all night / We sent each other messages all night / We sent each other messages the whole night (with on)", "E", "sentences2"],
  ["Comment vous vous êtes rencontrés ?", "How did you guys meet? / How did you two meet? / How did you meet? (vous)", "E", "sentences2"],
  ["On s'est assis pas loin de la tour Eiffel", "We sat down not far from the Eiffel Tower / We sat not far from the Eiffel Tower (with on)", "E", "sentences2"],
];

// The notes are opened mid-card by a student who is stuck, so each tab
// answers at a glance. Written to the notes rules in
// .claude/skills/building-lessons/SKILL.md, on the impératif's model.
export const NOTES = [
  {
    tab: "Use",
    h: "1 · Verbs with se",
    blocks: [
      { t: "lead", v: "Some verbs come with **se**, like *se lever*, \"to get up\", and the se changes to match the subject: *je me lève*, \"I get up\"; *tu te lèves*, \"you get up\"." },
      { t: "note", v: "Most often, se means the person does it to themselves, \"oneself\" in English: *je me maquille le matin*, \"I put make-up on in the morning\"." },
      { t: "note", v: "With two or more people, se can mean they do it to each other: *ils se voient souvent*, \"they see each other often\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je me réveille à 6h", "I wake up at 6am"],
        ["Je me maquille et je m'habille", "I put make-up on and get dressed"],
        ["Ils se voient souvent", "They see each other often"],
        ["On se dispute très rarement", "We very rarely argue"],
      ]},
      { t: "sub", v: "With or without se" },
      { t: "note", v: "*Se souvenir*, \"to remember\", always has se. *Réveiller*, \"to wake someone up\", *maquiller*, \"to do someone's make-up\", and *dire*, \"to say\", can have it or not, and the meaning changes: with se, the person does it to themselves; without se, they do it to someone else." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je me réveille tôt le matin", "I wake up early in the morning"],
        ["Je réveille mes enfants tôt le matin", "I wake my children up early in the morning"],
        ["Elle se maquille", "She puts make-up on"],
        ["Elle maquille les acteurs", "She does the actors' make-up"],
        ["Il se dit que c'est super", "He tells himself it's great"],
        ["Elle lui dit que c'est super", "She tells him it's great"],
      ]},
      { t: "note", v: "*Passer du temps* is \"to spend time\", but *se passer* means \"to happen\": *je ne sais pas ce qui se passe*, \"I don't know what's going on\"." },
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "Se can also say what can be done to something: *ça se traduit facilement*, \"it's easily translatable\"." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · Verbs with se in the present",
    blocks: [
      { t: "lead", v: "Between the subject and the verb, put **me, te, se, nous** or **vous** to match the subject: *je me couche*, \"I go to bed\"; *nous nous couchons*, \"we go to bed\"." },
      { t: "table", caption: "Present tense",
        cols: ["Person", "se coucher · to go to bed", "s'endormir · to fall asleep"],
        rows: [
          ["je", "je me couche", "je m'endors"],
          ["tu", "tu te couches", "tu t'endors"],
          ["il, elle", "il, elle se couche", "il, elle s'endort"],
          ["nous", "nous nous couchons", "nous nous endormons"],
          ["vous", "vous vous couchez", "vous vous endormez"],
          ["ils, elles", "ils, elles se couchent", "ils, elles s'endorment"],
        ]},
      { t: "sub", v: "Before a vowel" },
      { t: "note", v: "Before a vowel or an h, me, te and se become m', t' and s': *je m'endors*, \"I fall asleep\"; *tu t'habilles*, \"you get dressed\"; *elle s'ennuie*, \"she's bored\"." },
      { t: "sub", v: "On" },
      { t: "note", v: "On takes se, like il and elle: *on se couche vers 22h*, \"we go to bed around 10pm\"." },
      { t: "sub", v: "Parts of the body" },
      { t: "note", v: "With a part of the body, French says les where English says \"my\", \"your\" or \"his\": *je me brosse les dents*, \"I brush my teeth\"; *mon mari se brosse les dents*, \"my husband is brushing his teeth\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Tu becomes je and te becomes me, everywhere in the sentence: *Tu te dis que tu dois travailler plus ?* → *Oui, je me dis que je dois travailler plus*, \"Do you tell yourself you have to work more? Yes, I tell myself I have to work more\"." },
      { t: "note", v: "Vous vous becomes on se or nous nous, or je me if vous means just you: *Vous vous endormez facilement ?* → *Oui, on s'endort facilement*, \"Do you fall asleep easily? Yes, we fall asleep easily\"." },
      { t: "note", v: "When the question is about someone else, se stays se: *James s'ennuie quand il pleut ?* → *Oui, il s'ennuie quand il pleut*, \"Does James get bored when it rains? Yes, he gets bored when it rains\"." },
      { t: "note", v: "In *ce qui se passe*, \"what's going on\", se goes with ce qui, not with tu, so it stays se: *Tu sais ce qui se passe ?* → *Oui, je sais ce qui se passe*, \"Do you know what's going on? Yes, I know what's going on\"." },
      { t: "table", bold: 1,
        cols: ["Question", "Answer"],
        rows: [
          ["Tu te lèves vers 7h le matin ?", "Oui, je me lève vers 7h le matin"],
          ["Tu te brosses les dents 3 fois par jour ?", "Oui, je me brosse les dents 3 fois par jour"],
          ["Vous vous ennuyez beaucoup au travail ?", "Oui, on s'ennuie beaucoup au travail"],
          ["Tes enfants s'endorment facilement ?", "Oui, ils s'endorment facilement"],
        ]},
    ],
  },
  {
    tab: "Dormir",
    h: "3 · Dormir, s'endormir and se rendormir",
    blocks: [
      { t: "lead", v: "**Dormir**, \"to sleep\", is irregular, and *s'endormir*, \"to fall asleep\", and *se rendormir*, \"to go back to sleep\", take the same endings: *je dors*, \"I sleep\"; *je m'endors*, \"I fall asleep\"; *je me rendors*, \"I go back to sleep\"." },
      { t: "table", caption: "Present tense", dense: true,
        cols: ["Person", "dormir", "s'endormir", "se rendormir"],
        rows: [
          ["je", "je dors", "je m'endors", "je me rendors"],
          ["tu", "tu dors", "tu t'endors", "tu te rendors"],
          ["il, elle", "il, elle dort", "il, elle s'endort", "il, elle se rendort"],
          ["nous", "nous dormons", "nous nous endormons", "nous nous rendormons"],
          ["vous", "vous dormez", "vous vous endormez", "vous vous rendormez"],
          ["ils, elles", "ils, elles dorment", "ils, elles s'endorment", "ils, elles se rendorment"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["Je dors très bien en ce moment", "I'm sleeping very well at the moment"],
        ["Je vais dormir chez mon ami ce soir", "I'm going to sleep at my friend's tonight"],
        ["Je me rendors seulement plusieurs heures plus tard", "I only go back to sleep several hours later"],
      ]},
      { t: "sub", v: "Passé composé" },
      { t: "note", v: "Dormir takes avoir: *j'ai dormi*, \"I slept\". S'endormir and se rendormir take être, like every verb with se: *ils se sont endormis tard*, \"they fell asleep late\"." },
      { t: "table", caption: "Passé composé",
        cols: ["Person", "dormir"],
        rows: [
          ["je", "j'ai dormi"],
          ["tu", "tu as dormi"],
          ["il, elle", "il, elle a dormi"],
          ["nous", "nous avons dormi"],
          ["vous", "vous avez dormi"],
          ["ils, elles", "ils, elles ont dormi"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["Il a dormi toute la journée", "He slept all day"],
        ["Je me suis rendormi après le repas", "I went back to sleep after the meal"],
      ]},
    ],
  },
  {
    tab: "Se souvenir",
    h: "4 · Se souvenir, to remember",
    blocks: [
      { t: "lead", v: "**Se souvenir** means \"to remember\", and it is irregular: *je me souviens*, \"I remember\"." },
      { t: "table", bold: 1,
        cols: ["Person", "Present", "Passé composé"],
        rows: [
          ["je", "je me souviens", "je me suis souvenu"],
          ["tu", "tu te souviens", "tu t'es souvenu"],
          ["il", "il se souvient", "il s'est souvenu"],
          ["elle", "elle se souvient", "elle s'est souvenue"],
          ["nous", "nous nous souvenons", "nous nous sommes souvenus"],
          ["vous", "vous vous souvenez", "vous vous êtes souvenus"],
          ["ils", "ils se souviennent", "ils se sont souvenus"],
          ["elles", "elles se souviennent", "elles se sont souvenues"],
        ]},
      { t: "note", v: "In the passé composé it takes être, and souvenu takes -e for a woman, -s for two or more people when at least one is a man, and -es for two or more women: *elle s'est souvenue*, \"she remembered\". A woman writes *je me suis souvenue*, \"I remembered\"." },
      { t: "sub", v: "de or que" },
      { t: "note", v: "Put **de** before a person or a thing you remember: *je me souviens de ta sœur*, \"I remember your sister\"." },
      { t: "note", v: "De and le become **du**, and de and les become **des**: *ils se sont souvenus du rendez-vous*, \"they remembered the date\"." },
      { t: "note", v: "Put **que** before a whole sentence, or qu' before a vowel: *Alex se souvient qu'il doit partir*, \"Alex remembers that he has to leave\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je me souviens de ta sœur", "I remember your sister"],
        ["On se souvient des vacances", "We remember the holidays"],
        ["Je me suis souvenu du code", "I remembered the code"],
        ["Alex se souvient qu'il doit partir", "Alex remembers that he has to leave"],
      ]},
      { t: "sub", v: "Saying no" },
      { t: "note", v: "Ne goes straight before me, te, se, nous or vous, and pas after the verb: *je ne me souviens pas*, \"I don't remember\"; *nous ne nous souvenons pas*, \"we don't remember\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je ne me souviens pas de Melissa", "I don't remember Melissa"],
        ["Tu ne te souviens pas que Théo est à l'école ?", "Don't you remember that Théo is at school?"],
        ["Pour être honnête, je ne me souviens pas", "To be honest, I don't remember"],
      ]},
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Te becomes me, and \"my\" and \"your\" switch too: *Tu te souviens de ma marraine ?* → *Oui, je me souviens de ta marraine*, \"Do you remember my godmother? Yes, I remember your godmother\"." },
    ],
  },
  {
    tab: "Each other",
    h: "5 · Doing something to each other",
    blocks: [
      { t: "lead", v: "When se means \"each other\", the subject is two or more people, so it is on, nous, vous, ils or elles: *on se rencontre*, \"we meet\"." },
      { t: "table", caption: "Present tense",
        cols: ["Person", "se rencontrer · to meet"],
        rows: [
          ["on", "on se rencontre"],
          ["nous", "nous nous rencontrons"],
          ["vous", "vous vous rencontrez"],
          ["ils, elles", "ils, elles se rencontrent"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["On se voit très souvent", "We see each other very often"],
        ["Ils se disputent souvent", "They argue often"],
        ["Vous vous voyez tous les matins ?", "Do you see each other every morning?"],
        ["Ils s'embrassent tout le temps", "They kiss all the time"],
      ]},
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "Se voir can mean either: *je me vois dans le miroir*, \"I see myself in the mirror\", or *on se voit tous les lundis*, \"we see each other every Monday\"." },
    ],
  },
  {
    tab: "Past",
    h: "6 · Verbs with se in the passé composé",
    blocks: [
      { t: "lead", v: "Verbs with se make the passé composé with **être**, and the past participle usually changes to match the subject: *elle s'est habillée*, \"she got dressed\"." },
      { t: "table", caption: "Passé composé", dense: true,
        cols: ["Person", "se coucher", "se rencontrer"],
        rows: [
          ["je", "je me suis couché", "—"],
          ["tu", "tu t'es couché", "—"],
          ["il", "il s'est couché", "—"],
          ["elle", "elle s'est couchée", "—"],
          ["on", "on s'est couchés", "on s'est rencontrés"],
          ["nous", "nous nous sommes couchés", "nous nous sommes rencontrés"],
          ["vous", "vous vous êtes couchés", "vous vous êtes rencontrés"],
          ["ils", "ils se sont couchés", "ils se sont rencontrés"],
          ["elles", "elles se sont couchées", "elles se sont rencontrées"],
        ]},
      { t: "sub", v: "Endings" },
      { t: "note", v: "The endings are those of *fatigué*, \"tired\": -e for a woman, -s for two or more people when at least one is a man, and -es for two or more women." },
      { t: "note", v: "With je, tu, nous and vous, the ending matches who is speaking or spoken to: a woman writes *je me suis couchée*, \"I went to bed\"." },
      { t: "note", v: "When on means \"we\", the participle takes -s, or -es if they are all women: *on s'est rencontrés*, \"we met\"; *on s'est revues*, \"we saw each other again\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Elsa s'est maquillée et ensuite elle s'est habillée", "Elsa put on make-up and then got dressed"],
        ["Ils se sont endormis tard", "They fell asleep late"],
        ["On s'est revus le lendemain", "We saw each other again the next day"],
      ]},
      { t: "sub", v: "The past participle" },
      { t: "note", v: "*S'endormir*, *se revoir* and *se souvenir* have *dormir*, *voir* and *venir* inside them, and their past participles end the same way: *s'endormir → endormi*, \"to fall asleep → fallen asleep\", like *dormir → dormi*, \"to sleep → slept\"." },
      { t: "table", bold: 1,
        cols: ["Verb", "Past participle", "Like"],
        rows: [
          ["s'endormir · to fall asleep", "endormi", "dormir → dormi"],
          ["se revoir · to see again", "revu", "voir → vu"],
          ["se souvenir · to remember", "souvenu", "venir → venu"],
        ]},
      { t: "note", v: "*S'asseoir*, \"to sit down\", has a past participle of its own, *assis*, \"sat down\". It already ends in s, so it takes no second s: *on s'est assis pas loin de la tour Eiffel*, \"we sat down not far from the Eiffel Tower\"." },
      { t: "sub", v: "Before les dents or nos vies" },
      { t: "note", v: "**The trap:** when the verb is followed by what is brushed, told or sent, like *les dents*, \"teeth\", *nos vies*, \"our lives\", or *des messages*, \"messages\", the past participle takes no ending: *elle s'est brossé les dents*, \"she brushed her teeth\", not elle s'est brossée les dents." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Les enfants se sont brossé les dents", "The children brushed their teeth"],
        ["Vous vous êtes brossé les dents ?", "Did you brush your teeth?"],
        ["On s'est raconté nos vies", "We told each other about our lives"],
        ["On s'est envoyé des messages toute la nuit", "We texted all night"],
      ]},
      { t: "sub", v: "With or without se" },
      { t: "note", v: "Without se, the verb takes avoir: *j'ai rencontré mon copain chez des amis*, \"I met my boyfriend at some friends' place\", but *on s'est rencontrés chez des amis*, \"we met at some friends' place\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Tu t'es becomes je me suis, and vous vous êtes becomes on s'est or nous nous sommes: *Tu t'es réveillé tôt ?* → *Oui, je me suis réveillé tôt*, \"Did you wake up early? Yes, I woke up early\"." },
      { t: "table", bold: 1,
        cols: ["Question", "Answer"],
        rows: [
          ["Vous vous êtes rencontrés à l'hôpital ?", "Oui, on s'est rencontrés à l'hôpital"],
          ["Vous vous êtes raconté vos vies ?", "Oui, on s'est raconté nos vies"],
          ["Tu as rencontré ton copain chez des amis ?", "Oui, j'ai rencontré mon copain chez des amis"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "lecon11",
  title: "Lesson 11 · Verbs with se",
  subtitle: "Dormir, se souvenir, me, te, se in the present and the past, and each other",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her two
  // parts in her order, each with its word list first, as in Leçon 6: the
  // verbs before they are conjugated, and the sentences are made of these
  // words. Then each of her sections followed by the cards that practise it.
  // Part 1: dormir; verbs with se in the present (se coucher, then
  // s'endormir and se rendormir), answering yes with them, with or without
  // se, the sentences. Part 2: se souvenir, then de, du or que and saying no;
  // each other; the passé composé, then answering yes in it, the sentences.
  teachingOrder: [
    "words1",
    "dormir", "reflexive", "endormir", "yes1", "meaning", "sentences1",
    "words2",
    "souvenir", "souvenirde", "negative",
    "eachother",
    "past", "yes2", "sentences2",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape,
  // which wins over these, so "souvenir" and "past" each carry the line for
  // their one kind of non-drill card. Words and sentences, and the two "each
  // other" sentences, are two-way phrase cards and carry none.
  instructions: {
    yes1: "Answer yes in a full sentence",
    meaning: "Fill the gap with the right one of the two verbs, in the present tense",
    souvenir: "Answer yes in a full sentence",
    souvenirde: "Fill the gap with one of the three",
    negative: "Make this sentence negative",
    past: "Put this sentence in the passé composé",
    yes2: "Answer yes in a full sentence",
  },
};

export default LESSON;
