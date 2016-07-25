import React, { Component, PropTypes } from 'react'
import { getCurrentWeatherWithCoords, getCurrentWeather } from '../utils/api'
import { formatTime } from '../utils/helpers'
import { cities } from '../constants/constants'
import Home from '../components/Home'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localWeather: {},
      isLocalWeatherLoading: true,
    }
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getCurrentWeatherWithCoords(position.coords.latitude, position.coords.longitude)
          .then(data => {
            console.log(data)
            this.setState({
              localWeather: data,
              isLocalWeatherLoading: false,
            })
          })
      }, error => {
        console.log(error)
        console.log(cities)
        getCurrentWeather(cities[1])
          .then(data => {
            console.log(data)
            this.setState({
              localWeather: data,
              isLocalWeatherLoading: false,
            })
          })
      })
    } else {
      getCurrentWeather(cities[1])
        .then(data => {
          this.setState({
            localWeather: data,
            isLocalWeatherLoading: false,
          })
        })
    }
  }
  render() {
    const data = this.state.localWeather
    return this.state.isLocalWeatherLoading === true
        ? <div className='loading'>{'Loading'}</div>
        : <div>
          <div className='cityHeader'>{this.state.localWeather.name}</div>
          <Home
            id={this.state.localWeather.weather[0].id}
            temp={this.state.localWeather.main.temp}
            main={this.state.localWeather.weather[0].description}
            humidity={this.state.localWeather.main.humidity}
            sunrise={formatTime(data.sys.sunrise).substr(1, 4)}
            sunset={formatTime(data.sys.sunset).substr(0, 5)} />
        </div>
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
