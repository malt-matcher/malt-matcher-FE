import "./MaltForm.css";
import {Link} from 'react-router-dom'

const MaltForm = ({setLocation, setRadius, setStyle}) => {

  return (
    <form className="form-container">
      <div className="dropdown-container">
        <select placeholder="Beer Syle" onChange={(event) => setStyle(event.target.value)}>
          Beer Style
          <option value="">Select a Brew Style</option>
          <option value="Amber">Amber</option>
          <option value="Cider">Cider</option>
          <option value="IPA">IPA</option>
          <option value="Lager">Lager</option>
          <option value="Pale Ale">Pale Ale</option>
          <option value="Saison">Saison</option>
          <option value="Sour">Sour</option>
          <option value="Stout">Stout</option>
        </select>
        <select placeholder="City" onChange={(event) => {setLocation(event.target.value)}}>
          City
          <option value="">Select a City</option>
          <option value="Arvada, CO">Arvada</option>
          <option value="Aurora, CO">Aurora</option>
          <option value="Denver, CO">Denver</option>
          <option value="Golden, CO">Golden</option>
          <option value="Littleton, CO">Littleton</option>
          <option value="Montrose, CO">Montrose</option>
          <option value="Thornton, CO">Thornton</option>
        </select>
        <select placeholder="Radius" onChange={(event) => setRadius(event.target.value)}>
          Radius
          <option value="">Select a Radius</option>
          <option value="5">5 Miles</option>
          <option value="10">10 Miles</option>
          <option value="15">15 Miles</option>
          <option value="20">20 Miles</option>
          <option value="25">25 Miles</option>
          <option value="100">100 Miles</option>
        </select>
      </div>
      <div className="button-container">
        <Link to='/search'><button className="form-button" >Show Me Breweries</button></Link>
      </div>
    </form>
  );
};

export default MaltForm;
