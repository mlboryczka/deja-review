// The id in a Google Doc link. One pattern for the dialog and both server
// routes. A link copied while signed in to several Google accounts has an
// account segment: .../document/u/1/d/<id>/edit.
export const docIdFrom = (url) => String(url || "").match(/\/document\/(?:u\/\d+\/)?d\/([a-zA-Z0-9_-]+)/)?.[1] || null;
