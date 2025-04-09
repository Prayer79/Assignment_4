export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) {
    return NaN;
  }

  return Math.sqrt(Math.abs(l) ** 2 + Math.abs(w) ** 2);
}
