import "./BreweryDetails.css";

const BreweryDetails = ({ name, address }) => {
  let formattedAddress = address.split(/[, ]+/).join("-");

  return (
    <div className="single-brewery-details-container">
      <p className="brewery-details-name">{name}</p>
      <p className="brewery-details-address">{address}</p>
      <iframe
        className="brew-map"
        width="600"
        height="450"
        loading="lazy"
        title={name}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${
          process.env.REACT_APP_MAPS_KEY
        }
          &q=${name + formattedAddress}`}
      ></iframe>
    </div>
  );
};

export default BreweryDetails;
