import React from "react";
import "./textImageCard.css";
import { useSelector } from "react-redux";
const TextImageCard = (props) => {
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  return (
    <div className="textImageCard">
      <div>
        <p className="textImageCardMain">{props.vacation}</p>
        {screenSize !== "mobile" && (
          <p className="textImageCardSub">{props.suvEven + "       >"} </p>
        )}
      </div>
      <img src={props.image} alt="ContainerPic" />
    </div>
  );
};

export default TextImageCard;
