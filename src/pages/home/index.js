import React, { Component } from 'react'
import css from './index.module.less'

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={css['homepage-wrapper']}>
        this is home page.
      </div>
    )
  }
}
