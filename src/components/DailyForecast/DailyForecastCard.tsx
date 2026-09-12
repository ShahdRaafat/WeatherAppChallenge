import { sunnyIcon } from "../../assets/images";

interface DailyForecastCardProps {
  day: string;
  weatherCode: number;
  high: number;
  low: number;
}
function DailyForecastCard({
  day,
  weatherCode,
  high,
  low,
}: DailyForecastCardProps) {
  return (
    <div
      className="bg-neutral-800 flex flex-col justify-center items-center gap-4 p-4 rounded-lg border-1 border-neutral-600 border-solid 
text-white"
    >
      <p className=" font-bold">{day}</p>
      <img src={sunnyIcon} alt="Sunny" className="h-16 w-16" />
      <div className="flex gap-10">
        <p className="">{high}°</p>
        <p className="">{low}°</p>
      </div>
    </div>
  );
}

export default DailyForecastCard;
