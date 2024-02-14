import React from "react";
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import Iphone from "../../../assets/Iphone.png";
import ScrollAnimation from "../../../animations/ScrollAnimation";
import "./MobileSectionStyles.css";
import { useSelector } from "react-redux";
const MobileSectin = (props) => {
  const variant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const screenSize = useSelector((state)=>state.screenSize.screenSize)
  return (
    <ScrollAnimation variant={variant} duration={1}>
      <div className="mobileMain">
        <div className="secondSection secondSectionres">
          <img src={Iphone} alt="loading" />
        </div>
        <div className="firstSection">
          <p className="firstSectionMainText"> {props.mainText} </p>
          <p className="firstSectionSubText">
            {props.subText}  {screenSize === "desktop" || screenSize === "tablet" ? (
              <FaChevronRight className="favIcon" size={10} />
            ) : (
              <FaAngleDown className="favIcon" size={20} />
            )}{" "}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default MobileSectin;
