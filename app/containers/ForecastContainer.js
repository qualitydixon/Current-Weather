var React = require('react')
var Forecast = require('../components/Forecast')
var getForecast = require('../utils/api').getForecast
var getCurrentWeather = require('../utils/api').getCurrentWeather

const ForecastContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      currentData: {},
      forecastData: {},
    }
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.city)
  },
  makeRequest: function (city) {
    getCurrentWeather(city).then(function (data) {
      this.setState({
        currentData: data,
        isLoading: false,
      })
    }.bind(this))
    getForecast(city).then(function (data) {
      this.setState({
        forecastData: data,
      })
    }.bind(this))
  },
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        currentData={this.state.currentData}
        forecastData={this.state.forecastData} />
    )
  },
})

module.exports = ForecastContainer
