import { dropdownIcon, unitsIcon } from "../../assets/images";
import { useState } from "react";
import { UnitsDropdownPanel } from "./UnitsDropdownPanel";

function UnitsToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [temperature, setTemperature] = useState("celsius");
  const [windSpeed, setWindSpeed] = useState("kmh");
  const [precipitation, setPrecipitation] = useState("mm");

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-neutral-600/80 p-2 rounded-md cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={unitsIcon} alt="units" className="h-4 w-4" />
        <span className="text-sm text-white">Units</span>
        <img src={dropdownIcon} alt="chevron down" className="h-3 w-3" />
      </button>

      {isOpen && (
        <UnitsDropdownPanel
          temperature={temperature}
          windSpeed={windSpeed}
          precipitation={precipitation}
          onSelectTemperature={setTemperature}
          onSelectWindSpeed={setWindSpeed}
          onSelectPrecipitation={setPrecipitation}
        />
      )}
    </div>
  );
}

export default UnitsToggle;
