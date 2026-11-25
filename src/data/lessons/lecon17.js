// Leçon 17 · Sortir et boire — built from Laura Caufour's LFL METHOD Leçon 17
// sheets: the lesson (Melissa and Jessica talk about what they ate and
// drink; sortir and boire in the present, the passé composé and the
// imparfait; sortir with être or avoir; the determiners, and how to say
// an English noun that has no word in front of it: le, la, les or du, de la,
// des; words of amount + de; numbers 1000–9000), the exercise sheet and her
// answer key.
//
// Each entry is [front, back, category, section].
//
// The students are beginners who have done Leçons 1–16 and nothing else: by
// now the present of the -er verbs and of the irregular verbs of Leçons 1–16,
// the passé composé with avoir or être, the imparfait (Leçon 13), le, la,
// les, un, une, des (Leçon 3), un / une / des → de after ne … pas (Leçon 5),
// reflexive verbs (Leçon 11), the object pronouns (Leçons 10 and 16), and the
// numbers to 999. No card asks for more than that plus this lesson. Questions
// are asked the way Laura asks them, by intonation — "Tu bois du café ?",
// "Tu as acheté de la viande ?" — never by inversion. Leçon 14 taught the
// three ways of asking, and a phrase card knows only one, so the English of
// each question card names it, as Leçon 14's do: "(tu, question mark only)",
// the name of that way in Leçon 14's notes, on "Tu veux du thé ?" and
// "Depuis combien de temps tu es végétarien ?", and "(tu, with qu'est-ce que
// and à table)" on "Qu'est-ce que tu bois à table ? De l'eau ?". The hint
// makes fair what the marker does: "Veux-tu du thé ?", "Depuis combien de
// temps es-tu végétarien ?", "Depuis combien de temps est-ce que tu es
// végétarien ?" and "Que bois-tu à table ? De l'eau ?" are refused (tried);
// under the old hint "(tu)" nothing said they would be. Not "everyday":
// Leçon 14 calls est-ce que everyday too, and the est-ce que question is
// refused on the végétarien card. Not "casual": that is Leçon 14's word for
// the question word at the end. Leçons 18–20 come later:
// no card here asks for répondre, partir, ouvrir, vendre, lire, écrire or the
// conditionnel.
//
// Card shapes:
//   "boire (présent) → je" / "je bois"              drill; its line comes from its shape
//   "boire (imparfait) → nous" / "nous buvions"     the same, in the imparfait
//   "sortir (passé composé) → je"                   the same, in the passé composé: one person
//                                                   per card (see WHY ONE PERSON)
//   "sortir → Ce matin, Jessica ___ le chien"       sortir in the passé composé, with être or
//                                                   avoir (her construction section)
//   "le ou du → Il boit ___ café tous les matins"   pick the article: in general, or an amount
//   "Tu bois du café ? → Non, …"                    answer no in a full sentence, with or
//                                                   without the Non the prompt shows
//   "J'ai bu du vin hier soir → avec trop"          say it with the word of amount (her ex. 5)
//   "2000 → en lettres" / "deux mille"
//   "le fromage" / "cheese"                         words and phrases, both ways round
//
// WHY THE ARTICLE, THE AMOUNTS AND ÊTRE / AVOIR ARE ALL → CARDS. Word and
// phrase cards are marked fuzzily, and this lesson's points are a letter or
// two wide. Shown the English, the phrase cards let through exactly what the
// lesson is about (each tried with lessoncheck --try):
//   - the wrong article: "Tu veux le thé ?" passes for "Tu veux du thé ?",
//     and "J'adore du vin, surtout avec le fromage" for "J'adore le vin, …";
//   - an article kept after a word of amount: "Je mange trop de la viande en
//     ce moment" passes for "Je mange trop de viande en ce moment";
//   - être for avoir: "On est bu du vin et on a mangé du fromage hier soir"
//     passes for "On a bu du vin …".
// So every choice the lesson teaches is on an exact card: le or du (eight gap
// cards, one general and one amount for each of le / du, la / de la,
// l' / de l', les / des), du → de after ne … pas (the answer-no cards), the
// word of amount + de (her ex. 5), avoir with boire (the drills), and être or
// avoir with sortir, with its ending (three gap cards). The phrase cards are
// there for the meaning of whole sentences. The sortir phrase card does
// refuse "Je suis sorti le chien" for "J'ai sorti le chien" (tried), but it
// can't check the ending: that is the gap cards' "a sorti", not "a sortie".
// Shown the English, "Depuis combien de temps tu es végétarienne ?" passes as
// close, which is right: a woman would write it so. "Je préfère manger le
// sucré le matin" also passes as close (tried); the card's English says "(with
// du sucré)", and the article is the gap cards' job. One gap no wording
// closes: shown "lunch", "le petit-déjeuner" passes as close, because it
// contains le déjeuner (tried); the word card is for the meaning. The
// answer-no line says "repeating the noun", because Leçon 16's answer cards
// put a pronoun in the noun's place: under a plain "Answer no in a full
// sentence", "Non, je ne l'aime pas" was refused for "Tu aimes le thé ?"
// (tried), and these cards are about the article after ne … pas.
//
// WHY ONE PERSON ON THE SORTIR PASSÉ COMPOSÉ DRILLS. An "il/elle" drill also
// accepts its answer with the other pronoun swapped in and nothing else
// changed (personAlternates in src/lib/cardInstruction.js), so "→ ils/elles"
// would accept "elles sont sortis". The sortir drills name one person, as
// Leçon 7's do: "→ je" takes sorti and sortie, "→ ils" takes sortis. Boire
// takes avoir and bu never changes, so its drills can say "→ ils/elles".
// Leçon 7 has "sortir (passé composé) → elle" and the word card "sortir";
// neither is repeated here.
//
// WHAT WAS SAMPLED, AND WHAT WAS LEFT:
//   - Drills: sortir and boire in the present, six persons each (her two
//     tables; neither verb has a present drill in Leçons 1–16). Passé
//     composé: sortir → je (sorti or sortie) and → ils (sortis); boire → je
//     (the j' of j'ai bu) and → ils/elles. The other persons are être and
//     avoir again. Imparfait (Leçon 13's tense, these two verbs new): sortir
//     → je (the t comes back: sortais, not sorais) and → nous (sortions, not
//     the present sortons); boire → je, → nous and → ils/elles, because its
//     stem is buv- throughout (je buvais, not boivais), from nous buvons.
//   - Sortir with être or avoir (her "Construction du verbe"): three gap
//     cards. "Il ___ du travail à 18h" is her example (de + a place: être).
//     "Ce matin, Jessica ___ de la maison à 8h" and "Ce matin, Jessica ___ le
//     chien" are a pair of ours, the same woman both times, so that est
//     sortie and a sorti (no -e with avoir) are told apart by what follows
//     sortir; "sortir le chien" is her example "J'ai sorti le chien", which
//     is also a phrase card. Her "Il faut sortir la poubelle verte tous les
//     mercredis" is in the notes only (il faut is not taught yet).
//   - The articles (her ex. 2, 3 and 4, translations into French): eight gap
//     cards, two per pair of articles, each in one of her sentences. The
//     amount ones: "Il boit ___ café tous les matins" (her lesson's example),
//     "En entrée, j'ai mangé des tomates, du concombre et ___ feta" (her
//     dialogue), "Je bois seulement ___ eau à table" (ex. 3 no. 17), "Il y a
//     ___ légumes sur la table ?" (ex. 4 no. 11). The general ones: "Les
//     Français adorent ___ fromage" (her translation example), "Je n'aime
//     pas ___ viande, je préfère le poisson" (ex. 3 no. 14), "___ eau est
//     très importante pour toi" (ex. 3 no. 18), "J'adore ___ légumes" (ex. 4
//     no. 4). Her questions "Tu veux ___ thé ?", "C'est ___ fromage ?", "Elle
//     mange ___ viande ?" and "Tu as acheté ___ œufs ?" are not gap cards:
//     with no English beside them, le / la / les is right too ("Did you buy
//     the eggs?"). In the sentences chosen, the other choice would be wrong:
//     du, de la, de l' or des after adorer and aimer and as a subject; le,
//     la, l' or les in a list with des and du, after seulement and after il
//     y a; and in "Il boit ___ café tous les matins", her own model sentence,
//     le is so odd that a teacher would mark it wrong.
//   - Her translations (ex. 2, 3, 4 and 6) gave seven phrase cards, each for
//     something no other card has: ex. 2 no. 6 (English "some" → du), ex. 6
//     no. 1 (du sucré, "sweet things"; its English says "(with du sucré)",
//     since "Je préfère manger des choses sucrées le matin" is good French
//     and was refused, tried), no. 2 (à table; its English says "(tu, with
//     qu'est-ce que and à table)", since "Qu'est-ce que tu bois quand tu
//     manges ? De l'eau ?" and "… avec tes repas ? …" are good French and
//     were refused, tried), no. 5 (boire and manger in the passé composé,
//     with on), no. 8 (depuis with the present where English has "have
//     been": "Depuis combien de temps tu as été végétarien ?" is refused,
//     tried; with this lesson's végétarien, and the question word first,
//     where Leçon 14's "Tu es là depuis combien de temps ?" has it last. "Tu
//     es un végétarien" passes as close, which is fair: végétarien is a noun
//     too, Larousse "végétarien adj. et n."), no. 9 (surtout; also the
//     dialogue's), no. 20 (se faire: je me suis fait une tartine). Ex. 6 no.
//     12 (trop de, "too much") is one more, after the amount cards. The rest repeat a gap or amount card, are
//     negative (phrase cards keep negatives out, as in Leçons 5, 9 and 10,
//     where a dropped ne or a pas in the wrong place passed as close), or
//     carry a slip (see DEPARTURES).
//   - The negative (pas de): five answer-no cards made from her questions
//     (see DEPARTURES): du → de (ex. 2 no. 5, Tu bois du café ?), de l' → d'
//     (ex. 2 no. 11, Elle boit de l'eau ?), de la → de in the passé composé
//     (ex. 2 no. 17, Tu as acheté de la viande ?), le that stays (ex. 3 no. 9,
//     le thé), and du that stays after c'est (ex. 2 no. 4, C'est du fromage ?).
//   - Ex. 5 (words of amount): five cards, one per word and per article:
//     no. 3 (beaucoup, du monde), no. 9 (trop, after the participle), no. 6
//     (pas mal, des → d', and no ne), no. 15 (pas beaucoup, with ne … pas
//     around the verb), no. 8 (un peu, de l' → d'). No. 1, her worked
//     example, and nos. 2, 5, 11 and 16 are examples in the notes. Nos. 4, 12
//     and 14 repeat the cards' words and articles. Nos. 7, 10 and 13 are left
//     out (see DEPARTURES).
//   - Ex. 1 is the word list. Left out: breakfast (le petit-déjeuner, Leçon
//     7's card), to buy (acheter, on Leçon 12's list), to stop (arrêter,
//     Leçon 9's card); and dessert, a fruit, a tomato and proteins, which are
//     the same word in English or one letter from it, so a card would teach
//     only the article (Leçons 4 and 9 left out un barbecue, un village and
//     une région for the same reason). Lunch is in: Leçon 7's card is the
//     verb déjeuner, "to have lunch", and this is the noun, le déjeuner.
//     Vegetarian, fresh, sweet and savory are given masculine, as Leçon 9
//     gives australien; fresh also has its feminine, fraîche, because it is
//     irregular. The feminine endings are Leçon 6's grammar.
//   - Numbers: 1000 (mille, with no un), 2000 (deux mille: the first that
//     could wrongly take an -s, as deux cents does), 5000 and 9000, two more
//     on the same pattern. 3000, 4000, 6000, 7000 and 8000 follow it too.
//   - Left out, as in Leçons 2–10: ex. 7 (dictation). Her table of the other
//     determiners (possessives, demonstratives, numbers) is Leçons 3 and 4's
//     and has no cards here; her "Concept ou chose abstraite" rows (Il a
//     choisi la liberté, Elle a du courage) have no card and are not in the
//     notes.
//
// DEPARTURES FROM HER SHEETS:
//   - Her lesson's example "Il boit du café tous les matin" is written tous
//     les matins (her key ex. 3 no. 3 writes it so) on its gap card and in the
//     notes.
//   - The answer-no cards are not an exercise of hers: her Leçon 17 has no
//     answer-yes or answer-no exercise, and her sheets never put du, de la or
//     de l' after ne … pas. They are her own questions (ex. 2 nos. 4, 5, 11,
//     17; ex. 3 no. 9's "I don't like tea" made a question) answered no, for
//     the rule her Leçon 5 gives for un, une and des. The rule for du, de la
//     and de l', and its exception after c'est, are from the OQLF Banque de
//     dépannage linguistique, "De dans une phrase négative"
//     (vitrinelinguistique.oqlf.gouv.qc.ca/23514): "Nicole ne boira pas de
//     vin ce soir", and "Ce n'est pas du grésil" for être. Each card takes the
//     answer with and without Non, as in Leçons 5 and 9.
//   - "Tu bois du café ? → Non, …" is her ex. 2 no. 5, whose English is "Do
//     you drink coffee?" and whose key says "Tu as bu du café ?" (past). The
//     card follows the English.
//   - "Tu peux me donner de l'eau ? → avec un peu": her ex. 5 no. 8 has "…
//     de l'eau s'il te plaît ?" and her answer drops the s'il te plaît. The
//     front drops it too, so that her answer is the card's answer.
//   - "Il y a du monde à l'aéroport → avec beaucoup", "Il a des amis
//     français → avec pas mal" and the other amount cards keep the rest of the
//     sentence as it is. Not used: no. 10, where her answer changes "là" to
//     "là-bas"; no. 13, where it drops "Il est très nerveux"; no. 7, which
//     asks the same as no. 15 with a longer sentence. No. 6's answer, "Il a
//     pas mal d'amis français", has no ne: pas mal de is not a negative
//     (Larousse, mal, adv., expressions: "Familier. Pas mal (du tout) …
//     indique une quantité relativement importante, beaucoup : J'ai pas mal
//     d'ennuis en ce moment").
//   - Word list, no. 25: her key has "l'entrée" for "a starter"; the card is
//     une entrée, as the English has "a". No. 21's English has a hint, since
//     "sweet" fits doux too (Leçon 6): sucré is "sweet / sugary (taste)".
//     Some English sides carry more than her word, so that a right answer
//     isn't marked wrong (each tried, French shown):
//       - une tartine: "a slice of toast / a piece of toast" (her translation
//         and ex. 3 no. 13) and "a slice of bread and butter" beside her "a
//         toast". A tartine needn't be toasted: Académie française, 9th ed.,
//         "tartine": "Tranche de pain que l'on recouvre de beurre, de
//         confiture ou d'une autre préparation crémeuse"; WordReference:
//         "slice of bread and [spread]". Not "a slice of bread" alone: the
//         English side shows every answer, and that one is une tranche de
//         pain. On the tartine sentence card her "a toast" now comes last and
//         "a slice of toast" (her dialogue's translation) first, as Leçon 5
//         puts what most English speakers say first.
//       - salé: "salty", "salted" and "savoury" beside her "savory"
//         (WordReference, salé: "salty", "salted", "savoury / savory").
//       - une entrée: also "an entrance / an entry", its commonest meaning
//         (WordReference, entrée: "entrance", "entry, admission", then
//         "starter", "first course"), as un avocat is also "a lawyer". Shown the
//         French, a student never saw the old hint "(in a meal)", which was
//         on the English side; it is dropped, since "a starter" beside "an
//         entrance" needs no hint.
//       - le café: also "the café", the place (Larousse, café, sense 4:
//         "Établissement où l'on consomme des boissons"), which the students
//         met in Leçon 16's "Il nous attendait au café".
//       - un œuf sur le plat "a fried egg" (her translation) beside her "sunny
//         side up egg"; le plat principal "the main course"; d'ailleurs
//         "speaking of which / by the way / besides / for that matter /
//         incidentally" beside her "speaking about that"; Ça a l'air délicieux
//         "Sounds delicious!" (her ex. 6 no. 16) and "It looks delicious!"
//         (her list).
//     Nouns shown without an article in her English also take "the" ("the
//     wine" for le vin), as Leçon 6 takes "the eyes / eyes".
//   - "J'adore le vin, surtout avec le fromage" is the dialogue's; her key
//     for the same English (ex. 6 no. 9) has "avec du fromage". Both are good
//     French (cheese in general, or some cheese); the card's English is the
//     same either way, and the fuzzy marker takes either.
//   - "Qu'est-ce que tu bois à table ? De l'eau ?" (ex. 6 no. 2) takes "with
//     your meals" and "at the table" beside her "when you eat", and names à
//     table in its hint (see WHAT WAS SAMPLED).
//   - "J'ai sorti le chien" carries "(with sortir)": promener le chien, "to
//     walk the dog", is right French for "I walked the dog" too. It also takes
//     "I took the dog for a walk". Le chien is in her lesson's example, not on
//     her list.
//   - Numbers: she writes deux mille … neuf mille. The cards also take
//     deux-mille … neuf-mille, the 1990 spelling, which links every part of a
//     number with hyphens (OQLF, "Rectifications liées aux numéraux
//     composés": both spellings are correct; her own Leçons 6–10 use that
//     spelling for vingt-et-un). Mille never takes an -s (OQLF, "Pluriel de
//     vingt, de cent et de mille": "Ils étaient trois mille étudiants").
//   - Slips no card or note copies, for Laura: the dialogue's "la viande que
//     j'ai acheté" (achetée, as her key ex. 6 no. 3 has it); ex. 2 no. 16 "C'est
//     de l'eau." (a question); ex. 3 no. 2 "J'adore la café" (le café); ex. 3
//     no. 7 "du café" for "a coffee" (un café); ex. 3 no. 8 "hier" for "last
//     night" (hier soir); ex. 3 no. 16 drops "frais"; ex. 4 no. 3 "J'ai acheté
//     des pâtes" for "I ate pasta" (J'ai mangé); ex. 4 no. 10 "des chaussures
//     marrons" (marron, invariable: Leçon 6); ex. 4 no. 13 "des enfants" for
//     "grandchildren" (des petits-enfants); ex. 4 no. 16 "aiment jouer" for
//     "need to play"; ex. 4 no. 17 "Je prendes" (prends); ex. 6 no. 3 "hier"
//     for "at the butcher's" (chez le boucher); ex. 6 no. 4 "qu' elle"
//     (qu'elle); ex. 6 no. 7 "Tu bois" for "Do you want" (Tu veux); ex. 6 no.
//     13 "Je le/la remplace avec" where her dialogue has "remplace par", the
//     usual construction (remplacer quelque chose par quelque chose); the
//     dictation's "j'ai prix" (pris).
//
// THE NOTES are her lesson translated into English and restructured on the
// impératif's model, with no Use tab: what sortir and boire mean is the Forms
// opening line, as in Leçon 9. Forms (her two tables, by tense), Sortir (her
// "Construction du verbe"), Articles (her determiners, her "∅ + noun" table
// and her summary table), Negative (pas de; see SENTENCES … NOT HERS),
// Amounts (her "adverbes de quantité"), Numbers. Her list of words of amount
// stays whole: it is the rule (owner, 2026-10-14). No word list and no
// dialogue: the word and phrase cards are how the words are learned. Her
// grammar examples have no English; the English beside them is ours.
//
// SENTENCES IN THE NOTES THAT ARE NOT HERS. Her tables, examples or key show
// each of these, but her lesson never says it, and a card that tests a rule
// needs the rule stated:
//   - Forms: "learn their forms by heart" (her heading says only that they
//     are irregular); "Sortir takes être when it means "to go out", and boire
//     takes avoir" (her tables show it); "With être, sorti takes -e for a
//     woman, -s for two or more people when at least one is a man, and -es
//     for two or more women" (Leçon 7's wording; her table shows only the
//     masculine: the elle and elles rows are ours); the imparfait note ("take
//     the nous form of the present, drop -ons …", with nous buvons, "we
//     drink"), which is her Leçon 13 rule, stated here for these two verbs.
//   - Sortir: "With avoir, sorti takes no -e for a woman: Jessica a sorti le
//     chien" (ours), and the examples "Jessica est sortie de la maison à 8h"
//     and "Jessica a sorti le chien" (the gap cards'); the agreement note
//     there is the Forms one again, with "elles sont sorties" added for the
//     -es. The lead and the two
//     notes put her "intransitif / transitif direct" in plain words: être when
//     you go out, alone or with de and the place; avoir when what you take
//     out follows sortir.
//   - Articles: the lead puts her "∅ + noun" table in one sentence; "English
//     often says "some" here, or nothing at all" is her "∅ ou some"; the
//     lesson's one "The trap:": a noun straight after aimer, adorer or
//     préférer takes le, la, l' or les, never du. Her examples show it
//     (J'adore le vin, Je préfère le café, Je n'aime pas les légumes, Il
//     préfère les fruits); her lesson doesn't say it. Its example, "j'aime le
//     café … not j'aime du café", is ours. "Straight after" is there because
//     of the note that follows it: "When another verb, like manger, comes
//     between aimer, adorer or préférer and the noun, an amount takes du",
//     whose example is her ex. 3 no. 11, "J'aime manger du fromage le matin";
//     her ex. 6 no. 1, "Je préfère manger du sucré le matin", a phrase card,
//     is the same. Without it the trap, worded "what you like, love or
//     prefer … never du", contradicted that card.
//   - Negative: the whole tab (see DEPARTURES: the rule is the OQLF's, and
//     Leçon 5's for un, une, des). Its examples are her sentences made
//     negative, and "Je n'aime pas le thé" is her ex. 3 no. 9.
//   - Amounts: "Before a vowel, de becomes d'" (her key: pas mal d'amis, un
//     peu d'eau, trop d'exercices); "Pas mal de … is not a negative, so it
//     takes no ne" (her key ex. 5 nos. 6 and 11; Larousse); "Ne … pas goes
//     around the verb, and beaucoup de stays as it is" (her ex. 5 nos. 7 and
//     15); "In the passé composé, the word of amount and de come after the
//     past participle" (her ex. 5 nos. 2, 4, 9, 12 and 16). Un peu de and pas
//     mal de, from her ex. 5, are added to her list, and the English of the
//     list is ours.
//   - Numbers: the lead ("no un in front and never takes an -s"); her list
//     shows both without saying them.

export const CARDS = [
  // ── Her word list (ex. 1), less the words other cards or lessons own
  ["une tartine", "a slice of toast / a piece of toast / a slice of bread and butter / a toast", "V", "words"],
  ["le vin", "wine / the wine", "V", "words"],
  ["un citron", "a lemon", "V", "words"],
  ["le déjeuner", "lunch / the lunch", "V", "words"],
  ["un œuf", "an egg", "V", "words"],
  ["un œuf sur le plat", "a fried egg / a sunny side up egg / a sunny-side-up egg", "V", "words"],
  ["le boucher", "the butcher", "V", "words"],
  ["végétarien", "vegetarian (masc.)", "V", "words"],
  ["un concombre", "a cucumber", "V", "words"],
  ["un avocat", "an avocado / a lawyer", "V", "words"],
  ["le riz", "rice / the rice", "V", "words"],
  ["le poisson", "fish / the fish", "V", "words"],
  ["frais", "fresh (masc.)", "V", "words"],
  ["fraîche", "fresh (fem.)", "V", "words"],
  ["l'eau (f)", "water / the water", "V", "words"],
  ["la viande", "meat / the meat", "V", "words"],
  ["le fromage", "cheese / the cheese", "V", "words"],
  ["remplacer", "to replace", "V", "words"],
  // "sweet" alone is also doux, Leçon 6's card.
  ["sucré", "sweet / sugary (taste, masc.)", "V", "words"],
  ["salé", "savory / savoury / salty / salted (masc.)", "V", "words"],
  ["le sel", "salt / the salt", "V", "words"],
  ["une entrée", "a starter / an appetizer / an appetiser / a first course / an entrance / an entry", "V", "words"],
  ["les pâtes (f)", "pasta / the pasta", "V", "words"],
  ["le café", "coffee / the coffee / the café", "V", "words"],
  ["boire", "to drink", "V", "words"],
  ["le thé", "tea / the tea", "V", "words"],
  ["le plat principal", "the main course / the main dish / main course / main dish", "V", "words"],
  ["d'ailleurs", "speaking of which / speaking about that / by the way / besides / for that matter / incidentally", "V", "words"],
  ["Ça a l'air délicieux !", "It looks delicious! / Sounds delicious! / That looks delicious! / That sounds delicious! / It sounds delicious!", "E", "words"],
  ["J'ai faim", "I'm hungry / I am hungry", "E", "words"],

  // ── 1. Sortir: present, passé composé, imparfait
  ["sortir (présent) → je", "je sors", "G", "sortir"],
  ["sortir (présent) → tu", "tu sors", "G", "sortir"],
  ["sortir (présent) → il/elle", "il sort", "G", "sortir"],
  ["sortir (présent) → nous", "nous sortons", "G", "sortir"],
  ["sortir (présent) → vous", "vous sortez", "G", "sortir"],
  ["sortir (présent) → ils/elles", "ils sortent", "G", "sortir"],
  // One person per card: an il/elle or ils/elles drill would also accept
  // "elle est sorti". Leçon 7 has "→ elle".
  ["sortir (passé composé) → je", "je suis sorti / je suis sortie", "G", "sortirpc"],
  ["sortir (passé composé) → ils", "ils sont sortis", "G", "sortirpc"],

  // Être when you go out (alone, or de + a place); avoir when what you take
  // out follows. The same woman twice, so the ending can't be guessed.
  ["sortir → Il ___ du travail à 18h", "est sorti", "G", "sortiravoir"],
  ["sortir → Ce matin, Jessica ___ de la maison à 8h", "est sortie", "G", "sortiravoir"],
  ["sortir → Ce matin, Jessica ___ le chien", "a sorti", "G", "sortiravoir"],
  ["J'ai sorti le chien", "I took the dog out / I took out the dog / I walked the dog / I took the dog for a walk (with sortir)", "E", "sortirphrases"],

  ["sortir (imparfait) → je", "je sortais", "G", "sortirimp"],
  ["sortir (imparfait) → nous", "nous sortions", "G", "sortirimp"],

  // ── 1. Boire: present, passé composé, imparfait
  ["boire (présent) → je", "je bois", "G", "boire"],
  ["boire (présent) → tu", "tu bois", "G", "boire"],
  ["boire (présent) → il/elle", "il boit", "G", "boire"],
  ["boire (présent) → nous", "nous buvons", "G", "boire"],
  ["boire (présent) → vous", "vous buvez", "G", "boire"],
  ["boire (présent) → ils/elles", "ils boivent", "G", "boire"],
  ["boire (passé composé) → je", "j'ai bu", "G", "boirepc"],
  ["boire (passé composé) → ils/elles", "ils ont bu", "G", "boirepc"],
  ["boire (imparfait) → je", "je buvais", "G", "boireimp"],
  ["boire (imparfait) → nous", "nous buvions", "G", "boireimp"],
  ["boire (imparfait) → ils/elles", "ils buvaient", "G", "boireimp"],

  // ── 2. In general (le, la, l', les) or an amount (du, de la, de l', des):
  //       one of each for every pair, in her sentences
  ["le ou du → Il boit ___ café tous les matins", "du", "G", "articles"],
  ["le ou du → Les Français adorent ___ fromage", "le", "G", "articles"],
  ["la ou de la → En entrée, j'ai mangé des tomates, du concombre et ___ feta", "de la", "G", "articles"],
  ["la ou de la → Je n'aime pas ___ viande, je préfère le poisson", "la", "G", "articles"],
  ["l' ou de l' → Je bois seulement ___ eau à table", "de l'", "G", "articles"],
  ["l' ou de l' → ___ eau est très importante pour toi", "l'", "G", "articles"],
  ["les ou des → Il y a ___ légumes sur la table ?", "des", "G", "articles"],
  ["les ou des → J'adore ___ légumes", "les", "G", "articles"],

  // Her translations (ex. 2 and 6), for the whole sentence
  // The question cards' English names the way of asking: Leçon 14 taught
  // three, and a phrase card knows one (see the header).
  ["Tu veux du thé ?", "Do you want some tea? / Do you want tea? / Would you like some tea? / Would you like tea? (tu, question mark only)", "E", "sentences"],
  ["Je préfère manger du sucré le matin", "I prefer to eat sweet things in the morning / I prefer eating sweet things in the morning / I prefer to eat sweet food in the morning / I prefer eating sweet food in the morning (with du sucré)", "E", "sentences"],
  ["Qu'est-ce que tu bois à table ? De l'eau ?", "What do you drink when you eat? Water? / What do you drink with your meals? Water? / What do you drink with meals? Water? / What do you drink at the table? Water? (tu, with qu'est-ce que and à table)", "E", "sentences"],
  ["On a bu du vin et on a mangé du fromage hier soir", "We drank wine and ate cheese last night / We drank some wine and ate some cheese last night / We drank wine and we ate cheese last night / We had wine and cheese last night (with on)", "E", "sentences"],
  ["J'adore le vin, surtout avec le fromage", "I love wine, especially with cheese", "E", "sentences"],
  ["Je me suis fait une tartine avec de l'avocat et des œufs", "I made myself a slice of toast with avocado and eggs / I made myself a piece of toast with avocado and eggs / I made myself toast with avocado and eggs / I made myself a toast with avocado and eggs", "E", "sentences"],
  ["Depuis combien de temps tu es végétarien ?", "How long have you been a vegetarian? / How long have you been vegetarian? / For how long have you been a vegetarian? (tu, question mark only)", "E", "sentences"],

  // ── 3. After ne … pas, du, de la, de l' → de; le and c'est du stay.
  //       Each is also accepted without the Non the prompt already shows.
  ["Tu bois du café ? → Non, …", "Non, je ne bois pas de café / Je ne bois pas de café", "G", "negative"],
  ["Elle boit de l'eau ? → Non, …", "Non, elle ne boit pas d'eau / Elle ne boit pas d'eau", "G", "negative"],
  ["Tu as acheté de la viande ? → Non, …", "Non, je n'ai pas acheté de viande / Je n'ai pas acheté de viande", "G", "negative"],
  ["Tu aimes le thé ? → Non, …", "Non, je n'aime pas le thé / Je n'aime pas le thé", "G", "negative"],
  ["C'est du fromage ? → Non, …", "Non, ce n'est pas du fromage / Ce n'est pas du fromage", "G", "negative"],

  // ── 4. A word of amount + de, with no article (her ex. 5)
  ["Il y a du monde à l'aéroport → avec beaucoup", "Il y a beaucoup de monde à l'aéroport", "G", "amounts"],
  ["J'ai bu du vin hier soir → avec trop", "J'ai bu trop de vin hier soir", "G", "amounts"],
  ["Il a des amis français → avec pas mal", "Il a pas mal d'amis français", "G", "amounts"],
  ["Je mange de la viande → avec pas beaucoup", "Je ne mange pas beaucoup de viande", "G", "amounts"],
  ["Tu peux me donner de l'eau ? → avec un peu", "Tu peux me donner un peu d'eau ?", "G", "amounts"],
  ["Je mange trop de viande en ce moment", "I eat too much meat at the moment / I'm eating too much meat at the moment / I eat too much meat right now / I'm eating too much meat right now / I eat too much meat these days", "E", "amountsentences"],

  // ── 5. Numbers 1000–9000
  ["1000 → en lettres", "mille", "G", "numbers"],
  ["2000 → en lettres", "deux mille / deux-mille", "G", "numbers"],
  ["5000 → en lettres", "cinq mille / cinq-mille", "G", "numbers"],
  ["9000 → en lettres", "neuf mille / neuf-mille", "G", "numbers"],
];

// The notes, for a student stuck on a card. Her grammar sections in her
// order, one tab each; see the header for what isn't hers.
export const NOTES = [
  {
    tab: "Forms",
    h: "1 · Sortir and boire",
    blocks: [
      { t: "lead", v: "**Sortir**, \"to go out\", and **boire**, \"to drink\", are irregular: learn their forms by heart." },
      { t: "table", caption: "Present tense",
        cols: ["Person", "sortir", "boire"],
        rows: [
          ["je", "je sors", "je bois"],
          ["tu", "tu sors", "tu bois"],
          ["il, elle", "il, elle sort", "il, elle boit"],
          ["nous", "nous sortons", "nous buvons"],
          ["vous", "vous sortez", "vous buvez"],
          ["ils, elles", "ils, elles sortent", "ils, elles boivent"],
        ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["Elle sort tous les week-ends", "She goes out every weekend"],
        ["Il boit du café tous les matins", "He drinks coffee every morning"],
      ]},
      { t: "sub", v: "Passé composé" },
      { t: "note", v: "Sortir takes être when it means \"to go out\", and boire takes avoir: *je suis sorti*, \"I went out\"; *j'ai bu*, \"I drank\"." },
      { t: "table", caption: "Passé composé",
        cols: ["Person", "sortir", "boire"],
        rows: [
          ["je", "je suis sorti", "j'ai bu"],
          ["tu", "tu es sorti", "tu as bu"],
          ["il", "il est sorti", "il a bu"],
          ["elle", "elle est sortie", "elle a bu"],
          ["nous", "nous sommes sortis", "nous avons bu"],
          ["vous", "vous êtes sortis", "vous avez bu"],
          ["ils", "ils sont sortis", "ils ont bu"],
          ["elles", "elles sont sorties", "elles ont bu"],
        ]},
      { t: "note", v: "With être, sorti takes -e for a woman, -s for two or more people when at least one is a man, and -es for two or more women: a woman writes *je suis sortie*, \"I went out\"." },
      { t: "sub", v: "Imparfait (imperfect)" },
      { t: "note", v: "Take the nous form of the present, drop the -ons and add -ais, -ais, -ait, -ions, -iez, -aient: *nous buvons*, \"we drink\", gives *je buvais*, \"I was drinking\" or \"I used to drink\"." },
      { t: "table", caption: "Imparfait",
        cols: ["Person", "sortir", "boire"],
        rows: [
          ["je", "je sortais", "je buvais"],
          ["tu", "tu sortais", "tu buvais"],
          ["il, elle", "il, elle sortait", "il, elle buvait"],
          ["nous", "nous sortions", "nous buvions"],
          ["vous", "vous sortiez", "vous buviez"],
          ["ils, elles", "ils, elles sortaient", "ils, elles buvaient"],
        ]},
    ],
  },
  {
    tab: "Sortir",
    h: "2 · Sortir with être or avoir",
    blocks: [
      { t: "lead", v: "In the passé composé, sortir takes être when it means \"to go out\" and avoir when it means \"to take something out\": *je suis sorti*, \"I went out\"; *j'ai sorti le chien*, \"I took the dog out\"." },
      { t: "sub", v: "Going out · être" },
      { t: "note", v: "Use être when you go out, on its own or with de and the place you leave: *il est sorti du travail à 18h*, \"he left work at 6pm\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je suis sorti hier soir", "I went out last night"],
        ["Il est sorti du travail à 18h", "He left work at 6pm"],
        ["Jessica est sortie de la maison à 8h", "Jessica left the house at 8am"],
      ]},
      { t: "note", v: "With être, sorti takes -e for a woman, -s for two or more people when at least one is a man, and -es for two or more women: *elle est sortie*, \"she went out\"; *ils sont sortis* or, for women only, *elles sont sorties*, \"they went out\"." },
      { t: "sub", v: "Taking something out · avoir" },
      { t: "note", v: "Use avoir when what you take out comes straight after sortir, with no de: *j'ai sorti le chien*, \"I took the dog out\"." },
      { t: "note", v: "With avoir, sorti takes no -e for a woman: *Jessica a sorti le chien*, \"Jessica took the dog out\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["J'ai sorti le chien", "I took the dog out"],
        ["Jessica a sorti le chien", "Jessica took the dog out"],
        ["Il faut sortir la poubelle verte tous les mercredis", "You have to take the green bin out every Wednesday"],
      ]},
    ],
  },
  {
    tab: "Articles",
    h: "3 · Le or du: in general, or an amount",
    blocks: [
      { t: "lead", v: "Where English has no word before a noun, French uses **le, la, l'** or **les** for the thing in general, and **du, de la, de l'** or **des** for an amount of it: *j'adore le fromage*, \"I love cheese\"; *je mange du fromage*, \"I'm eating cheese\"." },
      { t: "table", bold: 0,
        cols: ["", "In general", "An amount"],
        rows: [
          ["Masculine", "le fromage · cheese", "du fromage · cheese, some cheese"],
          ["Feminine", "la viande · meat", "de la viande · meat, some meat"],
          ["Before a vowel", "l'eau · water", "de l'eau · water, some water"],
          ["Plural", "les légumes · vegetables", "des légumes · vegetables, some vegetables"],
        ]},
      { t: "sub", v: "In general · le, la, l', les" },
      { t: "note", v: "Use le, la, l' or les when you mean the thing in general, all of it: *les Français adorent le fromage*, \"French people love cheese\"." },
      { t: "note", v: "**The trap:** a noun straight after aimer, adorer or préférer takes le, la, l' or les, never du: *j'aime le café*, \"I like coffee\", not j'aime du café." },
      { t: "note", v: "When another verb, like manger, comes between aimer, adorer or préférer and the noun, an amount takes du: *j'aime manger du fromage le matin*, \"I like to eat cheese in the morning\"." },
      { t: "pairs", head: ["French", "English"], v: [
        ["Les Français adorent le fromage", "French people love cheese"],
        ["Je n'aime pas les légumes", "I don't like vegetables"],
        ["Il préfère les fruits", "He prefers fruit"],
        ["Le thé est bon pour la santé", "Tea is good for your health"],
        ["L'eau est très importante pour toi", "Water is very important for you"],
      ]},
      { t: "sub", v: "An amount · du, de la, de l', des" },
      { t: "note", v: "Use du, de la or de l' for an amount of something you can't count, like water or cheese, and des for a number of things you can count, like eggs: *il boit du café tous les matins*, \"he drinks coffee every morning\"." },
      { t: "note", v: "Du is for a masculine noun and de la for a feminine one. Before a vowel, both become de l': *de l'eau*, \"water\"." },
      { t: "note", v: "English often says \"some\" here, or nothing at all: *tu veux du thé ?*, \"do you want some tea?\"" },
      { t: "pairs", head: ["French", "English"], v: [
        ["Je mange du pain et du fromage, et je bois de l'eau", "I'm eating bread and cheese, and I drink water"],
        ["En entrée, j'ai mangé des tomates, du concombre et de la feta", "As a starter, I had tomatoes, cucumber and feta"],
        ["Il y a des livres sur la table", "There are books on the table"],
        ["Tu veux du thé ?", "Do you want some tea?"],
      ]},
    ],
  },
  {
    tab: "Negative",
    h: "4 · Saying no: pas de",
    blocks: [
      { t: "lead", v: "After ne … pas, du, de la, de l' and des become **de**, or **d'** before a vowel: *je ne bois pas de café*, \"I don't drink coffee\"." },
      { t: "pairs", head: ["Positive", "Negative"], v: [
        ["Je bois du café", "Je ne bois pas de café"],
        ["J'ai acheté de la viande", "Je n'ai pas acheté de viande"],
        ["Elle boit de l'eau", "Elle ne boit pas d'eau"],
        ["Il y a des légumes", "Il n'y a pas de légumes"],
      ]},
      { t: "sub", v: "When the article stays" },
      { t: "note", v: "Le, la, l' and les stay after ne … pas: *je n'aime pas le thé*, \"I don't like tea\"." },
      { t: "note", v: "After c'est, du, de la and de l' stay too: *ce n'est pas du fromage*, \"it isn't cheese\"." },
      { t: "pairs", head: ["Positive", "Negative"], v: [
        ["J'aime le thé", "Je n'aime pas le thé"],
        ["C'est du fromage", "Ce n'est pas du fromage"],
        ["C'est de l'eau", "Ce n'est pas de l'eau"],
      ]},
      { t: "sub", v: "Answering no" },
      { t: "note", v: "Start with Non, then say the whole sentence in the negative, with je where the question has tu: *tu veux du thé ?*, \"do you want some tea?\", becomes *non, je ne veux pas de thé*, \"no, I don't want any tea\"." },
      { t: "pairs", head: ["Question", "Answer"], v: [
        ["Tu veux du thé ?", "Non, je ne veux pas de thé"],
        ["Tu as bu du vin hier soir ?", "Non, je n'ai pas bu de vin hier soir"],
        ["Tu aimes la viande ?", "Non, je n'aime pas la viande"],
      ]},
    ],
  },
  {
    tab: "Amounts",
    h: "5 · Beaucoup de, trop de, un peu de",
    blocks: [
      { t: "lead", v: "After a word for an amount, like *beaucoup*, \"a lot\", use **de** on its own, with no le or du: *j'ai bu beaucoup de vin hier*, \"I drank a lot of wine yesterday\"." },
      { t: "table", bold: 0,
        cols: ["French", "English"],
        rows: [
          ["beaucoup de", "a lot of, much, many"],
          ["trop de", "too much, too many"],
          ["un peu de", "a little, a bit of"],
          ["pas mal de", "quite a lot of"],
          ["peu de", "not much, not many"],
          ["assez de", "enough"],
          ["plus de", "more"],
          ["moins de", "less, fewer"],
        ]},
      { t: "pairs", head: ["Without", "With a word for an amount"], v: [
        ["Il y a des plantes ici", "Il y a beaucoup de plantes ici"],
        ["Tu dois mettre du sel", "Tu dois mettre un peu de sel"],
        ["J'ai mangé du fromage", "J'ai mangé trop de fromage"],
      ]},
      { t: "pairs", head: ["French", "English"], v: [
        ["Il y avait beaucoup de monde", "There were a lot of people"],
        ["J'ai bu plus de vin que toi hier", "I drank more wine than you yesterday"],
        ["Je ne veux pas manger trop de soupe", "I don't want to eat too much soup"],
      ]},
      { t: "sub", v: "Before a vowel" },
      { t: "note", v: "Before a vowel, de becomes d': *j'ai fait trop d'exercices de français*, \"I did too many French exercises\"." },
      { t: "sub", v: "Pas mal de" },
      { t: "note", v: "*Pas mal de*, \"quite a lot of\", is not a negative, so it takes no ne: *ils ont pas mal d'argent*, \"they have quite a lot of money\"." },
      { t: "sub", v: "With ne … pas" },
      { t: "note", v: "Ne … pas goes around the verb, and beaucoup de stays as it is: *je ne connais pas beaucoup de gens qui aiment les brocolis*, \"I don't know many people who like broccoli\"." },
      { t: "sub", v: "In the passé composé" },
      { t: "note", v: "The word for the amount and de come after the past participle: *j'ai mis trop de sel*, \"I put in too much salt\"." },
    ],
  },
  {
    tab: "Numbers",
    h: "6 · Numbers 1,000 to 9,000",
    blocks: [
      { t: "lead", v: "*Mille*, \"a thousand\", has no un in front and never takes an -s: *deux mille*, \"two thousand\"." },
      { t: "table", bold: 1,
        cols: ["Number", "In words"],
        rows: [
          ["1000", "mille"],
          ["2000", "deux mille"],
          ["3000", "trois mille"],
          ["4000", "quatre mille"],
          ["5000", "cinq mille"],
          ["6000", "six mille"],
          ["7000", "sept mille"],
          ["8000", "huit mille"],
          ["9000", "neuf mille"],
        ]},
    ],
  },
];

export const LESSON = {
  id: "lecon17",
  title: "Lesson 17 · Sortir and boire",
  subtitle: "Go out and drink, le or du, pas de, beaucoup de, and 1,000 to 9,000",
  source: "LFL METHOD by Laura Caufour",
  cards: CARDS,
  notes: NOTES,
  // The order a student meets NEW cards in (reviews are FSRS's). Her word
  // list first, as in Leçons 5–10: the verbs before they are conjugated, and
  // the sentences are made of these words. Then her sections in her order,
  // each followed by the cards that practise it: sortir (present, passé
  // composé, être or avoir, then the imparfait), boire the same way; the
  // articles, then the sentences that use them; ne … pas → de; the words of
  // amount, then the sentence that uses one; the numbers.
  teachingOrder: [
    "words",
    "sortir", "sortirpc", "sortiravoir", "sortirphrases", "sortirimp",
    "boire", "boirepc", "boireimp",
    "articles", "sentences",
    "negative",
    "amounts", "amountsentences",
    "numbers",
  ],
  // The line shown above a grammar card saying what to type (see
  // src/lib/cardInstruction.js). The drills get theirs from their shape;
  // words and sentences are two-way phrase cards and carry none.
  instructions: {
    sortiravoir: "Fill the gap with sortir in the passé composé, with être or avoir",
    // Not "articles": the checker reads "les" inside it as the answer shown.
    articles: "Fill the gap with one of the two choices given",
    // "repeating the noun": Leçon 16's answer cards put a pronoun in its
    // place, and "Non, je ne l'aime pas" is refused here.
    negative: "Answer no in a full sentence, repeating the noun",
    amounts: "Rewrite the sentence with the word for an amount given",
    numbers: "Write this number in French, in words",
  },
};

export default LESSON;
