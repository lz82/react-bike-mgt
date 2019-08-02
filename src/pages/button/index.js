import React, { Component } from 'react'

import { Card, Button, Icon, Menu, Dropdown, Radio } from 'antd'

import './index.less'
import css from './index.module.less'

const ButtonGroup = Button.Group
const RadioGroup = Radio.Group

export default class ButtonPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isCircleLoading: false,
      isSearchLoading: false,
      btnSize: 'default'
    }

    this.saveClick = this.saveClick.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
  }

  saveClick(type) {
    this.setState({
      [type]: true
    })
    setTimeout(() => {
      this.setState({
        [type]: false
      })
    }, 3000)
  }

  handleMenuClick(e) {
    // console.log(e)
  }

  handleBtnClick(e) {
    // console.log(e)
  }

  handleSizeChange(e) {
    this.setState({
      btnSize: e.target.value
    })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
      </Menu>
    )
    return (
      <div className={css['button-wrapper']}>
        <Card
          title="基础按钮"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              size="small"
              className={css.button}
            >
              Small Primary
            </Button>

            <Button
              type="primary"
              className={css.button}
            >
              Primary
            </Button>

            <Button
              type="primary"
              size="large"
              className={css.button}
            >
              Big Primary
            </Button>

            <Button
              type="primary"
              disabled
              className={css.button}
            >
              Disabled Primary
            </Button>

            <Button
              type="primary"
              className={css.button}
              block
            >
              Block Primary
            </Button>

            <Button
              className={css.button}
            >
              sstir
            </Button>

            <Button
              type="dashed"
              className={css.button}
            >
              dashed
            </Button>

            <Button
              type="danger"
              className={css.button}
            >
              danger
            </Button>

            <Button
              type="link"
              className={css.button}
            >
              link
            </Button>
          </div>
          <div style={{ paddingTop: '20px' }}>
            <Button
              type="primary"
              className={css.button}
              block
            >
              Block Primary
            </Button>
          </div>
        </Card>

        <Card
          title="图标按钮"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              shape="circle"
              icon="search"
              className={css.button}
            >
            </Button>

            <Button
              type="primary"
              icon="search"
              className={css.button}
            >
              Search
            </Button>

            <Button
              type="primary"
            >
              Search<Icon type="search" />
            </Button>
          </div>
        </Card>

        <Card
          title="loading"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="primary"
              icon="save"
              loading={this.state.isLoading}
              className={css.button}
              onClick={() => this.saveClick('isLoading')}
            >
              save
            </Button>

            <Button
              type="primary"
              shape="circle"
              className={css.button}
              loading={this.state.isCircleLoading}
              onClick={() => this.saveClick('isCircleLoading')}
            >
              <Icon type="search" />
            </Button>

            <Button
              className={css.button}
              loading={this.state.isSearchLoading}
              onClick={() => this.saveClick('isSearchLoading')}
            >
              Search
            </Button>
          </div>
        </Card>

        <Card
          title="按钮组"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <ButtonGroup
              className={css.button}
            >
              <Button
                type="primary"
                icon="backward"
              >
                后退
              </Button>
              <Button
                type="primary"
                icon="forward"
                href="http://www.baidu.com"
                target="blank"
              >
                前进
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button icon="cloud"></Button>
              <Button icon="cloud-download"></Button>
              <Dropdown overlay={menu}>
                <Button>
                    Actions<Icon type="down" />
                </Button>
              </Dropdown>
            </ButtonGroup>
          </div>
        </Card>

        <Card
          title="幽灵按钮"
          className={[css['card-wrapper'], 'button-page-dark']}
        >
          <div
            className={[css['card-container'], css.dark]}
          >
            <Button
              ghost
              id="1"
              onClick={this.handleBtnClick}
            >
              Ghost
            </Button>
          </div>
        </Card>

        <Card
          title="按钮尺寸"
          className={css['card-wrapper']}
        >
          <div className={css['card-container']}>
            <Button
              type="danger"
              className={css.button}
              size={this.state.btnSize}
            >
              sstir
            </Button>

            <Button
              type="danger"
              className={css.button}
              size={this.state.btnSize}
              icon="search"
            />

            <RadioGroup
              value={this.state.btnSize}
              onChange={this.handleSizeChange}
            >
              <Radio value="small">small</Radio>
              <Radio value="default">default</Radio>
              <Radio value="large">large</Radio>
            </RadioGroup>
          </div>
        </Card>
      </div>
    )
  }
}
