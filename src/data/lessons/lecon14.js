// Leçon 14 · Poser une question — built from Laura Caufour's LFL METHOD
// Leçon 14 sheets: the lesson (the three ways to ask a yes / no question and
// the register of each; the same with a question word; her list of question
// words, with the casual end position and "Où ça ?"; how to say "what";
// negative questions; answering, and si for yes to a negative question) and
// the exercise sheet.
//
// LEÇON 14 HAS NO ANSWER KEY. Her folder has no "CORRECTION EXERCICES - Leçon
// 14", and her course for Spanish speakers stops at Leçon 6, so there is none
// to borrow. The only answers on her sheets are the worked examples (ex. 2
// and 3), the answers given in ex. 4 and 5 (the student writes the question)
// and the short English replies in ex. 6. EVERY ANSWER ON THESE CARDS IS
// OURS, written from her lesson's own rules and examples, and each was
// checked with the app's marker (lessoncheck.mjs --try): the answers a
// teacher would accept pass, and the mistake each card is there for fails.
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–13 and nothing else: by
// now être, aller, avoir, the -er verbs, vouloir, pouvoir, prendre, savoir,
// faire, voir, venir, dire, devoir, dormir, se souvenir, connaître and mettre;
// the passé composé with avoir and être, ne … pas, on, me / te / lui / nous /
// vous / leur, reflexive verbs, the comparative, the imparfait and ne … que.
// This lesson has no dialogue, no numbers and no new verb, so it has no
// drills. INVERSION IS TAUGHT HERE, so these cards ask for it, where Leçons
// 1–13 asked every question by intonation. No card inverts je (see
// DEPARTURES), and none inverts a noun ("Ton copain est-il venu ?"): her rule
// is for a subject pronoun only.
//
// Card shapes:
//   "qui" / "who"                                     question words, both ways round
//   "Vous voulez un café ? → avec est-ce que"         ask it with est-ce que
//   "Vous voulez un café ? → avec inversion"          ask it the formal way, verb before pronoun
//   "Quel âge avez-vous ? → sans inversion"           ask it the everyday way
//   "Quand est-ce que tu arrives ? → à l'oral familier"  question word at the end
//   "quel → ___ chambre tu préfères ?"                quel / lequel in the form that fits
//   "quel ou lequel → ___ appartement tu préfères ?"  choose quel or lequel
//   "combien ou combien de → Tu as ___ amis français ?"
//   "J'ai 1 frère et 2 sœurs → la question"           write the question this answers (her ex. 4)
//   "Si, j'ai laissé mon ordinateur à la maison → la question"   the negative question (her ex. 5)
//   "qu'est-ce que, que ou quoi → ___ fais-tu ?"      "what" in a question
//   "qu'est-ce que, ce que ou ce qui → Je ne sais pas ___ se passe"   "what" in a statement
//   "oui, si ou non → C'est pas ça ? ___, c'est ça"   choose the first word of the answer
//   "Vous ne vous voyez pas souvent ? → Si, …"        answer yes to a negative question (her ex. 2)
//   "Tu ne veux pas voyager ? → Non, …"               answer no to it (her ex. 3)
//   "C'est qui ?" / "Who is it? …"                    phrases, both ways round
//
// WHY THE LESSON'S POINTS ARE ALL → CARDS. Phrase cards are marked fuzzily,
// and the fuzzy marker also accepts the same words in another order, so on
// a phrase card the very mistakes this lesson is about pass as close enough.
// Tried with lessoncheck --try on phrase cards of her sentences, typing the
// French: "Avez vous vu le chien ?" (no hyphen) for "Avez-vous vu le chien
// ?"; "A-il fini ?" for "A-t-il fini ?"; "Est-ce que il est arrivé en retard
// ?" for "Est-ce qu'il …"; "Connais-tu pas Émilie ?" for "Ne connais-tu pas
// Émilie ?"; "Lequel tu préfères ?" for "Laquelle …"; "Oui, j'adore ça !"
// for "Si, j'adore ça !", alone and after her question; and "Tu as pas
// acheté le cadeau hier ? Non, …" for "Tu n'as pas …". So every hyphen, -t-,
// qu', ne, si and choice of question word is on an exact arrow card, and
// the phrase cards are there for the meaning of whole questions, none of
// them negative. On the arrow cards all of those mistakes are refused, and so
// are "A-t'il" (apostrophe for the hyphen), "Il a-t-il …", "Est ce que …",
// "Quand sont-ils rentré ?" and "Ne connais pas-tu Émilie ?" (all tried).
// One thing the arrow cards can't catch: the app's matcher deletes the
// apostrophe mark itself (src/FlashcardApp.jsx, normalize), so "Est-ce quil
// …", "Nest-il pas …" and "combien d" pass. What these cards are for still
// holds, because the student who writes the vowel out in full is refused:
// "Est-ce que il …", "Ne est-il …", "combien de" for combien d' and "ce
// que" for ce qu' are wrong (all tried).
//   - The phrase cards' English carries a hint naming the way of asking,
//     "(tu, with est-ce que)" or "(tu, casual)", because with all three ways
//     taught, a phrase card that knows one of them refuses the others: shown
//     "When are you coming? (tu, with est-ce que)", "Tu viens quand ?" is
//     refused, and the hint makes that fair. Word order on its own passes
//     ("Depuis combien de temps tu es là ?" for "Tu es là depuis combien de
//     temps ?", "Ça coûte combien ?" for "Combien ça coûte ?"). So "Combien
//     ça coûte ?" says "(with coûter, no est-ce que)" ("Combien est-ce que ça
//     coûte ?" is refused), the photo card says "(with qui est)" ("C'est
//     qui, la femme … ?" is refused), and "Où ça ?" and "Pourquoi ça ?" say
//     "(casual, with ça)", since "C'est où ?", "Où c'est ?" and "Où ?" are
//     good French for "Where's that?" and "Where?" and are refused.
//   - Typing the English, "Quand est-ce que tu viens ?" takes "When will you
//     come?" beside her "When are you coming?", as "Combien de temps
//     est-ce que tu vas rester ici ?" takes "How long will you stay here?".
//     The cost, tried: on both, the past ("When did you come?", "How long
//     did you stay here?") passes as close enough, and "Where are you
//     coming?" passed for "When are you coming?" before "will" was added.
//     These cards are for the meaning of whole questions; quand and où have
//     their own word cards (Leçons 6 and 1), and the rewrite cards here are
//     exact.
//   - Si or oui: the gap cards ("oui, si ou non → …", five) ask for the
//     choice, because the "→ Si, …" answer cards show the Si in the prompt;
//     on those, "Oui, on se voit souvent" is refused.
//   - Quel, quelle or lequel: on the word card quel, "quelle" and "lequel"
//     pass as close enough (each contains quel), and on lequel, "quel" does.
//     So the forms are exact gap cards ("quel → ___ chambre …", "lequel →
//     …"), and two more ask for the choice ("quel ou lequel → …").
//   - Combien or combien de: on the word card, "combien de" passes for
//     "combien". Two gap cards ask for it exactly, and the answer → question
//     card "J'ai 1 frère et 2 sœurs" refuses "Combien frères et sœurs …".
//   - Qui or quoi: "C'est quoi ?" and "C'est qui ?" pass for each other (two
//     letters in nine), and so do their English sides, shown the French
//     ("What is it?" for C'est qui ?, "Who is it?" for C'est quoi ?);
//     "Quoi est la femme à droite sur la photo ?" passes on the photo card.
//     The word card qui refuses quoi and que (on words of four letters or
//     fewer the fuzzy marker allows no slip), and the gap card "Tu fais ___
//     demain ?" asks for quoi exactly, so the contrast is checked exactly
//     twice and has no gap card of its own.
//
// The register cards accept exactly what Laura's lesson says each register
// is, so they can be exact without marking right French wrong:
//   - "→ avec est-ce que" takes the est-ce que question only.
//   - "→ avec inversion" takes the verb-pronoun question only.
//   - "→ sans inversion" takes the question mark alone or est-ce que, with
//     the question word first or (casual) last: all of them are "everyday".
//   - "→ à l'oral familier" takes the question word at the end only. Her
//     lesson calls the word-first question ("Pourquoi tu pars demain ?",
//     "Où tu habites ?") "à l'oral, très courant", and the end position
//     ("Tu arrives quand ?", "Tu vas où ?") "oral familier"; her ex. 1 asks
//     the student to tell them apart. The line above these cards says
//     "question word last", so "Où tu vas ?" being refused is not a trick.
//     "Où est-ce que tu as mis les dossiers ?" also takes "Tu as mis où les
//     dossiers ?", where où comes straight after the verb, as casual speech
//     often puts it; for the same reason "J'aime mon café … → la question"
//     takes "Tu aimes comment ton café ?" beside her "Tu aimes ton café
//     comment ?".
//   - "→ la question" (her ex. 4 and 5) takes every register, and tu or vous
//     wherever the answer fits both: a je answer fits a question to tu or to
//     vous (her ex. 2 example answers "Vous ne travaillez pas beaucoup ?"
//     with "Si, je travaille beaucoup"), and an on answer ("on prend des
//     cours", "on n'avait pas de télé") fits vous, a tu question answered
//     for a family or a couple, or an on question from someone in the same
//     group ("On prend des cours tous les lundis ?"). Prend-on and N'avait-on
//     take no -t-: it goes only after a verb ending in -e or -a, and is
//     "superflue" after a -d (OQLF, "Emploi du t euphonique", cited below).
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her list of question words (section 3) is the word list. Pourquoi and
//     où are Leçon 1's word cards, quand Leçon 6's, comment Leçon 8's and
//     combien de temps Leçon 11's (her ex. 7 no. 12 there), so they stay
//     with those lessons. Qui, combien, quel and lequel are word cards
//     here. "Combien de" has no word card: the word card combien already
//     takes it as close enough, and the gap cards ask for the de exactly.
//     Laquelle, lesquels and lesquelles, quelle, quels and quelles have no
//     word cards: their spelling is what the gap cards ask for. No word card
//     for quoi, que or si: the gap cards ask for each exactly, and "si" is
//     Leçon 11's front ("if").
//   - Her sections 1 and 2 (three ways): five est-ce que cards, seven
//     inversion cards and two "sans inversion" cards. Her own examples are
//     four of them (Vous voulez un café ?, Avez-vous vu le chien ?, Pourquoi
//     tu pars demain ? both ways); the rest are her ex. 1 questions: no. 8
//     (avec qui moves with its word), 6 (combien de temps moves as one),
//     15 and 18 (est-ce qu' before a vowel; ils sont rentrés inverted), 9
//     and 3 (formal back to everyday), her ex. 2 no. 19 and ex. 3 no. 3
//     given positive with il, for the -t- ("A-t-il laissé …", "Aime-t-il
//     …"), and her ex. 4 no. 8 ("Il a 30 ans") as "Il a quel âge ? → avec
//     inversion", for a question word and the -t- together ("Quel âge
//     a-t-il ?"). The rest of ex. 1 repeats these, or inverts a noun (no.
//     4, "Ton copain …"), or a reflexive verb (no. 10, "se sont-ils
//     endormis"), which her lesson doesn't show, or has "Pensez-vous que je
//     peux …" (no. 12), where formal French often puts the subjunctive,
//     which they haven't met.
//   - Her Remarque 1 (casual: the question word at the end): three cards,
//     from her ex. 1 nos. 1 and 22 and her own "Tu arrives quand ?". Her
//     Remarque 2 ("Où ça ?", "Pourquoi ça ?") is two phrase cards.
//   - Quel and lequel: her table gives the four forms of each and one
//     example. Three gap cards each ask for the forms that are not the cue
//     word itself (quelle, quels, quelles; laquelle, lesquels, lesquelles),
//     with nouns from the earlier word lists, and two ask for the choice.
//   - Ex. 1 (translate into English and give the register) gave the
//     rewrite cards above, and three phrase cards: no. 14 "C'est quoi ?",
//     no. 16 "Tu es là depuis combien de temps ?" and no. 20 "C'est qui ?"
//     (her ex. 6 no. 18 asks for it the other way). No. 5 "Tu fais quoi
//     demain ?" and no. 2 "Tu lui as dit ce que tu voulais faire ?" are gap
//     cards. No. 21 "Ils veulent quoi ?" repeats no. 5.
//   - Ex. 2 (answer si): nos. 3 (vous vous → on se or nous nous), 7 (devoir,
//     tout à l'heure), 11 (pas de toilettes → des toilettes), 15 (passé
//     composé, vous → on, nous or je) and 17 (a noun → elle). No. 14, "C'est
//     pas ça ?", is a si / non gap card: a spoken question with no ne still
//     takes si. Nos. 5 and 19 are inversion cards, and no. 16 is an example
//     in the Negative tab. The rest repeat these: no. 2 (te → me) has a
//     slip (see DEPARTURES), and its 6h would need every way of writing the
//     hour; nos. 4, 6, 8, 9, 12 and 20 are the same switch of person; no.
//     13 has celui-là, which no lesson has taught; no. 18 ("Il n'y a pas
//     beaucoup de monde là-bas ?") keeps its de after si, which would need a
//     rule of its own; no. 10 ("Les gens n'ont pas compris pourquoi ?")
//     ends on a question word.
//   - Ex. 3 (answer truthfully, si or non): its truth is the student's, so a
//     card can't know which. Four "→ Non, …" cards: nos. 14 (the plain
//     switch, tu ne veux → je ne veux), 12 (tu n'as → je n'ai), 9 (the
//     passé composé, with ne … pas around avoir, and tes amis → mes amis)
//     and 16 (ta voiture → elle or ma voiture). No. 9 takes mes amis only:
//     "je ne les ai pas vus" needs les, Leçon 16's, and Leçon 11's "Tu as
//     rencontré ton copain … → Oui, …" likewise takes mon copain only. No.
//     15 ("Tu ne pars pas en France cet été ?") is left out: its answer
//     needs je pars, and partir's present is Leçon 18's drill. No. 5 ("Tu
//     n'as pas les yeux bleus ?") would repeat no. 12: the question already
//     shows its les, so the student only copies it. The si answers are ex.
//     2's. No. 3 is an inversion card; no. 20's "beaucoup d'amis
//     français" became "Tu as ___ amis français ?" (combien d'). No. 13
//     ("Tu n'es jamais en retard ?") is left out: ne … jamais and the word
//     jamais are Leçon 18's.
//   - Ex. 4 (write the question for this answer): nos. 1 (a yes / no one),
//     11 (combien de) and 13 (comment). No. 8 ("Il a 30 ans") became the
//     inversion card "Il a quel âge ? → avec inversion": as "→ la question"
//     it repeated Leçon 3's "J'ai 17 ans → la question, avec tu" and took
//     "Il a quel âge ?", so it never asked for the -t-. Left out: no. 7 "Je
//     préfère la verte" ("Quelle couleur tu préfères ?" fits it as well as
//     "Laquelle tu préfères ?"); no. 3 "49 euros" (C'est combien ?, Ça
//     fait combien ?, Combien ça coûte ? … and a noun could be named); no.
//     10 "Je suis ici depuis 2 mois" (depuis combien de temps or depuis
//     quand, ici or là, three ways, tu or vous: the phrase card "Tu es là
//     depuis combien de temps ?" carries it); the
//     others are open (no. 5 "Parce qu'elle n'a pas répondu"), name someone
//     the student must invent (no. 9 "C'est ma marraine !"), or have many
//     right questions (nos. 2, 4, 6, 12, 14, 15).
//   - Ex. 5 (write the negative question): no. 10 (si, mon → ton) and no. 11
//     (non, imparfait). No. 5 ("Si, il est venu me chercher chez moi") is the
//     Negative tab's example, and no. 13 ("Si, mon père travaillait
//     beaucoup") the example of switching the people. No. 1 needs la
//     politique, which no lesson has taught. Nos. 4 ("Si j'amène ma fille à
//     l'école tous les jours") and 7 ("Si, je me souviens très bien de ton
//     copain") use Leçon 10's amener and Leçon 11's se souvenir de, but each
//     fits several questions (with or without très bien or tous les jours)
//     and adds no switch the two cards kept don't already ask for. Nos. 6, 8,
//     9, 12 and 15 add no new switch either (no. 6 also has "on n'est pas
//     resté", whose participle can agree with on). The rest have slips (see
//     DEPARTURES).
//   - Ex. 6 (translation): nos. 3, 7, 9, 16, 18 and 19 are phrase cards, and
//     no. 5 is the "→ la question" card for "J'ai 1 frère et 2 sœurs". Nos. 1,
//     2, 4, 8, 10, 13–15, 17 and 21 are Leçons 5–13 material asked as a
//     question. No. 6 ("How old is she?") is Leçon 3's quel âge question,
//     and its inverted form is "Il a quel âge ? → avec inversion"; no. 12
//     ("Which one do you prefer?") is the word card lequel and her table's
//     example; no. 20 ("How do you like your coffee?") is "J'aime mon café …
//     → la question"; no. 11 repeats the pourquoi cards with Leçon 12's tout
//     à l'heure. Nos. 22–41 (negative questions with a short English reply)
//     are not phrase cards: on a phrase card "Oui" passes for "Si" and the ne
//     can be dropped (see WHY … → CARDS). No. 36 ("Don't they have several
//     houses? No, they don't, they have only one house.") is a si / non gap
//     card, in our French, with Leçon 13's ne … que.
//   - Ex. 7–10 are audio (oral translation, dictation, oral answers) with no
//     transcript in her folder.
//
// DEPARTURES FROM HER SHEETS (no card or note copies a slip of hers):
//   - Her section 5 writes "Oui, s'il-te-plaît". It is s'il te plaît, three
//     words with no hyphens, as in Leçon 5; the gap card and the notes write
//     it so, since hyphens are marked.
//   - Her table's "LEQUEL (laquelle, les quels, lesquelles)" breaks
//     "lesquels" across a line. It is one word: Larousse, "lequel, laquelle,
//     lesquels, lesquelles" (https://www.larousse.fr/dictionnaires/francais/lequel/46699).
//   - Her table's English "How do you like your coffe?" is "coffee" in the
//     notes. Her "Non je n'aime pas ça" gains its comma (punctuation is not
//     marked).
//   - The -t- (A-t-il laissé …, Aime-t-il …, Quel âge a-t-il ?) is not in
//     her lesson; the task and every grammar require it. OQLF, Banque de
//     dépannage linguistique, "Emploi du t euphonique": a -t- between two
//     hyphens goes between a verb ending in -e or -a and il, elle or on
//     ("Mange-t-on du homard ce soir ?", "Y a-t-il un problème ?"), and not
//     after a verb ending in -d or -t (https://vitrinelinguistique.oqlf.gouv.qc.ca/22513/la-prononciation/prononciation-de-certaines-lettres/emploi-du-t-euphonique).
//     The hyphen between the verb and the pronoun: OQLF, "Le trait d'union
//     comme lien grammatical" (https://vitrinelinguistique.oqlf.gouv.qc.ca/23353/la-ponctuation/trait-dunion/le-trait-dunion-comme-lien-grammatical).
//   - Her inversion rule is for "un pronom personnel", which includes je.
//     With je, inversion is limited to a few one-syllable forms (ai-je,
//     suis-je, puis-je …) and est-ce que is used otherwise (Académie
//     française, Questions de langue, "Inversion du sujet je : puis-je ?":
//     inversion with je for ai, dis, dois, fais, puis, sais, suis, vais,
//     veux and vois, and "Est-ce que je sors bientôt ?" for the other short
//     forms, https://dictionnaire-academie.fr/article/QDL041). So no card inverts
//     je, and the notes name the pronouns that invert freely (tu, il, elle,
//     on, nous, vous, ils, elles) instead of saying "a pronoun".
//   - Si: Larousse, si (adverbe): "Marque la dénégation après une
//     interrogation négative" (https://www.larousse.fr/dictionnaires/francais/si/72642).
//   - Ce que, not qu'est-ce que, in a statement ("Je ne sais pas ce que tu
//     veux", never "… qu'est-ce que tu veux") is her own rule; the OQLF
//     calls the mixed form criticised: "Dans une phrase interrogative
//     indirecte, on emploie ce que et ce qui … Cet emploi est critiqué"
//     (Banque de dépannage linguistique, "Formules interrogatives ce que et
//     qu'est-ce que", https://vitrinelinguistique.oqlf.gouv.qc.ca/23281/la-syntaxe/linterrogation/formules-interrogatives-ce-que-et-quest-ce-que).
//   - The si / oui / non gap cards are not an exercise of hers. Three are
//     her lesson's examples with the first word taken out ("Tu n'aimes pas
//     te baigner ? Si, j'adore ça !", "Tu ne travailles pas le samedi ? Non,
//     …", "Tu veux du café ? Oui, s'il te plaît"); "C'est pas ça ?" is her
//     ex. 2 no. 14 with our answer; the maisons card is her ex. 6 no. 36 in
//     our French ("Ils n'ont pas plusieurs maisons ? Non, ils n'ont qu'une
//     maison").
//   - The quel and lequel cards are not hers; their sentences are made of
//     Leçons 3–12 words (un livre, une chambre, des chaussures, mettre, une
//     chemise, un appartement).
//   - The "→ Si, …" answers to vous accept on and nous, and je where vous
//     can be one person (her worked example answers vous with je). "Vous ne
//     vous voyez pas souvent ?" takes on or nous only: se voir here is
//     "see each other". The noun questions take the noun or il / elle
//     ("Si, la librairie est ouverte" / "Si, elle est ouverte"), as Leçons
//     5 and 9 do. Each is accepted with or without the Si or Non the prompt
//     shows, as in Leçons 1–10.
//   - Her ex. 4 no. 1 ("Oui, on prend des cours tous les lundis") and ex. 5
//     no. 11 ("Non, on n'avait pas de télé à cette époque-là") take vous, tu
//     or on (see above); ex. 5 no. 10 takes tu or vous ("ton / votre
//     ordinateur").
//   - "Combien de frères et de sœurs …", with de repeated, is accepted
//     beside her "Combien de frères et sœurs …". OQLF, "Répétition des
//     prépositions : obligatoire, facultative ou omise?": à, de and en are
//     in general repeated before each word of a list, and may be left out
//     when the words form a whole, as frères et sœurs do
//     (https://vitrinelinguistique.oqlf.gouv.qc.ca/21101/la-syntaxe/les-prepositions/preposition-devant-un-nom/repetition-des-prepositions-obligatoire-facultative-ou-omise).
//   - The same card also takes combien split from its de + noun by the
//     verb, inverted or with est-ce que ("Combien as-tu de frères et sœurs
//     ?", "Combien est-ce que tu as de frères et sœurs ?", tu or vous, de
//     repeated or not). Académie française, 8th ed., combien: "Combien
//     avez-vous d'argent ?", "Combien y a-t-il de personnes ?"
//     (https://dictionnaire-academie.fr/article/A8C2098); Larousse, combien:
//     "Combien est-ce qu'il est venu de clients ?"
//     (https://www.larousse.fr/dictionnaires/francais/combien/17379). The
//     split with neither inversion nor est-ce que ("Combien tu as de frères
//     et sœurs ?") is not listed: neither dictionary gives it. "Tu as passé
//     combien de temps en Argentine ? → avec est-ce que" takes the unsplit
//     form only: "Combien est-ce que tu as passé de temps …" is not how
//     combien de temps is used.
//   - Slips no card or note copies: ex. 2 no. 2 "Te ne te lèves pas" (Tu);
//     ex. 2 no. 20 and ex. 3 no. 8 "centre ville" (centre-ville); ex. 5
//     no. 1 "Si j'adore" and no. 4 "Si j'amène" (no comma), no. 3 "Si,
//     J'allais" (capital J), no. 2 "Non, on travaille pas" and no. 14 "Non,
//     c'est pas exactement ça" (spoken, without ne); ex. 6 no. 31 "Isn't
//     raining now?" (Isn't it raining); ex. 6 no. 26 "Aren't you going often
//     to the gym?".
//   - Left out of the cards and the notes as later lessons' grammar: her
//     answers with a pronoun for the thing ("Oui, je la connais", "Oui, j'en
//     veux", "Non, je n'y vais pas", "Si, ils y vont tous les samedis": le,
//     la, en and y are Leçons 16 and 20), "Pourquoi tu ne viendrais pas
//     demain ? / Pourquoi ne viendrais-tu pas demain ?", whose conditional is
//     Leçon 19's, and "Tu ne travailles plus le samedi ? Si, malheureusement
//     !", whose ne … plus no lesson up to 14 teaches (the notes' table of
//     answers has no English column, so it read as a slip for "pas").
//     Her ex. 3 no. 13 "Tu n'es jamais en retard ?" is out for the same
//     reason: ne … jamais is Leçon 18's.
//
// THE NOTES are her lesson, translated into English and restructured on the
// impératif's model. There is no Use tab: what each way of asking is for (its
// register) is the Forms table, and a Use tab would repeat it. Forms (her
// sections 1 and 2, with her Remarque 1 on casual speech), Words (her
// section 3: her table of question words with her examples, then combien,
// quel, lequel and ça), Saying what (her "cas particulier"; "What" alone
// read like a placeholder), Negative (her section 4), Answers (her section
// 5). Her table of question words stays as her example sentences with their
// English, which are not a word list, and the answers to "J'ai 1 frère et 2
// sœurs → la question", "J'aime mon café … → la question" and "Combien ça
// coûte ?" are in it. Its column of the bare words is left out: each word
// is in its sentence, and each word is a word card here or in Leçons 1, 6,
// 8 and 11. The English beside her examples is ours except in her table.
// One column heading is ours too: "Used in", not "Where", for the Forms
// table's register column, since "where" is also a question word here.
// Her registers "courant", "familier" and "soutenu" are "everyday",
// "casual" and "formal".
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her examples or her exercises
// show each of these, but her lesson never says it, and a card that tests a
// rule needs the rule stated:
//   - Forms, est-ce que: "Before a vowel, que becomes qu'" (her ex. 1 nos. 15
//     and 18: "est-ce qu'il", "est-ce qu'ils").
//   - Forms, Verb, then pronoun: the list of pronouns (tu, il, elle, on,
//     nous, vous, ils, elles), which leaves out je (see DEPARTURES); "With a
//     past participle, only avoir or être moves" (her "Avez-vous vu le chien
//     ?"); the whole -t- note (see DEPARTURES).
//   - Forms, With a question word: "Put the question word first, then ask
//     in any of the three ways" (her section 2's examples); "Words that
//     belong to the question word move with it" (her ex. 1 nos. 6 and 8 show
//     "combien de temps" and "avec qui" at the end, which est-ce que brings
//     to the front). Casual speech: the English glosses and "not first" are
//     ours.
//   - Forms, From the answer to the question: the whole note ("switch the
//     people, so je becomes tu and on becomes vous"), for her ex. 4 no. 1;
//     its example "oui, on habite ici / vous habitez ici ?" is ours.
//   - Words, the lead: "Question words like pourquoi and combien usually
//     start the question" (her section 2 and her table's examples; her
//     Remarque 1, the casual end position, is why it says "usually").
//   - Words, combien: "Combien … is used with no noun after it" and
//     "Before a noun it is combien de, or combien d' before a vowel" (her
//     table gives "combien" and "combien de" without saying when; the d' is
//     ours); "With depuis, "since", and the present, it asks how long
//     something has been going on" (her table's "Depuis combien de temps tu
//     es là ? / For how long have you been here?").
//   - Words, quel and lequel: "goes just before a noun and changes to match
//     it", "takes the place of a noun and changes to match it", and "Use
//     quel when a noun comes straight after it, and lequel when the noun has
//     already been said". Her table lists the forms only.
//   - Saying what: "quoi, straight after the verb" for her "en fin de
//     phrase", since her ex. 1 no. 5, "Tu fais quoi demain ?" (a gap card),
//     puts quoi before demain; that sentence is the note's second example.
//     "Use ce que when the next word says who does the action … and ce qui
//     when it doesn't" is her "ce que (COD) ou ce qui (sujet)" without the
//     grammar words, and its ce que example "je ne sais pas ce que tu veux"
//     is ours; "Before a vowel, que becomes qu'" (her "ce qu'il a"); "A
//     question can have a statement inside it, and that "what" is ce que
//     too" (her ex. 1 no. 2).
//   - Negative: "Before a vowel, ne becomes n'" (Leçon 5's rule, for "N'est-il
//     pas arrivé en retard ?"); "with ne in front of the verb and pas
//     straight after the pronoun" states her "Ne connais-tu pas Émilie ?"
//     (and keeps a student off "Ne connais pas-tu", which the card refuses);
//     the whole "From the answer to the question" sub (her ex. 5): "An
//     answer that starts with si replies to a negative question" (Larousse,
//     cited in DEPARTURES) and "switch the people" (je → tu, on → vous, me →
//     te, moi → toi, mon → ton). Its questions are ours: her ex. 5 nos. 5
//     and 13 give only the answers.
//   - Answers: "Spoken questions often drop the ne, and they still take si"
//     (her ex. 2 no. 14, "C'est pas ça ?"); "After si … pas de becomes un,
//     une or des again"; the four "Switching people" notes (tu ↔ je, vous
//     → on, nous or je, vous vous → on se or nous nous, ton → mon, a noun
//     stays or becomes il or elle), which her ex. 2 example only shows. The
//     examples "Tu travailles beaucoup ? Oui, je travaille beaucoup" and
//     "Ton frère n'est pas là ? Non, il n'est pas là" are ours; "Tu n'as pas
//     vu tes amis hier ?" is her ex. 3 no. 9, with our answer, which is
//     also the card's.

export const CARDS = [
  // ── Her list of question words: the ones no earlier lesson has
  ["qui", "who / whom", "V", "words"],
  ["combien", "how much / how many", "V", "words"],
  // "before a noun" so the English doesn't point to quoi or qu'est-ce que;
  // "(masc.)" names the form wanted. Quelle and lequel pass here as close
  // enough, so the forms and the choice are on exact cards (see the header).
  ["quel", "which / what (before a noun, masc.)", "V", "words"],
  ["lequel", "which one (masc.)", "V", "words"],

  // ── 1 and 2. Three ways to ask: est-ce que …
  ["Vous voulez un café ? → avec est-ce que", "Est-ce que vous voulez un café ?", "G", "estceque"],
  ["Il est arrivé en retard ? → avec est-ce que", "Est-ce qu'il est arrivé en retard ?", "G", "estceque"],
  ["Pourquoi tu pars demain ? → avec est-ce que", "Pourquoi est-ce que tu pars demain ?", "G", "estceque"],
  ["Il est venu avec qui ? → avec est-ce que", "Avec qui est-ce qu'il est venu ?", "G", "estceque"],
  ["Tu as passé combien de temps en Argentine ? → avec est-ce que", "Combien de temps est-ce que tu as passé en Argentine ?", "G", "estceque"],

  // … the verb before the pronoun, with a hyphen, and -t- after -e or -a …
  ["Vous voulez un café ? → avec inversion", "Voulez-vous un café ?", "G", "inversion"],
  ["Vous avez vu le chien ? → avec inversion", "Avez-vous vu le chien ?", "G", "inversion"],
  ["Il a laissé les meubles dans le salon ? → avec inversion", "A-t-il laissé les meubles dans le salon ?", "G", "inversion"],
  ["Il aime faire du sport ? → avec inversion", "Aime-t-il faire du sport ?", "G", "inversion"],
  ["Pourquoi tu pars demain ? → avec inversion", "Pourquoi pars-tu demain ?", "G", "inversion"],
  ["Quand est-ce qu'ils sont rentrés ? → avec inversion", "Quand sont-ils rentrés ?", "G", "inversion"],
  // A question word and the -t- together (her ex. 4 no. 8, "Il a 30 ans")
  ["Il a quel âge ? → avec inversion", "Quel âge a-t-il ?", "G", "inversion"],

  // … every way at once, from an answer (her ex. 4 no. 1). An on question
  // fits too, asked by someone in the same group; prend-on takes no -t-.
  ["Oui, on prend des cours tous les lundis → la question", "Vous prenez des cours tous les lundis ? / Est-ce que vous prenez des cours tous les lundis ? / Prenez-vous des cours tous les lundis ? / Tu prends des cours tous les lundis ? / Est-ce que tu prends des cours tous les lundis ? / Prends-tu des cours tous les lundis ? / On prend des cours tous les lundis ? / Est-ce qu'on prend des cours tous les lundis ? / Prend-on des cours tous les lundis ?", "G", "yesnoq"],

  // … and back from formal to everyday (her ex. 1 nos. 9 and 3)
  ["Quel âge avez-vous ? → sans inversion", "Quel âge vous avez ? / Vous avez quel âge ? / Quel âge est-ce que vous avez ?", "G", "plain"],
  ["Avez-vous essayé de prendre des somnifères ? → sans inversion", "Vous avez essayé de prendre des somnifères ? / Est-ce que vous avez essayé de prendre des somnifères ?", "G", "plain"],

  // Casual speech: the question word at the end (her Remarque 1)
  ["Où est-ce que tu as mis les dossiers ? → à l'oral familier", "Tu as mis les dossiers où ? / Tu as mis où les dossiers ?", "G", "familier"],
  ["Quand est-ce que tu arrives ? → à l'oral familier", "Tu arrives quand ?", "G", "familier"],
  ["Comment est-ce que tu as fait ? → à l'oral familier", "Tu as fait comment ?", "G", "familier"],

  // ── 3. Question words: combien or combien de …
  ["combien ou combien de → Les écouteurs coûtent ___ ?", "combien", "G", "combien"],
  ["combien ou combien de → Tu as ___ amis français ?", "combien d'", "G", "combien"],

  // … quel and lequel, in the form that fits, and which of the two
  ["quel → ___ chambre tu préfères ?", "Quelle", "G", "quel"],
  ["quel → ___ livres tu veux acheter ?", "Quels", "G", "quel"],
  ["quel → ___ chaussures tu vas mettre ?", "Quelles", "G", "quel"],
  ["lequel → J'ai deux chemises. ___ tu préfères ?", "Laquelle", "G", "lequel"],
  ["lequel → Tu veux acheter des livres ? ___ ?", "Lesquels", "G", "lequel"],
  ["lequel → Tu as acheté des chaussures ? ___ ?", "Lesquelles", "G", "lequel"],
  ["quel ou lequel → ___ appartement tu préfères ?", "Quel", "G", "quellequel"],
  ["quel ou lequel → Tu as deux frères. ___ habite à Paris ?", "Lequel", "G", "quellequel"],

  // … a question word and ça (her Remarque 2)
  // "with ça": "C'est où ?" and "Où ?" are good French for the English too.
  ["Où ça ?", "Where? / Where's that? / Where exactly? (casual, with ça)", "E", "ca"],
  ["Pourquoi ça ?", "Why is that? / Why's that? / How come? / Why? (casual, with ça)", "E", "ca"],

  // … the question for an answer (her ex. 4 nos. 11 and 13). Frères et
  // sœurs is her form; frères et de sœurs, with de repeated, is right too,
  // and so is combien split from its de + noun by the verb ("Combien as-tu
  // de frères et sœurs ?"). Comment straight after the verb is casual
  // speech, as on the dossiers card. See the header.
  ["J'ai 1 frère et 2 sœurs → la question", "Combien de frères et sœurs tu as ? / Tu as combien de frères et sœurs ? / Combien de frères et sœurs as-tu ? / Combien de frères et sœurs est-ce que tu as ? / Combien de frères et sœurs vous avez ? / Vous avez combien de frères et sœurs ? / Combien de frères et sœurs avez-vous ? / Combien de frères et sœurs est-ce que vous avez ? / Combien de frères et de sœurs tu as ? / Tu as combien de frères et de sœurs ? / Combien de frères et de sœurs as-tu ? / Combien de frères et de sœurs est-ce que tu as ? / Combien de frères et de sœurs vous avez ? / Vous avez combien de frères et de sœurs ? / Combien de frères et de sœurs avez-vous ? / Combien de frères et de sœurs est-ce que vous avez ? / Combien as-tu de frères et sœurs ? / Combien avez-vous de frères et sœurs ? / Combien est-ce que tu as de frères et sœurs ? / Combien est-ce que vous avez de frères et sœurs ? / Combien as-tu de frères et de sœurs ? / Combien avez-vous de frères et de sœurs ? / Combien est-ce que tu as de frères et de sœurs ? / Combien est-ce que vous avez de frères et de sœurs ?", "G", "question"],
  ["J'aime mon café avec un peu de lait → la question", "Comment tu aimes ton café ? / Tu aimes ton café comment ? / Tu aimes comment ton café ? / Comment aimes-tu ton café ? / Comment est-ce que tu aimes ton café ? / Comment vous aimez votre café ? / Vous aimez votre café comment ? / Vous aimez comment votre café ? / Comment aimez-vous votre café ? / Comment est-ce que vous aimez votre café ?", "G", "question"],

  // Her table and her translations (ex. 1 and 6), for the meaning of whole
  // questions. The hint names the way of asking: see the header.
  ["Combien ça coûte ?", "How much does it cost? / How much is it? (with coûter, no est-ce que)", "E", "phrases"],
  ["C'est qui ?", "Who is it? / Who's that? / Who is that? (casual)", "E", "phrases"],
  ["Qui est la femme à droite sur la photo ?", "Who is the woman on the right in the picture? / Who is the woman on the right in the photo? / Who's the woman on the right in the picture? (with qui est)", "E", "phrases"],
  ["Quand est-ce que tu viens ?", "When are you coming? / When will you come? (tu, with est-ce que)", "E", "phrases"],
  ["Tu es là depuis combien de temps ?", "How long have you been here? / For how long have you been here? / How long have you been there? (tu, casual)", "E", "phrases"],
  ["Combien de temps est-ce que tu vas rester ici ?", "How long are you going to stay here? / How long are you staying here? / How long will you stay here? (tu, with est-ce que)", "E", "phrases"],
  ["C'est quoi ?", "What is it? / What's that? / What is that? (casual)", "E", "phrases"],

  // ── "What": in a question …
  ["qu'est-ce que, que ou quoi → ___ tu fais ce soir ?", "Qu'est-ce que", "G", "whatq"],
  ["qu'est-ce que, que ou quoi → ___ fais-tu ?", "Que", "G", "whatq"],
  ["qu'est-ce que, que ou quoi → Tu fais ___ demain ?", "quoi", "G", "whatq"],
  // … and in a statement
  ["qu'est-ce que, ce que ou ce qui → Je ne sais pas ___ il a", "ce qu'", "G", "whats"],
  ["qu'est-ce que, ce que ou ce qui → Je ne sais pas ___ se passe", "ce qui", "G", "whats"],
  ["qu'est-ce que, ce que ou ce qui → Tu lui as dit ___ tu voulais faire ?", "ce que", "G", "whats"],

  // ── 4. Negative questions, the formal way (her lesson and ex. 2 no. 5)
  ["Tu ne connais pas Émilie ? → avec inversion", "Ne connais-tu pas Émilie ?", "G", "neginversion"],
  ["Il n'est pas arrivé en retard ? → avec inversion", "N'est-il pas arrivé en retard ?", "G", "neginversion"],

  // ── 5. Answering: oui, si or non (her lesson's examples, ex. 2 no. 14,
  //       ex. 6 no. 36)
  ["oui, si ou non → Tu n'aimes pas te baigner ? ___, j'adore ça !", "Si", "G", "ouisinon"],
  ["oui, si ou non → Tu ne travailles pas le samedi ? ___, je ne travaille pas le samedi", "Non", "G", "ouisinon"],
  ["oui, si ou non → Tu veux du café ? ___, s'il te plaît", "Oui", "G", "ouisinon"],
  ["oui, si ou non → C'est pas ça ? ___, c'est ça", "Si", "G", "ouisinon"],
  ["oui, si ou non → Ils n'ont pas plusieurs maisons ? ___, ils n'ont qu'une maison", "Non", "G", "ouisinon"],

  // Answer yes to a negative question (her ex. 2): one card per switch.
  // Each is also accepted without the Si the prompt already shows.
  ["Vous ne vous voyez pas souvent ? → Si, …", "Si, on se voit souvent / Si, nous nous voyons souvent / On se voit souvent / Nous nous voyons souvent", "G", "si"],
  ["Tu ne dois pas partir tout à l'heure ? → Si, …", "Si, je dois partir tout à l'heure / Je dois partir tout à l'heure", "G", "si"],
  ["Il n'y a pas de toilettes ici ? → Si, …", "Si, il y a des toilettes ici / Il y a des toilettes ici", "G", "si"],
  ["Vous n'avez pas acheté la maison l'année dernière ? → Si, …", "Si, on a acheté la maison l'année dernière / Si, nous avons acheté la maison l'année dernière / Si, j'ai acheté la maison l'année dernière / On a acheté la maison l'année dernière / Nous avons acheté la maison l'année dernière / J'ai acheté la maison l'année dernière", "G", "si"],
  ["La librairie n'est pas ouverte ? → Si, …", "Si, elle est ouverte / Si, la librairie est ouverte / Elle est ouverte / La librairie est ouverte", "G", "si"],

  // Answer no to it (her ex. 3): the sentence stays negative. Tes amis takes
  // mes amis only: les for them is Leçon 16's (see the header).
  ["Tu ne veux pas voyager ? → Non, …", "Non, je ne veux pas voyager / Je ne veux pas voyager", "G", "non"],
  ["Tu n'as pas d'écouteurs sans fil ? → Non, …", "Non, je n'ai pas d'écouteurs sans fil / Je n'ai pas d'écouteurs sans fil", "G", "non"],
  ["Tu n'as pas vu tes amis hier ? → Non, …", "Non, je n'ai pas vu mes amis hier / Je n'ai pas vu mes amis hier", "G", "non"],
  ["Ta voiture n'est pas noire ? → Non, …", "Non, elle n'est pas noire / Non, ma voiture n'est pas noire / Elle n'est pas noire / Ma voiture n'est pas noire", "G", "non"],

  // The negative question for a si or non answer (her ex. 5 nos. 10 and 11)
  ["Si, j'ai laissé mon ordinateur à la maison → la question", "Tu n'as pas laissé ton ordinateur à la maison ? / Est-ce que tu n'as pas laissé ton ordinateur à la maison ? / N'as-tu pas laissé ton ordinateur à la maison ? / Vous n'avez pas laissé votre ordinateur à la maison ? / Est-ce que vous n'avez pas laissé votre ordinateur à la maison ? / N'avez-vous pas laissé votre ordinateur à la maison ?", "G", "negquestion"],
  ["Non, on n'avait pas de télé à cette époque-là → la question", "Vous n'aviez pas de télé à cette époque-là ? / Est-ce que vous n'aviez pas de télé à cette époque-là ? / N'aviez-vous pas de télé à cette époque-là ? / Tu n'avais pas de télé à cette époque-là ? / Est-ce que tu n'avais pas de télé à cette époque-là ? / N'avais-tu pas de télé à cette époque-là ? / On n'avait pas de télé à cette époque-là ? / Est-ce qu'on n'avait pas de télé à cette époque-là ? / N'avait-on pas de télé à cette époque-là ?", "G", "negquestion"],
];

// The notes are opened mid-card by a student who is stuck, so each tab
// answers at a glance. Written to the notes rules in
// .claude/skills/building-lessons/SKILL.md, on the impératif's model; see the
// header for what isn't hers.
export const NOTES = [
  {
    tab: "Forms",
    h: "1 · Three ways to ask a question",
    blocks: [
      { t: "lead", v: "French has three ways to ask the same question, from everyday to formal: *vous voulez un café ?*, *est-ce que vous voulez un café ?* and *voulez-vous un café ?* all mean \"do you want a coffee?\"." },
      { t: "table", bold: 1,
        cols: ["How", "Example", "Used in"],
        rows: [
          ["Question mark only", "Vous voulez un café ?", "Speech, very common"],
          ["est-ce que", "Est-ce que vous voulez un café ?", "Speech and writing, very common"],
          ["Verb, then pronoun", "Voulez-vous un café ?", "Writing, very formal"],
        ]},
      { t: "sub", v: "est-ce que" },
      { t: "note", v: "Before a vowel, que becomes qu': *est-ce qu'il est arrivé en retard ?*, \"did he arrive late?\"." },
      { t: "sub", v: "Verb, then pronoun" },
      { t: "note", v: "With tu, il, elle, on, nous, vous, ils or elles, swap the verb and the pronoun and join them with a hyphen: *vous voulez → voulez-vous*, \"do you want\"." },
      { t: "note", v: "With a past participle, only avoir or être moves: *avez-vous vu le chien ?*, \"have you seen the dog?\"." },
      { t: "note", v: "When the verb ends in -e or -a and the pronoun is il, elle or on, put **-t-** between them: *a-t-il fini ?*, \"has he finished?\"; *aime-t-elle le sport ?*, \"does she like sport?\"." },
      { t: "sub", v: "With a question word" },
      { t: "note", v: "Put the question word first, then ask in any of the three ways: all three of these mean \"why are you leaving tomorrow?\"." },
      { t: "table", bold: 1,
        cols: ["How", "Example"],
        rows: [
          ["Question mark only", "Pourquoi tu pars demain ?"],
          ["est-ce que", "Pourquoi est-ce que tu pars demain ?"],
          ["Verb, then pronoun", "Pourquoi pars-tu demain ?"],
        ]},
      { t: "note", v: "Words that belong to the question word move with it: *avec qui est-ce qu'il est venu ?*, \"who did he come with?\"; *combien de temps est-ce que tu as passé en Argentine ?*, \"how long did you spend in Argentina?\"." },
      { t: "sub", v: "Casual speech" },
      { t: "note", v: "In casual speech, *comment*, \"how\", *quand*, \"when\", *où*, \"where\", *combien*, \"how much\", and *lequel*, \"which one\", often go at the end, not first: *tu vas où ?*, \"where are you going?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Tu aimes ton café comment ?", "How do you like your coffee?"],
        ["Tu arrives quand ?", "When are you arriving?"],
        ["Tu vas où ?", "Where are you going?"],
      ]},
      { t: "sub", v: "From the answer to the question" },
      { t: "note", v: "To write the question for an answer, switch the people, so je becomes tu and on becomes vous: *oui, on habite ici*, \"yes, we live here\", answers *vous habitez ici ?*, \"do you live here?\"." },
    ],
  },
  {
    tab: "Words",
    h: "2 · Question words",
    blocks: [
      { t: "lead", v: "Question words like *pourquoi*, \"why\", and *combien*, \"how much\", usually start the question: *pourquoi vous êtes en France ?*, \"why are you in France?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Pourquoi vous êtes en France ?", "Why are you in France?"],
        ["Comment tu aimes ton café ?", "How do you like your coffee?"],
        ["Qui est cette personne ?", "Who is this person?"],
        ["Quand est-ce que tu viens ?", "When are you coming?"],
        ["Où tu habites ?", "Where do you live?"],
        ["Combien ça coûte ?", "How much does it cost?"],
        ["Combien de frères et sœurs tu as ?", "How many siblings do you have?"],
        ["Quel âge as-tu ?", "How old are you?"],
        ["Laquelle tu préfères ?", "Which one do you prefer?"],
        ["Depuis combien de temps tu es là ?", "How long have you been here?"],
      ]},
      { t: "sub", v: "combien or combien de" },
      { t: "note", v: "*Combien*, \"how much\", is used with no noun after it: *combien ça coûte ?*, \"how much does it cost?\"." },
      { t: "note", v: "Before a noun it is *combien de*, \"how many\" or \"how much\", or *combien d'* before a vowel: *tu as combien d'amis français ?*, \"how many French friends do you have?\"." },
      { t: "note", v: "*Combien de temps* is \"how long\". With *depuis*, \"since\", and the present, it asks how long something has been going on: *depuis combien de temps tu es là ?*, \"how long have you been here?\"." },
      { t: "sub", v: "quel" },
      { t: "note", v: "*Quel*, \"which\" or \"what\", goes just before a noun and changes to match it: *quelle chambre ?*, \"which bedroom?\"." },
      { t: "table", bold: 0,
        cols: ["", "Masculine", "Feminine"],
        rows: [
          ["One", "quel livre · which book", "quelle chambre · which bedroom"],
          ["More than one", "quels livres · which books", "quelles chaussures · which shoes"],
        ]},
      { t: "sub", v: "lequel" },
      { t: "note", v: "*Lequel*, \"which one\", takes the place of a noun and changes to match it: *j'ai deux chemises. Laquelle tu préfères ?*, \"I have two shirts. Which one do you prefer?\"." },
      { t: "table", bold: 0,
        cols: ["", "Masculine", "Feminine"],
        rows: [
          ["One", "lequel · which one", "laquelle · which one"],
          ["More than one", "lesquels · which ones", "lesquelles · which ones"],
        ]},
      { t: "sub", v: "quel or lequel?" },
      { t: "note", v: "Use quel when a noun comes straight after it, and lequel when the noun has already been said: *quel appartement ?*, \"which apartment?\"; *il y a deux appartements. Lequel ?*, \"there are two apartments. Which one?\"." },
      { t: "sub", v: "A question word and ça" },
      { t: "note", v: "In casual speech, a question word and *ça*, \"that\", can be the whole question: *où ça ?*, \"where?\"; *pourquoi ça ?*, \"why's that?\"." },
    ],
  },
  {
    tab: "Saying what",
    h: "3 · Saying \"what\"",
    blocks: [
      { t: "lead", v: "In a question, \"what\" is **qu'est-ce que** at the start: *qu'est-ce que tu fais ce soir ?*, \"what are you doing tonight?\"." },
      { t: "note", v: "In formal French, \"what\" can be *que*, but only with the verb before the pronoun: *que fais-tu ?*, \"what are you doing?\"." },
      { t: "note", v: "In casual speech, \"what\" can be *quoi*, straight after the verb: *tu fais quoi ?*, \"what are you doing?\"; *tu fais quoi demain ?*, \"what are you doing tomorrow?\"." },
      { t: "table", bold: 1,
        cols: ["How", "What are you doing?"],
        rows: [
          ["Everyday", "Qu'est-ce que tu fais ?"],
          ["Formal", "Que fais-tu ?"],
          ["Casual", "Tu fais quoi ?"],
        ]},
      { t: "sub", v: "In a statement" },
      { t: "note", v: "In a statement, \"what\" is **ce que** or **ce qui**, never qu'est-ce que: *je n'ai pas compris ce que tu m'as dit*, \"I didn't understand what you told me\"." },
      { t: "note", v: "Use ce que when the next word says who does the action, like tu, il or Marie, and ce qui when it doesn't: *je ne sais pas ce que tu veux*, \"I don't know what you want\"; *je ne sais pas ce qui se passe*, \"I don't know what's happening\"." },
      { t: "note", v: "Before a vowel, que becomes qu': *je ne sais pas ce qu'il a*, \"I don't know what's wrong with him\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je ne sais pas ce qu'il a", "I don't know what's wrong with him"],
        ["Je n'ai pas compris ce que tu m'as dit", "I didn't understand what you told me"],
        ["Oui, c'est ce qui m'embête", "Yes, that's what bothers me"],
        ["Je ne sais pas ce qui se passe", "I don't know what's happening"],
      ]},
      { t: "note", v: "A question can have a statement inside it, and that \"what\" is ce que too: *tu lui as dit ce que tu voulais faire ?*, \"did you tell him what you wanted to do?\"." },
    ],
  },
  {
    tab: "Negative",
    h: "4 · Negative questions",
    blocks: [
      { t: "lead", v: "A negative question puts ne … pas around the verb, like any negative sentence: *tu ne connais pas Émilie ?*, \"don't you know Émilie?\"." },
      { t: "note", v: "In formal French, the verb goes before the pronoun, with ne in front of the verb and pas straight after the pronoun: *ne connais-tu pas Émilie ?*, \"don't you know Émilie?\"." },
      { t: "note", v: "Before a vowel, ne becomes n': *n'est-il pas arrivé en retard ?*, \"didn't he arrive late?\"." },
      { t: "table", bold: 1,
        cols: ["Everyday", "Formal"],
        rows: [
          ["Tu ne connais pas Émilie ?", "Ne connais-tu pas Émilie ?"],
          ["Il n'est pas arrivé en retard ?", "N'est-il pas arrivé en retard ?"],
          ["Vous n'allez pas en Bretagne en voiture ?", "N'allez-vous pas en Bretagne en voiture ?"],
        ]},
      { t: "sub", v: "From the answer to the question" },
      { t: "note", v: "An answer that starts with si replies to a negative question: *si, il est venu me chercher chez moi*, \"yes, he did come to pick me up at my place\", answers *il n'est pas venu te chercher chez toi ?*, \"didn't he come to pick you up at your place?\"." },
      { t: "note", v: "To write the question, switch the people, so je becomes tu, on becomes vous, me becomes te, moi becomes toi, and mon, ma and mes, \"my\", become ton, ta and tes, \"your\": *si, mon père travaillait beaucoup*, \"yes, my father worked a lot\", answers *ton père ne travaillait pas beaucoup ?*, \"didn't your father work a lot?\"." },
    ],
  },
  {
    tab: "Answers",
    h: "5 · Answering a question",
    blocks: [
      { t: "lead", v: "Answer with oui or non, or say the whole sentence again: *tu veux du café ? Oui, s'il te plaît*, \"do you want some coffee? Yes, please\"." },
      { t: "note", v: "French has no short answer like \"yes, I do\", so say oui, or the whole sentence again: *tu travailles beaucoup ? Oui, je travaille beaucoup*, \"do you work a lot? Yes, I work a lot\"." },
      { t: "sub", v: "Answering a negative question" },
      { t: "note", v: "**The trap:** to say yes to a negative question, say **si**, never oui: *tu n'aimes pas te baigner ? Si, j'adore ça !*, \"don't you like swimming? Yes, I love it!\"." },
      { t: "note", v: "To say no to a negative question, say non and keep the sentence negative: *tu ne travailles pas le samedi ? Non, je ne travaille pas le samedi*, \"don't you work on Saturdays? No, I don't work on Saturdays\"." },
      { t: "table", bold: 1,
        cols: ["Question", "Answer"],
        rows: [
          ["Vous ne travaillez pas beaucoup ?", "Si, je travaille beaucoup"],
          ["Tu n'aimes pas te baigner ?", "Si, j'adore ça !"],
          ["Tu n'aimes pas te baigner ?", "Non, je n'aime pas ça"],
          ["Tu ne travailles pas le samedi ?", "Non, je ne travaille pas le samedi"],
        ]},
      { t: "note", v: "Spoken questions often drop the ne, and they still take si: *c'est pas ça ? Si, c'est ça*, \"isn't that it? Yes, it is\"." },
      { t: "sub", v: "After si" },
      { t: "note", v: "After si, the rest of the answer is not negative: take out ne … pas, and pas de becomes un, une or des again: *il n'y a pas de toilettes ici ? Si, il y a des toilettes ici*, \"aren't there any toilets here? Yes, there are toilets here\"." },
      { t: "sub", v: "Switching people" },
      { t: "note", v: "Tu in the question becomes je in the answer, and vous becomes on or nous, both \"we\", or je if vous means just you: *vous n'avez pas acheté la maison ? Si, on a acheté la maison*, \"didn't you buy the house? Yes, we bought the house\"." },
      { t: "note", v: "Vous vous becomes on se or nous nous: *vous ne vous voyez pas souvent ? Si, on se voit souvent*, \"don't you see each other often? Yes, we see each other often\"." },
      { t: "note", v: "Ton, ta and tes, \"your\", become mon, ma and mes, \"my\": *tu n'as pas vu tes amis hier ? Non, je n'ai pas vu mes amis hier*, \"didn't you see your friends yesterday? No, I didn't see my friends yesterday\"." },
      { t: "note", v: "A noun can stay, or become il or elle: *ton frère n'est pas là ? Non, il n'est pas là*, \"isn't your brother here? No, he isn't\"." },
    ],
  },
];

export const LESSON = {
  id: "lecon14",
  title: "Lesson 14 · Asking questions",
  subtitle: "Three ways to ask, question words, saying what, and si",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her list of
  // question words first, as in Leçons 5–10: the rewrite cards are made of
  // them. Then her sections in her order, each followed by the cards that
  // practise it: the three ways (est-ce que, inversion, a yes / no question
  // from its answer, formal back to everyday, casual speech); the question
  // words (combien, quel, lequel, the choice of the two, ça, the question
  // for an answer, the phrases); what; negative questions; answering (oui,
  // si or non, then si and non answers), and last the negative question for
  // a si or non answer, which needs both.
  teachingOrder: [
    "words",
    "estceque", "inversion", "yesnoq", "plain", "familier",
    "combien", "quel", "lequel", "quellequel", "ca", "question", "phrases",
    "whatq", "whats",
    "neginversion",
    "ouisinon", "si", "non", "negquestion",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). There are no drills. Words, ça and phrases
  // are two-way phrase cards and carry none.
  instructions: {
    estceque: "Ask the same question with est-ce que",
    inversion: "Ask the same question the formal way, verb before pronoun",
    // Not "(not a yes/no one)": the Oui in the answer shows it is one.
    yesnoq: "Write the yes/no question this answers",
    plain: "Ask the same question the everyday way, without swapping verb and pronoun",
    // "question word last": her lesson calls the word-first question very
    // common speech and only the end position casual (see the header).
    familier: "Ask the same question the casual spoken way, question word last",
    // Names the d' so the one card that needs it isn't a trick.
    combien: "Fill the gap with the right one of the two (de is d' before a vowel)",
    quel: "Fill the gap with the word given, in the form that fits",
    lequel: "Fill the gap with the word given, in the form that fits",
    quellequel: "Choose one of the words given and fill the gap, in the form that fits",
    question: "Write the question this answers (not a yes/no one)",
    whatq: "Fill the gap with the right one of the three",
    whats: "Fill the gap with the right one of the three (que is qu' before a vowel)",
    neginversion: "Ask the same question the formal way, verb before pronoun",
    ouisinon: "Fill the gap with the right one of the three",
    si: "Answer yes in a full sentence",
    non: "Answer no in a full sentence",
    negquestion: "Write the negative question this answers",
  },
};

export default LESSON;
