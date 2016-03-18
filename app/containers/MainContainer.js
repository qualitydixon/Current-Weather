var React = require('react');
var styles = require('../styles');
require('../main.css');

var MainContainer = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = MainContainer;