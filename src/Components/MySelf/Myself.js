import React from 'react'
import './Myself.css'
import myself from '../../assets/myself.png'
import user_alt from '../../assets/user_alt.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Myself() {
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1nZJXXdiT1cNbnDGGZqUhh8c91REZlkUi/view?usp=sharing', '_blank'); 
  };
  return (
   <div id='home' className='my-self'>
    <img className='my-self-img' src= {myself} alt={user_alt} />
    <h1><span>I'am Aryaman sharma,</span> software devloper based in india.</h1>
    <div className='my-self-btns'>
        <div className='connect-btn'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <button onClick={openResume} className='my-resume'>My Resume</button>
    </div>
   </div>
  )
}

export default Myself