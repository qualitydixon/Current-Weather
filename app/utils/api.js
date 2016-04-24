var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'd951696850f04dc2ba2467873aa8e866';

function getCurrentWeather(city) {
    return axios.get(_baseURL + 'weather?q=' + city + '&units=imperial&type=accurate&APPID=' + _APIKEY)
        .then(function (currentWeatherData) {
      console.log(currentWeatherData.data)
      return currentWeatherData.data
    });
}

function getForecast(city) {
    var url = _baseURL + 'forecast/daily?q=' + city + '&units=imperial&type=accurate&APPID=' + _APIKEY + '&cnt=5';
    return axios.get(url).then(function (forecastData) {
      console.log(forecastData.data)
      return forecastData.data
    });
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};