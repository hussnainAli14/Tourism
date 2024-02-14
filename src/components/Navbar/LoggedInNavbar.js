import React, { useEffect, useState } from "react";
import LOGO from "../../assets/logoWhite.png";
import { setScreenSize } from "../../redux/actions/screenSizeAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

const LoggedInNavbar = (props) => {
  const dispatch = useDispatch();
  const [navbarBgColor, setNavbarBgColor] = useState(false);
  const navigation = useNavigate();
  const screenSize = useSelector((state) => state.screenSize.screenSize);

  const handleScreenSize = () => {
    if (window.innerWidth < 1200 && window.innerWidth >= 734) {
      dispatch(setScreenSize("tablet"));
    } else if (window.innerWidth < 734) {
      dispatch(setScreenSize("mobile"));
    } else if (window.innerWidth >= 1200) {
      dispatch(setScreenSize("desktop"));
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [window.innerWidth, screenSize]);

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
    <nav
      className={
        props.shouldActive
          ? "loggedIn-nav active"
          : navbarBgColor
          ? "loggedIn-nav active"
          : "loggedIn-nav"
      }
    >
      <div className="loggedIn-nav-img">
        <img src={LOGO} alt="appLogo" />
      </div>
      <ul>
        <li
          onClick={() => {
            navigation(routes.home);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigation(routes.fleet);
          }}
        >
          Flotte
        </li>
        <li>Contact</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
};
export default LoggedInNavbar;
