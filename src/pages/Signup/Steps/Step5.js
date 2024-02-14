import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import "./stepsStyles.css";
import Description from "../../../components/SignUpComponents/Description";
import ValidationCodeField from "../../../components/SignUpComponents/ValidationCodeField";

const Step5 = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const [val1,setVal1] = useState('')
  const [val2,setVal2] = useState('')
  const [val3,setVal3] = useState('')
  const [val4,setVal4] = useState('')

  const text = useLangTranslation(language, "signupPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div  >
      <Description text={screenText.enterValidationCode} />
      <div className="validation_field_container" > 
      <ValidationCodeField value={val1} setValue={setVal1} />
      <ValidationCodeField value={val2} setValue={setVal2} />
      <ValidationCodeField value={val3} setValue={setVal3} />
      <ValidationCodeField value={val4} setValue={setVal4} />

      </div>
    </div>
  );
};

export default Step5;
