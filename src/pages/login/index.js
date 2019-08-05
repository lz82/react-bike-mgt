import React, { Component } from 'react'
import { Card, Form, Input, Icon, Checkbox, Button, message } from 'antd'

import css from './index.module.less'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class LoginPage extends Component {

  componentDidMount() {
    this.props.form.validateFields()
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        if (username === 'admin' && password === '123') {
          message.success(`Log in success...`)
          setTimeout(() => {
            this.props.history.push('/admin/home')
          }, 2000)
        }
      }
    })
  }

  render() {
    const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = this.props.form
    const usernameError = isFieldTouched('username') && getFieldError('username')
    const passwordError = isFieldTouched('password') && getFieldError('password')
    return (
      <div className={css['login-page-wrapper']}>
        <Card
          title={<h3 style={{ textAlign: 'center' }}>Welcome</h3>}
          className={css['login-card-wrapper']}
        >
          <Form
            onSubmit={this.handleSubmit}
          >
            <Form.Item
              hasFeedback
              validateStatus={usernameError ? 'error' : (isFieldTouched('username') ? 'success' : '')}
              help={usernameError || ''}
            >
              {
                getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'please input your username' }
                  ]
                })(<Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                  placeholder="Username"
                />)
              }
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={passwordError ? 'error' : (isFieldTouched('password') ? 'success' : '')}
              help={passwordError || ''}
            >
              {
                getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'please input your password' }
                  ],
                })(<Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0, 0, 0, 0.25)' }} />}
                  placeholder="Password"
                />)
              }
            </Form.Item>
            <Form.Item>
              <div className={css['form-row']}>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(<Checkbox>Remeber me</Checkbox>)
                }
                <a>Forgot password</a>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                disabled={hasErrors(getFieldsError())}
              >
                Log in
              </Button>
              Or <a>register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'login-page' })(LoginPage)
