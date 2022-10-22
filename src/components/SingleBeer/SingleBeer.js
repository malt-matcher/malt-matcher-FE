import "./SingleBeer.css";

const SingleBeer = ({ abv, ibu, name, style }) => {
  return (
    //not every beer has IBU's listed as they are generally only rated for IPA's/PA's.  Leaving out
    //for now
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
