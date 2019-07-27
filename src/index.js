import React from 'react'
import ReactDOM from 'react-dom'
import LayoutMain from './layout/main/index'

function App() {
  return (
    <div>
      <LayoutMain />
    </div>
  )
}

const element = <App />

ReactDOM.render(element, document.querySelector('#root'))
