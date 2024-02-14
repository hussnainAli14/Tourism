const InitialState = {
  lang: "fr",
  allowRtl: true,
};

export const languageReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "setLang":
      return {
        lang: action.lang,
        allowRtl: action.allowRtl,
      };
    default:
      return state;
  }
};
