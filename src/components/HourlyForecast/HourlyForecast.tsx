import { useState } from "react";
import { dropdownIcon } from "../../assets/images";
import Button from "../shared/Button";
import DaysDropdown from "./DaysDropdown";
import HourlyForecastCard from "./HourlyForecastCard";
import { getNext7Days, mapHourlyForecast } from "../../utils/mapHourlyForecast";
import type { HourlyWeatherType } from "../../types/hourlyWeather";

interface HourlyForecastProps {
  hourly: HourlyWeatherType | undefined;
  loading: boolean;
}

function HourlyForecast({ hourly, loading }: HourlyForecastProps) {
  const [isDaysOpen, setIsDaysOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setIsDaysOpen(false);
  };
  const days = getNext7Days();

  const hourlyForecast =
    mapHourlyForecast(
      hourly || { time: [], weather_code: [], temperature_2m: [] },
    )[selectedDay] || [];
  return (
    <div className="relative flex h-full max-h-[60vh] flex-col bg-neutral-800 p-4 rounded-xl border-1 border-solid border-neutral-600 text-white">
      <div className="relative flex items-center justify-between mb-4">
        <h3>Hourly Forecast</h3>
        <Button
          className="bg-neutral-700 flex items-center"
          onClick={() => setIsDaysOpen((isOpen) => !isOpen)}
        >
          <span>{days[selectedDay]?.day || "Select a day"}</span>
          <img src={dropdownIcon} alt="expand" className="h-4 w-4 ml-2" />
        </Button>

        {isDaysOpen && (
          <DaysDropdown
            selectedDay={selectedDay}
            handleDaySelect={handleDaySelect}
            days={days}
          />
        )}
      </div>

      <div className="flex-1 min-h-0 space-y-2 overflow-y-scroll pr-1">
        {hourlyForecast.map((forecast, index) => (
          <HourlyForecastCard
            key={index}
            time={forecast.time}
            weatherCode={forecast.weatherCode}
            temperature={forecast.temperature}
          />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
