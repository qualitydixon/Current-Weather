const React = require('react')
const styles = require('../styles')
require('../css/weather-icons.min.css')

function ForecastEntry(props) {
  const iconClasses = `icon wi wi-owm-${props.day.weather[0].id}`
  return (
    <div style={styles.flex}>
      <i className={iconClasses}></i>
      <ul className='dataList'>
        <li>{props.day.weather[0].main}</li>
        <li>{props.day.temp.day} {'\u00b0 F'}</li>
        <li>{'Hum:'} {props.day.humidity}{'%'}</li>
      </ul>
    </div>
)
}

ForecastEntry.propTypes = {
  day: React.PropTypes.object.isRequired,
}

function ForecastUI(props) {
  const city = props.city.toUpperCase()
  return (
    <div className='forecastUI'>
      <h1 style={styles.city}>{city}</h1>
      <ul className='forecastList'>
        {props.forecastData.list.map((day, idx) => <ForecastEntry key={idx} idx={idx} day={day} />)}
      </ul>
    </div>
    )
}

ForecastUI.propTypes = {
  city: React.PropTypes.string.isRequired,
  forecastData: React.PropTypes.object.isRequired,
}

function Forecast(props) {
  return (props.isForecastLoading === true)
    ? <div className='loading'> {'Loading'} </div>
    : <ForecastUI city={props.city} forecastData={props.forecastData} />
}

Forecast.propTypes = {
  isForecastLoading: React.PropTypes.bool.isRequired,
  forecastData: React.PropTypes.object.isRequired,
  city: React.PropTypes.string.isRequired,
}

module.exports = Forecast
