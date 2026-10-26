// Lección 12, parte 2 · Reflexive verbs — built from the Spanish course's
// Lección 12 – Parte 2 sheets (adapted from Laura Caufour's LFL METHOD): the
// lesson (Camila tells her godmother how she met her boyfriend; grammar 1–5)
// and the exercise sheet. There is no answer key: every answer here was
// worked out as a Mexican Spanish teacher would give it.
//
// Students have had Lecciones 1–11 and Part 1 (reflexive verbs in the
// present, dormir, where the pronoun goes). No card asks for more.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish side.
//
// Card shapes:
//   two-way word (V) and phrase (E) cards for the ex. 8 list and the dialogue
//   "Me acuerdo de nuestra primera cita" / "I remember our first date (with acordarse)"
//                                                  an irregular verb form, in a phrase
//
// WHY HACE OR DESDE HACE IS ON EXACT CARDS. A phrase card is marked with typo
// tolerance, and "Vivo en Los Ángeles hace dos años" is six letters from the
// right sentence in a long one: it would pass as Close enough, and that is
// the very mix-up her "¡No confundir!" box warns about. So her ex. 7 is
// exact gap cards with both words on the card, and the phrase card "Nos
// conocimos hace un año" is there for the meaning.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Acordarse: the six present forms, and me acordé for the preterite (no
//     vowel change). The rest of the preterite is the regular -ar pattern.
//   - Verbs of "each other": verse in the present and conocerse in the
//     preterite, nosotros and ellos/ellas each (her table has only those
//     persons), and pelearse con in the singular, her one exception.
//   - Reflexive verbs in the preterite: her model acostarse (yo, tú,
//     él/ella, ellos/ellas: no o → ue), the -ir change with él/ella and
//     ellos/ellas (se durmió, se vistieron), and her sentirse / sentarse
//     box (me sentí, me senté).
//   - Ex. 4, 5 and 6 (answer yes, 52 items): one card per switch: ustedes →
//     nos, te → me in the preterite, él kept with se, mi → tu with
//     acordarse de, and the sheet's sentarse.
//   - Ex. 7 (hace or desde hace, 10 items): three with hace (one at the
//     start of the sentence) and two with desde hace.
//
// Not made into cards: ex. 1 and 11 (free writing); ex. 2, 3 and 12
// (Spanish to English, done aloud); ex. 13 (dictation), 14 and 15 (oral
// answers). Ex. 9 and 10 (translations into Spanish) are sampled in the
// phrase cards; most of their sentences repeat the drills and answers.
//
// Vocabulary is her ex. 8 list, less what other cards teach or earlier
// lessons own: "I remember", "Do you remember?", "I don't remember" and
// "to remember" are the acordarse drills and the acordarse de card; "six
// months ago" is the hace cards; "happy" (feliz) is in Lección 7's
// adjectives; "far" is in Lección 3's demonstratives (lejos), and "not far
// from", "at my house", "all night", "for hours", "the first night" and
// "honest" put together words students know. "An app" (una aplicación) is
// left out as a cognate. "To meet (for the first time)" is the card
// "conocerse" (to meet each other); conocer itself belongs to Lección 13.
//
// Where this departs from the sheet:
//   - "Recuerdo a tu hermana → con acordarse" is built from her lesson's
//     "Me acuerdo de tu hermana"; with a person, recordar takes a.
//   - "pelearse → Ayer yo ___ con mi novio" is her lesson's example "Me
//     peleé con mi novio" with Ayer yo added, so the card asks for the
//     preterite and the person.
//   - "acordarse → Me acordé ___ hoy tengo clase" and "¿Te acuerdas ___
//     nuestra primera cita?" are her lesson's examples, not exercises.
//   - "¿Te acuerdas de mi madrina? → sí" is her ex. 6 no. 11; the others are
//     her ex. 4 no. 1 ("¿Ustedes se conocieron en el hospital?"), ex. 5
//     no. 6, 13 and 14.
//   - Her answers keep their whole sentence; the cards also accept the
//     answer without Sí, and with and without the subject (yo, nosotros,
//     nosotras, él) where both are natural.
//   - "de hecho" carries "(not en realidad)" on its English side: Lección 2
//     teaches en realidad for "actually", and without the hint that right
//     answer would be marked wrong here.
//
// Checked 2026-10-22 by an independent reader: 1 fix.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 5 cards that answered a question with yes or no in a full
// sentence (section "answers").
//
// Taken out on 2026-10-25, at the owner's word ("the flashcards module for the
// spanish section should be all words and phrases, no grammar", "i have the
// exercises for those"): every grammar card, 29 here, with their sections,
// order and instruction lines. That is the drills, gaps and rewrites this
// header describes. The grammar is practised on the Exercises page.
//
// Added: 6 phrases (section "verbforms"), one for each irregular verb form the
// drills asked that no word or phrase card had, each with words of this lesson
// that no phrase used yet, checked by an independent reader. On any Spanish
// phrase, an irregular verb form must be typed exactly (irregularForms.js).

export const CARDS = [
  // ── Her verbs (ex. 8), before they are conjugated
  ["acordarse de", "to remember (with de)", "V", "verbs"],
  ["conocerse", "to meet (each other) / to get to know each other", "V", "verbs"],
  ["besarse", "to kiss (each other)", "V", "verbs"],
  ["pelearse", "to fight / to argue / to have a fight", "V", "verbs"],
  ["sentarse", "to sit down", "V", "verbs"],
  ["contarse", "to tell each other", "V", "verbs"],
  ["escribirse", "to write to each other / to text each other", "V", "verbs"],
  ["volver a verse", "to see each other again", "V", "verbs"],
  ["llevar a alguien", "to take someone (somewhere)", "V", "verbs"],
  ["pasar por alguien", "to pick someone up", "V", "verbs"],

  // ── The rest of her ex. 8 list
  ["un novio", "a boyfriend", "V", "words"],
  ["una madrina", "a godmother", "V", "words"],
  ["una primera cita", "a first date", "V", "words"],
  ["al día siguiente", "the next day / the following day", "V", "words"],
  ["amor a primera vista", "love at first sight", "V", "words"],
  ["casi nunca", "hardly ever / almost never", "V", "words"],
  ["¡Qué padre!", "How cool! / That's so cool!", "V", "words"],
  ["de hecho", "actually / in fact (not en realidad)", "V", "words"],

  // ── Phrases from the dialogue and her ex. 9 and 10
  ["¿Cómo se conocieron?", "How did you guys meet? / How did you meet? / How did they meet?", "E", "phrases"],
  ["Nos conocimos hace un año", "We met a year ago / We met one year ago", "E", "phrases"],
  ["Nos vemos mucho", "We see each other a lot", "E", "phrases"],
  ["Se besaron la primera noche", "They kissed the first night / They kissed on the first night / You guys kissed the first night", "E", "phrases"],

  // ── Irregular verb forms, each in a short phrase with this lesson's words
  //    (2026-10-25). The verb must be typed exactly: irregularForms.js.
  ["Me acuerdo de nuestra primera cita", "I remember our first date (with acordarse)", "E", "verbforms"],
  ["¿Te acuerdas de mi madrina?", "Do you remember my godmother? (tú, with acordarse)", "E", "verbforms"],
  ["Mi novio casi nunca se acuerda", "My boyfriend hardly ever remembers / My boyfriend almost never remembers / My boyfriend rarely remembers (with acordarse)", "E", "verbforms"],
  ["¿Se acuerdan de su primera cita?", "Do you remember your first date? / Do they remember their first date? / Do you guys remember your first date? (ustedes, with acordarse)", "E", "verbforms"],
  ["Mi papá se sentó y se durmió", "My dad sat down and fell asleep / My father sat down and fell asleep", "E", "verbforms"],
  ["Se vistieron y pasaron por Lucía", "They got dressed and picked up Lucía / They got dressed and picked Lucía up / You guys got dressed and picked up Lucía / You guys got dressed and picked Lucía up", "E", "verbforms"],
];

// The notes: her grammar sections 1 to 4, in English, restructured to the
// notes rules in .claude/skills/building-lessons/SKILL.md. Four tabs:
//   Acordarse    her section 1: the forms, de and de que, recordar
//   Each other   her section 2: verbs of "each other", pelearse con
//   Past         her section 3: reflexive verbs in the preterite, sentirse
//                or sentarse
//   Ago          her section 4: hace, and hace or desde hace
// Left out: her section 5 (dialogue phrases: word and phrase cards teach
// them), her "Tres tipos" table (Part 1 has it), her "Avanzado" note on verse
// (me veo en el espejo; no card needs it), the note that recordar also means
// "to remind" (Lección 11), hace for the weather, and her pointers to other
// lessons.
//
// Sentences that are not hers, kept because cards need them:
//   - Acordarse: "With a person, recordar takes a" (the card "Recuerdo a tu
//     hermana"); the "Answering yes" note (te → me, mi → tu).
//   - Each other: the "Answering yes" note (ustedes → nos).
//   - Past: the "Answering yes" note (te → me; él keeps se).
//   - Ago: "Hace comes before the amount of time, where English puts ago
//     after it" is her ¡Atención!, said as a sentence.
export const NOTES = [
  {
    tab: "Acordarse",
    h: "1 · Acordarse, to remember",
    blocks: [
      { t: "lead", v: "Acordarse, \"to remember\", is a reflexive verb that changes its o to ue in the present, except with nosotros: *me acuerdo*, \"I remember\"." },
      { t: "table", bold: 1,
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "me acuerdo", "me acordé"],
          ["tú", "te acuerdas", "te acordaste"],
          ["usted, él, ella", "se acuerda", "se acordó"],
          ["nosotros", "nos acordamos", "nos acordamos"],
          ["ustedes, ellos, ellas", "se acuerdan", "se acordaron"],
        ]},
      { t: "note", v: "In the preterite, the o stays: *me acordé*, \"I remembered\"." },
      { t: "sub", v: "acordarse de" },
      { t: "note", v: "Put de before the thing or the person you remember: *¿te acuerdas de nuestra primera cita?*, \"do you remember our first date?\"." },
      { t: "note", v: "Before a whole sentence, put de que: *me acordé de que hoy tengo clase*, \"I remembered that I have class today\"." },
      { t: "sub", v: "recordar" },
      { t: "note", v: "Recordar also means \"to remember\", but it takes no me, te, se and no de: *recuerdo tu nombre* says the same as *me acuerdo de tu nombre*, \"I remember your name\"." },
      { t: "note", v: "With a person, recordar takes a: *recuerdo a tu hermana*, \"I remember your sister\"." },
      { t: "note", v: "**The trap:** never mix the two. Say *me acuerdo de tu nombre* or *recuerdo tu nombre*, not me recuerdo de tu nombre." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Te becomes me, and mi (\"my\") becomes tu (\"your\"): *¿Te acuerdas de mi madrina?* → *Sí, me acuerdo de tu madrina*, \"Do you remember my godmother? Yes, I remember your godmother\"." },
    ],
  },
  {
    tab: "Each other",
    h: "2 · Doing something to each other",
    blocks: [
      { t: "lead", v: "With some verbs, the pronoun means two or more people do the action to each other: *nos vemos mucho*, \"we see each other a lot\"." },
      { t: "note", v: "They work like reflexive verbs, but only in the plural: nos for nosotros, and se for ustedes, ellos and ellas." },
      { t: "table", bold: 0,
        cols: ["Person", "verse · present", "conocerse · preterite"],
        rows: [
          ["nosotros", "nos vemos", "nos conocimos"],
          ["ustedes, ellos, ellas", "se ven", "se conocieron"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Se ven todos los lunes", "They see each other every Monday"],
        ["Nos escribimos todos los días", "We text each other every day"],
        ["Casi nunca nos peleamos", "We hardly ever argue"],
        ["Nos conocimos en una aplicación", "We met on an app"],
        ["¡Nos vemos!", "See you!"],
      ]},
      { t: "sub", v: "pelearse con" },
      { t: "note", v: "With con and a person, pelearse works for one person too: *me peleé con mi novio*, \"I had a fight with my boyfriend\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question with ustedes using nos: *¿Ustedes se conocieron en el hospital?* → *Sí, nos conocimos en el hospital*, \"Did you guys meet at the hospital? Yes, we met at the hospital\"." },
    ],
  },
  {
    tab: "Past",
    h: "3 · Reflexive verbs in the preterite",
    blocks: [
      { t: "lead", v: "In the preterite, the pronoun goes before the verb, as in the present, and the verb takes its usual preterite ending: *me levanté*, \"I got up\"." },
      { t: "table", bold: 1,
        cols: ["Person", "acostarse · to go to bed"],
        rows: [
          ["yo", "me acosté"],
          ["tú", "te acostaste"],
          ["usted, él, ella", "se acostó"],
          ["nosotros", "nos acostamos"],
          ["ustedes, ellos, ellas", "se acostaron"],
        ]},
      { t: "note", v: "Verbs ending in -ar or -er keep their vowel in the preterite: *me acosté*, \"I went to bed\", not me acuesté; *me desperté*, \"I woke up\"." },
      { t: "sub", v: "Verbs ending in -ir" },
      { t: "note", v: "If an -ir verb changes its vowel in the present, it changes it in the preterite too, but only with usted, él, ella and with ustedes, ellos, ellas: o becomes u, and e becomes i." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["se durmió", "he fell asleep"],
        ["se vistieron", "they got dressed"],
        ["se sintió", "she felt"],
        ["me vestí", "I got dressed"],
      ]},
      { t: "sub", v: "sentirse or sentarse?" },
      { t: "note", v: "*Me siento* means \"I feel\" (sentirse) and also \"I sit down\" (sentarse). In the preterite they are different: *me sentí*, \"I felt\"; *me senté*, \"I sat down\"." },
      { t: "sub", v: "Answering yes" },
      { t: "note", v: "Answer a question with te using me: *¿Te despertaste temprano?* → *Sí, me desperté temprano*, \"Did you wake up early? Yes, I woke up early\"." },
      { t: "note", v: "When the question is about someone else, se stays: *¿Él se peleó con su novia?* → *Sí, se peleó con su novia*, \"Did he have a fight with his girlfriend? Yes, he had a fight with his girlfriend\"." },
    ],
  },
  {
    tab: "Ago",
    h: "4 · Hace, ago",
    blocks: [
      { t: "lead", v: "To say \"ago\", put hace before the amount of time, with a verb in the preterite: *nos conocimos hace seis meses*, \"we met six months ago\"." },
      { t: "note", v: "Hace comes before the amount of time, where English puts \"ago\" after it: *hace una semana*, \"a week ago\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Fui a México hace dos años", "I went to Mexico two years ago"],
        ["Hace una semana, vi a Andrés en la tele", "A week ago, I saw Andrés on TV"],
        ["¿Hace cuánto tiempo se conocieron?", "How long ago did you meet?"],
      ]},
      { t: "sub", v: "hace or desde hace?" },
      { t: "note", v: "Hace with the preterite is for something finished. Desde hace with the present is \"for\", for something still going on: *vivo en Los Ángeles desde hace dos años*, \"I've been living in Los Angeles for two years\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["Llegué a Los Ángeles hace dos años", "I arrived in Los Angeles two years ago"],
          ["Vivo en Los Ángeles desde hace dos años", "I've been living in Los Angeles for two years"],
          ["Nos conocimos hace seis meses", "We met six months ago"],
          ["Estamos juntos desde hace seis meses", "We've been together for six months"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "leccion12-2",
  title: "Lesson 12 · Reflexive verbs, part 2",
  subtitle: "Acordarse, doing things to each other, reflexive verbs in the preterite, and hace for ago",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in. The grammar cards went on
  // 2026-10-25, and what is left keeps the order it had: the sheet's own, each
  // set of words before the phrases that use them, and the verb forms last, as
  // their phrases use this lesson's words. Reviews are unaffected; FSRS
  // schedules those.
  teachingOrder: [
    "verbs", "words", "phrases", "verbforms",
  ],
};

export default LESSON;
