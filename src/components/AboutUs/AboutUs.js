import "./AboutUs.css";
import bar from "../../assets/bar.jpg";
import Andrew from "../../assets/andrew.jpeg";
import Bryan from "../../assets/bryan.jpg";
import Bryce from "../../assets/bryce.jpeg";
import Cole from "../../assets/cole.jpeg";
import Jordan from "../../assets/jordan.jpeg";
import Parker from "../../assets/parker.jpeg";
import Thiago from "../../assets/thiago.jpeg";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={bar} className="image" alt="bar"/>
      </div>
      <h1 className="about-text">
        Malt Matcher is the brain-child of Cole Stephenson, where a group of 7
        developers both collaborated on, and spearheaded different ends of the
        development process to create an app that centers around something we
        are all passionate about: BEER!
        <br></br>
        <br></br>
        We worked with the React Framework on the Front-End and Ruby on Rails on
        the Back-End, and on both sides, we implemented GraphQL to create this
        app to find the breweries that carried our our brew of choice.
        <br></br>
        <br></br>
        We hope you enjoy our app while you’re here! Please feel free to reach
        out to any of us!
        <br></br>
        Thanks for looking!
      </h1>
      <h2 className="developers">The Developers</h2>
      <div className="team-container">
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Andrew Miller<br></br>( FE )</p>
            <img src={Andrew} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/andrew-miller-0393b448/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/andrewmiller45">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Bryan Shears<br></br>( BE )</p>
            <img src={Bryan} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/bryan-shears/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/b-shears">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Bryce Simonds<br></br>( BE )</p>
            <img src={Bryce} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/bryce-simonds/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/brycesimonds">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Cole Stephenson<br></br>( FE )</p>
            <img src={Cole} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/cole-stephenson-99688a240/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/colestephenson1">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Jordan Farelli<br></br>( FE )</p>
            <img src={Jordan} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/jordan-farelli/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/jfarelli">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Parker Thompson<br></br>( BE )</p>
            <img src={Parker} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/parker-thomson-a15a68146/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/pdthomson">
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <p className="name">Thiago Silveira<br></br>( BE )</p>
            <img src={Thiago} alt="profile" className="profile"/>
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              href="https://www.linkedin.com/in/thiag-o/"
            >
              <AiFillLinkedin />
            </a>
            <a className="githubAnchor" href="https://github.com/tig-o">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
