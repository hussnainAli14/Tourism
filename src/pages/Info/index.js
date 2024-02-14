import React, { useState } from "react";
import LoggedInNavbar from "../../components/Navbar/LoggedInNavbar";
import "./infoStyles.css";
import InfoImageContainer from "../../components/InfoPageComponents/InfoImageContainer";
import CarDetails from "./CarDetails";
import RadialDivider from "../../components/InfoPageComponents/RadialDivider";
import Features from "./Features";
import Characterstics from "./Characterstics";
import Suggestions from "./Suggestions";
import LoggedInNavbarSmall from "../../components/Navbar/LoggedInNavbarSmall";
const Info = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <div>
      <LoggedInNavbar shouldActive={true} />
      <LoggedInNavbarSmall shouldActive={true} />
      <div className="info_main">
        <InfoImageContainer />
        <CarDetails
          setShowMoreInfo={setShowMoreInfo}
          showMoreInfo={showMoreInfo}
        />
        <RadialDivider />
        {showMoreInfo && (
          <div className={`infoDetailsDropdown ${showMoreInfo ? "show" : ""}`}>
            <Features />
            <Characterstics />
          </div>
        )}
      </div>
      {showMoreInfo && <Suggestions />}
    </div>
  );
};

export default Info;
