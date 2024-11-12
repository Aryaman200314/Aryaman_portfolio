import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <img className="nav-logo-img" src={logo} alt="logo" />

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p>About Me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#skills">
            <p>Skills</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#projects">
            <p>Projects</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#contact">
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
