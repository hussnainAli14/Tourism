import React from 'react'
import { useSwiper } from 'swiper/react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './smallScreenSubscriptionStyles.css'
const SwiperBtn = () => {
    const swiper = useSwiper();
  return (
    <div className='swiperBtn' >
       <MdChevronLeft className='circle'  onClick={() => swiper.slidePrev()}/>
       <MdChevronRight className='circle'  onClick={() => swiper.slideNext()}/>

    </div>
  )
}

export default SwiperBtn
