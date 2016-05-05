import React, { PropTypes } from 'react'
import Search from '../components/Search'

export default function Navigation(props) {
  return (
    <div className='navContainer'>
      <Search
        onSubmitCity={props.onSubmitCity}
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
    </div>
  )
}

Navigation.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
}
