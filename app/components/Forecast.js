var React = require('react')
var PropTypes = React.PropTypes
var styles = require('../styles')
require('../css/weather-icons.min.css')

function forecastEntry(props) {
  return (
    <div style={styles.flex}>
      <i className={iconClasses}></i>
      <ul className='dataList'>
        <li>{props.forecast.weather[0].main}</li>
        <li>{props.forecast.main.temp} &deg;F</li>
        <li>{'Humidity:'} {props.forecast.main.humidity}{'%'}</li>
      </ul>
    </div>
)
}

function ForecastUI(props) {
  var iconClasses = `icon wi wi-owm-${props.currentData.weather[0].id}`
  var city = props.city.toUpperCase()
  return (
    <div className='forecastUI'>
      <h1 style={styles.city}>{city}</h1>
      <div style={styles.flex}>
        <i className={iconClasses}></i>
        <ul className='dataList'>
          <li>{props.currentData.weather[0].main}</li>
          <li>{props.currentData.main.temp} &deg;F</li>
          <li>Humidity: {props.currentData.main.humidity}%</li>
        </ul>
      </div>
    </div>
    )
}

function Forecast(props) {
  return props.isLoading === true
    ? <div className='loading'> {'Loading'} </div>
    : <ForecastUI city={props.city} currentData={props.currentData} />
}

module.exports = Forecast
