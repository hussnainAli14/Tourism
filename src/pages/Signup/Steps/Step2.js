import React, { useEffect, useState } from "react";
import Header from "../../../components/SignUpComponents/Header";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import TextField from "../../../components/SignUpComponents/TextField";
import "./stepsStyles.css";
const Step2 = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "signupPage");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div>
      <Header title={screenText.thanks} headerDes={screenText.enterName} />
      <div className="textField-container">
        <TextField
          className="textField-Animation"
          type="text"
          placeholder={screenText.name}
          value={name}
          setValue={setName}
        />
        <TextField
          type="text"
          placeholder={screenText.firstName}
          value={firstName}
          setValue={setFirstName}
        />
      </div>
    </div>
  );
};

export default Step2;
