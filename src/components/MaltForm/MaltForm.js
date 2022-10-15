import "./MaltForm.css";
import React from "react";

const MaltForm = () => {
  return (
    <form className="form-container">
      <div className="dropdown-container">
        <select placeholder="Beer Syle">
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
        <select placeholder="City">
          City
          <option value="">Select a City</option>
          <option value="Arvade">Arvade</option>
          <option value="Aurora">Aurora</option>
          <option value="Denver">Denver</option>
          <option value="Golden">Golden</option>
          <option value="Littleton">Littleton</option>
          <option value="Montrose">Montrose</option>
          <option value="Thornton">Thornton</option>
        </select>
        <select placeholder="Radius">
          Radius
          <option value="">Select a Radius</option>
          <option value="5 Miles">5 Miles</option>
          <option value="10 Miles">10 Miles</option>
          <option value="15 Miles">15 Miles</option>
          <option value="20 Miles">20 Miles</option>
          <option value="25 Miles">25 Miles</option>
          <option value="50 Miles">50 Miles</option>
        </select>
      </div>
      <div className="button-container">
        <button className="form-button">Show Me Breweries</button>
      </div>
    </form>
  );
};

export default MaltForm;
