import "./BreweriesContainer.css";
import bar from "../../assets/bar.jpg";
import SingleBrewery from "../SingleBrewery/SingleBrewery";
import { useEffect, useState } from "react";

const BreweriesContainer = ({ breweries, displaySingleBrewery }) => {

  const brewery = breweries.map((brewery) => {
    return (
      <SingleBrewery
        id={brewery.catalogBreweryId}
        key={brewery.catalogBreweryId}
        name={brewery.name}
        distanceFromUser={brewery.distanceFromUser}
        address={brewery.address}
        website={brewery.website}
        instagram={brewery.instagram}
        facebook={brewery.facebook}
        twitter={brewery.twitter}
        displaySingleBrewery={displaySingleBrewery}
      />
    );
  });

  return (
    <div className="breweries-container">
      <div className="bars-image-container">
        <img src={bar} className="bars-image" alt="bar" />
        <div className="singles">{brewery}</div>
      </div>
    </div>
  );
};

export default BreweriesContainer;
