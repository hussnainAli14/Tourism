import React from "react";
import { MdNavigateNext } from "react-icons/md";
import "./inclusionStyles.css";
import InclusionCards from "./InclusionCards";
import { IoCubeOutline } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import { GiFlatTire } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa6";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/pagination";
import SwiperBtn from "./SwiperBtn";
import ScrollAnimation from "../../../animations/ScrollAnimation";
import cube from "../../../assets/cube.png";
import tire from "../../../assets/tire.png";
import spanner from "../../../assets/spanner.png";
import call from "../../../assets/call.png";

const Inclusion = (props) => {
  const details = [
    {
      icon: cube,
      heading: props.assurance,
      description: props.assuranceDes,
    },
    {
      icon: spanner,
      heading: props.interview,
      description: props.interviewDes,
    },
    {
      icon: tire,
      heading: props.tires,
      description: props.tiresDes,
    },
    {
      icon: call,
      heading: props.assistance,
      description: props.assistanceDes,
    },
  ];
  const variant = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <ScrollAnimation variant={variant} duration={1}>
      <div className="inclusionMain">
        <div className="inclusionHeader">
          <p className="inclusionHeading"> {props.inclusion} </p>
          <p className="subscribeText">
            {" "}
            {props.subscribeTurismo}
            <MdNavigateNext size={35} />
          </p>
        </div>
        <div className="cardsSection">
          <Swiper
            slidesPerView={3}
            modules={[Navigation, Pagination, A11y]}
            breakpoints={{
              120: {
                slidesPerView: 1, // 1 slide for small screens
              },
              320: {
                slidesPerView: 1, // 1 slide for small screens
              },
              610: {
                slidesPerView: 2.2, // 2 slides for medium screens
              },
              768: {
                slidesPerView: 2.2, // 2 slides for medium screens
              },
              1024: {
                slidesPerView: 3.3, // 3 slides for large screens
              },
            }}
          >
            {details.map((item, index) => (
              <SwiperSlide key={index} id="res">
                <InclusionCards
                  icon={item.icon}
                  heading={item.heading}
                  des={item.description}
                />
              </SwiperSlide>
            ))}
            <SwiperBtn />
          </Swiper>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Inclusion;
