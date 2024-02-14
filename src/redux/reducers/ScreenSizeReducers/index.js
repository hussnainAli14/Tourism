const InitialState = {
    screenSize: "desktop",
  };
  
  export const ScreenSizeReducer = (state = InitialState, action) => {
    switch (action.type) {
      case "setScreenSize":
        return {
          screenSize: action.size,
        };
      default:
        return state;
    }
  };
  