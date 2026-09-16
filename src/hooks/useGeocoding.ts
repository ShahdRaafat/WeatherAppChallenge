import { useQuery } from "@tanstack/react-query";
import { getCoordinates } from "../services/GeocodingAPI";

export function useGeocoding(location: string) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["geocoding", location],
    queryFn: () => getCoordinates(location),
    enabled: !!location, // Only run the query if location is not empty
  });
  return { data, error, isLoading };
}
