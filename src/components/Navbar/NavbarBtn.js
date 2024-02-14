import React from "react";
import "./NavbarStyles.css";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
const NavbarBtn = (props) => {
  const navigate = useNavigate();

  return (
    <button
      className="navBtn"
      onClick={() => {
        navigate(routes.signup);
      }}
    >
      {props.loginBtnText}
    </button>
  );
};

export default NavbarBtn;
