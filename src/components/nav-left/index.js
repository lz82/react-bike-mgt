import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import css from './index.module.less'
import { Menu, Icon } from 'antd'

import { commonApi } from '@/service/index'

const { SubMenu } = Menu

class NavLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: []
    }
    this.handleJump = this.handleJump.bind(this)
  }

  async componentDidMount() {
    const menu = await this.getMenuData()
    this.setState({
      menu: menu
    })
  }

  // async componentWillMount() {
  //   const menu = await this.getMenuData()
  //   this.setState({
  //     menu: menu
  //   })
  // }

  async getMenuData() {
    const menu = await commonApi.getMenu()
    return menu
  }

  handleJump(link) {
    debugger
    this.props.history.push(link)
  }

  getMenu(data) {
    const menu = data.map(item => {
      if (item.child) {
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
            {this.getMenu(item.child)}
          </SubMenu>
        )
      } else {
        let menuCtx = null
        if (item.icon) {
          menuCtx = (<span>
            <Icon type={item.icon} />
            {/* <NavLink to={item.link}>{item.text}</NavLink> */}
            <span onClick={() => this.handleJump(item.link)}>{item.text}</span>
          </span>)
        } else {
          // menuCtx = <NavLink to={item.link}>{item.text}</NavLink>
          menuCtx = <span onClick={() => this.handleJump(item.link)}>{item.text}</span>
        }
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
    return (
      <div className={css['menu-wrapper']}>
        <Menu
          theme="dark"
        >
          {this.getMenu(this.state.menu)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavLeft)
