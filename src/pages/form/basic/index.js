import React, { Component } from 'react'

import { Form, Input, Icon, Button, message } from 'antd'

import css from './index.module.less'

const hasError = function (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class BasicForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${JSON.stringify(values)}`)
      } else {
        message.warn(`${JSON.stringify(err)}`)
      }
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')

    return (
      <div
        className={css['basic-form-wrapper']}
      >
        <Form
          className={css['form-wrapper']}
          onSubmit={this.handleSubmit.bind(this)}
          name="basic"
        >
          <Form.Item>
            <h3 style={{ textAlign: 'center' }}>欢迎使用</h3>
          </Form.Item>
          <Form.Item
            validateStatus={usernameError ? 'error' : ''}
            help={usernameError || ''}
          >
            {
              getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: 'please input your username'
                }]
              })(<Input
                prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                placeholder="Username"
              />)
            }
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {
              getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'please input your password'
                }]
              })(<Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                placeholder="Password"
              />)
            }
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasError(getFieldsError())}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(BasicForm)
