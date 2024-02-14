import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import FleetHeroSection from "../../components/FleetPageComponents/FleetHeroSection";
import "./fleetPageStyles.css";
import FilterBar from "../../components/FleetPageComponents/FilterBar";
import PowerSection from "../../components/FleetPageComponents/PowerSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import NavbarSmall from "../../components/Navbar/NavbarSmall";
const Fleet = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "fleetPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="fleetMain">
      <Navbar shouldActive={true} />
      <NavbarSmall />
      <FleetHeroSection
        mainText={screenText.fleetIntro}
        btnText={screenText.startTour}
      />
      <FilterBar
        search={screenText.search}
        all={screenText.all}
        categories={screenText.categories}
        types={screenText.types}
        marquee={screenText.marquee}
        superCar={screenText.superCar}
        cabriolet={screenText.cabriolet}
        awd={screenText.awd}
        hybrid={screenText.hybrid}
        compact={screenText.compact}
        suv={screenText.suv}
        berlin={screenText.berlin}
      />
      <div className="newClass">
        <PowerSection
          languageName={screenText.languageName}
          power={screenText.power}
          car={text.car}
          price1={screenText.price1}
          try={screenText.try}
          even={screenText.even}
          unique={screenText.unique}
          price2={screenText.price2}
          price3={screenText.price3}
          comfort={screenText.comfort}
          price4={screenText.price4}
          price5={screenText.price5}
          vacation={screenText.vacation}
          suvEven={screenText.suvEven}
          tryCar={screenText.tryCar}
          G63Even={screenText.G63Even}
          changeCars={screenText.changeCars}
          upcoming={screenText.upcoming}
          jump={screenText.jump}
          convertible={screenText.convertible}
          roll={screenText.roll}
          cabri={screenText.cabri}
          try718={screenText.try718}
          or={screenText.or}
          hurrican={screenText.hurrican}
          ferrari={screenText.ferrari}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Fleet;
