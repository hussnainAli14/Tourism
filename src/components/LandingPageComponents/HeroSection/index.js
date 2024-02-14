import React from "react";
import heroImg from "../../../assets/heroPageImage.png";
import heroSmall from "../../../assets/heroSmall.png";
import "./heroStyles.css";
import HeroBtn from "./heroBtn";
import { FaAngleDown } from "react-icons/fa";
import RevealAnimation from "../../../animations/RevealAnimation";
import ScrollAnimation from "../../../animations/ScrollAnimation";
import { animationProps, scrollVariants } from "./animationVariants";
const Hero = (props) => {
  return (
    <div className="container">
      <div className="hero">
        <div className="bgGradient">
          <RevealAnimation {...animationProps}>
            <p className="mainText">{props.heroMainText}</p>
            <p className="mainText" id="Era">
              {props.newEra}
            </p>
            <img src={heroImg} id="large" alt="hero-img" />
          </RevealAnimation>
          <ScrollAnimation variant={scrollVariants}>
            <HeroBtn startTour={props.startTour} />
            <p className="learnMore">
              {props.learnMore}
              <FaAngleDown className="btn" />
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
