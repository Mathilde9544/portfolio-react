import React from "react";
import "./gardenease.css"
import gardeneaseHome from "../assets/gardenease-home.png";
import gardeneaseHomeMobile from "../assets/gardenease-home-mobile.png";


function GardenEase() {
  return (
    <div className="gardenease-project">
      <div className="gardenease-presentation">
        <h1>GardenEase</h1>
        <p>GardenEase is a website for people who would like
          to start gardening at their place, but don't know how to start.<br/>
          By understanding your preferences and home environment, GardenEase
          provides tailored gardening projects with step-by-step care advices.<br/>
          GardenEase was built during the 2 last weeks of the bootcamp.
        </p>
        <a className="ge-desktop" href="http://www.gardenease.io" target="_blank" rel="noreferrer"><img className="gardenease-home" src={gardeneaseHome} alt="gardenease"></img></a>
        <a className="ge-mobile" href="http://www.gardenease.io" target="_blank" rel="noreferrer"><img className="gardenease-home-mobile" src={gardeneaseHomeMobile} alt="gardenease"></img></a>
      </div>
    </div>
  );
}

export default GardenEase;
