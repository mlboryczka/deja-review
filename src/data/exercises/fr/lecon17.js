// Leçon 17 · Sortir, boire et les articles partitifs — the written exercises
// of "EXERCICES - Leçon 17", for the Exercises page. Her CORRECTION gives
// every answer; the also lists are ours.
// Left out: ex. 7 (dictation: it needs her audio).
// Ex. 2: her sheet puts sentences 1–10 under "Masculin" and 11–19 under
// "Féminin"; as the student sees one item at a time, each prompt ends with
// its heading in brackets.
// Ex. 5: her first item is the worked example, so it is the exercise's
// example, not an item.
// Typos corrected: her instruction to ex. 2 has "un articles partitif" (un
// article partitif); her English in ex. 4 no. 2 has "Did you buys eggs?"
// (buy).
// Her key's slips, corrected on their lines, where her French says something
// the English doesn't: ex. 2 no. 5 (past for "Do you drink"), ex. 3 no. 2
// ("la café"), no. 8 ("last night" without soir), no. 16 ("fresh" missing),
// ex. 4 no. 3 ("acheté" for "ate"), no. 10 ("marrons": marron, a colour that
// is a noun, doesn't agree), no. 13 ("enfants" for "grandchildren"), no. 16
// ("aiment" for "need to"), no. 17 ("prendes"), ex. 6 no. 3 ("hier" for "at
// the butcher's"), no. 4 ("qu' elle"), no. 7 ("bois" for "want"). Where her
// answer leaves out words of the sentence it changes (ex. 5 nos. 8 and 13)
// or turns "là" into "là-bas" (ex. 5 no. 10), her answer stays first and the
// whole sentence is accepted too.

export default {
  id: "lecon17",
  exercises: [
    {
      n: 1,
      title: "Traduction",
      instruction: "Traduire les mots suivants en français en utilisant un article pour tous les noms.",
      english: "Say each word or phrase in French, with an article (le, la, l', les, un or une) in front of every noun. Where it says masc. & fém., give both forms.",
      items: [
        { prompt: "breakfast", answer: "le petit-déjeuner" },
        { prompt: "a toast", answer: "une tartine" },
        { prompt: "wine", answer: "le vin" },
        { prompt: "a lemon", answer: "un citron" },
        { prompt: "lunch", answer: "le déjeuner" },
        { prompt: "dessert", answer: "le dessert" },
        { prompt: "sunny side up egg", answer: "un œuf sur le plat", also: ["un oeuf sur le plat", "l'œuf sur le plat"] },
        { prompt: "a tomato", answer: "une tomate" },
        { prompt: "the butcher", answer: "le boucher" },
        { prompt: "vegetarian (masc. & fém.)", answer: "végétarien, végétarienne" },
        { prompt: "a cucumber", answer: "un concombre" },
        { prompt: "an avocado", answer: "un avocat" },
        { prompt: "rice", answer: "le riz" },
        { prompt: "fish", answer: "le poisson" },
        { prompt: "fresh (masc. & fém.)", answer: "frais, fraîche" },
        { prompt: "proteins", answer: "les protéines", also: ["des protéines"] },
        { prompt: "water", answer: "l'eau" },
        { prompt: "meat", answer: "la viande" },
        { prompt: "cheese", answer: "le fromage" },
        { prompt: "to replace", answer: "remplacer" },
        { prompt: "sweet (masc. & fém.)", answer: "sucré, sucrée" },
        { prompt: "savory (masc. & fém.)", answer: "salé, salée" },
        { prompt: "an egg", answer: "un œuf", also: ["un oeuf"] },
        { prompt: "salt", answer: "le sel" },
        { prompt: "a starter", answer: "l'entrée", also: ["une entrée"] },
        { prompt: "pasta", answer: "les pâtes", also: ["des pâtes"] },
        { prompt: "it looks delicious", answer: "ça a l'air délicieux" },
        { prompt: "to buy", answer: "acheter" },
        { prompt: "a fruit", answer: "un fruit" },
        { prompt: "coffee", answer: "le café" },
        { prompt: "I'm hungry", answer: "j'ai faim" },
        { prompt: "to drink", answer: "boire" },
        { prompt: "tea", answer: "le thé" },
        { prompt: "the main dish", answer: "le plat principal" },
        { prompt: "to stop", answer: "arrêter" },
        { prompt: "Speaking about that, ...", answer: "d'ailleurs" },
      ],
    },
    {
      n: 2,
      title: "Grammaire et traduction",
      instruction: "Traduire les phrases suivantes en utilisant un article partitif (du, de la, de l').",
      english: "Translate each sentence into French with a partitive article: du before a masculine noun, de la before a feminine one, de l' before a vowel. The word in brackets says which the noun is.",
      items: [
        { prompt: "I'm eating fish (masculin)", answer: "Je mange du poisson." },
        { prompt: "Did you drink wine yesterday? (masculin)", answer: "Tu as bu du vin hier ?",
          also: ["Vous avez bu du vin hier ?", "Est-ce que tu as bu du vin hier ?"] },
        { prompt: "Is there salt on the table? (masculin)", answer: "Il y a du sel sur la table ?", also: ["Est-ce qu'il y a du sel sur la table ?"] },
        { prompt: "Is it cheese? (masculin)", answer: "C'est du fromage ?", also: ["Est-ce que c'est du fromage ?"] },
        { prompt: "Do you drink coffee? (masculin)", answer: "Tu bois du café ?", // her key: "Tu as bu du café ?"
          also: ["Vous buvez du café ?", "Est-ce que tu bois du café ?"] },
        { prompt: "Do you want some tea? (masculin)", answer: "Tu veux du thé ?", also: ["Vous voulez du thé ?", "Est-ce que tu veux du thé ?"] },
        { prompt: "You have to put lemon in your tea. (masculin)", answer: "Tu dois mettre du citron dans ton thé.",
          also: ["Il faut mettre du citron dans ton thé.", "Vous devez mettre du citron dans votre thé."] },
        { prompt: "I often eat rice (masculin)", answer: "Je mange souvent du riz." },
        { prompt: "Do I need to put salt on the fish? (masculin)", answer: "Je dois mettre du sel sur le poisson ?",
          also: ["Il faut mettre du sel sur le poisson ?", "Est-ce que je dois mettre du sel sur le poisson ?"] },
        { prompt: "Do you guys want some wine? (masculin)", answer: "Vous voulez du vin ?" },
        { prompt: "She's drinking water. (féminin)", answer: "Elle boit de l'eau." },
        { prompt: "Is it tomato? (féminin)", answer: "C'est de la tomate ?" },
        { prompt: "You need to put feta cheese here. (féminin)", answer: "Tu dois mettre de la feta ici.",
          also: ["Il faut mettre de la feta ici.", "Vous devez mettre de la feta ici."] },
        { prompt: "I want water. (féminin)", answer: "Je veux de l'eau." },
        { prompt: "I'm eating meat today. (féminin)", answer: "Je mange de la viande aujourd'hui." },
        { prompt: "Is it water? (féminin)", answer: "C'est de l'eau ?" },
        { prompt: "Did you buy meat? (féminin)", answer: "Tu as acheté de la viande ?", also: ["Vous avez acheté de la viande ?"] },
        { prompt: "I want to drink water. (féminin)", answer: "Je veux boire de l'eau." },
        { prompt: "Do you want some feta cheese? (féminin)", answer: "Tu veux de la feta ?", also: ["Vous voulez de la feta ?"] },
      ],
    },
    {
      n: 3,
      title: "Grammaire et traduction",
      instruction: "Traduire les phrases suivantes en utilisant un article singulier (défini, indéfini ou partitif).",
      english: "Translate each sentence into French with a singular article: le, la or l' for a thing in general or a set thing, un or une for one, du, de la or de l' for some of it.",
      items: [
        { prompt: "Does she eat meat?", answer: "Elle mange de la viande ?", also: ["Est-ce qu'elle mange de la viande ?"] },
        { prompt: "I love coffee.", answer: "J'adore le café.", also: ["J'aime le café."] }, // her key: "la café"
        { prompt: "I drink coffee every morning.", answer: "Je bois du café tous les matins." },
        { prompt: "You have to put lemon on the avocado.", answer: "Tu dois mettre du citron sur l'avocat.",
          also: ["Il faut mettre du citron sur l'avocat.", "Vous devez mettre du citron sur l'avocat."] },
        { prompt: "I want to eat fish today.", answer: "Je veux manger du poisson aujourd'hui." },
        { prompt: "I'm going to eat a tomato.", answer: "Je vais manger une tomate." },
        { prompt: "I'm going to drink a coffee.", answer: "Je vais boire du café.", also: ["Je vais boire un café."] },
        { prompt: "Did you drink wine last night?", answer: "Tu as bu du vin hier soir ?", // her key: "hier"
          also: ["Vous avez bu du vin hier soir ?", "Est-ce que tu as bu du vin hier soir ?"] },
        { prompt: "I don't like tea, I prefer coffee.", answer: "Je n'aime pas le thé, je préfère le café." },
        { prompt: "I'm going to put cucumber and feta cheese on the toast.", answer: "Je vais mettre du concombre et de la feta sur la tartine." },
        { prompt: "I like to eat cheese in the morning.", answer: "J'aime manger du fromage le matin." },
        { prompt: "Tea is better than coffee.", answer: "Le thé est meilleur que le café." },
        { prompt: "I'm eating a piece of toast with an egg.", answer: "Je mange une tartine avec un œuf.", also: ["Je mange une tartine avec un oeuf."] },
        { prompt: "I don't like meat. I prefer fish.", answer: "Je n'aime pas la viande, je préfère le poisson." },
        { prompt: "Did you eat rice with the fish?", answer: "Tu as mangé du riz avec le poisson ?", also: ["Vous avez mangé du riz avec le poisson ?"] },
        { prompt: "I ate fresh fish for lunch.", answer: "J'ai mangé du poisson frais pour le déjeuner.", // her key leaves out "frais"
          also: ["J'ai mangé du poisson frais au déjeuner."] },
        { prompt: "I drink only water when eating.", answer: "Je bois seulement de l'eau à table.", also: ["Je ne bois que de l'eau à table."] },
        { prompt: "Water is very important for you.", answer: "L'eau est très importante pour toi.", also: ["L'eau est très importante pour vous."] },
        { prompt: "I bought cheese and wine.", answer: "J'ai acheté du fromage et du vin." },
        { prompt: "I want to eat a piece of toast with cheese.", answer: "Je veux manger une tartine avec du fromage." },
        { prompt: "The fish wasn't good.", answer: "Le poisson n'était pas bon." },
      ],
    },
    {
      n: 4,
      title: "Grammaire et traduction",
      instruction: "Traduire les phrases suivantes en utilisant les articles « les » et « des ».",
      english: "Translate each sentence into French with les (the things set, or in general) or des (some of them).",
      items: [
        { prompt: "The eggs are on the table.", answer: "Les œufs sont sur la table.", also: ["Les oeufs sont sur la table."] },
        { prompt: "Did you buy eggs?", answer: "Tu as acheté des œufs ?", also: ["Tu as acheté des oeufs ?", "Vous avez acheté des œufs ?"] },
        { prompt: "I ate pasta for lunch.", answer: "J'ai mangé des pâtes pour le déjeuner.", // her key: "J'ai acheté"
          also: ["J'ai mangé des pâtes au déjeuner."] },
        { prompt: "I love vegetables.", answer: "J'adore les légumes.", also: ["J'aime les légumes."] },
        { prompt: "He prefers fruits.", answer: "Il préfère les fruits." },
        { prompt: "Do you guys have kids?", answer: "Vous avez des enfants ?" },
        { prompt: "French people love vegetables.", answer: "Les Français aiment les légumes.", also: ["Les Français adorent les légumes."] },
        { prompt: "Maxime doesn't like selfish people.", answer: "Maxime n'aime pas les gens égoïstes." },
        { prompt: "In general, kids don't like vegetables.", answer: "En général, les enfants n'aiment pas les légumes." },
        { prompt: "She wears glasses and brown shoes.", answer: "Elle porte des lunettes et des chaussures marron." }, // her key: "marrons"
        { prompt: "Are there vegetables on the table?", answer: "Il y a des légumes sur la table ?", also: ["Est-ce qu'il y a des légumes sur la table ?"] },
        { prompt: "Did you buy shoes?", answer: "Tu as acheté des chaussures ?", also: ["Vous avez acheté des chaussures ?"] },
        { prompt: "Do you have grandchildren?", answer: "Vous avez des petits-enfants ?", // her key: "des enfants"
          also: ["Tu as des petits-enfants ?"] },
        { prompt: "Friends are here for that.", answer: "Les amis sont ici pour ça.", also: ["Les amis sont là pour ça."] },
        { prompt: "Girls like football too!", answer: "Les filles aiment le football aussi !",
          also: ["Les filles aiment aussi le football !", "Les filles aiment le foot aussi !"] },
        { prompt: "Kids need to play outside.", answer: "Les enfants ont besoin de jouer dehors.", // her key: "Les enfants aiment jouer dehors."
          also: ["Les enfants doivent jouer dehors."] },
        { prompt: "I'm taking French classes twice a week.", answer: "Je prends des cours de français deux fois par semaine." }, // her key: "prendes"
        { prompt: "French cheeses are really good.", answer: "Les fromages français sont très bons.", also: ["Les fromages français sont vraiment bons."] },
      ],
    },
    {
      n: 5,
      title: "Grammaire",
      instruction: "Transformer les phrases comme dans l'exemple.",
      english: "Write the sentence again with the word in brackets, as in the example: after a word of quantity (beaucoup, trop, un peu, pas mal) the article goes and only de stays.",
      example: "Il y a des plantes ici. (beaucoup) → Il y a beaucoup de plantes ici.",
      items: [
        { prompt: "J'ai mangé du fromage. (trop)", answer: "J'ai mangé trop de fromage." },
        { prompt: "Il y a du monde à l'aéroport. (beaucoup)", answer: "Il y a beaucoup de monde à l'aéroport." },
        { prompt: "J'ai mis du citron dans le guacamole. (trop)", answer: "J'ai mis trop de citron dans le guacamole." },
        { prompt: "Tu dois mettre du sel. (un peu)", answer: "Tu dois mettre un peu de sel." },
        { prompt: "Il a des amis français. (pas mal)", answer: "Il a pas mal d'amis français." },
        { prompt: "Je connais des gens qui aiment les brocolis. (pas beaucoup)", answer: "Je ne connais pas beaucoup de gens qui aiment les brocolis." },
        { prompt: "Tu peux me donner de l'eau s'il te plaît ? (un peu)", answer: "Tu peux me donner un peu d'eau ?",
          also: ["Tu peux me donner un peu d'eau s'il te plaît ?"] },
        { prompt: "J'ai bu du vin hier soir. (trop)", answer: "J'ai bu trop de vin hier soir." },
        { prompt: "Il y a du monde là. (trop)", answer: "Il y a trop de monde là-bas.", also: ["Il y a trop de monde là."] },
        { prompt: "Ils ont de l'argent. (pas mal)", answer: "Ils ont pas mal d'argent." },
        { prompt: "J'ai fait des exercices de français. (trop)", answer: "J'ai fait trop d'exercices de français." },
        { prompt: "Il est très nerveux, il a bu du café. (trop)", answer: "Il a bu trop de café.",
          also: ["Il est très nerveux, il a bu trop de café."] },
        { prompt: "Tu dois mettre de la feta dans la salade. (beaucoup)", answer: "Tu dois mettre beaucoup de feta dans la salade." },
        { prompt: "Je mange de la viande. (pas beaucoup)", answer: "Je ne mange pas beaucoup de viande." },
        { prompt: "J'ai mis du sel. (trop)", answer: "J'ai mis trop de sel." },
      ],
    },
    {
      n: 6,
      title: "Traduction niveau 3",
      instruction: "Traduire les phrases suivantes.",
      english: "Translate each sentence into French.",
      items: [
        { prompt: "I prefer to eat sweet things in the morning.", answer: "Je préfère manger du sucré le matin." },
        { prompt: "What do you drink when you eat? Water?", answer: "Qu'est-ce que tu bois à table ? De l'eau ?",
          also: ["Qu'est-ce que tu bois quand tu manges ? De l'eau ?", "Tu bois quoi à table ? De l'eau ?", "Qu'est-ce que vous buvez à table ? De l'eau ?"] },
        { prompt: "I'm going to cook the meat I bought at the butcher's.", answer: "Je vais cuisiner la viande que j'ai achetée chez le boucher." }, // her key: "achetée hier"
        { prompt: "What did she eat for dessert? Only fruits?", answer: "Qu'est-ce qu'elle a mangé pour le dessert ? Seulement des fruits ?", // her key: "qu' elle"
          also: ["Qu'est-ce qu'elle a mangé en dessert ? Seulement des fruits ?", "Qu'est-ce qu'elle a mangé comme dessert ? Seulement des fruits ?"] },
        { prompt: "We drank wine and ate cheese last night.", answer: "On a bu du vin et on a mangé du fromage hier soir.",
          also: ["On a bu du vin et mangé du fromage hier soir.", "Nous avons bu du vin et nous avons mangé du fromage hier soir.", "Nous avons bu du vin et mangé du fromage hier soir."] },
        { prompt: "We drank too much wine and ate too much cheese last night.", answer: "On a bu trop de vin et on a mangé trop de fromage hier soir.",
          also: ["On a bu trop de vin et mangé trop de fromage hier soir.", "Nous avons bu trop de vin et nous avons mangé trop de fromage hier soir.", "Nous avons bu trop de vin et mangé trop de fromage hier soir."] },
        { prompt: "Do you want some water too or just wine?", answer: "Tu veux aussi de l'eau ou seulement du vin ?", // her key: "Tu bois aussi"
          also: ["Tu veux de l'eau aussi ou seulement du vin ?", "Tu veux aussi de l'eau ou juste du vin ?", "Vous voulez aussi de l'eau ou seulement du vin ?"] },
        { prompt: "For how long have you been a vegetarian?", answer: "Depuis combien de temps tu es végétarien ?",
          also: ["Depuis combien de temps tu es végétarienne ?", "Tu es végétarien depuis combien de temps ?", "Depuis combien de temps vous êtes végétarien ?"] },
        { prompt: "I love wine, especially with cheese.", answer: "J'adore le vin, surtout avec du fromage.", also: ["J'adore le vin, surtout avec le fromage."] },
        { prompt: "Do you like vegetables?", answer: "Tu aimes les légumes ?", also: ["Vous aimez les légumes ?", "Est-ce que tu aimes les légumes ?"] },
        { prompt: "There are too many people here.", answer: "Il y a trop de monde ici.", also: ["Il y a trop de gens ici."] },
        { prompt: "I eat too much meat at the moment.", answer: "Je mange trop de viande en ce moment." },
        { prompt: "I replace it with plant-based proteins.", answer: "Je le remplace avec des protéines végétales.", // her key: "Je le/la remplace"
          also: ["Je la remplace avec des protéines végétales.", "Je le/la remplace avec des protéines végétales.", "Je la remplace par des protéines végétales.", "Je le remplace par des protéines végétales."] },
        { prompt: "Do you eat meat?", answer: "Tu manges de la viande ?", also: ["Vous mangez de la viande ?", "Est-ce que tu manges de la viande ?"] },
        { prompt: "I'm hungry, I'm going to cook rice, veggies and fish.", answer: "J'ai faim, je vais cuisiner du riz, des légumes et du poisson." },
        { prompt: "Sounds delicious!", answer: "Ça a l'air délicieux !" },
        { prompt: "I prefer eggs sunny side up, especially with some avocado.", answer: "Je préfère les œufs sur le plat, surtout avec de l'avocat.",
          also: ["Je préfère les oeufs sur le plat, surtout avec de l'avocat."] },
        { prompt: "I ate pasta and fresh fish last night.", answer: "J'ai mangé des pâtes et du poisson frais hier soir." },
        { prompt: "I have a lot of French friends.", answer: "J'ai beaucoup d'amis français." },
        { prompt: "I made myself a toast with avocado and eggs.", answer: "Je me suis fait une tartine avec de l'avocat et des œufs.",
          also: ["Je me suis fait une tartine avec de l'avocat et des oeufs."] },
        { prompt: "Speaking about that, I love fish too!", answer: "D'ailleurs, j'adore le poisson aussi !", also: ["D'ailleurs, j'adore aussi le poisson !"] },
        { prompt: "I didn't eat the dessert, I was not hungry anymore.", answer: "Je n'ai pas mangé le dessert, je n'avais plus faim." },
        { prompt: "Are you drinking water or is it vodka?", answer: "Tu bois de l'eau ou c'est de la vodka ?", also: ["Vous buvez de l'eau ou c'est de la vodka ?"] },
      ],
    },
  ],
};
