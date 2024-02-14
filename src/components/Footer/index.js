import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import LogoWhite from "../../assets/logoWhite.png";
import "./footerStyles.css";
const Footer = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "footer");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div className="footer">
      <img src={LogoWhite} alt="logo" />
      <p className="footerMain">{screenText.history}</p>
      <p className="footerSub">{screenText.setup}</p>
    </div>
  );
};

export default Footer;
