import { useQuery } from "@tanstack/react-query";
import { getWeatherInfo } from "../services/getWeatherInfo";

export function useWeather(lat: number, lon: number) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => getWeatherInfo(lat!, lon!),
    enabled: lat !== undefined && lon !== undefined,
  });

  return { data, error, isLoading };
}
