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

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="img-container">
        <img src={bar} className="barback-image" alt="bar" />
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
        We hope you enjoy our app while you’re here! <br></br>Please feel free
        to reach out to any of us!
        <br></br>
        <br></br>
        Cheers!
      </h1>
      <h2 className="developers">The Developers</h2>
      <div className="team-container">
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Andrew Miller</p>
              <p className="what-end">( FE )</p>
            </div>
            <img src={Andrew} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andrew-miller-0393b448/"
              aria-label="Andrew Miller LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/andrewmiller45"
              aria-label="Andrew Miller GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Bryan Shears</p>
              <p className="what-end">( BE )</p>
            </div>
            <img src={Bryan} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/bryan-shears/"
              aria-label="Bryan Shears LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/b-shears"
              aria-label="Bryan Shears GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Bryce Simonds</p>
              <p className="what-end">( BE )</p>
            </div>
            <img src={Bryce} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/bryce-simonds/"
              aria-label="Bryce Simonds LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/brycesimonds"
              aria-label="Bryce Simonds GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Cole Stephenson</p>
              <p className="what-end">( FE )</p>
            </div>
            <img src={Cole} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/cole-stephenson-99688a240/"
              aria-label="Cole Stephenson LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/colestephenson1"
              aria-label="Cole Stephenson GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Jordan Farelli</p>
              <p className="what-end">( FE )</p>
            </div>
            <img src={Jordan} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jordan-farelli/"
              aria-label="Jordan Farelli LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jfarelli"
              aria-label="Jordan Farelli GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Parker David Thompson</p>
              <p className="what-end">( BE )</p>
            </div>
            <img src={Parker} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/parker-thomson-a15a68146/"
              aria-label="Parker David Thompson LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pdthomson"
              aria-label="Parker David Thompson GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="member-container">
          <div className="name-and-picture-container">
            <div className="name-what-end-container">
              <p className="name">Thiago Silveira</p>
              <p className="what-end">( BE )</p>
            </div>
            <img src={Thiago} alt="profile" className="profile" />
          </div>
          <div className="linkedin-and-github">
            <a
              className="linkedinAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/thiag-o/"
              aria-label="Thiago Silveira LinkedIn Website"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="githubAnchor"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/tig-o"
              aria-label="Thiago Silveira GitHub Website"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
