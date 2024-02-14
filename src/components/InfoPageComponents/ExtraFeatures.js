import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import './styles.css'

const ExtraFeatures = (props) => {
  return (
    <div className='extra_features_container' >
        <p className='feature_name' >{props.text}</p>
        <IoChevronForwardSharp color='#0038FF' size={25}  />
    </div>
  )
}

export default ExtraFeatures
