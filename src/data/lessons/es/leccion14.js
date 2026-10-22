// Lección 14 · The imperfect — built from the Spanish course's Lección 14
// sheets (adapted from Laura Caufour's LFL METHOD): the lesson (don Rafael
// tells his grandson Tomás about his childhood; grammar 1–4) and the
// exercise sheet. There is no answer key: every answer here was worked out
// as a Mexican Spanish teacher would give it.
//
// Students have had Lecciones 1–13 (among them the preterite, estar +
// gerundio, reflexive verbs and pelearse). No card asks for more.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish side.
//
// Card shapes:
//   "hablar (imperfecto) → yo" / "hablaba"          drill; the line above comes from the shape
//   "tener → Los niños ___ miedo"                   the verb given, in the imperfect (ex. 3)
//   "hay → ___ cinco niños en la familia"           había, the same for one or many
//   "llegar → Leía un libro cuando ___ mi hermano"  imperfect or preterite
//   "¿Vivías en el campo cuando eras niño? → sí"    answer yes or no in a full sentence (ex. 4, 5)
//   two-way word (V) and phrase (E) cards for the ex. 7 list, her ex. 8 and 9
//
// WHY IMPERFECT OR PRETERITE IS ON EXACT CARDS. A phrase card is marked with
// typo tolerance, and in a sentence "jugué" and "jugaba" are a letter or two
// apart: "Leía un libro cuando llegaba mi hermano" would pass as Close
// enough. So the choice her lesson makes in "Leía un libro cuando llegó mi
// hermano" and "Ayer jugué afuera / Cuando era niño, jugaba afuera" is on
// exact gap cards, and so is había, which her lesson warns is never
// habían.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - The pattern: her model verbs hablar (-aba) and vivir (-ía, the same
//     for -er and -ir) as six-person drills; comer, her third model, would
//     repeat vivir.
//   - Ser, ir and ver, her only three irregular verbs, as six-person drills.
//   - Ex. 3 (15 gaps): the verbs that are irregular elsewhere but regular
//     here (tener, hacer, saber, jugar, leer), a reflexive (divertirse,
//     levantarse), and poder from her ex. 9. Her nos. 1, 2, 3, 5, 12 and 15
//     repeat the drills (ser, vivir, ir, ver); no. 13 (viajaba) repeats
//     hablar.
//   - Ex. 4 and 5 (answer yes or no, 39 items): tú → yo with eras → era,
//     ustedes → nosotros with íbamos, te → me and tus → mis, no with
//     había, and tu mamá te → mi mamá me with no.
//   - Ex. 8 (solo, 11 sentences): two phrase cards; her rule is one point.
//   - Ex. 9 (translations, 20 sentences): the habits that English says with
//     "used to" or "would", "I didn't know!", and "I wanted to be a teacher
//     when I was a child".
//
// Not made into cards: ex. 1 and 10 (Spanish to English, aloud); ex. 2 and
// 6 (questions on the dialogue); ex. 11 (dictation), 12 and 13 (oral
// answers).
//
// Vocabulary is her ex. 7 list, less what earlier lessons own or other cards
// teach: "sometimes" (a veces) is Lección 7's, "Really?" in the sense of ¿De
// verdad? and "in the countryside" and "a village" (el campo, los pueblos)
// are Lección 10's, "to fight, to argue" (pelearse) is Lección 12's, and "a
// grandson" is Lección 7's grandchildren (los nietos). "There was / there
// were" is the había cards, "when I was a child" is in the phrase card
// "Quería ser maestro cuando era niño", and "some friends" (unos amigos),
// "different" (a cognate) and "siblings" (the answer card ¿Te llevabas bien
// con tus hermanos? asks for mis hermanos; a word card "los hermanos" could
// clash with Lección 4's possessives) are left out. "What did they do for a
// living?" is the phrase card "¿A qué se dedicaban tus papás?", from the
// dialogue.
//
// Where this departs from the sheet:
//   - Ex. 3 no. 6 gives the cue as "(hay)", not an infinitive; the cards
//     keep "hay →".
//   - "hay → ___ cinco niños en la familia", "llegar → Leía un libro cuando
//     ___ mi hermano", "leer → ___ un libro cuando llegó mi hermano" and the
//     two jugar cards are her lesson's examples, not exercises. "jugar →
//     Ayer yo ___ afuera" adds yo to her "Ayer jugué afuera".
//   - "poder → Yo no ___ jugar porque tenía mucho trabajo" is her ex. 9
//     "I couldn't play because I had a lot of work", in Spanish.
//   - "¿En serio?" carries "(not de verdad)" on its English side: Lección 10
//     teaches ¿De verdad? for "Really?", and without the hint that right
//     answer would be marked wrong here. "Un maestro / una maestra" carries
//     "(elementary school)", because Lección 1's profesora is "teacher" too.
//   - Her answers keep their whole sentence; the cards also accept the
//     answer without Sí or No, with and without the subject where both are
//     natural, niña beside niño, and the shorter answer without its last
//     phrase.
//
// Checked 2026-10-22 by an independent reader: 2 fixes.

export const CARDS = [
  // ── 1. The pattern: -aba for -ar verbs, -ía for -er and -ir verbs
  ["hablar (imperfecto) → yo", "hablaba", "G", "forms"],
  ["hablar (imperfecto) → tú", "hablabas", "G", "forms"],
  ["hablar (imperfecto) → él/ella", "hablaba", "G", "forms"],
  ["hablar (imperfecto) → nosotros", "hablábamos", "G", "forms"],
  ["hablar (imperfecto) → ustedes", "hablaban", "G", "forms"],
  ["hablar (imperfecto) → ellos/ellas", "hablaban", "G", "forms"],
  ["vivir (imperfecto) → yo", "vivía", "G", "forms"],
  ["vivir (imperfecto) → tú", "vivías", "G", "forms"],
  ["vivir (imperfecto) → él/ella", "vivía", "G", "forms"],
  ["vivir (imperfecto) → nosotros", "vivíamos", "G", "forms"],
  ["vivir (imperfecto) → ustedes", "vivían", "G", "forms"],
  ["vivir (imperfecto) → ellos/ellas", "vivían", "G", "forms"],

  // ── 1. The only three irregular verbs
  ["ser (imperfecto) → yo", "era", "G", "irregular"],
  ["ser (imperfecto) → tú", "eras", "G", "irregular"],
  ["ser (imperfecto) → él/ella", "era", "G", "irregular"],
  ["ser (imperfecto) → nosotros", "éramos", "G", "irregular"],
  ["ser (imperfecto) → ustedes", "eran", "G", "irregular"],
  ["ser (imperfecto) → ellos/ellas", "eran", "G", "irregular"],
  ["ir (imperfecto) → yo", "iba", "G", "irregular"],
  ["ir (imperfecto) → tú", "ibas", "G", "irregular"],
  ["ir (imperfecto) → él/ella", "iba", "G", "irregular"],
  ["ir (imperfecto) → nosotros", "íbamos", "G", "irregular"],
  ["ir (imperfecto) → ustedes", "iban", "G", "irregular"],
  ["ir (imperfecto) → ellos/ellas", "iban", "G", "irregular"],
  ["ver (imperfecto) → yo", "veía", "G", "irregular"],
  ["ver (imperfecto) → tú", "veías", "G", "irregular"],
  ["ver (imperfecto) → él/ella", "veía", "G", "irregular"],
  ["ver (imperfecto) → nosotros", "veíamos", "G", "irregular"],
  ["ver (imperfecto) → ustedes", "veían", "G", "irregular"],
  ["ver (imperfecto) → ellos/ellas", "veían", "G", "irregular"],

  // ── Her ex. 7 list, before the cards that use its words
  ["un cuento", "a story (for children) / a tale", "V", "words"],
  ["llevarse bien con", "to get along with", "V", "words"],
  ["un maestro / una maestra", "a teacher (elementary school)", "V", "words"],
  ["en esa época", "at that time / back then", "V", "words"],
  ["todas las noches", "every night", "V", "words"],
  ["jugar", "to play", "V", "words"],
  ["la primaria", "elementary school / primary school", "V", "words"],
  ["afuera", "outside", "V", "words"],
  ["un salón", "a classroom", "V", "words"],
  ["hasta", "until", "V", "words"],
  ["tener miedo", "to be scared / to be afraid", "V", "words"],
  ["a pie", "on foot", "V", "words"],
  ["divertirse", "to have fun", "V", "words"],
  ["escoger", "to choose", "V", "words"],
  ["la infancia", "childhood", "V", "words"],
  ["antes de dormir", "before bed / before going to sleep", "V", "words"],
  ["como a las cuatro y media", "around four thirty / at around four thirty / around half past four", "V", "words"],
  ["¡Qué locura!", "That's crazy! / How crazy!", "V", "words"],
  ["¿En serio?", "Seriously? / Really? (not de verdad)", "V", "words"],

  // ── Ex. 3: the verb given, in the imperfect. Irregular elsewhere,
  //    regular here; a reflexive keeps its pronoun in front
  ["tener → Los niños ___ miedo", "tenían", "G", "gaps"],
  ["hacer → ¿Qué ___ ustedes los fines de semana?", "hacían", "G", "gaps"],
  ["saber → Yo no ___ manejar cuando tenía veinte años", "sabía", "G", "gaps"],
  ["poder → Yo no ___ jugar porque tenía mucho trabajo", "podía", "G", "gaps"],
  ["jugar → Los niños ___ afuera hasta la noche", "jugaban", "G", "gaps"],
  ["leer → Todas las noches, mi mamá nos ___ un cuento", "leía", "G", "gaps"],
  ["divertirse → Mis hermanos y yo ___ mucho", "nos divertíamos", "G", "gaps"],
  ["levantarse → Antes, yo ___ a las seis todos los días", "me levantaba", "G", "gaps"],

  // ── 3. Había: there was, there were
  ["hay → En esa época, no ___ tele en la casa", "había", "G", "habia"],
  ["hay → ___ cinco niños en la familia", "había", "G", "habia"],        // not habían

  // ── Ex. 4 and 5: answer yes or no
  ["¿Vivías en el campo cuando eras niño? → sí", "Sí, vivía en el campo cuando era niño / Sí, vivía en el campo cuando era niña / Vivía en el campo cuando era niño / Vivía en el campo cuando era niña / Sí, yo vivía en el campo cuando era niño / Sí, yo vivía en el campo cuando era niña / Yo vivía en el campo cuando era niño / Yo vivía en el campo cuando era niña / Sí, cuando era niño vivía en el campo / Sí, cuando era niña vivía en el campo / Sí, vivía en el campo / Vivía en el campo", "G", "yes"],
  ["En esa época, ¿ustedes iban a la escuela a pie? → sí", "Sí, en esa época íbamos a la escuela a pie / Sí, íbamos a la escuela a pie / En esa época íbamos a la escuela a pie / Íbamos a la escuela a pie / Sí, en esa época nosotros íbamos a la escuela a pie / Sí, nosotros íbamos a la escuela a pie / Sí, en esa época nosotras íbamos a la escuela a pie / Sí, nosotras íbamos a la escuela a pie / En esa época nosotros íbamos a la escuela a pie / Nosotros íbamos a la escuela a pie / En esa época nosotras íbamos a la escuela a pie / Nosotras íbamos a la escuela a pie", "G", "yes"],
  ["¿Te llevabas bien con tus hermanos? → sí", "Sí, me llevaba bien con mis hermanos / Me llevaba bien con mis hermanos / Sí, yo me llevaba bien con mis hermanos / Yo me llevaba bien con mis hermanos", "G", "yes"],
  ["¿Había una tele en la casa? → no", "No, no había una tele en la casa / No, no había tele en la casa / No había una tele en la casa / No había tele en la casa / No, no había tele / No, no había", "G", "no"],
  ["¿Tu mamá te leía un cuento antes de dormir? → no", "No, mi mamá no me leía un cuento antes de dormir / No, no me leía un cuento antes de dormir / No, ella no me leía un cuento antes de dormir / Mi mamá no me leía un cuento antes de dormir / No me leía un cuento antes de dormir / No, mi mamá no me leía cuentos antes de dormir / No, no me leía cuentos antes de dormir", "G", "no"],

  // ── 2. Imperfect or preterite: the action in progress, or the one that
  //    happens; the habit, or the one time
  ["leer → ___ un libro cuando llegó mi hermano", "leía / estaba leyendo", "G", "progress"],
  ["llegar → Leía un libro cuando ___ mi hermano", "llegó", "G", "progress"],
  ["jugar → Cuando era niño, ___ afuera todos los días", "jugaba", "G", "progress"],
  ["jugar → Ayer yo ___ afuera", "jugué", "G", "progress"],

  // ── 4. Solo (ex. 8)
  ["Solo había un salón", "There was only one classroom", "E", "solo"],
  ["Solo hablo español con mi mamá", "I only speak Spanish with my mom / I only speak Spanish with my mum", "E", "solo"],

  // ── Phrases from the dialogue and her ex. 9: used to, would
  ["Íbamos a la escuela a pie", "We used to walk to school / We walked to school / We would walk to school / We used to go to school on foot", "E", "phrases"],
  ["Cenábamos juntos todas las noches", "We used to have dinner together every night / We had dinner together every night / We would have dinner together every night", "E", "phrases"],
  ["Quería ser maestro cuando era niño", "I wanted to be a teacher when I was a child / I wanted to be a teacher when I was a kid (masc.)", "E", "phrases"],
  ["¡No sabía!", "I didn't know! (without lo)", "E", "phrases"],
  ["¿A qué se dedicaban tus papás?", "What did your parents do for a living? / What did your parents do? (tú)", "E", "phrases"],
];

// The notes: her grammar sections 1 to 4, in English, restructured to the
// notes rules in .claude/skills/building-lessons/SKILL.md. Five tabs:
//   Use        her section 2: habits, descriptions, actions in progress,
//              imperfect or preterite, and "would"
//   Forms      her section 1: the pattern, the verbs that are regular here,
//              reflexive verbs, answering yes and no
//   Irregular  her section 1: ser, ir, ver
//   Había      her section 3
//   Solo       her section 4
// Left out: her accent warnings (accents are not checked), her pointers to
// other lessons (the preterite, estar + gerundio, Lección 16), and her list
// of words that go with the imperfect, which is shortened to two, in a
// sentence.
//
// Sentences that are not hers, kept because cards need them:
//   - Forms, "Answering": all three notes. Her ex. 4 and 5 ask for these
//     switches; her lesson never states them.
//   - Use, "Imperfect or preterite?": the opening sentence is her lesson's
//     closing paragraph of section 2, said as a rule with her examples.
//   - Use: "The trap" is her ¡Atención! box on "would".
export const NOTES = [
  {
    tab: "Use",
    h: "1 · When to use the imperfect",
    blocks: [
      { t: "lead", v: "The imperfect is a past tense for habits, for describing the past, and for actions in progress: *cenábamos juntos*, \"we used to have dinner together\"." },
      { t: "sub", v: "Habits: used to, would" },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Todas las noches cenábamos juntos", "Every night we had dinner together"],
        ["Iba a la escuela a pie", "I used to walk to school"],
      ]},
      { t: "note", v: "Words like *todos los días*, \"every day\", and *cuando era niño*, \"when I was a child\", point to the imperfect." },
      { t: "note", v: "**The trap:** \"would\" for a habit in the past is the imperfect too: \"we would play outside\" is *jugábamos afuera*." },
      { t: "sub", v: "Describing the past" },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Cuando era niño, vivía en el campo", "When I was a child, I lived in the countryside"],
        ["Mi papá era maestro", "My dad was a teacher"],
        ["Era muy diferente en esa época", "It was very different at that time"],
        ["Teníamos miedo", "We were scared"],
      ]},
      { t: "sub", v: "An action in progress" },
      { t: "note", v: "The action in progress goes in the imperfect, and the short action that happens in the middle of it goes in the preterite: *leía un libro cuando llegó mi hermano*, \"I was reading a book when my brother arrived\"." },
      { t: "sub", v: "Imperfect or preterite?" },
      { t: "note", v: "The preterite is for something done once, at a set time: *ayer jugué afuera*, \"yesterday I played outside\". The imperfect is for a habit: *cuando era niño, jugaba afuera todos los días*, \"when I was a child, I played outside every day\"." },
      { t: "table", bold: 1,
        cols: ["English", "Spanish"],
        rows: [
          ["We played outside every day", "Jugábamos afuera todos los días"],
          ["We used to play outside", "Jugábamos afuera"],
          ["We would play outside", "Jugábamos afuera"],
          ["We were playing outside", "Jugábamos afuera"],
        ]},
    ],
  },
  {
    tab: "Forms",
    h: "2 · Forming the imperfect",
    blocks: [
      { t: "lead", v: "Take off the -ar, -er or -ir and add the ending for the person: **-aba** for -ar verbs, and **-ía** for -er and -ir verbs." },
      { t: "table", bold: 0,
        cols: ["Person", "hablar · to speak", "comer · to eat", "vivir · to live"],
        rows: [
          ["yo", "hablaba", "comía", "vivía"],
          ["tú", "hablabas", "comías", "vivías"],
          ["usted, él, ella", "hablaba", "comía", "vivía"],
          ["nosotros", "hablábamos", "comíamos", "vivíamos"],
          ["ustedes, ellos, ellas", "hablaban", "comían", "vivían"],
        ]},
      { t: "note", v: "The yo form and the usted, él, ella form are the same: *vivía* is \"I lived\" and \"he lived\", so yo is often said: *cuando yo era niño*, \"when I was a child\"." },
      { t: "sub", v: "Almost every verb is regular" },
      { t: "note", v: "Verbs that are irregular in the present or the preterite follow the pattern in the imperfect, with no vowel change and no -go." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["tener → tenía", "had"],
          ["hacer → hacía", "did, made"],
          ["poder → podía", "could"],
          ["saber → sabía", "knew"],
          ["jugar → jugaba", "played"],
          ["leer → leía", "read"],
        ]},
      { t: "note", v: "With a reflexive verb, the pronoun goes before the verb, as always: *nos divertíamos*, \"we had fun\"; *me levantaba*, \"I used to get up\"." },
      { t: "sub", v: "Answering" },
      { t: "note", v: "Answer a question with tú using yo, and change te to me and tus to mis: *¿Te llevabas bien con tus hermanos?* → *Sí, me llevaba bien con mis hermanos*, \"Did you get along with your siblings? Yes, I got along with my siblings\"." },
      { t: "note", v: "Answer a question with ustedes using nosotros: *¿Ustedes iban a la escuela a pie?* → *Sí, íbamos a la escuela a pie*, \"Did you guys walk to school? Yes, we walked to school\"." },
      { t: "note", v: "To answer no, say no twice, the second before the verb and before me or te: *¿Tu mamá te leía un cuento?* → *No, mi mamá no me leía un cuento*, \"Did your mom read you a story? No, my mom didn't read me a story\"." },
    ],
  },
  {
    tab: "Irregular",
    h: "3 · Ser, ir and ver",
    blocks: [
      { t: "lead", v: "Only three verbs are irregular in the imperfect: ser, \"to be\", ir, \"to go\", and ver, \"to see\"." },
      { t: "table", bold: 0,
        cols: ["Person", "ser · to be", "ir · to go", "ver · to see"],
        rows: [
          ["yo", "era", "iba", "veía"],
          ["tú", "eras", "ibas", "veías"],
          ["usted, él, ella", "era", "iba", "veía"],
          ["nosotros", "éramos", "íbamos", "veíamos"],
          ["ustedes, ellos, ellas", "eran", "iban", "veían"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Mi papá era maestro", "My dad was a teacher"],
        ["¿Ibas a la escuela en carro?", "Did you go to school by car?"],
        ["Después de la escuela, ¿veías la tele?", "After school, did you watch TV?"],
      ]},
    ],
  },
  {
    tab: "Había",
    h: "4 · There was, there were",
    blocks: [
      { t: "lead", v: "Hay, \"there is\" or \"there are\", becomes había, \"there was\" or \"there were\"." },
      { t: "note", v: "Like hay, había never changes for more than one: *había cinco niños en la familia*, \"there were five children in the family\", not habían." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["No había tele en la casa", "There was no TV at home"],
        ["Solo había un salón", "There was only one classroom"],
      ]},
    ],
  },
  {
    tab: "Solo",
    h: "5 · Solo, only",
    blocks: [
      { t: "lead", v: "\"Only\" is solo, usually before the verb: *solo había un salón*, \"there was only one classroom\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Solo veía la tele los sábados", "I only watched TV on Saturdays"],
        ["Solo hablo español con mi mamá", "I only speak Spanish with my mom"],
      ]},
    ],
  },
];

export const LESSON = {
  id: "leccion14",
  title: "Lesson 14 · The imperfect",
  subtitle: "The imperfect: its forms, ser, ir and ver, when to use it, había, and solo",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). The
  // pattern and the three irregular verbs first: they need no new words.
  // Then her word list, before the first card that needs it (the gaps and
  // answers are about don Rafael's childhood: miedo, afuera, un cuento, a
  // pie). Then the exercises in her order: the verb gaps, había, the
  // answers, imperfect or preterite, solo, and the phrases.
  teachingOrder: [
    "forms", "irregular",
    "words",
    "gaps", "habia",
    "yes", "no",
    "progress",
    "solo", "phrases",
  ],
  // The line shown above a grammar card saying what to type
  // (src/lib/cardInstruction.js). The drills get theirs from their shape.
  instructions: {
    gaps: "Fill the gap with the verb in the imperfect",
    habia: "Fill the gap with hay in the imperfect",
    yes: "Answer yes, in a full sentence",
    no: "Answer no, in a full sentence",
    // Names both tenses: choosing between them is the point.
    progress: "Fill the gap with the verb in the imperfect or the preterite",
  },
};

export default LESSON;
