import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Form, Card, Input, InputNumber, Select, Radio, Switch, DatePicker, TimePicker, Upload, Icon, Button } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN'

import css from './index.module.less'

const FormItem = Form.Item
const SelectOption = Select.Option
const RadioGroup = Radio.Group

const formLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}

const btnLayout = {
  wrapperCol: {
    xs: { span: 2, offset: 10 },
    sm: { span: 2, offset: 10 }
  }
}

moment.locale('zh-cn')

class UserInfoPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const uploadButton = (
      <div className={css['upload-wrapper']}>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className={css['user-info-page-wrapper']}>
        <Card
          title="User Info"
          className={css['card-wrapper']}
        >
          <Form
            {...formLayout}
            onSubmit={this.handleSubmit}
          >
            <FormItem
              label="UserName"
            >
              {
                getFieldDecorator('username', {
                  initialValue: 'liuzhuang'
                })(<Input />)
              }
            </FormItem>
            <FormItem
              label="sex"
            >
              {
                getFieldDecorator('Sexy', {
                  initialValue: 'm'
                })(<RadioGroup>
                  <Radio value="m">Male</Radio>
                  <Radio value="f">Female</Radio>
                </RadioGroup>)
              }
            </FormItem>
            <FormItem
              label="Age"
            >
              {
                getFieldDecorator('age', {
                  initialValue: 18
                })(<InputNumber />)
              }
            </FormItem>
            <FormItem
              label="Current State"
            >
              {
                getFieldDecorator('state', {
                  initialValue: 'sleepy'
                })(<Select
                  style={{ width: 200 }}
                >
                  <SelectOption value="busy">busy</SelectOption>
                  <SelectOption value="tired">tired</SelectOption>
                  <SelectOption value="sleepy">sleepy</SelectOption>
                </Select>)
              }
            </FormItem>
            <FormItem
              label="Hobby"
            >
              {
                getFieldDecorator('hobby', {
                  initialValue: ['basketball', 'football']
                })(<Select
                  mode="multiple"
                >
                  <SelectOption value="swiming">swiming</SelectOption>
                  <SelectOption value="run">run</SelectOption>
                  <SelectOption value="basketball">basketball</SelectOption>
                  <SelectOption value="football">football</SelectOption>
                  <SelectOption value="bike">bike</SelectOption>
                </Select>)
              }
            </FormItem>
            <FormItem
              label="Marriage"
            >
              {
                getFieldDecorator('marrige', {
                  valuePropName: 'checked',
                  initialValue: false
                })(<Switch />)
              }
            </FormItem>
            <FormItem
              label="Birthday"
            >
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('1982-12-30')
                })(<DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  locale={locale}
                />)
              }
            </FormItem>
            <FormItem
              label="Address"
            >
              {
                getFieldDecorator('address')(<Input.TextArea
                  autosize={{ minRows: 4 }}
                />)
              }
            </FormItem>
            <FormItem
              label="Getup Time"
            >
              {
                getFieldDecorator('time')(<TimePicker />)
              }
            </FormItem>
            <FormItem
              label="Avatar"
            >
              {
                getFieldDecorator('avatar')(<Upload
                  listType="picture-card"
                  showUploadList={false}
                >
                  {uploadButton}
                </Upload>)
              }
            </FormItem>
            <FormItem
              {...btnLayout}
            >
              <Button
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create({ name: 'user-info' })(UserInfoPage)
