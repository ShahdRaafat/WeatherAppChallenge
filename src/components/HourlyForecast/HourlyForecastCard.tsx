import { getWeatherIcon } from "../../utils/weatherCodeMapping";

interface HourlyForecastCardProps {
  time: string;
  weatherCode: number;
  temperature: number;
}
function HourlyForecastCard({
  time,
  weatherCode,
  temperature,
}: HourlyForecastCardProps) {
  const { label, icon } = getWeatherIcon(weatherCode);
  return (
    <div className="bg-neutral-600 flex justify-between items-center px-4 py-2 rounded-lg border-1 border-neutral-600 border-solid text-white">
      <div className="flex items-center justify-center">
        <img src={icon} alt={label} className="h-12 w-12" />
        <p className="ml-1">{time}</p>
      </div>
      <div>
        <p>{temperature.toFixed(0)}°</p>
      </div>
    </div>
  );
}

export default HourlyForecastCard;
