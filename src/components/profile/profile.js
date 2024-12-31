import React from 'react';
import './profile.css';
import image  from "../../assets/profile.jpg";


const Profile = () => {
  return (
    <div className="profile">
      <div className="introText">
        <div className="hello">
          <p className="text">Hello, I'm a <br/> Web Developer</p>
          <div className="stacks">
            <p className="item">React</p>
            <p className="item">Ruby on Rails</p>
            <p className="item">JavaSript</p>
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
