const env = process.env

const { REACT_APP_URL_TYPE } = env

function baseUrl () {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return 'https://www.easy-mock.com/mock/5d4b79559266cd24ba66c1ac/bike/v1'
    case 'prod':
      return 'https://www.easy-mock.com/mock/5d4b79559266cd24ba66c1ac/bike/v1'
    default:
      return 'https://www.easy-mock.com/mock/5d4b79559266cd24ba66c1ac/bike/v1'
  }
}

const config = {
  baseUrl: baseUrl()
}

export default config
