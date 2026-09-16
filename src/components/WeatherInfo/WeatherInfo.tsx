import { useWeather } from "../../hooks/useWeather";
import CurrentWeather from "../CurrentWeather/CurrentWeatherWidget";
import WeatherDetails from "../CurrentWeather/WeatherDetails";
import DailyForecast from "../DailyForecast/DailyForecast";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import Error from "../shared/Error";

interface WeatherInfoProps {
  lat: number | undefined;
  lng: number | undefined;
  city: string | undefined;
  country: string | undefined;
  loading?: boolean;
}

function WeatherInfo({ lat, lng, city, country }: WeatherInfoProps) {
  const {
    data: weatherData,
    error,
    isLoading: loading,
  } = useWeather(lat!, lng!);
  console.log("Weather data:", weatherData);
  const { current, daily, hourly } = weatherData || {};

  if (weatherData === null || weatherData === undefined) {
    return <h2>No search results found</h2>;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      <div className="lg:col-span-2 min-w-0">
        <CurrentWeather
          current={current}
          loading={loading}
          city={city}
          country={country}
        />
        <WeatherDetails current={current} loading={loading} />
        <DailyForecast daily={daily} loading={loading} />
      </div>
      <HourlyForecast hourly={hourly} loading={loading} />
    </div>
  );
}

export default WeatherInfo;
