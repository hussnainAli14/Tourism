import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./smallNavStyles.css";
import { useDispatch, useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import logo from '../../assets/logoWhite.png'
import { setScreenSize } from "../../redux/actions/screenSizeAction";
const LoggedInNavbarSmall = (props) => {
  const [screenText, setScreenText] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);
  const language = useSelector((state) => state.language.lang);
  const text = useLangTranslation(language, "navBar");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  const dispatch = useDispatch()
  const [navbarBgColor, setNavbarBgColor] = useState(false);

  const screenSize = useSelector((state)=>state.screenSize.screenSize)
    
  const handleScreenSize =() => {
    if (window.innerWidth < 1200 && window.innerWidth >= 734) {
      dispatch(setScreenSize("tablet"));
    } else if (window.innerWidth < 734) {
      dispatch(setScreenSize("mobile"));

    } else if (window.innerWidth >= 1200) {
      dispatch(setScreenSize("desktop"));

    }
  };
  
  useEffect(() => {
   window.addEventListener('resize',handleScreenSize)

   return ()=>{
    window.removeEventListener('resize',handleScreenSize)
   }
  }, [window.innerWidth,screenSize]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 25;

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
  return (
    <div className={props.shouldActive?
      "loggedIn_navbar_small active" :navbarBgColor
      ?"loggedIn_navbar_small active" :"loggedIn-nav" }>
        <div>
        <img src={logo} alt="logo" />
        </div>
      <RxHamburgerMenu color="black"  onClick={() => setMenuVisible(!menuVisible)} />
    </div>
  );
};

export default LoggedInNavbarSmall;
