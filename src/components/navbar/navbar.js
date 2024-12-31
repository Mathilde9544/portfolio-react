import React from 'react';
import { LuMessageCircle } from "react-icons/lu";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">Mathilde Renaud</div>
      <div className="navbarText">
        <div className="menu">
          <p className="menuItem">About</p>
          <p className="menuItem">Resume</p>
        </div>
        <button className="contact">Contact me!</button>
        <p className="message"><LuMessageCircle /></p>
      </div>
    </nav>
  )
}

export default Navbar;
