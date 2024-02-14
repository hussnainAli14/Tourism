import React, { useEffect, useState } from "react";
import "./infoStyles.css";
import { useSelector } from "react-redux";
import { useLangTranslation } from "../../languageSupport/useLangTranslation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css/pagination";
import SuggestionCards from "../../components/InfoPageComponents/SuggestionCards";
import Image1 from "../../assets/BENTAYGA.png";
import Image2 from "../../assets/600LT.png";
import Image3 from "../../assets/RSQ3.png";
import Image4 from "../../assets/URUSS.png";
import Image5 from "../../assets/CAYENNE.png";
import Image6 from "../../assets/GT53.png";
import SuggestionSwiperBtn from "./SwiperBtn";
const Suggestions = () => {
  const language = useSelector((state) => state.language.lang);
  const [screenText, setScreenText] = useState({});
  const text = useLangTranslation(language, "infoPage");
  useEffect(() => {
    setScreenText(text);
  }, [language, text]);
  const carDetails = [
    {
      carImage: Image1,
      carName: "Lamborghini",
      model: "Urus Performante",
      version: "Cat 05",
      price: "9980€",
    },
    {
      carImage: Image2,
      carName: "Mclaren",
      model: "600 LT",
      version: "Cat 04",
      price: "9980€",
    },
    {
      carImage: Image3,
      carName: "Lamborghini",
      model: "Urus S ",
      version: "Cat 05",
      price: "9980€",
    },
    {
      carImage: Image4,
      carName: "Audi",
      model: "RSQ3",
      version: "Cat 01",
      price: "9980€",
    },
    {
      carImage: Image5,
      carName: "Audi",
      model: "RS6",
      version: "Cat 02",
      price: "9980€",
    },
    {
      carImage: Image6,
      carName: "Mercedes",
      model: "AMG GT-53 ",
      version: "Cat 01",
      price: "9980€",
    },
  ];
  return (
   <div className="suggestion_main_container">
      <p className="characterstic_heading">{screenText.like}</p>
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Pagination, A11y]}
        breakpoints={{
          120: {
            slidesPerView: 1, // 1 slide for small screens
          },
          320: {
            slidesPerView: 1.9, // 1 slide for small screens
          },
          610: {
            slidesPerView: 2.2, // 2 slides for medium screens
          },
          768: {
            slidesPerView: 2.2, // 2 slides for medium screens
          },
          1024: {
            slidesPerView: 3.3, // 3 slides for large screens
          },
        }}
        className="suggestion_cards_section"
      >
        <div className="slider_btn_container">
          <SuggestionSwiperBtn />
        </div>
        {carDetails.map((item, index) => (
          <SwiperSlide key={index} id="res">
            <SuggestionCards
              CarImg={item.carImage}
              carName={item.carName}
              model={item.model}
              version={item.version}
              price={item.price}
              langName={language}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Suggestions;
