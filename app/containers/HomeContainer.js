import React, { PropTypes } from 'react'
import { getCurrentWeatherWithCoords } from '../utils/api'
import WeatherCard from '../components/WeatherCard'
const Home = require('../components/Home')

const HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      localWeather: {},
      isLocalWeatherLoading: true,
    }
  },
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getCurrentWeatherWithCoords(position.coords.latitude, position.coords.longitude)
          .then((data) => {
            console.log(data)
            this.setState({
              localWeather: data,
              isLocalWeatherLoading: false,
            })
          })
      })
    }
  },
  render() {
    return this.state.isLocalWeatherLoading === true
        ? <div>{'Loading'}</div>
        : <WeatherCard
          city={this.state.localWeather.name}
          id={this.state.localWeather.weather[0].id}
          temp={this.state.localWeather.main.temp}
          main={this.state.localWeather.weather[0].description}
          humidity={this.state.localWeather.main.humidity} />
  },
})

module.exports = HomeContainer
