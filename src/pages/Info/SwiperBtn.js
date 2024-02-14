import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import './infoStyles.css'
import "swiper/css";
import "swiper/css/pagination";
import { handleNextSlideClicked, handlePreviousSlideClicked } from "../Signup/Functions";

const SuggestionSwiperBtn = () => {
  const swiper = useSwiper();
  const [Clicked,setClicked] = useState(0)
  return (
    <div className="suggestion_swiper_btn">
      <MdChevronLeft
        className="suggestion_bg_styles"
        // color={"#0000008F"}
        color={Clicked === 0? "#00000026" : "#0000006F"}
        style={{backgroundColor:Clicked === 0? "#00000026" : "#0000003F"}}
        onClick={() => {swiper.slidePrev();handlePreviousSlideClicked(Clicked,setClicked,6)}}
      />
    {/* } */}
      <MdChevronRight
        className="suggestion_bg_styles"
        color={Clicked === 3? "#00000026" : "#0000006F"}
        style={{backgroundColor:Clicked === 3? "#00000026" : "#0000003F"}}
        onClick={() => {swiper.slideNext() ;Clicked !==3 &&handleNextSlideClicked(Clicked,setClicked,6)}}

      />
    </div>
  );
};

export default SuggestionSwiperBtn;
