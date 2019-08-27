import React, { Component } from 'react'
import { Card, Table } from 'antd'

import { tableApi } from '@/service'

import css from './index.module.less'

const { Column } = Table

export default class BasicTablePage extends Component {

  state = {
    loading: false
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    const { userList } = await tableApi.getBasicTableData()
    this.setState({
      userList
    })
    this.setState({
      loading: false
    })
  }

  columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      render: text => <a style={{ textAlign: 'center' }} href="javascript: void 0;">{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Sexy',
      dataIndex: 'sex',
      render: text => {
        return (
          <span>
            {
              text === 1 ? '男' : '女'
            }
          </span>
        )
      }
    },
    {
      title: 'E-mail',
      dataIndex: 'email'
    }
  ]

  render() {
    const rowSelection = {
      type: 'radio',

      onChange(keys, rows) {
        // console.log(`keys:${keys}, rows:${rows}`)
      },

      getCheckboxProps(record) {
        return {
          disabled: record.sex === 2
        }
      }
    }

    return (
      <div className={css['basic-talbe-wrapper']}>
        <Card
          title="Basic Table"
          className={css['card-wrapper']}
        >
          <Table
            dataSource={this.state.userList}
            loading={this.state.loading}
          >
            <Column
              title="Name"
              dataIndex="username"
              width={300}
              align="center"
            />

            <Column
              title="Age"
              dataIndex="age"
            />

            <Column
              title="Sexy"
              dataIndex="sex"
              render={text => (
                <span>
                  {
                    text === 1 ? '男' : '女'
                  }
                </span>
              )}
            />

            <Column
              title="E-mail"
              dataIndex="email"
            />
          </Table>
        </Card>

        <Card
          title="Render Column"
        >
          <Table
            lading={this.state.loading}
            dataSource={this.state.userList}
            columns={this.columns}
            rowSelection={rowSelection}
            loading={this.state.loading}
          >

          </Table>
        </Card>
      </div>
    )
  }
}
