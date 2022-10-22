import "./ErrorPage.css";
import { Link } from "react-router-dom";
import spilled from "../../assets/party-foul.jpeg";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-text-container">
        <h2 className="party-foul">Party Foul!!! Invalid URL!</h2>
        <h2 className="other-text">
          Please click button below to return home.
        </h2>
      </div>
      <div className="img-container">
        <img src={spilled} className="spilled-image" alt="spilled-beer" />
      </div>
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
