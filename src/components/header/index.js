import React, { Component } from 'react'
import { Menu, Dropdown, Avatar, Tag } from 'antd'
import { withRouter } from 'react-router-dom'

import { commonApi } from '@/service/index'

import css from './index.module.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: '',
      title: '',
      tags: []
    }
  }

  async componentDidMount() {
    setInterval(() => {
      this.getTime()
    }, 1000)
    await this.getTitle()
  }

  getWeek() {
    const temp = new Date().getDay()
    switch (temp) {
      case 0:
        return '日'
      case 1:
        return '一'
      case 2:
        return '二'
      case 3:
        return '三'
      case 4:
        return '四'
      case 5:
        return '五'
      case 6:
        return '六'
    }
  }

  getTime() {
    const now = new Date()
    const time = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds() < 10 ? ('0' + now.getSeconds()) : now.getSeconds()}`
    this.setState({
      currentTime: time
    })
  }

  handleTagClick = link => {
    this.props.history.push(link)
  }

  getTitle = async () => {
    const temp = await commonApi.getHeader()
    this.setState({
      title: temp.title,
      tags: temp.tags
    })
  }

  getTag = () => {
    return '首页'
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1">刘荘，您好</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">首页</Menu.Item>
        <Menu.Item key="3">修改密码</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="4">退出</Menu.Item>
      </Menu>
    )
    return (
      <div className={css['header-container']}>
        <div className={css.header}>
          <div className={css.breadcrumb}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {this.state.title}
          </div>
          <div className={css.info}>
            <span>{this.state.currentTime}</span>
            <span></span>
          </div>
          <div className={css.avatar}>
            <Dropdown
              trigger={['click']}
              overlay={menu}
            >
              <Avatar
                style={{ backgroundColor: '#001529' }}
              >
                Lau
              </Avatar>
            </Dropdown>
          </div>
        </div>
        <div className={css.tag}>
          {/* <Tag
            closable
            className={[css.tagitem, css.active]}
            onClick={() => this.handleTagClick('/admin/index')}
          >
            {this.getTag()}
          </Tag> */}
          {/* <Tag
            closable
            className={[css.tagitem]}
            onClick={() => this.handleTagClick('/admin/index')}
          >
            other
          </Tag> */}
          {
            this.state.tags.map((item, index) => {
              return (
                <Tag
                  closable
                  className={[css.tagitem, index === 1 ? css.active : '']}
                  key={index}
                >
                  {item}
                </Tag>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
