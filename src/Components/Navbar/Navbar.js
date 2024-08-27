import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
function Navbar() {
  return (
    <div className='navbar'>
      <img className="nav-logo-img"src={logo} alt=''/>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className='nav-connect'>Contact With Me</div>
    </div>
  )
}

export default Navbar