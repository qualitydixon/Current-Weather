const React = require('react')
const Forecast = require('../components/Forecast')
const getForecast = require('../utils/api').getForecast
const getCurrentWeather = require('../utils/api').getCurrentWeather

const ForecastContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      currentData: {},
      forecastData: {},
    }
  },
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city)
  },
  makeRequest(city) {
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
  render() {
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
