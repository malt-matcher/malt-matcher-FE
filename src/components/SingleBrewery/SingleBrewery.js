import "./SingleBrewery.css";
import React from "react";
import PBR from "../../assets/nikos.png";

const SingleBrewery = () => {
  return (
    <div className="single-brewery-container">
      <div className="brewery-image-container">
        <img src={PBR} alt='beer' className='beer-image'/>
      </div>
      <div className="brewery-info-container">
        <p className="brewery-name">Niko's Tavern</p>
        <p className="brewery-distance">13.5 Miles</p>
        <p className="brewery-location">http://mapquest.link</p>
      </div>
    </div>
  );
};

export default SingleBrewery;
