import "./BeerListContainer.css";
// import React from "react";
import SingleBeer from "../SingleBeer/SingleBeer";

const BeerListContainer = ({beerList}) => {
  let selectedBrews = beerList.map((brew) => {
    return (
      <SingleBeer 
        abv={brew.abv}
        ibu={brew.ibu}
        name={brew.name}
        style={brew.style}
      />
    )
  })

  return (
    <section>
      {selectedBrews}
    </section>

  ) 


};

export default BeerListContainer;
