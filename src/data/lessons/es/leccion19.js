// Lesson 19 · Food — built from Lección 19 of the Latin American Spanish
// course adapted from Laura Caufour's LFL METHOD: the lesson (Jessica tells
// her Mexican friend Mariana what she ate yesterday and today; grammar 1–6)
// and its exercise sheet. The sheets have no answer key: every answer here is
// ours, checked as a Mexican Spanish teacher would mark it.
//
// Checked 2026-10-22 by an independent reader: 4 fixes.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish; see imperatif.js for why.
//
// Card shapes:
//   "beber (presente) → yo"                  the paradigm; the line above comes from the shape
//   "salir o sacar → Ayer yo ___ la basura"  choose the verb, then its form (her ex. 7)
//   "queso → Me encanta ___"                 the noun, with an article or without (her ex. 2–4)
//   "Puse sal → demasiado"                   add the word, in the form that fits (her ex. 5)
//   "muy o mucho → Tengo ___ hambre"         muy, or mucho matching its noun (her ex. 6)
//   two-way phrase (E) and word (V) cards: her word list (ex. 1), tomar,
//   hunger and ya no, and a sample of her level 3 translations (ex. 8)
//
// WHY THE ARTICLES ARE GAP CARDS AND NOT TRANSLATIONS. Her ex. 2–4 ask for
// sentences with or without el, la, un. On a phrase card the app lets an
// article left out pass (it is lenient on a missing article), and "Me encanta
// queso" is three letters from the answer anyway, so the very choice the
// exercise is about would never be marked wrong. Each card is one of her
// sentences with the noun as the cue and the gap where the article goes or
// doesn't: the answer is the noun with its article, or the bare noun. Muy or
// mucho, the -a / -os / -as of mucho, poco, demasiado and bastante, and salir
// or sacar are exact cards for the same reason.
//
// Sampled, not transcribed. The drills: beber, new, in the present for all
// six persons; salir in the present without yo (salgo is Lesson 9's, among
// the verbs irregular only with yo, and its drill front would be the same);
// both verbs in the preterite for yo, él / ella and ellos / ellas, where the
// endings differ most. Her ex. 2–4 become eight gap cards, two or three per
// meaning in her table (general with gustar and encantar, a subject in
// general, hay, an amount, a particular thing, unos), all with food from her
// lesson; her ex. 4 sentences outside food (glasses, shoes, cars, classes)
// teach the same rule and are left out. Her ex. 5, one card per word and form
// that differs (mucha gente, un poco de, bastantes, pocas, mucha agua,
// demasiada). Her ex. 6, six of thirteen: one per use, and hambre and frío
// for nouns that take mucho. Her ex. 7, five of six (Mariana sale repeats
// salimos). Her ex. 8, three sentences that add something (preferir + a
// verb, two quantity words in one sentence, sacar al perro). Checked with the
// app's matcher: on the phrase cards, "No como carne" passes as Close enough
// for "Ya no como carne", and "demasiado carne" for "demasiada carne"; the
// quantity words are asked exactly on her ex. 5 cards.
//
// Not made into cards: ex. 9 is a dictation. Her lesson has no numbers.
//
// Her word list (ex. 1), and where the cards depart from it:
//   - "lunch" is "en la comida", "at lunch": la comida is Lesson 6's card for
//     "food", and a front belongs to one lesson only.
//   - "sweet" is "algo dulce", "something sweet", from the dialogue: dulce is
//     Lesson 7's word (sweet, of a person).
//   - "a starter", "the main course" and "dessert" are her lesson's de
//     entrada, de plato fuerte and de postre, which is how they are used.
//   - "vegetarian", "fresh" and "savory" (masc. & fem.) are carded in the
//     masculine, as the French lessons card fatigué.
//   - Left out: "last night" (anoche, Lesson 8) and "to buy" (comprar, Lesson
//     13); "to drink", since its English fits both beber and tomar (beber is
//     in the drills and tomar in two phrase cards and the notes); "an egg",
//     inside "un huevo estrellado"; and, to keep the lesson near 80 cards,
//     "coffee" and "pasta" (cognates), "a cucumber" and "the butcher's".
//   - "un tomate" is the dialogue's word. In central Mexico a red tomato is
//     un jitomate (her lesson says so); typed on the English side, it passes
//     as Close enough.
//   - "un limón" is "a lime", her translation (in Mexico limón is the lime),
//     and also takes "a lemon", what limón is in most other countries.
//   - "de postre" also takes "as dessert", so "dessert" alone, her list's
//     word, passes as Close enough.
//   - "¿Qué quieres tomar?" and "No tomo" say "with tomar" on the English
//     side, since beber is right too.
//
// Where this departs from her sheets:
//   - The article cards are built from her sentences, not asked her way
//     (English to Spanish); every answer is the one her rule gives. One card
//     was not made: "Prefiero ___" with té, since "Prefiero té" is natural
//     when choosing a drink and her own rule says "casi siempre".
//   - "Compré ___ y tomates" takes huevos or unos huevos, as her lesson says.
//
// The notes: her lesson, translated into English and laid out on the notes
// rules in .claude/skills/building-lessons/SKILL.md. Six tabs:
//   Verbs      her section 1: salir and beber, salir de, sacar, tomar
//   Articles   her section 2
//   Mucho      her section 3
//   Muy        her section 4, with "very" before a noun (section 5)
//   Hunger     her section 5: tener hambre, tener sed, ya no
//   Meals      her section 6
// Sentences that are not hers, kept because cards need them: under Muy,
// "Hambre, sed, frío and calor are nouns, so "very" is mucho, matching the
// noun" (her section 5 says it for hambre and sed, and frío for tener; the
// card "Hoy hace ___ frío" needs it with hacer). "The trap" is her
// ATTENTION box. Cut as helping no card: jitomate, almuerzo in other
// countries, "mucho mejor", and her pointers to earlier lessons.

export const CARDS = [
  // ── 1. Salir: the present (yo is Lesson 9's salgo) and the preterite
  ["salir (presente) → tú", "sales", "G", "salir"],
  ["salir (presente) → él/ella", "sale", "G", "salir"],
  ["salir (presente) → nosotros", "salimos", "G", "salir"],
  ["salir (presente) → ustedes", "salen", "G", "salir"],
  ["salir (presente) → ellos/ellas", "salen", "G", "salir"],
  ["salir (pretérito) → yo", "salí", "G", "salir"],
  ["salir (pretérito) → él/ella", "salió", "G", "salir"],
  ["salir (pretérito) → ellos/ellas", "salieron", "G", "salir"],

  // ── 1. Beber, regular like comer
  ["beber (presente) → yo", "bebo", "G", "beber"],
  ["beber (presente) → tú", "bebes", "G", "beber"],
  ["beber (presente) → él/ella", "bebe", "G", "beber"],
  ["beber (presente) → nosotros", "bebemos", "G", "beber"],
  ["beber (presente) → ustedes", "beben", "G", "beber"],
  ["beber (presente) → ellos/ellas", "beben", "G", "beber"],
  ["beber (pretérito) → yo", "bebí", "G", "beber"],
  ["beber (pretérito) → él/ella", "bebió", "G", "beber"],
  ["beber (pretérito) → ellos/ellas", "bebieron", "G", "beber"],

  // ── Ex. 1: her word list. The nouns come before the article cards,
  //    which need their el or la
  ["el desayuno", "breakfast / the breakfast", "V", "vocab"],
  ["la cena", "dinner / supper / the dinner", "V", "vocab"],
  ["en la comida", "at lunch / for lunch", "V", "vocab"],
  ["un pan tostado", "a piece of toast / a slice of toast / toast", "V", "vocab"],
  ["un huevo estrellado", "a fried egg", "V", "vocab"],
  ["un limón", "a lime / a lemon", "V", "vocab"],
  ["un aguacate", "an avocado", "V", "vocab"],
  ["un tomate", "a tomato", "V", "vocab"],
  ["el queso", "cheese / the cheese", "V", "vocab"],
  ["la carne", "meat / the meat", "V", "vocab"],
  ["el pescado", "fish / the fish (to eat)", "V", "vocab"],
  ["el arroz", "rice / the rice", "V", "vocab"],
  ["los frijoles", "beans / the beans", "V", "vocab"],
  ["la fruta", "fruit / the fruit", "V", "vocab"],
  ["la sal", "salt / the salt", "V", "vocab"],
  ["el agua", "water / the water", "V", "vocab"],
  ["el té", "tea / the tea", "V", "vocab"],
  ["el vino", "wine / the wine", "V", "vocab"],
  ["vegetariano", "vegetarian (masc.)", "V", "vocab"],
  ["fresco", "fresh (masc.)", "V", "vocab"],
  ["salado", "savory / salty (masc.)", "V", "vocab"],
  ["algo dulce", "something sweet", "V", "vocab"],
  ["reemplazar", "to replace", "V", "vocab"],
  ["¡Qué rico!", "Yum! / Sounds delicious! / How delicious! / How tasty! / Delicious!", "E", "vocab"],
  ["por cierto", "by the way", "V", "vocab"],
  ["de entrada", "for starters / as a starter", "V", "vocab"],
  ["de plato fuerte", "for the main course / as a main course", "V", "vocab"],
  ["de postre", "for dessert / as dessert", "V", "vocab"],
  ["salir", "to go out / to leave", "V", "vocab"],

  // ── 5. Hungry, thirsty, and ya no
  ["Tengo hambre", "I'm hungry", "E", "hunger"],
  ["Tengo sed", "I'm thirsty", "E", "hunger"],
  ["Ya no tenía hambre", "I wasn't hungry anymore / I was no longer hungry", "E", "hunger"],
  ["Ya no como carne", "I don't eat meat anymore / I no longer eat meat", "E", "hunger"],

  // ── Ex. 7: salir or sacar, in the present or the preterite
  ["salir o sacar → Todos los días, yo ___ al perro a las siete", "saco", "G", "salirsacar"],
  ["salir o sacar → Anoche, Jessica no ___: cenó en casa", "salió", "G", "salirsacar"],
  ["salir o sacar → Ayer yo ___ la basura", "saqué", "G", "salirsacar"],
  ["salir o sacar → Normalmente, nosotros ___ de casa a las ocho", "salimos", "G", "salirsacar"],
  ["salir o sacar → ¿Tú ___ la basura los miércoles?", "sacas", "G", "salirsacar"],

  // ── 1. Tomar for drinks
  ["¿Qué quieres tomar?", "What do you want to drink? / What would you like to drink? (tú, with tomar)", "E", "tomar"],
  ["No tomo", "I don't drink (alcohol, with tomar)", "E", "tomar"],

  // ── 2. With an article or without (her ex. 2–4)
  ["queso → Me encanta ___", "el queso", "G", "articles"],                 // in general, with encantar
  ["verduras → No me gustan ___", "las verduras", "G", "articles"],        // in general, with gustar
  ["agua → ___ es muy importante", "El agua", "G", "articles"],            // in general, and el with agua
  ["sal → ¿Hay ___ en la mesa?", "sal", "G", "articles"],                  // never el after hay
  ["pan → Como ___ y queso", "pan", "G", "articles"],                      // an amount
  ["queso → Me gusta comer ___ en la mañana", "queso", "G", "articles"],   // after another verb, an amount
  ["huevos → ___ están en la mesa", "Los huevos", "G", "articles"],        // particular ones
  ["huevos → Compré ___ y tomates", "huevos / unos huevos", "G", "articles"],

  // ── 3. Mucho, poco, demasiado, bastante before a noun (her ex. 5)
  ["Hay gente en el aeropuerto → mucho", "Hay mucha gente en el aeropuerto", "G", "quantity"],
  ["Tienes que poner sal → un poco", "Tienes que poner un poco de sal", "G", "quantity"],
  ["Tiene amigos mexicanos → bastante", "Tiene bastantes amigos mexicanos", "G", "quantity"],
  ["Como verduras → poco", "Como pocas verduras", "G", "quantity"],
  ["Tomo agua → mucho", "Tomo mucha agua", "G", "quantity"],
  ["Puse sal → demasiado", "Puse demasiada sal", "G", "quantity"],

  // ── 4. Muy or mucho? (her ex. 6)
  ["muy o mucho → Tengo ___ hambre", "mucha", "G", "muymucho"],
  ["muy o mucho → El pescado está ___ rico", "muy", "G", "muymucho"],
  ["muy o mucho → Me gusta ___ el queso", "mucho", "G", "muymucho"],
  ["muy o mucho → Comimos ___ tacos", "muchos", "G", "muymucho"],
  ["muy o mucho → Hoy hace ___ frío", "mucho", "G", "muymucho"],
  ["muy o mucho → Hablas español ___ bien", "muy", "G", "muymucho"],

  // ── Ex. 8: her level 3 translations
  ["Prefiero comer cosas dulces en la mañana", "I prefer to eat sweet things in the morning / I prefer eating sweet things in the morning", "E", "translations"],
  ["Como demasiada carne y poco pescado", "I eat too much meat and not much fish / I eat too much meat and not a lot of fish / I eat too much meat and little fish", "E", "translations"],
  ["¿Puedes sacar al perro?", "Can you take the dog out? / Can you walk the dog? (tú)", "E", "translations"],
];

export const NOTES = [
  {
    tab: "Verbs",
    h: "1 · Salir and beber",
    blocks: [
      { t: "lead", v: "Salir, \"to go out, to leave\", and beber, \"to drink\", follow the regular pattern, except *salgo*, \"I go out\"." },
      { t: "table", bold: 1, caption: "Salir",
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "salgo", "salí"],
          ["tú", "sales", "saliste"],
          ["él / ella / usted", "sale", "salió"],
          ["nosotros", "salimos", "salimos"],
          ["ellos / ellas / ustedes", "salen", "salieron"],
        ]},
      { t: "table", bold: 1, caption: "Beber",
        cols: ["Person", "Present", "Preterite"],
        rows: [
          ["yo", "bebo", "bebí"],
          ["tú", "bebes", "bebiste"],
          ["él / ella / usted", "bebe", "bebió"],
          ["nosotros", "bebemos", "bebimos"],
          ["ellos / ellas / ustedes", "beben", "bebieron"],
        ]},
      { t: "sub", v: "Salir de" },
      { t: "note", v: "Use salir on its own, or with de before the place you leave: *salió del trabajo a las seis*, \"he left work at six\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Anoche no salí", "I didn't go out last night"],
        ["Ella sale todos los fines de semana", "She goes out every weekend"],
      ]},
      { t: "sub", v: "Sacar: to take out" },
      { t: "note", v: "To take a thing or an animal out, use sacar: *hay que sacar la basura*, \"you have to take out the trash\"; *saqué al perro*, \"I took the dog out\"." },
      { t: "note", v: "Sacar is regular, except that in the preterite yo writes *saqué*, \"I took out\"." },
      { t: "sub", v: "Tomar or beber?" },
      { t: "note", v: "In Mexico, people say tomar for drinks more than beber, which sounds a little formal: *tomo café todas las mañanas*, \"I drink coffee every morning\"; *¿qué quieres tomar?*, \"what do you want to drink?\"." },
      { t: "note", v: "Tomar on its own means \"to drink alcohol\": *¿tomas? No, no tomo*, \"do you drink? No, I don't drink\"." },
    ],
  },
  {
    tab: "Articles",
    h: "2 · With an article or without",
    blocks: [
      { t: "lead", v: "Spanish chooses the article by meaning, even where English has none: *como pan*, \"I eat bread\", but *me encanta el queso*, \"I love cheese\"." },
      { t: "table", bold: 1,
        cols: ["Meaning", "Spanish", "English"],
        rows: [
          ["Some, an amount", "Como pan · Bebo agua", "I eat bread · I drink water"],
          ["The thing in general", "Me encanta el queso", "I love cheese"],
          ["One particular thing", "El pescado estaba delicioso", "The fish was delicious"],
          ["One you count", "¿Quieres un café?", "Do you want a coffee?"],
        ]},
      { t: "note", v: "With a plural, unos or unas is fine too: *compré huevos* or *compré unos huevos*, \"I bought eggs\"." },
      { t: "sub", v: "Gustar, encantar, preferir" },
      { t: "note", v: "These talk about the thing in general, so they take el, la, los or las: *no me gustan las verduras*, \"I don't like vegetables\"; *prefiero el té*, \"I prefer tea\"." },
      { t: "note", v: "When another verb follows, the noun goes with that verb, with no article for an amount: *me gusta comer queso*, \"I like eating cheese\"." },
      { t: "sub", v: "Hay" },
      { t: "note", v: "Hay never takes el, la, los or las: *¿hay sal?*, \"is there any salt?\"; *hay tomates en la mesa*, \"there are tomatoes on the table\"." },
      { t: "sub", v: "El agua" },
      { t: "note", v: "Agua is feminine but takes el in the singular: *el agua es muy importante*, \"water is very important\". A word that goes with it is feminine: *el agua fría*, \"cold water\"; *mucha agua*, \"a lot of water\"." },
    ],
  },
  {
    tab: "Mucho",
    h: "3 · Mucho, poco, demasiado, bastante",
    blocks: [
      { t: "lead", v: "Mucho, poco, demasiado and bastante go straight before the noun, with no de, and change their ending to match it: *mucha agua*, \"a lot of water\"." },
      { t: "table", bold: 0, dense: true,
        cols: ["Spanish", "Masc.", "Fem.", "Masc. plural", "Fem. plural"],
        rows: [
          ["mucho, a lot of", "mucho queso", "mucha agua", "muchos huevos", "muchas verduras"],
          ["poco, not much", "poco pan", "poca sal", "pocos amigos", "pocas cosas"],
          ["demasiado, too much", "demasiado vino", "demasiada carne", "demasiados tacos", "demasiadas cosas"],
          ["bastante, enough", "bastante arroz", "bastante comida", "bastantes tomates", "bastantes personas"],
        ]},
      { t: "note", v: "Bastante changes only in the plural, where it adds an -s: *bastantes amigos*, \"quite a lot of friends\"." },
      { t: "note", v: "Gente, \"people\", is one feminine word: *hay mucha gente*, \"there are a lot of people\"." },
      { t: "note", v: "After a verb, these words never change: *comí mucho*, \"I ate a lot\"; *bebí demasiado*, \"I drank too much\"." },
      { t: "sub", v: "Un poco de" },
      { t: "note", v: "*Un poco de*, \"a little\", keeps its de and never changes: *un poco de sal*, \"a little salt\". Compare *poca sal*, \"not much salt\"." },
    ],
  },
  {
    tab: "Muy",
    h: "4 · Muy or mucho?",
    blocks: [
      { t: "lead", v: "Muy, \"very\", goes before a describing word like rico or bien and never changes; mucho goes after a verb, or before a noun, matching it." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["El pescado está muy rico", "The fish is very tasty"],
        ["Hablas muy bien", "You speak very well"],
        ["Me gusta mucho", "I like it a lot"],
        ["Llueve mucho", "It rains a lot"],
        ["Comí mucha fruta", "I ate a lot of fruit"],
        ["Tengo muchos amigos", "I have a lot of friends"],
      ]},
      { t: "note", v: "\"Very much\" is mucho, never muy mucho: *me gusta mucho*, \"I like it very much\"." },
      { t: "note", v: "Hambre, sed, frío and calor are nouns, so \"very\" is mucho, matching the noun: *tengo mucha sed*, \"I'm very thirsty\"; *hace mucho frío*, \"it's very cold\"." },
      { t: "note", v: "**The trap:** \"I'm very hungry\" is *tengo mucha hambre*, never muy hambre." },
    ],
  },
  {
    tab: "Hunger",
    h: "5 · I'm hungry, I'm thirsty",
    blocks: [
      { t: "lead", v: "To say \"I'm hungry\" and \"I'm thirsty\", Spanish uses tener: *tengo hambre*, \"I'm hungry\"; *tengo sed*, \"I'm thirsty\"." },
      { t: "note", v: "Hambre and sed are feminine, so \"very\" is mucha: *tengo mucha hambre*, \"I'm very hungry\"." },
      { t: "note", v: "For how you felt in the past, use the imperfect: *tenía mucha sed*, \"I was very thirsty\"." },
      { t: "sub", v: "Ya no" },
      { t: "note", v: "*Ya no* before a verb means \"not … anymore\": *ya no tenía hambre*, \"I wasn't hungry anymore\"; *ya no como carne*, \"I don't eat meat anymore\"." },
    ],
  },
  {
    tab: "Meals",
    h: "6 · Meals",
    blocks: [
      { t: "lead", v: "In Mexico the meals are el desayuno, \"breakfast\", la comida, \"lunch\", the main meal, eaten between about two and four, and la cena, \"dinner\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["¿Qué desayunaste hoy?", "What did you have for breakfast today?"],
        ["¿Qué comiste?", "What did you have for lunch?"],
        ["Anoche cené en casa", "Last night I had dinner at home"],
      ]},
      { t: "note", v: "La comida also means \"food\": *la comida mexicana*, \"Mexican food\"." },
      { t: "sub", v: "Courses" },
      { t: "note", v: "For the parts of a meal, say *de entrada*, \"for starters\", *de plato fuerte*, \"for the main course\", and *de postre*, \"for dessert\": *de postre, comí fruta*, \"for dessert, I had fruit\"." },
      { t: "sub", v: "It tastes good" },
      { t: "note", v: "For how a dish tastes, use estar: *¡el pescado está delicioso!*, \"the fish is delicious!\". For a kind of food in general, use ser: *la comida mexicana es deliciosa*, \"Mexican food is delicious\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion19",
  title: "Lesson 19 · Food",
  subtitle: "Salir and beber, food with or without an article, mucho and muy, hunger and thirst, and meals",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in: the two verbs first; then her
  // word list, before any card that needs its words (the article cards need
  // each noun's el or la, and mucha agua needs agua's gender); hunger before
  // muy or mucho, which asks "Tengo ___ hambre"; then her grammar in order.
  teachingOrder: [
    "salir", "beber",
    "vocab",
    "hunger",
    "salirsacar", "tomar",
    "articles", "quantity", "muymucho",
    "translations",
  ],
  // The drills get their line from their shape ("Present tense, yo form").
  // Phrase and word cards carry no line.
  instructions: {
    salirsacar: "Fill the gap with salir or sacar, in the present or the preterite",
    articles: "Fill the gap with the word given, adding an article only where one belongs",
    quantity: "Add the word after the arrow to the sentence, in the form that fits",
    muymucho: "Fill the gap with one of the two words, in the form that fits",
  },
};

export default LESSON;
