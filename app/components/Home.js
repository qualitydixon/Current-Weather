var React = require('react');
var styles = require('../styles');

var Home = React.createClass({
  render: function () {
    return (
      <div className='home'>
      <div style={styles.addMargin}>
        <h1> Enter City and State </h1>
        <form style={styles.flex} onSubmit={this.props.onSubmitCity}>
            <div className='form-group' id='inputBox'>
                <input 
                    className='form-control' 
                    placeholder='New York, NY' 
                    type='text'
                    onChange={this.props.onUpdateCity} 
                    value={this.props.city} />
             </div>
            <div className='form-group' id='getWeatherBtn'>
                <button onClick={this.props.onSubmitCity} className="btn getBtn" style={styles.space}> Get Weather </button>
            </div>
        </form>
        </div>
      </div>
    )
  }
});

module.exports = Home;