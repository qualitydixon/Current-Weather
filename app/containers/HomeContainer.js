var React = require('react');
var Home = require('../components/Home');
var getCurrentWeather = require('../utils/api').getCurrentWeather;
var getForecast = require('../utils/api').getForecast;

var HomeContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            city: ''
        }
    },
    handleUpdateCity: function(e) {
      this.setState({
          city: e.target.value
      });  
    },
    handleSubmitCity: function (e) {
        e.preventDefault();
        var city = this.state.city;
        this.setState({
            city: ''
        });
        this.context.router.push('/forecast/' + this.state.city)
    },
    render: function() {
        return (
            <Home
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity}
                city={this.state.city} />
        )
    }
})

module.exports = HomeContainer;