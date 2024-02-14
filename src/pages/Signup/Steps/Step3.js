import React, { useEffect, useState } from "react";
import Header from "../../../components/SignUpComponents/Header";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../../languageSupport/useLangTranslation";
import TextField from "../../../components/SignUpComponents/TextField";
import './stepsStyles.css'
const Step3 = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "signupPage");
  const [email, setEmail] = useState("");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  return (
    <div>
      <Header title={screenText.welcomePerson} headerDes={screenText.enterEmail} />
      <div style={{marginBottom:'95px'}}>
      <TextField
        type="email"
        placeholder={screenText.email}
        value={email}
        setValue={setEmail}
      />
      </div>
      

    </div>
  );
}

export default Step3
