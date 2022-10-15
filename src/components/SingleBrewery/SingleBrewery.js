import "./SingleBrewery.css";
import React from "react";
import PBR from "../../assets/nikos.png";

const SingleBrewery = () => {
  return (
    <div className="single-brewery-container">
      <div className="brewery-image-container">
        <img src={PBR} className='beer-image'/>
      </div>
      <div className="brewery-info-container">
        <p className="brewery-name">Niko's Tavern</p>
        <p className="brewery-distance">13.5 Miles</p>
        <p className="brewery-location">
          <a>http://mapquest.link</a>
        </p>
      </div>
    </div>
  );
};

export default SingleBrewery;
