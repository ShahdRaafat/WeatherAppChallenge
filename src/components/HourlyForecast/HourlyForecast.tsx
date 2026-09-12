import { dropdownIcon } from "../../assets/images";
import { dailyForecast, hourlyForecast } from "../../data/mockWeather";
import { useState } from "react";
import Button from "../shared/Button";
import HourlyForecastCard from "./HourlyForecastCard";

function HourlyForecast() {
  const [isDaysOpen, setIsDaysOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Today");

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    setIsDaysOpen(false);
  };

  return (
    <div className="relative flex h-full max-h-[60vh] flex-col bg-neutral-800 p-4 rounded-xl border-1 border-solid border-neutral-600 text-white">
      <div className="relative flex items-center justify-between mb-4">
        <h3>Hourly Forecast</h3>
        <Button
          className="bg-neutral-700 flex items-center"
          onClick={() => setIsDaysOpen((isOpen) => !isOpen)}
        >
          <span>{selectedDay}</span>
          <img src={dropdownIcon} alt="expand" className="h-4 w-4 ml-2" />
        </Button>

        {isDaysOpen && (
          <div className="absolute right-0 top-full z-10 mt-2 w-48 rounded-md bg-neutral-700 p-1 shadow-lg">
            {dailyForecast.map((day) => (
              <button
                key={day.day}
                type="button"
                className={`w-full rounded px-2 py-1 text-left hover:bg-neutral-600 ${
                  selectedDay === day.day ? "bg-neutral-600" : ""
                }`}
                onClick={() => handleDaySelect(day.day)}
              >
                {day.day}
              </button>
            ))}
          </div>
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
