import React, { Component } from 'react'

import { Card, Spin, Icon, Switch } from 'antd'

import css from './index.module.less'

export default class SpinPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  handleSwitchChange(status) {
    this.setState({
      isLoading: status
    })
  }

  render() {
    const loadingIcon = <Icon type="plus" style={{ fontsize: 24 }} spin></Icon>
    return (
      <div
        className={css['spin-page-wrapper']}
      >
        <Card
          title="基本用法"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </div>
        </Card>

        <Card
          title="自定义描述文案和指示符"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Spin
              tip="加载中..."
            />
            <Spin
              indicator={loadingIcon}
            />
          </div>
        </Card>

        <Card
          title="放在容器中"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <div style={{ width: 300, height: 100, background: '#eee', textAlign: 'center', padding: 40 }}>
              <Spin />
            </div>
          </div>
        </Card>

        <Card
          title="放在容器外"
          className={css['card-wrapper']}
        >
          <Spin
            spinning={this.state.isLoading}
            delay={500}
          >
            <div
              className={css['card-container']}
              style={{ border: 'solid 1px #ccc', height: 60 }}
            >
              可以将内容嵌到Spin中，将现有容器变为加载状态
            </div>
          </Spin>
          <div
            className={css['card-container']}
            style={{ paddingTop: 20 }}
          >
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              defaultChecked
              onChange={this.handleSwitchChange.bind(this)}
            />
          </div>
        </Card>
      </div>
    )
  }
}
