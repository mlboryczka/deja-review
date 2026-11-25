// Leçon 16, annexe · Les pronoms me, te, nous et vous — the written exercises
// of "EXERCICES - Leçon 16 - ANNEXE", for the Exercises page. Her CORRECTION
// gives every answer; the also lists are ours.
// Left out: ex. 1, 3, 5, 7, 9 (yes in a full sentence: "Répondre aux
// questions à la forme affirmative"), ex. 11–15 (oral, with her audio),
// ex. 16 (dictation: it needs her audio).
// Ex. 10 is her mix of the sentences of ex. 2, 4, 6 and 8. Its key and theirs
// differ in places; each item takes both of her answers where both are
// right.
// Her key's slips, corrected on their lines (each also checked against her
// other answer to the same sentence): ex. 2 no. 10 "parle" (parlait: the
// English is past and the instruction says présent or imparfait); ex. 8 nos.
// 3, 5, 6 and ex. 10 nos. 22, 47, the participle agreeing with nous or vous
// before it (crus, ramenés, écoutés); ex. 8 nos. 11, 12, a stray "un" ("pris
// un en photo"); ex. 10 nos. 23, 31 "a" for "as"; ex. 10 no. 41, two words
// missing; ex. 10 no. 44 "réponds" (répond). Her "Anglais" and "Français"
// are written anglais and français. Her English in ex. 8 no. 7, "Did he
// listened", is "Did he listen" (as in ex. 10 no. 22).

export default {
  id: "lecon16-annexe",
  exercises: [
    {
      n: 2,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes au présent et à l'imparfait.",
      english: "Translate each sentence into French with me or te, in the present or the imparfait as the English says.",
      items: [
        { prompt: "Were you waiting for me?", answer: "Tu m'attendais ?", also: ["Vous m'attendiez ?", "Est-ce que tu m'attendais ?"] },
        { prompt: "Do you love me? Yes, I love you.", answer: "Tu m'aimes ? Oui, je t'aime." },
        { prompt: "Can you hear me? Yes I can hear you.", answer: "Tu m'entends ? Oui je t'entends.", also: ["Vous m'entendez ? Oui, je vous entends."] },
        { prompt: "Can you see me? Yes I can see you.", answer: "Tu me vois ? Oui je te vois.", also: ["Vous me voyez ? Oui, je vous vois."] },
        { prompt: "Do you think you know me well?", answer: "Tu penses que tu me connais bien ?",
          also: ["Tu crois que tu me connais bien ?", "Vous pensez que vous me connaissez bien ?"] },
        { prompt: "Do you guys believe me?", answer: "Vous me croyez ?", also: ["Est-ce que vous me croyez ?"] },
        { prompt: "He always used to tell me that.", answer: "Il me disait toujours ça." },
        { prompt: "Is he taking you back home?", answer: "Il te ramène chez toi ?", also: ["Il vous ramène chez vous ?", "Il te ramène à la maison ?"] },
        { prompt: "Do you find me handsome?", answer: "Tu me trouves beau ?", also: ["Vous me trouvez beau ?"] },
        { prompt: "Did she talk to you in English all the time?", answer: "Elle te parlait en anglais tout le temps ?", // her key: "Elle te parle"
          also: ["Elle te parlait toujours en anglais ?", "Elle vous parlait en anglais tout le temps ?"] },
        { prompt: "Are you telling me that I'm right?", answer: "Tu me dis que j'ai raison ?", also: ["Vous me dites que j'ai raison ?"] },
        { prompt: "No, I'm telling you that you're selfish.", answer: "Non, je te dis que tu es égoïste.", also: ["Non, je vous dis que vous êtes égoïste."] },
      ],
    },
    {
      n: 4,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes au passé composé.",
      english: "Translate each sentence into French in the passé composé, with me or te before the auxiliary.",
      items: [
        { prompt: "I told you that yesterday!", answer: "Je t'ai dit ça hier !", also: ["Je vous ai dit ça hier !"] },
        { prompt: "You told me that one million times.", answer: "Tu m'as dit ça un million de fois.", also: ["Vous m'avez dit ça un million de fois."] },
        { prompt: "Did your mom take you to the airport?", answer: "Ta mère t'a amené à l'aéroport ?",
          also: ["Ta mère t'a amenée à l'aéroport ?", "Ta mère t'a emmené à l'aéroport ?", "Ta mère t'a emmenée à l'aéroport ?"] },
        { prompt: "Did you hear me?", answer: "Tu m'as entendu ?", also: ["Tu m'as entendue ?", "Vous m'avez entendu ?"] },
        { prompt: "Did he believe you?", answer: "Il t'a cru ?", also: ["Il t'a crue ?", "Il vous a cru ?"] },
        { prompt: "He talked to me in French.", answer: "Il m'a parlé en français." },
        { prompt: "I think he saw me there.", answer: "Je pense qu'il m'a vu là-bas.", also: ["Je pense qu'il m'a vue là-bas.", "Je crois qu'il m'a vu là-bas."] },
        { prompt: "My friend took me home after dinner.", answer: "Mon ami m'a ramené chez moi après le dîner.",
          also: ["Mon ami m'a ramenée chez moi après le dîner.", "Mon amie m'a ramené chez moi après le dîner.", "Mon ami m'a ramené à la maison après le dîner."] },
        { prompt: "I'm sorry, I forgot about you!", answer: "Je suis désolé, je t'ai oublié !",
          also: ["Je suis désolée, je t'ai oublié !", "Je suis désolé, je t'ai oubliée !", "Je suis désolée, je t'ai oubliée !"] },
        { prompt: "He asked me that yesterday.", answer: "Il m'a demandé ça hier." },
        { prompt: "Did he answer to you?", answer: "Il t'a répondu ?", also: ["Il vous a répondu ?"] },
        { prompt: "I told you that already!", answer: "Je t'ai déjà dit ça !", also: ["Je vous ai déjà dit ça !"] },
      ],
    },
    {
      n: 6,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes au présent et à l'imparfait.",
      english: "Translate each sentence into French with nous or vous, in the present or the imparfait as the English says.",
      items: [
        { prompt: "He was waiting for us at the cafe.", answer: "Il nous attendait au café." },
        { prompt: "Is your mum taking you guys to the airport?", answer: "Ta mère vous amène à l'aéroport ?",
          also: ["Votre mère vous amène à l'aéroport ?", "Ta mère vous emmène à l'aéroport ?", "Votre mère vous emmène à l'aéroport ?"] },
        { prompt: "Maxime is calling us every night.", answer: "Maxime nous appelle tous les soirs." },
        { prompt: "Can you see us?", answer: "Tu nous vois ?", also: ["Vous nous voyez ?"] },
        { prompt: "Is he believing you guys when you say that?", answer: "Il vous croit quand vous dites ça ?" },
        { prompt: "Does she speak to you guys in English?", answer: "Elle vous parle en anglais ?" },
        { prompt: "No, she speaks to us in French.", answer: "Non, elle nous parle en français." },
        { prompt: "Is Manon answering you guys?", answer: "Manon vous répond ?" },
        { prompt: "Yes, she's answering us.", answer: "Oui, elle nous répond." },
        { prompt: "Do they often send you messages?", answer: "Ils vous envoient souvent des messages ?",
          also: ["Elles vous envoient souvent des messages ?", "Ils t'envoient souvent des messages ?"] },
        { prompt: "Yes they often send us messages.", answer: "Oui, ils nous envoient souvent des messages.",
          also: ["Oui, elles nous envoient souvent des messages."] },
        { prompt: "My friend is taking us to Paris.", answer: "Mon ami nous amène à Paris.",
          also: ["Mon ami nous emmène à Paris.", "Mon amie nous amène à Paris."] },
      ],
    },
    {
      n: 8,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes au passé composé.",
      english: "Translate each sentence into French in the passé composé, with nous or vous before the auxiliary. A participle after avoir agrees with nous or vous when they are its direct object.",
      items: [
        { prompt: "He answered us in French.", answer: "Il nous a répondu en français." },
        { prompt: "Did you see us at school?", answer: "Tu nous as vus à l'école ?", also: ["Vous nous avez vus à l'école ?"] },
        { prompt: "Did they believe you guys?", answer: "Ils vous ont crus ?", // her key: "cru"; her ex. 10 no. 11: "crus"
          also: ["Ils vous ont crues ?", "Elles vous ont crus ?"] },
        { prompt: "Did Jessica send you guys a message?", answer: "Jessica vous a envoyé un message ?" },
        { prompt: "Did you take us back home? I don't remember.", answer: "Tu nous as ramenés chez nous ? Je ne me souviens pas.", // her key: "ramené"; her ex. 10 no. 1: "ramenés"
          also: ["Vous nous avez ramenés chez nous ? Je ne me souviens pas.", "Tu nous as ramenés à la maison ? Je ne me souviens pas.", "Tu nous as ramenés chez nous ? Je ne m'en souviens pas."] },
        { prompt: "Yes, I took you guys back home at 2am!", answer: "Oui, je vous ai ramenés chez vous à 2h du matin !", // her key: "ramené"
          also: ["Oui, je vous ai ramenés chez vous à deux heures du matin !", "Oui, je vous ai ramenés à la maison à 2h du matin !"] },
        { prompt: "Did he listen to you guys?", answer: "Il vous a écoutés ?" }, // her English: "Did he listened"
        { prompt: "Did you look for us there?", answer: "Tu nous as cherchés là-bas ?", also: ["Vous nous avez cherchés là-bas ?"] },
        { prompt: "Yes I looked for you guys there!", answer: "Oui, je vous ai cherchés là-bas !" },
        { prompt: "He told us to wait here.", answer: "Il nous a dit d'attendre là.", also: ["Il nous a dit d'attendre ici."] }, // "ici": her ex. 10 no. 3
        { prompt: "Did you take a picture of us?", answer: "Tu nous as pris en photo ?", // her key: "pris un en photo"
          also: ["Vous nous avez pris en photo ?"] },
        { prompt: "Yes I took a picture of you guys.", answer: "Oui, je vous ai pris en photo." }, // her key: "pris un en photo"
      ],
    },
    {
      n: 10,
      title: "Traduction",
      instruction: "Traduire les phrases suivantes.",
      english: "Translate each sentence into French, in the present, the imparfait or the passé composé as the English says. These are the sentences of the four translation exercises before, mixed.",
      items: [
        { prompt: "Did you take us back home? I don't remember.", answer: "Tu nous as ramenés chez nous ? Je ne me souviens pas.",
          also: ["Vous nous avez ramenés chez nous ? Je ne me souviens pas.", "Tu nous as ramenés à la maison ? Je ne me souviens pas.", "Tu nous as ramenés chez nous ? Je ne m'en souviens pas."] },
        { prompt: "Were you waiting for me?", answer: "Tu m'attendais ?", also: ["Vous m'attendiez ?", "Est-ce que tu m'attendais ?"] },
        { prompt: "He told us to wait here.", answer: "Il nous a dit d'attendre ici.", also: ["Il nous a dit d'attendre là."] },
        { prompt: "Is Manon answering you guys?", answer: "Manon vous répond ?" },
        { prompt: "He was waiting for us at the cafe.", answer: "Il nous attendait au café." },
        { prompt: "Do they often send you messages?", answer: "Ils vous envoient souvent des messages ?",
          also: ["Elles vous envoient souvent des messages ?", "Ils t'envoient souvent des messages ?"] },
        { prompt: "No, she speaks to us in French.", answer: "Non, elle nous parle en français." },
        { prompt: "My friend is taking us to Paris.", answer: "Mon ami nous amène à Paris.",
          also: ["Mon ami nous emmène à Paris.", "Mon amie nous amène à Paris."] },
        { prompt: "Is he believing you guys when you say that?", answer: "Il vous croit quand vous dites ça ?" },
        { prompt: "Do you love me? Yes, I love you.", answer: "Tu m'aimes ? Oui, je t'aime." },
        { prompt: "Did they believe you guys?", answer: "Ils vous ont crus ?", also: ["Ils vous ont crues ?", "Elles vous ont crus ?"] },
        { prompt: "Can you hear me? Yes I can hear you.", answer: "Tu m'entends ? Oui, je t'entends.", also: ["Vous m'entendez ? Oui, je vous entends."] },
        { prompt: "Maxime is calling us every night.", answer: "Maxime nous appelle tous les soirs." },
        { prompt: "Did Jessica send you guys a message?", answer: "Jessica vous a envoyé un message ?" },
        { prompt: "Can you see me? Yes I can see you.", answer: "Tu me vois ? Oui je te vois.", also: ["Vous me voyez ? Oui, je vous vois."] },
        { prompt: "Do you think you know me well?", answer: "Tu penses que tu me connais bien ?",
          also: ["Tu crois que tu me connais bien ?", "Vous pensez que vous me connaissez bien ?"] },
        { prompt: "Did you look for us there?", answer: "Tu nous as cherchés là-bas ?", also: ["Vous nous avez cherchés là-bas ?"] },
        { prompt: "Do you guys believe me?", answer: "Vous me croyez ?", also: ["Est-ce que vous me croyez ?"] },
        { prompt: "Does she speak to you guys in English?", answer: "Elle vous parle en anglais ?" },
        { prompt: "He always used to tell me that.", answer: "Il me disait toujours ça." },
        { prompt: "Is he taking you back home?", answer: "Il te ramène chez toi ?", also: ["Il vous ramène chez vous ?", "Il te ramène à la maison ?"] },
        { prompt: "Did he listen to you guys?", answer: "Il vous a écoutés ?" }, // her key: "écouté"; her ex. 8 no. 7: "écoutés"
        { prompt: "Did you take a picture of us?", answer: "Tu nous as pris en photo ?", also: ["Vous nous avez pris en photo ?"] }, // her key: "Tu nous a pris"
        { prompt: "Do you find me handsome?", answer: "Tu me trouves beau ?", also: ["Vous me trouvez beau ?"] },
        { prompt: "Did she talk to you in English all the time?", answer: "Elle te parlait toujours en anglais ?",
          also: ["Elle te parlait en anglais tout le temps ?", "Elle vous parlait toujours en anglais ?"] },
        { prompt: "Can you see us?", answer: "Tu nous vois ?", also: ["Vous nous voyez ?"] },
        { prompt: "Are you telling me that I'm right?", answer: "Tu me dis que j'ai raison ?", also: ["Vous me dites que j'ai raison ?"] },
        { prompt: "Yes I took a picture of you guys.", answer: "Oui, je vous ai pris en photo." },
        { prompt: "No, I'm telling you that you're selfish.", answer: "Non, je te dis que tu es égoïste.", also: ["Non, je vous dis que vous êtes égoïste."] },
        { prompt: "I told you that yesterday!", answer: "Je t'ai dit ça hier !", also: ["Je vous ai dit ça hier !"] },
        { prompt: "You told me that one million times.", answer: "Tu m'as dit ça un million de fois.", also: ["Vous m'avez dit ça un million de fois."] }, // her key: "Tu m'a dit"
        { prompt: "Did your mom take you to the airport?", answer: "Ta mère t'a amené à l'aéroport ?",
          also: ["Ta mère t'a amenée à l'aéroport ?", "Ta mère t'a emmené à l'aéroport ?", "Ta mère t'a emmenée à l'aéroport ?"] },
        { prompt: "Did you hear me?", answer: "Tu m'as entendu ?", also: ["Tu m'as entendue ?", "Vous m'avez entendu ?"] },
        { prompt: "Did he believe you?", answer: "Il t'a cru ?", also: ["Il t'a crue ?", "Il vous a cru ?"] },
        { prompt: "He talked to me in French.", answer: "Il m'a parlé en français." },
        { prompt: "Did he answer to you?", answer: "Il t'a répondu ?", also: ["Il vous a répondu ?"] },
        { prompt: "Is your mum taking you guys to the airport?", answer: "Ta mère vous amène à l'aéroport ?",
          also: ["Votre mère vous amène à l'aéroport ?", "Ta mère vous emmène à l'aéroport ?", "Votre mère vous emmène à l'aéroport ?"] },
        { prompt: "I think he saw me there.", answer: "Je pense qu'il m'a vu là-bas.", also: ["Je pense qu'il m'a vue là-bas.", "Je crois qu'il m'a vu là-bas."] },
        { prompt: "He answered us in French.", answer: "Il nous a répondu en français." },
        { prompt: "I told you that already!", answer: "Je t'ai déjà dit ça !", also: ["Je vous ai déjà dit ça !"] },
        { prompt: "My friend took me home after dinner.", answer: "Mon ami m'a ramené chez moi après le dîner.", // her key: "Mon ami a ramené après le diner"; her ex. 4 no. 8 is whole
          also: ["Mon ami m'a ramenée chez moi après le dîner.", "Mon amie m'a ramené chez moi après le dîner.", "Mon ami m'a ramené à la maison après le dîner."] },
        { prompt: "I'm sorry, I forgot about you!", answer: "Je suis désolé. Je t'ai oublié !",
          also: ["Je suis désolée, je t'ai oublié !", "Je suis désolé, je t'ai oubliée !", "Je suis désolée, je t'ai oubliée !"] },
        { prompt: "Yes they often send us messages.", answer: "Oui, ils nous envoient souvent des messages.",
          also: ["Oui, elles nous envoient souvent des messages."] },
        { prompt: "Yes, she's answering us.", answer: "Oui, elle nous répond." }, // her key: "réponds"
        { prompt: "Did you see us at school?", answer: "Tu nous as vus à l'école ?", also: ["Vous nous avez vus à l'école ?"] },
        { prompt: "He asked me that yesterday.", answer: "Il m'a demandé ça hier." },
        { prompt: "Yes, I took you guys back home at 2am!", answer: "Oui, je vous ai ramenés à 2h du mat' !", // her key: "ramené"
          also: ["Oui, je vous ai ramenés chez vous à 2h du matin !", "Oui, je vous ai ramenés à 2h du matin !", "Oui, je vous ai ramenés chez vous à deux heures du matin !"] },
        { prompt: "Yes I looked for you guys there!", answer: "Oui, je vous ai cherchés là-bas !" },
      ],
    },
  ],
};
