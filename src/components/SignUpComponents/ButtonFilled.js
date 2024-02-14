import React from "react";
import "./signupComponentsStyles.css";
import { useSelector } from "react-redux";
// import { handleForwardStepNavigation } from "../../pages/Signup/Functions";
// import { useDispatch, useSelector } from "react-redux";
// import { setStep } from "../../redux/actions/stepsAction";
const ButtonFilled = (props) => {
  // const dispatch = useDispatch;
  const step = useSelector((state) => state.step.step);
  return (
    <button
      className={`signup-btn-filled ${
        props.animation && "btn_width_animation"
      } ${props.animation === "moveButton" && "move_button_animation"} ${
        props.animation === "reverseMoveButton" && "reverseMoveButton"
      }`}
      style={{ width: props.width ? props.width : "100%" }}
      onClick={() => props.handleClick()}
    >
      {props.btnText}
    </button>
  );
};

export default ButtonFilled;
