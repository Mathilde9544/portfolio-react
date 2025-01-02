import React from 'react';
import './profile.css';
import image  from "../../assets/profile.jpg";


const Profile = () => {
  return (
    <div className="profile">
      <div className="introText">
        <div className="hello">
          <h1 className="text">Hello, I'm a <br/> Web Developer</h1>
          <div className="stacks">
            <p className="item">React</p>
            <p className="item">Ruby on Rails</p>
            <p className="item">JavaScript</p>
            <p className="item">CSS</p>
            <p className="item">HTML</p>
          </div>
        </div>
      </div>
      <div className="introImage"><img className="image" src={image} alt="Mathilde Renaud"></img></div>
    </div>
  )
}

export default Profile;
