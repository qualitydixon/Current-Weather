const axios = require('axios')
const _baseURL = 'http://api.openweathermap.org/data/2.5/'
const _APIKEY = 'd951696850f04dc2ba2467873aa8e866'


function formatURLWithCoords(latitude, longitude) {
  return `${_baseURL}weather?lat=${latitude}&lon=${longitude}&units=imperial&type=accurate&APPID=${_APIKEY}&cnt=5`
}

function formatURLWithCity(city) {
  return `${_baseURL}forecast/daily?q=${city}&units=imperial&type=accurate&APPID=${_APIKEY}&cnt=5`
}

export function getCurrentWeatherWithCoords(latitude, longitude) {
  return axios.get(formatURLWithCoords(latitude, longitude))
        .then(currentWeatherData => currentWeatherData.data)
}

export function getForecast(city) {
  return axios.get(formatURLWithCity(city)).then(forecastData => forecastData.data)
}

export function getCurrentWeather(city) {
  return axios.get(`${_baseURL}weather?q=${city}&APPID=${_APIKEY}`)
}

