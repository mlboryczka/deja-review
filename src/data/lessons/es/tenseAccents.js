// The Spanish words whose accent counts when an answer is marked (owner,
// 2026-10-26: "the accents shouldn't be a criteria for marking something
// incorrect, unless the word NEEDS the accent (for instance to determine the
// proper tense)"): each is a verb form spelled like another form of the same
// verb but for an accent, "habló" (he spoke) and "hablo" (I speak), "hablé"
// and "hable", "hablará" and "hablara". Any other accent, and the ñ, is
// forgiven (src/lib/spanishAccents.js).
//
// Made by scripts/tense-accents.mjs from Fred Jehle's Spanish verb
// conjugation database (CC BY-NC-SA 3.0) and the words of the Spanish lessons
// and exercises. Run it again when they change.

export const TENSE_ACCENT_WORDS = new Set([
  "abordé", "acabé", "acabo", "arreglé", "ayudo", "ayudó", "bañé", "baño",
  "busco", "buscó", "busque", "busqué", "calle", "cambio", "cambió", "camino",
  "case", "caso", "cause", "cené", "cenó", "cociné", "cocino", "compare",
  "compré", "compro", "compró", "conteste", "contesté", "contesto", "contestó",
  "corto", "cree", "creo", "cruzo", "curé", "dejé", "dejó", "desayuné",
  "desayuno", "desayunó", "descansé", "descanso", "deseo", "duché", "duro",
  "empleo", "encantó", "enfermo", "engordé", "enseñé", "enseño", "enseñó",
  "entró", "envié", "equivocó", "equivoqué", "escuché", "escucho", "espere",
  "esperé", "espero", "esperó", "estudié", "estudio", "estudió", "explico",
  "explicó", "explique", "expliqué", "gusto", "gustó", "hable", "hablé",
  "hablo", "habló", "imagine", "imagino", "intenté", "invite", "invité",
  "invito", "junto", "lavé", "lavo", "levanté", "levanto", "llamé", "llamo",
  "llamó", "llego", "llegó", "llegue", "llegué", "llevé", "llevo", "llevó",
  "mandé", "mando", "mandó", "manejé", "manejó", "maquillé", "maquillo",
  "marco", "mire", "miré", "molesto", "necesito", "note", "olvidé", "olvido",
  "olvidó", "pago", "pagué", "pasé", "paso", "pasó", "peleé", "peleó",
  "perdone", "peso", "pregunté", "pregunto", "preguntó", "preocupe", "preparé",
  "presente", "quedé", "quedo", "quite", "reemplazo", "regalo", "regresé",
  "regresó", "repaso", "revisé", "saco", "salvo", "saqué", "tarde", "tardé",
  "terminé", "tomé", "tomo", "tomó", "trabajé", "trabajo", "trabajó", "traté",
  "trato", "trató", "use", "viaje", "viajé", "visité", "visito", "visitó",
]);
