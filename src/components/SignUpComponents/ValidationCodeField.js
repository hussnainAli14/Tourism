import React from 'react'
import './signupComponentsStyles.css'
import { handleChange } from '../../pages/Signup/Functions'
const ValidationCodeField = (props) => {
  return (
    <div className='validation-div' id={props.value !== '' && 'validation-div-gradient-border'} >
    <input className='validation' type='text' value={props.value} onChange={(e)=>{handleChange(e.target.value,props.setValue)}} />
    </div>
  )
}

export default ValidationCodeField
