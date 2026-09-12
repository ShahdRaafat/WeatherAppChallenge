import WeatherDetailsCard from "./WeatherDetailsCard";

function WeatherDetails() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white mb-8">
      <WeatherDetailsCard title="Feels Like" value="23°" />
      <WeatherDetailsCard title="Humidity" value="65%" />
      <WeatherDetailsCard title="Wind" value="10 km/h" />
      <WeatherDetailsCard title="Precipitation" value="0 mm" />
    </div>
  );
}

export default WeatherDetails;
