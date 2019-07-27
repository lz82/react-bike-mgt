import axios from 'axios'
import { message } from 'antd'
import appConfig from '@/config'

const instance = axios.create({
  baseURL: appConfig.baseUrl,
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'aaa'
    return config
  },
  error => {
    // Do something with request error
    message.error({
      content: error.toString(),
      duration: 2000
    })
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    // 当响应结果不成功，则报错
    // if (!response.data.success) {
    //   // Message.error({
    //   //   message: response.data.message,
    //   //   duration: 2000
    //   // })
    //   return Promise.reject(response.data.message)
    // }
    // 这里也可以根据返回的Code做一些指定处理
    return response
  },
  error => {
    if (error.response) {
      // 特殊处理一些请求
      // if (error.response.status === 401) {
      // }
    }

    message.error({
      content: error.toString(),
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default instance
