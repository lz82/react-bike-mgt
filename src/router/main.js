import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '@/pages/home'
import About from '@/pages/about'
import Button from '@/pages/button'
import Spin from '@/pages/spin'
import Modal from '@/pages/modal'
import Notification from '@/pages/notification'

import BasicForm from '@/pages/form/basic'
import UserInfoForm from '@/pages/form/userinfo'

import BasicTable from '@/pages/table/basic'

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin/index" component={Home} />
          <Route path="/admin/about" component={About} />
          <Route path="/admin/component/button" component={Button} />
          <Route path="/admin/component/spin" component={Spin} />
          <Route path="/admin/component/modal" component={Modal} />
          <Route path="/admin/component/notification" component={Notification} />
          <Route path="/admin/form/basic" component={BasicForm} />
          <Route path="/admin/form/userinfo" component={UserInfoForm} />
          <Route path="/admin/table/basic" component={BasicTable} />
          <Route component={Home} />
        </Switch>
      </div>
    )
  }
}
