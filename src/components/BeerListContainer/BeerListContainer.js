import "./BeerListContainer.css";
import bar from "../../assets/bar.jpg";
import SingleBeer from "../SingleBeer/SingleBeer";
import { Link } from "react-router-dom";

const BeerListContainer = ({ beerList, name}) => {
  let selectedBrews = beerList.map((brew) => {
    return (
      <SingleBeer
        abv={brew.abv}
        ibu={brew.ibu}
        name={brew.name}
        style={brew.style}
      />
    );
  });

  return (
    <div className="tap-listing-container">
      <div className="button-and-text-container">
        <Link to="/maltfinder">
          <button className="back-button">Back To Home</button>
        </Link>
        <h1 className="on-tap-text">On Tap @ {name}</h1>
        <Link to="/details">
          <button className="brewery-details-button">
            {name}'s Directions
          </button>
        </Link>
      </div>
      <div className="backdrop-image-container">
        <img src={bar} className="backdrop-image" alt="bar" />
        <div className="single-beers">
          {/* add error handling for NO results. I came across a selction that didn't return any results. */}
          {selectedBrews}
        </div>
      </div>
    </div>
  );
};

export default BeerListContainer;
