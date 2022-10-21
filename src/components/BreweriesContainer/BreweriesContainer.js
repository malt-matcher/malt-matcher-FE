import "./BreweriesContainer.css";
import bar from "../../assets/bar.jpg";
import SingleBrewery from "../SingleBrewery/SingleBrewery";
import Loading from "../Loading/Loading";
import { useQuery, gql } from "@apollo/client";

const BreweriesContainer = ({ location, radius, style }) => {

    let selectedBreweries

    console.log(location, radius, style)

    const GET_BREWERIES = gql`
      query breweries($location: String! $radius: String! $style: String!) {
        breweries(location: $location radius: $radius style: $style) {
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

    const { data } = useQuery(GET_BREWERIES, {
      variables: {
        location: location,
        radius: radius,
        style: style
      }
    });

    if(data) {
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
            />
          );
        });
    } else {
      console.log('Loading')
    }

  return (
    <div className="breweries-container">
      <div className="bars-image-container">
        <img src={bar} className="bars-image" alt="bar" />
        <div className="singles">{selectedBreweries ?  selectedBreweries : <Loading />}</div>
      </div>
    </div>
  );
};

export default BreweriesContainer;
