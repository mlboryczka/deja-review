// Communication — built 2026-11-15 from Laura Caufour's LFL METHOD sheets in
// Google Drive (Français / Communication): "Fiche communication" (her
// "Techniques de communication orale") and "EXERCICES - Communication" (file
// ids in .claude/topic-lessons-draft/communication/sources.md). One of her
// topic lessons, in no stage (owner, 2026-11-13). She has no answer key for
// it: every answer here was written for the app and checked.
//
// Each entry is [front, back, category, section].
//
// Her sheet recommends making a deck of cards "avec toutes ces expressions",
// so most of this lesson is phrase cards, asked both ways round like a
// student's own.
//
// Card shapes:
//   "Je n'ai pas compris le dernier mot" / "I didn't understand the last word"   both ways round
//   "Le film a commencé à 20h30 → tu n'as pas compris « à 20h30 »" / "À quelle heure ? / …"
//                                                         ask about only the part missed
//   "un pantalon, mais plus court → le mot" / "un short / short / le short"   guess the word
//   "chaud → le nom" / "la chaleur / chaleur"             a word from the same family
//   "un truc" / "a thing / …"                              a word, both ways round
//
// The "part missed" cards are arrow cards (exact) because a question word is
// short and typo tolerance would pass the wrong one ("Où ?" for "Qui ?").
// Each accepts the bare question and the question after "Pardon,",
// "Excuse-moi,", "Désolé," or "Je n'ai pas compris," (her lesson's own
// openers), built by missed() below.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Her phrases for not understanding, checking and correcting: nearly all
//     of them, as phrase cards. "C'est bien ça ?" is a Leçon 12 card, so it
//     is in this lesson's notes only. Left out: "Pardon ?", "Comment ?" and
//     "Quoi ?" (one word each, and Leçon 5 teaches asking someone to repeat),
//     "Je ne comprends pas / Je n'ai pas compris" (the sentences that follow
//     teach the same words), "Je n'ai pas compris le début de la phrase" and
//     "… la phrase" (the same as "la fin de la phrase", another card), "Tu
//     peux m'expliquer le sens de … ?" (the same as "Qu'est-ce que ça veut
//     dire … ?") and "Je ne connais pas ce mot" (the same as "J'ai oublié ce
//     mot").
//   - Her lesson's answer by question ("Excuse-moi, le père de qui ?") and
//     ex. 1 (say which part you missed): five of her sentences, each asking
//     about a different kind of part (whose, what time, how many, where,
//     when). Her sheet underlines a part of each; the underlining doesn't
//     survive in the text read, so each card names the part it asks about.
//   - Her ways of making someone guess a word: her own examples as cards
//     (her definitions, situations, opposites and word families), six for
//     describing and four for families and opposites.
//   - Saying it another way: two of her "rephrase" examples and one of her
//     "simplify" examples, and three of her pointing phrases, as phrase
//     cards. Left out: her neighbour's car (simplify; the French "Je ne
//     pouvais pas entrer dans mon garage" teaches nothing new), "Marine fait
//     cette taille-là", "Comment ça s'appelle ça ?" and "C'est quelle
//     couleur ça ?" (the same shape as the three kept).
//   - Ex. 3 (sentences where translating word for word fails): eight, with
//     French written for the app, the hint naming the word to use.
//   - Left out: ex. 2 (make someone guess a list of words: done out loud,
//     no single answer); ex. 3 nos. 5, 6, 9, 10, 11, 13 and 15 to 20 (long,
//     or with many right answers).
//
// DEPARTURES FROM HER SHEETS:
//   - Her example "On est arrivé à 19h45": on for we takes the plural
//     participle, arrivés, as Leçon 8 has "on est partis" (its header gives
//     the sources). It is in the notes only.
//   - Her "Non attends" gets a comma: "Non, attends".
//   - Her "contraire de content" is fâché; the card also accepts mécontent,
//     triste and malheureux, which a teacher would accept. Other guess cards
//     accept other words that fit (un café, un bermuda, gratis, blessé).
//   - Ex. 3 no. 3's "I run out of gas": ran. The card uses "I've run out of
//     gas".
//   - The exercise sheet's page footers say "Le pronom EN"; its title and
//     content are Communication.
//
// THE NOTES are her sheet in English: Not clear, Check and Correct (her
// section 1), A word (her "faire deviner un mot") and Rephrase (her "dire
// autrement"). Not hers, though a card needs it said: the Not clear tab's
// note on asking with only the question word (où, quand, de qui), which her
// ex. 1 needs, and the Rephrase tab's "word for word often fails", from her
// ex. 3's instruction.

// The answers to a "part missed" card: each core question alone and after
// her openers. Marking ignores case, commas and the question mark.
const OPENERS = ["Pardon, ", "Excuse-moi, ", "Excusez-moi, ", "Désolé, ", "Désolée, ", "Je n'ai pas compris, ", "Pardon, je n'ai pas compris, ", "Excuse-moi, je n'ai pas compris, "];
const missed = (...cores) => cores.flatMap((c) => [c, ...OPENERS.map((o) => o + c)]).join(" / ");

export const CARDS = [
  // ── When you don't understand (her section 1)
  ["Je n'ai pas compris le dernier mot", "I didn't understand the last word / I didn't catch the last word / I didn't get the last word", "E", "notclear"],
  ["Je n'ai pas entendu la fin de la phrase", "I didn't hear the end of the sentence / I didn't catch the end of the sentence", "E", "notclear"],
  ["Je n'ai rien compris !", "I didn't understand anything! / I didn't understand a thing! / I understood nothing!", "E", "notclear"],
  ["Qu'est-ce que ça veut dire, garagiste ?", "What does garagiste mean? / What does the word garagiste mean? (with qu'est-ce que)", "E", "notclear"],
  ["Tu peux répéter la dernière phrase ?", "Can you repeat the last sentence? / Can you say the last sentence again? (tu)", "E", "notclear"],
  ["Tu peux reformuler ?", "Can you rephrase? / Can you rephrase that? / Can you put that another way? (tu)", "E", "notclear"],
  ["Tu sais comment on dit ça en anglais ?", "Do you know how to say that in English? / Do you know how you say that in English? (tu, with on dit)", "E", "notclear"],

  // ── Asking about the part you missed (her lesson and ex. 1)
  ["Les enfants de ma sœur sont en vacances → tu n'as pas compris « de ma sœur »", missed("Les enfants de qui ?", "De qui ?", "Les enfants de qui sont en vacances ?"), "G", "missed"],
  ["Le film a commencé à 20h30 → tu n'as pas compris « à 20h30 »", missed("À quelle heure ?", "Il a commencé à quelle heure ?", "Le film a commencé à quelle heure ?", "À quelle heure il a commencé ?"), "G", "missed"],
  ["J'ai marché 8km → tu n'as pas compris « 8km »", missed("Combien ?", "Combien de kilomètres ?", "Combien de km ?", "Tu as marché combien ?", "Tu as marché combien de kilomètres ?", "Tu as marché combien de km ?", "Tu as fait combien de kilomètres ?"), "G", "missed"],
  ["Il est allé chez le garagiste → tu n'as pas compris « chez le garagiste »", missed("Où ?", "Où ça ?", "Il est allé où ?", "Où est-ce qu'il est allé ?", "Où est-il allé ?", "Chez qui ?", "Il est allé chez qui ?"), "G", "missed"],
  ["Il est mort le 19 décembre → tu n'as pas compris « le 19 décembre »", missed("Quand ?", "Il est mort quand ?", "Quand est-ce qu'il est mort ?", "Quel jour ?", "Il est mort quel jour ?", "Le combien ?", "Il est mort le combien ?", "À quelle date ?"), "G", "missed"],

  // ── Checking (her section 1)
  ["Ça se dit bien comme ça ?", "Is that the way you say it? / Is that how you say it? / Do you say it like that? (with se dire)", "E", "check"],
  ["Tu vois ce que je veux dire ?", "Do you see what I mean? / Do you know what I mean? / You see what I mean? (tu)", "E", "check"],
  ["C'est clair ou tu veux que je réexplique ?", "Is it clear or do you want me to explain again? / Is that clear or do you want me to explain again? / Is it clear or should I explain again? (tu, with réexpliquer)", "E", "check"],
  ["Tu as compris ce que j'ai dit ?", "Did you understand what I said? / Did you get what I said? (tu)", "E", "check"],

  // ── Correcting yourself (her section 1)
  ["Non, attends, je me suis mal exprimé", "No, wait, I didn't express myself well / No, wait, I didn't put that well / No, wait, I didn't explain myself well (said by a man)", "E", "correct"],
  ["Ce n'est pas ce que je voulais dire", "That's not what I meant / That is not what I meant / This is not what I meant", "E", "correct"],
  ["Je voulais dire que …", "I meant that … / What I meant was … / My point was …", "E", "correct"],
  ["C'est ce que je voulais dire !", "That's what I meant! / That's my point! / That was my point! / This is what I meant!", "E", "correct"],

  // ── When you can't find a word (her section 2)
  ["J'ai oublié ce mot", "I've forgotten this word / I forgot this word / I've forgotten that word / I forgot that word", "E", "word"],
  ["Je ne sais pas comment on dit ça, tu peux m'aider ?", "I don't know how to say that, can you help me? / I don't know how you say that, can you help me? (tu)", "E", "word"],
  ["Ah, comment on dit ça… ça m'échappe", "Ah, how do you say that… it escapes me / Ah, how do you say it… it escapes me / Ah, how do you say that… it's slipped my mind", "E", "word"],
  ["un truc", "a thing / a thingy / a whatsit / a thingamajig (informal)", "V", "word"],

  // ── Making someone guess the word (her examples)
  ["un pantalon, mais plus court → le mot", "un short / short / le short / un bermuda / bermuda / le bermuda", "G", "guess"],
  ["un restaurant, mais pas pour manger, seulement pour boire → le mot", "un bar / bar / le bar / un café / café / le café", "G", "guess"],
  ["l'animal blanc et noir qui ressemble à un cheval → le mot", "un zèbre / zèbre / le zèbre", "G", "guess"],
  ["Quand tu vas chez le médecin, c'est parce que tu es … → le mot", "malade / blessé / blessée", "G", "guess"],
  ["Quand tu ne dois pas payer quelque chose, c'est … → le mot", "gratuit / gratis", "G", "guess"],
  ["Le rendez-vous était à 9h et je suis arrivée à 10h, donc j'étais … → le mot", "en retard", "G", "guess"],
  ["l'amour → le contraire", "la haine / haine", "G", "family"],
  ["content → le contraire", "fâché / mécontent / triste / malheureux", "G", "family"],
  ["chaud → le nom", "la chaleur / chaleur", "G", "family"],
  ["la jalousie → l'adjectif", "jaloux / jalouse", "G", "family"],

  // ── Saying it another way (her section 2)
  ["J'ai fermé la porte avec la clé", "I locked the door / I closed the door with the key / I locked the door with the key (with fermer and avec)", "E", "rephrase"],
  ["Ma famille peut m'aider", "I have the support of my family / My family can help me / I have my family's support (with pouvoir)", "E", "rephrase"],
  ["J'étais malade donc je suis resté à la maison", "I had a terrible headache and a sore throat so I couldn't leave home / I was sick so I stayed at home / I was ill so I stayed at home / I was sick so I stayed home / I was ill so I stayed home (said by a man, with malade and maison)", "E", "rephrase"],
  ["C'est un objet qui a cette forme-là", "It's an object with this shape / It's an object that has this shape / It's a thing with this shape", "E", "rephrase"],
  ["C'est grand comme ça", "It's this big / It's about this big / It's big like this", "E", "rephrase"],
  ["Comment s'appelle cette partie du corps ?", "What is this part of the body called? / What's this part of the body called? / What do you call this part of the body?", "E", "rephrase"],

  // ── When word for word doesn't work (her ex. 3)
  ["On s'est couchés tard", "We had a late night / We went to bed late (with on)", "E", "idioms"],
  ["Je n'ai pas de réseau", "I have no reception / I have no reception on my phone / I don't have any reception / I've got no signal / I have no signal (with réseau)", "E", "idioms"],
  ["Je n'ai plus d'essence", "I've run out of gas / I've run out of petrol / I'm out of gas / I have no more gas / I ran out of gas (with ne … plus)", "E", "idioms"],
  ["Tu ne me comprends pas", "You don't get me / You don't understand me (tu)", "E", "idioms"],
  ["Elle a les cheveux attachés", "She has her hair up / She's got her hair up / Her hair is up / Her hair is tied up (with attachés)", "E", "idioms"],
  ["Tu fais un régime ?", "Are you on a diet? (tu, with faire)", "E", "idioms"],
  ["On n'est pas arrivés à l'heure", "We didn't make it on time / We didn't arrive on time / We didn't get there on time (with on)", "E", "idioms"],
  ["Je n'ai pas pu joindre mon patron à cause du décalage horaire", "I wasn't able to get in touch with my boss because of the time difference / I couldn't reach my boss because of the time difference / I couldn't get hold of my boss because of the time difference / I couldn't get in touch with my boss because of the time difference (with joindre)", "E", "idioms"],
];

export const NOTES = [
  {
    tab: "Not clear",
    h: "1 · When you don't understand",
    blocks: [
      { t: "lead", v: "When you don't understand, say so, and say what you missed: *je n'ai pas compris le dernier mot*, \"I didn't understand the last word\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je n'ai pas entendu la fin de la phrase", "I didn't hear the end of the sentence"],
        ["Je n'ai rien compris !", "I didn't understand anything!"],
        ["Qu'est-ce que ça veut dire, garagiste ?", "What does garagiste mean?"],
        ["Tu peux reformuler ?", "Can you rephrase?"],
        ["Tu sais comment on dit ça en anglais ?", "Do you know how to say that in English?"],
      ]},
      { t: "sub", v: "Ask about the part you missed" },
      { t: "note", v: "You can repeat the sentence and put a question word in place of the part you missed: *le père de ma filleule est parti*, \"my goddaughter's father left\", gets *excuse-moi, le père de qui ?*, \"sorry, whose father?\"." },
      { t: "note", v: "*On est arrivés à 19h45*, \"we arrived at 7.45pm\", gets *je n'ai pas compris, à quelle heure ?*, \"I didn't catch that, what time?\"." },
      { t: "note", v: "The question word alone is enough: *où ?*, \"where?\"; *quand ?*, \"when?\"; *combien ?*, \"how many?\"; *de qui ?*, \"whose?\"." },
    ],
  },
  {
    tab: "Check",
    h: "2 · Checking what you said",
    blocks: [
      { t: "lead", v: "When you aren't sure you said it right, ask: *ça se dit bien comme ça ?*, \"is that the way you say it?\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est bien ça ?", "Is that right?"],
        ["Tu vois ce que je veux dire ?", "Do you see what I mean?"],
        ["C'est clair ou tu veux que je réexplique ?", "Is it clear or do you want me to explain again?"],
        ["Tu as compris ce que j'ai dit ?", "Did you understand what I said?"],
      ]},
    ],
  },
  {
    tab: "Correct",
    h: "3 · When they got you wrong",
    blocks: [
      { t: "lead", v: "When the other person has misunderstood you, say so, then say it again: *ce n'est pas ce que je voulais dire*, \"that's not what I meant\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Non, attends, je me suis mal exprimé", "No, wait, I didn't put that well"],
        ["Je voulais dire que …", "I meant that …"],
        ["C'est ce que je voulais dire !", "That's what I meant!"],
      ]},
    ],
  },
  {
    tab: "A word",
    h: "4 · When you can't find a word",
    blocks: [
      { t: "lead", v: "Say that you can't find the word, then help the other person guess it: *je ne sais pas comment on dit ça, tu peux m'aider ?*, \"I don't know how to say that, can you help me?\"." },
      { t: "note", v: "Say first what kind of word it is, such as a verb, an animal or a feeling. Then describe it as you would to a child, with the simplest words you have." },
      { t: "sub", v: "Describe it" },
      { t: "note", v: "*Comment on dit un pantalon, mais plus court ?*, \"what's the word for trousers, but shorter?\": un short." },
      { t: "note", v: "*Quel est le verbe pour dire que je marche, mais plus vite ?*, \"what's the verb for walking, but faster?\": courir." },
      { t: "note", v: "*Comment s'appelle la personne qui a une maison ?*, \"what do you call the person who owns a house?\": le propriétaire." },
      { t: "sub", v: "Give a situation" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Quand tu ne dois pas payer quelque chose, c'est … ?", "When you don't have to pay for something, it's …? (gratuit)"],
        ["Si tu mélanges du rouge et du blanc, ça fait du …", "If you mix red and white, you get … (rose)"],
      ]},
      { t: "sub", v: "Give the opposite, or a word from the same family" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Quel est le contraire de froid ?", "What's the opposite of cold? (chaud)"],
        ["Quel est le contraire de sombre ?", "What's the opposite of dark? (clair)"],
        ["Quel est le nom pour chaud ?", "What's the noun for hot? (la chaleur)"],
        ["Quel est le verbe pour un livre ?", "What's the verb for a book? (lire)"],
      ]},
      { t: "note", v: "When the French forget what an object is called, they often say *un truc*, \"a thing\": *passe-moi le truc*, \"pass me the thing\"." },
    ],
  },
  {
    tab: "Rephrase",
    h: "5 · Saying it another way",
    blocks: [
      { t: "lead", v: "When you don't have the words, say it more simply or in another way: *j'ai fermé la porte avec la clé*, \"I locked the door\"." },
      { t: "sub", v: "Keep only what matters" },
      { t: "note", v: "The details can usually go. For \"I had a terrible headache and my throat was hurting so I couldn't leave home\", say *j'étais malade donc je suis resté à la maison*, \"I was ill so I stayed at home\"." },
      { t: "note", v: "For \"my mother broke her collarbone so she is on bed rest\", say *ma mère a eu un accident donc elle ne peut pas bouger*, \"my mother had an accident so she can't move\"." },
      { t: "sub", v: "Say it another way" },
      { t: "note", v: "Picture what happened and describe it in other words. For \"I quit my job because I couldn't handle it anymore\", say *j'ai décidé d'arrêter de travailler dans mon entreprise parce que c'était trop difficile*, \"I decided to stop working at my company because it was too hard\"." },
      { t: "note", v: "For \"I have the support of my family\", say *ma famille peut m'aider*, \"my family can help me\"." },
      { t: "note", v: "Word for word often fails: *we had a late night* is *on s'est couchés tard*, \"we went to bed late\", and *I have no reception* is *je n'ai pas de réseau*." },
      { t: "sub", v: "Show it" },
      { t: "pairs", head: ["French", "English"], v: [
        ["C'est un objet qui a cette forme-là", "It's an object with this shape"],
        ["C'est grand comme ça", "It's this big"],
        ["C'est un animal qui fait ce bruit", "It's an animal that makes this noise"],
        ["Comment s'appelle cette partie du corps ?", "What's this part of the body called?"],
      ]},
    ],
  },
];

export const LESSON = {
  id: "communication",
  title: "Communication",
  subtitle: "What to say when you don't understand, aren't understood, or can't find the word",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's), as the
  // notes tabs run.
  teachingOrder: ["notclear", "missed", "check", "correct", "word", "guess", "family", "rephrase", "idioms"],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). Phrase and word cards carry none.
  instructions: {
    missed: "Ask only about the part you didn't catch, with a question word",
    guess: "Write the word described",
    family: "Write the word asked for",
  },
};

export default LESSON;
