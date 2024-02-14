export const handleChange = (value, setValue) => {
  setValue(value);
};

export const handleForwardStepNavigation = (dispatch, setStep, step) => {
  dispatch(setStep(step + 1));
  console.log("first function", step);
};
export const handleBackwardStepNavigation = (step, setStep) => {
  setStep(step - 1);
};

export const handleRadioChange = (event, setSelectedOption) => {
  setSelectedOption(event.target.value);
};

export const handleNextSlideClicked = (isClicked, setIsClicked, index) => {
  if (isClicked !== index || !(isClicked > index)) {
    setIsClicked(isClicked + 1);
  }
};
export const handlePreviousSlideClicked = (isClicked, setIsClicked, index) => {
  if (isClicked !== 0) {
    setIsClicked(isClicked - 1);
  }
};
