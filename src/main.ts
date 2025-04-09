// main.ts
import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  const length = "10"; // Example length in meters
  const width = "20"; // Example width in meters
  const copies = 5000; // Example number of copies
  const coveragePerLiter = 11.4; // Coverage in square meters per liter

  const area = calculateCanvasSize(length, width);

  if (isNaN(area)) {
    console.error("Invalid area calculation. Please check the input values.");
    return;
  }

  const totalArea = area * copies; // Multiply by the number of copies
  const paintRequired = paintRequiredCalculator(totalArea, coveragePerLiter);

  console.log(
    `${paintRequired} liters are required to cover ${totalArea} square meters for ${copies} copies.`
  );
}

main();
