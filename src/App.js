import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MaltFinderContainer from "./components/MaltFinderContainer/MaltFinderContainer";
import BreweriesContainer from "./components/BreweriesContainer/BreweriesContainer";
import BeerListContainer from "./components/BeerListContainer/BeerListContainer";
import BreweryDetails from "./components/BreweryDetails/BreweryDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LandingPage from "./components/LandingPage/LandingPage";
import { Route, Switch, Link } from "react-router-dom";
import { useState } from "react";



function App() {

  // Possibly add a Loading component to show while breweries/beers are loading (Spinner animation, or simple h1 tag)...
  // if (loading) console.log("Loading...") && <Loading />;
  // if (loading) console.log("Loading...");
  // if (error) console.log("error!", error.message);


  const [location, setLocation] = useState('');
  const [radius, setRadius] = useState('');
  const [style, setStyle] = useState('');

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
          render={() => <MaltFinderContainer setLocation={setLocation} setRadius={setRadius} setStyle={setStyle}/>}
        />
        <Route
          exact
          path="/search"
          render={() => <BreweriesContainer location={location} radius={radius} style={style}/>}
        />
        <Route
          exact
          path="/search/:selectedBrewery"
          render={() => <BeerListContainer />}
        />
        <Route
          exact
          path="/foos"
          // path='/:breweryLocations/:selectedBrewery/details'
          render={() => <BreweryDetails/>}
        />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
