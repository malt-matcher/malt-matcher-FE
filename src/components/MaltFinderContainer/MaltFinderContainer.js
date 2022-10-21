import "./MaltFinderContainer.css";
import bar from "../../assets/bar.jpg";
import MaltForm from "../MaltForm/MaltForm";

const MaltFinderContainer = ({setLocation, setRadius, setStyle}) => {

  return (
    <div className="container">
      <div className="img-container">
        <img src={bar} className="bar-image" alt="bar" />
      </div>
      <MaltForm setLocation={setLocation} setRadius={setRadius} setStyle={setStyle}/>
    </div>
  );
};

export default MaltFinderContainer;
