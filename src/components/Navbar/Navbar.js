import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import LOGO from "../../assets/LOGO.png";
import logoWhite from "../../assets/logoWhite.png";
import { useDispatch, useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import NavbarBtn from "./NavbarBtn";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes/index";
import { setLanguage } from "../../redux/actions/languageAction";
import { setScreenSize } from "../../redux/actions/screenSizeAction";
const Navbar = (props) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const [navbarBgColor, setNavbarBgColor] = useState(false);
  const text = useLangTranslation(language, "navBar");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  const navigate = useNavigate();

  async function handleLanguageChange() {
    dispatch(setLanguage(language === "en" ? "fr" : "en", true));
  }

  const screenSize = useSelector((state)=>state.screenSize.screenSize)
const handleScreenSize = ()=>{
  if (window.innerWidth < 1200 && window.innerWidth >= 734){
    dispatch(setScreenSize('tablet'))
  }
  else if (window.innerWidth < 734){
    dispatch(setScreenSize('mobile'))

  }
  else if(window.innerWidth > 1200){
    dispatch(setScreenSize('desktop'))
  }
}
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 5;

      if (scrollPosition > scrollThreshold) {
        setNavbarBgColor(true);
      } else {
        setNavbarBgColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarBgColor]);


  useEffect(() => {
    window.addEventListener('resize',handleScreenSize)
 
    return ()=>{
     window.removeEventListener('resize',handleScreenSize)
    }
   }, [window.innerWidth,screenSize]);
  return (
    <div
      className={
        props.shouldActive
          ? "navbar active"
          : navbarBgColor
          ? "navbar active"
          : "navbar"
      }
    >
      <div>
        <img
          src={props.shouldActive ? LOGO : navbarBgColor ? LOGO : logoWhite}
          onClick={() => {
            navigate(routes.landingPage);
          }}
          alt="logo"
        />
      </div>
      <section className="innerSection">
        <p
          id="fleet"
          onClick={() => {
            navigate(routes.fleet);
          }}
        >
          {screenText.fleet}
        </p>
        <p id="fleet" onClick={handleLanguageChange}>
          {language === "en" ? screenText.fr : screenText.en}
        </p>

        <NavbarBtn loginBtnText={screenText.navBarBtnText} />
      </section>
    </div>
  );
};

export default Navbar;
