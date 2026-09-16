export async function getWeatherInfo(lat: number, lon: number) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current:
      "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code,precipitation_probability",
    hourly: "temperature_2m,weather_code",
    daily: "weather_code,temperature_2m_max,temperature_2m_min",
    temperature_unit: "celsius",
    wind_speed_unit: "kmh",
    timezone: "auto",
    forecast_days: "7",
    precipitation_unit: "mm",
  });
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch weather information");
  }
  const data = await response.json();
  return data;
}
