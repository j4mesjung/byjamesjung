import React, { Component } from 'react'
import Social from './Social'
import Email from './Email'

class Footer extends Component {
  render () {
    return (
      <section className='footer'>
        <Email />
        <Social />
      </section>
    )
  }
}

export default Footer
