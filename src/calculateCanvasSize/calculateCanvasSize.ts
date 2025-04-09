export default function calculateCanvasSize(
  length: string,
  width: string
): number {
  // Ensure the inputs are valid numbers
  const parsedLength = parseInt(length);
  const parsedWidth = parseInt(width);

  // Check if either parsedLength or parsedWidth is NaN or non-positive
  if (
    isNaN(parsedLength) ||
    isNaN(parsedWidth) ||
    parsedLength <= 0 ||
    parsedWidth <= 0
  ) {
    return NaN;
  }

  // Rectangle area
  const rectangleArea = parsedLength * parsedWidth;

  // Triangle area (base = 1/3 of length, height = width)
  const triangleBase = parsedLength / 3;
  const triangleHeight = parsedWidth;
  const triangleArea = 0.5 * triangleBase * triangleHeight;

  // Total area (rectangle + two triangles)
  const totalArea = rectangleArea + 2 * triangleArea;

  return totalArea;
}
