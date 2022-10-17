import './App.css';

import NavBar from './components/NavBar/NavBar';
import MaltFinderContainer from './components/MaltFinderContainer/MaltFinderContainer';
import BreweriesContainer from './components/BreweriesContainer/BreweriesContainer';
import BeerListContainer from './components/BeerListContainer/BeerListContainer';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage'
import LandingPage from './components/LandingPage/LandingPage'
import {Route, Switch, Link} from 'react-router-dom';

import AboutUs from './components/AboutUs/AboutUs'


function App() {
  return (
    <div className="App">
      <Link to='/'><NavBar /></Link>
       <Switch>
        <Route exact path='/' render={() => <LandingPage/>}/>
        <Route exact path='/maltFinder' render={() => <MaltFinderContainer/>}/>
        <Route exact path='/search/:breweryLocations' render={() => <BreweriesContainer/>}/>
        <Route exact path='/search/:breweryLocations/:selectedBrewery' render={() => <BeerListContainer/>}/>
        <Route exact path='/search/:breweryLocations/:selectedBrewery/details' render={() => <BreweryDetails/>}/>
        <Route render={() => <ErrorPage/>}/>
      </Switch>
      // <AboutUs />
      /* <Footer /> */
    </div>
  );
}

export default App;
