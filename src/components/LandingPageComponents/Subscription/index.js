import React from "react";
import "./subscriptionStyles.css";
import DetailsCard from "./DetailsCard";
import Services from "./Services";
import ScrollAnimation from "../../../animations/ScrollAnimation";
const Subscription = (props) => {
  const variant = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  console.log("SUBC", props.onePackage);
  return (
    <div className="subscriptionMain screenVisibilityLarge ">
      <ScrollAnimation variant={variant} duration={1}>
        <p className="laargeMain"> {props.subscription} </p>
        <DetailsCard
          onePackage={props.onePackage}
          plusPackage={props.plusPackage}
          more={props.more}
        />
        <Services
          call={props.call}
          help={props.help}
          service={props.service}
          deliveryAtWill={props.deliveryAtWill}
        />
      </ScrollAnimation>
    </div>
  );
};

export default Subscription;
