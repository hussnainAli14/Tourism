import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./inclusionStyles.css";
import {
  handleNextSlideClicked,
  handlePreviousSlideClicked,
} from "../../../pages/Signup/Functions";
const SwiperBtn = () => {
  const swiper = useSwiper();
  const [Clicked, setClicked] = useState(0);

  return (
    <div className="swiperBtn">
      <MdChevronLeft
        className="bgStyles"
        color={Clicked === 0 ? "#00000026" : "#0000006F"}
        style={{ backgroundColor: Clicked === 0 ? "#00000026" : "#0000003F" }}
        onClick={() => {
          swiper.slidePrev();
          handlePreviousSlideClicked(Clicked, setClicked, 6);
        }}
      />
      <MdChevronRight
        className="bgStyles"
        color={Clicked === 1 ? "#00000026" : "#0000006F"}
        style={{ backgroundColor: Clicked === 1 ? "#00000026" : "#0000003F" }}
        onClick={() => {
          swiper.slideNext();
          Clicked !== 1 && handleNextSlideClicked(Clicked, setClicked, 6);
        }}
      />
    </div>
  );
};

export default SwiperBtn;
