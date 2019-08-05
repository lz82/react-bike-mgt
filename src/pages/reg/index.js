import React, { Component } from 'react'
import { Card, Form, Input, Cascader, Button } from 'antd'

import css from './index.module.less'

class RegPage extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }
    return (
      <div className={css['reg-page-wrapper']}>
        <Card
          title={<h3 className={css['reg-title']}>reg</h3>}
          className={css['reg-form-wrapper']}
        >
          <Form
            {...formItemLayout}
          >
            <Form.Item
              label="E-mail"
            >
              {
                getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'please input email' },
                    { type: 'email', message: 'The input is not valid E-mail!' }
                  ]
                })(<Input
                  placeholder="email"
                />)
              }
            </Form.Item>
            <Form.Item
              label="Password"
              hasFeedback
            >
              {
                getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'please input password' }
                  ]
                })(<Input.Password />)
              }
            </Form.Item>
            <Form.Item
              label="Confirm Password"
            >
              {
                getFieldDecorator('confirm', {
                  rules: [
                    { required: true, message: 'please input confirm password' }
                  ]
                })(<Input.Password />)
              }
            </Form.Item>
            <Form.Item
              label="Nickname"
            >
              {
                getFieldDecorator('nickname', {
                  rules: [
                    { required: true, message: 'please input nickname' }
                  ]
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              label="Habitual Residence:"
            >
              {
                getFieldDecorator('residence', {
                  rules: [
                    { required: true, message: 'please input habitual residence' }
                  ]
                })(<Cascader />)
              }
            </Form.Item>
            <Form.Item
              label="Phone Number"
            >
              {
                getFieldDecorator('phone', {
                  rules: [
                    { required: true, message: 'please input phone number' }
                  ]
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              label="Website"
            >
              {
                getFieldDecorator('website', {
                  rules: [
                    { required: true, message: 'please input your website' }
                  ]
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              label="Captcha"
            >
              <div className={css['form-row']}>
                {
                  getFieldDecorator('captcha', {
                    rules: [
                      { required: true, message: 'please input captcha' }
                    ]
                  })(<Input />)
                }
                <Button>
                  Get captcha
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'reg-page' })(RegPage)
