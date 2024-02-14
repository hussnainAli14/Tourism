import React from "react";
import "./textContainerStyle.css";
import TabletTextContainer from "./TabletTextContainer";
const TextContainer = (props) => {
  return (
    <>
      <div className="textContainer">
        <div className="row">
          <div className="TextContainerborder"></div>
          <p className="textContainerText" id="text">
            One OF-1
          </p>
        </div>

        <p
          className="ContainerMainText"
          dangerouslySetInnerHTML={{ __html: props.mainText }}
        ></p>
      </div>
      <TabletTextContainer />
    </>
  );
};

export default TextContainer;
