import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MaltFinderContainer from "./components/MaltFinderContainer/MaltFinderContainer";
import BreweriesContainer from "./components/BreweriesContainer/BreweriesContainer";
import BeerListContainer from "./components/BeerListContainer/BeerListContainer";
import BreweryDetails from "./components/BreweryDetails/BreweryDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Switch, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BREWERIES } from "../../malt-matcher-FE/src/utilities/queries";
import { useEffect, useState } from "react";

function App() {
  let { data, loading, error } = useQuery(
    GET_BREWERIES
    // {
    // location: "Montrose, CO",
    // radius: "100",
    // }
  );
  // Possibly add a Loading component to show while breweries/beers are loading (Spinner animation, or simple h1 tag)...
  //if (loading) console.log("Loading...") && <Loading />;
  if (loading) console.log("Loading...");
  if (error) console.log("error!", error.message);

  console.log("DATA: ", data);

  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    if (!loading) {
      setBreweries(data.breweries);
    }
  }, [loading, data]);

  console.log("BREWERIES: ", breweries);

  return (
    <div className="App">
      <Link to="/">
        <NavBar />
      </Link>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route
          exact
          path="/maltFinder"
          render={() => <MaltFinderContainer />}
        />
        <Route
          exact
          path="/search/:breweryLocations"
          render={() => <BreweriesContainer breweries={breweries} />}
        />
        <Route
          exact
          path="/search/:breweryLocations/:selectedBrewery"
          render={() => <BeerListContainer />}
        />
        <Route
          exact
          path="/search/:breweryLocations/:selectedBrewery/details"
          render={() => <BreweryDetails />}
        />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
