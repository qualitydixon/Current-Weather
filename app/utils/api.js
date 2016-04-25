var axios = require('axios')
var _baseURL = 'http://api.openweathermap.org/data/2.5/'
var _APIKEY = 'd951696850f04dc2ba2467873aa8e866'

function getCurrentWeather(city) {
  return axios.get(`${_baseURL}weather?q=${city}&units=imperial&type=accurate&APPID=${_APIKEY}`)
        .then(currentWeatherData => currentWeatherData.data)
}

function getForecast(city) {
  const url = `${_baseURL}forecast/daily?q=${city}&units=imperial&type=accurate&APPID=${_APIKEY}&cnt=5`
  return axios.get(url).then(forecastData => forecastData.data)
}

module.exports = {
  getCurrentWeather,
  getForecast,
}
