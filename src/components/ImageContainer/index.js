import React from "react";
import "./imageContainerStyle.css";
const ImageContainer = (props) => {
  return (
   props.isVisible &&  <div className={props.className}  >
      <p className="imageMain"> {props.mainText} </p>
      <p className="imageSub"> {props.subText + "    >"} </p>
    </div>
  );
};

export default ImageContainer;
