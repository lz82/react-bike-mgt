import React, { Component } from 'react'
import css from './index.module.less'
import { Menu, Icon } from 'antd'

import { commonApi } from '@/service/index'

const { SubMenu } = Menu

export default class NavLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: []
    }
  }

  async componentDidMount() {
    const menu = await this.getMenuData()
    this.setState({
      menu: menu
    })
  }

  async getMenuData() {
    const menu = await commonApi.getMenu()
    return menu
  }

  getMenu(data) {
    const menu = data.map(item => {
      if (item.child) {
        console.log(item.child)
        const temp  = this.getMenu(item.child)
        // console.log(temp)
        return (
          <SubMenu
            key={item.id}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.text}</span>
              </span>
            }
          >
            {temp}
          </SubMenu>
        )
      } else {
        let menuCtx = null
        if (item.icon) {
          menuCtx = (<span>
            <Icon type={item.icon} />
            <span>{item.text}</span>
          </span>)
        } else {
          menuCtx = <span>{item.text}</span>
        }
        console.log(menuCtx)
        return (
          <Menu.Item key={item.id}>
            {menuCtx}
          </Menu.Item>
        )
      }
    })
    return menu
  }

  render() {
    const menu = this.getMenu(this.state.menu)
    return (
      <div className={css['menu-wrapper']}>
        <Menu
          theme="dark"
        >
          {menu}
        </Menu>
      </div>
    )
  }
}
