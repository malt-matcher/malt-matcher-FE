import "./BeerListContainer.css";
import bar from "../../assets/bar.jpg";
import SingleBeer from "../SingleBeer/SingleBeer";
import { Link } from "react-router-dom";

const BeerListContainer = ({
  beerList,
  name,
  setLocation,
  setRadius,
  setStyle,
}) => {
  let selectedBrews = beerList.map((brew) => {
    return (
      <SingleBeer
        abv={brew.abv}
        ibu={brew.ibu}
        name={brew.name}
        style={brew.style}
        key={brew.name}
      />
    );
  });

  const handleClick = () => {
    setLocation("");
    setRadius("");
    setStyle("");
  };

  return (
    <div className="tap-listing-container">
      <div className="button-and-text-container">
        <div className="on-tap-container">
          <h4 className="on-tap-text">{name}</h4>
          <h4 className="on-tap-number">{`${beerList.length} Beer's Available`}</h4>
        </div>
        <div className="back-and-details-button-container">
          <Link to="/maltfinder">
            <button className="back-button" onClick={() => handleClick()}>
              Back To Search
            </button>
          </Link>
          <Link to="/details">
            <button className="brewery-details-button">
              Directions to {name}
            </button>
          </Link>
        </div>
      </div>
      <div className="backdrop-image-container">
        <img src={bar} className="backdrop-image" alt="bar" />
        <div className="single-beers">{selectedBrews}</div>
      </div>
    </div>
  );
};

export default BeerListContainer;
