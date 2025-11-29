type AreaUnits =
  | "square-millimeter"
  | "square-centimeter"
  | "square-meter"
  | "square-kilometer"
  | "square-inch"
  | "square-foot"
  | "square-yard"
  | "square-mile"
  | "acre"
  | "hectare";

type DataUnits = "bit" | "byte" | "kilobyte" | "megabyte" | "gigabyte" | "terabyte" | "petabyte";

type EnergyUnits = "joule" | "kilojoule" | "calorie" | "kilocalorie" | "watt-hour" | "kilowatt-hour";

type LengthUnits = "millimeter" | "centimeter" | "meter" | "kilometer" | "inch" | "foot" | "yard" | "mile";

type PressureUnits = "pascal" | "bar" | "psi" | "atm";

type SpeedUnits = "meter-per-second" | "kilometer-per-hour" | "mile-per-hour" | "knot" | "foot-per-second";

type TimeUnits = "millisecond" | "second" | "minute" | "hour" | "day" | "week" | "month" | "year";

type VolumeUnits = "milliliter" | "liter" | "cubic-meter" | "gallon" | "quart" | "pint" | "cup" | "fluid-ounce" | "cubic-inch" | "cubic-foot";

type WeightUnits = "milligram" | "gram" | "kilogram" | "ounce" | "pound";

// All units converted to square meters
const areaTable: Record<AreaUnits, number> = {
  "square-millimeter": 0.000001,
  "square-centimeter": 0.0001,
  "square-meter": 1,
  "square-kilometer": 1000000,
  "square-inch": 0.00064516,
  "square-foot": 0.092903,
  "square-yard": 0.836127,
  "square-mile": 2589988.11,
  acre: 4046.86,
  hectare: 10000,
};

// All units converted to bytes
const dataTable: Record<DataUnits, number> = {
  bit: 0.125,
  byte: 1,
  kilobyte: 1024,
  megabyte: 1024 * 1024,
  gigabyte: 1024 * 1024 * 1024,
  terabyte: 1024 * 1024 * 1024 * 1024,
  petabyte: 1024 * 1024 * 1024 * 1024 * 1024,
};

// All units converted to joules
const energyTable: Record<EnergyUnits, number> = {
  joule: 1,
  kilojoule: 1000,
  calorie: 4.184,
  kilocalorie: 4184,
  "watt-hour": 3600,
  "kilowatt-hour": 3600000,
};

// All units converted to meters
const lengthTable: Record<LengthUnits, number> = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34,
};

// All units converted to pascals
const pressureTable: Record<PressureUnits, number> = {
  pascal: 1,
  bar: 100000,
  psi: 6894.76,
  atm: 101325,
};

// All units converted to meters per second
const speedTable: Record<SpeedUnits, number> = {
  "meter-per-second": 1,
  "kilometer-per-hour": 0.277778,
  "mile-per-hour": 0.44704,
  knot: 0.514444,
  "foot-per-second": 0.3048,
};

// All units converted to seconds
const timeTable: Record<TimeUnits, number> = {
  millisecond: 0.001,
  second: 1,
  minute: 60,
  hour: 60 * 60,
  day: 60 * 60 * 24,
  week: 60 * 60 * 24 * 7,
  month: 60 * 60 * 24 * 30.44,
  year: 60 * 60 * 24 * 365.25,
};

// All units converted to liters
const volumeTable: Record<VolumeUnits, number> = {
  milliliter: 0.001,
  liter: 1,
  "cubic-meter": 1000,
  gallon: 3.78541,
  quart: 0.946353,
  pint: 0.473176,
  cup: 0.236588,
  "fluid-ounce": 0.0295735,
  "cubic-inch": 0.0163871,
  "cubic-foot": 28.3168,
};

// All units converted to grams
const weightTable: Record<WeightUnits, number> = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495,
  pound: 453.592,
};

export type AllCategories = "area" | "energy" | "data" | "length" | "pressure" | "speed" | "time" | "volume" | "weight";

export type AllUnits = AreaUnits | DataUnits | EnergyUnits | LengthUnits | PressureUnits | SpeedUnits | TimeUnits | VolumeUnits | WeightUnits;

export const conversionTables: Record<AllCategories, Record<string, number>> = {
  area: areaTable,
  data: dataTable,
  energy: energyTable,
  length: lengthTable,
  pressure: pressureTable,
  speed: speedTable,
  time: timeTable,
  volume: volumeTable,
  weight: weightTable,
};
