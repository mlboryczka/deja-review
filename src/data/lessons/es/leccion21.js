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
//   "responder (presente) → yo" / "respondo"        drill; its line comes from its shape
//   "comer (pretérito perfecto) → tú" / "has comido"  haber + participle, same shape
//   "hacer → participio" / "hecho"                    the irregular participles
//   "ir → ¿Tú ya ___ al médico?"                      preterite or haber + participle?
//   "Nadie contestó → con no"                         the same sentence with no before the verb
//   "alguien o nadie → No vi a ___ en el gimnasio"    pick the word (her ex. 6)
//   "doler → ¿A ti ___ los pies?"                     pronoun + duele / duelen (her ex. 7)
//   two-way phrase (E) and word (V) cards for the dialogue and "Las palabras
//   de la salud"
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

export const CARDS = [
  // ── 1. Responder: regular -er, like comer
  ["responder (presente) → yo", "respondo", "G", "responder"],
  ["responder (presente) → tú", "respondes", "G", "responder"],
  ["responder (presente) → él/ella", "responde", "G", "responder"],
  ["responder (presente) → nosotros", "respondemos", "G", "responder"],
  ["responder (presente) → ustedes", "responden", "G", "responder"],
  ["responder (presente) → ellos/ellas", "responden", "G", "responder"],
  ["responder (pretérito) → él/ella", "respondió", "G", "responder"],

  // ── 2. Irse: to leave
  ["irse (presente) → yo", "me voy", "G", "irse"],
  ["irse (presente) → tú", "te vas", "G", "irse"],
  ["irse (presente) → él/ella", "se va", "G", "irse"],
  ["irse (presente) → nosotros", "nos vamos", "G", "irse"],
  ["irse (presente) → ustedes", "se van", "G", "irse"],
  ["irse (presente) → ellos/ellas", "se van", "G", "irse"],
  ["irse (pretérito) → yo", "me fui", "G", "irse"],
  ["irse (pretérito) → él/ella", "se fue", "G", "irse"],
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

  // ── 3. The perfect: haber + participle. One verb per person
  ["tener (pretérito perfecto) → yo", "he tenido", "G", "perfecto"],
  ["comer (pretérito perfecto) → tú", "has comido", "G", "perfecto"],
  ["estar (pretérito perfecto) → él/ella", "ha estado", "G", "perfecto"],
  ["ir (pretérito perfecto) → nosotros", "hemos ido", "G", "perfecto"],
  ["vivir (pretérito perfecto) → ustedes", "han vivido", "G", "perfecto"],
  ["hablar (pretérito perfecto) → ellos/ellas", "han hablado", "G", "perfecto"],

  // ── 3. The irregular participles, all nine in her table
  ["hacer → participio", "hecho", "G", "participios"],
  ["decir → participio", "dicho", "G", "participios"],
  ["ver → participio", "visto", "G", "participios"],
  ["escribir → participio", "escrito", "G", "participios"],
  ["abrir → participio", "abierto", "G", "participios"],
  ["poner → participio", "puesto", "G", "participios"],
  ["volver → participio", "vuelto", "G", "participios"],
  ["romper → participio", "roto", "G", "participios"],
  ["morir → participio", "muerto", "G", "participios"],

  // ── 3–4. Preterite or perfect? Told by ya, alguna vez, todavía no, hoy, el año pasado
  ["ir → ¿Tú ya ___ al médico?", "fuiste / has ido", "G", "cuando"],      // ya + preterite; has ido is right too
  ["tener → ¿Tú alguna vez ___ gripa?", "has tenido / tuviste", "G", "cuando"], // an experience; tuviste is right too
  ["encontrar → James todavía no ___ el tiempo para empezar", "ha encontrado", "G", "cuando"], // not yet
  ["tener → El año pasado yo ___ bronquitis", "tuve", "G", "cuando"],    // a moment you can name
  ["comer → Hoy yo ___ tacos", "comí", "G", "cuando"],                    // hoy too, in Latin America
  ["¿Alguna vez has estado en Italia?", "Have you ever been to Italy? (tú, with estar)", "E", "yafrases"],
  ["¿Ya fuiste a la farmacia?", "Have you been to the pharmacy yet? / Did you go to the pharmacy yet? (tú, with ya)", "E", "yafrases"],
  ["¿Todavía estás resfriado?", "Do you still have a cold? (tú)", "E", "yafrases"],
  ["alguna vez", "ever (in a question)", "V", "yafrases"],

  // ── 5. Nunca, nada, nadie: before the verb alone, or after it with no
  ["Nunca voy al cine → con no", "No voy nunca al cine / No voy al cine nunca", "G", "conno"],
  ["Nadie contestó → con no", "No contestó nadie", "G", "conno"],
  ["Nada me ayuda → con no", "No me ayuda nada", "G", "conno"],

  // ── Ex. 6, as pairs: the affirmative word or the negative one
  ["algo o nada → No, gracias, no quiero ___", "nada", "G", "negacion"],     // her ATTENTION box
  ["algo o nada → ¿Quieres ___ de la farmacia?", "algo", "G", "negacion"],
  ["alguien o nadie → ¿Hay ___ en el consultorio?", "alguien", "G", "negacion"],
  ["alguien o nadie → No vi a ___ en el gimnasio", "nadie", "G", "negacion"], // a before a person
  ["Llamé al consultorio, pero nadie contestó", "I called the doctor's office, but nobody answered / I called the doctor's office but no one answered", "E", "negfrases"],

  // ── 6 and ex. 7: doler, with its pronoun
  ["doler → A mí ___ la cabeza", "me duele", "G", "doler"],
  ["doler → ¿A ti ___ los pies?", "te duelen", "G", "doler"],
  ["doler → A Mateo ___ la espalda", "le duele", "G", "doler"],
  ["doler → A nosotros ___ los ojos", "nos duelen", "G", "doler"],
  ["doler → ¿A ustedes ___ la cabeza?", "les duele", "G", "doler"],
  ["doler → Ayer a Jessica ___ mucho la cabeza", "le dolió", "G", "dolerpast"],
  ["la o mi → Me duele ___ cabeza", "la", "G", "cuerpo"],                  // her ATTENTION box
  ["¿Qué te duele?", "What hurts? / Where does it hurt? (tú)", "E", "dolerfrases"],
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
  // The order a student meets NEW cards in: each practice section straight
  // after the rule it drills, in the order of her grammar sections. The
  // health words come after the first two verbs, before the first card that
  // needs them (the answers ask for la cita, las medicinas and ponerse a
  // dieta; doler needs la cabeza and la espalda). The perfect's forms and
  // participles come before the cards that choose between it and the
  // preterite, and both answer-no sets come once ya, todavía no and alguna
  // vez have been met. Doler comes last, as on her sheet.
  teachingOrder: [
    "responder", "irse", "irsefrases",
    "salud",
    "perfecto", "participios", "cuando", "yafrases",
    "conno", "negacion", "negfrases",
    "doler", "dolerpast", "cuerpo", "dolerfrases",
  ],
  // The line above a grammar card saying what to type (src/lib/cardInstruction.js).
  // Drills ("irse (presente) → yo", "hacer → participio") get theirs from
  // their shape. Phrase and word cards carry no line.
  instructions: {
    cuando: "Fill the gap with the verb given, in the preterite or with haber",
    conno: "Write the same sentence with no before the verb",
    negacion: "Fill the gap with one of the two words given",
    doler: "Fill the gap with doler in the present, and the pronoun before it",
    dolerpast: "Fill the gap with doler in the preterite, and the pronoun before it",
    cuerpo: "Fill the gap with one of the two words given",
  },
};

export default LESSON;
