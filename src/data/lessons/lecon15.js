// Leçon 15 · Croire et attendre, imparfait ou passé composé — built from
// Laura Caufour's LFL METHOD Leçon 15 sheets: the lesson (Maxime tells how he
// left on a trip: the taxi, the périphérique, Roissy airport, check-in, the
// boarding gate; croire and attendre in the present, the passé composé and
// the imparfait; how to choose between the imparfait and the passé composé;
// numbers 90–99), the exercise sheet with her answer key, and her harder
// sheet "EXERCICES 2 - Leçon 15" ("EXERCICES DIFFICILES"), which has NO key
// in her folder: every answer taken from it is ours (see DEPARTURES).
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–14 and nothing else: by
// now être, aller, avoir, the -er verbs, vouloir, pouvoir, prendre, savoir,
// comprendre, apprendre, faire, voir, venir, dire, devoir, dormir, se
// souvenir, connaître and mettre; the passé composé with avoir and être, its
// negative and the pronominal verbs in it; me, te, lui, nous, vous, leur;
// the imparfait (Leçon 13: the nous form of the present without -ons, plus
// -ais, -ais, -ait, -ions, -iez, -aient); ne … que; the comparative; si as
// "if"; and Leçon 14's ways of asking (est-ce que, inversion) and si after a
// negative question. No card asks for more than that plus this lesson.
// Questions are asked the way Laura asks them, by intonation ("Tu croyais
// que j'étais américaine ?"), or with est-ce que where her key has it.
//
// Card shapes:
//   "croire (présent) → je" / "je crois"            drill; its line comes from its shape
//   "croire (passé composé) → je" / "j'ai cru"      the same in the passé composé
//   "croire (imparfait) → nous" / "nous croyions"   the same in the imparfait
//   "en ou que → Je crois ___ Dieu"                 croire en + a noun, croire que + a sentence
//   "pleuvoir → Il ___ quand elle est arrivée"      imparfait or passé composé, exact
//   "Tu sais ça ? → au passé"                       the whole sentence in the past, choosing
//                                                    the tense of each verb (her EXERCICES 2)
//   "Je lui ai dit : « … » → au discours indirect"  reported speech (her ex. 9)
//   "Tu croyais que j'étais américaine ? → Oui, …"  answer yes in a full sentence (her ex. 6)
//   "91 → en lettres" / "quatre-vingt-onze"
//   "décoller" / "to take off (a plane)"            words and phrases, both ways round
//
// WHY THE TENSE CHOICE IS ON EXACT CARDS. The choice between the imparfait
// and the passé composé is the lesson's main point, and a phrase card is
// marked fuzzily. On the reported-speech sentences the wrong tense is inside
// the allowance ("Il m'a dit qu'il est fatigué" is three edits from "…
// qu'il était fatigué", the most a sentence that long is allowed), so every
// reported-speech change is an exact card (her ex. 9) and no phrase card
// here is a reported sentence. The choice
// itself is tested on exact gap cards, each naming the verb, whose line
// names both tenses ("Fill the gap with the verb in the imparfait or the
// passé composé, whichever fits"), and on exact "→ au passé" cards. Every gap
// card's subject is one that takes both tenses without changing the words
// around the gap (il, elle, on, nous, a noun): after je or ne, the passé
// composé needs j' or n', so the shape of the gap would give the answer
// away. Where a sentence taken out of her story fits both tenses, it gets
// back the words that decide it (see DEPARTURES, the gap cards), or the card
// takes both. The phrase cards that remain are her translations whose English
// tense decides the French (her ex. 8 and 10: "I was waiting", "We used
// to rent", "Has the plane taken off?"); there the two tenses are far more
// than the allowance apart ("J'ai attendu dans la cuisine" is refused for
// "J'attendais dans la cuisine", tried), so, typed in French, they check the
// choice between the imparfait and the passé composé as well. They do not
// check the present against the past: see the blind spots below.
//
// Blind spots of the phrase cards that no wording removes, as in Leçons 5
// and 9 (all tried):
//   - A present typed for the past, or the past for the present, is two or
//     three letters off and passes: "Pourquoi tu es à l'aéroport ?" for "… tu
//     étais …" (though "Pourquoi tu as été …" is refused), "On loue …" for
//     "On louait …", "J'attends dans la cuisine" for "J'attendais …", "J'ai de
//     la chance !" for "J'ai eu …", "Il attendait le chauffeur …" for "Il
//     attend …", "Vous m'attendiez ?" for "Vous m'attendez ?".
//   - "Est-ce que l'avion est décollé ?" (être for avoir) passes for "… a
//     décollé ?", though "… décollait ?" is refused.
//   - "On a pris plus d'une heure …" passes for "On a mis …".
//   - With the French shown, the English "Was the plane taking off?" passes
//     for "Has the plane taken off?" (three letters apart).
// The exact cards carry those points: the croire and attendre drills, Leçon
// 13's drills and "être → Ils ___ très différents" ask for each imparfait
// exactly; "décoller → Hier, l'avion ___ à l'heure" asks for a décollé, and
// every other passé composé gap takes only its own auxiliary; "mettre → Hier,
// nous ___ plus d'une heure …" asks for mis; and the "→ au passé" cards ask
// for each verb's tense exactly.
//
// WHY THE ENGLISH OF "Il y avait beaucoup de monde mais j'ai pu entrer" HAS NO
// COMMA. When the French is shown and has no comma, the app takes every comma
// piece of the English as an answer on its own, however long
// (FlashcardApp.jsx, the `meanings` flag in submitTyped). With "There were a
// lot of people, but I was able to get in", typing only "There were a lot of
// people" was marked right (tried, with a copy of the app's marking that sets
// the flag; lessoncheck --try does not set it). Without the comma, each half
// is refused and the whole sentence, typed with or without the comma, is
// right. It is the only word or phrase card here with a comma in its English
// and none in its French.
//
// WHY "attendre pour" IS ON PHRASE CARDS. Her rule is that attendre takes
// what you wait for straight after it, never "attendre pour". A gap card
// can't ask for "no word", and a phrase card refuses the extra "pour" (five
// letters, over the allowance: "Il attend pour le chauffeur de taxi" is
// refused, tried). So three of her attendre sentences are phrase cards. The
// word card "attendre" can't refuse it: "attendre pour" contains the answer,
// and the app takes a typed answer that contains it. Its English therefore
// says "(never with pour)", as Leçon 10's "Je crois" says "(not je pense)".
//
// THE DRILLS. Croire and attendre are new verbs, so each has its six-person
// present. Both take avoir in the passé composé, so the il/elle swap the
// app adds is safe, and there are only participles to learn (cru, attendu):
// two drills each. The imparfait drills are the persons that teach something:
// croire je (croyais, the y), nous and vous (croyions, croyiez, the y and
// the i together, one letter from the present); attendre je (j'attendais)
// and nous (attendions, one letter from attendons). The imparfait drills of
// être, avoir, aller, aimer, prendre, vouloir and savoir are Leçon 13's.
// "Je crois" is a phrase card of Leçon 10's list; the drills are this
// lesson's, because this is the lesson whose grammar teaches croire.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her Leçon 15 has no word list ("Comment on dit …" is missing from this
//     sheet). The word cards are the text's new words, which her
//     translations (ex. 5, 8, 10) and answers (ex. 6) keep using, with the
//     English of her translation of the text (her ex. 3 key): croire,
//     attendre, fermer, courir, décoller, embarquer, se dépêcher, faire ses
//     valises, un chauffeur de taxi, le périphérique, l'autoroute, des
//     embouteillages, l'aéroport, l'enregistrement, une hôtesse, les
//     bagages à main, la porte d'embarquement, en bas, heureusement, juste
//     à temps, and two of her sentences: "On a mis plus d'une heure pour
//     arriver là-bas" (ex. 10 no. 14: mettre for "it took") and "J'ai eu de
//     la chance !" (the text). Left out: rejoindre ("to get onto" the
//     motorway, a verb no exercise uses again), une valise (faire ses
//     valises carries it), le contrôle des bagages (her own translation
//     hesitates), en retard and il y a du monde (Leçons 11 and 12's lists),
//     en fait (Leçon 2), avoir de la chance (Leçon 9; this lesson has it in
//     the passé composé, as a sentence).
//   - ex. 1 and 2 (write a sentence with each form of croire and attendre)
//     have no single answer. The drills ask for the forms; her sentences are
//     examples in the notes ("Tu crois qu'il va venir ?" is the qu' gap card).
//   - Croire's constructions (her grammar box): two gap cards, en (Je crois en
//     Dieu) and qu' (Tu crois qu'il va venir ?). "Il a toujours cru en la
//     méritocratie" is the same en; it is in the notes.
//   - Attendre's constructions: her "attendre + COD, never attendre pour"
//     gives three phrase cards (see WHY "attendre pour" …), her lesson's two
//     examples and her ex. 2 "Vous m'attendez ?" (a pronoun, not pour moi).
//     "Attendre que + subjonctif" (J'attends que tu viennes) needs the
//     subjunctive, which the course never teaches: no card, and it is left
//     out of the notes too.
//   - Her two rules, the simplified one (English tense → French tense) and
//     the complete one (three uses of each tense), are sampled card by card:
//       imparfait, habit: "cuisiner → Quand j'étais petit, ma grand-mère ___
//         tout le temps" (ex. 7 no. 4), and the phrase cards "On louait une
//         maison à la campagne" ("used to", ex. 8 no. 17) and "Quand
//         j'habitais en France, j'allais souvent à Marseille" (ex. 10 no. 10);
//       imparfait, the scene and an action going on: "pleuvoir → Il ___ quand
//         elle est arrivée" (lesson), "fermer → Quand je suis arrivé,
//         l'hôtesse ___ déjà la porte" (the text: "l'hôtesse fermait la
//         porte"), "Il fait très beau et l'eau est très claire → au passé"
//         (ex. 7 no. 5, her model of a scene) and "Je finis de faire mes
//         valises quand le chauffeur de taxi m'appelle → au passé" (the text,
//         put back in the present), and the phrase card "J'attendais dans la
//         cuisine" ("I was waiting", ex. 8 no. 1);
//       imparfait after a past verb: "Je crois que je décolle du terminal 1 →
//         au passé" (the text), "Il lui demande ce qu'elle veut → au passé"
//         (EXERCICES 2 ex. 3), and the reported-speech cards;
//       passé composé, one event: "sonner → Je mangeais tranquillement quand
//         quelqu'un ___ à la porte" (ex. 7 no. 7), "décoller → Hier, l'avion
//         ___ à l'heure" (ex. 10 no. 12: décoller takes avoir, which the
//         phrase card below lets slip) and the phrase card "Est-ce que l'avion
//         a décollé ?" ("Has the plane taken off?", ex. 8 no. 10);
//       passé composé, a number of times: "être → On ___ aux États-Unis
//         plusieurs fois" (ex. 8 no. 6), which is also the exception to "être
//         is usually in the imparfait";
//       passé composé, a length of time: "pleuvoir → Hier, il ___ toute la
//         journée" (lesson, ex. 8 no. 15, ex. 10 no. 9) and "mettre → Hier,
//         nous ___ plus d'une heure pour arriver à l'aéroport" (the text).
//     Her Remarque (être, savoir, connaître, vouloir are usually imparfait):
//     one card each, "être → Ils ___ très différents" (EXERCICES 2 ex. 2),
//     "Tu sais ça ? → au passé" (her ex. 8 no. 11, "Tu savais ça ?"),
//     "connaître → Il ___ seulement une personne quand il est arrivé"
//     (lesson), "Il lui demande ce qu'elle veut → au passé" (voulait, the
//     only answer there), plus the phrase card "Pourquoi tu étais à
//     l'aéroport ?" (ex. 8 no. 8: "Why were you …?" is j'étais, her être
//     table). "Il ne veut pas aller là-bas, mais il change d'avis → au
//     passé" (ex. 5 no. 16) is there for "a changé d'avis", and takes either
//     tense of vouloir (see DEPARTURES). Her Remarque 2 (devoir): "devoir →
//     Il y avait beaucoup de monde donc nous ___ attendre" (her lesson's
//     avons dû, and devions, see DEPARTURES), and two phrase cards, "Je
//     devais aller chercher ma mère à l'aéroport" ("I was supposed to", ex.
//     5 no. 13 and ex. 10 no. 6) and "J'ai dû courir dans tout l'aéroport"
//     (the text: "I had to, and I did"). Vouloir's two meanings are in the
//     notes only: her lesson has no sentence with "il a voulu", and a
//     made-up one would be ours twice over.
//   - ex. 3 (translate the text into English) is the English the word cards
//     use. ex. 4 (questions on the text) tests the story.
//   - ex. 5, 8 and 10 (translations): eight phrase cards, those listed above
//     (ex. 8 nos. 1, 8, 10, 17; ex. 10 no. 10; ex. 5 no. 13 with ex. 10 no.
//     6), "Il y avait beaucoup de monde mais j'ai pu entrer" (ex. 5 no. 9,
//     both tenses in one sentence) and the word card "On a mis plus d'une
//     heure pour arriver là-bas" (ex. 10 no. 14); four more are gap or
//     "→ au passé" cards (ex. 8 nos. 6, 11 and 15; ex. 10 no. 12), and ex. 8
//     no. 22 is the word card "J'ai eu de la chance !". The rest repeat what one of these
//     cards asks: an action going on, or the scene, with or without an event
//     (ex. 5 nos. 1, 5, 8, 12, 14, 17, 20; ex. 8 nos. 5, 7, 12, 14, 18, 24;
//     ex. 10 nos. 1, 2, 7, 8, 15, 18), a habit (ex. 5 no. 2; ex. 10 nos. 20,
//     22), a length of time (ex. 5 no. 21), être (ex. 8 nos. 16 and 20, which
//     are examples in the notes), je devais or j'ai dû (ex. 5 nos. 7, 19; ex.
//     10 no. 21); or they are reported speech or a verb after que, which a
//     phrase card can't check (ex. 5 nos. 3, 4, 6, 11, 18; ex. 10 nos. 4, 5,
//     11, 13), negative (ex. 5 nos. 10, 15, 16, 22, 23; ex. 8 nos. 4, 19, 25,
//     26; ex. 10 nos. 16, 23: Leçons 5, 9 and 10 keep negatives off phrase
//     cards, because "ne" can be dropped within the allowance), the passé
//     composé alone, Leçon 7's grammar (ex. 8 nos. 2, 3, 9, 13, 21, 23; ex.
//     10 nos. 3, 17), or have a slip (see DEPARTURES). Ex. 10 no. 19, "I
//     waited for Maxime at the boarding gate → J'attendais Maxime …", is left
//     out: for that English "J'ai attendu Maxime" is just as right, and the
//     card would mark it wrong.
//   - ex. 6 (answer yes): five cards, one per thing that changes: tu → je
//     with toi → moi and two tenses (no. 1), croire with j' → tu (no. 4), the
//     reported "tu devais te dépêcher" → "je devais me dépêcher" (no. 6), je
//     t' → tu m' with attendre (no. 14), vous → on, nous or je with attendre
//     (no. 16). No. 5 ("Vous avez attendu Rebecca pour partir ?") is left
//     out: its "pour partir" is "in order to leave", which beginners would
//     take for the "attendre pour" the lesson forbids. The others repeat one
//     of these switches.
//   - ex. 7 (write three sentences of each kind) is open; her model sentences
//     are examples in the notes, two are gap cards (nos. 4 and 7), and one is
//     a "→ au passé" card (no. 5, "Il faisait très beau et l'eau était très
//     claire"). That card replaced the text's "Il pleut et il y a beaucoup
//     d'embouteillages → au passé": its pleuvait is on the pleuvoir gap card
//     and its il y avait on Leçon 13's "Il y a une télé à la maison → à
//     l'imparfait", while il faisait is on no card. Her lesson's own scene
//     example, "Il faisait beau et il y avait du monde", was not used: "Il a
//     fait beau et il y a eu du monde" reads as natural French for a summary
//     of the day, and Leçon 9 drills "Il fait beau → au passé composé". In
//     no. 5, clear water is no event ("l'eau a été très claire" isn't
//     said), so the sentence reads only as a scene. L'eau (Leçon 17's word)
//     and claire are copied from the front: the card asks only for the two
//     verbs.
//   - ex. 9 (reported speech): nine cards, one per change: aller + a verb
//     (no. 1, her worked example), devoir (no. 2), croire que inside (no. 3),
//     ne … pas around the new verb (no. 7), attendre (no. 8), tu → il or elle
//     (no. 11), a yes-or-no question → si, s'il (no. 12), a question word that
//     stays (no. 13), il y a → il y avait with s'il (no. 16). Nos. 6, 9, 10,
//     14, 15, 18, 19 and 20 are examples in the notes; no. 5 repeats no. 1;
//     no. 17 repeats no. 2.
//   - EXERCICES 2 (no key): ex. 1–2 (gap texts) gave "Ils ___ très
//     différents"; most of their other gaps need words the course hasn't
//     given (la haie, trôner, régner, chétif). Ex. 3–4 (put a text in the
//     past) gave "Il lui demande ce qu'elle veut"; their other sentences need
//     écrire, boire, ne … personne, or repeat a card.
//   - ex. 11–13 are oral or a dictation.
//   - Numbers: 90 (the round ten: no -s on vingt), 91 (no et, unlike 71), 95
//     (quinze, standing for 92–96), 97 (dix-sept, standing for 97–99) and
//     99, the last before 100 (as Leçons 8–10 end on 49, 59, 69). 92–94, 96
//     and 98 follow the same patterns.
//
// DEPARTURES FROM HER SHEETS:
//   - "une demie heure" (her attendre example) is une demi-heure: before a
//     noun, demi doesn't change and takes a hyphen (OQLF, Banque de dépannage
//     linguistique, "Emploi de demi selon sa classe de mots",
//     vitrinelinguistique.oqlf.gouv.qc.ca/21752).
//   - "Il pleuvait quand elle est arrivé" (her lesson): arrivée, since
//     arriver takes être and elle is a woman.
//   - ex. 9 no. 3: her key "Je t'ai dit que je croyais ce n'était pas normal"
//     drops the second que. The card's answer is "… que je croyais que ce
//     n'était pas normal".
//   - Slips corrected where the notes use the sentence: ex. 9 no. 6 "que
//     j'avait avais" (j'avais), no. 9 "Je t'ai de dit" (Je t'ai dit), no. 18
//     ends a statement with "?"; her table's "I used to listened" (listen).
//   - ex. 8 no. 11 "Tu savais ca?" is "Tu savais ça ?" (the "→ au passé" card).
//   - ex. 7 no. 5 "l'eau était très clair" is "… très claire" (l'eau is
//     feminine; the "→ au passé" card).
//   - Slips no card or note copies: "elle m' a vu" (the text's spacing), "J
//     'attends" (ex. 2), ex. 4 no. 8 "de Terminal 2", no. 10 "contrôle de
//     bagages", no. 11 "faisait fermait … Maximes", ex. 5 no. 11 "il
//     t'attendais" (t'attendait), no. 23 "Tu n'a pas vu" (as), ex. 6 no. 2
//     "Il" in mid-sentence, ex. 7 "Il a plus" (plu),
//     "Les voiture ne pouvait pas" (voitures … pouvaient), her
//     lesson's "bleue turquoise" (a two-word colour doesn't change: bleu
//     turquoise), ex. 8 no. 13 "faire des tes valises", ex. 10 no. 15
//     "beaucoup embouteillages" (d'embouteillages), no. 17 "Carte Vital", the
//     dictation's "Il t'as dit" and "pour arrivez".
//   - ex. 5 no. 21 gives "It was raining all day" for "Il a plu toute la
//     journée"; her ex. 10 no. 9 gives "It rained the whole day", which the
//     notes follow, since the passé composé is the point.
//   - The gap cards are her sentences with the verb taken out. Six are
//     adjusted so only one tense fits or the subject leaves the gap open:
//     "Hier," added to "Il a plu toute la journée" and to the text's "nous
//     avons mis plus d'une heure pour arriver à l'aéroport" (without it,
//     either could be a habit); "Quand j'étais petit," (her lesson's habit
//     example) added to "Ma grand-mère cuisinait tout le temps"; "Je
//     connaissais … quand je suis arrivé" becomes "Il connaissait … quand il
//     est arrivé" (after je, a passé composé would need j'); her ex. 10 no.
//     12 "On a décollé à l'heure" becomes "Hier, l'avion ___ à l'heure" (a
//     single event, and the plane makes the meaning of décoller plain); and
//     the text's "l'hôtesse fermait la porte" becomes "Quand je suis arrivé,
//     l'hôtesse ___ déjà la porte". Out of the story, "L'hôtesse ___ la porte
//     quand je suis arrivé" also took "a fermé" (she shut it once I was
//     there), a right answer the card refused. With déjà after the gap, a
//     passé composé doesn't fit ("a fermé déjà" is the wrong order, and with
//     quand je suis arrivé it would need the plus-que-parfait, which the
//     course hasn't taught); "fermait déjà", "was already closing", is her
//     story. Déjà is Leçon 11's word.
//   - "devoir → Il y avait beaucoup de monde donc nous ___ attendre" keeps
//     her sentence and takes "devions" as well as her "avons dû": by her own
//     Remarque 2, "nous devions attendre" is "we had to wait" without saying
//     whether we did, which nothing in the sentence rules out. Adding "Hier,"
//     would not settle it, since devions still fits after it. The card asks
//     for devoir in either past tense; the difference in meaning is in the
//     notes and on the two devoir phrase cards.
//   - "Ils ___ très différents" (EXERCICES 2, no key) is answered étaient: it
//     describes two people, her use (b) and her Remarque on être.
//   - The "→ au passé" cards: her text's sentences put back in the present,
//     with her text as the answer, and her EXERCICES 2 ex. 3 (no key: the
//     answers to "Il lui demande ce qu'elle veut" are ours), and ex. 5 no.
//     16, ex. 7 no. 5 and ex. 8 no. 11, put in the present. "Je crois que je
//     décolle du terminal 1" also takes "J'ai cru que je décollais …": her
//     own ex. 6 no. 17 key says "j'ai cru que", and the card is there for
//     décollais. It takes "terminal un" as well as "terminal 1". "Je finis de
//     faire mes valises quand le chauffeur de taxi m'appelle" also takes "m'a
//     appelée", from a woman. "Il lui demande ce qu'elle veut" takes "Il lui
//     a demandé …" and "Il lui demandait …": in her text, "Soudain, le garçon
//     arrive" makes it one event, but soudain is in no lesson, and on its own
//     "he was asking her" fits too; voulait, the card's point, is the only
//     answer for the second verb. "Il ne veut pas aller là-bas, mais il
//     change d'avis" takes "Il ne voulait pas …" (her ex. 5 no. 16) and "Il
//     n'a pas voulu …", "he refused to go", which is good French: refusing
//     and then changing your mind don't contradict each other (Lawless
//     French, "Passé composé vs imparfait: meaning changes",
//     lawlessfrench.com/grammar/passe-compose-vs-imparfait-3/: "Il n'a pas
//     voulu le finir", "he refused to finish it"). "Il fait très beau et l'eau
//     est très claire" takes only "Il faisait … était …": the two halves
//     describe one scene, her use (b).
//   - ex. 9 accepts a little more than her key where a teacher would: no. 11
//     "qu'elle devait" beside her "qu'il devait" and no. 12 "si elle allait"
//     beside her "s'il allait" (lui is him or her); no. 13 also takes the
//     written order "à quelle heure décollait l'avion".
//   - ex. 6: the prompt shows "Oui, …", so each answer is also accepted
//     without it, as in Leçons 1–14. No. 6 also takes "elle m'a dit" for her
//     "l'hôtesse m'a dit", and no. 1 "quand il est arrivé" for her "quand le
//     chauffeur est arrivé", as Leçon 5 takes the noun or the pronoun. No. 16:
//     her key answers with on; nous, and je (vous said to one person), are
//     accepted too, and so is "longtemps" before attendu, as Leçon 10 takes
//     "Il leur a longtemps parlé".
//   - Word and phrase cards take more English than her translation where a
//     teacher would: "to think" beside "to believe" for croire (the notes
//     translate croire que as "think", and Leçon 10's "Je crois" takes "I
//     believe / I think (not je pense)"; "(not penser)" keeps the reverse
//     to croire); "to go on board / to embark" beside "to board" for
//     embarquer (Larousse français-anglais, "embarquer",
//     larousse.fr/dictionnaires/francais-anglais/embarquer/28401);
//     "luckily / fortunately / thankfully" beside her "happily"; "motorway /
//     highway" beside her "freeway"; "beltway" beside her "ring road";
//     "traffic" beside "traffic jams" (her ex. 8 no. 24 "a lot of
//     traffic"). Hints where other French fits the same English: "(with on
//     and mettre)" on "On a mis plus d'une heure …" (nous, and "ça nous a
//     pris", are right too), "(with on)" on "On louait …", "(tu, question
//     mark only)" on "Pourquoi tu étais …" and "(vous, question mark only)"
//     on "Vous m'attendez ?" (Leçon 14 taught inversion and est-ce que, and
//     "Pourquoi étais-tu …", "Pourquoi est-ce que tu étais …" and
//     "M'attendez-vous ?" are refused, tried; the label is Leçon 14's, as in
//     Leçons 17 and 19), "(with est-ce que)" on "Est-ce que l'avion a
//     décollé ?", "(and I did)" on "J'ai dû courir …" (her Remarque 2: je
//     devais is "I had to" too, when it doesn't say whether I did), "(never
//     with pour)" on attendre (see WHY "attendre pour" …).
//     "Je devais aller chercher ma mère …" takes both of her translations,
//     "I was supposed to pick up my mother from the airport" (ex. 5) and "I
//     had to go to the airport to pick up my mom" (ex. 10), and each of "I
//     was supposed to" and "I had to pick up" with mother or mom and at or
//     from: mom and mother, and at and from, are each four letters apart,
//     more than the allowance, so each is listed (mum passes for mom). It
//     shows "go and pick up" first, so that the English points to aller
//     chercher, not Leçon 11's venir chercher. Still refused, since the list
//     can't hold every mix: "go and pick up my mom", and "I had to go and
//     pick up …".
//   - 90–99: her spellings stand; they are the same in the traditional and
//     the 1990 spelling, with a hyphen between every part, no et in 91 and no
//     -s on vingt (OQLF, "Écriture des déterminants numéraux",
//     vitrinelinguistique.oqlf.gouv.qc.ca/23494; Académie française,
//     "Questions de langue", dictionnaire-academie.fr/article/QDL057). The
//     Belgian and Swiss nonante is not accepted: her course teaches the
//     French of France, and its 90s are all quatre-vingt-.
//   - In the notes, her Remarque 2 "Il a voulu partir: He wanted to leave (and
//     he did)" becomes "he tried to leave" or "he decided to leave", "says he
//     did something about it", with "il n'a pas voulu partir", "he refused to
//     leave". The passé composé of vouloir is the wanting acted on at one
//     moment, and does not say the leaving happened: "il a voulu partir, mais
//     on l'a retenu" is ordinary French (Académie française, Dictionnaire, 9e
//     édition, "vouloir", I.1: "Se déterminer à faire quelque chose, en avoir
//     l'intention, en prendre la décision",
//     dictionnaire-academie.fr/article/A9V1230; Lawless French, cited above:
//     decided to, tried to; negative, refused to). Her devoir line stands.
//   - Her construction line is "croire + en + nom". The note limits it to
//     believing in God and having faith in someone or an idea, which all her
//     examples are (Dieu, la méritocratie): to believe that something exists
//     is croire à (Académie française, Dictionnaire, 9e édition, "croire":
//     "Croire à, postuler la réalité de. Croire au loup-garou, aux fantômes";
//     "Croire en … Croire en Dieu", with the stress on trust,
//     dictionnaire-academie.fr/article/A9C5041). A student told "en before
//     someone or something" would write "croire en les fantômes". Croire à
//     itself is not taught: her lesson doesn't have it.
//   - Her introduction says some English tenses have "un équivalent
//     parfait" in French. The note says "usually": with for or since, the
//     present perfect is the French present (her ex. 2 "J'attends depuis 2
//     heures"; Leçon 14's "Tu es là depuis combien de temps ?", "How long have
//     you been here?").
//
// THE NOTES are her lesson translated into English and restructured on the
// impératif's model: Use (what croire and attendre mean and what follows
// them), Forms (her two tables), Past tenses (her simplified and complete
// rules, the Remarque, and Remarque 2 under Detail · advanced), Reported
// speech (her imparfait use (c) and her ex. 9), Numbers. Her text and its
// translation are left out, and so is "attendre que + subjonctif" (no
// card; beginners haven't met the subjunctive). Every French example is
// hers (lesson, exercises, key), except "il attend" in the Forms note, which
// is her table's, and "quatre-vingts" in the Numbers note, which is Leçon
// 13's 80 (her list starts at 90). Her lesson's examples have no English, nor do her ex. 1,
// 2, 6, 7 and 9: the English beside them is ours; her own translations (the
// text, ex. 5, ex. 8 and 10) are used where she gives one. No word list
// (owner, 2026-10-05).
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her examples or her key show
// each of these, but her lesson never says it, and a card that tests a rule
// needs the rule stated:
//   - Use: "or 'to think'" in the opening sentence (her ex. 1 sentence
//     "Je crois que c'est trop tard" is "I think …"; the English is ours, as
//     for all of ex. 1); the croire en note's
//     "God, or … faith in someone or in an idea" (see DEPARTURES); "To
//     believe or think that something is so, put que before a whole
//     sentence" (her construction line; her "à l'indicatif" is left out,
//     since what it rules out is the subjunctive, which beginners haven't
//     met); "Before a vowel, que becomes
//     qu'" (her "Tu crois qu'il va venir ?"); "Me, te, nous and vous go just
//     before it" (her "Vous m'attendez ?", "Ses parents t'ont attendu ?").
//   - Forms: the opening "don't follow the -er pattern: learn their forms by
//     heart" (her heading says "irregular verbs"); "Both take avoir in the
//     passé composé" (her tables show it); the croyions note restates Leçon
//     13's rule for making the imparfait, applied to croire; "With il and
//     elle, attendre ends in -d" (her table shows il attend).
//   - Past tenses: the opening sentence sums up her complete rule in one
//     line; "Some English tenses usually give the same French tense" is her
//     introduction, shortened (see DEPARTURES for "usually"); "Use it after
//     a verb in the past, for the part that follows que" is her use (c) in
//     plain words; "The trap:" (her rule (c) for the passé composé, with her
//     example; the wrong form is ours); "Décoller, 'to take off', takes
//     avoir, not être" (her key has "a décollé" three times, ex. 4 no. 8, ex.
//     8 no. 10, ex. 10 no. 12, whose sentence is the example); "Both in one
//     sentence" (her ex. 7 no. 7 asks for it; her rule (b) says "in a story
//     told in the passé composé"; the examples are her lesson's and ex. 7's);
//     "Être, savoir, connaître and vouloir are usually in the imparfait" is
//     her Remarque; "Say how many times and it is the passé composé too",
//     with her ex. 8 no. 20 (her être table and her rule (b) together); both
//     "Answering yes" notes (her ex. 6 key shows them); the vouloir note's
//     "tried", "decided" and "refused" (see DEPARTURES); the opening "Devoir
//     changes meaning with the tense" of the devoir note is her Remarque 2's
//     heading.
//   - Reported speech: the opening sentence (her use (c) and her ex. 9);
//     "Put que, or qu' before a vowel, between je lui ai dit and the words
//     that were said, and leave out the quotation marks" (her ex. 9 key);
//     the two "Questions" notes, si → s' before il and ils, and a question
//     word staying at the front (her ex. 9 nos. 12–20); both "Changing the
//     person" notes, tu → il or elle (her ex. 9 nos. 11, 15 and 19) and vous
//     → ils or elles (her ex. 9 no. 20).
//   - Numbers: the opening sentence and both notes. Her section is the list
//     alone.

export const CARDS = [
  // ── The text's words (her sheet has no word list): the verbs first, then
  //    the trip
  ["croire", "to believe / to think (not penser)", "V", "words"],
  ["attendre", "to wait / to wait for (never with pour)", "V", "words"],
  ["fermer", "to close / to shut", "V", "words"],
  ["courir", "to run", "V", "words"],
  ["décoller", "to take off (a plane)", "V", "words"],
  ["embarquer", "to board (a plane) / to go on board / to embark", "V", "words"],
  ["se dépêcher", "to hurry / to hurry up / to rush", "V", "words"],
  ["faire ses valises", "to pack / to pack one's bags / to pack your bags / to pack one's suitcases", "V", "words"],
  ["un chauffeur de taxi", "a taxi driver / a cab driver", "V", "words"],
  ["le périphérique", "the ring road / the beltway (around Paris)", "V", "words"],
  ["l'autoroute (f)", "the motorway / the freeway / the highway", "V", "words"],
  ["des embouteillages (m)", "traffic jams / traffic", "V", "words"],
  ["l'aéroport (m)", "the airport", "V", "words"],
  ["l'enregistrement (m)", "check-in / the check-in (at the airport)", "V", "words"],
  ["une hôtesse", "an attendant / a flight attendant / a hostess (a woman)", "V", "words"],
  ["les bagages à main (m)", "hand luggage / hand baggage / carry-on luggage / carry-on bags", "V", "words"],
  ["la porte d'embarquement", "the boarding gate / the gate", "V", "words"],
  ["en bas", "downstairs / down below", "V", "words"],
  ["heureusement", "luckily / fortunately / thankfully / happily", "V", "words"],
  ["juste à temps", "just in time", "E", "words"],
  ["On a mis plus d'une heure pour arriver là-bas", "It took us more than an hour to get there / It took us over an hour to get there / We took more than an hour to get there (with on and mettre)", "E", "words"],
  ["J'ai eu de la chance !", "I was lucky! / I've been lucky! / I got lucky!", "E", "words"],

  // ── 1. Croire: present, passé composé (avoir + cru), imparfait
  ["croire (présent) → je", "je crois", "G", "croire"],
  ["croire (présent) → tu", "tu crois", "G", "croire"],
  ["croire (présent) → il/elle", "il croit", "G", "croire"],
  ["croire (présent) → nous", "nous croyons", "G", "croire"],
  ["croire (présent) → vous", "vous croyez", "G", "croire"],
  ["croire (présent) → ils/elles", "ils croient", "G", "croire"],
  ["croire (passé composé) → je", "j'ai cru", "G", "croire"],
  ["croire (passé composé) → ils/elles", "ils ont cru", "G", "croire"],
  ["croire (imparfait) → je", "je croyais", "G", "croire"],
  ["croire (imparfait) → nous", "nous croyions", "G", "croire"],
  ["croire (imparfait) → vous", "vous croyiez", "G", "croire"],

  // Croire en + a noun, croire que + a sentence (her construction box)
  ["en ou que → Je crois ___ Dieu", "en", "G", "croireen"],
  ["en ou que → Tu crois ___ il va venir ?", "qu'", "G", "croireen"],

  // ── … and attendre: present, passé composé (avoir + attendu), imparfait
  ["attendre (présent) → je", "j'attends", "G", "attendre"],
  ["attendre (présent) → tu", "tu attends", "G", "attendre"],
  ["attendre (présent) → il/elle", "il attend", "G", "attendre"],
  ["attendre (présent) → nous", "nous attendons", "G", "attendre"],
  ["attendre (présent) → vous", "vous attendez", "G", "attendre"],
  ["attendre (présent) → ils/elles", "ils attendent", "G", "attendre"],
  ["attendre (passé composé) → tu", "tu as attendu", "G", "attendre"],
  ["attendre (passé composé) → nous", "nous avons attendu", "G", "attendre"],
  ["attendre (imparfait) → je", "j'attendais", "G", "attendre"],
  ["attendre (imparfait) → nous", "nous attendions", "G", "attendre"],

  // Attendre + what you wait for, never "attendre pour": the phrase cards
  // refuse the extra pour (see the header).
  ["Il attend le chauffeur de taxi", "He's waiting for the taxi driver / He is waiting for the taxi driver / He waits for the taxi driver", "E", "attendrephrases"],
  ["J'ai attendu le médecin une demi-heure", "I waited for the doctor for half an hour / I waited half an hour for the doctor / I've waited for the doctor for half an hour", "E", "attendrephrases"],
  ["Vous m'attendez ?", "Are you waiting for me? / Will you wait for me? (vous, question mark only)", "E", "attendrephrases"],

  // ── 2. Which past tense. Her simplified rule: the English tense decides
  //    (her ex. 8 and 10, and ex. 5 for devoir)
  ["J'attendais dans la cuisine", "I was waiting in the kitchen", "E", "tenses"],
  ["On louait une maison à la campagne", "We used to rent a house in the countryside / We used to rent a house in the country (with on)", "E", "tenses"],
  ["Quand j'habitais en France, j'allais souvent à Marseille", "When I lived in France, I often went to Marseille / When I lived in France, I used to go to Marseille often / When I was living in France, I often went to Marseille", "E", "tenses"],
  ["Pourquoi tu étais à l'aéroport ?", "Why were you at the airport? (tu, question mark only)", "E", "tenses"],
  ["Est-ce que l'avion a décollé ?", "Has the plane taken off? / Did the plane take off? (with est-ce que)", "E", "tenses"],
  ["Il y avait beaucoup de monde mais j'ai pu entrer", "There were a lot of people but I was able to get in / There were a lot of people but I could get in / There were a lot of people but I was able to enter", "E", "tenses"],
  ["Je devais aller chercher ma mère à l'aéroport", "I was supposed to go and pick up my mother at the airport / I was supposed to pick up my mother at the airport / I was supposed to pick up my mother from the airport / I was supposed to pick up my mom at the airport / I was supposed to pick up my mom from the airport / I had to pick up my mother at the airport / I had to pick up my mother from the airport / I had to pick up my mom at the airport / I had to pick up my mom from the airport / I had to go to the airport to pick up my mom", "E", "tenses"],
  ["J'ai dû courir dans tout l'aéroport", "I had to run across the whole airport / I had to run through the whole airport (and I did)", "E", "tenses"],

  // Her complete rule, one gap per use, exact. Each subject takes both tenses
  // without changing the words around the gap.
  ["cuisiner → Quand j'étais petit, ma grand-mère ___ tout le temps", "cuisinait", "G", "choice"],
  ["pleuvoir → Il ___ quand elle est arrivée", "pleuvait", "G", "choice"],
  ["fermer → Quand je suis arrivé, l'hôtesse ___ déjà la porte", "fermait", "G", "choice"],
  ["sonner → Je mangeais tranquillement quand quelqu'un ___ à la porte", "a sonné", "G", "choice"],
  ["être → On ___ aux États-Unis plusieurs fois", "a été", "G", "choice"],
  ["pleuvoir → Hier, il ___ toute la journée", "a plu", "G", "choice"],
  ["mettre → Hier, nous ___ plus d'une heure pour arriver à l'aéroport", "avons mis", "G", "choice"],
  ["décoller → Hier, l'avion ___ à l'heure", "a décollé", "G", "choice"],
  ["être → Ils ___ très différents", "étaient", "G", "choice"],
  ["connaître → Il ___ seulement une personne quand il est arrivé", "connaissait", "G", "choice"],
  ["devoir → Il y avait beaucoup de monde donc nous ___ attendre", "avons dû / devions", "G", "choice"],

  // The whole sentence in the past, a tense for each verb (her EXERCICES 2,
  // ex. 3–4; her text put back in the present)
  ["Je finis de faire mes valises quand le chauffeur de taxi m'appelle → au passé", "Je finissais de faire mes valises quand le chauffeur de taxi m'a appelé / Je finissais de faire mes valises quand le chauffeur de taxi m'a appelée", "G", "past"],
  ["Il fait très beau et l'eau est très claire → au passé", "Il faisait très beau et l'eau était très claire", "G", "past"],
  ["Je crois que je décolle du terminal 1 → au passé", "Je croyais que je décollais du terminal 1 / Je croyais que je décollais du terminal un / J'ai cru que je décollais du terminal 1 / J'ai cru que je décollais du terminal un", "G", "past"],
  ["Il lui demande ce qu'elle veut → au passé", "Il lui a demandé ce qu'elle voulait / Il lui demandait ce qu'elle voulait", "G", "past"],
  ["Tu sais ça ? → au passé", "Tu savais ça ?", "G", "past"],
  ["Il ne veut pas aller là-bas, mais il change d'avis → au passé", "Il ne voulait pas aller là-bas, mais il a changé d'avis / Il n'a pas voulu aller là-bas, mais il a changé d'avis", "G", "past"],

  // ── 3. Reported speech (her ex. 9): one card per change
  ["Je lui ai dit : « Je vais venir demain » → au discours indirect", "Je lui ai dit que j'allais venir demain", "G", "reported"],
  ["Je lui ai dit : « Je dois partir maintenant » → au discours indirect", "Je lui ai dit que je devais partir maintenant", "G", "reported"],
  ["Je t'ai dit : « Je crois que ce n'est pas normal » → au discours indirect", "Je t'ai dit que je croyais que ce n'était pas normal", "G", "reported"],
  ["Je leur ai dit : « Je ne peux pas venir aujourd'hui » → au discours indirect", "Je leur ai dit que je ne pouvais pas venir aujourd'hui", "G", "reported"],
  ["Je lui ai dit : « J'attends mon ami chez moi » → au discours indirect", "Je lui ai dit que j'attendais mon ami chez moi", "G", "reported"],
  ["Je lui ai dit : « Tu dois rentrer maintenant » → au discours indirect", "Je lui ai dit qu'il devait rentrer maintenant / Je lui ai dit qu'elle devait rentrer maintenant", "G", "reported"],
  ["Je lui ai demandé : « Tu vas m'appeler ? » → au discours indirect", "Je lui ai demandé s'il allait m'appeler / Je lui ai demandé si elle allait m'appeler", "G", "reported"],
  ["Je t'ai demandé : « À quelle heure l'avion décolle ? » → au discours indirect", "Je t'ai demandé à quelle heure l'avion décollait / Je t'ai demandé à quelle heure décollait l'avion", "G", "reported"],
  ["Je lui ai demandé : « Il y a beaucoup de monde là-bas ? » → au discours indirect", "Je lui ai demandé s'il y avait beaucoup de monde là-bas", "G", "reported"],

  // Answer yes (her ex. 6): the tenses stay, the persons switch. Each is
  // also accepted without the Oui the prompt already shows.
  ["Tu étais chez toi quand le chauffeur est arrivé ? → Oui, …", "Oui, j'étais chez moi quand le chauffeur est arrivé / Oui, j'étais chez moi quand il est arrivé / J'étais chez moi quand le chauffeur est arrivé / J'étais chez moi quand il est arrivé", "G", "answers"],
  ["Tu croyais que j'étais américaine ? → Oui, …", "Oui, je croyais que tu étais américaine / Je croyais que tu étais américaine", "G", "answers"],
  ["L'hôtesse t'a dit que tu devais te dépêcher ? → Oui, …", "Oui, l'hôtesse m'a dit que je devais me dépêcher / Oui, elle m'a dit que je devais me dépêcher / L'hôtesse m'a dit que je devais me dépêcher / Elle m'a dit que je devais me dépêcher", "G", "answers"],
  ["Tu pensais que je t'attendais là-bas ? → Oui, …", "Oui, je pensais que tu m'attendais là-bas / Je pensais que tu m'attendais là-bas", "G", "answers"],
  ["Vous avez attendu longtemps à l'aéroport ? → Oui, …", "Oui, on a attendu longtemps à l'aéroport / Oui, nous avons attendu longtemps à l'aéroport / Oui, j'ai attendu longtemps à l'aéroport / Oui, on a longtemps attendu à l'aéroport / Oui, nous avons longtemps attendu à l'aéroport / Oui, j'ai longtemps attendu à l'aéroport / On a attendu longtemps à l'aéroport / Nous avons attendu longtemps à l'aéroport / J'ai attendu longtemps à l'aéroport / On a longtemps attendu à l'aéroport / Nous avons longtemps attendu à l'aéroport / J'ai longtemps attendu à l'aéroport", "G", "answers"],

  // ── 4. Numbers 90–99
  ["90 → en lettres", "quatre-vingt-dix", "G", "numbers"],
  ["91 → en lettres", "quatre-vingt-onze", "G", "numbers"],
  ["95 → en lettres", "quatre-vingt-quinze", "G", "numbers"],
  ["97 → en lettres", "quatre-vingt-dix-sept", "G", "numbers"],
  ["99 → en lettres", "quatre-vingt-dix-neuf", "G", "numbers"],
];

// The notes are opened mid-card by a student who is stuck, so each tab
// answers at a glance. Written to the notes rules in
// .claude/skills/building-lessons/SKILL.md, on the impératif's model.
export const NOTES = [
  {
    tab: "Use",
    h: "1 · What croire and attendre are for",
    blocks: [
      { t: "lead", v: "**Croire** means \"to believe\" or \"to think\", and **attendre** means \"to wait\" or \"to wait for\": *je crois que c'est trop tard*, \"I think it's too late\"; *tu attends ton mari ?*, \"are you waiting for your husband?\"" },
      { t: "sub", v: "croire en, croire que" },
      { t: "note", v: "To say you believe in God, or have faith in someone or in an idea, put **en** before it: *je crois en Dieu*, \"I believe in God\"." },
      { t: "note", v: "To believe or think that something is so, put **que** before a whole sentence: *tu crois qu'il va venir ?*, \"do you think he's going to come?\" Before a vowel, que becomes qu'." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je crois en Dieu", "I believe in God"],
        ["Il a toujours cru en la méritocratie", "He has always believed in meritocracy"],
        ["Vous croyez qu'il est parti ?", "Do you think he's left?"],
        ["Je croyais que j'avais le temps", "I thought I had time"],
      ]},
      { t: "sub", v: "attendre" },
      { t: "note", v: "Put the person or thing you wait for straight after attendre, with no word for \"for\": *il attend le chauffeur de taxi*, \"he's waiting for the taxi driver\". Never say attendre pour." },
      { t: "note", v: "Me, te, nous and vous go just before it: *vous m'attendez ?*, \"are you waiting for me?\"" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il attend le chauffeur de taxi", "He's waiting for the taxi driver"],
        ["J'ai attendu le médecin une demi-heure", "I waited for the doctor for half an hour"],
        ["Ses parents t'ont attendu ?", "Did his parents wait for you?"],
        ["Vous attendiez quelqu'un ?", "Were you waiting for someone?"],
      ]},
    ],
  },
  {
    tab: "Forms",
    h: "2 · Croire and attendre in three tenses",
    blocks: [
      { t: "lead", v: "**Croire**, \"to believe\", and **attendre**, \"to wait\", don't follow the -er pattern: learn their forms by heart." },
      { t: "table", caption: "croire · to believe",
        cols: ["Present", "Passé composé", "Imparfait"],
        rows: [
          ["je crois", "j'ai cru", "je croyais"],
          ["tu crois", "tu as cru", "tu croyais"],
          ["il, elle croit", "il, elle a cru", "il, elle croyait"],
          ["nous croyons", "nous avons cru", "nous croyions"],
          ["vous croyez", "vous avez cru", "vous croyiez"],
          ["ils, elles croient", "ils, elles ont cru", "ils, elles croyaient"],
        ]},
      { t: "table", caption: "attendre · to wait",
        cols: ["Present", "Passé composé", "Imparfait"],
        rows: [
          ["j'attends", "j'ai attendu", "j'attendais"],
          ["tu attends", "tu as attendu", "tu attendais"],
          ["il, elle attend", "il, elle a attendu", "il, elle attendait"],
          ["nous attendons", "nous avons attendu", "nous attendions"],
          ["vous attendez", "vous avez attendu", "vous attendiez"],
          ["ils, elles attendent", "ils, elles ont attendu", "ils, elles attendaient"],
        ]},
      { t: "note", v: "Both take avoir in the passé composé: *j'ai cru*, \"I believed\", and *j'ai attendu*, \"I waited\"." },
      { t: "sub", v: "nous croyions, vous croyiez" },
      { t: "note", v: "The imparfait takes *nous croyons*, \"we believe\", without the -ons, and adds -ais, -ais, -ait, -ions, -iez, -aient. So nous and vous have a y and an i together: *nous croyions*, \"we believed\", *vous croyiez*, \"you believed\"." },
      { t: "sub", v: "il attend" },
      { t: "note", v: "With il and elle, attendre ends in -d, and the d stays in every form: *il attend*, \"he's waiting\"." },
    ],
  },
  {
    tab: "Past tenses",
    h: "3 · Imparfait or passé composé?",
    blocks: [
      { t: "lead", v: "Use the **imparfait** for what was going on or used to happen, and the **passé composé** for what happened: *il pleuvait quand elle est arrivée*, \"it was raining when she arrived\"." },
      { t: "sub", v: "From English" },
      { t: "note", v: "Some English tenses usually give the same French tense." },
      { t: "table", bold: 1,
        cols: ["English", "French", "Tense"],
        rows: [
          ["I was listening", "J'écoutais", "Imparfait"],
          ["I used to listen", "J'écoutais", "Imparfait"],
          ["I would listen (every day)", "J'écoutais", "Imparfait"],
          ["I have listened", "J'ai écouté", "Passé composé"],
        ]},
      { t: "note", v: "\"I listened\" can be either, so think about what it means. If it means \"I have listened\", say *j'ai écouté*. If it means \"I was listening\" or \"I used to listen\", say *j'écoutais*." },
      { t: "sub", v: "Imparfait" },
      { t: "note", v: "Use it for a habit, when the time is vague (weeks, months or years): *quand j'étais petit, j'allais à la piscine tous les lundis*, \"when I was little, I went to the pool every Monday\"." },
      { t: "note", v: "Use it to describe the scene of a story, or an action that was going on at the time: *il faisait beau et il y avait du monde*, \"the weather was nice and there were lots of people\"." },
      { t: "note", v: "Use it after a verb in the past, for the part that follows que: *je croyais que l'avion décollait à midi*, \"I thought the plane was taking off at noon\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Ma mère était institutrice", "My mother was a school teacher"],
        ["Je travaillais beaucoup à cette époque-là", "I worked a lot at that time"],
        ["L'hôtesse fermait la porte", "The attendant was closing the door"],
        ["Je pensais qu'elle allait arriver en retard", "I thought she was going to be late"],
      ]},
      { t: "sub", v: "Passé composé" },
      { t: "note", v: "Use it for something that happened once and is over, sometimes with a date: *j'ai commencé la danse en 2010*, \"I started dancing in 2010\"." },
      { t: "note", v: "Use it when you say how many times: *je suis allé à Paris 3 fois*, \"I went to Paris 3 times\"." },
      { t: "note", v: "**The trap:** use it when you say how long something lasted, even a long time: *il a plu toute la journée*, \"it rained all day\", not il pleuvait toute la journée." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai mangé une pizza", "I ate a pizza"],
        ["Il s'est brossé les dents 2 fois hier", "He brushed his teeth twice yesterday"],
        ["J'ai habité 10 ans aux États-Unis", "I lived in the United States for 10 years"],
        ["On a mis plus d'une heure pour arriver", "It took us more than an hour to get there"],
      ]},
      { t: "note", v: "Décoller, \"to take off\", takes avoir, not être: *on a décollé à l'heure*, \"we took off on time\"." },
      { t: "sub", v: "Both in one sentence" },
      { t: "note", v: "The imparfait says what was going on, and the passé composé what happened in the middle of it: *je finissais de faire mes valises quand le chauffeur de taxi m'a appelé*, \"I was finishing packing when the taxi driver called me\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je parlais au téléphone quand j'ai entendu un cri", "I was on the phone when I heard a scream"],
        ["Il pleuvait quand le match a commencé", "It was raining when the match started"],
        ["Il y avait beaucoup de monde donc nous avons dû attendre", "There were a lot of people, so we had to wait"],
        ["Il écoutait un podcast quand je suis arrivé", "He was listening to a podcast when I arrived"],
      ]},
      { t: "sub", v: "être, savoir, connaître, vouloir" },
      { t: "note", v: "Être, savoir, connaître and vouloir are usually in the imparfait: *c'est vrai ? Je ne savais pas !*, \"really? I didn't know!\"" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je ne voulais pas aller là-bas", "I didn't want to go there"],
        ["Je connaissais seulement une personne quand je suis arrivé", "I only knew one person when I arrived"],
        ["L'agent immobilier était en retard", "The real estate agent was late"],
      ]},
      { t: "note", v: "With être, \"I was\" is *j'étais* and \"I have been\" is *j'ai été*. Say how many times and it is the passé composé too: *j'ai été à l'aéroport plusieurs fois cette année*, \"I've been to the airport several times this year\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Keep the tenses of the question and switch the persons: tu becomes je, je becomes tu, and toi becomes moi." },
      { t: "note", v: "Me becomes te and te becomes me. Vous becomes on or nous, or je if vous means just you." },
      { t: "table", bold: 1,
        cols: ["Question", "Answer"],
        rows: [
          ["Tu croyais que tu décollais du terminal 1 ?", "Oui, je croyais que je décollais du terminal 1"],
          ["Tu as cru que j'allais rester seul là-bas ?", "Oui, j'ai cru que tu allais rester seul là-bas"],
          ["Il t'a dit que tu devais attendre ici ?", "Oui, il m'a dit que je devais attendre ici"],
          ["Vous avez eu de la chance ?", "Oui, on a eu de la chance"],
        ]},
      { t: "sub", v: "Detail · advanced" },
      { t: "note", v: "Vouloir changes meaning with the tense. *Il voulait partir*, \"he wanted to leave\", only says what he wanted. *Il a voulu partir*, \"he tried to leave\" or \"he decided to leave\", says he did something about it, and *il n'a pas voulu partir* is \"he refused to leave\"." },
      { t: "note", v: "Devoir changes meaning with the tense. *Je devais courir*, \"I had to run\" or \"I was supposed to run\", doesn't say whether I ran; *j'ai dû courir*, \"I had to run\", says I did." },
    ],
  },
  {
    tab: "Reported speech",
    h: "4 · Saying what someone said",
    blocks: [
      { t: "lead", v: "After a verb in the past like *il m'a dit que*, \"he told me that\", a verb that was in the present goes into the imparfait: *il m'a dit qu'il m'attendait en bas*, \"he told me he was waiting for me downstairs\"." },
      { t: "table", bold: 1,
        cols: ["What was said", "Reported"],
        rows: [
          ["Je lui ai dit : « Je vais venir demain »", "Je lui ai dit que j'allais venir demain"],
          ["Je t'ai dit : « J'ai beaucoup de travail à faire »", "Je t'ai dit que j'avais beaucoup de travail à faire"],
          ["Je t'ai dit : « Je ne comprends pas pourquoi »", "Je t'ai dit que je ne comprenais pas pourquoi"],
          ["Je lui ai dit : « Je ne connais pas Céline »", "Je lui ai dit que je ne connaissais pas Céline"],
        ]},
      { t: "note", v: "Put que, or qu' before a vowel, between *je lui ai dit* and the words that were said, and leave out the quotation marks: *je vais venir demain*, \"I'm going to come tomorrow\", becomes *je lui ai dit que j'allais venir demain*, \"I told him I was going to come tomorrow\"." },
      { t: "sub", v: "Questions" },
      { t: "note", v: "For a yes-or-no question, use **si**, \"if\", which becomes s' before il and ils: *je lui ai demandé s'il allait m'appeler*, \"I asked him if he was going to call me\"." },
      { t: "note", v: "A question word like *où*, \"where\", or *quel*, \"what\", stays at the front: *je leur ai demandé quel temps il faisait*, \"I asked them what the weather was like\"." },
      { t: "table", bold: 1,
        cols: ["What was asked", "Reported"],
        rows: [
          ["Je lui ai demandé : « Il y a beaucoup de monde sur l'autoroute ? »", "Je lui ai demandé s'il y avait beaucoup de monde sur l'autoroute"],
          ["Je leur ai demandé : « Vous vous voyez souvent ? »", "Je leur ai demandé s'ils se voyaient souvent"],
          ["Je leur ai demandé : « Quel temps il fait ? »", "Je leur ai demandé quel temps il faisait"],
          ["Je lui ai demandé : « Où tu es ? »", "Je lui ai demandé où il était"],
        ]},
      { t: "sub", v: "Changing the person" },
      { t: "note", v: "Tell it from your side: tu, said to the other person, becomes il or elle, and ton becomes son. Your own je and me stay as they are: *tu vas m'appeler ?*, \"are you going to call me?\", becomes *s'il allait m'appeler*, \"if he was going to call me\"." },
      { t: "note", v: "Vous, said to several people, becomes ils or elles: *vous vous voyez souvent ?*, \"do you see each other often?\", becomes *s'ils se voyaient souvent*, \"if they saw each other often\"." },
      { t: "table", bold: 1,
        cols: ["What was asked", "Reported"],
        rows: [
          ["Je lui ai demandé : « Tu vois souvent ton copain ? »", "Je lui ai demandé si elle voyait souvent son copain"],
          ["Je lui ai demandé : « Tu vas m'appeler ? »", "Je lui ai demandé s'il allait m'appeler"],
        ]},
    ],
  },
  {
    tab: "Numbers",
    h: "5 · Numbers 90 to 99",
    blocks: [
      { t: "lead", v: "From 90 to 99, write *quatre-vingt*, \"eighty\", then a hyphen and a number from 10 to 19 in words: *quatre-vingt-dix*, \"ninety\", *quatre-vingt-quinze*, \"ninety-five\"." },
      { t: "note", v: "Vingt loses the -s of *quatre-vingts*, \"eighty\", because another number follows it." },
      { t: "note", v: "91 is *quatre-vingt-onze*, \"ninety-one\", with no et." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["90", "quatre-vingt-dix"],
          ["91", "quatre-vingt-onze"],
          ["92", "quatre-vingt-douze"],
          ["93", "quatre-vingt-treize"],
          ["94", "quatre-vingt-quatorze"],
          ["95", "quatre-vingt-quinze"],
          ["96", "quatre-vingt-seize"],
          ["97", "quatre-vingt-dix-sept"],
          ["98", "quatre-vingt-dix-huit"],
          ["99", "quatre-vingt-dix-neuf"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "lecon15",
  title: "Lesson 15 · Imparfait or passé composé",
  subtitle: "Croire and attendre, which past tense to use, reported speech, and 90 to 99",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). The text's
  // words first, as her word list goes first in Leçons 5–13: the verbs before
  // they are conjugated, and every sentence card is made of these words.
  // Then her sections in her order, each followed by the cards that practise
  // it: croire, then croire en / que; attendre, then the sentences with
  // attendre; the choice of tense, from her simplified rule (the English
  // decides) to her complete rule (the gap cards) and the "→ au passé"
  // cards; reported speech, which is her imparfait use (c); answering yes,
  // which mixes all of it; the numbers.
  teachingOrder: [
    "words",
    "croire", "croireen",
    "attendre", "attendrephrases",
    "tenses", "choice", "past",
    "reported", "answers",
    "numbers",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape;
  // words, attendrephrases and tenses are two-way phrase cards and carry none.
  instructions: {
    // "loses its e" and not "qu'", which is the answer to one of the two cards.
    croireen: "Fill the gap with en or que (before a vowel, que loses its e)",
    choice: "Fill the gap with the verb in the imparfait or the passé composé, whichever fits",
    past: "Put this in the past, with the imparfait or the passé composé for each verb, whichever fits",
    reported: "Report what was said in one sentence, without the quotation marks",
    answers: "Answer yes in a full sentence",
    numbers: "Write this number in French, in words",
  },
};

export default LESSON;
