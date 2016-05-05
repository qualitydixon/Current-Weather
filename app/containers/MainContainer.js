import React from 'react'
import Navigation from '../components/Navigation'
require('../main.less')

const MainContainer = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
  },
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
      <div>
        <Navigation
          onSubmitCity={this.handleSubmitCity}
          onUpdateCity={this.handleUpdateCity}
          city={this.state.city} />
        {this.props.children}
      </div>
    )
  },
})

module.exports = MainContainer
