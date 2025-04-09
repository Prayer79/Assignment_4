export default function calculateCanvasSize(length: string, width: string) {
  const parsedLength = parseInt(length);
  const parsedWidth = parseInt(width);

  // If either parsedLength or parsedWidth is NaN, return NaN
  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    return NaN;
  }

  return parsedLength * parsedWidth;
}
