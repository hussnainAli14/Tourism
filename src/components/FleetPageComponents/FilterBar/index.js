import React, { useState } from "react";
import "./filterBarStyles.css";
import { FiMenu } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";
const FilterBar = (props) => {
  const [isCategories, setIsCategories] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const categories = [props.all, props.categories, props.types, props.marquee];
  const filters = [
    props.superCar,
    props.cabriolet,
    props.awd,
    props.hybrid,
    props.compact,
    props.suv,
    props.berlin,
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleToggleCategories = () => {
    setIsCategories(!isCategories);
  };
  return (
    <div className="filterBarMain">
      {!isCategories ? (
        <div
          className={`firstBar ${
            isCategories ? "searchTextAnimation" : "listBar-animation"
          }`}
          id="small_screen_width"
        >
          <p onClick={()=>{handleToggleCategories();setIsFilter(false)}}>{props.search}</p>
          <MdNavigateNext size={25} className="searchIcon" />
        </div>
      ) :
       (
        <div className="firstBar">
          {categories.map((category, index) => (
            (selectedCategory === index) ? 
            <div className="itemBorder" >
              <p
              onClick={() => {
                handleToggleCategories();
              }}
              key={index}
              id="padding"
              className={
                (!isCategories ? "searchTextAnimation" : "listBar-animation") 
                // + 
                // ((selectedCategory === index) ? 'itemBorder':'')
              }
              // style={{border: selectedCategory === index ? 'itemBorder':''}}
            >
              {category}
            </p>
            </div>
            :
            <p
              onClick={() => {
                handleToggleCategories();
              }}
              key={index}
              id="padding"
              className={
                (!isCategories ? "searchTextAnimation" : "listBar-animation") 
                // + 
                // ((selectedCategory === index) ? 'itemBorder':'')
              }
              // style={{border: selectedCategory === index ? 'itemBorder':''}}
            >
              {category}
            </p>
          ))}
        </div>
      )}
      {
      !isFilter ? (
        <div className={`firstBar ${
          isFilter ? "searchTextAnimation" : "listBar-animation"
        }`}
        id="border-opposite"
        >
          <FiMenu
            color="gray"
            onClick={() => {
              setIsFilter(!isFilter);
              setIsCategories(false)
            }}
            size={25}
          />
        </div>
      ) : 
      (
        <div className="firstBar" id="border-opposite" >
          {filters.map((filter, index) => (
            (selectedCategory === index) ? 
            <div className="itemBorder" >
              <p
               onClick={() => {
                setIsFilter(!isFilter);
              }}
              key={index}
              id="padding"
              className={
                (!isFilter ? "searchTextAnimation" : "listBar-animation") 
                // + 
                // ((selectedCategory === index) ? 'itemBorder':'')
              }
              // style={{border: selectedCategory === index ? 'itemBorder':''}}
            >
              {filter}
            </p>
            </div>
            :
            <p
              onClick={() => {
                setIsFilter(!isFilter);
              }}
              key={index}
              id="padding"
              className={
                !isFilter ? "searchTextAnimation" : "listBar-animation"
              }
            >
              {filter}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
