import React from "react";
import "./carousalSectionStyles.css";
import Carousal from "./Carousal";
import Image1 from "../../../assets/Group 225.png";
import Image2 from "../../../assets/slider2.jpg";
import Image3 from "../../../assets/image3.jpg";

const CarousalSection = (props) => {
  const images = [
    { name: Image1, text: "" },
    { name: Image2, text: props.slider1ImageCaption },
    { name: Image3, text: props.slider2ImageCaption },
  ];
  return (
    <div className="content">
      <p className="mainTextCarousal">{props.mainText}</p>
      <p className="subTextCarousal">{props.subText}</p>
      <Carousal images={images} />
    </div>
  );
};

export default CarousalSection;
