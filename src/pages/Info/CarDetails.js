import React, { useEffect, useState } from "react";
import SelectedCarInfo from "../../components/InfoPageComponents/SelectedCarInfo";
import "./infoStyles.css";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import rounded1 from "../../assets/rounded1.jpg";
import rounded2 from "../../assets/rounded2.png";
// import camera from '../../assets/camera.png'
import meter from "../../assets/meter.png";
import camera from "../../assets/camera.png";
import cube from "../../assets/cubeIcon.png";
const CarDetails = (props) => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "infoPage");
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  const [screenDimensions, setScreenDimension] = useState(screenSize);

  const [selected, setSelected] = useState(0);
  const [secondPortionImageSelected, setSecondPortionImageSelected] =
    useState(0);
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  useEffect(() => {
    setScreenDimension(screenSize);
  }, [screenSize]);

  const carDetails = [
    {
      title: screenText.selectedCar,
      subText: "",
      btnText: screenText.moreInfo,
      sectionImages: [],
      secondImages: [],
    },
    {
      title: screenText.configuration,
      sectionImages: [
        {
          image: rounded1,
        },
        {
          image: rounded2,
        },
      ],
      secondImages: [],
      btnText: "",
      subText: "",
    },
    {
      title: screenText.environment,
      btnText: "",
      secondImages: [
        {
          image: camera,
        },
        {
          image: meter,
        },
        {
          image: cube,
        },
      ],
      sectionImages: [],
      subText: "",
    },
    {
      title: screenText.price,
      subText: "2180€",
      btnText: screenText.availablity,
      sectionImages: [],
      secondImages: [],
    },
  ];

  const tabletcarDetails = [
    {
      title: screenText.configuration,
      sectionImages: [
        {
          image: rounded1,
        },
        {
          image: rounded2,
        },
      ],
      secondImages: [],
      btnText: "",
      subText: "",
    },
    {
      title: screenText.environment,
      btnText: "",
      secondImages: [
        {
          image: camera,
        },
        {
          image: meter,
        },
        {
          image: meter,
        },
      ],
      sectionImages: [],
      subText: "",
    },
    {
      title: screenText.price,
      subText: "2180€",
      btnText: screenText.availablity,
      sectionImages: [],
      secondImages: [],
    },
    {
      title: screenText.selectedCar,
      subText: "",
      btnText: screenText.moreInfo,
      sectionImages: [],
      secondImages: [],
    },
  ];

  const mobileDetails = [
    {
      title: screenText.configuration,
      sectionImages: [
        {
          image: rounded1,
        },
        {
          image: rounded2,
        },
      ],
      secondImages: [],
      btnText: "",
      subText: "",
    },
    {
      title: screenText.environment,
      btnText: "",
      secondImages: [
        {
          image: camera,
        },
        {
          image: meter,
        },
        {
          image: meter,
        },
      ],
      sectionImages: [],
      subText: "",
    },
  ];

  let arrayToMap = [];
  if (screenDimensions === "desktop") {
    arrayToMap = carDetails;
  } else if (screenDimensions === "tablet") {
    arrayToMap = tabletcarDetails;
  } else {
    arrayToMap = mobileDetails;
    props.setShowMoreInfo(true);
  }
  return (
    <div className="info_car_details">
      {arrayToMap.map((detail, index) => (
        <SelectedCarInfo
          text={detail.title}
          subText={detail.subText}
          sectionImages={detail.sectionImages}
          secondImages={detail.secondImages}
          btnText={detail.btnText}
          selected={selected}
          setSelected={setSelected}
          secondPortionImageSelected={secondPortionImageSelected}
          setSecondPortionImageSelected={setSecondPortionImageSelected}
          index={index}
          setShowMoreInfo={props.setShowMoreInfo}
          showMoreInfo={props.showMoreInfo}
        />
      ))}
    </div>
  );
};

export default CarDetails;
