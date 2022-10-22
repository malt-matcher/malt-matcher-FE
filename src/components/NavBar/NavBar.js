import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="malt-matcher-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="malt">Malt</h1>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="matcher">Matcher</h1>
        </Link>
      </div>
      <div>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h4 className="about">About Us</h4>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
