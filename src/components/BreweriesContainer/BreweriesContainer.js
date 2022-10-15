import "./BreweriesContainer.css";
import bar from "../../assets/bar.jpg";
import React from "react";
import SingleBrewery from "../SingleBrewery/SingleBrewery";

const BreweriesContainer = () => {
  return (
    <div className="breweries-container">
      <div className="bars-image-container">
        <img src={bar} className="bars-image" alt="bar" />
        <div className="singles">
          <SingleBrewery />
          <SingleBrewery />
          <SingleBrewery />
          <SingleBrewery />
          <SingleBrewery />
          <SingleBrewery />
        </div>
      </div>
    </div>
  );
};

export default BreweriesContainer;
