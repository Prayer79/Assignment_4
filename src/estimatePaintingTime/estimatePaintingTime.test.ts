// estimatePaintingTime.test.ts
import estimatePaintingTime from "./estimatePaintingTime";

describe("estimatePaintingTime", () => {
  test("should calculate painting time correctly for positive values", () => {
    expect(estimatePaintingTime(100, 10)).toBe(10); // 100 / 10 = 10 hours
    expect(estimatePaintingTime(200, 20)).toBe(10); // 200 / 20 = 10 hours
    expect(estimatePaintingTime(150, 15)).toBe(10); // 150 / 15 = 10 hours
  });

  test("should return Infinity for painting speed of 0", () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity); // Division by 0 should return Infinity
  });

  test("should handle area of 0 correctly", () => {
    expect(estimatePaintingTime(0, 10)).toBe(0); // No area to paint means no time needed
  });

  test("should handle negative values correctly", () => {
    expect(estimatePaintingTime(-100, 10)).toBe(-10); // Negative area results in negative time
    expect(estimatePaintingTime(100, -10)).toBe(-10); // Negative speed results in negative time
    expect(estimatePaintingTime(-100, -10)).toBe(10); // Negative area and speed should result in positive time
  });
});
