import "./BreweryDetails";
// import React from "react";

const BreweryDetails = ({name, address}) => {

  let formattedAddress = address.split(/[, ]+/).join('-')

  return (
    <div className="single-brewery-details-container">
      <p>{name}</p>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        title={name}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBymoh9V4dmdDfhnq3jKMakn0hKduD_j3Q
          &q=${formattedAddress}`}>
    </iframe>
    </div>
  );
};

export default BreweryDetails;
