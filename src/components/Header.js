import React, { Component } from 'react'

const adjs = [
  {
    name: 'Javascript',
    color: '#f1c40f'
  },
  {
    name: 'React',
    color: '#61DAFB'
  },
  {
    name: 'Redux',
    color: '#9b59b6'
  },
  {
    name: 'Node.js',
    color: '#2ecc71'
  },
  {
    name: 'jQuery',
    color: '#e67e22'
  }]

class Header extends Component {

  constructor () {
    super()

    this.state = {
      index: 0,
      name: 'Javascript',
      color: '#f1c40f'
    }

    this.timer = this.timer.bind(this)
  }

  componentDidMount () {
    setInterval(this.timer, 1750)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  timer () {
    let index = this.state.index
    if (index === adjs.length - 1) {
      index = 0
    } else {
      index += 1
    }
    this.setState({
      index: index,
      name: adjs[index].name,
      color: adjs[index].color
    })
  }

  render () {
    return (
      <section className='header'>
        <div className='introName'>
          <span className='label'>// james jung</span>
          <br />
          <span className='headerDesc'>Currently a Software Engineer at Capital One developing Web Applications built with
          <span style={{color: this.state.color}}> {this.state.name}</span></span>
        </div>
      </section>
    )
  }
}

export default Header
