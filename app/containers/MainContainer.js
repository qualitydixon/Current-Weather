const React = require('react')
require('../main.less')

const MainContainer = React.createClass({
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    )
  },
})

module.exports = MainContainer
