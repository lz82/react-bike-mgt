import React, { Component } from 'react'
import { Card, Form, Input, Cascader, Button, Tooltip, Icon, Select, AutoComplete, Row, Col, Checkbox } from 'antd'

import css from './index.module.less'

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake'
          }
        ]
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }
        ]
      }
    ]
  }
]

class RegPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      websiteDataSource: []
    }
  }

  handleWebsiteChange = val => {
    let websiteDataSource = []
    if (val) {
      websiteDataSource = ['.com', '.cn', '.net', '.org'].map(domain => `${val}${domain}`)
    }
    this.setState({
      websiteDataSource
    })
  }

  handleReg = e => {
    e.preventDefault()
    this.props.form.validateFields((err, val) => {
      if (!err) {
        console.log(val)
      }
    })
  }

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

    const centerItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(<Select>
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </Select>)

    const websiteOptions = this.state.websiteDataSource.map(item => {
      return (
        <AutoComplete.Option key={item}>{item}</AutoComplete.Option>
      )
    })

    return (
      <div className={css['reg-page-wrapper']}>
        <Card
          title={<h3 className={css['reg-title']}>reg</h3>}
          className={css['reg-form-wrapper']}
        >
          <Form
            {...formItemLayout}
            onSubmit={this.handleReg}
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
              label={
                <span>
                  Nickyname&nbsp;
                  <Tooltip
                    title="what do you want others to call you?"
                  >
                    <Icon
                      type="question-circle-o"
                    />
                  </Tooltip>
                </span>
              }
            >
              {
                getFieldDecorator('nickname', {
                  rules: [
                    { required: true, message: 'please input nickname', whitespace: true }
                  ]
                })(<Input />)
              }
            </Form.Item>
            <Form.Item
              label="Habitual Residence:"
            >
              {
                getFieldDecorator('residence', {
                  initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                  rules: [
                    { required: true, message: 'please input habitual residence' }
                  ]
                })(<Cascader
                  options={residences}
                />)
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
                })(<Input
                  addonBefore={prefixSelector}
                  style={{ width: '100%' }}
                />)
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
                })(<AutoComplete
                  placeholder="website"
                  dataSource={websiteOptions}
                  onChange={this.handleWebsiteChange}
                >
                  <Input />
                </AutoComplete>)
              }
            </Form.Item>
            <Form.Item
              label="Captcha"
              extra="We must make sure that you are a human."
            >
              <Row
                gutter={8}
              >
                <Col
                  span={12}>
                  {
                    getFieldDecorator('captcha', {
                      rules: [
                        { required: true, message: 'please input captcha' }
                      ]
                    })(<Input />)
                  }
                </Col>
                <Col
                  span={12}
                >
                  <Button>
                    Get captcha
                  </Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              {...centerItemLayout}
            >
              {
                getFieldDecorator('agreement', {
                  valuePropName: 'checked'
                })(<Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>)
              }
            </Form.Item>
            <Form.Item
              {...centerItemLayout}
            >
              <Button
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'reg-page' })(RegPage)
