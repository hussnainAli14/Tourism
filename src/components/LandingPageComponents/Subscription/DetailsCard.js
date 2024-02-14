import React, { useEffect, useState } from "react";
import cardImage1 from "../../../assets/cardImage1.png";
import cardImage2 from "../../../assets/cardImage2.png";
import cardImage3 from "../../../assets/03 1.png";
import cardImage4 from "../../../assets/04 1.png";
import cardImage5 from "../../../assets/05 1.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardSecondPortion from "./CardSecondPortion";
import SwitchBtn from "./SwitchBtn";

const images = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];

const DetailsCard = (props) => {
  const onePackage = props.onePackage;
  const plusPackage = props.plusPackage;

  const [selectedPackage, setSelectedPackage] = useState(1);
  const [Package, setPackage] = useState(onePackage);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [selectedBtn, setSelectedBtn] = useState("Plus");

  useEffect(() => {
    if (selectedBtn == "1") {
      setPackage(onePackage);
      setSelectedIndex(0);
      console.log("1 package is setted", Package.cost);
    } else {
      setPackage(plusPackage);
      setSelectedIndex(0);
      console.log("PLUS package is setted", Package.cost);
    }
  }, [selectedBtn, props.more]);

  return (
    <div className="mainCardSection">
      <div className="detailsCard">
        <div className="ImageSection">
          <div className="first">
            {selectedIndex > 0 && (
              <IoIosArrowBack
                className="iconSvg"
                color="gray"
                size={50}
                onClick={() => {
                  setSelectedIndex((index) => index - 1);
                }}
              />
            )}
            <img src={images[selectedIndex]} alt={`CardImage`} />
            {selectedIndex < Package.carsInfo.length - 1 && (
              <IoIosArrowForward
                className="iconSvg"
                color="gray"
                size={50}
                onClick={() => {
                  setSelectedIndex((index) => index + 1);
                }}
              />
            )}
          </div>
          <div>
            <p className="cardPMain">{Package.carsInfo[selectedIndex].price}</p>
            <p className="cardPSub">
              {Package.carsInfo[selectedIndex].distance}
            </p>
          </div>
        </div>
        <div className="detailsSection">
          <CardSecondPortion
            name={Package.name}
            cost={Package.cost}
            vehicleCategories={Package.vehicleCategories}
            changeVehicle={Package.changeVehicle}
            flexibility={Package.flexibility}
            shareable={Package.shareable}
            more={props.more}
          />
        </div>
      </div>
      <SwitchBtn
        selectedPackage={selectedPackage}
        setSelectedBtn={setSelectedBtn}
        selectedBtn={selectedBtn}
      />
    </div>
  );
};

export default DetailsCard;
