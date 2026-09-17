import type { HourlyWeatherType } from "../types/hourlyWeather";
import { extractTime } from "./ExtractTime";

export function getNext7Days() {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      day:
        i === 0
          ? "Today"
          : date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.toISOString().split("T")[0],
    });
  }
  return days;
}
export function mapHourlyForecast(hourly: HourlyWeatherType) {
  const allHours = hourly.time.map((time, index) => ({
    time: extractTime(time),
    weatherCode: hourly.weather_code[index],
    temperature: hourly.temperature_2m[index],
  }));
  console.log(allHours);
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(allHours.slice(i * 24, (i + 1) * 24));
  }
  return days;
}
