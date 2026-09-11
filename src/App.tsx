import CurrentWeather from "./components/CurrentWeather/CurrentWeatherWidget";
import WeatherDetails from "./components/CurrentWeather/WeatherDetails";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
  return (
    <main className="min-h-screen bg-neutral-900 py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      <Search />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="lg:col-span-2">
          <CurrentWeather />
          <WeatherDetails />
        </div>
      </div>
    </main>
  );
}

export default App;
