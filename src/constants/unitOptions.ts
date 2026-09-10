import type { UnitOption } from "../types/unit";

export const temperatureOptions: UnitOption[] = [
  { value: "celsius", label: "Celsius (°C)" },
  { value: "fahrenheit", label: "Fahrenheit (°F)" },
];

export const windSpeedOptions: UnitOption[] = [
  { value: "kmh", label: "km/h" },
  { value: "mph", label: "mph" },
];

export const precipitationOptions: UnitOption[] = [
  { value: "mm", label: "Millimeters (mm)" },
  { value: "in", label: "Inches (in)" },
];
