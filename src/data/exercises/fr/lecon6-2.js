// Leçon 6, partie 2 · L'accord de l'adjectif — the written exercises of
// "EXERCICES - Leçon 6 - Partie 2", for the Exercises page. Her "CORRECTION
// EXERCICES - Leçon 6 - Partie 2" gives every answer; the also lists are
// written for the app.
// Left out: ex. 1, 2 (a sentence of your own with each form of COMPRENDRE and
// APPRENDRE), ex. 4, 5 (yes and no answers in a full sentence), ex. 6 (writing
// the question), ex. 9 (answering questions about the text in a sentence),
// ex. 10 (dictation) and ex. 11, 12 (oral answers): they need her audio.
// Notes:
//   - Ex. 3 asks for any adjective that fits, so her answer is one of several.
//     The gaps list hers first, then a few other common ones from Leçon 6;
//     Claude marks any other adjective. No. 2 takes intelligente and
//     travailleuse in either order (her text: "très intelligente et
//     travailleuse"; her key: "travailleuse et intelligente").
//   - Ex. 7: where her sheet gives an adjective with no "(masc. & fém.)" and
//     her key gives both forms ("doux, douce"), the masculine alone is
//     accepted too. Where both forms are the same ("timide, timide"), one is
//     enough.
//   - Ex. 8 no. 4: her English "When do you work at your office ?" has a space
//     before the question mark, taken out here.

export default {
  id: "lecon6-2",
  exercises: [
    {
      n: 3,
      title: "Grammaire",
      instruction: "Compléter avec un adjectif.",
      english: "Fill each gap with an adjective that fits, in the form its noun needs: masculine or feminine, singular or plural.",
      items: [
        { prompt: "Léa a les yeux ___.", gaps: [["bleus"]] },
        { prompt: "Elle est très ___ et ___.",
          gaps: [["travailleuse", "intelligente", "gentille", "douce"], ["intelligente", "travailleuse", "gentille", "douce"]] },
        { prompt: "Maxime est toujours de ___ humeur.", gaps: [["bonne"]] },
        { prompt: "Les ___ jours, elle travaille dans son cabinet.", gaps: [["autres"]] },
        { prompt: "Jessica porte une chemise ___.", gaps: [["blanche", "bleue"]] },
        { prompt: "La photo est très ___.", gaps: [["grande", "belle", "petite"]] },
        { prompt: "Tu veux découvrir de ___ pays ?", gaps: [["nouveaux", "beaux"]] },
        { prompt: "Je vais cuisiner un ___ repas.", gaps: [["bon", "grand", "petit"]] },
        { prompt: "Les ___ filles aiment faire du sport.", gaps: [["petites", "grandes", "jeunes"]] },
        { prompt: "Elle est très ___ mais son frère est très ___.",
          gaps: [["généreuse", "gentille", "sociable"], ["égoïste", "timide"]] },
        { prompt: "Maxime est spécialisé dans les documentaires ___.", gaps: [["culturels"]] },
        { prompt: "Léa a les cheveux ___.", gaps: [["blonds"]] },
        { prompt: "J'adore apprendre de ___ choses.", gaps: [["nouvelles"]] },
        { prompt: "Le médecin adore ses patients et il est très ___.", gaps: [["gentil", "doux", "généreux", "sympa"]] },
        { prompt: "La plage est très ___.", gaps: [["grande", "belle", "petite"]] },
      ],
    },
    {
      n: 7,
      title: "Traduction",
      instruction: "Comment on dit … en français ?",
      english: "Say each word or phrase in French. Where it says masc. & fém., give both forms.",
      items: [
        { prompt: "on Mondays", answer: "le lundi" },
        { prompt: "shy (masc. & fém.)", answer: "timide, timide", also: ["timide"] },
        { prompt: "to cook", answer: "cuisiner" },
        { prompt: "blond (masc. & fém.)", answer: "blond, blonde" },
        { prompt: "to exercise", answer: "faire du sport" },
        { prompt: "smart (masc. & fém.)", answer: "intelligent, intelligente" },
        { prompt: "hair", answer: "les cheveux", also: ["des cheveux"] },
        { prompt: "other (masc. & fém.)", answer: "autre, autre", also: ["autre"] },
        { prompt: "a meal", answer: "un repas" },
        { prompt: "the hospital", answer: "l'hôpital" },
        { prompt: "a job", answer: "un travail", also: ["un emploi", "un métier", "un boulot"] },
        { prompt: "when", answer: "quand" },
        { prompt: "tiring", answer: "fatigant" },
        { prompt: "too / too much", answer: "trop" },
        { prompt: "kind (masc. & fém.)", answer: "gentil, gentille" },
        { prompt: "the eyes", answer: "les yeux" },
        { prompt: "on Tuesdays", answer: "le mardi" },
        { prompt: "a doctor's office", answer: "un cabinet", also: ["un cabinet médical"] },
        { prompt: "hard working (masc. & fém.)", answer: "travailleur, travailleuse" },
        { prompt: "gentle/soft", answer: "doux, douce", also: ["doux"] },
        { prompt: "to stay", answer: "rester" },
        { prompt: "to read", answer: "lire" },
        { prompt: "white (masc. & fém.)", answer: "blanc, blanche" },
        { prompt: "the other days", answer: "les autres jours" },
      ],
    },
    {
      n: 8,
      title: "Traduction niveau 2",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French.",
      items: [
        { prompt: "I don't understand why she doesn't like to exercise.", answer: "Je ne comprends pas pourquoi elle n'aime pas faire du sport." },
        { prompt: "They are blond and they have blue eyes.", answer: "Ils sont blonds et ils ont les yeux bleus.",
          also: ["Elles sont blondes et elles ont les yeux bleus."] },
        { prompt: "I prefer to work at the hospital.", answer: "Je préfère travailler à l'hôpital." },
        { prompt: "When do you work at your office?", answer: "Quand tu travailles dans ton cabinet ?",
          also: ["Tu travailles quand dans ton cabinet ?", "Quand est-ce que tu travailles dans ton cabinet ?", "Quand tu travailles à ton cabinet ?",
            "Quand vous travaillez dans votre cabinet ?", "Quand est-ce que vous travaillez dans votre cabinet ?"] },
        { prompt: "I think that he's very smart but he's too shy.", answer: "Je pense qu'il est très intelligent mais il est trop timide.",
          also: ["Je pense qu'il est très intelligent mais qu'il est trop timide."] },
        { prompt: "The other days, I like to stay at home.", answer: "Les autres jours, j'aime rester à la maison." },
        { prompt: "I work too much but I love my job!", answer: "Je travaille trop mais j'adore mon travail." },
        { prompt: "I'm 165 cm tall and I'm wearing a white shirt.", answer: "Je fais un mètre soixante-cinq et je porte une chemise blanche.",
          also: ["Je fais 1 mètre 65 et je porte une chemise blanche.", "Je fais 1m65 et je porte une chemise blanche."] },
        { prompt: "Her daughter is a doctor.", answer: "Sa fille est médecin." },
        { prompt: "They don't like to exercise, they think it's too tiring.", answer: "Ils n'aiment pas faire du sport, ils pensent que c'est trop fatigant.",
          also: ["Elles n'aiment pas faire du sport, elles pensent que c'est trop fatigant."] },
        { prompt: "Her husband and children are at home.", answer: "Son mari et ses enfants sont à la maison." },
        { prompt: "My friends don't understand why I don't like to travel.", answer: "Mes amis ne comprennent pas pourquoi je n'aime pas voyager." },
        { prompt: "My husband works too much, he's always tired.", answer: "Mon mari travaille trop, il est toujours fatigué." },
        { prompt: "Don't you think it's the same thing?", answer: "Tu ne penses pas que c'est la même chose ?",
          also: ["Vous ne pensez pas que c'est la même chose ?"] },
        { prompt: "Are you guys going to cook for the whole family?", answer: "Vous allez cuisiner pour toute la famille ?",
          also: ["Est-ce que vous allez cuisiner pour toute la famille ?"] },
      ],
    },
  ],
};
