import React from "react";
import "./carCardStyles.css";
import { useSelector } from "react-redux";
const CarCard = (props) => {
  const monthUnit =
    props.langName === "en" ? " (excl. vat)/month" : " (htva)/mois";
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  return (
    <div className="carCard">
      <img src={props.CarImg} alt="CarImage" className="image" />
      <div className="cardDetails">
        <div class="row">
          <div className="col">
            <div className="row">
              <p className="carName">{props.carName}</p>
              {screenSize === "mobile" && props.animationEffect !== false && (
                <>
                  <p className="mobile_text">One OF-1</p>
                </>
              )}
            </div>

            <p className="model">{props.model}</p>
          </div>
          <div className="row">
            {props.animationEffect === undefined && screenSize !== "mobile" && (
              <>
                <div className="border"> </div>
                <p className="customText" id="text">
                  One OF-1
                </p>
              </>
            )}
          </div>
        </div>
        <p className="version">{props.version}</p>
        <p className="price">
          {props.price}
          {monthUnit}
        </p>
      </div>
    </div>
  );
};

export default CarCard;
