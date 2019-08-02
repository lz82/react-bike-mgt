import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from 'antd'

import MainRouter from '@/router/main'

import NavLeft from '@/components/nav-left'
import CustomerHeader from '@/components/header'

import css from './index.module.less'
import logo from '@/styles/assets/img/logo.svg'

const { Header, Content, Footer, Sider } = Layout

export default class LayoutMain extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    console.log('layout', this.props)
    return (
      <Router>
        <Layout
          style={{ height: '100vh' }}
        >
          <Sider
            collapsible
          >
            <div className={css.logo}>
              <img src={logo} width="50px" height="50px" />
            </div>
            <NavLeft />
          </Sider>
          <Layout>
            <Header
              className={css.header}
            >
              <CustomerHeader />
            </Header>
            <Content
              style={{ margin: '16px' }}
            >
              <div className={css['content-container']}>
                <MainRouter />
              </div>
            </Content>
            <Footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px 0' }}>React ©2019 Created by Liuzhuang</Footer>
          </Layout>
        </Layout>
      </Router>
    )
  }
}
