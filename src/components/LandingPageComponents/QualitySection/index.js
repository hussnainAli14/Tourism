import React from "react";
import "./qualitySectionStyles.css";
import Cars from "../../../assets/cars-section4.png";
import mobileCars from "../../../assets/carsMobile.png";
import { FaAngleDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import ScrollAnimation from "../../../animations/ScrollAnimation";
import { useSelector } from "react-redux";
const QualitySection = (props) => {
  const variant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  return (
    <ScrollAnimation variant={variant} duration={1.5}>
      <div className="qualityMain">
        <div className="firstSection">
          <p className="firstSectionMainText"> {props.mainText} </p>
          <p className="firstSectionSubText">
            {" "}
            {props.subText}
            {screenSize === "desktop" ? (
              <FaChevronRight className="favIcon" size={10} />
            ) : (
              <FaAngleDown className="favIcon" size={20} />
            )}{" "}
          </p>
        </div>
        <div className="secondSection">
          {screenSize === "desktop" ? (
            <img src={Cars} alt="loading" />
          ) : (
            <img src={mobileCars} alt="loading" />
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default QualitySection;
