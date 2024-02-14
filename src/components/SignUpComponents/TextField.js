import React from "react";
import { handleChange } from "../../pages/Signup/Functions";

const TextField = (props) => {
  return (
    <input
      className={`signup-input ${
        props.className === "textField-Animation" ? "textField-Animation" : ""
      }`}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        handleChange(e.target.value, props.setValue);
      }}
    />
  );
};

export default TextField;
