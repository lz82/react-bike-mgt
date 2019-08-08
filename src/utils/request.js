import instance from './axios'

export function AppPost(url, data) {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function AppGet(url, data) {
  return new Promise((resolve, reject) => {
    instance.get(url)
      .then(res => {
        resolve(res.data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
