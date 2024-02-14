import React from "react";
import Cars from "../../../assets/fleetCars.png";
import "./fleetHeroStyles.css";
import { MdNavigateNext } from "react-icons/md";
import RevealAnimation from "../../../animations/RevealAnimation";
const FleetHeroSection = (props) => {
  const animationProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 2 },
  };

  return (
    <RevealAnimation {...animationProps}>
      <div className="newClassFleet">
        <div className="fleetHeroMain">
          <p className="firstPortionMainText">
            {props.mainText}
            <div className="circularBorder outer_shadow">
              <MdNavigateNext
                color="black"
                size={20}
                className="navigate_icon"
              />
              <p className="fleet_btn_text">Start Tour</p>
            </div>
          </p>
          <div className="fleet_mobile_image_container">
            {/* <img className="fleet_mobile_image" src={Cars} alt="fleetImage" />   */}
          </div>
        </div>
      </div>
    </RevealAnimation>
  );
};

export default FleetHeroSection;
