// The irregular verb forms of the Spanish lessons, word by word (owner,
// 2026-10-25). The verb tables went from the flashcards with every other
// grammar card ("the flashcards module for the spanish section should be all
// words and phrases, no grammar"), and each of their irregular forms is now
// learned inside a phrase instead: a phrase card was added for each one that
// no card had, in its lesson's "verbforms" section.
//
// A phrase card forgives a slip of a letter or two, and that let the wrong
// form of a verb through: "Ayer poní la computadora en la sala" passed for
// "Ayer puse…", and "vi la tele" for "veía la tele". So when Spanish is typed,
// a word of the answer that is on this list must be typed exactly, accents
// included, while a slip anywhere else in the sentence is still forgiven
// (exactWords.js, with the numbers and months held exact the same way).
//
// "Irregular" is any form the infinitive's regular endings don't give, accents
// counted: stem changes (duermo, pide), spellings (busqué, leyó), and estar's
// accents (está). Taken from the drills as they were on 2026-10-25, every
// answer each one accepted, without the pronouns and "no" around them.

export const IRREGULAR_FORMS = new Set([
  "acuerda", "acuerdan", "acuerdas", "acuerdo", "acuesta", "acuestan",
  "acuestas", "acuesto", "busque", "busqué", "conozco", "creyeron", "creyó",
  "di", "dice", "dicen", "dices", "diga", "digas", "digo", "dije", "dijeron",
  "dijiste", "dijo", "dio", "diría", "doy", "duerme", "duermen", "duermes",
  "duermo", "durmieron", "durmió", "empecé", "empiecen", "entiende",
  "entienden", "entiendes", "entiendo", "era", "éramos", "eran", "eras",
  "eres", "es", "escrito", "está", "están", "estás", "esté", "estoy",
  "estuve", "estuvo", "fue", "fueron", "fui", "fuimos", "fuiste", "hago",
  "harían", "has", "haz", "he", "hice", "hicieron", "hicimos", "hiciste",
  "hizo", "iba", "íbamos", "iban", "ibas", "leído", "leímos", "leíste",
  "levántate", "levántense", "levántese", "leyeron", "leyó", "llegue",
  "llegué", "oigo", "oímos", "oye", "oyen", "oyeron", "oyes", "oyó", "pide",
  "piden", "pides", "pidieron", "pidió", "pido", "podrías", "pon", "pondría",
  "pongo", "prefiere", "prefieren", "prefieres", "prefiero", "pudimos",
  "pudiste", "puede", "pueden", "puedes", "puedo", "puse", "pusieron",
  "pusimos", "pusiste", "puso", "querría", "quiere", "quieren", "quieres",
  "quiero", "quise", "quiso", "repite", "repitieron", "sabrías", "sal",
  "saldrían", "salgo", "sé", "seas", "sepa", "sigo", "siguió", "sirvió",
  "sirvo", "somos", "son", "soy", "supe", "supieron", "ten", "tendríamos",
  "tengo", "tiene", "tienen", "tienes", "traigo", "tuve", "tuvimos", "va",
  "vamos", "van", "vas", "vayas", "ve", "veía", "veíamos", "veían", "veías",
  "ven", "vendría", "vengo", "veo", "vi", "viene", "vienen", "vienes", "vine",
  "vinieron", "vinimos", "viniste", "vino", "vio", "viste", "visten",
  "vistes", "vistieron", "visto", "voy", "vuelva", "vuelve",
]);
