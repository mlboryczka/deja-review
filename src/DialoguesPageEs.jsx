// The Dialogues page with the Spanish pack (see DialoguesPage.jsx).
import DialoguesPage from "./DialoguesPage";
import { SPANISH_DIALOGUES_PACK } from "./data/exercises/es/packs.js";

export default function DialoguesPageEs(props) {
  return <DialoguesPage pack={SPANISH_DIALOGUES_PACK} {...props} />;
}
