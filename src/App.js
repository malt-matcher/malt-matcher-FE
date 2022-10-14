import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MaltFinderContainer from './components/MaltFinderContainer/MaltFinderContainer';
import BreweryLocationContainer from './components/BreweryLocationContainer/BreweryLocationContainer';
import BeerListContainer from './components/BeerListContainer/BeerListContainer';
import BreweryDetails from './components/BreweryDetails/BreweryDetails';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
