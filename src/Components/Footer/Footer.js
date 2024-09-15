import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img className='footer-logo-img' src={logo} />
                    <p>Made with ❤️ by Aryaman Sharma</p>
                </div>
                <div className='footer-top-right'>
                    <p>Source code at </p> 
                    <GitHubIcon fontSize='large' className='github' onClick={() => window.open('https://github.com/Aryaman200314/Aryaman_portfolio', '_blank')}/>
                    
                       
                </div>
            </div>
            <div className='footer-connect-info'>Connect with me at 
                <hr className='footer-hr'/>
                <div className='footer-container-social'>
                <LinkedInIcon fontSize='large' className='linkedin'onClick={() => window.open('https://www.linkedin.com/in/aryaman-sharma-07a233233/', '_blank')}/>
                <InstagramIcon fontSize='large' className='instagram' onClick={() => window.open('https://www.instagram.com/aryam.n14/', '_blank')}/>
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