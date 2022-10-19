import "./BreweryDetails";
// import React from "react";

const BreweryDetails = ({ singleBrewery }) => {
  return (
    <div className="single-brewery-details-container">
      <p>{singleBrewery.name}</p>
    </div>
  );
};

export default BreweryDetails;
