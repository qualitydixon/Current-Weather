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
        ? <div className='loading'>{'Loading'}</div>
        : <div>
          <div className='cityHeader'>{this.state.localWeather.name}</div>
          <Home
            id={this.state.localWeather.weather[0].id}
            temp={this.state.localWeather.main.temp}
            main={this.state.localWeather.weather[0].description}
            humidity={this.state.localWeather.main.humidity} />
        </div>
  },
})

module.exports = HomeContainer
