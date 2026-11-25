// Leçon 15 · Croire et attendre, imparfait ou passé composé — the written
// exercises of her second sheet, "EXERCICES 2 - Leçon 15" (her title "LEÇON 15
// EXERCICES DIFFICILES"; her footnote says they are copied and adapted from an
// unknown source), for the Exercises page. She has no answer key for this
// sheet: every answer here was written for the app, as a French teacher would
// mark it. Nothing is left out.
// Her exercises have no headings, so ex. 1 and 2 take the titles of her texts
// ("Les enfants", "Les joueurs") and ex. 3 and 4 a plain one.
// Ex. 1 and 2: she gives the English text, and the French is its translation
// with the verbs missing. Each item shows her English sentence above the
// French one, since the English decides the tense.
// Ex. 3 and 4 (put the text in the past) are split sentence by sentence.
// Where her English or her text leaves both tenses possible, both are taken:
// ex. 1 "entendait" or "a entendu" (a noise heard or going on), "montrait" or
// "a montré"; ex. 2 "avançaient" or "ont avancé", "tendait" or "a tendue";
// ex. 3 the sentence before "Soudain" takes the imparfait (the scene before
// the first event) or the passé composé from "puis" on; ex. 4 "je suis restée"
// or "je restais", "je cherchais", "je ne voyais personne".

export default {
  id: "lecon15-2",
  exercises: [
    {
      n: 1,
      title: "Les enfants",
      instruction: "Compléter la traduction du texte suivant en conjuguant les verbes soit au passé composé soit à l'imparfait.",
      english: "Each French sentence translates the English one above it: fill each gap with the verb in brackets in the passé composé or the imparfait, whichever the English calls for.",
      items: [
        { prompt: "Monique peered over the hedge because she heard a strange noise on the little path where usually nobody passed by.\nMonique ___ (regarder) par-dessus la haie parce qu'elle ___ (entendre) un bruit bizarre sur le petit chemin où d'habitude personne ne ___ (passer).",
          gaps: [["a regardé"], ["entendait", "a entendu"], ["passait"]] },
        { prompt: "She amusedly saw two children searching for her through the leaves of the hedge.\nElle ___ (voir) avec amusement deux enfants qui la ___ (chercher) à travers les feuilles de la haie.",
          gaps: [["a vu"], ["cherchaient"]] },
        { prompt: "They were nearly the same age and looked very similar.\nIls ___ (être) d'âge presque égal et ___ (se ressembler) beaucoup.",
          gaps: [["étaient"], ["se ressemblaient"]] },
        { prompt: "When she spoke to them, they stood still, completely astonished.\nQuand elle leur ___ (parler), ils ___ (rester) immobiles, complètement étonnés.",
          gaps: [["a parlé"], ["sont restés"]] },
        { prompt: "She asked them what they were doing there.\nElle leur ___ (demander) ce qu'ils ___ (faire) là.",
          gaps: [["a demandé"], ["faisaient"]] },
        { prompt: "Neither of them replied.\nNi l'un, ni l'autre n'___ (répondre).",
          gaps: [["a répondu", "ont répondu"]] },
        { prompt: "As she persisted, one of them said something while the other pointed to the big tree in the middle of the garden.\nComme elle ___ (insister), l'un d'eux ___ (dire) quelque chose tandis que l'autre ___ (montrer) le grand arbre au milieu du jardin.",
          gaps: [["insistait"], ["a dit"], ["montrait", "a montré"]] },
        { prompt: "She turned around and saw their ball sitting atop the tall tree.\nElle ___ (se retourner) et ___ (voir) leur ballon qui ___ (trôner) au milieu du grand arbre.",
          gaps: [["s'est retournée"], ["a vu"], ["trônait"]] },
        { prompt: "Monique opened the gate for them, and they entered to retrieve the ball.\nMonique leur ___ (ouvrir) le portail, et ils ___ (rentrer) pour récupérer le ballon.",
          gaps: [["a ouvert"], ["sont rentrés"]] },
      ],
    },
    {
      n: 2,
      title: "Les joueurs",
      instruction: "Compléter la traduction du texte suivant en conjuguant les verbes soit au passé composé soit à l'imparfait.",
      english: "Each French sentence translates the English one above it: fill each gap with the verb in brackets in the passé composé or the imparfait, whichever the English calls for.",
      items: [
        { prompt: "When I first saw them, it was at a football match.\nQuand je les ___ (voir) pour la première fois, c'___ (être) à un match de football.",
          gaps: [["ai vus"], ["était"]] },
        { prompt: "The two players moved towards us, but due to the approaching storm, they took shelter under the stadium.\nLes deux joueurs ___ (avancer) vers nous mais à cause de l'orage qui ___ (arriver), ils ___ (s'abriter) sous le stade.",
          gaps: [["avançaient", "ont avancé"], ["arrivait"], ["se sont abrités"]] },
        { prompt: "When the rain stopped, they climbed the steps to the podium.\nQuand la pluie ___ (s'arrêter), ils ___ (monter) les marches du podium.",
          gaps: [["s'est arrêtée"], ["ont monté"]] },
        { prompt: "Silence reigned in the stadium.\nLe silence ___ (régner) dans le stade.",
          gaps: [["régnait"]] },
        { prompt: "They were very different.\nIls ___ (être) très différents.",
          gaps: [["étaient"]] },
        { prompt: "One was tall, massive, and older, while the other seemed younger and frail.\nL'un ___ (être) grand massif et plus âgé tandis que l'autre ___ (sembler) plus jeune et chétif.",
          gaps: [["était"], ["semblait"]] },
        { prompt: "But one could sense the same strength and determination in both of them.\nMais on ___ (sentir) chez eux la même force et détermination.",
          gaps: [["sentait"]] },
        { prompt: "Each of them gave a short speech in front of the spectators who were following the event, then the taller one took the cup that the referee handed him.\nIls ___ (faire) chacun un petit discours devant les spectateurs qui ___ (suivre) cet événement, puis, le grand ___ (prendre) la coupe que lui ___ (tendre) l'arbitre.",
          gaps: [["ont fait"], ["suivaient"], ["a pris"], ["tendait", "a tendue"]] },
        { prompt: "He spoke into the microphone for 15 minutes while the younger one watched him with respect.\nIl ___ (parler) pendant 15 minutes au micro pendant que le plus jeune le ___ (regarder) avec respect.",
          gaps: [["a parlé"], ["regardait"]] },
        { prompt: "Finally, the older player handed the cup to his young comrade, and they embraced.\nEnfin, le plus âgé ___ (tendre) la coupe à son jeune camarade et ils ___ (se prendre) dans les bras.",
          gaps: [["a tendu"], ["se sont pris"]] },
        { prompt: "It was a ceremony full of respect, something we were not accustomed to seeing in those days.\nC'était une cérémonie pleine de respect ce que nous n'___ (avoir) pas l'habitude de voir à cette époque.",
          gaps: [["avions"]] },
      ],
    },
    {
      n: 3,
      title: "Passé composé ou imparfait",
      instruction: "Transposer le texte suivant au passé en utilisant le passé composé et l'imparfait.",
      english: "Rewrite each sentence of the text in the past: the imparfait for the scene and what was going on, the passé composé for each event.",
      items: [
        { prompt: "Sophie est au café.", answer: "Sophie était au café." },
        { prompt: "Elle écrit une lettre d'amour.", answer: "Elle écrivait une lettre d'amour." },
        { prompt: "Elle rêve, elle songe, elle choisit ses expressions puis elle met son stylo dans ses cheveux et elle réfléchit.",
          answer: "Elle rêvait, elle songeait, elle choisissait ses expressions puis elle mettait son stylo dans ses cheveux et elle réfléchissait.",
          also: ["Elle rêvait, elle songeait, elle choisissait ses expressions puis elle a mis son stylo dans ses cheveux et elle a réfléchi.", "Elle rêvait, elle songeait, elle a choisi ses expressions puis elle a mis son stylo dans ses cheveux et elle a réfléchi."] },
        { prompt: "Elle doit faire une belle lettre, il faut trouver les mots justes, mais elle ne peut pas, elle ne sait pas exprimer les impressions qu'elle ressent.",
          answer: "Elle devait faire une belle lettre, il fallait trouver les mots justes, mais elle ne pouvait pas, elle ne savait pas exprimer les impressions qu'elle ressentait." },
        { prompt: "Elle est sur une autre planète.", answer: "Elle était sur une autre planète." },
        { prompt: "Soudain, le garçon arrive, il lui demande ce qu'elle veut.", answer: "Soudain, le garçon est arrivé, il lui a demandé ce qu'elle voulait." },
        { prompt: "Elle redescend sur terre : « Un Perrier ».", answer: "Elle est redescendue sur terre : « Un Perrier »." },
        { prompt: "Il part et revient très vite.", answer: "Il est parti et est revenu très vite.",
          also: ["Il est parti et il est revenu très vite.", "Il est parti et revenu très vite."] },
        { prompt: "Il sert Sophie, elle prend son verre et boit rapidement.", answer: "Il a servi Sophie, elle a pris son verre et a bu rapidement.",
          also: ["Il a servi Sophie, elle a pris son verre et elle a bu rapidement."] },
        { prompt: "Elle met un billet sur la table, le garçon rend la monnaie, puis elle repart dans les nuages.",
          answer: "Elle a mis un billet sur la table, le garçon a rendu la monnaie, puis elle est repartie dans les nuages." },
        { prompt: "Finalement, elle écrit sa lettre.", answer: "Finalement, elle a écrit sa lettre." },
      ],
    },
    {
      n: 4,
      title: "Passé composé ou imparfait",
      instruction: "Transposer le texte suivant au passé en utilisant le passé composé et l'imparfait.",
      english: "Rewrite each sentence of the text in the past: the imparfait for the scene and what was going on, the passé composé for each event. The narrator is a woman.",
      items: [
        { prompt: "À dix heures, mon train entre en gare.", answer: "À dix heures, mon train est entré en gare." },
        { prompt: "Il a dix minutes de retard.", answer: "Il avait dix minutes de retard." },
        { prompt: "Tous les voyageurs sont déjà debout, ils veulent descendre très vite.", answer: "Tous les voyageurs étaient déjà debout, ils voulaient descendre très vite." },
        { prompt: "Moi, je reste assise car Allan et Peter doivent m'attendre sur le quai.", answer: "Moi, je suis restée assise car Allan et Peter devaient m'attendre sur le quai.",
          also: ["Moi, je restais assise car Allan et Peter devaient m'attendre sur le quai."] },
        { prompt: "J'ouvre la fenêtre et je cherche mes amis du regard.", answer: "J'ai ouvert la fenêtre et j'ai cherché mes amis du regard.",
          also: ["J'ai ouvert la fenêtre et je cherchais mes amis du regard."] },
        { prompt: "Je ne vois personne !", answer: "Je n'ai vu personne !",
          also: ["Je ne voyais personne !"] },
        { prompt: "Alors, je descends et je marche jusqu'au bout du quai.", answer: "Alors, je suis descendue et j'ai marché jusqu'au bout du quai." },
        { prompt: "Là beaucoup de gens attendent : ils regardent, ils dévisagent chaque voyageur : ils ont peur de laisser passer la personne attendue.",
          answer: "Là beaucoup de gens attendaient : ils regardaient, ils dévisageaient chaque voyageur : ils avaient peur de laisser passer la personne attendue." },
        { prompt: "Enfin, derrière eux j'aperçois mes amis.", answer: "Enfin, derrière eux j'ai aperçu mes amis." },
        { prompt: "Je cours vers eux.", answer: "J'ai couru vers eux." },
        { prompt: "Contents de nous retrouver, nous partons aussitôt.", answer: "Contents de nous retrouver, nous sommes partis aussitôt." },
      ],
    },
  ],
};
