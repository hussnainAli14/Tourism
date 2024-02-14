import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import "./carousalStyles.css";
const CarousalBtn = (props) => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const swiper = useSwiper();
  const handleRadioChange = (index) => {
    setSelectedSlide(index);

    swiper.slideTo(index);
  };
  useEffect(() => {
    const handleSlideChange = () => {
      setSelectedSlide(swiper.activeIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup event listener on component unmount
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);
  return (
    <ul className="dots">
      {props.images.map((_, index) => (
        <li
          className={selectedSlide === index ? "active" : ""}
          onClick={() => {
            handleRadioChange(index);
          }}
        ></li>
        // <input
        //   key={index}
        //   type="radio"
        //   value={index}
        //   checked={selectedSlide === index}
        //   onChange={() => handleRadioChange(index)}
        //   className={selectedSlide === index && 'selectedBtn'}
        // />
      ))}
    </ul>
  );
};

export default CarousalBtn;
