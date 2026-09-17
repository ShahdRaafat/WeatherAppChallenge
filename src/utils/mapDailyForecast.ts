import type { dailyWeatherType } from "../types/dailyWeather";

export function mapDailyForecast(daily: dailyWeatherType) {
  return daily.time.map((time, index) => ({
    day: new Date(time + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "short",
    }),
    weatherCode: daily.weather_code[index],
    high: daily.temperature_2m_max[index],
    low: daily.temperature_2m_min[index],
  }));
}
