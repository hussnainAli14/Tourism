import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./smallNavStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { setLanguage } from "../../redux/actions/languageAction";
const NavbarSmall = () => {
  const [screenText, setScreenText] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);
  const [pageName, setPageName] = useState(screenText.home);
  const language = useSelector((state) => state.language.lang);
  const text = useLangTranslation(language, "navBar");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);

  const navigate = useNavigate();
  return (
    <div className="navbarSmall">
      <div className="leftPortion">
        <RxHamburgerMenu
          color="white"
          size={30}
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        />
        <p className="page">{pageName}</p>
      </div>
      <p className="navSmallBtn">{screenText.sub}</p>
      {menuVisible && (
        <div className="menu">
          <p
            onClick={() => {
              setMenuVisible(false);
              setPageName(screenText.home);
              navigate(routes.home);
            }}
          >
            {screenText.home}
          </p>
          <hr className="lineSeparator" />
          <p
            onClick={() => {
              setMenuVisible(false);
              setPageName(screenText.fleet);
              navigate(routes.fleet);
            }}
          >
            {screenText.fleet}
          </p>
        </div>
      )}
    </div>
  );
};

export default NavbarSmall;
