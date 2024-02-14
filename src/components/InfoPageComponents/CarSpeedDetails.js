import React from "react";
import "./styles.css";
const CarSpeedDetails = () => {
  return (
    <div className="speed_details_container">
      <div className="section">
        <p className="speed-text">Speed</p>
        <p className="speed-value">
          250 <span className="speed-relative-time"> kmh </span>{" "}
        </p>
      </div>
      <div className="section">
        <p className="speed-text">0-100</p>
        <p className="speed-value">
          4,8 <span className="speed-relative-time"> sec </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default CarSpeedDetails;
