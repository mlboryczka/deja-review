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
//   two-way word (V) and phrase (E) cards for the ex. 7 list, her ex. 8 and 9
//   "¿Cómo eras en tu infancia?" / "What were you like in your childhood?"
//                                                  an irregular verb form, in a phrase
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
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 5 cards that answered a question with yes or no in a full
// sentence (sections "yes" and "no").
//
// Taken out on 2026-10-25, at the owner's word ("the flashcards module for the
// spanish section should be all words and phrases, no grammar", "i have the
// exercises for those"): every grammar card, 44 here, with their sections,
// order and instruction lines. That is the drills, gaps and rewrites this
// header describes. The grammar is practised on the Exercises page.
//
// Added: 10 phrases (section "verbforms"), one for each irregular verb form
// the drills asked that no word or phrase card had, each with words of this
// lesson that no phrase used yet, checked by an independent reader. On any
// Spanish phrase, an irregular verb form must be typed exactly
// (irregularForms.js).

export const CARDS = [
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

  // ── 4. Solo (ex. 8)
  ["Solo había un salón", "There was only one classroom", "E", "solo"],
  ["Solo hablo español con mi mamá", "I only speak Spanish with my mom / I only speak Spanish with my mum", "E", "solo"],

  // ── Phrases from the dialogue and her ex. 9: used to, would
  ["Íbamos a la escuela a pie", "We used to walk to school / We walked to school / We would walk to school / We used to go to school on foot", "E", "phrases"],
  ["Cenábamos juntos todas las noches", "We used to have dinner together every night / We had dinner together every night / We would have dinner together every night", "E", "phrases"],
  ["Quería ser maestro cuando era niño", "I wanted to be a teacher when I was a child / I wanted to be a teacher when I was a kid (masc.)", "E", "phrases"],
  ["¡No sabía!", "I didn't know! (without lo)", "E", "phrases"],
  ["¿A qué se dedicaban tus papás?", "What did your parents do for a living? / What did your parents do? (tú)", "E", "phrases"],

  // ── Irregular verb forms, each in a short phrase with this lesson's words
  //    (2026-10-25). The verb must be typed exactly: irregularForms.js.
  ["¿Cómo eras en tu infancia?", "What were you like in your childhood? / What were you like as a child? / What were you like as a kid? / What were you like when you were a child? (tú)", "E", "verbforms"],
  ["Éramos buenos amigos en la primaria", "We used to be good friends in elementary school / We were good friends in elementary school / We used to be good friends in primary school / We were good friends in primary school", "E", "verbforms"],
  ["¿Eran muy jóvenes en esa época?", "Were you very young back then? (ustedes) / Were you guys very young back then? / Were you very young at that time? (ustedes) / Were they very young back then? / Were they very young at that time?", "E", "verbforms"],
  ["Iba a jugar afuera todos los días", "I used to go and play outside every day / I used to go play outside every day / I would go and play outside every day / I would go play outside every day / I went to play outside every day / He used to go and play outside every day / She used to go and play outside every day", "E", "verbforms"],
  ["¿Tenías miedo cuando ibas al doctor?", "Did you use to be scared when you went to the doctor? / Were you scared when you went to the doctor? / Did you use to be afraid when you went to the doctor? / Were you afraid when you went to the doctor? (tú)", "E", "verbforms"],
  ["¿Adónde iban a divertirse?", "Where did you use to go to have fun? (ustedes) / Where did you guys use to go to have fun? / Where would you go to have fun? (ustedes) / Where did you go to have fun? (ustedes) / Where did they use to go to have fun? / Where would they go to have fun? / Where did they go to have fun?", "E", "verbforms"],
  ["Veía la tele antes de dormir", "I used to watch TV before bed / I used to watch TV before going to sleep / I would watch TV before bed / I watched TV before bed / I used to watch television before bed / He used to watch TV before bed / She used to watch TV before bed", "E", "verbforms"],
  ["¿Veías mucho a tus abuelos?", "Did you use to see your grandparents a lot? / Did you see your grandparents a lot? / Did you use to see your grandparents often? / Did you see your grandparents often? (tú)", "E", "verbforms"],
  ["Veíamos la tele como a las cuatro y media", "We used to watch TV at around four thirty / We used to watch TV around four thirty / We would watch TV at around four thirty / We watched TV at around four thirty / We used to watch TV at around half past four / We used to watch television at around four thirty", "E", "verbforms"],
  ["¿Veían a sus amigos después de la escuela?", "Did you use to see your friends after school? (ustedes) / Did you guys use to see your friends after school? / Did you see your friends after school? (ustedes) / Would you see your friends after school? (ustedes) / Did they use to see their friends after school? / Did they see their friends after school?", "E", "verbforms"],
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
  // The order a student meets NEW cards in. The grammar cards went on
  // 2026-10-25, and what is left keeps the order it had: the sheet's own, each
  // set of words before the phrases that use them, and the verb forms last, as
  // their phrases use this lesson's words. Reviews are unaffected; FSRS
  // schedules those.
  teachingOrder: [
    "words", "solo", "phrases", "verbforms",
  ],
};

export default LESSON;
