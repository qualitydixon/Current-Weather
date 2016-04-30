const React = require('react')
const styles = require('../styles')
require('../css/weather-icons.min.css')

function ForecastEntry(props) {
  return (
    <div style={styles.flex}>
      <i className={iconClasses}></i>
      <ul className='dataList'>
        <li>{props.forecast.weather[0].main}</li>
        <li>{props.forecast.main.temp} {'\u00b0 F'}</li>
        <li>{'Humidity:'} {props.forecast.main.humidity}{'%'}</li>
      </ul>
    </div>
)
}

ForecastEntry.propTypes = {
  forecast: React.PropTypes.object.isRequired,
}

function ForecastUI(props) {
  const iconClasses = `icon wi wi-owm-${props.currentData.weather[0].id}`
  const city = props.city.toUpperCase()
  return (
    <div className='forecastUI'>
      <h1 style={styles.city}>{city}</h1>
      <div style={styles.flex}>
        <i className={iconClasses}></i>
        <ul className='dataList'>
          <li>{props.currentData.weather[0].main}</li>
          <li>{props.currentData.main.temp} {'\u00b0 F'}</li>
          <li>{'Humidity:'} {props.currentData.main.humidity}{'%'}</li>
        </ul>
      </div>
    </div>
    )
}

ForecastUI.propTypes = {
  city: React.PropTypes.string.isRequired,
  currentData: React.PropTypes.object.isRequired,
}

function Forecast(props) {
  return props.isLoading === true
    ? <div className='loading'> {'Loading'} </div>
    : <ForecastUI city={props.city} currentData={props.currentData} />
}

Forecast.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  city: React.PropTypes.string.isRequired,
  currentData: React.PropTypes.object.isRequired,
}

module.exports = Forecast
