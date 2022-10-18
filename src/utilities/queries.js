import { gql } from "@apollo/client";

export const GET_BREWERIES = gql`
  query breweries {
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
`;
