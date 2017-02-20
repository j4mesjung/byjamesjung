import React from 'react'

const Social = (props) => {
  return (
    <div className='social'>
      <span className='label'>// follow</span>
      <div>
        <ul className='social-links'>
          <li><a href='https://github.com/j4mesjung'><i className='ion-social-github' /></a></li>
          <li><a href='https://www.facebook.com/james.jung'><i className='ion-social-facebook' /></a></li>
          <li><a href='https://www.linkedin.com/in/jamesmjung/'><i className='ion-social-linkedin' /></a></li>
        </ul>
      </div>
      <div className='clearfix' />
    </div>
  )
}

export default Social
