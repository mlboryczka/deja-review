// Lesson 22 · Would — built from the Spanish course's Lección 22 sheets,
// adapted from Laura Caufour's LFL METHOD: the lesson (Andrés and Valeria
// imagine what they would do with a lot of money; grammar 1–5) and the
// exercise sheet. The Spanish course has no answer key, so every answer here
// was written for this file, the way a Mexican Spanish teacher would mark it.
// Checked 2026-10-22 by an independent reader: 4 fixes.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see imperatif.js for why.
//
// Card shapes:
//   "vender (condicional) → yo" / "vendería"            drill; its line comes from its shape
//   "estar abierto → Las tiendas ___" / "están abiertas" estar + the word, made to match
//   "Debes descansar más → en condicional"               the same sentence in the conditional (her ex. 3)
//   "ir → De niño, yo ___ a la playa todos los veranos"  conditional or imperfect? (her ex. 6)
//   two-way phrase (E) and word (V) cards for the dialogue and her ex. 7–8
//
// WHY VENDER'S SIX PERSONS ARE IN THE CONDITIONAL. Vender is the lesson's
// new verb, and in the present it is regular like comer, which the course
// has drilled since Lesson 4. The conditional is what this lesson teaches,
// and one verb through all six persons shows every ending once. Abrir is
// in Lesson 4's list of regular verbs, so it gets the conditional her ex. 1
// asks for (¿Usted abriría…?), and its participle, abierto, is a Lesson 21
// card.
//
// WHY "WOULD" OR "USED TO" IS ON EXACT CARDS. Phrase cards are marked with
// typo tolerance, and in a long sentence "iríamos" is two letters from
// "íbamos", so "De niños, iríamos a la playa…" would pass on a phrase card:
// the very mistake her ATTENTION box is about. So her ex. 6 sentences are
// exact gap cards. The same goes for the phrase cards "Yo en tu lugar no le
// diría nada" ("decía" passes as close enough) and "¡Sería genial!" ("Era
// genial" passes): they are there for meaning, and the exact cards
// "decir → Yo en tu lugar, no le ___ nada" and "ser (condicional) → él/ella"
// hold the form. "Nos acostaríamos más temprano" is held the same way by
// "acostarse (condicional) → nosotros" ("acostábamos" passes on the phrase
// card), which is also the lesson's one regular -ar verb in the conditional.
// Closing that gap on phrase cards needs a change to the app's fuzzy
// marking, not to this file.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Ex. 2 (conjugate ten verbs in the conditional): ser and ir as drills,
//     and every irregular verb in her table, one person each. Trabajar is
//     left out: vender already shows the regular endings.
//   - Ex. 3 (make it polite): one card per thing it adds: podría with a
//     pronoun, me gustaría for querer, nos gustaría, deberías, sería. Her
//     "¿Puedes venir?", "¿Tiene un momento?", "¿Me trae la cuenta?" and "Mi
//     perro quiere jugar…" repeat those. "Hay más lugar → en condicional" is
//     her section 2 example (habría), not an exercise.
//   - Ex. 6: six of her ten. "¡Me ___ ir a Brasil contigo! (encantar)" is
//     left out because "me encantaba" ("I used to love going to Brazil with
//     you") is good Spanish there too; "contar" and "comer" repeat the
//     imperfect point.
//   - Ex. 1: abrir in the conditional, and estar abierto / cerrado as gaps
//     (la puerta, las tiendas, los bancos: one feminine, one feminine plural,
//     one masculine plural).
//   - Ex. 7 and 8 (translations into Spanish) are sampled as phrase cards.
//
// Not made into cards: ex. 4 (finish the sentence) and ex. 5 (write the
// question) have no one answer; their frames (con, sin, yo que tú) are in the
// phrase cards. Ex. 9 is a dictation and ex. 10 is oral. Words an earlier
// lesson teaches are not word cards: abierto (Lesson 13), la puerta (Lesson
// 18), cuidar a (Lesson 7), Ya veo (Lesson 4), de vacaciones (Lesson 10),
// viajar por todo el mundo (Lesson 7).
//
// Where this departs from the sheets:
//   - "Con mucho dinero, dejaría de trabajar" is a phrase card with yo
//     added: "Con mucho dinero, yo dejaría de trabajar". Without it, both
//     halves of the comma are short, and the app would accept either half
//     alone as the whole answer.
//   - "querer (condicional) → yo" (querría) is a drill because her table has
//     it, though she says it is rarely said; the notes say so too, and the
//     "Quiero otro café" card asks for me gustaría, as her ex. 3 does.
//   - "un genio" is "a genie / a genius": the dialogue's is a genie, and both
//     are right.
//   - "estar abierto → La puerta ___" and the other two are her ex. 1 frames
//     with the answer written in; her sheet leaves them open.

export const CARDS = [
  // ── 2. The conditional: the whole verb + -ía. Vender through all six persons
  ["vender (condicional) → yo", "vendería", "G", "formas"],
  ["vender (condicional) → tú", "venderías", "G", "formas"],
  ["vender (condicional) → él/ella", "vendería", "G", "formas"],
  ["vender (condicional) → nosotros", "venderíamos", "G", "formas"],
  ["vender (condicional) → ustedes", "venderían", "G", "formas"],
  ["vender (condicional) → ellos/ellas", "venderían", "G", "formas"],
  ["ser (condicional) → él/ella", "sería", "G", "formas"],
  ["ir (condicional) → yo", "iría", "G", "formas"],
  ["abrir (condicional) → usted", "abriría", "G", "formas"],              // her ex. 1: ¿Usted …?
  ["acostarse (condicional) → nosotros", "nos acostaríamos", "G", "formas"], // her ex. 5 and 7

  // ── 2. The irregular verbs, all nine in her table
  ["tener (condicional) → nosotros", "tendríamos", "G", "irregulares"],
  ["poder (condicional) → tú", "podrías", "G", "irregulares"],
  ["hacer (condicional) → ustedes", "harían", "G", "irregulares"],     // "¿Y qué harían juntos?"
  ["decir (condicional) → yo", "diría", "G", "irregulares"],
  ["querer (condicional) → yo", "querría", "G", "irregulares"],
  ["salir (condicional) → ellos/ellas", "saldrían", "G", "irregulares"],
  ["poner (condicional) → él/ella", "pondría", "G", "irregulares"],
  ["venir (condicional) → él/ella", "vendría", "G", "irregulares"],
  ["saber (condicional) → tú", "sabrías", "G", "irregulares"],

  // ── The dialogue's words
  ["un genio", "a genie / a genius", "V", "vocab"],
  ["un deseo", "a wish", "V", "vocab"],
  ["pedir un deseo", "to make a wish", "V", "vocab"],
  ["dejar de", "to stop (doing something)", "V", "vocab"],
  ["una fundación", "a charity / a foundation", "V", "vocab"],
  ["recoger", "to pick up (a child, from school)", "V", "vocab"],
  ["pintar", "to paint", "V", "vocab"],
  ["disfrutar de la vida", "to enjoy life", "V", "vocab"],
  ["estresado", "stressed / stressed out (masc.)", "V", "vocab"],

  // ── 3. What the conditional is for
  ["¿Qué harías con mucho dinero?", "What would you do with a lot of money? (tú)", "E", "usos"],
  ["¡Sería genial!", "It would be great! / That would be great! / It would be amazing!", "E", "usos"],
  ["Me dijo que vendría", "He told me he would come / She told me she would come / He said he would come / She said she would come", "E", "usos"],

  // ── Ex. 3: put it in the conditional, to be polite
  ["¿Me puede pasar la sal, por favor? → en condicional", "¿Me podría pasar la sal, por favor? / ¿Podría pasarme la sal, por favor?", "G", "cortesia"],
  ["Quiero otro café → en condicional", "Me gustaría otro café", "G", "cortesia"],
  ["Queremos comprar estos libros → en condicional", "Nos gustaría comprar estos libros", "G", "cortesia"],
  ["Debes descansar más → en condicional", "Deberías descansar más / Tú deberías descansar más", "G", "cortesia"],
  ["¿Es posible pagar con tarjeta? → en condicional", "¿Sería posible pagar con tarjeta?", "G", "cortesia"],
  ["Hay más lugar → en condicional", "Habría más lugar", "G", "cortesia"],   // her section 2: hay → habría
  ["¿Podría abrir la puerta, por favor?", "Could you open the door, please? (usted)", "E", "cortesiafrases"],
  ["Me gustaría ir allá contigo", "I would like to go there with you / I'd like to go there with you", "E", "cortesiafrases"],
  ["¿Te gustaría un poco de agua?", "Would you like some water? (tú)", "E", "cortesiafrases"],

  // ── Ex. 6: "would" for something imagined, or "would" for "used to"?
  ["ir → De niño, yo ___ a la playa todos los veranos", "iba", "G", "imperfecto"],
  ["ir → Con más dinero, yo ___ a la playa todos los veranos", "iría", "G", "imperfecto"],
  ["decir → Yo en tu lugar, no le ___ nada", "diría", "G", "imperfecto"],
  ["poder → ¿___ usted ayudarme, por favor?", "Podría", "G", "imperfecto"],
  ["jugar → Cuando era niña, Valeria ___ en el jardín todas las tardes", "jugaba", "G", "imperfecto"],
  ["salir → Con un carro, nosotros ___ todos los fines de semana", "saldríamos", "G", "imperfecto"],

  // ── 1. Abrir and vender; abierto and cerrado with estar
  ["estar abierto → La puerta ___", "está abierta", "G", "abierto"],
  ["estar abierto → Las tiendas ___", "están abiertas", "G", "abierto"],
  ["estar cerrado → Los bancos ___", "están cerrados", "G", "abierto"],
  ["vender", "to sell", "V", "abrirfrases"],
  ["cerrado", "closed (masc.)", "V", "abrirfrases"],
  ["la ventana", "the window", "V", "abrirfrases"],
  ["Se vende", "For sale (on a sign)", "E", "abrirfrases"],

  // ── 4. Imagining: con, sin, en tu lugar, yo que tú
  ["Con mucho dinero, yo dejaría de trabajar", "With a lot of money, I would stop working / With a lot of money, I'd stop working", "E", "imaginar"],
  ["Sin hijos, saldríamos todo el tiempo", "Without kids, we would go out all the time / Without children, we would go out all the time / Without children, we'd go out all the time / Without kids, we'd go out all the time", "E", "imaginar"],
  ["Yo en tu lugar no le diría nada", "If I were you, I wouldn't tell him anything / If I were you, I wouldn't say anything to him", "E", "imaginar"],
  ["Nos acostaríamos más temprano", "We would go to bed earlier / We'd go to bed earlier", "E", "imaginar"],
  ["Imagínate", "Imagine (tú)", "E", "imaginar"],
  ["¡Así de simple!", "Simple as that! / It's that simple!", "E", "imaginar"],
];

// The notes: her grammar sections 1 to 4, translated into English and
// restructured to the notes rules in .claude/skills/building-lessons/SKILL.md.
// Six tabs:
//   Use       section 3: what the conditional is for, her table of uses
//   Forms     section 2: the endings, and the irregular verbs with habría
//   Polite    section 3's notes on podría, deberías and me gustaría, with her
//             ex. 3 sentences
//   Used to   section 3's ATTENTION box (would = used to) and section 2's
//             (comía is not comería)
//   Abrir     section 1: abrir, vender, abierto and cerrado, se vende
//   Imagine   section 4: con, sin, en tu lugar, yo que tú, and her
//             ATTENTION box on "if I had"
// Her section 5 ("En el diálogo") is left out except dejar de, which is in
// Imagine because a phrase card uses it.
// The one "The trap:" is comía / comería, her section 2 ATTENTION box: the
// two differ by two letters and the English "would" pulls toward both.
//
// Sentences that are not hers, kept because cards need them:
//   - Forms: "The same goes for ser, ir, vender and abrir…", with their forms,
//     because those four are drilled and are not in her hablar / comer /
//     vivir table; and "With a verb like acostarse…", for the acostarse
//     drill (added by the independent check).
//   - Polite: the English column of the table, and the table itself, which
//     is her ex. 3 sentences with their answers, so the rewrite cards have
//     their rule in the tab.
//   - Used to: the two-row table setting "con más dinero" (imagined) beside
//     "de niño" (a habit); her box has only the habit.
export const NOTES = [
  {
    tab: "Use",
    h: "1 · What the conditional is for",
    blocks: [
      { t: "lead", v: "The conditional is \"would\" with a verb: *hablaría*, \"I would speak\". Use it to imagine, to ask politely, to say what you'd like, to give advice, and to say what someone said they would do." },
      { t: "table", bold: 1,
        cols: ["Use", "Spanish", "English"],
        rows: [
          ["Imagining", "¿Qué harías con mucho dinero?", "What would you do with a lot of money?"],
          ["Asking politely", "¿Podría abrir la puerta, por favor?", "Could you open the door, please?"],
          ["A wish", "Me gustaría ir allá contigo", "I would like to go there with you"],
          ["Advice", "Deberías descansar", "You should rest"],
          ["What someone said", "Me dijo que vendría", "He told me he would come"],
        ]},
      { t: "note", v: "It also says what something would be like: *salir a las diez sería mejor*, \"leaving at ten would be better\"; *¡sería genial!*, \"it would be great!\"." },
    ],
  },
  {
    tab: "Forms",
    h: "2 · Forming the conditional",
    blocks: [
      { t: "lead", v: "Take the whole verb, as the dictionary gives it, and add -ía, -ías, -ía, -íamos or -ían; the endings are the same for -ar, -er and -ir verbs: *hablar → hablaría*, \"I would speak\"." },
      { t: "table",
        cols: ["Person", "hablar", "comer", "vivir"],
        rows: [
          ["yo", "hablaría", "comería", "viviría"],
          ["tú", "hablarías", "comerías", "vivirías"],
          ["él, ella, usted", "hablaría", "comería", "viviría"],
          ["nosotros", "hablaríamos", "comeríamos", "viviríamos"],
          ["ustedes, ellos, ellas", "hablarían", "comerían", "vivirían"],
        ]},
      { t: "note", v: "Ser, ir, vender and abrir do the same: *sería*, \"it would be\"; *iría*, \"I would go\"; *vendería*, \"I would sell\"; *¿abriría la ventana?*, \"would you open the window?\"." },
      { t: "note", v: "With a verb like acostarse, put me, te, se, nos or se in front: *me acostaría temprano*, \"I would go to bed early\"; *nos acostaríamos*, \"we would go to bed\"." },
      { t: "sub", v: "Irregular verbs" },
      { t: "note", v: "These common verbs change before the ending, and the endings stay the same." },
      { t: "pairs", head: ["Verb", "Conditional"], v: [
        ["tener", "tendría"],
        ["poder", "podría"],
        ["hacer", "haría"],
        ["decir", "diría"],
        ["querer", "querría"],
        ["salir", "saldría"],
        ["poner", "pondría"],
        ["venir", "vendría"],
        ["saber", "sabría"],
      ]},
      { t: "note", v: "Hay, \"there is\", becomes habría, \"there would be\": *con menos gente, habría más lugar*, \"with fewer people, there would be more room\"." },
    ],
  },
  {
    tab: "Polite",
    h: "3 · Asking and advising politely",
    blocks: [
      { t: "lead", v: "To ask or advise more gently, put the verb in the conditional: *¿me podría pasar la sal?*, \"could you pass me the salt?\", is kinder than *¿me puede pasar la sal?*, \"can you pass me the salt?\"." },
      { t: "table", bold: 1,
        cols: ["Direct", "Polite", "English"],
        rows: [
          ["¿Me puede pasar la sal?", "¿Me podría pasar la sal?", "Could you pass me the salt?"],
          ["¿Puedes venir?", "¿Podrías venir?", "Could you come?"],
          ["Debes descansar más", "Deberías descansar más", "You should rest more"],
          ["¿Es posible pagar con tarjeta?", "¿Sería posible pagar con tarjeta?", "Would it be possible to pay by card?"],
        ]},
      { t: "sub", v: "I would like" },
      { t: "note", v: "For \"I would like\", say *me gustaría*, which works like me gusta: *me gustaría otro café*, \"I'd like another coffee\"; *nos gustaría comprar estos libros*, \"we'd like to buy these books\"." },
      { t: "note", v: "Querría, from querer, exists, but people say me gustaría or quisiera instead." },
      { t: "note", v: "Me encantaría, \"I'd love\", works the same way: *nos encantaría conocer Brasil*, \"we'd love to visit Brazil\"." },
    ],
  },
  {
    tab: "Used to",
    h: "4 · Would or used to?",
    blocks: [
      { t: "lead", v: "When English \"would\" means \"used to\", a habit in the past, Spanish uses the imperfect: *de niños, íbamos a la playa todos los veranos*, \"when we were kids, we would go to the beach every summer\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["Con mucho dinero, iría a la playa", "With a lot of money, I would go to the beach"],
          ["De niño, iba a la playa", "As a kid, I would go to the beach"],
        ]},
      { t: "note", v: "**The trap:** *comía*, \"I used to eat\", is not *comería*, \"I would eat\". The conditional keeps the whole verb, comer, before the -ía." },
    ],
  },
  {
    tab: "Abrir",
    h: "5 · Abrir, vender, open and closed",
    blocks: [
      { t: "lead", v: "Abrir, \"to open\", and vender, \"to sell\", are regular, and the thing comes straight after them: *abrí la ventana*, \"I opened the window\"; *vendí mi carro*, \"I sold my car\"." },
      { t: "table", caption: "vender · to sell",
        cols: ["Person", "Present", "Conditional"],
        rows: [
          ["yo", "vendo", "vendería"],
          ["tú", "vendes", "venderías"],
          ["él, ella, usted", "vende", "vendería"],
          ["nosotros", "vendemos", "venderíamos"],
          ["ustedes, ellos, ellas", "venden", "venderían"],
        ]},
      { t: "sub", v: "Open and closed" },
      { t: "note", v: "With estar, abierto (\"open\") and cerrado (\"closed\") end in -o, -a, -os or -as to match the thing: *la farmacia está abierta*, \"the pharmacy is open\"; *las tiendas están cerradas*, \"the stores are closed\"." },
      { t: "note", v: "On a sign, *se vende* means \"for sale\": *se vende departamento*, \"apartment for sale\"." },
    ],
  },
  {
    tab: "Imagine",
    h: "6 · Imagining: con, sin, yo que tú",
    blocks: [
      { t: "lead", v: "To imagine a situation, start with con (\"with\"), sin (\"without\"), en tu lugar or yo que tú (\"if I were you\"), and put the verb in the conditional: *con mucho dinero, dejaría de trabajar*, \"with a lot of money, I'd stop working\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["Sin hijos, saldríamos todo el tiempo", "Without kids, we'd go out all the time"],
          ["Yo en tu lugar no le diría nada", "If I were you, I wouldn't tell him anything"],
          ["Yo que tú, iría al médico", "If I were you, I'd go to the doctor"],
          ["Imagínate que un genio te concede un deseo", "Imagine a genie grants you a wish"],
        ]},
      { t: "note", v: "\"If I had a lot of money\" is not si tenía mucho dinero. For now, say *con mucho dinero*, \"with a lot of money\"." },
      { t: "note", v: "Dejar de with a verb is \"to stop doing\": *dejaría de trabajar*, \"I'd stop working\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion22",
  title: "Lesson 22 · Would",
  subtitle: "The conditional (hablaría, tendría): imagining, asking politely, giving advice; would or used to; abrir and vender",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in: the forms first (the regular
  // endings on vender, then the irregular verbs), then the dialogue's words,
  // which the phrase cards ask for in Spanish (dejar de, un deseo). Then each
  // use, followed by its practice: imagining, asking politely, and would or
  // used to once both the conditional and its look-alike are in place. Abrir,
  // vender and abierto come after the conditional, because vender's drills
  // are conditional; her imagining section closes the lesson, as on her sheet.
  teachingOrder: [
    "formas", "irregulares",
    "vocab",
    "usos",
    "cortesia", "cortesiafrases",
    "imperfecto",
    "abierto", "abrirfrases",
    "imaginar",
  ],
  // The line above a grammar card saying what to type (src/lib/cardInstruction.js).
  // Drills ("vender (condicional) → yo") get theirs from their shape. Phrase
  // and word cards carry no line.
  instructions: {
    cortesia: "Put it in the conditional (for querer, use me gustaría)",
    imperfecto: "Fill the gap with the verb given, in the conditional or the imperfect",
    abierto: "Fill the gap with estar in the present and the word given, made to match",
  },
};

export default LESSON;
