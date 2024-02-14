import React from "react";
import DetailsBtn from "./DetailsBtn";
import { useSelector } from "react-redux";

const SelectedCarInfo = (props) => {
  const screenSize = useSelector((state) => state.screenSize.screenSize);
  const crossScreenVisibility =
    (screenSize === "desktop" && props.index === 0) ||
    (screenSize === "tablet" && props.index === 3);
  return (
    <div className="selected_car_container">
      {/* <div className="title_container"> */}
      <p
        className="section_title"
        id={crossScreenVisibility && "small_font_size"}
      >
        {props.text}{" "}
        <span style={{ color: "blue" }}>
          {crossScreenVisibility && "Porsche Macan S ”"}
        </span>{" "}
        {props.subText !== "" && (
          <span className="sub_text">{props.subText}</span>
        )}
      </p>
      {/* </div> */}
      <div className="sectionImages">
        {props.sectionImages.length > 0
          ? props.sectionImages.map((sectionImage, index) => (
              <img
                src={sectionImage.image}
                alt="sectionImage"
                key={index}
                className="section_image"
                id={props.selected === index && "selected_section_image"}
                onClick={() => {
                  props.setSelected(index);
                }}
              />
            ))
          : props.secondImages &&
            props.secondImages.length > 0 &&
            props.secondImages.map((secondImage, index) => (
              <img
                src={secondImage.image}
                alt="sectionImage"
                key={index}
                className="section_image"
                id={
                  props.secondPortionImageSelected === index &&
                  "selected_second_section_image"
                }
                onClick={() => {
                  props.setSecondPortionImageSelected(index);
                }}
              />
            ))}
      </div>
      {props.btnText !== "" && (
        <div
          className={
            (screenSize === "desktop" && props.index === 3) ||
            (screenSize === "tablet" && props.index === 2)
              ? "extra_margin_large"
              : "extra_margin_small"
          }
        >
          <DetailsBtn
            btnText={props.btnText}
            handleClick={() => {
              ((screenSize === "desktop" && props.index === 0) ||
                (screenSize === "tablet" && props.index === 3)) &&
                props.setShowMoreInfo((showMoreInfo) => !showMoreInfo);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SelectedCarInfo;
