import { useLocation } from "../context/LocationContext";
import { useGeocoding } from "../hooks/useGeocoding";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Error from "./shared/Error";
import WeatherInfo from "./WeatherInfo/WeatherInfo";

function WholeApp() {
  const { location } = useLocation();
  const { data: geocodingData, error, isLoading } = useGeocoding(location);
  const { latitude, longitude, name, country } = geocodingData || {};
  if (error) {
    return (
      <div className="min-h-screen bg-neutral-900 py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Header />
        <Error />;
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-neutral-900 py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      <Search />
      <WeatherInfo
        lat={latitude}
        lng={longitude}
        city={name}
        country={country}
        loading={isLoading}
      />
    </main>
  );
}

export default WholeApp;
