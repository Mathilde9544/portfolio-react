import React from 'react';
import { Link } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="name">Mathilde Renaud</Link>
      <div className="navbarText">
        <div className="menu">
          <p className="menuItem">About</p>
          <Link to="/resume" className="menuItem">Resume</Link>
        </div>
        <button className="contact">Contact me!</button>
        <p className="message"><LuMessageCircle /></p>
      </div>
    </nav>
  )
}

export default Navbar;
