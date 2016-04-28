var React = require('react')
var styles = require('../styles')

const Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
        <form style={styles.flex} onSubmit={this.props.onSubmitCity}>
          <div className='form-group' id='inputBox'>
            <input
              className='form-control'
              placeholder='San Francisco'
              type='text'
              onChange={this.props.onUpdateCity}
              value={this.props.city} />
          </div>
          <div className='form-group' id='getWeatherBtn'>
            <button onClick={this.props.onSubmitCity} className='btn getBtn' style={styles.space}>
              {'Get Weather'}
            </button>
          </div>
        </form>
      </div>
    )
  },
})

module.exports = Home
