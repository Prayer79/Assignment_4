// paintRequiredCalculator.test.ts
import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);

    expect(result).toEqual(5); // 50 / 10 = 5 liters of paint required
  });
});
