import "./MaltFinderContainer.css";
import bar from "../../assets/bar.jpg";
import React from "react";
import MaltForm from "../MaltForm/MaltForm";

const MaltFinderContainer = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={bar} className="bar-image" />
      </div>
      <MaltForm />
    </div>
  );
};

export default MaltFinderContainer;
