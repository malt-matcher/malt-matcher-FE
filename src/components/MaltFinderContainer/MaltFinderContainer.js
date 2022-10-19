import "./MaltFinderContainer.css";
import bar from "../../assets/bar.jpg";
import MaltForm from "../MaltForm/MaltForm";

const MaltFinderContainer = ({displayBreweries}) => {

  return (
    <div className="container">
      <div className="img-container">
        <img src={bar} className="bar-image" alt="bar" />
      </div>
      <MaltForm displayBreweries={displayBreweries}/>
    </div>
  );
};

export default MaltFinderContainer;
