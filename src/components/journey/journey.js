import React from 'react';
import './journey.css';
import { GoDot } from "react-icons/go";
import image  from "../../assets/wagon.png";
import garden from "../../assets/gardenease-favicon.ico";
import skate from "../../assets/mouse.png";

const Journey  = () => {
  return (
    <div className="parcours">
      <div className="line">
        <div className="step" id="wagon"><GoDot /></div>
      </div>
      <div className="bootcamp">
        <div><img className= "wagon"src={image} alt="Le Wagon"></img></div>
        <div>
          <h2>Bootcamp at Le Wagon</h2>
          <p>Oct. 2024 - Dec. 2024</p>
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
