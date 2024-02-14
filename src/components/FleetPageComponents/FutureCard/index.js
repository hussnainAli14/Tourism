import React from "react";
import "./futureCardStyles.css";
import ContainerImg from "../../../assets/hamrani-lyes-porsche-front 1.png";
import { useSelector } from "react-redux";
const FutureCard = (props) => {
  const screenSize = useSelector((state)=>state.screenSize.screenSize)
  return (
    <div className="futureCardMain">
      <div>
        <p className="futureMainText">{props.mainText}</p>
       { screenSize !=='mobile' && <p className="futureSubText">{props.subText + "  >"}</p>}
      </div>
      <img src={ContainerImg} alt="ImageLoading" />
    </div>
  );
};

export default FutureCard;
