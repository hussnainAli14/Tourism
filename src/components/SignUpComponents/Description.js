import React from 'react'
import './signupComponentsStyles.css'
const Description = (props) => {
  return (
    <p className='description'>
      {props.text}
    </p>
  )
}

export default Description
