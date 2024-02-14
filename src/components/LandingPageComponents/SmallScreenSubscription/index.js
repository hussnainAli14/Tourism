import React from 'react'
import CardImg1 from '../../../assets/cardImage1.png'
import CardImg2 from '../../../assets/cardImage2.png'
import './smallScreenSubscriptionStyles.css'
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination,A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import SwiperBtn from './CarousalBtn';
const SmallScreenSubscription = (props) => {
    const alldata = [
        {
            price:props.cost,
            img:CardImg1,
            details: [
                {name:props.vehicleCategories},
                {name:props.changeVehicle},
                {name:props.flexibility},
                {name:props.shareable}
        
            ]
        },
        {
            price:props.cost,
            img:CardImg2,
            details: [
                {name:props.vehicleCategories},
                {name:props.changeVehicle},
                {name:props.flexibility},
                {name:props.shareable}
        
            ]
        }
    ]
    const details = [
        {name:props.vehicleCategories},
        {name:props.changeVehicle},
        {name:props.flexibility},
        {name:props.shareable}

    ]
  return (
    <div className='screenVisibility smallSubscription ' >
         <Swiper
    // slidesPerView={3}
    modules={[Navigation,Pagination,A11y]}
    breakpoints={{
      320: {
        slidesPerView: 1.3, // 1 slide for small screens
      }
    }}
  >
    {alldata.map((item,index)=>{
        return (
            <SwiperSlide key={index}>
            <p className='mainHeading' >Turismo <span className='span' >Plus</span></p>
            <p className='smallMainPrice' >{item.price}</p>
            <img className='smallSubImg'  src={item.img} alt='CardImg' />
            <div className='innerPart'>
             { 
             item.details.map((property,index)=>{
             return(
              <>
               <p className='deailsCategoriesSmall' key={index}>{property.name}</p>
              <hr className='lineSeparatorSmall' />
              </>
             )
             })
            
              
              }
          </div>
          </SwiperSlide>
        )
    })}
    <SwiperBtn/>
    </Swiper>
    </div>
  )
}

export default SmallScreenSubscription
