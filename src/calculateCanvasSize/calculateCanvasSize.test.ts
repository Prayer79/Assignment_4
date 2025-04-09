// calculateCanvasSize.test.ts
import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  it("should return correct area for valid length and width", () => {
    const length = "10";
    const width = "20";

    const result = calculateCanvasSize(length, width);

    const expectedArea = 10 * 20 + 2 * (0.5 * (10 / 3) * 20); // Rectangle area + 2 triangles
    expect(result).toBeCloseTo(expectedArea, 2); // Allow for small floating-point differences
  });

  it("should return NaN for invalid input (non-numeric)", () => {
    const length = "ten";
    const width = "20";

    const result = calculateCanvasSize(length, width);

    expect(result).toBeNaN(); // NaN should be returned for invalid inputs
  });

  it("should return NaN when either length or width is missing", () => {
    const length = "";
    const width = "20";

    const result = calculateCanvasSize(length, width);

    expect(result).toBeNaN(); // NaN for missing length
  });

  it("should return NaN when both length and width are missing", () => {
    const length = "";
    const width = "";

    const result = calculateCanvasSize(length, width);

    expect(result).toBeNaN(); // NaN for missing both values
  });
});
