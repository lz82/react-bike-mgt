import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'

import css from './index.module.less'

export default class ModalPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBasic: false,
      showFooter: false,
      showAsync: false,
      confirmLoading: false,
      showConfirm: false
    }
  }

  handleBasic(status) {
    this.setState({
      showBasic: status
    })
  }

  handleFooter(status) {
    this.setState({
      showFooter: status
    })
  }

  handleAsync(status, ...arg) {
    this.setState({
      showAsync: status
    })
  }

  handleAsyncOk() {
    this.setState({
      confirmLoading: true
    })
    setTimeout(() => {
      this.setState({
        showAsync: false,
        confirmLoading: false
      })
    }, 2000)
  }

  handleConfirm(status) {
    Modal.confirm({
      title: '确认删除吗？',
      content: 'some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      okButtonProps: {
        disabled: true
      },
      onOk() {
        // console.log('OK')
      },
      onCancel() {
        // console.log('Cancel')
      }
    })
  }

  handleShowTip(type) {
    Modal[type]({
      title: `this is a ${type} message`,
      content: (
        <div>
          <p>some message...some message...</p>
          <p>some message...some message...</p>
          <p>some message...some message...</p>
        </div>
      ),
      onOk() {
        // console.log('tip ok')
      }
    })
  }

  handleManual() {
    let countdown = 10
    const modal = Modal.success({
      title: 'this is a notification message',
      content: `this modal will destroyed after ${countdown} seconde...`
    })
    const timer = setInterval(() => {
      modal.update({
        content: `this modal will destroyed after ${--countdown} seconde...`
      })
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      modal.destroy()
    }, countdown * 1000)
  }

  customFooter =
    [
      <Button key="return" onClick={this.handleFooter.bind(this, false)}>return</Button>,
      <Button key="submit" onClick={this.handleFooter.bind(this, false)}>submit</Button>
    ]

  render() {
    return (
      <div
        className={css['modal-page-wrapper']}
      >
        <Card
          title="基本对话框"
          className={css['card-wrapper']}
        >
          <Button
            type="primary"
            onClick={this.handleBasic.bind(this, true)}>
              打开基本弹框
          </Button>
          <Modal
            title="Basic Model"
            visible={this.state.showBasic}
            keyboard={false}
            maskClosable={false}
            centered={false}
            confirmLoading={false}
            cancelText="算了吧"
            okText="好的"
            destroyOnClose
            onOk={this.handleBasic.bind(this, false)}
            onCancel={this.handleBasic.bind(this, false)}
          >
            <p>Some contents...</p>
            <input />
          </Modal>
        </Card>

        <Card
          title="自定义页脚"
          className={css['card-wrapper']}
        >
          <Button
            type="primary"
            onClick={this.handleFooter.bind(this, true)}
          >
            打开自定义页脚弹框
          </Button>
          <Modal
            title="自定义页脚"
            visible={this.state.showFooter}
            footer={this.customFooter}
            onOk={this.handleFooter.bind(this, false)}
            onCancel={this.handleFooter.bind(this, false)}
          >
            <p>Some content...</p>
          </Modal>
        </Card>

        <Card
          title="异步关闭弹框"
          className={css['card-wrapper']}
        >
          <Button
            type="primary"
            onClick={this.handleAsync.bind(this, true)}>
            打开异步关闭弹框
          </Button>
          <Modal
            title="异步关闭弹框"
            visible={this.state.showAsync}
            confirmLoading={this.state.confirmLoading}
            onOk={this.handleAsyncOk.bind(this)}
            onCancel={this.handleAsync.bind(this, false)}
          >
            <p>Some content...</p>
          </Modal>
        </Card>

        <Card
          title="confirm对话框"
          className={css['card-wrapper']}
        >
          <Button
            type="primary"
            onClick={this.handleConfirm.bind(this, true)}
          >
            打开confirm对话框
          </Button>
        </Card>

        <Card
          title="信息提示弹框"
          className={css['card-wrapper']}
        >
          <Button onClick={this.handleShowTip.bind(this, 'info')}>Info</Button>
          <Button onClick={this.handleShowTip.bind(this, 'success')}>success</Button>
          <Button onClick={this.handleShowTip.bind(this, 'error')}>error</Button>
          <Button onClick={this.handleShowTip.bind(this, 'warning')}>warning</Button>
        </Card>

        <Card
          title="手动更新和销毁对话框"
        >
          <Button onClick={this.handleManual.bind(this)}>confirm</Button>
        </Card>
      </div>
    )
  }
}
