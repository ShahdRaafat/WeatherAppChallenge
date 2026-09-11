import { checkmarkIcon } from "../assets/images";
import type { UnitOption } from "../types/unit";
import {
  temperatureOptions,
  windSpeedOptions,
  precipitationOptions,
} from "../constants/unitOptions";

interface UnitsDropdownPanelProps {
  temperature: string;
  windSpeed: string;
  precipitation: string;
  onSelectTemperature: (value: string) => void;
  onSelectWindSpeed: (value: string) => void;
  onSelectPrecipitation: (value: string) => void;
}
function UnitsDropdownPanel({
  temperature,
  windSpeed,
  precipitation,
  onSelectTemperature,
  onSelectWindSpeed,
  onSelectPrecipitation,
}: UnitsDropdownPanelProps) {
  return (
    <div className="bg-neutral-600/80 p-2 rounded-md absolute right-0 top-full mt-2 w-48 z-10 ">
      <button className="w-full text-left text-sm text-white hover:bg-neutral-700 p-1 rounded-md pb-2 mb-1">
        Switch to Imperial
      </button>
      <div className="divide-y divide-neutral-300">
        <MenuItem
          text="Temperature"
          options={temperatureOptions}
          selected={temperature}
          onSelect={onSelectTemperature}
        />
        <MenuItem
          text="Wind Speed"
          options={windSpeedOptions}
          selected={windSpeed}
          onSelect={onSelectWindSpeed}
        />
        <MenuItem
          text="Precipitation"
          options={precipitationOptions}
          selected={precipitation}
          onSelect={onSelectPrecipitation}
        />
      </div>
    </div>
  );
}

function MenuItem({
  text,
  options,
  selected,
  onSelect,
}: {
  text: string;
  options: UnitOption[];
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div className="py-1">
      <p className="text-xs text-neutral-300 px-1 mb-1">{text}</p>

      {options.map((option) => (
        <button
          key={option.value}
          className={`w-full text-left text-sm text-white ${selected === option.value ? "bg-neutral-700" : ""} hover:bg-neutral-700 p-1 rounded-md flex items-center justify-between`}
          onClick={() => onSelect(option.value)}
        >
          {option.label}
          {selected === option.value && (
            <img src={checkmarkIcon} alt="checkmark" className="h-3 w-3" />
          )}
        </button>
      ))}
    </div>
  );
}

export { UnitsDropdownPanel };
