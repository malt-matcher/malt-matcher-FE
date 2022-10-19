import { gql } from "@apollo/client";

export const GET_BREWERIES = gql`
  query breweries($location: String!) {
    breweries(location: $location) {
      catalogBreweryId
      name
      address
      distanceFromUser
      website
      instagram
      facebook
      twitter
      breweryDescription
    }
  }
`;
