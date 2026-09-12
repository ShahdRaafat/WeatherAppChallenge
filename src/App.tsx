import CurrentWeather from "./components/CurrentWeather/CurrentWeatherWidget";
import WeatherDetails from "./components/CurrentWeather/WeatherDetails";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Header from "./components/Header/Header";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import Search from "./components/Search/Search";

function App() {
  return (
    <main className="min-h-screen bg-neutral-900 py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      <Search />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        <div className="lg:col-span-2 min-w-0">
          <CurrentWeather />
          <WeatherDetails />
          <DailyForecast />
        </div>
        <HourlyForecast />
      </div>
    </main>
  );
}

export default App;
