// convertAreaToSquareFeet.test.ts
import convertAreaToSquareFeet from "./convertAreaToSquareFeet";

describe("convertAreaToSquareFeet", () => {
  test("should convert area correctly for positive values", () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39); // 100 square meters = 1076.39 square feet
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78); // 200 square meters = 2152.78 square feet
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585); // 150 square meters = 1614.585 square feet
  });

  test("should return 0 for area of 0", () => {
    expect(convertAreaToSquareFeet(0)).toBe(0); // Zero area should return zero
  });

  test("should handle negative values correctly", () => {
    expect(convertAreaToSquareFeet(-100)).toBeCloseTo(-1076.39); // Negative area should convert correctly
    expect(convertAreaToSquareFeet(-200)).toBeCloseTo(-2152.78); // Negative area conversion
    expect(convertAreaToSquareFeet(-150)).toBeCloseTo(-1614.585); // Negative area conversion
  });
});
