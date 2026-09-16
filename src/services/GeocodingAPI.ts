const API_URL = "https://geocoding-api.open-meteo.com/v1/search";

export interface GeocodingResponse {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}

export async function getCoordinates(
  location: string,
): Promise<GeocodingResponse | null> {
  const response = await fetch(
    `${API_URL}?name=${encodeURIComponent(location)}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  if (data.results && data.results.length > 0) {
    const { latitude, longitude, name, country } = data.results[0];
    return { latitude, longitude, name, country };
  } else {
    console.error("No results found for the given location.");
    return null;
  }
}
