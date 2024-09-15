import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
  const [menu, setMenu] =  useState("home");
  const menuRef = useRef();
  const openMenu = () =>{
    menuRef.current.style.right = "0px"
  }
  
  const closeMenu = () =>{
    menuRef.current.style.right = "-350px"
  }
  function ModeButton(){
    console.log('Mode')
    setMode(!mode)
  }
  //First button is on light mode using true after then pressing it will bocome false and turn the button to dark mode  
  const [mode , setMode] = useState(true)
  return (
    
    <div className='navbar'>
      <img className="nav-logo-img"  src={logo} alt=''/>
      {/* <MenuIcon className='nav-mob-open' onClick={openMenu}/> */}
      <ul ref={menuRef} className='nav-menu'>
        {/* <CloseIcon onClick={closeMenu} className='nav-mob-close'/> */}
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<hr/> : <></>}</li>
        <li><AnchorLink className='anchor-link ' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<hr/> : <></>}</li>
        <li><AnchorLink className='anchor-link ' offset={50} href='#services'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink>{menu==="skills"?<hr/> : <></>}</li>
        <li><AnchorLink className='anchor-link ' offset={50} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"?<hr/> : <></>}</li>
        <li><AnchorLink className='anchor-link ' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<hr/> : <></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link ' offset={50} href='#contact'>Contact With Me</AnchorLink></div>
     {mode ? <LightModeIcon fontSize='large' onClick={ModeButton}/> : <NightlightRoundIcon fontSize='large' onClick={ModeButton}/>}
    </div>
  )
}

export default Navbar