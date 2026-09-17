import type { dailyWeatherType } from "../../types/dailyWeather";
import { mapDailyForecast } from "../../utils/mapDailyForecast";
import DailyForecastCard from "./DailyForecastCard";

interface DailyForecastProps {
  daily: dailyWeatherType | undefined;
  loading: boolean;
}
//grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7
function DailyForecast({ daily, loading }: DailyForecastProps) {
  const dailyForecast = daily ? mapDailyForecast(daily) : [];
  return (
    <div className="flex flex-wrap gap-4 text-white mb-8">
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
