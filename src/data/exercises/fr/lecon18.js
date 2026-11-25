// Leçon 18 · Répondre, partir, déjà, pas encore et jamais — the written
// exercises of "EXERCICES - Leçon 18", for the Exercises page. She has no
// answer key: every answer here was written for the app, as a French teacher
// would mark it, with the words of her lesson and the cards of
// src/data/lessons/lecon18.js (habiter for "lived", médicaments for her
// "drugs" about an illness, "Comment va ta santé").
// Left out: ex. 1 (sentences of your own with répondre and partir), ex. 3, 4
// (no in a full sentence, with pas encore and with jamais), ex. 5 (answering
// truthfully), ex. 7–10 (dictation and oral: they need her audio).
// Questions use intonation, as her course does; tu is the answer where the
// English doesn't say who, with vous accepted. With être, a woman's
// participle (allée, partie) is accepted too.
// Typo corrected: her English in ex. 6 no. 18 has "I didn't answered her"
// (answer). Her ex. 6 no. 12, "I've worked a lot last week", is kept as she
// wrote it: the French is the passé composé either way.
// Ex. 2 no. 6, "Have you ever taken drugs?": in English it asks about illegal
// drugs (de la drogue), but her "drugs" in ex. 6 nos. 20 and 26 means
// médicaments, so both are accepted.

export default {
  id: "lecon18",
  exercises: [
    {
      n: 2,
      title: "Grammaire et traduction",
      instruction: "Traduire les phrases suivantes au passé composé en utilisant « déjà ».",
      english: "Translate each question into French in the passé composé with déjà (ever, already), which goes between the auxiliary and the participle.",
      items: [
        { prompt: "Have you ever been to Italy?", answer: "Tu es déjà allé en Italie ?",
          also: ["Tu es déjà allée en Italie ?", "Tu as déjà été en Italie ?", "Vous êtes déjà allé en Italie ?", "Est-ce que tu es déjà allé en Italie ?"] },
        { prompt: "Have you ever seen a lion?", answer: "Tu as déjà vu un lion ?",
          also: ["Vous avez déjà vu un lion ?", "Est-ce que tu as déjà vu un lion ?"] },
        { prompt: "Have you ever been sick?", answer: "Tu as déjà été malade ?",
          also: ["Vous avez déjà été malade ?", "Est-ce que tu as déjà été malade ?"] },
        { prompt: "Have you ever eaten French bread?", answer: "Tu as déjà mangé du pain français ?",
          also: ["Vous avez déjà mangé du pain français ?", "Est-ce que tu as déjà mangé du pain français ?"] },
        { prompt: "Have you ever had that?", answer: "Tu as déjà eu ça ?",
          also: ["Vous avez déjà eu ça ?", "Est-ce que tu as déjà eu ça ?"] },
        { prompt: "Have you ever taken drugs?", answer: "Tu as déjà pris de la drogue ?",
          also: ["Tu as déjà pris des drogues ?", "Tu as déjà pris des médicaments ?", "Vous avez déjà pris de la drogue ?"] },
        { prompt: "Have you ever read a book in French?", answer: "Tu as déjà lu un livre en français ?",
          also: ["Vous avez déjà lu un livre en français ?", "Est-ce que tu as déjà lu un livre en français ?"] },
        { prompt: "Have you ever heard that?", answer: "Tu as déjà entendu ça ?",
          also: ["Vous avez déjà entendu ça ?", "Est-ce que tu as déjà entendu ça ?"] },
        { prompt: "Have you ever lived in another country?", answer: "Tu as déjà habité dans un autre pays ?",
          also: ["Tu as déjà vécu dans un autre pays ?", "Vous avez déjà habité dans un autre pays ?", "Est-ce que tu as déjà habité dans un autre pays ?"] },
        { prompt: "Have you already eaten?", answer: "Tu as déjà mangé ?", also: ["Vous avez déjà mangé ?"] },
        { prompt: "Have you already called the doctor?", answer: "Tu as déjà appelé le médecin ?",
          also: ["Tu as déjà téléphoné au médecin ?", "Vous avez déjà appelé le médecin ?"] },
        { prompt: "Have you already finished?", answer: "Tu as déjà fini ?", also: ["Tu as déjà terminé ?", "Vous avez déjà fini ?"] },
        { prompt: "Have you already left?", answer: "Tu es déjà parti ?",
          also: ["Tu es déjà partie ?", "Vous êtes déjà parti ?", "Vous êtes déjà partis ?"] },
        { prompt: "Have you already read this book?", answer: "Tu as déjà lu ce livre ?", also: ["Vous avez déjà lu ce livre ?"] },
        { prompt: "Have you already gone to the doctor?", answer: "Tu es déjà allé voir le médecin ?",
          also: ["Tu es déjà allée voir le médecin ?", "Tu es déjà allé chez le médecin ?", "Tu es déjà allée chez le médecin ?", "Vous êtes déjà allé voir le médecin ?"] },
        { prompt: "Have you already started?", answer: "Tu as déjà commencé ?", also: ["Vous avez déjà commencé ?"] },
        { prompt: "Have you answered him already?", answer: "Tu lui as déjà répondu ?",
          also: ["Vous lui avez déjà répondu ?", "Est-ce que tu lui as déjà répondu ?"] },
        { prompt: "Have you already bought vegetables?", answer: "Tu as déjà acheté des légumes ?", also: ["Vous avez déjà acheté des légumes ?"] },
        { prompt: "Have you already gone out?", answer: "Tu es déjà sorti ?",
          also: ["Tu es déjà sortie ?", "Vous êtes déjà sorti ?", "Vous êtes déjà sortis ?"] },
        { prompt: "Have you already arrived?", answer: "Tu es déjà arrivé ?",
          also: ["Tu es déjà arrivée ?", "Vous êtes déjà arrivé ?", "Vous êtes déjà arrivés ?"] },
      ],
    },
    {
      n: 6,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes.",
      english: "Translate each sentence into French. Never is ne … jamais and not yet ne … pas encore; in the passé composé both go round the auxiliary, and un, une, du or de la after them becomes de.",
      items: [
        { prompt: "I have never been to Paris.", answer: "Je ne suis jamais allé à Paris.",
          also: ["Je ne suis jamais allée à Paris.", "Je n'ai jamais été à Paris."] },
        { prompt: "I've never had bronchitis.", answer: "Je n'ai jamais eu de bronchite.", also: ["Je n'ai jamais fait de bronchite."] },
        { prompt: "Has she already left?", answer: "Elle est déjà partie ?", also: ["Est-ce qu'elle est déjà partie ?"] },
        { prompt: "I've already put on a little weight since Christmas.", answer: "J'ai déjà pris un peu de poids depuis Noël." },
        { prompt: "Maxime hasn't arrived yet.", answer: "Maxime n'est pas encore arrivé." },
        { prompt: "Have you already been to the pharmacy?", answer: "Tu es déjà allé à la pharmacie ?",
          also: ["Tu es déjà allée à la pharmacie ?", "Tu es déjà passé à la pharmacie ?", "Tu as déjà été à la pharmacie ?", "Vous êtes déjà allé à la pharmacie ?"] },
        { prompt: "Have you ever lived in another country?", answer: "Tu as déjà habité dans un autre pays ?",
          also: ["Tu as déjà vécu dans un autre pays ?", "Vous avez déjà habité dans un autre pays ?", "Est-ce que tu as déjà habité dans un autre pays ?"] },
        { prompt: "Have your children already arrived?", answer: "Tes enfants sont déjà arrivés ?",
          also: ["Vos enfants sont déjà arrivés ?", "Est-ce que tes enfants sont déjà arrivés ?"] },
        { prompt: "I've never met his mom.", answer: "Je n'ai jamais rencontré sa mère.", also: ["Je n'ai jamais rencontré sa maman."] },
        { prompt: "You look very happy, what's happening?", answer: "Tu as l'air très content, qu'est-ce qui se passe ?",
          also: ["Tu as l'air très contente, qu'est-ce qui se passe ?", "Tu as l'air très heureux, qu'est-ce qui se passe ?", "Tu as l'air très heureuse, qu'est-ce qui se passe ?", "Vous avez l'air très content, qu'est-ce qui se passe ?"] },
        { prompt: "I haven't eaten yet.", answer: "Je n'ai pas encore mangé." },
        { prompt: "I've worked a lot last week, I didn't find the time to do it yet.", answer: "J'ai beaucoup travaillé la semaine dernière, je n'ai pas encore trouvé le temps de le faire.",
          also: ["J'ai beaucoup travaillé la semaine dernière, je n'ai pas encore trouvé le temps pour le faire."] },
        { prompt: "Have they ever been to France?", answer: "Ils sont déjà allés en France ?",
          also: ["Elles sont déjà allées en France ?", "Ils ont déjà été en France ?", "Est-ce qu'ils sont déjà allés en France ?"] },
        { prompt: "I've never had weight problems before.", answer: "Je n'ai jamais eu de problèmes de poids avant.",
          also: ["Je n'ai jamais eu de problème de poids avant."] },
        { prompt: "I haven't seen my godmother since Christmas.", answer: "Je n'ai pas vu ma marraine depuis Noël." },
        { prompt: "I should start a diet and do more exercise.", answer: "Je devrais commencer à faire un régime et faire plus de sport.",
          also: ["Je devrais commencer un régime et faire plus de sport.", "Je devrais faire un régime et faire plus de sport."] },
        { prompt: "She left very quickly.", answer: "Elle est partie très vite.", also: ["Elle est partie très rapidement."] },
        { prompt: "I didn't answer her because I had a cold.", answer: "Je ne lui ai pas répondu parce que j'étais enrhumé.", // her English: "I didn't answered her"
          also: ["Je ne lui ai pas répondu parce que j'étais enrhumée.", "Je ne lui ai pas répondu parce que j'avais un rhume."] },
        { prompt: "Have you found the time to start?", answer: "Tu as trouvé le temps de commencer ?",
          also: ["Tu as trouvé le temps pour commencer ?", "Tu as trouvé le temps de t'y mettre ?", "Vous avez trouvé le temps de commencer ?"] },
        { prompt: "How's your health at the moment? Did your bronchitis go away with the drugs?", answer: "Comment va ta santé en ce moment ? Ta bronchite est passée avec les médicaments ?",
          also: ["Comment va la santé en ce moment ? Ta bronchite est passée avec les médicaments ?", "Comment va votre santé en ce moment ? Votre bronchite est passée avec les médicaments ?"] },
        { prompt: "You look very tired, you should sleep more.", answer: "Tu as l'air très fatigué, tu devrais dormir plus.",
          also: ["Tu as l'air très fatiguée, tu devrais dormir plus.", "Vous avez l'air très fatigué, vous devriez dormir plus."] },
        { prompt: "I don't know what's happening, it's very annoying.", answer: "Je ne sais pas ce qui se passe, c'est très chiant.",
          also: ["Je ne sais pas ce qui se passe, c'est très énervant.", "Je ne sais pas ce qui se passe, c'est très embêtant."] },
        { prompt: "It's the same thing!", answer: "C'est la même chose !" },
        { prompt: "I haven't had the time yet, I'm very busy.", answer: "Je n'ai pas encore eu le temps, je suis débordé.",
          also: ["Je n'ai pas encore eu le temps, je suis débordée.", "Je n'ai pas encore eu le temps, je suis très occupé.", "Je n'ai pas encore eu le temps, je suis très occupée."] },
        { prompt: "Why didn't you come? Do you still have a cold?", answer: "Pourquoi tu n'es pas venu ? Tu es toujours enrhumé ?",
          also: ["Pourquoi tu n'es pas venue ? Tu es toujours enrhumée ?", "Pourquoi tu n'es pas venu ? Tu es encore enrhumé ?", "Pourquoi tu n'es pas venu ? Tu as toujours un rhume ?", "Pourquoi vous n'êtes pas venu ? Vous êtes toujours enrhumé ?"] },
        { prompt: "Are you taking drugs at the moment?", answer: "Tu prends des médicaments en ce moment ?",
          also: ["Vous prenez des médicaments en ce moment ?", "Est-ce que tu prends des médicaments en ce moment ?"] },
      ],
    },
  ],
};
