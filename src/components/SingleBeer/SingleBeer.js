import "./SingleBeer.css";

const SingleBeer = ({ abv, ibu, name, style }) => {
  return (
    <div className="single-beer-container">
      <div className="single-beer-details-container">
        <h2 className="beer-name">{name}</h2>
        <p className="abv">
          <b>ABV:</b> {abv}%
        </p>
        <p className="style">
          <b>Style:</b> {style}
        </p>
      </div>
    </div>
  );
};

export default SingleBeer;
