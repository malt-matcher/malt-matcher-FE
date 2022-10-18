import "./SingleBrewery.css";
// import PBR from "../../assets/nikos.png";
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
}) => {
  return (
    <div className="single-brewery-container">
      {/* <div className="brewery-image-container">
        <img src={PBR} alt="beer" className="beer-image" />
      </div> */}
      <div className="brewery-info-container">
        <p className="brewery-name">
          <a href={website}>{name}</a>
        </p>
        {distanceFromUser < 2 ? (
          <p className="brewery-distance">{distanceFromUser} mile away</p>
        ) : (
          <p className="brewery-distance">{distanceFromUser} miles away</p>
        )}
        <p className="brewery-location">{address}</p>
      </div>
      <div className="facebook-instagram-twitter">
        <a className="faceboodAnchor" href={facebook}>
          <AiFillFacebook />
        </a>
        <a className="instagramAnchor" href={instagram}>
          <AiFillInstagram />
        </a>
        <a className="twitterAnchor" href={twitter}>
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default SingleBrewery;
