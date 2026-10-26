// Lesson 21 · Irse, ya, todavía and nunca — built from the Spanish course's
// Lección 21 sheets, adapted from Laura Caufour's LFL METHOD: the lesson
// (James and Mateo talk about their health outside the pharmacy; grammar
// 1–7) and the exercise sheet. The Spanish course has no answer key, so every
// answer here was written for this file, the way a Mexican Spanish teacher
// would mark it.
// Checked 2026-10-22 by an independent reader: 10 fixes.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see imperatif.js for why.
//
// Card shapes:
//   two-way phrase (E) and word (V) cards for the dialogue and "Las palabras
//   de la salud"
//   "James se va porque está enfermo" / "James is leaving because he's sick"
//                                                  an irregular verb form, in a phrase
//
// WHY THE CHOICES ARE ON EXACT CARDS. Phrase cards are marked with typo
// tolerance, and the mistakes this lesson is about are small: "me duele mi
// cabeza" is two letters from "me duele la cabeza", and "no quiero algo" is
// not far from "no quiero nada" in a long sentence. So the article with the
// body, algo or nada, alguien or nadie, and preterite or haber are all gap
// cards marked exactly, and the phrase cards are there for meaning. "¡Me
// voy!" and "¡Ya voy!" stay phrase cards: they are two letters apart in six,
// and the matcher allows one at that length.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 1 (write a sentence with each verb) became the drills: the six
//     persons of responder and irse in the present, and the preterite the
//     dialogue uses (respondió, me fui, se fue). The imperfect (se iban) is
//     not drilled: it is regular and no other card needs it. Contestar is not
//     drilled: Lesson 11 teaches it, and it is regular -ar.
//   - The perfect: one drill per person, each on a different verb, so every
//     form of haber is asked once, with -ado, -ido and ir → ido; then all
//     nine irregular participles in her table.
//   - Ex. 3 and 4: one answer per thing it adds (a bare verb, an irregular
//     participle, le before haber with tu → mi, tus → mis, te → me, a country
//     with en). Ex. 3's "No usar lo, la, los, las" is in the instruction line,
//     which also asks for haber: in Latin America "No, nunca vi Coco" is said
//     too, but these exercises drill the perfect.
//   - Ex. 6 became pairs (algo o nada, alguien o nadie): the pair is the
//     table in her section 5, and a six-word choice has more than one
//     answer for several of her items ("No voy siempre al médico" is good
//     Spanish).
//   - Ex. 7: one card per pronoun, plus her last item in the preterite.
//   - Ex. 2 and 8 (translations into Spanish) are sampled as phrase cards:
//     "¿Alguna vez has estado en Italia?", "¿Ya fuiste a la farmacia?",
//     "Llamé al consultorio, pero nadie contestó". Her "Have you eaten yet?"
//     is not one: "¿Ya comiste?" is a Lesson 8 card.
//
// Not made into cards: ex. 5 (answer about your own life: no one answer);
// ex. 9 (dictation) and 10–12 (oral answers) need the audio. Words an earlier
// lesson already teaches are not word cards here: la farmacia (Lesson 18), el
// consultorio (Lesson 7), el gimnasio (Lesson 8), todavía no (Lesson 11),
// ¿De verdad? (Lesson 10), estos días (Lesson 12). "Me tengo que ir / Tengo
// que irme" is not a card: a phrase card's Spanish side is one sentence, and
// either one would be marked wrong for the other.
//
// Where this departs from the sheets:
//   - "tener gripa" is "to have a cold / the flu" on her list and "estar
//     resfriado" "to have a cold", so each English side names its verb
//     ("with tener", "with estar"); otherwise a right answer from the next
//     card would be marked wrong.
//   - "las medicinas" is her plural, and its English side says "(plural)", so
//     la medicina is not what's expected.
//   - "ir → ¿Tú ya ___ al médico?" and "tener → ¿Tú alguna vez ___ gripa?" add
//     tú to her sentences, so the person is fixed. Each shows her form
//     (fuiste with ya, has tenido with alguna vez) and also accepts the other
//     tense, "has ido" and "tuviste", which are said in Mexico too: a right
//     answer is never marked wrong (2026-10-22).
//   - "comer → Hoy yo ___ tacos" (comí) and "tener → El año pasado yo ___
//     bronquitis" (tuve) are her section 3 table as gaps; "he comido" is not
//     accepted with hoy, as her table says for Latin America.
//   - "encontrar → James todavía no ___ el tiempo para empezar" is the
//     dialogue's "todavía no he encontrado el tiempo", told of James.
//   - The "→ con no" rewrites and "la o mi → Me duele ___ cabeza" are not
//     exercises: they are her section 5 table and section 6 ATTENTION box as
//     cards.
//   - Answer cards also take the word order her section 3 shows (no he ido
//     nunca), with or without No, and with or without yo.
//   - Her ex. 7 last item is in the preterite on the sheet, so its line asks
//     for the preterite and "le dolía" is not accepted.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 8 cards that answered a question with yes or no in a full
// sentence (sections "todaviano" and "nunca").
//
// Taken out on 2026-10-25, at the owner's word ("the flashcards module for the
// spanish section should be all words and phrases, no grammar", "i have the
// exercises for those"): every grammar card, 49 here, with their sections,
// order and instruction lines. That is the drills, gaps and rewrites this
// header describes. The grammar is practised on the Exercises page.
//
// Added: 5 phrases (section "verbforms"), one for each irregular verb form the
// drills asked that no word or phrase card had, each with words of this lesson
// that no phrase used yet, checked by an independent reader. On any Spanish
// phrase, an irregular verb form must be typed exactly (irregularForms.js).

export const CARDS = [
  // ── 2. Irse: to leave
  ["¡Me voy!", "I'm leaving! / I'm off!", "E", "irsefrases"],
  ["¡Ya voy!", "I'm coming! (when someone calls you)", "E", "irsefrases"],
  ["¿Ya te vas?", "Are you leaving already? (tú)", "E", "irsefrases"],

  // ── 6. Las palabras de la salud, and the body from the doler table
  ["estar enfermo", "to be sick / to be ill", "V", "salud"],
  ["estar resfriado", "to have a cold (with estar)", "V", "salud"],
  ["tener gripa", "to have the flu / to have a cold (with tener)", "V", "salud"],
  ["tener fiebre", "to have a fever / to have a temperature", "V", "salud"],
  ["hacer ejercicio", "to exercise / to work out", "V", "salud"],
  ["ponerse a dieta", "to go on a diet", "V", "salud"],
  ["subir de peso", "to gain weight / to put on weight", "V", "salud"],
  ["bajar de peso", "to lose weight", "V", "salud"],
  ["hacer una cita", "to make an appointment", "V", "salud"],
  ["las medicinas", "medicine / medicines (plural)", "V", "salud"],
  ["curarse", "to get better / to recover", "V", "salud"],
  ["la cabeza", "the head", "V", "salud"],
  ["la garganta", "the throat", "V", "salud"],
  ["la espalda", "the back (of the body)", "V", "salud"],

  // ── 3–4. Preterite or perfect? Told by ya, alguna vez, todavía no, hoy, el año pasado
  ["¿Alguna vez has estado en Italia?", "Have you ever been to Italy? (tú, with estar)", "E", "yafrases"],
  ["¿Ya fuiste a la farmacia?", "Have you been to the pharmacy yet? / Did you go to the pharmacy yet? (tú, with ya)", "E", "yafrases"],
  ["¿Todavía estás resfriado?", "Do you still have a cold? (tú)", "E", "yafrases"],
  ["alguna vez", "ever (in a question)", "V", "yafrases"],

  // ── Ex. 6, as pairs: the affirmative word or the negative one
  ["Llamé al consultorio, pero nadie contestó", "I called the doctor's office, but nobody answered / I called the doctor's office but no one answered", "E", "negfrases"],

  // ── 6 and ex. 7: doler, with its pronoun
  ["¿Qué te duele?", "What hurts? / Where does it hurt? (tú)", "E", "dolerfrases"],

  // ── Irregular verb forms, each in a short phrase with this lesson's words
  //    (2026-10-25). The verb must be typed exactly: irregularForms.js.
  ["James se va porque está enfermo", "James is leaving because he's sick / James is leaving because he is sick / James is leaving because he's ill / James is leaving because he is ill (with irse)", "E", "verbforms"],
  ["Nos vamos porque me duele la cabeza", "We're leaving because my head hurts / We are leaving because my head hurts / We're leaving because I have a headache / We are leaving because I have a headache / We're leaving because I've got a headache (with irse)", "E", "verbforms"],
  ["¿Por qué se van tan temprano?", "Why are you leaving so early? (ustedes, with irse) / Why are you guys leaving so early? / Why are you all leaving so early? / Why are they leaving so early?", "E", "verbforms"],
  ["Me fui temprano a hacer ejercicio", "I left early to work out / I left early to exercise / I left early to go work out / I left early to go exercise (with irse)", "E", "verbforms"],
  ["Jessica se fue sin sus medicinas", "Jessica left without her medicine / Jessica left without her medicines / Jessica left without her medication (with irse)", "E", "verbforms"],
];

// The notes: her grammar sections 1 to 6, translated into English and
// restructured to the notes rules in .claude/skills/building-lessons/SKILL.md.
// Six tabs:
//   Responder   section 1: responder in the present and preterite, and
//               contestar
//   Irse        section 2: ir and irse, and her ATTENTION box (me voy, ya voy)
//   Perfect     section 3: haber + participle, the irregular participles, her
//               three rules, and when to use it
//   Ya          section 4: ya and todavía; answering no with todavía no
//   Nunca       section 5: the double negative, algo / nada, alguien / nadie,
//               answering no with nunca
//   Doler       section 6
// No word list: "Las palabras de la salud" are word cards. Her section 7 ("En
// el diálogo") is left out: debería, te ves and subí de peso are phrase or
// word cards or not used.
// There is one "The trap:", on "no quiero algo": of her three ATTENTION boxes
// it is the one the double negative makes hardest for an English speaker.
// The other two (voy for "I'm leaving", mi cabeza) are plain notes.
//
// Sentences that are not hers, kept because cards need them:
//   - Ya, "Answering no": both notes. Her ex. 3 asks for it; her lesson never
//     says how the answer changes (tú → yo, tus → mis).
//   - Nunca, "Answering no with nunca": both notes, for ex. 4 in the same way.
//   - Nunca: "In a question, use algo … and alguien …; after no, use nada and
//     nadie." Her table pairs the words; the sentence says when each is used.
//   - Doler: "With a name or a noun, use le for one person and les for two or
//     more", for "A Mateo le duele la espalda" (her ex. 7); and "In the past,
//     use the preterite", for her last ex. 7 item. Her own example ("Ayer me
//     dolió la cabeza todo el día") is used.
//   - Perfect: "hoy comí tacos" is in the preterite note because her table
//     has it, and a card asks for it.
export const NOTES = [
  {
    tab: "Responder",
    h: "1 · Responder and contestar",
    blocks: [
      { t: "lead", v: "Responder, \"to answer\", is a regular -er verb like comer: *respondo*, \"I answer\"; *respondió*, \"he answered\"." },
      { t: "table", bold: 1,
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "respondo", "respondí"],
          ["tú", "respondes", "respondiste"],
          ["él, ella, usted", "responde", "respondió"],
          ["nosotros", "respondemos", "respondimos"],
          ["ustedes, ellos, ellas", "responden", "respondieron"],
        ]},
      { t: "note", v: "Contestar means the same, and is a regular -ar verb: *contesto*, \"I answer\"; *contesté*, \"I answered\". In Mexico it is the more common of the two." },
      { t: "note", v: "Put what you answer straight after contestar: *contesté el celular*, \"I answered my cell phone\". Without it, it means \"to answer\" on its own: *nadie contestó*, \"nobody answered\"." },
    ],
  },
  {
    tab: "Irse",
    h: "2 · Ir and irse: to go and to leave",
    blocks: [
      { t: "lead", v: "Ir, \"to go\", goes with a place; to say \"to leave\", put me, te, se, nos or se in front of it: *me voy*, \"I'm leaving\"." },
      { t: "table", bold: 1,
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "me voy", "me fui"],
          ["tú", "te vas", "te fuiste"],
          ["él, ella, usted", "se va", "se fue"],
          ["nosotros", "nos vamos", "nos fuimos"],
          ["ustedes, ellos, ellas", "se van", "se fueron"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Voy a la farmacia", "I'm going to the pharmacy"],
        ["¡Me voy!", "I'm leaving! · I'm off!"],
        ["Bueno, ya me voy", "OK, I'm leaving now"],
        ["¿Ya te vas?", "Are you leaving already?"],
        ["Mateo se fue a las diez", "Mateo left at ten"],
      ]},
      { t: "sub", v: "Me voy or ya voy?" },
      { t: "note", v: "\"I'm leaving\" is *me voy*, never just voy. *¡Ya voy!* means \"I'm coming!\", when someone calls you." },
    ],
  },
  {
    tab: "Perfect",
    h: "3 · He comido: I have eaten",
    blocks: [
      { t: "lead", v: "To say what you have ever or never done, or haven't done yet, use haber in the present and the participle: *he comido*, \"I have eaten\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["yo he comido", "I have eaten"],
          ["tú has comido", "you have eaten"],
          ["él, ella, usted ha comido", "he, she has eaten · you have eaten"],
          ["nosotros hemos comido", "we have eaten"],
          ["ustedes, ellos, ellas han comido", "you, they have eaten"],
        ]},
      { t: "sub", v: "The participle" },
      { t: "note", v: "Take off -ar and add -ado, or take off -er or -ir and add -ido: *hablar → hablado*, \"spoken\"; *tener → tenido*, \"had\"; *vivir → vivido*, \"lived\"; *ir → ido*, \"gone\"." },
      { t: "note", v: "These common verbs have a participle of their own, to learn by heart." },
      { t: "pairs", head: ["Verb", "Participle"], v: [
        ["hacer", "hecho"],
        ["decir", "dicho"],
        ["ver", "visto"],
        ["escribir", "escrito"],
        ["abrir", "abierto"],
        ["poner", "puesto"],
        ["volver", "vuelto"],
        ["romper", "roto"],
        ["morir", "muerto"],
      ]},
      { t: "sub", v: "Word order" },
      { t: "note", v: "Haber and the participle stay together: *nunca he ido* or *no he ido nunca*, \"I've never been\", never he nunca ido." },
      { t: "note", v: "Me, te, le, nos and les go before haber: *todavía no le he contestado*, \"I haven't answered him yet\"; *nunca me he puesto a dieta*, \"I've never gone on a diet\"." },
      { t: "note", v: "The participle never changes: *ella ha ido*, \"she has gone\"; *nosotras hemos comido*, \"we have eaten\"." },
      { t: "sub", v: "Perfect or preterite?" },
      { t: "note", v: "For an experience, with alguna vez, \"ever\", or nunca, \"never\", use haber: *¿alguna vez has tenido gripa?*, \"have you ever had the flu?\"; *nunca he estado en Cuba*, \"I've never been to Cuba\"." },
      { t: "note", v: "For something that hasn't happened yet, use todavía no and haber: *todavía no he encontrado el tiempo*, \"I haven't found the time yet\"." },
      { t: "note", v: "For a time you can name, like ayer, hoy or el año pasado, use the preterite: *el año pasado tuve bronquitis*, \"last year I had bronchitis\"; *hoy comí tacos*, \"I had tacos today\"." },
      { t: "note", v: "\"Have you been to…?\" is *¿has ido a…?* or *¿has estado en…?*, and both are right: *¿alguna vez has estado en Italia?*, \"have you ever been to Italy?\"." },
    ],
  },
  {
    tab: "Ya",
    h: "4 · Ya and todavía",
    blocks: [
      { t: "lead", v: "In Latin America, \"already\" and \"yet\" are ya with the preterite, and ya goes before the verb: *¿ya fuiste al médico?*, \"have you been to the doctor yet?\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Ya comieron?", "Have you eaten yet?"],
        ["Ya terminé", "I've already finished"],
        ["No, todavía no", "No, not yet"],
        ["¿Ya te vas?", "Are you leaving already?"],
        ["¿Todavía estás resfriado?", "Do you still have a cold?"],
        ["Ya no me duele", "It doesn't hurt anymore"],
      ]},
      { t: "sub", v: "Answering no" },
      { t: "note", v: "To answer no to a question with ya, use todavía no and haber: *¿ya comiste?*, \"have you eaten yet?\", becomes *no, todavía no he comido*, \"no, I haven't eaten yet\"." },
      { t: "note", v: "In the answer, tú becomes yo, and tu and tus (\"your\") become mi and mis (\"my\"): *¿ya tomaste tus medicinas? No, todavía no he tomado mis medicinas*, \"have you taken your medicine yet? No, I haven't taken my medicine yet\"." },
    ],
  },
  {
    tab: "Nunca",
    h: "5 · Nunca, nada, nadie",
    blocks: [
      { t: "lead", v: "Nunca (\"never\"), nada (\"nothing\") and nadie (\"nobody\") go before the verb on their own, or after it with no before the verb: *nadie contestó* or *no contestó nadie*, \"nobody answered\"." },
      { t: "table", bold: 1,
        cols: ["Before the verb", "After the verb", "English"],
        rows: [
          ["Nunca voy al cine", "No voy nunca al cine", "I never go to the movies"],
          ["Nadie contestó", "No contestó nadie", "Nobody answered"],
          ["Nada me ayuda", "No me ayuda nada", "Nothing helps me"],
        ]},
      { t: "sub", v: "Something or nothing?" },
      { t: "note", v: "In a question, use algo (\"something\", \"anything\") and alguien (\"someone\", \"anyone\"). After no, use nada and nadie." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Quieres algo de la farmacia?", "Do you want anything from the pharmacy?"],
        ["No, gracias, no quiero nada", "No, thanks, I don't want anything"],
        ["¿Hay alguien en el consultorio?", "Is anyone at the doctor's office?"],
        ["No vi a nadie", "I didn't see anyone"],
      ]},
      { t: "note", v: "**The trap:** \"I don't want anything\" is *no quiero nada*, never no quiero algo." },
      { t: "note", v: "Before a person, add a: *no vi a nadie*, \"I didn't see anyone\"; *¿viste a alguien?*, \"did you see anyone?\"." },
      { t: "sub", v: "Answering no with nunca" },
      { t: "note", v: "To answer no to a question with alguna vez, put nunca before haber, or no before haber and nunca after the participle: *no, nunca he estado en Francia* or *no, no he estado nunca en Francia*, \"no, I've never been to France\"." },
      { t: "note", v: "In the answer, te becomes me and tu becomes mi: *¿alguna vez te has puesto a dieta? No, nunca me he puesto a dieta*, \"have you ever been on a diet? No, I've never been on a diet\"." },
    ],
  },
  {
    tab: "Doler",
    h: "6 · Doler: it hurts",
    blocks: [
      { t: "lead", v: "With doler, \"to hurt\", the verb matches what hurts, which comes after it: *me duele la cabeza*, \"my head hurts\"; *me duelen los pies*, \"my feet hurt\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["(a mí) me duele la cabeza", "my head hurts"],
          ["(a ti) te duele la garganta", "your throat hurts"],
          ["(a usted, a él, a ella) le duele el estómago", "your, his, her stomach hurts"],
          ["(a nosotros) nos duele la espalda", "our back hurts"],
          ["(a ustedes, a ellos, a ellas) les duelen los pies", "your, their feet hurt"],
        ]},
      { t: "note", v: "With a name or a noun, use le for one person and les for two or more: *a Mateo le duele la espalda*, \"Mateo's back hurts\"; *a mis hijos les duele el estómago*, \"my kids' stomachs hurt\"." },
      { t: "note", v: "In the past, use the preterite, dolió or dolieron: *ayer me dolió la cabeza todo el día*, \"yesterday my head hurt all day\"." },
      { t: "sub", v: "La cabeza, not mi cabeza" },
      { t: "note", v: "With the body, say el, la, los or las, not mi or tu: *me duele la cabeza*, \"my head hurts\", never me duele mi cabeza." },
    ],
  },
];

export const LESSON = {
  id: "leccion21",
  title: "Lesson 21 · Irse, ya, todavía and nunca",
  subtitle: "Responder and irse, the present perfect (he comido), ya and todavía, nunca and nadie, and doler",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The grammar cards went on
  // 2026-10-25, and what is left keeps the order it had: the sheet's own, each
  // set of words before the phrases that use them, and the verb forms last, as
  // their phrases use this lesson's words. Reviews are unaffected; FSRS
  // schedules those.
  teachingOrder: [
    "irsefrases", "salud", "yafrases", "negfrases", "dolerfrases",
    "verbforms",
  ],
};

export default LESSON;
