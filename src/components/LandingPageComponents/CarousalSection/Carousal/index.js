import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "./carousalStyles.css";
import CarousalBtn from "./CarousalBtn";
import ScrollAnimation from "../../../../animations/ScrollAnimation";
import { useEffect, useState } from "react";

const Carousal = (props) => {
  const variant = {
    hidden: { opacity: 0, x: -800 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="carousal">
      <ScrollAnimation variant={variant} duration={0.5}>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide for small screens
            },
            734: {
              slidesPerView: 1, // 2 slides for medium screens
            },
            1000: {
              slidesPerView: 1,
            },
            1201: {
              slidesPerView: 1.2, // 3 slides for large screens
            },
            1501: {
              slidesPerView: 1.5, // 3 slides for large screens
            },
            2000: {
              slidesPerView: 1.7, // 3 slides for large screens
            },
            2400: {
              slidesPerView: 2, // 3 slides for large screens
            },
          }}
          className="imgContainer"
          // onSwiper={handleSwiperInit}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Set autoplay options
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                key={index}
                src={image.name}
                alt={`Slider${index}`}
                className="carousalImage"
              />
              <p
                dangerouslySetInnerHTML={{ __html: image.text }}
                className="imageText"
              ></p>
            </SwiperSlide>
          ))}
          <CarousalBtn images={props.images} />
        </Swiper>
      </ScrollAnimation>
    </div>
  );
};

export default Carousal;
