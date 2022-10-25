import "./MaltForm.css";
import { Link } from "react-router-dom";

const MaltForm = ({
  setLocation,
  setRadius,
  setStyle,
  location,
  radius,
  style,
}) => {
  return (
    <form className="form-container">
      <div className="dropdown-container">
        <select
          required
          placeholder="Beer Syle"
          className="beer-style"
          onChange={(event) => setStyle(event.target.value)}
        >
          Beer Style
          <option value="">Select a Brew Style</option>
          <option value="Amber">Amber</option>
          <option value="Ale">Ale</option>
          <option value="Amber Ale">Amber Ale</option>
          <option value="American Pale Ale">American Pale Ale</option>
          <option value="Barley Wine">Barley Wine</option>
          <option value="Brown Ale">Brown Ale</option>
          <option value="Cider">Cider</option>
          <option value="Doppelbock">Doppelbock</option>
          <option value="IPA">IPA</option>
          <option value="Kölsch">Kölsch</option>
          <option value="Lager">Lager</option>
          <option value="Pale Ale">Pale Ale</option>
          <option value="Pilsner">Pilsner</option>
          <option value="Porter">Porter</option>
          <option value="Saison">Saison</option>
          <option value="Sour">Sour</option>
          <option value="Stout">Stout</option>
          <option value="Witbier">Witbier</option>
        </select>
        <select
          required
          placeholder="City"
          className="city"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        >
          City
          <option value="">Select a City</option>
          <option value="Arvada, CO">Arvada</option>
          <option value="Aspen, CO">Aspen</option>
          <option value="Aurora, CO">Aurora</option>
          <option value="Boulder, CO">Boulder</option>
          <option value="Colorado Springs, CO">Colorado Springs</option>
          <option value="Denver, CO">Denver</option>
          <option value="Englewood, CO">Englewood</option>
          <option value="Fort Collins, CO">Fort Collins</option>
          <option value="Golden, CO">Golden</option>
          <option value="Greely, CO">Greely</option>
          <option value="Highlands Ranch, CO">Highlands Ranch</option>
          <option value="Lakewood, CO">Lakewood</option>
          <option value="Littleton, CO">Littleton</option>
          <option value="Longmont, CO">Longmont</option>
          <option value="Loveland, CO">Loveland</option>
          <option value="Parker, CO">Parker</option>
          <option value="Pueblo, CO">Pueblo</option>
          <option value="Thornton, CO">Thornton</option>
          <option value="Westminster, CO">Westminster</option>
        </select>
        <select
          required
          placeholder="Radius"
          className="radius"
          onChange={(event) => setRadius(event.target.value)}
        >
          Radius
          <option value="">Select a Radius</option>
          <option value="5">5 Miles</option>
          <option value="10">10 Miles</option>
          <option value="15">15 Miles</option>
          <option value="20">20 Miles</option>
          <option value="25">25 Miles</option>
          <option value="50">50 Miles</option>
          <option value="100">100 Miles</option>
        </select>
      </div>
      <div className="button-container">
        <Link to="/search">
          {style && location && radius ? (
            <button className="form-button">Show Me Breweries</button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </form>
  );
};

export default MaltForm;
