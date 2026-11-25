// Leçon 11, partie 1 · Dormir et les verbes pronominaux réfléchis — the written
// exercises of "EXERCICES - Leçon 11 - 1ère partie", for the Exercises page.
// Her CORRECTION gives every answer; the also lists are ours.
// Left out: ex. 1 (sentences of your own with dormir), ex. 2, 3 and 6 (yes in a
// full sentence; ex. 3 is ex. 2 again in the plural), ex. 4 (Elsa's routine
// retold in your own words), ex. 9 (dictation) and ex. 10, 11 (oral: they
// need her audio).
// Ex. 5 says "Traduire par écrit puis oralement rapidement": it is typed here.
// Ex. 7: the sheet's word list is scrambled by its columns, so the items
// follow her key's numbering. Where her key adds a note to the word
// ("essayer de + inf", "plusieurs + nom", "vers (+heure)"), the answer is the
// word alone.
// Slips in her key corrected (each marked on its line): ex. 5 nos. 1, 5, 8, 9,
// 12; ex. 7 nos. 17, 19; ex. 8 no. 5.

export default {
  id: "lecon11-1",
  exercises: [
    {
      n: 5,
      title: "Traduction",
      instruction: "Traduire par écrit puis oralement rapidement.",
      english: "Translate each sentence into French, with the verb in the present. (The sheet then says to say it aloud quickly; here you type it.)",
      items: [
        // her key ends with "?"
        { prompt: "They're getting dressed.", answer: "Ils s'habillent.", also: ["Elles s'habillent."] },
        { prompt: "They're going to bed.", answer: "Ils se couchent.", also: ["Elles se couchent.", "Ils vont se coucher.", "Elles vont se coucher."] },
        { prompt: "They're bored.", answer: "Ils s'ennuient.", also: ["Elles s'ennuient."] },
        { prompt: "They get up at 7am.", answer: "Ils se lèvent à 7h.", also: ["Elles se lèvent à 7h.", "Ils se lèvent à 7h du matin.", "Elles se lèvent à 7h du matin."] },
        // her key drops "facilement": "Ils/elles s'endorment."
        { prompt: "They fall asleep easily.", answer: "Ils s'endorment facilement.", also: ["Elles s'endorment facilement."] },
        { prompt: "They brush their teeth.", answer: "Ils se brossent les dents.", also: ["Elles se brossent les dents."] },
        { prompt: "They think (they're telling themselves) that it's too late.", answer: "Ils se disent que c'est trop tard.",
          also: ["Elles se disent que c'est trop tard.", "Ils se disent qu'il est trop tard.", "Elles se disent qu'il est trop tard."] },
        // her key has "auelle"
        { prompt: "At what time do they wake up?", answer: "À quelle heure ils se réveillent ?",
          also: ["À quelle heure elles se réveillent ?", "À quelle heure est-ce qu'ils se réveillent ?", "Ils se réveillent à quelle heure ?", "Elles se réveillent à quelle heure ?"] },
        // her key has "Les enfant s'ennuient ?"
        { prompt: "The kids are bored.", answer: "Les enfants s'ennuient." },
        { prompt: "James and Jessica are going to bed.", answer: "James et Jessica se couchent.", also: ["James et Jessica vont se coucher."] },
        { prompt: "My parents wake up at 6am.", answer: "Mes parents se réveillent à 6.",
          also: ["Mes parents se réveillent à 6h.", "Mes parents se réveillent à 6h du matin."] },
        // her key has "mauqillent"
        { prompt: "My friends are putting make up on.", answer: "Mes amies se maquillent.", also: ["Mes amis se maquillent."] },
      ],
    },
    {
      n: 7,
      title: "Traduction",
      instruction: "Comment on dit …. en français ?",
      english: "Say each word or phrase in French.",
      items: [
        { prompt: "an alarm clock", answer: "un réveil" },
        { prompt: "to wake up", answer: "se réveiller" },
        { prompt: "maybe", answer: "peut-être" },
        { prompt: "to admit", answer: "avouer" },
        { prompt: "too / too much", answer: "trop" },
        { prompt: "to brush one's teeth", answer: "se brosser les dents" },
        { prompt: "sleep (noun)", answer: "le sommeil", also: ["sommeil"] },
        { prompt: "to sleep", answer: "dormir" },
        { prompt: "generally", answer: "en général", also: ["généralement"] },
        { prompt: "during the night", answer: "la nuit", also: ["dans la nuit", "pendant la nuit"] },
        { prompt: "to be bored", answer: "s'ennuyer" },
        { prompt: "to try (+ prep)", answer: "essayer de" }, // her key: "essayer de + inf"
        { prompt: "to put make up on", answer: "se maquiller" },
        { prompt: "damn", answer: "mince" },
        { prompt: "only", answer: "seulement" },
        { prompt: "late", answer: "en retard", also: ["tard"] },
        { prompt: "the thing is, …", answer: "le truc, c'est que" }, // her key has "le trucs"
        { prompt: "in bed", answer: "au lit" },
        // her key has the verb "crever"; the word is crevé(e), as in her ex. 8 no. 7
        { prompt: "exhausted", answer: "crevé", also: ["crevée", "crevé, crevée", "épuisé", "épuisée"] },
        { prompt: "to get up", answer: "se lever" },
        { prompt: "to ring/to go off", answer: "sonner" },
        { prompt: "to tell oneself", answer: "se dire" },
        { prompt: "to go back to sleep", answer: "se rendormir" },
        { prompt: "to turn on", answer: "allumer" },
        { prompt: "to dress up", answer: "s'habiller" },
        { prompt: "sleeping pills", answer: "des somnifères", also: ["les somnifères"] },
        { prompt: "not great", answer: "pas terrible" },
        { prompt: "if", answer: "si" },
        { prompt: "several", answer: "plusieurs" }, // her key: "plusieurs + nom"
        { prompt: "later", answer: "plus tard" },
        { prompt: "at the moment", answer: "en ce moment" },
        { prompt: "around (+ time)", answer: "vers" }, // her key: "vers (+heure)"
        { prompt: "the thing/stuff/trick", answer: "le truc", also: ["un truc"] },
      ],
    },
    {
      n: 8,
      title: "Traduction niveau 3",
      instruction: "Traduire les phrases suivantes en français.",
      english: "Translate these sentences into French.",
      items: [
        { prompt: "I have trouble sleeping, can you help me?", answer: "J'ai des problèmes de sommeil, tu peux m'aider ?",
          also: ["J'ai des problèmes de sommeil, vous pouvez m'aider ?", "J'ai des problèmes de sommeil, est-ce que tu peux m'aider ?", "J'ai des problèmes de sommeil, est-ce que vous pouvez m'aider ?"] },
        { prompt: "Do you wake up during the night?", answer: "Tu te réveilles dans la nuit ?",
          also: ["Vous vous réveillez dans la nuit ?", "Tu te réveilles pendant la nuit ?", "Vous vous réveillez pendant la nuit ?", "Est-ce que tu te réveilles dans la nuit ?", "Tu te réveilles la nuit ?"] },
        { prompt: "He falls asleep without any problem.", answer: "Il s'endort sans problème.", also: ["Il s'endort sans aucun problème."] },
        { prompt: "Do you understand what's happening?", answer: "Tu comprends ce qui se passe ?",
          also: ["Vous comprenez ce qui se passe ?", "Est-ce que tu comprends ce qui se passe ?", "Est-ce que vous comprenez ce qui se passe ?"] },
        // her key has a stray "plus": "se couchent plus trop tard"
        { prompt: "The thing is, the kids go to bed too late.", answer: "Le truc, c'est que les enfants se couchent trop tard." },
        { prompt: "I'm very bored at work at the moment.", answer: "Je m'ennuie beaucoup au travail en ce moment.",
          also: ["En ce moment, je m'ennuie beaucoup au travail.", "Je m'ennuie vraiment au travail en ce moment."] },
        { prompt: "She sleeps poorly, she must be exhausted.", answer: "Elle dort mal, elle doit être crevée.", also: ["Elle dort mal, elle doit être épuisée."] },
        { prompt: "When you wake up at night, what do you do?", answer: "Quand tu te réveilles dans la nuit, qu'est-ce que tu fais ?",
          also: ["Quand tu te réveilles la nuit, qu'est-ce que tu fais ?", "Quand tu te réveilles pendant la nuit, qu'est-ce que tu fais ?",
            "Quand vous vous réveillez dans la nuit, qu'est-ce que vous faites ?", "Quand vous vous réveillez la nuit, qu'est-ce que vous faites ?"] },
        { prompt: "My alarm clock rang at 6am.", answer: "Mon réveil a sonné à 6h.", also: ["Mon réveil a sonné à 6h du matin."] },
        { prompt: "I turned on the TV and I tried to sleep.", answer: "J'ai allumé la télé et j'ai essayé de dormir.",
          also: ["J'ai allumé la télévision et j'ai essayé de dormir."] },
        { prompt: "I think (I tell myself) that I'm going to be exhausted.", answer: "Je me dis que je vais être crevée.",
          also: ["Je me dis que je vais être crevé."] },
        { prompt: "My husband is brushing his teeth.", answer: "Mon mari se brosse les dents." },
        { prompt: "They put make up on and get dressed.", answer: "Elles se maquillent et elles s'habillent.",
          also: ["Elles se maquillent et s'habillent.", "Ils se maquillent et ils s'habillent.", "Ils se maquillent et s'habillent."] },
        { prompt: "If I wake up during the night, I go back to sleep easily.", answer: "Si je me réveille dans la nuit, je me rendors facilement.",
          also: ["Si je me réveille pendant la nuit, je me rendors facilement."] },
        { prompt: "Sometimes I get up because I'm bored.", answer: "Des fois je me lève car je m'ennuie.",
          also: ["Des fois je me lève parce que je m'ennuie.", "Parfois je me lève car je m'ennuie.", "Parfois je me lève parce que je m'ennuie."] },
        { prompt: "Do you take sleeping pills at the moment?", answer: "Tu prends des somnifères en ce moment ?",
          also: ["Vous prenez des somnifères en ce moment ?", "Est-ce que tu prends des somnifères en ce moment ?", "Est-ce que vous prenez des somnifères en ce moment ?"] },
        { prompt: "He's going to come later.", answer: "Il va venir plus tard." },
        { prompt: "My friend is always tired. I don't know what's happening.", answer: "Mon ami est toujours fatigué. Je ne sais pas ce qui se passe.",
          also: ["Mon amie est toujours fatiguée. Je ne sais pas ce qui se passe."] },
        { prompt: "Generally, we go to bed around 10pm.", answer: "En général on se couche vers 22h.",
          also: ["En général nous nous couchons vers 22h.", "Généralement on se couche vers 22h.", "En général on se couche vers 10h du soir."] },
        { prompt: "At what time does he wake up?", answer: "À quelle heure il se réveille ?",
          also: ["À quelle heure est-ce qu'il se réveille ?", "Il se réveille à quelle heure ?"] },
        { prompt: "Are you bored if you don't work?", answer: "Tu t'ennuies si tu ne travailles pas ?",
          also: ["Vous vous ennuyez si vous ne travaillez pas ?", "Est-ce que tu t'ennuies si tu ne travailles pas ?"] },
        { prompt: "I really try to sleep a lot at the moment.", answer: "J'essaie vraiment de dormir beaucoup en ce moment.",
          also: ["J'essaye vraiment de dormir beaucoup en ce moment.", "En ce moment, j'essaie vraiment de dormir beaucoup."] },
        { prompt: "I told you, the book is not great!", answer: "Je t'ai dit, le livre n'est pas terrible.",
          also: ["Je te l'ai dit, le livre n'est pas terrible.", "Je vous ai dit, le livre n'est pas terrible.", "Je vous l'ai dit, le livre n'est pas terrible."] },
        { prompt: "I feel very bad, maybe I'm going to take sleeping pills.", answer: "Je me sens très mal, je vais peut-être prendre des somnifères." },
        { prompt: "The thing is, the alarm didn't go off.", answer: "Le truc c'est que le réveil n'a pas sonné." },
      ],
    },
  ],
};
