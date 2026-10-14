# How cards are scheduled

Déjà Review schedules cards with FSRS, the Free Spaced Repetition Scheduler,
through the [ts-fsrs](https://www.npmjs.com/package/ts-fsrs) library. FSRS keeps
an estimate of how well each card is known, and from it predicts the chance of
remembering the card on any later day. A card comes back on the day that chance
falls to the student's target, 90% unless they choose otherwise. A right
answer strengthens the estimate, so the gaps keep growing. A miss shortens the
gap rather than sending the card back to the start.

This page covers how the app uses FSRS, and the rules it adds on top.

## Each way round has its own schedule

A word or phrase can be asked from French ("la pomme → ?") or from English
("apple → ?"). Each way round has its own schedule, because recognising a word
and producing it are different skills, and which is harder differs from one
student and one word to the next.

One rule links them: a word is asked one way a day (since 2026-10-14). Once a
word has been answered one way, for the first time or not, the other way waits
until the next day, and a set never holds both. If both ways are due the same
day, the way missed last time comes first, otherwise the one more overdue; the
other comes the next day. The second answer the same day came just after
seeing the word, and FSRS took it for memory: on the owner's record, a review
whose other way had been answered earlier that day was right 90% of the time
where FSRS expected 81% (63 answers), against 79% where it expected 82%
otherwise (549). Until then only a word's two first meetings were kept apart.
Grammar cards are asked one way only, as written.

The student can study from French, from English, or both mixed.

## Right or wrong, and nothing else

FSRS was designed for four buttons: Again, Hard, Good and Easy. This app only
records whether the answer was right, either typed correctly or, when flipping
cards, "Got It". Right is recorded as Good and wrong as Again. Nothing is
guessed from typing speed or typos. Two things were changed so that FSRS works
well with two grades:

- The starting settings were fitted to right-or-wrong answers from the FSRS
  team's open data set, counting Hard and Easy as right. The library's own
  defaults assume four buttons.
- The gap after an answer comes straight from the card's own estimate. The
  library keeps the four buttons' gaps in order, Good at least a day after
  Hard, which made every right answer wait at least three days however shaky
  the card was.

## Which answers count

FSRS gets the first answer per card, each way round, each day, and the retry
after a miss. A missed card comes back 20 cards later in the same set. Until
2026-10-14 that retry was practice only; now it counts, by FSRS's own rule for
a second answer on the same day (its "short-term" stability). A right retry
keeps or slightly raises the card's memory estimate. A missed one lowers it
and makes the card harder, so it comes back sooner over the next days: a new
word missed twice in one set came back after 1, 1, 3 and 6 days instead of 1,
3, 11 and 33, with FSRS's own numbers for same-day answers. The gap is never
under a day. In the FSRS team's records, counting same-day repeats made its
predictions more accurate for about 85% of users; no study shows students
learn more for it. The numbers for same-day answers start as FSRS's own, and
each student's weekly fit adjusts them from their retries.

Anything else shown again the same day is practice: a card revisited with
Previous card, a second set later that day, a reload, or another computer.
Every answer is still kept in the record.

## The study day runs from 4am to 4am

A session that runs past midnight counts as one day, in the student's own time
zone, as in Anki. FSRS counts the days between answers the same way. On its
own, the library counts days by the date in UTC, which changes at 8pm in New
York, so an answer at 9pm and another the next morning were "0 days apart" and
the second earned nothing. The app now gives the library times whose UTC date
is the student's own day.

## Each student's own settings

FSRS describes how a person forgets with 21 numbers, and every student starts
on the same ones. Once a student has given about 350 answers that FSRS counted,
the server fits new numbers to their answers with the FSRS team's own
optimizer. It fits on the older 80% of the answers and tests the result on the
newest 20%, which it hasn't seen. Two sets of numbers are tested: every number
the fit gives, and the starting numbers with only the fit's two for how long a
word lasts after its first answer, right or wrong. Only if the better of the
two predicts the newest answers better than the numbers in use does the
student get it, made again on all their answers. The server tries again every
week once there are 50 more answers. The "How much to remember" window says
which numbers the student is on.

The first gaps are tried on their own because a student's answers show them
first: every word answered twice says something about them, while most of the
other numbers are about gaps of weeks and months that a new student hasn't had
yet. On the owner's 809 answers (2026-10-14), words right the first time came
back right 112 of 119 times where the starting numbers expected 88%, and words
missed the first time 60 of 103 times where they expected 71%. A full fit
predicted their newest answers slightly worse than the starting numbers, and
the first gaps alone slightly better than both. With them, a word the owner
gets right the first time comes back after about 14 days instead of 6.

Before 2026-10-14 the server first tried at 1,000 answers, then every 500
answers and 30 days, and only full fits. On the FSRS team's open data, a full
personal fit beat the starting settings for 78% of users at 1,000 answers, and
at 250 answers it was a coin flip, which is why nothing is used without the
test on the newest answers.

When the numbers change, the server works out each card's memory estimate again
from its own answers. No due date moves, and a card answered in the meantime is
left alone.

## How much to remember

The student sets their target under "How much to remember" in the profile
menu: Lighter load (85%), Standard (90%), Remember more (95%), or Automatic,
which is the default. Automatic starts at 90%. When the student has started 5
of their last 7 study days with due cards left over from before, it drops two
points, but never below 85%. When they are keeping up again, it rises. It moves
at most once a week. A higher target means more reviews each day in return for
remembering more. A simulation of the four choices found that 95% was never the
best use of a student's time ([details](evaluation-harness.md#simulated-students)).

## What goes into a set

Cards are studied in sets of 50, or 20, 30 or 100 if the student prefers. A set
is filled in this order:

1. Cards missed last time that are due today.
2. Other cards due today, the most overdue first.
3. New cards, but only once the due cards have run out.

There is no daily limit on new cards. When reviews pile up, new cards wait,
which is exactly when they should. And no card is ever shown before it is due,
however well it is known.

New cards come in a fixed order. In a lesson they follow the lesson's teaching
order. Otherwise they come from the last two weeks of classes first, newest
class first, then from older classes, and lesson cards come after the
student's own. A card the student added themselves, from the tutor or, for
the owner so far, from a podcast passage, came up in no class, so it counts as
if from a class on the day it was added: one added today is among the newest.

From the older classes, the words and phrases said most often in everyday
French come first (the owner, 2026-10-14): "avoir besoin de" before "être coté
en bourse". How often is counted in French film and TV subtitles, as
described [below](#how-often-a-card-is-said). A card that can't be counted that
way keeps its place in the order used before, which put the words that came up
in the most classes first, the older class first on a tie. Those are full
sentences, which are rarely said word for word, grammar drills, cards said
fewer than 5 times in the subtitles, and cards not counted yet. So sentences
and drills come at the same rate as before, and the counted cards fill the
other places, most said first.

The set is then shuffled, because practising one kind of card in a run feels
easier at the time but is remembered worse afterwards.

A missed card comes back as a retry 20 cards later. It takes the place of the
set's last card, which moves to the next set, so a set never grows.

The set on screen is saved in the browser as it changes. A reload, which is how
every update reaches a student, puts them back on the same card, with the same
count and the same retries waiting. Choosing a different number of cards
changes the set on screen at once: the card on screen, every answer and the
retries waiting all stay, and only the cards not yet reached are added or
taken away.

## How often a card is said

Each card's French is counted as a whole phrase in French film and TV
subtitles: OpenSubtitles 2018, French, from the OPUS project (P. Lison and J.
Tiedemann, 2016), about 107 million lines and 633 million words. Researchers
use film subtitles as a stand-in for everyday spoken French. The forms of each
word come from Lexique 3.83 (B. New and C. Pallier, lexique.org, CC BY-SA 4.0).
A card's number is how many times per million words its French is said.

- A word in its dictionary form counts in all its forms. "avoir besoin de"
  counts "j'ai besoin de" and "elle avait besoin d'aide".
- A word written in a particular form counts in that form only. "je serais"
  doesn't count "je suis".
- An article and one word, like "un poste", count the noun in all its forms:
  "le poste", "des postes". "le pouvoir" counts the noun only, never "je
  peux". Before more words the article stands for any: "le mauvais choix"
  counts "un mauvais choix", and "un de plus" never counts "de plus".
- In a phrase, "se" stands for me, te, se, nous and vous ("je me rends
  compte"), and "son, sa, ses" for every possessive ("perdre mon temps").
- After a verb, "quelqu'un" or "quelque chose" stands for anyone or anything,
  so "appeler quelqu'un" counts as "appeler".
- A card with choices, like "énervé / fâché" or "un chien, une chienne", takes
  its most said choice.
- A spelling that can be two words counts for each by its share in the
  subtitles, from Lexique. Where it can be être or avoir it counts for them
  alone, so "je suis" never counts for "suivre". A word spelled as the card
  spells it always counts in full: "est" in "c'est", though Lexique also has
  "est" for the east.
- What isn't matched: a word put between the card's words, as in "j'ai eu
  besoin de". Every phrase loses those alike.

Grammar drills ("vivre (présent) → je"), notes ("cela = ça"), patterns ("le/la
seul(e) + nom"), grammar cards and lesson cards aren't counted. A card said
fewer than 5 times gets no number, which is most full sentences.

The count runs on the owner's Mac, where the subtitles and Lexique are kept
(`~/.claude/scheduled-tasks/morning-check/data/`, too big for the repo).
`node scripts/count-phrases.mjs --email <student>` prints what it would save,
and `--apply` saves each card's number (`said_per_million`, from
migration_019). It counts only the cards not counted yet, but it reads all
the subtitles however few cards there are, keeping half the Mac's processors
busy for a good while (`--helpers` sets how many). A card stays in the last
two weeks' group for two weeks, so counting new cards once a week is enough to
have every card counted before its number is needed.

## How progress is counted

The app never calls a card "mastered". It shows three figures: cards seen,
about how many are remembered, and cards not yet seen. "Remembered" adds up
each card's chance of being remembered right now, as FSRS estimates it, so it
rises with study and falls without it. A word counts only as well as it is
known both ways round: its chance is the chance from French times the chance
from English. A card whose last answer was wrong counts for nothing until it is
answered right again.

On the Stats page every number says what it counts, such as "37 of 50 cards"
or "+12 remembered in 7 days", and figures shown side by side add up.

![The Stats page, from today's cards down to progress by lesson](screenshots/stats-full.png)

## Before FSRS

The app started with a fixed ladder of boxes (the Leitner system). It had three
problems. The gaps stopped growing at 21 days, so a word known cold for a year
still came back every three weeks. A right answer earned the same whether it
came on time or a month late. And one miss sent a card back to the first box.
When the app switched to FSRS, each card's real history came with it.

## In the code

- `src/lib/sessionQueue.js`: what goes into a set, and in what order
- `scripts/phrases.mjs` and `scripts/count-phrases.mjs`: how often a card is
  said
- `src/lib/spacedRepetition.js`: scheduling an answer
- `src/lib/studyDay.js`: the 4am day
- `src/lib/fsrsSettings.js` and `api/fsrs-fit.js`: each student's own settings
- `src/lib/progress.js`: seen, remembered and not yet seen
- `src/lib/studyPlace.js`: the set on screen, kept through a reload
