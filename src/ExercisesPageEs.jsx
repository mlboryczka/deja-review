// The Exercises page with the Spanish pack (see ExercisesPage.jsx). A file of
// its own so that the shell loads one course's sheets and not the other's.
import ExercisesPage from "./ExercisesPage";
import { SPANISH_EXERCISES_PACK } from "./data/exercises/es/packs.js";

export default function ExercisesPageEs(props) {
  return <ExercisesPage pack={SPANISH_EXERCISES_PACK} {...props} />;
}
