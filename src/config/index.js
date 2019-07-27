const env = process.env

const { REACT_APP_URL_TYPE } = env

function baseUrl () {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return 'http://localhost:3000'
    case 'prod':
      return 'http://localhost:3000'
    default:
      return 'http://localhost:3000'
  }
}

const config = {
  baseUrl: baseUrl()
}

export default config
