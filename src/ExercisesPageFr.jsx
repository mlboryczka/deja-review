// The Exercises page with the French pack (see ExercisesPage.jsx).
import ExercisesPage from "./ExercisesPage";
import { FRENCH_EXERCISES_PACK } from "./data/exercises/fr/packs.js";

export default function ExercisesPageFr(props) {
  return <ExercisesPage pack={FRENCH_EXERCISES_PACK} {...props} />;
}
