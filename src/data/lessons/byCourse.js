// The lessons of each course (src/lib/course.js): French, and the Spanish
// module's (2026-10-22).
import { FRENCH } from "./index.js";
import { SPANISH } from "./es/index.js";

export const catalogueFor = (course) => (course === "es" ? SPANISH : FRENCH);
