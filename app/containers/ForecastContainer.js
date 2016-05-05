import React from 'react'
const Forecast = require('../components/Forecast')
const getForecast = require('../utils/api').getForecast

const ForecastContainer = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.object.isRequired,
  },
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
    getForecast(city).then((data) => {
      this.setState({
        forecastData: data,
        isForecastLoading: false,
      })
    })
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
