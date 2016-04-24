var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
require('../css/weather-icons.min.css');

function ForecastUI (props) {
    var iconClasses = "icon wi wi-owm-" + props.forecast.weather[0].id;
    var city = props.city.toUpperCase();
    return (
        <div style={styles.forecastUI}>
            <h1 style={styles.city}>{city}</h1>
            <div style={styles.flex}>
            <i className={iconClasses}></i>
            <ul className='dataList'>
                <li>{props.forecast.weather[0].main}</li>
                <li>{props.forecast.main.temp} &deg;F</li>
                <li>Humidity: {props.forecast.main.humidity}%</li>
            </ul>  
            </div>  
        </div>
    )    
}

function Forecast (props) {
  console.log(props)
  return props.isLoading === true
    ? <div> Loading </div>
    : <ForecastUI city={props.city} forecast={props.forecastData} />
}

module.exports = Forecast;