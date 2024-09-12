import React from 'react'
import './Myself.css'
import myself from '../../assets/myself.jpg'
import user_alt from '../../assets/user_alt.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Myself() {
  return (
   <div id='home' className='my-self'>
    <img className='my-self-img' src= {myself} alt={user_alt} />
    <h1><span>I'am Aryaman sharma,</span> software devloper based in india.</h1>
    <p>Pursuing CSE @LPU | C++ | HTML | CSS | Javascript | React.js | Git | Docker | AWS </p>
    <div className='my-self-btns'>
        <div className='connect-btn'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='my-resume'>My Resume</div>
    </div>
   </div>
  )
}

export default Myself