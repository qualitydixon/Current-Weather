import React, { PropTypes } from 'react'
import { getCurrentWeatherWithCoords } from '../utils/api'
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
    return (
      <Home />
    )
  },
})

module.exports = HomeContainer
