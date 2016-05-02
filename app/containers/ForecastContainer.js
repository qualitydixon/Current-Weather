const React = require('react')
const Forecast = require('../components/Forecast')
const getForecast = require('../utils/api').getForecast
const getCurrentWeather = require('../utils/api').getCurrentWeather

const ForecastContainer = React.createClass({
  getInitialState() {
    return {
      isCurrentLoading: true,
      isForecastLoading: true,
      currentData: {},
      forecastData: {},
    }
  },
  componentDidMount() {
    this.makeRequest(this.props.routeParams.city)
  },
  makeRequest(city) {
    getForecast(city).then(function (data) {
      this.setState({
        forecastData: data,
        isForecastLoading: false,
      })
    }.bind(this))
  },
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isForecastLoading={this.state.isForecastLoading}
        forecastData={this.state.forecastData} />
    )
  },
})

module.exports = ForecastContainer
