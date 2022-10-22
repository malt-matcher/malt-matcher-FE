import "./SingleBeer.css";
// import React from "react";

const SingleBeer = ({abv, ibu, name, style}) => {
  return (
    //not every beer has IBU's listed as they are generally only rated for IPA's/PA's.  Leaving out 
    //for now
    <div className="single-beer">
      <h2>{name}</h2>
     <span> ABV: {abv}% </span> <span>Style: {style}</span>
    </div>
  )
};

export default SingleBeer;
