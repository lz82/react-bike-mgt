import axios from 'axios'
import { message } from 'antd'
import appConfig from '@/config'

const instance = axios.create({
  baseURL: appConfig.baseUrl,
  timeout: 5000
})

const loadingMask = document.querySelector('#loading-mask')

const showLoading = () => {
  loadingMask.style.display = 'flex'
}

const closeLoading = () => {
  loadingMask.style.display = 'none'
}

let reqList = []

instance.interceptors.request.use(
  config => {
    config.headers['X-Token'] = 'aaa'

    // 判断是否重复请求
    const request = JSON.stringify(config)

    if (!reqList.includes(request)) {
      reqList.push(request)
    }

    showLoading()

    return config
  },
  error => {
    // Do something with request error
    message.error({
      content: error,
      duration: 2000
    })
    closeLoading()
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
    reqList.splice(reqList.findIndex(item => item === JSON.stringify(response.config)), 1)
    if (reqList.length === 0) {
      closeLoading()
    }
    return response
  },
  error => {
    // 发生异常时，清空请求列表
    reqList.length = 0

    if (error.response) {
      // 特殊处理一些请求
      // if (error.response.status === 401) {
      // }
    }
    closeLoading()
    message.error(error.toString())
    return Promise.reject(error)
  }
)

export default instance
