import "./SingleBrewery.css";
// import PBR from "../../assets/nikos.png";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const SingleBrewery = ({
  id,
  name,
  distanceFromUser,
  address,
  website,
  facebook,
  instagram,
  twitter,
  beers,
  setBeers,
  setAddress,
  setName,
}) => {
  return (
    <div className="single-brewery-container">
      {/* <div className="brewery-image-container">
        <img src={PBR} alt="beer" className="beer-image" />
      </div> */}
      <div className="brewery-info-container">
        <p className="brewery-name">
          <a
            className="website-anchor"
            target="_blank"
            rel="noreferrer"
            href={website}
            aria-label={`${name} Website`}
          >
            {name}
          </a>
        </p>
        {distanceFromUser < 2 ? (
          <p className="brewery-distance">{distanceFromUser} mile away</p>
        ) : (
          <p className="brewery-distance">{distanceFromUser} miles away</p>
        )}
        <Link to={`/search/${name}`}>
          <button
            className="show-beers-button"
            onClick={() => {
              setBeers(beers);
              setAddress(address);
              setName(name);
            }}
          >{`${name}'s Beers`}</button>
        </Link>
      </div>
      <div className="facebook-instagram-twitter">
        <a
          className="faceboodAnchor"
          target="_blank"
          rel="noreferrer"
          href={facebook}
          aria-label={`${name} Facebook`}
        >
          <AiFillFacebook />
        </a>
        <a
          className="instagramAnchor"
          target="_blank"
          rel="noreferrer"
          href={instagram}
          aria-label={`${name} Instagram`}
        >
          <AiFillInstagram />
        </a>
        <a
          className="twitterAnchor"
          target="_blank"
          rel="noreferrer"
          href={twitter}
          aria-label={`${name} Twitter`}
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default SingleBrewery;
