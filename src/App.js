import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MaltFinderContainer from "./components/MaltFinderContainer/MaltFinderContainer";
import BreweriesContainer from "./components/BreweriesContainer/BreweriesContainer";
import BeerListContainer from "./components/BeerListContainer/BeerListContainer";
import BreweryDetails from "./components/BreweryDetails/BreweryDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [style, setStyle] = useState("");
  const [beers, setBeers] = useState([]);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route
          exact
          path="/maltFinder"
          render={() => (
            <MaltFinderContainer
              location={location}
              radius={radius}
              style={style}
              setLocation={setLocation}
              setRadius={setRadius}
              setStyle={setStyle}
            />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <BreweriesContainer
              location={location}
              radius={radius}
              style={style}
              setBeers={setBeers}
              setAddress={setAddress}
              setName={setName}
            />
          )}
        />
        <Route
          exact
          path="/search/:selectedBrewery"
          render={() => (
            <BeerListContainer
              beerList={beers}
              name={name}
              setLocation={setLocation}
              setRadius={setRadius}
              setStyle={setStyle}
            />
          )}
        />
        <Route
          exact
          // path="/details"
          path="/details"
          render={() => <BreweryDetails name={name} address={address} />}
        />
        <Route
          exact
          path="/about"
          // path='/:breweryLocations/:selectedBrewery/details'
          render={() => <AboutUs />}
        />
        <Route exact path="*" render={() => <ErrorPage />} />
      </Switch>
    </div>
  );
}

export default App;
