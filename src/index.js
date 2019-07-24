import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import css from './index.module.less'

function App() {
  return (
    <div className={css.test}>
      <p>hello react</p>
      <Button type="primary" icon="search">click</Button>
    </div>
  )
}

const element = <App />

ReactDOM.render(element, document.querySelector('#root'))