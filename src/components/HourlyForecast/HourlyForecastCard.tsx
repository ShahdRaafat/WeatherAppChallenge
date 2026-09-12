import { sunnyIcon } from "../../assets/images";

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
  return (
    <div className="bg-neutral-600 flex justify-between items-center px-4 py-2 rounded-lg border-1 border-neutral-600 border-solid text-white">
      <div className="flex items-center justify-center">
        <img src={sunnyIcon} alt="Sunny" className="h-12 w-12" />
        <p className="ml-1">{time}</p>
      </div>
      <div>
        <p>{temperature}°</p>
      </div>
    </div>
  );
}

export default HourlyForecastCard;
