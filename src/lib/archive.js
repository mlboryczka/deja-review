// Archiving a card: out of circulation, not out of the database.
//
// An archived card keeps its row, and the row keeps where it came from:
// `source` gains an "archived:" prefix ("archived:cahier-upload"). The deck
// loader returns those rows apart from the deck (`archived` in useUserDeck),
// so an archived card is not studied or listed, but the rows are still used
// and must not be deleted in bulk:
//   - lesson sync reads them to keep a card the student removed, or a lesson
//     card taken out, from coming back (lib/lessonSync.js);
//   - notes matching reads them (lib/cardMatch.js);
//   - "Replace my existing deck" restores the ones it took out itself
//     (lib/replaceDeck.js);
//   - the Lessons page counts them towards "cards in your deck".
// Deleting a row also deletes every answer recorded on it (card_reviews
// cascades), so there is no command here for deleting archived rows.
//
// A prefix on an existing column rather than an archived_at column, because
// this needed no migration. Two things follow from the row still existing:
// its front still holds the (user_id, front) unique slot, so adding a card
// with the same front from the tutor upserts onto the archived row and
// brings it back, which is what the student asked for. Nothing else brings
// one back (2026-10-06): a card the student removed (api/_lib/removeCard.js)
// is still a card they have, so neither their notes (src/lib/cardMatch.js)
// nor a lesson (lib/lessonSync.js) puts it back in study. Only "Replace my
// existing deck" returns the cards it took out itself (lib/replaceDeck.js).
// Since migration_016 the row also says why it is out (archived_reason).

export const ARCHIVE_PREFIX = "archived:";

export const isArchived = (row) =>
  typeof row?.source === "string" && row.source.startsWith(ARCHIVE_PREFIX);

// The source to write when archiving. Idempotent, and a null source stays
// recoverable as "archived:".
export const archivedSource = (source) =>
  typeof source === "string" && source.startsWith(ARCHIVE_PREFIX)
    ? source
    : `${ARCHIVE_PREFIX}${source ?? ""}`;
