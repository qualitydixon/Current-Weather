import React from 'react'
const Forecast = require('../components/Forecast')
const getForecast = require('../utils/api').getForecast

const ForecastContainer = React.createClass({
  propTypes: {
    routeParams: React.PropTypes.object.isRequired,
  },
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
  componentWillReceiveProps(nextProps) {
    this.makeRequest(nextProps.routeParams.city)
    this.setState({
      isLoading: true,
    })
  },
  makeRequest(city) {
    getForecast(city).then((data) => {
      console.log(data)
      this.setState({
        forecastData: data,
        isLoading: false,
      })
    })
  },
  render() {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    )
  },
})

module.exports = ForecastContainer
