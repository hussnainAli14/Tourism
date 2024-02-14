import React from "react";
import "./styles.css";
const SuggestionCards = (props) => {
  const monthUnit =
    props.langName === "en" ? " (excl. vat)/month" : " (htva)/mois";
  return (
    <div className="suggestion_car_card">
      <img
        src={props.CarImg}
        alt="CarImage"
        className="suggestion_card_image"
      />
      <div className="suggestion_card_details">
        <p className="suggestion_card_name">{props.carName}</p>
        <p className="suggestion_card_model">{props.model}</p>
      </div>
      <p className="suggestion_card_version">{props.version}</p>
      <p className="suggestion_card_price">
        {props.price}
        {monthUnit}
      </p>
    </div>
  );
};

export default SuggestionCards;
