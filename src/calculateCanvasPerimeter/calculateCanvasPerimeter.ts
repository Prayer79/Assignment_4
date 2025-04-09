export default function calculateCanvasPerimeter(
  length: string,
  width: string
): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  return 2 * (l + w);
}
