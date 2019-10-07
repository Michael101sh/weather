import axios from "axios";
const ACCU_WEATHER_API_KEY = "ZhpKtFfXGEk4gYP5xc3b7zBDK0uxq1fY";
const SERVER_LOCAL_PORT = 3030;
const SERVER_REMOTE = "https://weather-zeit.michael101sh.now.sh";
const { NODE_ENV } = process.env;
const baseUrl =
  NODE_ENV === "development"
    ? "http://localhost:" + SERVER_LOCAL_PORT
    : SERVER_REMOTE;
const locationsUrl = baseUrl + "/api/locations";

export async function getLocationData(locationName) {
  try {
    const url =
      "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" +
      ACCU_WEATHER_API_KEY +
      "&q=" +
      locationName;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`fetch operation failed: ${error.message}`);
  }
}
export async function getCurrentWeather(locationKey) {
  try {
    const url =
      "https://dataservice.accuweather.com/currentconditions/v1/" +
      locationKey +
      ".json" +
      "?apikey=" +
      ACCU_WEATHER_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`fetch operation failed: ${error.message}`);
  }
}

export async function getFiveDayForecast(locationKey) {
  try {
    const url =
      "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" +
      locationKey +
      ".json" +
      "?apikey=" +
      ACCU_WEATHER_API_KEY;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`fetch operation failed: ${error.message}`);
  }
}

export const addFavoriteLocation = async location => {
  try {
    const res = await axios.post(locationsUrl, location);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getFavoriteLocations = async () => {
  try {
    const res = await axios.get(locationsUrl);
    let favoriteLocations = await res.data;
    for (const location of favoriteLocations) {
      const currentWeather = await getCurrentWeather(location.key);
      if (currentWeather) {
        location.temperature = Math.round(
          currentWeather[0].Temperature.Metric.Value
        );
        location.WeatherText = currentWeather[0].WeatherText;
      }
    }
    return favoriteLocations;
  } catch (error) {
    console.log(error);
  }
};
