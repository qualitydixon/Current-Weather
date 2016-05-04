const React = require('react')
const styles = require('../styles')


function Home(props) {
  return (
    <div className='home'>
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
          <button onClick={props.onSubmitCity} className='btn getBtn' style={styles.space}>
            {'Get Weather'}
          </button>
        </div>
      </form>
    </div>
  )
}

Home.propTypes = {
  onSubmitCity: React.PropTypes.func.isRequired,
  onUpdateCity: React.PropTypes.func.isRequired,
  city: React.PropTypes.string.isRequired,
}

module.exports = Home
