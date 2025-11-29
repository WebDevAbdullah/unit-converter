import { conversionTables } from "./units";
import type { AllCategories, AllUnits } from "./units";

function formatDecimalPlaces(num: number, places: number): number {
  return parseFloat(num.toFixed(places));
}

function toBaseUnit(value: number, fromUnit: AllUnits, category: AllCategories): number {
  const units = conversionTables[category];
  const fromUnitValue = units[fromUnit];
  return value * fromUnitValue;
}

function fromBaseUnit(value: number, toUnit: AllUnits, category: AllCategories): number {
  const units = conversionTables[category];
  const toUnitValue = units[toUnit];
  return value / toUnitValue;
}

export function convert(value: number, fromUnit: AllUnits, toUnit: AllUnits, category: AllCategories): number {
  const baseValue = toBaseUnit(value, fromUnit, category);
  const convertedValue = fromBaseUnit(baseValue, toUnit, category);
  return formatDecimalPlaces(convertedValue, 4);
}

export function convertToAll(value: number, fromUnit: AllUnits, category: AllCategories): Record<string, number> {
  const results: Record<string, number> = {};
  const units = conversionTables[category];
  const baseValue = toBaseUnit(value, fromUnit, category);

  for (const toUnit in units) {
    const convertedValue = fromBaseUnit(baseValue, toUnit as AllUnits, category);
    results[toUnit] = formatDecimalPlaces(convertedValue, 4);
  }
  return results;
}
