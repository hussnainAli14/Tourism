const SET_LANG = "setLang";

export const setLanguage = (lang, allowRtl) => {
  return {
    type: SET_LANG,
    lang,
    allowRtl,
  };
};
