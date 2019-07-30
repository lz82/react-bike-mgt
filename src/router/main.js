import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from '@/pages/home'
import About from '@/pages/about'

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}
