import React from 'react'
import './styles.css'
const CarFeatures = (props) => {
  return (
    <div className='car_features_container' >
      <p className='car_title' >{props.title}</p>
      <p className='car_details' >{props.description}</p>
      <p className='car_details' id='carMargin' >{props.description2}</p>

    </div>
  )
}

export default CarFeatures
