import React from "react";
import "./subscriptionStyles.css";
const CardSecondPortion = (props) => {
  const details = [
    { name: props.vehicleCategories },
    { name: props.changeVehicle },
    { name: props.flexibility },
    { name: props.shareable },
  ];
  return (
    <div className="secondPortionCard">
      <div className="header">
        <div className="headerFirst">
          <p>Turismo {props.name}</p>
          <button className="moreBtn">{props.more}</button>
        </div>
        <p className="costSubText">{props.cost}</p>
      </div>

      <div className="innerPart">
        {details.map((property, index) => {
          return (
            <>
              <p className="deailsCategories" key={index}>
                {property.name}
              </p>
              <hr className="lineSeparator" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CardSecondPortion;
