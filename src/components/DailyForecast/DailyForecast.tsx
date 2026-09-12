import { dailyForecast } from "../../data/mockWeather";
import DailyForecastCard from "./DailyForecastCard";

function DailyForecast() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-white mb-8">
      {dailyForecast.map((day) => (
        <DailyForecastCard
          key={day.day}
          day={day.day}
          weatherCode={day.weatherCode}
          high={day.high}
          low={day.low}
        />
      ))}
    </div>
  );
}

export default DailyForecast;
