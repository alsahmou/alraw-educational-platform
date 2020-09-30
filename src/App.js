import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importing routing components
import DynamicRouteComp from './routingComps/DynamicRouteComp'
import Homepage from './routingComps/Homepage'
import NotFound from './routingComps/NotFound'
import Login from './routingComps/Login'
import Signup from './routingComps/Signup'
import UserDashboard from './routingComps/UserDashboard'

// Main Application component where the website is routed by different URLs
class App extends Component {
  render () {
    const supportsHistory = 'pushState' in window.history
    return (
      <div className='App'>
        <BrowserRouter forceRefresh={!supportsHistory}>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/about' component={Homepage} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/user-dashboard' component={UserDashboard} />
            <Route path='/posts/:slug' component={DynamicRouteComp} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
