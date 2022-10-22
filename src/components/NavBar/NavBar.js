import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="malt-matcher-container">
          <h1 className="malt">Malt</h1>
          <h1 className="matcher">Matcher</h1>
        </div>
      </Link>
      <div>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h4 className="about">About Us</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
