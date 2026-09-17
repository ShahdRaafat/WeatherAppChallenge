import {
  sunnyIcon,
  partlyCloudyIcon,
  overcastIcon,
  fogIcon,
  drizzleIcon,
  rainIcon,
  snowIcon,
  stormIcon,
} from "../assets/images";

interface WeatherInfo {
  label: string;
  icon: string;
}

export function getWeatherIcon(code: number): WeatherInfo {
  switch (code) {
    case 0:
      return { label: "Clear sky", icon: sunnyIcon };

    case 1:
    case 2:
      return { label: "Partly cloudy", icon: partlyCloudyIcon };

    case 3:
      return { label: "Overcast", icon: overcastIcon };

    case 45:
    case 48:
      return { label: "Fog", icon: fogIcon };

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return { label: "Drizzle", icon: drizzleIcon };

    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return { label: "Rain", icon: rainIcon };

    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return { label: "Snow", icon: snowIcon };

    case 95:
    case 96:
    case 99:
      return { label: "Thunderstorm", icon: stormIcon };

    default:
      return { label: "Unknown", icon: sunnyIcon };
  }
}
