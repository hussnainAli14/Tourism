import { combineReducers } from "redux";
import { languageReducer } from "./reducers/languageReducers";
import { StepsReducer } from "./reducers/stepsReducers";
import { ScreenSizeReducer } from "./reducers/ScreenSizeReducers";
const rootReducer = combineReducers({
    language:languageReducer,
    step:StepsReducer,
    screenSize:ScreenSizeReducer
})

export default rootReducer