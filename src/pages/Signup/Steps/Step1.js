import React, { useEffect, useState } from "react";
import Description from "../../../components/SignUpComponents/Description";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import "./stepsStyles.css";
import RadioButton from "../../../components/SignUpComponents/RadioButton";
import { handleRadioChange } from "../Functions";
const Step1 = (props) => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "signupPage");

  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div className="step1">
      {props.selectedOption === "option1" && (
        <h4 className="header-title-step">{screenText.welcome}</h4>
      )}
      <div style={{ paddingTop: props.selectedOption === "option2" && "30px" }}>
        <Description
          text={
            props.selectedOption === "option1"
              ? screenText.assistantIntro
              : screenText.features
          }
        />
      </div>
      <div className="radio-btn-container">
        <RadioButton
          name="options"
          value="option1"
          checked={props.selectedOption === "option1"}
          handleChange={(e) => {
            handleRadioChange(e, props.setSelectedOption);
          }}
        />
        <RadioButton
          name="options"
          value="option2"
          checked={props.selectedOption === "option2"}
          handleChange={(e) => {
            handleRadioChange(e, props.setSelectedOption);
          }}
        />
      </div>
    </div>
  );
};

export default Step1;
