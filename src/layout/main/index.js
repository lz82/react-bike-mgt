import React, { Component } from 'react'
import { Layout, Icon } from 'antd'

import NavLeft from '@/components/nav-left'
import CustomerHeader from '@/components/header'

import css from './index.module.less'
import logo from '@/styles/assets/img/logo.svg'

const { Header, Content, Footer, Sider } = Layout

export default class LayoutMain extends Component {
  render() {
    return (
      <Layout
        style={{ minHeight: '100vh' }}
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
              <Icon type="pie-chart" />Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React ©2019 Created by Liuzhuang</Footer>
        </Layout>
      </Layout>
    )
  }
}
