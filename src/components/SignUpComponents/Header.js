import React from 'react'
import './signupComponentsStyles.css'
const Header = (props) => {
  return (
    <div className='signup-header' >
      <h4 className='header-title' >{props.title}</h4>
      <p className='header-description' >{props.headerDes}</p>
    </div>
  )
}

export default Header
