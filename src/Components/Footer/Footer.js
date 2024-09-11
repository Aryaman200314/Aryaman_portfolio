import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import PersonIcon from '@mui/icons-material/Person';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img className='footer-logo-img' src={logo} />
                    <p>This is the right side of the footer</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <PersonIcon/>
                        <input type='email' placeholder='Enter your email'></input>
                    </div>
                    <div className='footer-subscribe'>Subscribe</div>
                </div>
            </div>

            <hr/>
            <div className='footer-bottom'>
                <p className='footer-botttom-left'><CopyrightIcon/> 2024 Aryaman Sharma. All rights reserved</p>
                <div className='footer-bottom-right'>
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>

    )
}

export default Footer