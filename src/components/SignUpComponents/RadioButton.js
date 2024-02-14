import React from "react";
import "./signupComponentsStyles.css";
const RadioButton = ({ name, value, handleChange, checked }) => {
  return (
    <input
      type="radio"
      className="radio-btn"
      name={name}
      value={value}
      onChange={handleChange}
      checked={checked}
    />
  );
};

export default RadioButton;
