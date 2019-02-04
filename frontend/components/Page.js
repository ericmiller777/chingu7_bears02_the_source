import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <div>{this.props.children}</div>
      </>
    )
  }
}

export default Page
