import React, { PropTypes } from 'react'

export default function WeatherCard(props) {
  const iconClasses = `icon wi wi-owm-${props.id}`
  return (
    <div className='weatherCard'>
      <i className={iconClasses}></i>
      <ul className='dataList'>
        <li>{props.date}</li>
        <li>{Math.round(props.temp.max)}{'\u00b0'} {Math.round(props.temp.min)}{'\u00b0'}</li>
        <li>{props.main.toLowerCase()}</li>
        <li>{'hum:'} {props.humidity}{'%'}</li>
      </ul>
    </div>
)
}

WeatherCard.propTypes = {
  main: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  temp: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}
