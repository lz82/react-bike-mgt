import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon } from 'antd'

import NavLeft from '@/components/nav-left'

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
            style={{ background: '#fff', padding: 0 }}
          >
          </Header>
          <Content
            style={{ margin: '0 16px' }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}><Icon type="pie-chart" />Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React ©2019 Created by Liuzhuang</Footer>
        </Layout>
      </Layout>
    )
  }
}
