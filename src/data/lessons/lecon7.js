// Leçon 7 · Le passé composé — built from Laura Caufour's LFL METHOD Leçon 7
// sheets: the lesson (Maxime tells how his day went yesterday; the passé
// composé: what it is for, how it is made, avoir or être, the past
// participle; telling the time; numbers 30–39), the exercise sheet and her
// answer key, the "Dire l'heure" annex with its exercises and key, and the
// poster in her folder of the verbs that take être.
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–6 and nothing else: être
// (1), aller and the near future (2), avoir (3), -er verbs (4), vouloir,
// pouvoir and ne … pas (5), prendre, savoir, comprendre, apprendre and the
// adjectives (6). No card asks for more than that plus this lesson. Questions
// are asked her way, by intonation ("Tu as passé une bonne journée ?"), never
// by inversion. Leçon 8 drills être, pouvoir, vouloir, savoir and venir in the
// passé composé and Leçon 9 voir, so none of them has a drill here.
//
// Card shapes:
//   "regarder (passé composé) → nous" / "nous avons regardé"
//                                         drill; its line comes from its shape
//   "prendre → participe passé" / "pris"  the participle alone; the line says
//                                         "Past participle"
//   "rentrer → Jessica ___ de la salle de sport à 20h" / "est rentrée"
//                                         the cue verb in the passé composé:
//                                         avoir or être, and the participle
//   "Tu es allé à la salle de sport ? → Oui, …"
//                                         answer yes in a full sentence (her
//                                         ex. 3 and 4), with or without the Oui
//                                         the prompt already shows
//   "Il est dix heures dix → la question" the question about the time it answers
//   "Il est 16h20 → en lettres"           the time in words, as it is said
//   "six heures du soir → format 24h" / "23h → format 12h"
//                                         from one clock to the other
//   "31 → en lettres"                     the number in words
//   "une réunion" / "a meeting"           words and phrases, both ways round
//
// WHY AVOIR OR ÊTRE, AND THE ENDINGS, ARE ON ARROW CARDS. Word and phrase
// cards are marked with typo tolerance, and the lesson's two points are a
// letter or two wide. Tried with lessoncheck --try, French typed: "Tu es
// passé une bonne journée ?" passes for "Tu as passé une bonne journée ?"
// (one letter), and "Il est pris le petit-déjeuner", "Tu as passer une
// bonne journée ?", "Les enfants sont allé dormir" and even "Les enfants
// ont allé dormir", the lesson's trap, pass as close enough; so would any
// missing -e or -s. So every avoir-or-être choice and every ending the
// lesson wants produced is on an arrow card, marked exactly: the drills,
// the gaps and the answer-yes cards ("ils ont allé" is wrong on "aller
// (passé composé) → ils"). The phrase cards are there for meaning ("did"
// has no French word; "I had breakfast" is prendre, not avoir; "I went back
// home" is one verb), and the fuzzy marker does refuse the worst of those
// slips ("Il a eu le petit-déjeuner", "J'ai rentré"). Shown the French, the
// English tense slips through the same way, one or two letters wide: "He
// has breakfast", "Do you have a nice day?", "What do you do last night?"
// and "I go home" pass, and so does "this morning" for le matin. Shown the
// English, "Je suis entré" passes for "Je suis rentré", "ce matin" for "le
// matin" and "ce soir" for "le soir", while "à midi", typed for "at
// lunchtime", is marked as a wrong article. No wording removes these; the
// drills and gaps check every form exactly.
//
// WHY "aller (passé composé) → il" AND "→ elle", NEVER "→ il/elle". An
// il/elle drill also accepts its answer with the other pronoun swapped in and
// nothing else changed (personAlternates in src/lib/cardInstruction.js). For
// "il est allé" that would accept "elle est allé", the very mistake the card
// is for, and "elle est allée" would need listing by hand. So every drill in
// this lesson names one person, the regarder ones too ("→ il", "→ ils"), so
// that the passé composé drills all read the same way. Je, tu, nous and vous
// with être take every ending a teacher would accept: "je suis allé / je suis
// allée", and all four for vous, which can be one person.
//
// ACCENTS ARE NOT MARKED, so "mange" passes for mangé on "manger → participe
// passé". The card is there for the other mistake, the one the sound
// invites: "manger" for mangé is marked wrong.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Drills: regarder, her avoir model, in six persons (je, tu, il, nous,
//     vous, ils), since each is a different form of avoir; aller, her être
//     model, in seven of her eight rows (her table splits il / elle and
//     ils / elles for the endings). "aller → tu" is left out: "tu es allé"
//     has nothing that "je suis allé" and the être forms of Leçon 1 don't.
//     Sortir, her ending example (il est sorti, elle est sortie…), is
//     drilled once, "→ elle": the -e on an -i participle; the -s and -es are
//     aller's ils and elles. Her three special cases have one drill each,
//     with her own example: se lever → je, naître → je, mourir → il. Arriver
//     and rentrer, in her être examples, are in a gap and an answer card
//     instead.
//   - Participles: one -er verb (manger; regarder is drilled already), finir
//     for -ir with avoir (partir and sortir take être and sortir is drilled),
//     and three of her four irregular ones, prendre, avoir and faire. Voir is
//     Leçon 9's. Essayer and parler repeat manger.
//   - Ex. 1 ("conjugate every verb of the dialogue in the passé composé") has
//     no key: the dialogue is its key. The gaps take her verbs that have no
//     drill, in her own sentences from the dialogue (retourner), the
//     dictation (passer, rentrer, déjeuner), ex. 3 (arriver), ex. 5
//     (écouter) and ex. 8 (voyager, rester). Each adds something: écouter,
//     ils with avoir (ont, not sont); voyager, a verb about moving that still
//     takes avoir, and a woman's name with no ending after avoir; déjeuner,
//     vous with avoir; passer, on her être list but avoir with une journée;
//     arriver, tu with être; retourner, nous with être, after an avoir verb in
//     the same sentence; rentrer, a woman's name with être (-e); rester, vous
//     with être.
//   - Ex. 3 and 4 (answer yes, 35 questions): six, one for each switch of
//     person with each of avoir and être: tu → je (nos. 3.1 and 3.12), vous
//     → nous (4.1 and 4.13), a noun → ils (4.6 and 4.11). Ex. 3 no. 17, "Tu
//     es né aux États-Unis ?", is the naître drill again.
//   - Ex. 2 (French to English, oral) asks for nothing to type in French; its
//     items are the drills' and the phrase cards'. Ex. 5, 7 and 8 (translation)
//     gave five phrase cards: ex. 7 nos. 1 and 3, the two questions; ex. 5 no.
//     5, "Je suis rentré"; ex. 5 no. 13, "Les enfants sont allés dormir"; and
//     ex. 5 no. 2, "Il a pris le petit-déjeuner". Their other sentences
//     repeat a gap or answer card, or are long sentences a fuzzy marker
//     would let the être / avoir slip through.
//   - Ex. 6 is the word list. "to have dinner – dîner" is Leçon 2's card.
//     "a nice day – une bonne journée" is left with Leçon 3's card "Bonne
//     journée !"; the phrase "Tu as passé une bonne journée ?" carries passer
//     une bonne journée. "near work – près du travail": près de is Leçon 4's
//     card and un travail is on Leçon 6's list; what is left is du for de +
//     le, which her lesson doesn't teach. It appears in the déjeuner gap.
//     "to go back home – rentrer" is on her list twice and is one card.
//     Added from the dialogue, as Leçon 4 added three: hier, ensuite, and
//     sortir, which is drilled.
//   - Telling the time (her annex): her three questions. "Tu as l'heure ?" is
//     a phrase card. "Il est dix heures dix → la question" and "Le film est à
//     20h10 → la question" ask for the question from its answer, marked
//     exactly, the way Leçon 3 asks "Quel âge tu as ?". As phrase cards they
//     would mark right French wrong: "Quelle heure est-il ?" and "Le film est
//     à quelle heure ?" (tried: both wrong). In her lesson "Il est 10h10"
//     answers "Vous avez l'heure s'il vous plaît ?", and "Il est 16h20"
//     answers "Quelle heure il est ?". Since any question about the time
//     fits either, the 10h10 card takes all three of her questions: Quelle
//     heure il est (also in the other order, and inverted), Tu as l'heure
//     and Vous avez l'heure, each also with the s'il te plaît or s'il vous
//     plaît she adds (lesson; annex ex. 2 nos. 1 and 10), and "Quelle heure
//     est-il, s'il vous plaît ?". A please that doesn't match is refused
//     ("Tu as l'heure, s'il vous plaît ?"). The film card takes her
//     question, the same words in the other order, and the inverted form.
//     Then four of her times in words (16h20; 14h39, ex. 1 no. 1; 12h as
//     midi, ex. 1 no. 4; 0h30 as minuit, her "Il est minuit 30"), and one
//     card each way between the clocks (see DEPARTURES). Her annex ex. 2 and
//     3 are sentences with times in figures: as phrase cards, "à 6h" would
//     pass for "à 18h" (two letters), and "dix-huit heures" typed out would
//     fail, so the clock cards are arrow cards instead.
//   - Numbers: 30, the new ten; 31, with and without hyphens; and 33 and 38
//     for the pattern 32–39 share, as Leçon 6 took 21, 22 and 28. 39 is in
//     "Il est 14h39" and 30 in "Il est 0h30" too.
//   - Left out, as in Leçons 2–6: the dictations as dictations (lesson ex. 9,
//     annex ex. 4; three of the lesson's sentences are gaps) and the oral
//     exercises (ex. 10 and 11, annex ex. 5 and 6), which need the audio. The
//     annex ex. 1 is reading aloud, sampled for the time cards.
//
// DEPARTURES FROM HER SHEETS:
//   - Her aller table gives only "je suis allé", "tu es allé", "nous sommes
//     allés", "vous êtes allés". The drills also take allée / allées, which
//     her own rule gives a woman (her ex. 3 no. 12 answers "Tu es allé … ?"
//     with "Oui, je suis allée …"), and vous takes all four endings.
//   - Ex. 3 no. 12: her answer is "je suis allée" to a question asked to a
//     man ("Tu es allé"). The card takes allé and allée.
//   - Ex. 4: her key answers "Tes collègues ont eu une réunion ?" with "Oui,
//     mes collègues…" and "Tes amis sont arrivés ?" with "Oui, ils…". Both
//     cards take the noun or the pronoun (elles too for the colleagues, with
//     avoir), since the cards are about the passé composé. "Vous êtes sortis
//     hier soir ?" also takes sorties, from a group of women; it and "Vous
//     avez cuisiné ensemble ?" take only nous, as her key does: sortis and
//     ensemble make vous plural.
//   - Slips in her key, none copied (most are on sentences with no card):
//     ex. 3 no. 8 "j'ai cuisine" (cuisiné); ex. 3 no. 17 "au États-unis"
//     (aux États-Unis); ex. 4 no. 14 answers "pour aller à Odéon" with "à
//     Odéon"; ex. 7 no. 4 "J'ai déjeuner" (déjeuné); ex. 7 no. 13 "diné"
//     (dîné); dictation no. 12 "Qu'est-ce ils" (qu'ils); annex ex. 2 no. 1
//     "Quel heure" (the card's answer is "Quelle heure il est ?", from her
//     lesson); annex ex. 3 no. 11 "il est France" (en France). Ex. 8 no. 1's
//     English says "there" where her French says ici; not carded.
//   - Her lesson writes "s'il-vous-plaît" with hyphens; the notes write s'il
//     vous plaît, three words, as Leçon 5 does.
//   - "Il est 0h30": she writes "Il est minuit 30"; the card shows the time in
//     figures so that minuit is the answer. It takes "minuit trente", hers,
//     and "minuit et demi(e)", which a teacher would accept. "Nous avons
//     déjeuné à 12h" takes only midi, her own answer (annex ex. 1 no. 4, ex.
//     2 no. 6). She says 12h and 0h are "généralement" said midi and minuit,
//     so "douze heures" and "zéro heure trente" are French too, but they
//     leave these two cards testing nothing the 16h20 card doesn't. So the
//     timewords line says "the way the French usually say it", the note says
//     "usually", and both cards refuse the 24-hour reading. Each "en lettres"
//     time card also takes the time on its own ("seize heures vingt", "à
//     midi"), since the line asks for the time.
//   - The clock cards are not her exercises. They are her ATTENTION box made
//     into cards, with her times and her answers: "23h → format 12h" is her
//     "Il est arrivé à 23h" (annex ex. 1 no. 7), which her lesson says "à
//     11h du soir"; "2h → format 12h" is her "Ça a commencé à 2h du matin /
//     2h du mat'", and the card takes du mat' too; "six heures du soir →
//     format 24h" is her "I left work at 6pm → à 18h" (annex ex. 2 no. 4).
//     The fronts are the times alone, not her sentences, so that the time is
//     the whole answer, as the line asks: with her sentences, "onze heures du
//     soir" typed alone was marked wrong, and taking it meant twelve answers
//     on one card. The 24h card also takes 18:00, the same time on the same
//     clock, written the way English speakers do.
//   - "Je suis rentré" (ex. 5 no. 5) carries "(said by a man)", like Leçon
//     5's "Je suis désolé": a slash can't offer rentrée as well.
//   - "Les enfants sont allés dormir" (ex. 5 no. 13): her English is "The
//     kids went to bed"; "went to sleep", the meaning of dormir, passes too.
//     It and the word card "aller dormir" carry "(with dormir)": the Time
//     tab teaches "je suis allé au lit", and "Les enfants sont allés au lit"
//     was marked wrong.
//   - Three phrase cards also take the English present perfect, since the
//     Use tab teaches that j'ai regardé is "I looked" and "I have looked":
//     "Have you had a nice day?", "I have come home", "The kids have gone to
//     bed". "The kids have gone to sleep" is not taken: it is closer to "ils
//     se sont endormis", "they fell asleep".
//   - Ex. 6: her "the breakfast" is "breakfast"; her "un(e) client(e)" is
//     "un client", "a client / a customer (male)", as Leçon 4 cards "un ami"
//     ("a friend (male)"): shown the English, the marker compares with the
//     first French form only. Her "colleagues" also takes co-workers. "le
//     matin", "le soir" and "l'après-midi" also take "the morning" and so on
//     beside her "in the morning". "rentrer" also takes "to come home",
//     "ensuite" "afterwards" (her translation's "After that" is there too),
//     and "Tu as l'heure ?" "Have you got the time?".
//
// THE NOTES are her lesson, translated and restructured on the impératif's
// model: Use (what the passé composé is for, and questions), Forms (how it
// is made, with her two tables in one, and answering yes), Être (her three
// cases, passer and the endings), Participles (her table), Time (her annex) and
// Numbers. Her examples are used throughout; the others are from her
// exercises and key. No word list: the word cards are how the words are
// learned (owner, 2026-10-05). The Être tab's table of the verbs that take
// être, from her poster, is the rule rather than a word list, and the owner
// chose to keep it whole over cutting it to the six the cards ask about
// (2026-10-14).
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her examples or key show each,
// but her lesson never says it, and a card needs it:
//   - Use: "A question is the sentence itself with a question mark, and
//     "did" has no French word", and "A question word such as qu'est-ce que
//     or à quelle heure goes first". Her dialogue and ex. 7 ask every
//     question that way.
//   - Forms, "Answering yes": the three notes (tu → je; vous → nous, or je
//     for one person; a name or a noun → il, elle, ils or elles). Her ex. 3
//     and 4 key does it.
//   - Être: "a short list" in the lead, and "Not every verb of movement
//     takes être. Voyager takes avoir" (her rule says the rest take avoir;
//     voyager is her ex. 8 no. 9). Her list is not closed ("venir et
//     dérivés … etc."), so the notes don't say "only these".
//   - Être, the one "The trap:": "I went" is je suis allé, never j'ai allé.
//   - Être, "Passer", under its own heading: passer takes avoir when it
//     means spending time (her dialogue's "Tu as passé une bonne journée ?")
//     and être when it means going past. Without it her list says je suis
//     passé une bonne journée. It is not under "Detail · advanced", because
//     the passer gap card needs it.
//   - Être, endings: "the same endings as fatigué" stands for her "comme pour
//     les adjectifs", with a word the students have used since Leçon 2; "-s
//     for two or more people when at least one is a man" is her "masculin
//     pluriel" without the term; and "With je, tu, nous and vous, the ending
//     matches who is speaking or spoken to: a woman writes je suis allée"
//     (her ex. 3 no. 12 does).
//   - Participles: "Write -é, never -er" (j'ai mangé, not j'ai manger), and
//     "most" in "Most verbs ending in -ir take off the r": her table says
//     every -ir verb ends in -i, but her own mourir → mort doesn't (nor
//     venir → venu). Naître → né and mourir → mort are added to her
//     irregular list, from her être section.
//   - Time: "Say the hour, then heures, then the minutes" (her examples do);
//     "put à before the time" for an event (her heading "L'heure d'un
//     événement" and her examples do); "midnight, 0h": she says "12h la
//     nuit", and the card shows 0h30; "for example" before her du matin and
//     du soir, since 15h is "trois heures de l'après-midi"; "To switch
//     clocks, add or take away 12" (her annex key does).
//   - Numbers: the lead (trente, then the number, joined by a hyphen) and
//     "also written trente et un": she writes 31 with hyphens; the
//     traditional spelling without them is as correct, and the card takes
//     both.
//
// Left out of the notes as helping no card: her remark that irregular
// participles mostly end in the sound [i] or [u] (pronunciation); "du mat'"
// for du matin (the card takes it, but no card needs it); the "auxiliaire"
// and "participe passé" terminology beyond the one name the cards use; and
// the dialogue and its translation.

export const CARDS = [
  // ── Her word list (ex. 6), and three words from the dialogue
  ["hier", "yesterday", "V", "words"],
  ["hier matin", "yesterday morning", "V", "words"],
  ["hier soir", "last night / yesterday evening / last evening", "V", "words"],
  ["le matin", "in the morning / the morning", "V", "words"],
  ["le midi", "at lunchtime / at lunch time", "V", "words"],
  ["l'après-midi", "in the afternoon / the afternoon", "V", "words"],
  ["le soir", "in the evening / the evening", "V", "words"],
  ["ensuite", "then / next / after that / afterwards", "V", "words"],
  ["écouter", "to listen / to listen to", "V", "words"],
  ["manger", "to eat", "V", "words"],
  ["déjeuner", "to have lunch / to eat lunch", "V", "words"],
  ["le petit-déjeuner", "breakfast", "V", "words"],
  ["prendre le petit-déjeuner", "to have breakfast / to eat breakfast", "V", "words"],
  ["une douche", "a shower", "V", "words"],
  ["prendre une douche", "to have a shower / to take a shower / to shower", "V", "words"],
  ["sortir", "to go out / to leave (a place) / to get out", "V", "words"],
  ["rentrer", "to go back home / to come back home / to go home / to come home / to get home", "V", "words"],
  ["retourner", "to go back / to go again / to return", "V", "words"],
  ["aller dormir", "to go to sleep / to go to bed (with dormir)", "V", "words"],
  ["la salle de sport", "the gym", "V", "words"],
  ["une réunion", "a meeting", "V", "words"],
  ["des collègues", "colleagues / co-workers / coworkers", "V", "words"],
  ["un client", "a client / a customer (male)", "V", "words"],

  // ── Construction, with avoir: her regarder table. Each person is a
  //    different form of avoir.
  ["regarder (passé composé) → je", "j'ai regardé", "G", "avoir"],
  ["regarder (passé composé) → tu", "tu as regardé", "G", "avoir"],
  ["regarder (passé composé) → il", "il a regardé", "G", "avoir"],
  ["regarder (passé composé) → nous", "nous avons regardé", "G", "avoir"],
  ["regarder (passé composé) → vous", "vous avez regardé", "G", "avoir"],
  ["regarder (passé composé) → ils", "ils ont regardé", "G", "avoir"],

  // ── The past participle (her section 3): -er, -ir, and three to learn
  ["manger → participe passé", "mangé", "G", "participles"],
  ["finir → participe passé", "fini", "G", "participles"],
  ["prendre → participe passé", "pris", "G", "participles"],
  ["avoir → participe passé", "eu", "G", "participles"],
  ["faire → participe passé", "fait", "G", "participles"],

  // ── Être (her section 2): her aller table, one person per card because
  //    the ending changes with it; her ending example (sortir); her three
  //    special cases with her own examples
  ["aller (passé composé) → je", "je suis allé / je suis allée", "G", "etre"],
  ["aller (passé composé) → il", "il est allé", "G", "etre"],
  ["aller (passé composé) → elle", "elle est allée", "G", "etre"],
  ["aller (passé composé) → nous", "nous sommes allés / nous sommes allées", "G", "etre"],
  ["aller (passé composé) → vous", "vous êtes allés / vous êtes allées / vous êtes allé / vous êtes allée", "G", "etre"],
  ["aller (passé composé) → ils", "ils sont allés", "G", "etre"],
  ["aller (passé composé) → elles", "elles sont allées", "G", "etre"],
  ["sortir (passé composé) → elle", "elle est sortie", "G", "etre"],
  ["se lever (passé composé) → je", "je me suis levé / je me suis levée", "G", "etre"],
  ["naître (passé composé) → je", "je suis né / je suis née", "G", "etre"],
  ["mourir (passé composé) → il", "il est mort", "G", "etre"],

  // ── Ex. 1, in her sentences: what each adds is in the header
  ["écouter → Ils ___ la radio", "ont écouté", "G", "gaps"],
  ["voyager → Jessica ___ dans le monde", "a voyagé", "G", "gaps"],
  ["déjeuner → Vous ___ au restaurant près du travail ?", "avez déjeuné", "G", "gaps"],
  ["passer → Les enfants ___ une super journée", "ont passé", "G", "gaps"],
  ["arriver → Tu ___ au travail à 9h ?", "es arrivé / es arrivée", "G", "gaps"],
  ["retourner → J'ai mangé une très bonne pizza et nous ___ travailler", "sommes retournés / sommes retournées", "G", "gaps"],
  ["rentrer → Jessica ___ de la salle de sport à 20h", "est rentrée", "G", "gaps"],
  ["rester → Vous ___ à la maison toute la journée ?", "êtes restés / êtes restées / êtes resté / êtes restée", "G", "gaps"],

  // ── Ex. 3 and 4: answer yes. One card per switch of person, with avoir
  //    and with être. Each also without the Oui the prompt already shows.
  ["Tu as pris une douche ce matin ? → Oui, …", "Oui, j'ai pris une douche ce matin / J'ai pris une douche ce matin", "G", "answers"],
  ["Tu es allé à la salle de sport ? → Oui, …", "Oui, je suis allé à la salle de sport / Oui, je suis allée à la salle de sport / Je suis allé à la salle de sport / Je suis allée à la salle de sport", "G", "answers"],
  ["Vous avez cuisiné ensemble ? → Oui, …", "Oui, nous avons cuisiné ensemble / Nous avons cuisiné ensemble", "G", "answers"],
  ["Vous êtes sortis hier soir ? → Oui, …", "Oui, nous sommes sortis hier soir / Oui, nous sommes sorties hier soir / Nous sommes sortis hier soir / Nous sommes sorties hier soir", "G", "answers"],
  ["Tes collègues ont eu une réunion ? → Oui, …", "Oui, mes collègues ont eu une réunion / Oui, ils ont eu une réunion / Oui, elles ont eu une réunion / Mes collègues ont eu une réunion / Ils ont eu une réunion / Elles ont eu une réunion", "G", "answers"],
  ["Tes amis sont arrivés ? → Oui, …", "Oui, ils sont arrivés / Oui, mes amis sont arrivés / Ils sont arrivés / Mes amis sont arrivés", "G", "answers"],

  // ── Ex. 5 and 7: sentences, for meaning (the grammar is on the arrow cards)
  ["Qu'est-ce que tu as fait hier soir ?", "What did you do last night? / What did you do yesterday evening? (tu)", "E", "phrases"],
  ["Tu as passé une bonne journée ?", "Did you have a nice day? / Did you have a good day? / Have you had a nice day? / Have you had a good day? (tu)", "E", "phrases"],
  ["Il a pris le petit-déjeuner", "He had breakfast / He ate breakfast / He has had breakfast", "E", "phrases"],
  ["Je suis rentré", "I went back home / I came back home / I went home / I came home / I got home / I have come back home / I have come home (said by a man)", "E", "phrases"],
  ["Les enfants sont allés dormir", "The kids went to bed / The children went to bed / The kids went to sleep / The children went to sleep / The kids have gone to bed / The children have gone to bed (with dormir)", "E", "phrases"],

  // ── Numbers 30–39
  ["30 → en lettres", "trente", "G", "numbers"],
  ["31 → en lettres", "trente-et-un / trente et un", "G", "numbers"],
  ["33 → en lettres", "trente-trois", "G", "numbers"],
  ["38 → en lettres", "trente-huit", "G", "numbers"],

  // ── Telling the time (her annex): asking, saying, and the two clocks
  ["Il est dix heures dix → la question", "Quelle heure il est ? / Il est quelle heure ? / Quelle heure est-il ? / Vous avez l'heure ? / Tu as l'heure ? / Vous avez l'heure, s'il vous plaît ? / Tu as l'heure, s'il te plaît ? / Quelle heure il est, s'il vous plaît ? / Quelle heure il est, s'il te plaît ? / Quelle heure est-il, s'il vous plaît ?", "G", "asktime"],
  ["Tu as l'heure ?", "Do you have the time? / Have you got the time? (tu)", "E", "asktime"],
  ["Le film est à 20h10 → la question", "À quelle heure est le film ? / Le film est à quelle heure ? / À quelle heure le film est-il ?", "G", "asktime"],
  ["Il est 16h20 → en lettres", "Il est seize heures vingt / seize heures vingt", "G", "timewords"],
  ["Il est 14h39 → en lettres", "Il est quatorze heures trente-neuf / quatorze heures trente-neuf", "G", "timewords"],
  ["Nous avons déjeuné à 12h → en lettres", "Nous avons déjeuné à midi / à midi / midi", "G", "timewords"],
  ["Il est 0h30 → en lettres", "Il est minuit trente / Il est minuit et demi / Il est minuit et demie / minuit trente / minuit et demi / minuit et demie", "G", "timewords"],
  ["six heures du soir → format 24h", "dix-huit heures / 18h / 18 h / 18 heures / 18h00 / 18:00", "G", "clock24"],
  ["23h → format 12h", "onze heures du soir / 11h du soir / 11 h du soir / 11 heures du soir", "G", "clock12"],
  ["2h → format 12h", "deux heures du matin / 2h du matin / 2 h du matin / 2 heures du matin / deux heures du mat' / 2h du mat' / 2 h du mat' / 2 heures du mat'", "G", "clock12"],
];

// The notes, for a student stuck on a card, on the impératif's model.
export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the passé composé is for",
    blocks: [
      { t: "lead", v: "The passé composé says what happened at one moment in the past: *hier, j'ai regardé la télé*, \"yesterday, I watched TV\"." },
      { t: "note", v: "English has two tenses for this and French has one: *j'ai regardé* is both \"I looked\" and \"I have looked\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai regardé", "I looked · I have looked"],
        ["Je suis allé", "I went · I have gone"],
        ["J'ai vu", "I saw · I have seen"],
      ]},
      { t: "sub", v: "Questions" },
      { t: "note", v: "A question is the sentence itself with a question mark, and \"did\" has no French word: *Tu as passé une bonne journée ?*, \"Did you have a nice day?\"" },
      { t: "note", v: "A question word such as *qu'est-ce que*, \"what\", or *à quelle heure*, \"what time\", goes first: *Qu'est-ce que tu as fait hier matin ?*, \"What did you do yesterday morning?\"" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Tu as passé une bonne journée hier ?", "Did you have a good day yesterday?"],
        ["Qu'est-ce que tu as fait hier matin ?", "What did you do yesterday morning?"],
        ["À quelle heure vous êtes allés là-bas ?", "What time did you go there?"],
      ]},
    ],
  },
  {
    tab: "Forms",
    h: "2 · How to make it",
    blocks: [
      { t: "lead", v: "Put avoir or être in the present, then the past participle of the verb: *j'ai regardé*, \"I watched\"; *je suis allé*, \"I went\"." },
      { t: "table", caption: "Passé composé", dense: true,
        cols: ["Person", "regarder · with avoir", "aller · with être"],
        rows: [
          ["je", "j'ai regardé", "je suis allé"],
          ["tu", "tu as regardé", "tu es allé"],
          ["il", "il a regardé", "il est allé"],
          ["elle", "elle a regardé", "elle est allée"],
          ["nous", "nous avons regardé", "nous sommes allés"],
          ["vous", "vous avez regardé", "vous êtes allés"],
          ["ils", "ils ont regardé", "ils sont allés"],
          ["elles", "elles ont regardé", "elles sont allées"],
        ]},
      { t: "sub", v: "Avoir" },
      { t: "note", v: "Most verbs take avoir: *tu as regardé*, \"you looked\"; *il a pris*, \"he took\"; *nous avons vu*, \"we saw\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question asked with tu using je: *Tu as regardé la télé ?* → *Oui, j'ai regardé la télé*, \"Did you watch TV? Yes, I watched TV\"." },
      { t: "note", v: "Answer a question asked with vous using nous, or using je if vous is just you: *Vous êtes retournés au travail ?* → *Oui, nous sommes retournés au travail*, \"Did you go back to work? Yes, we went back to work\"." },
      { t: "note", v: "A name or a noun becomes il, elle, ils or elles: *Les enfants ont regardé la télé ?* → *Oui, ils ont regardé la télé*, \"Did the children watch TV? Yes, they watched TV\"." },
    ],
  },
  {
    tab: "Être",
    h: "3 · Verbs that take être",
    blocks: [
      { t: "lead", v: "Être replaces avoir for a short list of verbs of movement, like aller, for verbs with se, and for naître and mourir: *je suis allé*, \"I went\"." },
      { t: "sub", v: "Verbs of movement" },
      { t: "table", bold: 0,
        cols: ["Verb", "English"],
        rows: [
          ["aller", "to go"],
          ["arriver", "to arrive"],
          ["descendre", "to go down"],
          ["entrer", "to go in"],
          ["monter", "to go up"],
          ["partir", "to leave"],
          ["passer", "to go past, to drop by"],
          ["rentrer", "to go back home"],
          ["retourner", "to go back"],
          ["rester", "to stay"],
          ["tomber", "to fall"],
          ["sortir", "to go out"],
          ["venir", "to come"],
          ["devenir · revenir", "to become · to come back"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["Je suis allé", "I went"],
        ["Il est sorti", "He went out"],
        ["Vous êtes arrivés", "You arrived"],
        ["Ils sont rentrés", "They went back home"],
      ]},
      { t: "note", v: "Not every verb of movement takes être. *Voyager*, \"to travel\", takes avoir: *Jessica a voyagé*, \"Jessica travelled\"." },
      { t: "note", v: "**The trap:** \"I went\" is *je suis allé*, never j'ai allé." },
      { t: "sub", v: "Passer" },
      { t: "note", v: "*Passer* takes avoir when it means spending time: *j'ai passé une bonne journée*, \"I had a nice day\". It takes être when it means going past or dropping by: *je suis passé*, \"I dropped by\"." },
      { t: "sub", v: "Verbs with se" },
      { t: "note", v: "Verbs with se in front, like *se lever*, \"to get up\", take être: *je me suis levé*, \"I got up\"." },
      { t: "sub", v: "Naître and mourir" },
      { t: "note", v: "*Naître*, \"to be born\", and *mourir*, \"to die\", take être too: *je suis né*, \"I was born\"; *il est mort*, \"he died\"." },
      { t: "sub", v: "Endings with être" },
      { t: "note", v: "With être, the past participle takes the same endings as *fatigué*, \"tired\": -e for a woman, -s for two or more people when at least one is a man, and -es for two or more women." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Il est sorti", "He went out"],
        ["Elle est sortie", "She went out"],
        ["Ils sont sortis", "They went out"],
        ["Elles sont sorties", "They went out (women)"],
      ]},
      { t: "note", v: "With je, tu, nous and vous, the ending matches who is speaking or spoken to: a woman writes *je suis allée*, \"I went\"." },
      { t: "note", v: "With avoir, the past participle never changes: *elle a regardé*, \"she watched\"." },
    ],
  },
  {
    tab: "Participles",
    h: "4 · The past participle",
    blocks: [
      { t: "lead", v: "The past participle depends on how the verb ends: -er becomes -é, most -ir verbs end in -i, and verbs like prendre, avoir and faire have one of their own." },
      { t: "sub", v: "Verbs ending in -er" },
      { t: "note", v: "Take off the -er and add -é: *manger → mangé*, \"to eat → eaten\". Write -é, never -er: *j'ai mangé*, \"I ate\", not j'ai manger." },
      { t: "pairs", head: ["Verb", "Past participle"], v: [
        ["regarder", "regardé"],
        ["manger", "mangé"],
        ["essayer", "essayé"],
        ["parler", "parlé"],
      ]},
      { t: "sub", v: "Verbs ending in -ir" },
      { t: "note", v: "Most verbs ending in -ir take off the r: *finir → fini*, \"to finish → finished\"." },
      { t: "pairs", head: ["Verb", "Past participle"], v: [
        ["partir", "parti"],
        ["sortir", "sorti"],
        ["finir", "fini"],
      ]},
      { t: "sub", v: "Learn by heart" },
      { t: "note", v: "Verbs like prendre, avoir and faire follow no pattern, so learn each past participle by heart: *prendre → pris*, \"to take → taken\"." },
      { t: "table", bold: 1,
        cols: ["Verb", "Past participle", "English"],
        rows: [
          ["prendre", "pris", "to take → taken"],
          ["avoir", "eu", "to have → had"],
          ["voir", "vu", "to see → seen"],
          ["faire", "fait", "to do → done"],
          ["naître", "né", "to be born → born"],
          ["mourir", "mort", "to die → died"],
        ]},
    ],
  },
  {
    tab: "Time",
    h: "5 · Telling the time",
    blocks: [
      { t: "lead", v: "The French mostly use the 24-hour clock: *Il est seize heures vingt*, \"It's 4.20pm\"." },
      { t: "sub", v: "Asking the time" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Quelle heure il est ?", "What time is it?"],
        ["Tu as l'heure ?", "Do you have the time?"],
        ["Vous avez l'heure, s'il vous plaît ?", "Do you have the time, please?"],
      ]},
      { t: "sub", v: "Saying the time" },
      { t: "note", v: "Say the hour, then heures, then the minutes: *16h20* is *seize heures vingt*, \"4.20pm\"." },
      { t: "table", dense: true,
        cols: ["Written", "Said", "English"],
        rows: [
          ["Il est 16h20", "Il est seize heures vingt", "It's 4.20pm"],
          ["Il est 10h10", "Il est dix heures dix", "It's 10.10am"],
          ["Il est 14h39", "Il est quatorze heures trente-neuf", "It's 2.39pm"],
        ]},
      { t: "sub", v: "At what time" },
      { t: "note", v: "For the time something happens, put à before the time: *à dix-huit heures*, \"at 6pm\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["À quelle heure est le film ?", "What time is the film?"],
        ["Le film est à 20h10", "The film is at 8.10pm"],
        ["Je suis sorti du travail à 18h", "I left work at 6pm"],
        ["Nous sommes allés à la salle de sport à 19h30", "We went to the gym at 7.30pm"],
      ]},
      { t: "sub", v: "Noon and midnight" },
      { t: "note", v: "Noon, 12h, and midnight, 0h, are usually said *midi* and *minuit*: *il est minuit trente*, \"it's 12.30am\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Nous avons déjeuné à midi", "We had lunch at noon"],
        ["J'ai dormi de minuit à 9h", "I slept from midnight to 9am"],
      ]},
      { t: "sub", v: "The 12-hour clock" },
      { t: "note", v: "When speaking, people sometimes use the 12-hour clock. If the part of the day is obvious, they leave it out: *je suis allé au lit à 11h*, \"I went to bed at 11\"." },
      { t: "note", v: "When the part of the day isn't obvious, they add it, for example *du matin*, \"in the morning\", or *du soir*, \"in the evening\": *ça a commencé à 2h du matin*, \"it started at 2am\"; *il est arrivé à 11h du soir*, \"he arrived at 11pm\"." },
      { t: "note", v: "To switch clocks, add or take away 12: *dix-huit heures* is *six heures du soir*, \"6pm\"." },
    ],
  },
  {
    tab: "Numbers",
    h: "6 · Numbers 30 to 39",
    blocks: [
      { t: "lead", v: "From 32 to 39, say trente and then the number, joined by a hyphen: *trente-deux*, \"thirty-two\"." },
      { t: "note", v: "31 is *trente-et-un*, also written without hyphens: *trente et un*, \"thirty-one\"." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["30", "trente"],
          ["31", "trente-et-un"],
          ["32", "trente-deux"],
          ["33", "trente-trois"],
          ["34", "trente-quatre"],
          ["35", "trente-cinq"],
          ["36", "trente-six"],
          ["37", "trente-sept"],
          ["38", "trente-huit"],
          ["39", "trente-neuf"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "lecon7",
  title: "Lesson 7 · The passé composé",
  subtitle: "Saying what happened: avoir or être, past participles, telling the time, and 30 to 39",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her lesson
  // opens with the dialogue, so its words come first: the gaps and phrases
  // are made of them. Then the passé composé the way her grammar builds it,
  // each part followed by what practises it: avoir, her general case, with
  // regarder; the participles, all of them avoir verbs here; être, with
  // aller and her special cases; then her ex. 1 gaps, which mix the two;
  // answering yes (ex. 3 and 4); the sentences. The numbers come before the
  // time, because "Il est 14h39" needs trente-neuf.
  teachingOrder: [
    "words",
    "avoir", "participles", "etre", "gaps", "answers", "phrases",
    "numbers",
    "asktime", "timewords", "clock24", "clock12",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills, "regarder (passé composé) → je"
  // and "prendre → participe passé", get theirs from their shape; words and
  // phrases, "Tu as l'heure ?" among them, are two-way and carry none.
  instructions: {
    asktime: "Write the question about the time that this answers",
    gaps: "Fill the gap with the verb in the passé composé",
    answers: "Answer yes in a full sentence",
    numbers: "Write this number in French, in words",
    timewords: "Write the time in words, the way the French usually say it",
    clock24: "Write this time on the 24-hour clock",
    clock12: "Write this time on the 12-hour clock, naming the part of the day",
  },
};

export default LESSON;
