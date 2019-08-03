import React, { Component } from 'react'
import { Card, Button, notification, Icon } from 'antd'

import css from './index.module.less'

export default class NotificationPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleBasic() {
    notification.open({
      message: 'notification title',
      description: 'notification desc',
      duration: 2,
      onClick() {
        console.log('nofitication click...')
      }
    })
  }

  handleIcon(type) {
    notification[type]({
      message: `notification type : ${type}`,
      description: 'notification desc'
    })
  }

  handleCustom() {
    notification.open({
      message: 'this is custom notification',
      description: 'custom icon desc',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />
    })
  }

  handleCustomBtn() {
    const key = `open${Date.now()}`
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => notification.close(key)}
      >
        confirm
      </Button>
    )
    notification.config({
      placement: 'bottomLeft'
    })
    notification.open({
      message: 'this is custom button notification',
      description: 'cusom button desc',
      placement: 'bottomRight',
      key,
      btn,
      duration: 0
    })
  }

  handleUpdate() {
    const key = `update${Date.now()}`
    notification.open({
      message: 'update title',
      description: 'update desc',
      key,
      duration: 0
    })
    setTimeout(() => {
      notification.open({
        key,
        message: 'update title',
        description: 'update 1st time'
      })
    }, 3000)

    setTimeout(() => {
      notification.open({
        key,
        message: 'update title',
        description: 'update 2nd time'
      })
    }, 6000)
  }

  render() {
    return (
      <div className={css['notification-page-wrapper']}>
        <Card
          title="基本提醒"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              onClick={this.handleBasic.bind(this)}
            >
              最基本的提醒
            </Button>
          </div>
        </Card>

        <Card
          title="带图标提醒"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button onClick={this.handleIcon.bind(this, 'success')}>success</Button>
            <Button onClick={this.handleIcon.bind(this, 'info')}>info</Button>
            <Button onClick={this.handleIcon.bind(this, 'error')}>error</Button>
            <Button onClick={this.handleIcon.bind(this, 'warning')}>warning</Button>
            <Button onClick={this.handleIcon.bind(this, 'warn')}>warn</Button>
          </div>
        </Card>

        <Card
          title="自定义图标提醒"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              onClick={this.handleCustom.bind(this)}
            >
              自定义图标提醒
            </Button>
          </div>
        </Card>

        <Card
          title="自定义按钮"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="danger"
              onClick={this.handleCustomBtn.bind(this)}
            >
              自定义按钮提醒
            </Button>
          </div>
        </Card>

        <Card
          type="更新提醒"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              onClick={this.handleUpdate.bind(this)}
            >
              更新提醒
            </Button>
          </div>
        </Card>
      </div>
    )
  }
}
