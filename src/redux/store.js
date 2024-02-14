import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./index";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: rootReducer
});

export { store };
