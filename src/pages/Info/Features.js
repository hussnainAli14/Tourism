import React, { useEffect, useState } from "react";
import CarFeatures from "../../components/InfoPageComponents/CarFeatures";
import ExtraFeatures from "../../components/InfoPageComponents/ExtraFeatures";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import "./infoStyles.css";
import DetailsBtn from "../../components/InfoPageComponents/DetailsBtn";
const Features = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "infoPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);

  const featureDetails = [
    screenText.comfort,
    screenText.exterior,
    screenText.interior,
  ];

  return (
    <div className="features_container">
      <CarFeatures
        title={screenText.carName}
        description={screenText.carDetails}
        description2={screenText.carDetails2}
      />
      <div className="features_mobile_container">
        <p className="features_mobile_amount">
          € 2180 <span className="bread_crumb">/mois</span>
        </p>
        <DetailsBtn btnText={screenText.availablity} />
      </div>

      <div className="features_second_portion">
        {featureDetails.map((item, index) => (
          <ExtraFeatures text={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
