import React from "react";

const InclusionCards = (props) => {
  return (
    <div className="inclusionCards">
      <img src={props.icon} alt="img loading" />
      <p className="cardHeader">{props.heading}</p>
      <p className="cardDes">{props.des}</p>
    </div>
  );
};

export default InclusionCards;
