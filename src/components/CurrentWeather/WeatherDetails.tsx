import type { currentWeatherType } from "../../types/currentWeather";
import WeatherDetailsCard from "./WeatherDetailsCard";

interface WeatherDetailsProps {
  current: currentWeatherType;
  loading: boolean;
}

function WeatherDetails({ current, loading }: WeatherDetailsProps) {
  const {
    apparent_temperature: feelsLike,
    relative_humidity_2m: humidity,
    wind_speed_10m: windSpeed,
    precipitation_probability: precipitation,
  } = current || {};
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white mb-8">
      <WeatherDetailsCard title="Feels Like" value={feelsLike?.toFixed(0)} />
      <WeatherDetailsCard title="Humidity" value={humidity} />
      <WeatherDetailsCard title="Wind" value={windSpeed} />
      <WeatherDetailsCard title="Precipitation" value={precipitation} />
    </div>
  );
}

export default WeatherDetails;
