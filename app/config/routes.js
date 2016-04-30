const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute
const MainContainer = require('../containers/MainContainer')
const HomeContainer = require('../containers/HomeContainer')
const ForecastContainer = require('../containers/ForecastContainer')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path='/forecast/:city' component={ForecastContainer} />
    </Route>
  </Router>
)

module.exports = routes
