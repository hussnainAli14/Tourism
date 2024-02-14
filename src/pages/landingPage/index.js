import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import Hero from "../../components/LandingPageComponents/HeroSection/index";
import "./landingPageStyles.css";
import IntroSection from "../../components/LandingPageComponents/IntroSection/index";
import CarousalSection from "../../components/LandingPageComponents/CarousalSection/index";
import QualitySection from "../../components/LandingPageComponents/QualitySection/index";
import VideoSection from "../../components/LandingPageComponents/VideoSection/index";
import MobileSectin from "../../components/LandingPageComponents/MobileSection/index";
import Subscription from "../../components/LandingPageComponents/Subscription/index";
import Inclusion from "../../components/LandingPageComponents/InclusionSection/index";
import ReasonSection from "../../components/LandingPageComponents/Reasons/index";
import SmallScreenSubscription from "../../components/LandingPageComponents/SmallScreenSubscription";
import Navbar from "../../components/Navbar/Navbar";
import NavbarSmall from "../../components/Navbar/NavbarSmall";
import Footer from "../../components/Footer";
const LandingPage = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "landingPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("text", text.onePackage);
  return (
    <div className="main">
      <Navbar />
      <NavbarSmall />
      <Hero
        heroMainText={screenText.subscription}
        newEra={screenText.newEra}
        startTour={screenText.startTour}
        learnMore={screenText.learnMore}
      />
      <IntroSection introText={screenText.introText} />
      <CarousalSection
        mainText={screenText.mainText}
        subText={screenText.subText}
        slider1ImageCaption={screenText.slider1ImageCaption}
        slider2ImageCaption={screenText.slider2ImageCaption}
      />
      <QualitySection
        mainText={screenText.ourFleet}
        subText={screenText.fleet}
      />
      <VideoSection
        mainText={screenText.deliveries}
        subText={screenText.vehicleAtHome}
      />
      <MobileSectin mainText={screenText.sporty} subText={screenText.fleet} />
      <Subscription
        subscription={screenText.subscriptionEveryone}
        onePackage={text.onePackage}
        plusPackage={text.plusPackage}
        // category1={screenText.category1}
        // distance1={screenText.distance1}
        // category2={screenText.category2}
        // distance2={screenText.distance2}
        // cost={screenText.cost}
        // vehicleCategories={screenText.vehicleCategories}
        // changeVehicle={screenText.changeVehicle}
        // flexibility={screenText.flexibility}
        // shareable={screenText.shareable}
        more={screenText.more}
        call={screenText.call}
        help={screenText.help}
        service={screenText.service}
        deliveryAtWill={screenText.deliveryAtWill}
      />

      <SmallScreenSubscription
        subscription={screenText.subscriptionEveryone}
        category1={screenText.category1}
        distance1={screenText.distance1}
        category2={screenText.category2}
        distance2={screenText.distance2}
        cost={screenText.cost}
        vehicleCategories={screenText.vehicleCategories}
        changeVehicle={screenText.changeVehicle}
        flexibility={screenText.flexibility}
        shareable={screenText.shareable}
      />
      <Inclusion
        inclusion={screenText.inclusion}
        subscribeTurismo={screenText.subscribeTurismo}
        assurance={screenText.assurance}
        assuranceDes={screenText.assuranceDes}
        interview={screenText.interview}
        interviewDes={screenText.interviewDes}
        tires={screenText.tires}
        tiresDes={screenText.tiresDes}
        assistance={screenText.assistance}
        assistanceDes={screenText.assistanceDes}
      />
      <ReasonSection
        reasons={screenText.reasons}
        wholeFleet={screenText.wholeFleet}
        wholeFleetDes={screenText.wholeFleetDes}
        drivers={screenText.drivers}
        driversDes={screenText.driversDes}
        caution={screenText.caution}
        cautionDes={screenText.cautionDes}
      />
      <Footer />
    </div>
  );
};

export default LandingPage;
