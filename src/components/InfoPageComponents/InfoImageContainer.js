import React from 'react'
import mainImage from '../../assets/infoMainImage.jpg'
import './styles.css'
import CarSpeedDetails from './CarSpeedDetails'
const InfoImageContainer = () => {
  return (
    <>
      <div>
      <img src={mainImage} alt='MainImage' className='info_main_image' />
      </div>
      <CarSpeedDetails/>
    </>
  )
}

export default InfoImageContainer
