import React, { PropTypes } from 'react'

function Home(props) {
  const iconClasses = `icon wi wi-owm-${props.id}`
  return (
    <div className='home'>
      <div className='weatherCard'>
        <i className={iconClasses}></i>
        <ul className='dataList'>
          <li>{props.main}</li>
          <li>{props.temp} {'\u00b0 F'}</li>
          <li>{'Hum:'} {props.humidity}{'%'}</li>
        </ul>
      </div>
    </div>
  )
}

Home.propTypes = {
  main: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  temp: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

module.exports = Home
