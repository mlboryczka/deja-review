// The Dialogues page with the French pack (see DialoguesPage.jsx).
import DialoguesPage from "./DialoguesPage";
import { FRENCH_DIALOGUES_PACK } from "./data/exercises/fr/packs.js";

export default function DialoguesPageFr(props) {
  return <DialoguesPage pack={FRENCH_DIALOGUES_PACK} {...props} />;
}
