// Lección 13 · Conocer and poner — built from the Spanish course's Lección 13
// sheets (adapted from Laura Caufour's LFL METHOD): the lesson (a real estate
// agent shows a client an apartment in Guadalajara; grammar 1–5) and the
// exercise sheet. There is no answer key: every answer here was worked out
// as a Mexican Spanish teacher would give it.
//
// Students have had Lecciones 1–12 (among them saber, the -go verbs hago,
// pongo, salgo, traigo, tener que, the preterite, and reflexive verbs). No
// card asks for more.
//
// Each entry is [front, back, category, section]. The front is always the
// Spanish side.
//
// Card shapes:
//   "conocer (presente) → yo" / "conozco"           drill; the line above comes from the shape
//   "saber o conocer → Yo no ___ Monterrey"        choose the verb, conjugate it, add a if needed
//   "que o de → La sala tiene más ___ 20 metros cuadrados"   pick the word
//   "malo → Esta cocina es ___ que la otra"         the word given, changed to compare
//   "3 → El departamento está en el ___ piso"       first, second, third… (ex. 6)
//   two-way word (V) and phrase (E) cards for the ex. 3 list and the dialogue
//
// WHY SABER OR CONOCER, AND THE COMPARISONS, ARE ON EXACT CARDS. A phrase
// card is marked with typo tolerance: "Conozco dónde está" is far enough from
// "Sé dónde está", but "conozco Lucía" is two letters from "conozco a Lucía",
// "más grande de" two from "más grande que", and "en la ciudad" two from "de
// la ciudad". Each would pass as Close enough, and each is a mistake her
// lesson warns about. So those choices are exact gap cards, with the two
// words to choose from on the card.
//
// Sampled, not transcribed: each card teaches something no other card does.
//   - Conocer: the six present forms (irregular only with yo), and conocí
//     for its preterite, which often means "I met".
//   - Poner: the six preterite forms (puse, pusiste, puso…), and me puse for
//     ponerse with clothes. Its present is not drilled: Lección 9 has pongo
//     and pones, and the rest is regular; the answer card "¿Normalmente
//     pones tus zapatos en el clóset?" asks for pongo in a sentence.
//   - Ex. 2 (saber or conocer, 12 items): seven, one per point: saber +
//     dónde, cuánto, que and an infinitive; conocer + a place, and conocer a
//     + a person (twice: a name, and a la + a noun).
//   - Ex. 4 (comparisons, 14 sentences to translate): que or de after más,
//     que or como after tan, de for "in" after the best, and mejor, peor,
//     menor and la más pequeña, built from her sentences.
//   - Ex. 5 (necesitar, tener que, hay que, 14 sentences): hay que for
//     everyone, tener que for one person, and two phrase cards for
//     necesitar + noun and tener que + verb.
//   - Ex. 6 (ordinals, 12 items): every ordinal from first to tenth once,
//     plus tercera beside tercer, for the -o that drops before a masculine
//     noun. Her "Es la ___ vez" (2) is segunda; "La ___ recámara" (1) is left
//     out, since primer and tercera already show both points.
//   - Ex. 7 and 8 (answer yes or no, 36 items): conocer a, pongo with tus →
//     mis, me puse, me equivoqué (c → qu with yo), and no before saben.
//
// Not made into cards: ex. 1 (free writing), ex. 9 (translations, sampled in
// the phrase cards; most repeat other cards), ex. 10 (dictation), 11 and 12
// (oral answers).
//
// Vocabulary is her ex. 3 list, less what other cards teach or earlier
// lessons own: "new" (nuevo) is in Lecciones 3 and 7, "a lot of people"
// (mucha gente) in Lección 6; "better" and "much better" are the bueno
// card; "the third floor" is the ordinals; "to need" is necesitar (Lección
// 9 and the phrase card), and "I made a mistake" is the card "¿Te
// equivocaste? → no". Also left out: the cognates "to imagine", "the
// style", "exactly" and "open", and "to focus on", "without", "a lot of
// light" and "fully equipped".
//
// Where this departs from the sheet:
//   - Ex. 2 marks the person in brackets after some sentences: "(tú)",
//     "(yo)". The cards put the subject in the sentence ("¿Tú ___ dónde
//     está…?", "Yo no ___ cuánto mide la sala"), because the card asks for
//     the verb, and a bracket on the Spanish side is hidden when it repeats
//     a word of the answer.
//   - "que o de → Este departamento es menos caro ___ el otro", "yo o mí →
//     Mi hermano es más alto que ___" and "de o en → Es el mejor
//     restaurante ___ la ciudad" are her lesson's examples; "que o de → La
//     sala tiene más ___ 20 metros cuadrados" and "que o como → La recámara
//     es tan grande ___ la sala" are her ex. 4.
//   - "pequeño → Esta es la más grande y esa es la ___" is the dialogue's
//     line. "joven → Emilia es ___ que Hugo" accepts más joven as well as
//     her menor: both are right.
//   - "tener que o hay que → Mañana yo ___ trabajar" is not on her sheet; it
//     is the other half of her "Compara" note (tengo que decidir).
//   - "7 → Julio es el ___ mes del año" accepts sétimo, which the RAE also
//     allows, as well as séptimo.
//   - Her answers keep their whole sentence; the cards also accept the
//     answer without Sí or No, with and without yo or ellos where both are
//     natural, and la or lo for the thing named (Sí, la conozco; Sí, me lo
//     puse; No, no lo saben), which a teacher would accept.
//
// Checked 2026-10-22 by an independent reader: 6 fixes.
//
// Taken out on 2026-10-25, at the owner's word ("Yes, take the yes-or-no
// flashcards like "¿Eres estadounidense? → Sí, …" out of the Spanish lessons
// too"): the 5 cards that answered a question with yes or no in a full
// sentence (sections "yes" and "no").

export const CARDS = [
  // ── 1. Conocer: irregular only with yo
  ["conocer (presente) → yo", "conozco", "G", "conocer"],
  ["conocer (presente) → tú", "conoces", "G", "conocer"],
  ["conocer (presente) → él/ella", "conoce", "G", "conocer"],
  ["conocer (presente) → nosotros", "conocemos", "G", "conocer"],
  ["conocer (presente) → ustedes", "conocen", "G", "conocer"],
  ["conocer (presente) → ellos/ellas", "conocen", "G", "conocer"],
  ["conocer (pretérito) → yo", "conocí", "G", "conocer"],

  // ── 1. Poner: an irregular preterite, like tener and poder
  ["poner (pretérito) → yo", "puse", "G", "poner"],
  ["poner (pretérito) → tú", "pusiste", "G", "poner"],
  ["poner (pretérito) → él/ella", "puso", "G", "poner"],
  ["poner (pretérito) → nosotros", "pusimos", "G", "poner"],
  ["poner (pretérito) → ustedes", "pusieron", "G", "poner"],
  ["poner (pretérito) → ellos/ellas", "pusieron", "G", "poner"],
  ["ponerse (pretérito) → yo", "me puse", "G", "poner"],

  // ── The apartment (ex. 3), before the cards that use its words
  ["un departamento de dos recámaras", "a two-bedroom apartment", "V", "home"],
  ["una recámara", "a bedroom", "V", "home"],
  ["la sala", "the living room", "V", "home"],
  ["una cocina", "a kitchen", "V", "home"],
  ["el baño", "the bathroom", "V", "home"],
  ["un clóset", "a closet", "V", "home"],
  ["los muebles", "the furniture", "V", "home"],
  ["un metro cuadrado", "a square meter / a square metre", "V", "home"],
  ["el centro", "downtown / the city center / the town center", "V", "home"],
  ["la inmobiliaria", "the real estate agency", "V", "home"],
  ["un agente inmobiliario", "a real estate agent (masc.) / a realtor (masc.)", "V", "home"],
  ["en renta", "for rent", "V", "home"],

  // ── 2. Saber or conocer (ex. 2): saber for information, conocer for a
  //    person, a place or a thing, with a before a person
  ["saber o conocer → ¿Tú ___ dónde está la inmobiliaria?", "sabes", "G", "saberconocer"],
  ["saber o conocer → Yo no ___ cuánto mide la sala", "sé", "G", "saberconocer"],
  ["saber o conocer → Ellos no ___ que estoy aquí", "saben", "G", "saberconocer"],
  ["saber o conocer → Mi hijo ___ manejar", "sabe", "G", "saberconocer"],
  ["saber o conocer → Yo no ___ Monterrey", "conozco", "G", "saberconocer"],
  ["saber o conocer → Nosotros ___ Lucía desde hace dos años", "conocemos a", "G", "saberconocer"],
  ["saber o conocer → ¿Tú ___ la profesora de Jessica?", "conoces a", "G", "saberconocer"],

  // ── 3. Comparing: the word that goes with más, menos and tan
  ["que o de → Este departamento es menos caro ___ el otro", "que", "G", "compare"],
  ["que o de → La sala tiene más ___ 20 metros cuadrados", "de", "G", "compare"],    // de before a number
  ["que o como → La recámara es tan grande ___ la sala", "como", "G", "compare"],
  ["yo o mí → Mi hermano es más alto que ___", "yo", "G", "compare"],
  ["de o en → Es el mejor restaurante ___ la ciudad", "de", "G", "compare"],

  // ── Better, worse, younger, and the bigger one
  ["bueno → ¡Es mucho ___ que todo lo que vimos!", "mejor", "G", "irregular"],      // not más mejor
  ["malo → Esta cocina es ___ que la otra", "peor", "G", "irregular"],
  ["joven → Emilia es ___ que Hugo", "menor / más joven", "G", "irregular"],
  ["pequeño → Esta es la más grande y esa es la ___", "más pequeña", "G", "irregular"],

  // ── 4. To need: hay que for everyone, tener que for one person
  ["tener que o hay que → Para aprender español, ___ estudiar todos los días", "hay que", "G", "need"],
  ["tener que o hay que → Mañana yo ___ trabajar", "tengo que", "G", "need"],

  // ── 5. First to tenth (ex. 6)
  ["1 → Enero es el ___ mes del año", "primer", "G", "ordinals"],
  ["2 → Es la ___ vez que vengo a Guadalajara", "segunda", "G", "ordinals"],
  ["3 → El departamento está en el ___ piso", "tercer", "G", "ordinals"],
  ["3 → Es nuestra ___ semana en México", "tercera", "G", "ordinals"],
  ["4 → Este es el ___ departamento que visitamos hoy", "cuarto", "G", "ordinals"],
  ["5 → Mi oficina está en el ___ piso", "quinto", "G", "ordinals"],
  ["6 → Junio es el ___ mes del año", "sexto", "G", "ordinals"],
  ["7 → Julio es el ___ mes del año", "séptimo / sétimo", "G", "ordinals"],
  ["8 → Agosto es el ___ mes del año", "octavo", "G", "ordinals"],
  ["9 → Septiembre es el ___ mes del año", "noveno", "G", "ordinals"],
  ["10 → Lucía vive en el ___ piso", "décimo", "G", "ordinals"],

  // ── The rest of her ex. 3 list
  ["la computadora", "the computer", "V", "words"],
  ["comprar", "to buy", "V", "words"],
  ["equivocarse", "to make a mistake / to be wrong", "V", "words"],
  ["dejar", "to leave (something)", "V", "words"],
  ["llegar tarde", "to be late / to arrive late", "V", "words"],
  ["más tarde", "later", "V", "words"],
  ["hasta ahora", "so far / until now", "V", "words"],
  ["¿verdad?", "is that right? / right?", "V", "words"],
  ["a ver…", "let's see…", "V", "words"],

  // ── Phrases from the dialogue and her ex. 5 and 9
  ["Necesito un agente inmobiliario", "I need a real estate agent", "E", "phrases"],
  ["Tengo que salir ahora", "I need to leave now / I have to leave now (with tener que)", "E", "phrases"],
  ["Me pongo los lentes", "I put on my glasses / I'm putting on my glasses", "E", "phrases"],
  ["Le marco más tarde", "I'll call you later (usted) / I'll call him later / I'll call her later", "E", "phrases"],
  ["No sé cuánto mide", "I don't know how big it is", "E", "phrases"],
  ["¿Conoces Guadalajara?", "Have you been to Guadalajara? / Do you know Guadalajara? (tú)", "E", "phrases"],
];

// The notes: her grammar sections 1 to 5, in English, restructured to the
// notes rules in .claude/skills/building-lessons/SKILL.md. Five tabs:
//   Forms      her section 1: conocer and poner, ponerse with clothes,
//              conocí as "I met", answering yes and no
//   Saber      her section 2: saber or conocer, and conocer a
//   Compare    her section 3: más, menos, tan, más de with a number,
//              mejor, peor, mayor, menor, and "the biggest"
//   Need       her section 4: necesitar, tener que, hay que
//   Ordinals   her section 5
// Left out: her pointers to other lessons; "supe la verdad" (Lección 9's);
// the Mexican planta baja and primer piso (no card needs them); "the accent"
// remarks (accents are not checked).
//
// Sentences that are not hers, kept because cards need them:
//   - Forms, "Answering": both notes. Her ex. 7 and 8 ask for tus → mis, and
//     for no before me; her lesson never says it, and the c → qu of
//     equivoqué is her Lección 8 rule, said here where a card needs it.
//   - Compare: "*más joven* says the same", for the card that accepts it;
//     "In the best, the biggest…, "in" is de" (her example el mejor
//     restaurante de la ciudad, with the rule said).
//   - Ordinals: "they match the noun like any adjective" is her
//     "concuerdan", said with an example.
export const NOTES = [
  {
    tab: "Forms",
    h: "1 · Conocer and poner",
    blocks: [
      { t: "lead", v: "Conocer, \"to know\", is irregular only with yo, *conozco*, \"I know\", and poner, \"to put\", has an irregular preterite: *puse*, \"I put\"." },
      { t: "table", bold: 0,
        cols: ["Person", "conocer · present", "poner · preterite"],
        rows: [
          ["yo", "conozco", "puse"],
          ["tú", "conoces", "pusiste"],
          ["usted, él, ella", "conoce", "puso"],
          ["nosotros", "conocemos", "pusimos"],
          ["ustedes, ellos, ellas", "conocen", "pusieron"],
        ]},
      { t: "note", v: "In the present, poner ends in -go with yo, *pongo*, \"I put\", and its other forms are regular: *pones*, \"you put\"; *pone*, \"he puts\"." },
      { t: "note", v: "The preterite of conocer is regular, and it often means \"to meet\" for the first time: *conocí a mi esposa en Guadalajara*, \"I met my wife in Guadalajara\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Puse la camisa en el clóset", "I put the shirt in the closet"],
        ["Aquí puede poner una cama matrimonial", "You can put a double bed here"],
      ]},
      { t: "sub", v: "Putting on clothes" },
      { t: "note", v: "For clothes, use ponerse, with me, te, se…, and el, la, los or las instead of mi or mis: *me pongo los lentes*, \"I put on my glasses\"; *ayer me puse el vestido rojo*, \"yesterday I wore the red dress\"." },
      { t: "sub", v: "Answering" },
      { t: "note", v: "Answer a question with tú using yo, and change tus (\"your\") to mis (\"my\"): *¿Normalmente pones tus zapatos en el clóset?* → *Sí, normalmente pongo mis zapatos en el clóset*, \"Do you usually put your shoes in the closet? Yes, I usually put my shoes in the closet\"." },
      { t: "note", v: "To answer no, say no twice: at the start, and again just before the verb, or before me, te or se if it has one: *¿Te equivocaste?* → *No, no me equivoqué*, \"Did you make a mistake? No, I didn't make a mistake\". With yo, equivocarse writes qu: *me equivoqué*." },
    ],
  },
  {
    tab: "Saber",
    h: "2 · Saber or conocer?",
    blocks: [
      { t: "lead", v: "Saber and conocer both mean \"to know\": saber is for a piece of information, and conocer for a person, a place or a thing." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["No sabe que llegué", "He doesn't know I arrived"],
          ["¿Sabes dónde está la inmobiliaria?", "Do you know where the agency is?"],
          ["No sé cuánto mide", "I don't know how big it is"],
          ["Sé manejar", "I know how to drive"],
          ["Conozco un restaurante muy bueno", "I know a very good restaurant"],
          ["Conozco muy bien el centro", "I know downtown very well"],
          ["¿Conoces Guadalajara?", "Have you been to Guadalajara?"],
        ]},
      { t: "note", v: "Use saber before que, dónde, cuánto, por qué or cómo and the rest of the sentence: *¿sabes dónde vive Lucía?*, \"do you know where Lucía lives?\"." },
      { t: "note", v: "Use saber before a verb in its dictionary form to say \"know how to\": *mi hijo sabe manejar*, \"my son knows how to drive\"." },
      { t: "note", v: "Use conocer before a name or a noun: *conozco el centro*, \"I know downtown\"." },
      { t: "sub", v: "conocer a" },
      { t: "note", v: "**The trap:** with a person, put a after conocer: *conozco a Lucía*, \"I know Lucía\", not conozco Lucía. A and el make al: *¿conoces al agente?*, \"do you know the agent?\"." },
    ],
  },
  {
    tab: "Compare",
    h: "3 · Comparing",
    blocks: [
      { t: "lead", v: "To compare two people or things, put más, menos or tan before the word, and que or como after it: *más grande que*, \"bigger than\"." },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["más … que", "more … than, …er than"],
          ["menos … que", "less … than"],
          ["tan … como", "as … as"],
        ]},
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["La sala es más grande que la del departamento de ayer", "The living room is bigger than the one in yesterday's apartment"],
        ["Este departamento es menos caro que el otro", "This apartment is less expensive than the other one"],
        ["La recámara es tan grande como la sala", "The bedroom is as big as the living room"],
        ["Hay más luz que en el otro departamento", "There's more light than in the other apartment"],
      ]},
      { t: "note", v: "After que and como, say yo and tú: *mi hermano es más alto que yo*, \"my brother is taller than me\"." },
      { t: "sub", v: "más de with a number" },
      { t: "note", v: "Before a number, más and menos take de, not que: *la sala tiene más de 20 metros cuadrados*, \"the living room is more than 20 square meters\"." },
      { t: "sub", v: "Better, worse, older, younger" },
      { t: "table", bold: 0,
        cols: ["Spanish", "English"],
        rows: [
          ["bueno, bien → mejor", "better"],
          ["malo, mal → peor", "worse"],
          ["mayor", "older"],
          ["menor", "younger"],
        ]},
      { t: "note", v: "Mejor and peor never take más: *es mucho mejor*, \"it's much better\", not más mejor." },
      { t: "note", v: "*Emilia es menor que Hugo*, \"Emilia is younger than Hugo\"; *más joven* says the same." },
      { t: "sub", v: "The biggest" },
      { t: "note", v: "To say \"the biggest\", put el, la, los or las before más: *la recámara más grande* or *la más grande*, \"the biggest bedroom\" or \"the biggest one\"." },
      { t: "note", v: "Spanish says the same for \"the bigger one\" of two: *esta es la más grande y esa es la más pequeña*, \"this is the bigger one and that's the smaller one\"." },
      { t: "note", v: "In \"the best\", \"the biggest\"…, \"in\" is de: *el mejor restaurante de la ciudad*, \"the best restaurant in the city\"." },
    ],
  },
  {
    tab: "Need",
    h: "4 · To need, to have to",
    blocks: [
      { t: "lead", v: "Before a noun, \"to need\" is necesitar: *necesito un celular*, \"I need a cell phone\"." },
      { t: "note", v: "Before a verb, use necesitar or tener que; tener que is the most common: *tengo que salir* or *necesito salir*, \"I need to leave\"." },
      { t: "sub", v: "hay que" },
      { t: "note", v: "Hay que before a verb means \"you have to\" for everyone in general, not for one person, and it never changes: *para aprender español, hay que estudiar todos los días*, \"to learn Spanish, you need to study every day\"." },
      { t: "pairs", head: ["Spanish", "English"], v: [
        ["Tengo que decidir", "I have to decide"],
        ["Hay que decidir", "A decision has to be made"],
        ["Hay que imaginar todo sin los muebles", "You have to imagine everything without the furniture"],
      ]},
    ],
  },
  {
    tab: "Ordinals",
    h: "5 · First, second, third",
    blocks: [
      { t: "lead", v: "Each place from first to tenth has its own word, and it matches the noun like any adjective: *la segunda recámara*, \"the second bedroom\"." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["1st", "primero"],
          ["2nd", "segundo"],
          ["3rd", "tercero"],
          ["4th", "cuarto"],
          ["5th", "quinto"],
          ["6th", "sexto"],
          ["7th", "séptimo"],
          ["8th", "octavo"],
          ["9th", "noveno"],
          ["10th", "décimo"],
        ]},
      { t: "note", v: "Primero and tercero drop the -o before a masculine word: *el primer piso*, \"the first floor\"; *el tercer piso*, \"the third floor\". But *la tercera vez*, \"the third time\"." },
      { t: "note", v: "After tenth, use the ordinary numbers: *el piso doce*, \"the twelfth floor\"." },
    ],
  },
];

export const LESSON = {
  id: "leccion13",
  title: "Lesson 13 · Conocer and poner",
  subtitle: "Conocer and poner, saber or conocer, comparing, to need, and first to tenth",
  source: "Adapted from the LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). The two
  // verbs first; then the apartment words, since nearly every card after
  // them is about the apartment (la inmobiliaria, la sala, la recámara, el
  // clóset). Then her grammar in her order, each section followed by the
  // cards that practise it: saber or conocer, and the answers, which need
  // both verbs and poner; comparing; to need; first to tenth. The other
  // words and the phrases come last.
  teachingOrder: [
    "conocer", "poner",
    "home",
    "saberconocer",
    "compare", "irregular",
    "need",
    "ordinals",
    "words", "phrases",
  ],
  // The line shown above a grammar card saying what to type
  // (src/lib/cardInstruction.js). The drills get theirs from their shape.
  instructions: {
    // Doesn't name the two verbs: they are on the card.
    saberconocer: "Fill the gap with the right verb in the present, adding a where it's needed",
    compare: "Fill the gap with the right one of the two",
    irregular: "Fill the gap with the word given, changed to compare",
    need: "Fill the gap with the right one of the two, in the form that fits",
    ordinals: "Fill the gap with the number as a word: first, second, third…",
  },
};

export default LESSON;
