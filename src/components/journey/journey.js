import React from 'react';
import './journey.css';
import { GoDot } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import image  from "../../assets/wagon.png";
import garden from "../../assets/gardenease-favicon.ico";
import skate from "../../assets/mouse.png";

const Journey  = () => {
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
          <div className="project">
            <img class="project-image" src={garden} alt="GardenEase"></img>
            <h3 className="project-title">GardenEase</h3>
          </div>
          <div className="project">
            <img className="project-image" id="mouse" src={skate} alt="Adventure Exchange"></img>
            <h3 className="project-title">Aventure Exchange</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Journey;
