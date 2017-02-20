import React, { Component } from 'react'

class Project extends Component {
  render () {
    return (
      <div className='project'>
        <img alt={this.props.data.name} src={this.props.data.splashImg} />
      </div>
    )
  }
}

export default Project
