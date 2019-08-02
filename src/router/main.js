import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '@/pages/home'
import About from '@/pages/about'
import Button from '@/pages/button'

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin/index" component={Home} />
          <Route path="/admin/about" component={About} />
          <Route path="/admin/component/button" component={Button} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}
