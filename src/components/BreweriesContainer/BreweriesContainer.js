import "./BreweriesContainer.css";
import bar from "../../assets/bar.jpg";
// import React, { useEffect, useState } from "react";
import SingleBrewery from "../SingleBrewery/SingleBrewery";
// import { useQuery } from "@apollo/client";
// import { GET_BREWERIES } from "../../utilities/queries";


const BreweriesContainer = ({ breweries }) => {
  //   const GET_BREWERIES = gql`
  //   query breweries($location: String!, $radius: String!) {
  //     catalogBreweryId
  //     name
  //     address
  //     distanceFromUser
  //     website
  //     instagram
  //     facebook
  //     twitter
  //     breweryDescription
  //   }
  // `;
  // let { data, loading, error } = useQuery(GET_BREWERIES, {location: "Denver, CO", radius: "100"});
  // if (loading) console.log("Loading...");
  // if (error) console.log("error!", error.message);

  // console.log("DATA: ", data);

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
