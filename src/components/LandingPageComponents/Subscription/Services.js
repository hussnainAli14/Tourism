import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import "./subscriptionStyles.css";
const Services = (props) => {
  const details = [
    {
      icon: <FaPhoneSquareAlt color="purple" size={40} />,
      heading: props.call,
      descriptiom: props.help,
    },
    {
      icon: <IoCubeOutline color="purple" size={40} />,
      heading: props.service,
      descriptiom: props.deliveryAtWill,
    },
  ];
  return (
    <div className="servicesContainer">
      {details.map((item, index) => {
        return (
          <div className="servicesRow" key={index}>
            {item.icon}

            <div className="servicesCol">
              <p className="heading">{item.heading}</p>
              <p className="desc">{item.descriptiom}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
