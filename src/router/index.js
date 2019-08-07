import React, { Component } from 'react'
// import { ConfigProvider } from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutMain from '@/layout/main/index'
import Login from '@/pages/login'
import Reg from '@/pages/reg'
import App from '@/app'

// import zhCN from 'antd/es/locale-provider/zh_CN.js'

export default class AppRouter extends Component {
  render() {
    return (
      // <ConfigProvider
      //   locale={zhCN}
      // >
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/reg" component={Reg} />
            <Route path="/admin" component={LayoutMain} />
            <Route component={LayoutMain} />
          </Switch>
        </App>
      </Router>
      // </ConfigProvider>
    )
  }
}
