const InitialState = {
    step: 1,
  };
  
  export const StepsReducer = (state = InitialState, action) => {
    switch (action.type) {
      case "setStep":
        return {
          step: action.step,
        };
      default:
        return state;
    }
  };