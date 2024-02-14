import React from "react";
import "./subscriptionStyles.css";
const SwitchBtn = (props) => {
  return (
    <div className="switchBtn">
      <p
        onClick={() => {
          props.setSelectedBtn("Plus");
          // props.onPackageChange(1);
        }}
        className={`text ${props.selectedBtn === "Plus" ? "activeBtn" : ""}`}
      >
        {props.selectedBtn === "Plus" ? "PLUS" : "+"}
      </p>
      <p
        onClick={() => {
          props.setSelectedBtn("1");

          // props.onPackageChange(0);
        }}
        className={`text2 ${props.selectedBtn === "1" ? "activeBtn" : ""}`}
      >
        {props.selectedBtn === "1" ? "One" : "1"}
      </p>
    </div>
  );
};

export default SwitchBtn;
