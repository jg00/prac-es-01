const cityWeatherData = require("./weatherData");

// Array.prototype.find() - Will return the element found with the callback
const firstFoundCity = cityWeatherData.list.find((city, i) => {
  if (city.main.temp > 80) return true;
  else return false;
});
console.log(firstFoundCity);

// Array.prototype.findIndex() - Will return the element found with the callback
const firstFoundCityIndex = cityWeatherData.list.findIndex((city, i) => {
  if (city.main.temp > 80) return true;
  else return false;
});
console.log("index:", firstFoundCityIndex);
