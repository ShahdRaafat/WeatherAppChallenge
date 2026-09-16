import { todayBackground } from "../../assets/images";
import { sunnyIcon } from "../../assets/images";
import type { currentWeatherType } from "../../types/currentWeather";

interface CurrentWeatherProps {
  city: string | undefined;
  country: string | undefined;
  loading: boolean;
  current: currentWeatherType | undefined;
}

function CurrentWeather({ city, country, current }: CurrentWeatherProps) {
  const { temperature_2m: temperature } = current || {};
  return (
    <div
      className="relative   flex items-center justify-between bg-cover  bg-center  py-4 px-6  min-h-56 rounded-xl text-white mb-8"
      style={{ backgroundImage: `url(${todayBackground})` }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-3">
          {city}, {country}
        </h3>
        <h4 className="text-sm text-neutral-300">
          {new Date().toLocaleDateString()}
        </h4>
      </div>
      <div className="flex  items-center gap-4">
        <img src={sunnyIcon} alt="Sunny" className="h-20 w-20" />
        <h3 className="text-7xl font-bold">{temperature}°</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
