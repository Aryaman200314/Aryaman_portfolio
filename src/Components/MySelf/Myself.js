import React from 'react'
import './Myself.css'
import myself from '../../assets/myself.jpg'
function Myself() {
  return (
   <div className='my-self'>
    <img className='my-self-img' src= {myself} alt='' />
    <h1><span>I'am Aryaman sharma,</span> software devloper based in india.</h1>
    <p>Pursuing CSE @LPU | C++ | HTML | CSS | Javascript | React.js | Git | Docker | AWS </p>
    <div className='my-self-btns'>
        <div className='connect-btn'>Connect with me</div>
        <div className='my-resume'>My Resume</div>
    </div>
   </div>
  )
}

export default Myself