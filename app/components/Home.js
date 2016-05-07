import React, { PropTypes } from 'react'

function Home(props) {
  const iconClasses = `homeIcon wi wi-owm-${props.id}`
  return (
    <div className='home'>
      <div>
        <i className={iconClasses}></i>
      </div>
      <ul className='homeDataList'>
        <li>{props.main}</li>
        <li>{Math.round(props.temp)}{'\u00b0'}</li>
        <li>{'hum:'} {props.humidity}{'%'}</li>
        <li>{'sunrise '}{props.sunrise}</li>
        <li>{'sunset '}{props.sunset}</li>
      </ul>
    </div>
  )
}

Home.propTypes = {
  main: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  sunrise: PropTypes.string.isRequired,
  sunset: PropTypes.string.isRequired,
}

module.exports = Home
