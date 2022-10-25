import "./BreweriesContainer.css";
import bar from "../../assets/bar.jpg";
import SingleBrewery from "../SingleBrewery/SingleBrewery";
import Loading from "../Loading/Loading";
import { useQuery, gql } from "@apollo/client";

const BreweriesContainer = ({ location, radius, style, setBeers, setAddress, setName }) => {
  let selectedBreweries;
  let noResults

  const GET_BREWERIES = gql`
    query breweries($location: String!, $radius: String!, $style: String!) {
      breweries(location: $location, radius: $radius, style: $style) {
        catalogBreweryId
        name
        address
        distanceFromUser
        website
        instagram
        facebook
        twitter
        breweryDescription
        beers {
          name
          style
          description
          abv
          ibu
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_BREWERIES, {
    variables: {
      location: location,
      radius: radius,
      style: style,
    },
  });

  if (data) {
    selectedBreweries = data.breweries.map((brewery) => {
      return (
        <SingleBrewery
          id={brewery.catalogBreweryId}
          key={brewery.address}
          name={brewery.name}
          distanceFromUser={brewery.distanceFromUser}
          address={brewery.address}
          website={brewery.website}
          instagram={brewery.instagram}
          facebook={brewery.facebook}
          twitter={brewery.twitter}
          beers={brewery.beers}
          setBeers={setBeers}
          setAddress={setAddress}
          setName={setName}
        />
      );
    });
  } else {
    console.log("Loading");
  }

  if(!loading && data.breweries.length === 0) {
    noResults = `No results matched your search! Click the MaltFinder icon and search again.`
  }

  return (
    <div className="breweries-container">
      <div className="bars-image-container">
        <img src={bar} className="bars-image" alt="bar" />
        <div className="singles">
          {selectedBreweries ? selectedBreweries : <Loading />}
          {noResults && <p className='loading-message'>{noResults}</p>}
        </div>
      </div>
    </div>
  );
};

export default BreweriesContainer;
