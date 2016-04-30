const React = require('react')
const Home = require('../components/Home')

const HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      city: '',
    }
  },
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value,
    })
  },
  handleSubmitCity(e) {
    e.preventDefault()
    this.setState({
      city: '',
    })
    this.context.router.push(`/forecast/${this.state.city}`)
  },
  render() {
    return (
      <Home
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    )
  },
})

module.exports = HomeContainer
