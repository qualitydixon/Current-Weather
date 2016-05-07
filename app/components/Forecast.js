import React, { PropTypes } from 'react'
import WeatherCard from './WeatherCard'
import { formatDate } from '../utils/helpers'
require('../css/weather-icons.min.css')

function Forecast(props) {
  return (props.isLoading === true)
    ? <div className='loading'>{'Loading'}</div>
    : <div className='forecastUI'>
      <h1 className='cityHeader'>{props.city}</h1>
      <ul className='forecastList'>
        {props.forecastData.list.map((day, idx) => <WeatherCard
          key={day.dt}
          id={day.weather[0].id}
          description={day.weather[0].description}
          temp={day.temp}
          humidity={day.humidity}
          date={formatDate(idx)} />)}
      </ul>
    </div>
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
}

module.exports = Forecast
