import React, { Component, PropTypes } from 'react'
import Navigation from '../components/Navigation'
import '../stylesheets/main.less'

export default class MainContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
    }
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value,
    })
  }
  handleSubmitCity(e) {
    e.preventDefault()
    this.setState({
      city: '',
    })
    this.context.router.push(`/forecast/${this.state.city}`)
  }
  render() {
    return (
      <div>
        <Navigation
          onSubmitCity={(e) => this.handleSubmitCity(e)}
          onUpdateCity={(e) => this.handleUpdateCity(e)}
          city={this.state.city} />
        {this.props.children}
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
}
