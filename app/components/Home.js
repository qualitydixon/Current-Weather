import React, { PropTypes } from 'react'

function Home(props) {
  return (
    <div className='home'>
      <div className='cityHeader'>
        {props.city}
      </div>
    </div>
  )
}

Home.propTypes = {
  city: PropTypes.string.isRequired,
}

module.exports = Home
