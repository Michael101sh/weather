export const epochDateToDayName = epochDate => {
  const date = new Date(epochDate * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let dayName = days[date.getDay()];
  return dayName;
};

export const fahrenheitToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

export const extractLocationsData = list => {
  let arr = [];
  for (const item of list) {
    const city = item.LocalizedName;
    const country = item.Country.LocalizedName;
    const locationName = city + ", " + country;
    arr.push({
      key: item.Key,
      name: locationName,
      WeatherText: "",
      temperature: 0
    });
  }
  return arr;
};
