import React from "react";
import Heading from "../../Label";
import "./powerSectionStyles.css";
import CarCard from "../../CarCards";
import Image1 from "../../../assets/GT3RS.png";
import Image2 from "../../../assets/STO.png";
import Image3 from "../../../assets/GT3.png";
import Image03 from "../../../assets/PISTA.png";
import Image4 from "../../../assets/Porsche911.png";
import Image5 from "../../../assets/GT3 TOURING.png";
import Image05 from "../../../assets/RR VELAR.png";
import Image6 from "../../../assets/RR SPORT.png";
import Image7 from "../../../assets/RS6.png";
import Image8 from "../../../assets/lamborginiUrus.png";
import Image9 from "../../../assets/lamboS.png";
import Image09 from "../../../assets/600LT.png";
import Image11 from "../../../assets/RSQ3.png";
import Image12 from "../../../assets/CAYENNE.png";
import Image13 from "../../../assets/GT53.png";
import Image14 from "../../../assets/M3 CS.png";
import Image15 from "../../../assets/G4X4.png";
import Image16 from "../../../assets/RR VELAR.png";
import Image17 from "../../../assets/GT4.png";
import Image18 from "../../../assets/M3 Touring.png";
import Image19 from "../../../assets/G63.png";
import Image20 from "../../../assets/RR SPORT.png";
import Image21 from "../../../assets/ROMA.png";
import Image22 from "../../../assets/TECHNICA.png";
import Image23 from "../../../assets/VANTAGE.png";
import Image24 from "../../../assets/EVO SPIDER.png";
import Image25 from "../../../assets/Boxter.png";
import Image26 from "../../../assets/MACAN.png";
import Image27 from "../../../assets/BENTAYGA.png";
import Image28 from "../../../assets/RR LWB.png";
import Image29 from "../../../assets/RS6.png";
import Image30 from "../../../assets/CAYENNE.png";
import Image31 from "../../../assets/ROMA.png";

import containerPic from "../../../assets/HURACAN6.png";
import containerPic2 from "../../../assets/HURACAN 7.png";
import ImageContainer from "../../ImageContainer";
import TextContainer from "../../TextContainer";
import TextImageCard from "../TextImageCard";
import FutureCard from "../FutureCard";
import { useSelector } from "react-redux";

const PowerSection = (props) => {
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  const carDetails = [
    {
      carImage: Image1,
      carName: "Porsche",
      model: "911 GT3 RS",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image2,
      carName: "Lamborghini",
      model: "Hurracan STO",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image3,
      carName: "Porsche",
      model: "911 GT3",
      version: "Cat 04",
      price: props.price3,
    },
    screenSize !== "desktop"
      ? {
          carImage: Image03,
          carName: "Ferrari",
          model: "488 Pista",
          version: "Cat 05",
          price: props.price1,
        }
      : null,
  ].filter(Boolean);

  const carDetails2 = [
    {
      carImage: Image03,
      carName: "Ferrari",
      model: "488 Pista",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image4,
      carName: "Porsche",
      model: "911 CARRERA",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image5,
      carName: "Porsche",
      model: "911 GT3 TOURING ",
      version: "Cat 04",
      price: props.price3,
    },
  ];
  const carDetails2Mobile = [
    {
      carImage: Image4,
      carName: "Porsche",
      model: "911 CARRERA",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image5,
      carName: "Porsche",
      model: "911 GT3 Touring ",
      version: "Cat 04",
      price: props.price3,
    },
  ];
  const carDetails3 = [
    {
      carImage: Image27,
      carName: "Bently",
      model: "Bentayga",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    {
      carImage: Image28,
      carName: "Land-Rover",
      model: "Range Rover LWB",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
    {
      carImage: Image26,
      carName: "Porsche",
      model: "Macan",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
  ];

  const carDetails4 = [
    {
      carImage: Image8,
      carName: "Lamborghini",
      model: "Urus Performante",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image09,
      carName: "Mclaren",
      model: "600 LT",
      version: "Cat 04",
      price: props.price3,
    },
    {
      carImage: Image9,
      carName: "Lamborghini",
      model: "Urus S ",
      version: "Cat 05",
      price: props.price1,
      animationEffect: false,
    },
    {
      carImage: Image11,
      carName: "Audi",
      model: "RSQ3",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image29,
      carName: "Audi",
      model: "RS6",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image13,
      carName: "Mercedes",
      model: "AMG GT-53 ",
      version: "Cat 01",
      price: props.price2,
      animationEffect: false,
    },
  ];

  const carDetails5 = [
    {
      carImage: Image14,
      carName: "BMW",
      model: "M3 Competition",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image15,
      carName: "Mercedes",
      model: "G-63 4X4",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image16,
      carName: "Land-Rover",
      model: "Velar",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image17,
      carName: "Porsche",
      model: "718 GT4",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image18,
      carName: "BMW",
      model: "M3 Touring",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image19,
      carName: "Mercedes",
      model: "G-63 AMG",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
    {
      carImage: Image20,
      carName: "Land-Rover",
      model: "Range Rover Sport",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image21,
      carName: "Ferrai",
      model: "ROMA",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    {
      carImage: Image22,
      carName: "Lamborghini",
      model: "Huracan Technica",
      version: "Cat 05",
      price: props.price1,
    },
  ];

  const carDetails6 = [
    {
      carImage: Image25,
      carName: "Porsche",
      model: "718 Boxter",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image24,
      carName: "Lamborghini",
      model: "Huracan Evo Spider",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    {
      carImage: Image23,
      carName: "Asto Martin",
      model: "Vantage",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
  ];

  const mobileCarDetails = [
    {
      carImage: Image5,
      carName: "Porsche",
      model: "911 GT3 TOURING ",
      version: "Cat 04",
      price: props.price3,
    },
    {
      carImage: Image1,
      carName: "Porsche",
      model: "911 GT3 RS",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image2,
      carName: "Lamborghini",
      model: "Hurracan STO",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image17,
      carName: "Porsche",
      model: "718 GT4",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
  ];

  const mobileCarDetails2 = [
    {
      carImage: Image03,
      carName: "Ferrari",
      model: "488 Pista",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image3,
      carName: "Porsche",
      model: "911 GT3",
      version: "Cat 04",
      price: props.price3,
    },
  ];
  const mobileCarDetails3 = [
    {
      carImage: Image24,
      carName: "Lamborghini",
      model: " Evo Spider",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    {
      carImage: Image25,
      carName: "Porsche",
      model: "718 Boxter",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image09,
      carName: "Mclaren",
      model: "600 LT",
      version: "Cat 04",
      price: props.price3,
    },
    {
      carImage: Image23,
      carName: "Asto Martin",
      model: "Vantage",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
  ];
  const mobileCarDetails4 = [
    {
      carImage: Image19,
      carName: "Mercedes",
      model: "G-63 AMG",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
    {
      carImage: Image27,
      carName: "Bently",
      model: "Bentayga",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    ,
    {
      carImage: Image30,
      carName: "Porsche",
      model: "Cayenne S",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image20,
      carName: "Land-Rover",
      model: "Range Rover Sport",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
  ];

  const mobileCarDetails5 = [
    {
      carImage: Image29,
      carName: "Audi",
      model: "RS6",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image8,
      carName: "Lamborghini",
      model: "Urus Performante",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image9,
      carName: "Lamborghini",
      model: "Urus S ",
      version: "Cat 05",
      price: props.price1,
      animationEffect: false,
    },
    {
      carImage: Image26,
      carName: "Porsche",
      model: "Macan S",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image22,
      carName: "Lamborghini",
      model: "Huracan Technica",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image4,
      carName: "Porsche",
      model: "911 CARRERA",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
  ];
  const mobileCarDetails6 = [
    {
      carImage: Image31,
      carName: "Ferrari",
      model: "Roma",
      version: "Cat 04",
      price: props.price3,
      animationEffect: false,
    },
    {
      carImage: Image18,
      carName: "BMW",
      model: "M3 Touring",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image18,
      carName: "BMW",
      model: "M3 Touring",
      version: "Cat 02",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image11,
      carName: "Audi",
      model: "RS3",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
    {
      carImage: Image13,
      carName: "Mercedes",
      model: "AMG GT-53 ",
      version: "Cat 01",
      price: props.price2,
      animationEffect: false,
    },
    {
      carImage: Image11,
      carName: "Audi",
      model: "RSQ3",
      version: "Cat 01",
      price: props.price5,
      animationEffect: false,
    },
  ];
  const mobileCarDetails7 = [
    {
      carImage: Image15,
      carName: "Mercedes",
      model: "G-63 4X4",
      version: "Cat 05",
      price: props.price1,
    },
    {
      carImage: Image28,
      carName: "Land-Rover",
      model: "Range Rover LWB",
      version: "Cat 03",
      price: props.price4,
      animationEffect: false,
    },
  ];
  const firstSection = screenSize === "mobile" ? mobileCarDetails : carDetails;

  const array2ToMap =
    screenSize === "desktop" ? carDetails2 : carDetails2Mobile;

  const seconedSection =
    screenSize === "mobile" ? mobileCarDetails2 : array2ToMap;
  const ThirdSection =
    screenSize === "mobile" ? mobileCarDetails4 : carDetails3;
  const FifthSection =
    screenSize === "mobile" ? mobileCarDetails5 : carDetails5;
  const FouthSection =
    screenSize === "mobile" ? mobileCarDetails6 : carDetails4;

  console.log("-------->>>>>>>>>>>>>>>>>>>", screenSize);
  return (
    <div className="powerContainer">
      <p className="label1">{props.power}</p>
      <div className="mainContainer">
        {firstSection.map((car, index) => {
          return (
            <CarCard
              langName={props.languageName}
              CarImg={car.carImage}
              carName={car.carName}
              model={car.model}
              version={car.version}
              price={car.price}
              key={index}
              animationEffect={car.animationEffect}
            />
          );
        })}
      </div>
      <div className="mainContainer">
        <ImageContainer
          className="imageContainer1"
          mainText={props.try}
          subText={props.even}
          isVisible={screenSize === "mobile" ? false : true}
        />
        <TextContainer mainText={props.unique} />
      </div>
      <div className="mainContainer">
        {seconedSection.map((car, index) => {
          return (
            <CarCard
              langName={props.languageName}
              CarImg={car.carImage}
              carName={car.carName}
              model={car.model}
              version={car.version}
              price={car.price}
              key={index}
              animationEffect={car.animationEffect}
            />
          );
        })}
      </div>
      {screenSize === "mobile" && (
        <>
          <FutureCard mainText={props.jump} subText={props.upcoming} />
          <Heading text={props.convertible} />
          <div className="mainContainer">
            {mobileCarDetails3.map((car, index) => {
              return (
                <CarCard
                  langName={props.languageName}
                  CarImg={car.carImage}
                  carName={car.carName}
                  model={car.model}
                  version={car.version}
                  price={car.price}
                  key={index}
                  animationEffect={car.animationEffect}
                />
              );
            })}
          </div>
          <ImageContainer
            className="imageContainer1"
            mainText={props.hurrican}
            isVisible={screenSize === "mobile" ? true : false}
            subText={props.even}
          />
        </>
      )}
      <Heading text={props.comfort} id="mediaDisplay" />
      <div className="mainContainer">
        {ThirdSection.map((car, index) => {
          return (
            <CarCard
              langName={props.languageName}
              CarImg={car.carImage}
              carName={car.carName}
              model={car.model}
              version={car.version}
              price={car.price}
              key={index}
              animationEffect={car.animationEffect}
            />
          );
        })}
        {screenSize === "tablet" && (
          <ImageContainer
            className={"imageContainer2"}
            mainText={props.tryCar}
            subText={props.G63Even}
            isVisible={screenSize !== "mobile" ? true : false}
          />
        )}
      </div>

      <div className="mainContainer">
        <TextImageCard
          vacation={props.vacation}
          suvEven={props.suvEven}
          image={containerPic}
        />
        {screenSize === "desktop" && (
          <ImageContainer
            className={"imageContainer2"}
            mainText={props.tryCar}
            subText={props.G63Even}
            isVisible={true}
          />
        )}
      </div>
      {screenSize === "mobile" && (
        <div className="mainContainer">
          {mobileCarDetails7.map((car, index) => {
            return (
              <CarCard
                langName={props.languageName}
                CarImg={car.carImage}
                carName={car.carName}
                model={car.model}
                version={car.version}
                price={car.price}
                key={index}
                animationEffect={car.animationEffect}
              />
            );
          })}
        </div>
      )}

      <Heading text={props.changeCars} />
      <div className="mainContainer">
        {FouthSection.map((car, index) => {
          return (
            <CarCard
              langName={props.languageName}
              CarImg={car.carImage}
              carName={car.carName}
              model={car.model}
              version={car.version}
              price={car.price}
              key={index}
              animationEffect={car.animationEffect}
            />
          );
        })}
      </div>
      {screenSize === "mobile" && (
        <ImageContainer
          className="imageContainer4"
          mainText={props.ferrari}
          isVisible={screenSize === "mobile" ? true : false}
        />
      )}
      {screenSize !== "mobile" && (
        <FutureCard mainText={props.jump} subText={props.upcoming} />
      )}
      <div className="mainContainer">
        {FifthSection.map((car, index) => {
          return (
            <CarCard
              langName={props.languageName}
              CarImg={car.carImage}
              carName={car.carName}
              model={car.model}
              version={car.version}
              price={car.price}
              key={index}
              animationEffect={car.animationEffect}
            />
          );
        })}
      </div>
      {screenSize !== "mobile" && (
        <>
          <Heading text={props.convertible} />
          <div className="mainContainer">
            {carDetails6.map((car, index) => {
              return (
                <CarCard
                  langName={props.languageName}
                  CarImg={car.carImage}
                  carName={car.carName}
                  model={car.model}
                  version={car.version}
                  price={car.price}
                  key={index}
                  animationEffect={car.animationEffect}
                />
              );
            })}
            {screenSize === "tablet" && (
              <ImageContainer
                className={"imageContainer3"}
                mainText={props.try718}
                subText={props.or}
                isVisible={true}
              />
            )}
          </div>
        </>
      )}
      <div className="mainContainer">
        {screenSize !== "mobile" && (
          <TextImageCard
            vacation={props.roll}
            suvEven={props.cabri}
            image={containerPic2}
          />
        )}
        {screenSize === "desktop" && (
          <ImageContainer
            className={"imageContainer3"}
            mainText={props.try718}
            subText={props.or}
            isVisible={true}
          />
        )}
      </div>
    </div>
  );
};

export default PowerSection;
