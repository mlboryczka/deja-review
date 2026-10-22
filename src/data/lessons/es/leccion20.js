// Lesson 20 · At the restaurant — built from Lección 20 of the Latin American
// Spanish course adapted from Laura Caufour's LFL METHOD: the lesson (James
// and his friend Mateo have lunch at a restaurant in Mexico City; grammar
// 1–5) and its exercise sheet. The sheets have no answer key: every answer
// here is ours, checked as a Mexican Spanish teacher would mark it.
//
// Checked 2026-10-22 by an independent reader: 5 fixes.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see imperatif.js for why.
//
// Card shapes:
//   "pedir (presente) → yo"                     the paradigm; the line above comes from the shape
//   "pedir → gerundio"                          the -iendo form
//   "pedir o preguntar → Jessica le ___ …"      choose the verb, then its form
//   "Mis amigos piden la cuenta → en pretérito" her ex. 5
//   "Quiero un café → más cortés"               ask politely (her ex. 4)
//   "con + yo → ¿Quieres venir ___?"            a pronoun after para, con, sin (her ex. 3)
//   "¿Cuánto es? → $270"                        answer with the price in words (her ex. 6)
//   two-way phrase (E) and word (V) cards: her word list (ex. 1), a sample of
//   her ex. 2 and ex. 4 sentences, and of her level 3 translations (ex. 7)
//
// WHY THESE ARE EXACT CARDS. A phrase card is marked with typo tolerance, and
// the mistakes this lesson is about are a letter or two long: "Quiero un
// café" passes for "Quisiera un café", "pedieron" for "pidieron", "con mi" for
// "conmigo". So the e → i forms, quisiera, the pronouns after para and con,
// and cuesta or cuestan and son are asked on arrow cards; the phrase cards
// are there for meaning.
//
// Sampled, not transcribed. Pedir, new, in the present for all six persons
// and in the preterite for yo, él / ella and ellos / ellas, where it changes
// and where it doesn't. Of servir, repetir and seguir, a card each for the
// changes her table shows (sirvo but servimos, repite, sirvió, repitieron,
// sigo with no u, siguió) and one -iendo form; vestirse gets no drill, as its
// present is Lesson 12's, and is asked in her ex. 5 sentences instead. Her
// ex. 5, four of fifteen: a plural (pidieron), vestirse twice (se vistieron,
// and yo, which keeps its e), and seguir + -iendo. Her ex. 2, four sentences
// as phrase cards (order, ask for, still). Her ex. 3, seven pronoun cards:
// mí and ti after para, sin and cerca de, conmigo, contigo, and one person
// that stays as it is. Her ex. 4, two exact cards for quisiera and five
// phrase cards for the ways of asking. Her ex. 6, six of twelve prices:
// cuesta, cuestan, ¿cuánto es? twice (son, and cents), ciento, and millones
// de. Her ex. 7, four sentences that add something no other card has.
//
// Not made into cards: ex. 8 is a dictation. The two "pedir o preguntar"
// cards are not an exercise of hers; they are built on her ATTENTION box,
// with her mesero and Jessica.
//
// Her word list (ex. 1), and where the cards depart from it:
//   - Left out because an earlier lesson already teaches them: "spicy"
//     (picante, Lesson 6), "Deal!" (Lesson 11), "last time" (la última vez,
//     Lesson 7), "welcome" (Lesson 18's "¡Bienvenido a México!").
//   - "with me", "with you (tú)", "for me" and "for him" are the pronoun
//     cards, which ask them exactly.
//   - "pork" is "la carne de puerco", as the dialogue says it.
//   - Left out to keep the lesson near 80 cards, as cognates or words another
//     card carries: "a lemonade", "the salsa", "the change" (in "Quédese con
//     el cambio"), "without onion" (la cebolla has its own card), "something
//     new" (in "Hoy voy a probar algo nuevo").
//   - "How much is it?" carries "(the total)" on the English side, so a
//     student doesn't answer "¿Cuánto cuesta?", which is right too.
//
// Where this departs from her sheets:
//   - "Quiero un café → más cortés" accepts every polite form her lesson
//     gives (quisiera, ¿me trae…?, ¿me da…?, ¿me puede traer…?, voy a
//     querer…, and ¿me puede dar…?), with or without por favor. "Quiero
//     pagar → más cortés" takes quisiera pagar only, her ex. 4 answer.
//   - The usted requests say "with poder" or "without poder" on the English
//     side (and "¿Me pasas la sal?" too), since "Can you bring me…" fits
//     both ¿me trae…? and ¿me puede traer…?.
//   - "¿Cuánto es? → $12.50" also takes "Son doce pesos con cincuenta" and
//     "Son doce cincuenta", as prices are said in Mexico.
//
// The notes: her lesson, translated into English and laid out on the notes
// rules in .claude/skills/building-lessons/SKILL.md. Five tabs:
//   Pedir       her section 1
//   Like pedir  her section 2
//   Ordering    her section 3
//   Pronouns    her section 4
//   Prices      her section 5
// Not hers, kept because cards need them: the table of prices in words
// ($120, $1,500 and $2,000,000 are from her ex. 6) and "A million or more
// takes de before pesos". Cut as helping no card: mí with an accent against
// mi, entre tú y yo, ¿Cuánto le debo?, ¡Qué caro! and ¡Qué barato!, calling
// the waiter ¡Joven!, the tip, and her pointers to earlier lessons.

export const CARDS = [
  // ── 1. Pedir
  ["pedir (presente) → yo", "pido", "G", "pedir"],
  ["pedir (presente) → tú", "pides", "G", "pedir"],
  ["pedir (presente) → él/ella", "pide", "G", "pedir"],
  ["pedir (presente) → nosotros", "pedimos", "G", "pedir"],
  ["pedir (presente) → ustedes", "piden", "G", "pedir"],
  ["pedir (presente) → ellos/ellas", "piden", "G", "pedir"],
  ["pedir (pretérito) → yo", "pedí", "G", "pedir"],
  ["pedir (pretérito) → él/ella", "pidió", "G", "pedir"],
  ["pedir (pretérito) → ellos/ellas", "pidieron", "G", "pedir"],

  // ── Ex. 1: her word list
  ["el mesero", "the waiter / the server", "V", "vocab"],
  ["el menú", "the menu (not la carta)", "V", "vocab"],
  ["la cuenta", "the check / the bill", "V", "vocab"],
  ["la propina", "the tip", "V", "vocab"],
  ["una bebida", "a drink", "V", "vocab"],
  ["la piña", "pineapple / the pineapple", "V", "vocab"],
  ["la carne de puerco", "pork", "V", "vocab"],
  ["la cebolla", "onion / the onion", "V", "vocab"],
  ["caro", "expensive (masc.)", "V", "vocab"],
  ["barato", "cheap (masc.)", "V", "vocab"],
  ["pedir", "to order / to ask for", "V", "vocab"],
  ["servir", "to serve", "V", "vocab"],
  ["probar", "to try (a food) / to taste", "V", "vocab"],
  ["pagar", "to pay / to pay for", "V", "vocab"],
  ["un invitado", "a guest (masc.)", "V", "vocab"],
  ["una orden de tacos", "an order of tacos", "V", "vocab"],
  ["Buenas tardes", "Good afternoon", "E", "vocab"],
  ["¿Algo más?", "Anything else?", "E", "vocab"],
  ["Es todo", "That's all / That's it", "E", "vocab"],
  ["¡Nada de eso!", "No way! (I'm paying)", "E", "vocab"],
  ["Quédese con el cambio", "Keep the change (usted)", "E", "vocab"],
  ["Aquí tiene", "Here you go / Here you are (usted)", "E", "vocab"],
  ["No se preocupe", "Don't worry (usted)", "E", "vocab"],
  ["¿Cuánto es?", "How much is it? (the total)", "E", "vocab"],
  ["casi", "almost / nearly", "V", "vocab"],
  ["el diez por ciento", "ten percent", "V", "vocab"],

  // ── 1. Pedir or preguntar? (her ATTENTION box)
  ["pedir o preguntar → Jessica le ___ la hora al mesero", "pregunta", "G", "pedirpreguntar"],
  ["pedir o preguntar → Jessica le ___ un café al mesero", "pide", "G", "pedirpreguntar"],

  // ── 2. Verbs that change e → i like pedir
  ["servir (presente) → yo", "sirvo", "G", "like"],
  ["servir (presente) → nosotros", "servimos", "G", "like"],      // no change with nosotros
  ["servir (pretérito) → él/ella", "sirvió", "G", "like"],
  ["repetir (presente) → él/ella", "repite", "G", "like"],
  ["repetir (pretérito) → ellos/ellas", "repitieron", "G", "like"],
  ["seguir (presente) → yo", "sigo", "G", "like"],                 // no u
  ["seguir (pretérito) → él/ella", "siguió", "G", "like"],
  ["pedir → gerundio", "pidiendo", "G", "like"],

  // ── Ex. 5: in the preterite
  ["Mis amigos piden la cuenta → en pretérito", "Mis amigos pidieron la cuenta", "G", "past"],
  ["Los niños se visten solos → en pretérito", "Los niños se vistieron solos", "G", "past"],
  ["Yo me visto a las siete → en pretérito", "Yo me vestí a las siete / Me vestí a las siete", "G", "past"],
  ["Siguen hablando → en pretérito", "Siguieron hablando", "G", "past"],

  // ── Ex. 2: pedir, seguir in sentences
  ["Siempre pido tacos al pastor", "I always order tacos al pastor", "E", "pedirphrases"],
  ["¿Qué vas a pedir?", "What are you going to order? (tú)", "E", "pedirphrases"],
  ["Le pedí la cuenta al mesero", "I asked the waiter for the check / I asked the waiter for the bill", "E", "pedirphrases"],
  ["Sigo aprendiendo español", "I'm still learning Spanish / I keep learning Spanish", "E", "pedirphrases"],

  // ── 3. Asking politely (her ex. 4)
  ["Quiero un café → más cortés", "Quisiera un café / Quisiera un café, por favor / ¿Me trae un café? / ¿Me trae un café, por favor? / ¿Me da un café? / ¿Me da un café, por favor? / ¿Me puede traer un café? / ¿Me puede traer un café, por favor? / ¿Me puede dar un café? / ¿Me puede dar un café, por favor? / Voy a querer un café / Voy a querer un café, por favor / Un café, por favor / Para mí, un café / Para mí, un café, por favor", "G", "polite"],
  ["Quiero pagar → más cortés", "Quisiera pagar / Quisiera pagar, por favor", "G", "polite"],
  ["¿Me trae el menú, por favor?", "Can you bring me the menu, please? (usted, without poder)", "E", "ordering"],
  ["¿Nos trae la cuenta, por favor?", "Can you bring us the check, please? / Can you bring us the bill, please? (usted, without poder)", "E", "ordering"],
  ["¿Me puede traer una servilleta?", "Could you bring me a napkin? / Can you bring me a napkin? (usted, with poder)", "E", "ordering"],
  ["Voy a querer unos tacos al pastor", "I'll have tacos al pastor / I'll have some tacos al pastor (with ir a)", "E", "ordering"],
  ["¿Me pasas la sal?", "Can you pass me the salt? (tú, without poder)", "E", "ordering"],

  // ── 4. Pronouns after para, con, sin (her ex. 3)
  ["para + yo → ___, una limonada, por favor", "Para mí", "G", "prep"],
  ["para + tú → Este regalo es ___", "para ti", "G", "prep"],
  ["sin + tú → No puedo vivir ___", "sin ti", "G", "prep"],
  ["cerca de + yo → Ella vive ___", "cerca de mí", "G", "prep"],
  ["con + yo → ¿Quieres venir ___?", "conmigo", "G", "prep"],
  ["con + tú → Quiero ir ___", "contigo", "G", "prep"],
  ["con + nosotros → Mis papás vinieron ___", "con nosotros", "G", "prep"],

  // ── 5. Prices (her ex. 6)
  ["¿Cuánto cuesta el café? → $45", "Cuesta cuarenta y cinco pesos / El café cuesta cuarenta y cinco pesos / Cuesta cuarenta y cinco / El café cuesta cuarenta y cinco", "G", "prices"],
  ["¿Cuánto cuestan los tacos? → $95", "Cuestan noventa y cinco pesos / Cuestan noventa y cinco pesos la orden / Los tacos cuestan noventa y cinco pesos / Los tacos cuestan noventa y cinco pesos la orden / Cuestan noventa y cinco / Cuestan noventa y cinco la orden / Los tacos cuestan noventa y cinco / Los tacos cuestan noventa y cinco la orden", "G", "prices"],
  ["¿Cuánto cuestan las enchiladas? → $120", "Cuestan ciento veinte pesos / Las enchiladas cuestan ciento veinte pesos / Cuestan ciento veinte / Las enchiladas cuestan ciento veinte", "G", "prices"],
  ["¿Cuánto es? → $270", "Son doscientos setenta pesos / Son doscientos setenta", "G", "prices"],
  ["¿Cuánto es? → $12.50", "Son doce pesos con cincuenta centavos / Son doce pesos con cincuenta / Son doce cincuenta / Son doce con cincuenta centavos / Son doce con cincuenta", "G", "prices"],
  ["¿Cuánto cuesta el departamento? → $2,000,000", "Cuesta dos millones de pesos / El departamento cuesta dos millones de pesos / Cuesta dos millones / El departamento cuesta dos millones", "G", "prices"],

  // ── Ex. 7: her level 3 translations
  ["Hoy voy a probar algo nuevo", "Today I'm going to try something new / I'm going to try something new today", "E", "translations"],
  ["Hoy pago yo", "Today I'm paying / I'm paying today / Today I'll pay", "E", "translations"],
  ["Es un placer comer contigo", "It's a pleasure to eat with you (tú)", "E", "translations"],
  ["A mi amigo no le gusta mucho el chile", "My friend doesn't really like chili / My friend doesn't like chili much", "E", "translations"],
];

export const NOTES = [
  {
    tab: "Pedir",
    h: "1 · Pedir",
    blocks: [
      { t: "lead", v: "Pedir means \"to ask for\" something and \"to order\" in a restaurant, and its e becomes i in most forms: *pido*, \"I order\"." },
      { t: "table", bold: 1,
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "pido", "pedí"],
          ["tú", "pides", "pediste"],
          ["él / ella / usted", "pide", "pidió"],
          ["nosotros", "pedimos", "pedimos"],
          ["ellos / ellas / ustedes", "piden", "pidieron"],
        ]},
      { t: "note", v: "In the present, the e becomes i everywhere except with nosotros. In the preterite, it changes only with él, ella and usted (*pidió*) and with ellos, ellas and ustedes (*pidieron*)." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Siempre pido enchiladas", "I always order enchiladas"],
        ["Jessica pidió tacos al pastor", "Jessica ordered tacos al pastor"],
        ["Le pedí la cuenta al mesero", "I asked the waiter for the check"],
      ]},
      { t: "sub", v: "Pedir or preguntar?" },
      { t: "note", v: "Pedir is to ask for something; preguntar is to ask a question: *le pedí un café*, \"I asked him for a coffee\"; *le pregunté el precio*, \"I asked him the price\"." },
      { t: "note", v: "**The trap:** pedir needs no word for \"for\": *pedí la cuenta*, \"I asked for the check\", never pedí por la cuenta." },
    ],
  },
  {
    tab: "Like pedir",
    h: "2 · Verbs like pedir",
    blocks: [
      { t: "lead", v: "Servir, repetir, seguir and vestirse change their e to i the same way as pedir: *sirvo*, \"I serve\"; *repite*, \"he repeats\"." },
      { t: "table", bold: 0, dense: true,
        cols: ["Person", "servir", "repetir", "seguir"],
        rows: [
          ["yo", "sirvo", "repito", "sigo"],
          ["tú", "sirves", "repites", "sigues"],
          ["él / ella / usted", "sirve", "repite", "sigue"],
          ["nosotros", "servimos", "repetimos", "seguimos"],
          ["ellos / ellas / ustedes", "sirven", "repiten", "siguen"],
          ["Preterite, él / ella", "sirvió", "repitió", "siguió"],
          ["Preterite, ellos / ellas", "sirvieron", "repitieron", "siguieron"],
        ]},
      { t: "note", v: "Vestirse, \"to get dressed\", does the same with its pronoun: *me visto*, \"I get dressed\"; *se vistieron*, \"they got dressed\"." },
      { t: "note", v: "Every other preterite form keeps its e: *serví*, \"I served\"; *me vestí*, \"I got dressed\"." },
      { t: "sub", v: "The -iendo form" },
      { t: "note", v: "The e becomes i here too: *pidiendo*, \"ordering\"; *siguiendo*, \"following\"." },
      { t: "sub", v: "Seguir" },
      { t: "note", v: "With yo, write *sigo*, with no u. Seguir means \"to follow\" or \"to keep going\": *sigue derecho*, \"keep going straight\"." },
      { t: "note", v: "Before an -ando or -iendo form, seguir means \"still\": *sigo aprendiendo español*, \"I'm still learning Spanish\"." },
    ],
  },
  {
    tab: "Ordering",
    h: "3 · Asking politely",
    blocks: [
      { t: "lead", v: "To ask for something in a restaurant or a shop, ask a question in the present with me or nos, and use usted with the waiter: *¿me trae el menú, por favor?*, \"can you bring me the menu, please?\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Nos trae la cuenta, por favor?", "Can you bring us the check, please?"],
        ["¿Me da una limonada, por favor?", "Can I have a lemonade, please?"],
        ["¿Me puede traer una servilleta?", "Could you bring me a napkin?"],
        ["Para mí, unos tacos al pastor", "For me, tacos al pastor"],
        ["Voy a querer unas enchiladas", "I'll have enchiladas"],
      ]},
      { t: "sub", v: "Quisiera" },
      { t: "note", v: "*Quisiera*, \"I would like\", is a polite form of querer, to learn as it is: *quisiera un café*, \"I'd like a coffee\"; *quisiera pagar*, \"I'd like to pay\"." },
      { t: "note", v: "*Quiero un café*, \"I want a coffee\", is correct but blunt with a waiter: say *¿me trae un café, por favor?* or *quisiera un café*." },
      { t: "sub", v: "With a friend" },
      { t: "note", v: "With a friend, use tú: *¿me pasas la sal?*, \"can you pass me the salt?\"." },
    ],
  },
  {
    tab: "Pronouns",
    h: "4 · Para mí, conmigo",
    blocks: [
      { t: "lead", v: "After a word like para, de, sin or cerca de, yo becomes *mí* and tú becomes *ti*: *para mí*, \"for me\"; *sin ti*, \"without you\"." },
      { t: "table", bold: 1,
        cols: ["Person", "After para", "English"],
        rows: [
          ["yo", "para mí", "for me"],
          ["tú", "para ti", "for you"],
          ["él / ella / usted", "para él · para ella · para usted", "for him · for her · for you"],
          ["nosotros", "para nosotros", "for us"],
          ["ellos / ellas / ustedes", "para ellos · para ellas · para ustedes", "for them · for you"],
        ]},
      { t: "note", v: "Every person except yo and tú stays as it is: *mis papás vinieron con nosotros*, \"my parents came with us\"; *hablamos de ellos*, \"we talked about them\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Vive cerca de mí", "She lives near me"],
        ["Este regalo es para ti", "This present is for you"],
        ["Y para él, una limonada", "And for him, a lemonade"],
      ]},
      { t: "sub", v: "Conmigo, contigo" },
      { t: "note", v: "With con, yo and tú join it as one word: *conmigo*, \"with me\"; *contigo*, \"with you\". Every other person stays separate: *con él*, \"with him\"; *con nosotros*, \"with us\"." },
    ],
  },
  {
    tab: "Prices",
    h: "5 · Prices",
    blocks: [
      { t: "lead", v: "To ask a price, use costar: *cuesta* for one thing and *cuestan* for more than one: *¿cuánto cuesta la limonada?*, \"how much is the lemonade?\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Cuánto cuesta la limonada? · Cuesta cuarenta pesos", "How much is the lemonade? · It's forty pesos"],
        ["¿Cuánto cuestan los tacos? · Cuestan noventa y cinco pesos", "How much are the tacos? · They're ninety-five pesos"],
      ]},
      { t: "sub", v: "The total" },
      { t: "note", v: "To ask for the total, say *¿cuánto es?*, \"how much is it?\", and answer with son: *son doscientos setenta pesos*, \"that's two hundred seventy pesos\"." },
      { t: "sub", v: "Prices in words" },
      { t: "note", v: "In Mexico $ is for pesos, and cents are said with con: *doce pesos con cincuenta centavos*, \"twelve pesos fifty\"." },
      { t: "table", bold: 1,
        cols: ["Price", "In words"],
        rows: [
          ["$40", "cuarenta pesos"],
          ["$95", "noventa y cinco pesos"],
          ["$120", "ciento veinte pesos"],
          ["$270", "doscientos setenta pesos"],
          ["$1,500", "mil quinientos pesos"],
          ["$2,000,000", "dos millones de pesos"],
          ["$12.50", "doce pesos con cincuenta centavos"],
        ]},
      { t: "note", v: "A million or more takes de before pesos: *dos millones de pesos*, \"two million pesos\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion20",
  title: "Lesson 20 · At the restaurant",
  subtitle: "Pedir and verbs like it, ordering politely, para mí and conmigo, and prices",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in, in the order of her grammar:
  // pedir first, then her word list, before the cards that use its words
  // (mesero, cuenta, servir); pedir or preguntar straight after pedir; the
  // other e → i verbs and her ex. 5; then asking politely, the pronouns, the
  // prices, and her translations last, as they mix everything.
  teachingOrder: [
    "pedir",
    "vocab",
    "pedirpreguntar",
    "like", "past", "pedirphrases",
    "polite", "ordering",
    "prep",
    "prices",
    "translations",
  ],
  // The drills get their line from their shape ("Present tense, yo form",
  // "Gerund (-ando / -iendo form)"). Phrase and word cards carry no line.
  instructions: {
    pedirpreguntar: "Fill the gap with one of the two verbs, in the present",
    past: "Put this sentence in the preterite",
    polite: "Make this more polite, keeping its meaning",
    prep: "Fill the gap with the word and the pronoun given, in the form they take together",
    prices: "Answer in a full sentence, writing the price in words",
  },
};

export default LESSON;
