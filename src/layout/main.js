import React, { Component } from 'react'
import { Layout, Breadcrumb, Icon } from 'antd'

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
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}