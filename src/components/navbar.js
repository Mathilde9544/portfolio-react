import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">Mathilde Renaud</div>
      <div className="menu">
        <link class="menuItem">About</link>
        <link class="menuItem">CV</link>
      </div>
      <button className="contact">Contact me!</button>
    </nav>
  )
}

export default Navbar;
