import React, { Component } from 'react'
import Project from './Project'

import sonder_img from '../../public/imgs/sonderfm-splash.png'
import gitrep_img from '../../public/imgs/gitrep-splash.png'
import c1_img from '../../public/imgs/c1-splash.png'

class Experience extends Component {

  render () {
    const projects = [
      {
        name: 'capital one investing',
        gitURL: 'something',
        splashImg: c1_img
      },
      {
        name: 'git_rep',
        gitURL: 'something',
        splashImg: gitrep_img
      },
      {
        name: 'sonder_fm',
        gitURL: 'something',
        splashImg: sonder_img
      }
    ]
    return (
      <section className='experience'>
        <span className='label'>// projects</span>
        <div className='projectList'>
          {projects.map((project, i) => <Project key={i} data={project} />)}
        </div>
      </section>
    )
  }
}

export default Experience
