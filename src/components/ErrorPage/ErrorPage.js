import "./ErrorPage.css";
import React from "react";
import {Link} from 'react-router-dom'
import spilled from "../../assets/spilled.jpeg";


const ErrorPage = () => {
  return (
    <div className="error-container">
      <h2>Party Foul! Invalid URL. Please click button below to return home.</h2>
      <div className="img-container">
        <img src={spilled} className="spilled-image" alt='spilled-beer' />
      </div>
      <Link to='/'><button className='home-button'>Home</button></Link>
    </div>
  )
};

export default ErrorPage;
