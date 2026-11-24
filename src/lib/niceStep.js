// Round numbers for the chart's gridlines: 1, 2 or 5 times a power of ten.
// The values are card counts, and the side prints whole numbers, so a step is
// never less than 1 (a step of 0.5 would label two lines with the same number).
export function niceStep(range) {
  const raw = Math.max(range, 1) / 4;
  const p = 10 ** Math.floor(Math.log10(raw));
  return Math.max(1, [1, 2, 5, 10].map((m) => m * p).find((s) => s >= raw));
}
