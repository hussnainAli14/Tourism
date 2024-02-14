import React from "react";
import "./reasonSectionStyle.css";

const ReasonCard = (props) => {
  return (
    <div className="reasonCard">
      <img src={props.icon} alt="ImageLoading" className="reasonImg" />
      <p className="reasonheading"> {props.heading} </p>
      <p className="reasonDes"> {props.des} </p>
    </div>
  );
};

export default ReasonCard;
