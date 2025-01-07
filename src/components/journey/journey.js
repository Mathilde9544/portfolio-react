import React from 'react';
import { useState } from 'react';
import './journey.css';
import { Link } from "react-router-dom";
import { GoDot } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import image  from "../../assets/wagon.png";
import garden from "../../assets/gardenease-favicon.ico";
import skate from "../../assets/mouse.png";

const Journey  = () => {
  const [visibleProject, setVisibleProject] = useState(null);

  const handleAboutClick = (project) => {
    setVisibleProject(visibleProject === project ? null : project);
  };

  return (
    <div className="parcours">
      <div className="line">
        <div className="arrow"><IoIosArrowUp /></div>
        <div className="step" id="wagon"><GoDot /></div>
      </div>
      <div className="bootcamp">
        <div className="bootcamp-title">
          <div><img className= "wagon"src={image} alt="Le Wagon"></img></div>
          <div>
            <h2>Web development<br/>bootcamp at Le Wagon</h2>
            <p>Oct. 2024 - Dec. 2024</p>
          </div>
        </div>
        <div className="wagon-text">
          <p>Le Wagon in a 9-week long intensive web developement bootcamp.<br/>
          During these 9 weeks, I had the opportunity to learn coding languages like Ruby on Rails and JavaScript
          and work on different projects.<br/>
          Feel free to discover them!</p>
        </div>
      </div>


      <div className="projects">
        <h3 className="wagon-projects">My main projects at Le Wagon:</h3>
        <div className="project-cards">
          <div className="project-card">
            <Link to="/gardenease" className="project-link">
              <div className="project" id="gardenease-project">
                <img class="project-image" src={garden} alt="GardenEase"></img>
                <h3 className="project-title">GardenEase</h3>
              </div>
            </Link>
            <p className="project-info" onClick={() => handleAboutClick("gardenease")}>
              {visibleProject === "gardenease" ? "Hide" : "See description"}
            </p>
            {visibleProject === "gardenease" && (
            <div className="project-text" id="project-text-gardenease">
              <p>GardenEase is a website for people who would like
                to start gardening at their place, but don't know how to start.<br/>
                By understanding your preferences and home environment, GardenEase
                provides tailored gardening projects with step-by-step care advices.

                GardenEase was built during the 2 last weeks of the bootcamp.
              </p>
          </div>
        )}
          </div>

          <div className="project-card">
            <Link to="/" className="project-link">
              <div className="project" id="adventurex-project">
                <img className="project-image" id="mouse" src={skate} alt="Adventure Exchange"></img>
                <h3 className="project-title">Aventure Exchange</h3>
              </div>
            </Link>
            <p className="project-info" onClick={() => handleAboutClick("adventurex")}>
              {visibleProject === "adventurex" ? "Hide" : "See description"}
            </p>
          </div>
        </div>

        {visibleProject === "gardenease" && (
          <div className="project-text">
            <p>GardenEase is a website for people who would like
              to start gardening at their place, but don't know how to start.<br/>
              By understanding your preferences and home environment, GardenEase
              provides tailored gardening projects with step-by-step care advices.

              GardenEase was built during the 2 last weeks of the bootcamp.
            </p>
          </div>
        )}

        {visibleProject === "adventurex" && (
          <div className="project-text" id="project-text-adventurex">
            <p>Adventure Exchange is a mobile web App. The concept is similar to the
              AirBnB idea: it's a rental app. With Adventure Exchange, people could
              rent or offer to rent sports items.

              Adventure Exchange was built in 1 week and was my first project at Le Wagon.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Journey;
