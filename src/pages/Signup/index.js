import React, { useEffect, useState } from "react";
import SignupLogo from "../../assets/AccountPageLogo.jpg";
import "./SignupStyles.css";
import { RxCross2 } from "react-icons/rx";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../redux/actions/stepsAction";
import Step6 from "./Steps/Step6";
import { IoChevronBack } from "react-icons/io5";
import ButtonFilled from "../../components/SignUpComponents/ButtonFilled";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import ButtonTransparent from "../../components/SignUpComponents/ButtonTransparent";
const SignUp = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step.step);
  const [selectedOption, setSelectedOption] = useState("option1");
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const [isBackward, setIsBackward] = useState(false);

  const text = useLangTranslation(language, "signupPage");

  useEffect(() => {
    setScreenText(text);
  }, [language, text]);

  const FilledBtnText =
    step === 1
      ? selectedOption === "option1"
        ? screenText.following
        : selectedOption === "option2" && screenText.createAccount
      : step === 2 || step === 3 || step === 4 || step === 5
      ? screenText.confirm
      : screenText.yes;
  return (
    <div className="signup_main">
      <div className="signup-mobile-icon">
        <IoChevronBack
          color="#ffffff33"
          size={25}
          onClick={() => {
            step > 1 ? dispatch(setStep(step - 1)) : setSelectedOption('option1');
          }}
        />
      </div>
      <div className="image_container">
        <img src={SignupLogo} alt="Logo" className="signup_main_image" />
      </div>
      <div className="signup_main_container">
        <div
          className="black_border"
          style={{ width: selectedOption === "option1" ? "300px" : "400px" }}
        ></div>
        <div className="grey_border"></div>
        <RxCross2
          color="white"
          size={18}
          className="signup-icon"
          onClick={() => {
            if (step === 6) {
              setIsBackward(true);
            } else {
              setIsBackward(false);
            }

            step !== 1  ? dispatch(setStep(step - 1)) : setSelectedOption('option1');
          }}
        />
        {step === 1 ? (
          <Step1
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ) : step === 2 ? (
          <Step2 />
        ) : step === 3 ? (
          <Step3 />
        ) : step === 4 ? (
          <Step4 />
        ) : step === 5 ? (
          <Step5 />
        ) : (
          step === 6 && <Step6 />
        )}
        <div className="small-btn-container">
          <ButtonFilled
            btnText={FilledBtnText}
            handleClick={() => {
              step === 1 && selectedOption === "option1"
                ? setSelectedOption("option2")
                : step !==6 && dispatch(setStep(step + 1));
            }}
            width={"100%"}
            animation={
              (step === 6 && true) ||
              (step === 2 && "moveButton") ||
              (isBackward && "reverseMoveButton")
            }
          />
          {step === 6 && (
            <ButtonFilled
              btnText={screenText.no}
              handleClick={() => {}}
              width={"45%"}
            />
          )}
        </div>
        {step === 1 && selectedOption === "option2" ? (
          <ButtonTransparent btnText={screenText.cancel} />
        ) : (
          step === 6 && <ButtonTransparent btnText={screenText.following} />
        )}
      </div>
    </div>
  );
};

export default SignUp;
