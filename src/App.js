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
  // let { data, loading, error } = useQuery(
  let { data } = useQuery(
    GET_BREWERIES
    // {
    // location: "Montrose, CO",
    // radius: "100",
    // }
  );

  // const { data } = useQuery(GET_BREWERIES, {
	// 	variables: {
	// 		location: location,
	// 	}
	// })

  // Possibly add a Loading component to show while breweries/beers are loading (Spinner animation, or simple h1 tag)...
  // if (loading) console.log("Loading...") && <Loading />;
  // if (loading) console.log("Loading...");
  // if (error) console.log("error!", error.message);

  // console.log("DATA: ", data);

  const [breweries, setBreweries] = useState([]);
  const [singleBrewery, setSingleBrewery] = useState([]);

  const displaySingleBrewery = (selectedBrewery) => {
    const breweryPick = data.breweries.find((brewery) => brewery.catalogBreweryId === selectedBrewery);
    console.log("BREWERYPICK", breweryPick)
    setSingleBrewery(breweryPick);
  };

  // useEffect(() => {
  //   if (!loading) {
  //     setBreweries(displayBreweries);
  //   }
  // }, [loading, data]);

  // console.log("BREWERIES: ", breweries);
  
  const displayBreweries = (city) => {
    let filteredBreweries = data.breweries.filter(
      (brewery) => brewery.address.includes(city)
      );
      console.log('CITY: ', city);
    setBreweries(filteredBreweries);
    console.log("FILTERED BREWERIES: ", filteredBreweries)
  };


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
          // render={() => data && <MaltFinderContainer breweryData={data.breweries} />}
          render={() => <MaltFinderContainer displayBreweries={displayBreweries}/>}
        />
        <Route
          exact
          path="/foo"
          // render={() => data && <BreweriesContainer breweryData={data.breweries} />}
          render={() => data && <BreweriesContainer breweries={breweries} displaySingleBrewery={displaySingleBrewery}/>}
        />
        <Route
          exact
          path="/search/:breweryLocations/:selectedBrewery"
          render={() => <BeerListContainer />}
        />
        <Route
          exact
          path="/foos"
          // path='/:breweryLocations/:selectedBrewery/details'
          render={() => data && <BreweryDetails singleBrewery={singleBrewery}/>}
        />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
