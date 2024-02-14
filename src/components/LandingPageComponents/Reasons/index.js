import React from "react";
import "./reasonSectionStyle.css";
import ReasonCard from "./ReasonCard.js";
import car from "../../../assets/Picto.png";
import conductor from "../../../assets/Person.png";
import coin from "../../../assets/reasonCoin.png";

import ScrollAnimation from "../../../animations/ScrollAnimation.js";

const ReasonSection = (props) => {
  const details = [
    {
      icon: car,
      heading: props.wholeFleet,
      des: props.wholeFleetDes,
    },
    {
      icon: conductor,
      heading: props.drivers,
      des: props.driversDes,
    },
    {
      icon: coin,
      heading: props.caution,
      des: props.cautionDes,
    },
  ];
  const variant = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className="reasonMain">
        <ScrollAnimation variant={variant} duration={1}>
          <p className="reason"> {props.reasons} </p>
          <div className="cardContainer">
            {details.map((item, index) => {
              return (
                <ReasonCard
                  icon={item.icon}
                  heading={item.heading}
                  des={item.des}
                  key={index}
                />
              );
            })}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default ReasonSection;
