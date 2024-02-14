import React, { useEffect, useState } from "react";
import Description from "../../../components/SignUpComponents/Description";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import "./stepsStyles.css";

const Step6 = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "signupPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div>
      <Description text={screenText.accountCreatedFirst} />
      <div className="desc-margin">
        <Description text={screenText.accountCreatedSecond} />
      </div>
    </div>
  );
};

export default Step6;
