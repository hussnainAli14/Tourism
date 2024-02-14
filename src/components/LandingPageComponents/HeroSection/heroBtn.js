import React from "react";

const HeroBtn = (props) => {
  return (
    // <div className='shadowDiv' >
    <>
      {/* <div className='border-row' >
  <div className='outer1' ></div>
  <div className='outer2' ></div>
  </div> */}
      <div className="heroBtn outer">{props.startTour}</div>
    </>
    // </div>
  );
};

export default HeroBtn;
