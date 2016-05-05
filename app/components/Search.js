import React, { PropTypes } from 'react'

export default function Search(props) {
  return (
    <div className='searchContainer'>
      <form className='form' onSubmit={props.onSubmitCity}>
        <div className='form-group' id='inputBox'>
          <input
            className='form-control'
            placeholder='San Francisco'
            type='text'
            onChange={props.onUpdateCity}
            value={props.city} />
        </div>
        <div className='form-group' id='getWeatherBtn'>
          <button onClick={props.onSubmitCity} className='btn getBtn'>
            {'Get Weather'}
          </button>
        </div>
      </form>
    </div>
  )
}

Search.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
}
