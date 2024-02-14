import React, { useEffect, useState } from "react";
import Header from "../../../components/SignUpComponents/Header";
import {useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import TextField from "../../../components/SignUpComponents/TextField";
import './stepsStyles.css'
const Step4 = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "signupPage");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div >
      <Header title={screenText.welcomePerson} headerDes={screenText.enterPassword} />
      <div className="textField-container" >
      <TextField
        type="text"
        placeholder={screenText.password}
        value={password}
        setValue={setPassword}
      />
      <TextField
        type="text"
        placeholder={screenText.confirmPassword}
        value={confirmPassword}
        setValue={setConfirmPassword}
      />
      </div>
    </div>
  )
}

export default Step4
