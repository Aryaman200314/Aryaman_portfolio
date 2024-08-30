import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar() {
  function ModeButton(){
    console.log('Mode')
    setMode(!mode)
  }
  //First button is on light mode using true after then pressing it will bocome false and turn the button to dark mode  
  const [mode , setMode] = useState(true)
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
     {mode ? <LightModeIcon fontSize='large' onClick={ModeButton}/> : <NightlightRoundIcon fontSize='large' onClick={ModeButton}/>}
    </div>
  )
}

export default Navbar