import { todayBackground } from "../../assets/images";
import { sunnyIcon } from "../../assets/images";
function CurrentWeather() {
  return (
    <div
      className="relative   flex items-center justify-between bg-cover  bg-center  py-4 px-6  min-h-56 rounded-xl text-white mb-8"
      style={{ backgroundImage: `url(${todayBackground})` }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-3">Berlin, Germany</h3>
        <h4 className="text-sm text-neutral-300">Fri, September 11</h4>
      </div>
      <div className="flex  items-center gap-4">
        <img src={sunnyIcon} alt="Sunny" className="h-20 w-20" />
        <h3 className="text-7xl font-bold">25°</h3>
      </div>
    </div>
  );
}

export default CurrentWeather;
