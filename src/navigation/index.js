import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../routes";
import LandingPage from "../pages/landingPage";
import Fleet from "../pages/fleet";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import SignUp from "../pages/Signup";
import Info from "../pages/Info";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<LandingPage />} />
          <Route path={routes.landingPage} element={<LandingPage />} />
          <Route path={routes.fleet} element={<Fleet />} />
          <Route path={routes.signup} element={<SignUp />} />
          <Route path={routes.info} element={<Info />} />


        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
