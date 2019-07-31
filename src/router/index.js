import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LayoutMain from '@/layout/main/index'
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import App from '@/app'

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/admin" component={LayoutMain} />
        </App>
      </Router>
    )
  }
}
