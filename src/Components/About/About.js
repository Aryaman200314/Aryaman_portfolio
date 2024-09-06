import React from 'react'
import './About.css'
import myself from '../../assets/myself.jpg'
import user_alt from '../../assets/user_alt.png'
function About() {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <hr className='about-title-hr' style={{ width: "100%" }} />
                <img src='' alt='' />
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img className='about-page-my-image' src={myself} alt={user_alt} />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I'm a passionate computer science student specializing in web development, with experience in React and cloud technologies, continuously seeking growth and innovation.</p>
                        <p>I’ve built dynamic applications, explored Docker and microservices, and I'm eager to contribute my skills to challenging projects in tech-driven environments.</p>
                    </div>

                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>React JS</p><hr style={{ width: "40%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p><hr style={{ width: "45%" }} /></div>
                        <div className='about-skill'><p>C++ with DSA</p><hr style={{ width: "60%" }} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h2>Completed MERN Certification:</h2>
                    <p>Successfully earned a MERN stack certification from Cipher Schools.</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h2>Mastered DSA:</h2>
                    <p>Completed an advanced bootcamp on DSA in C++, enhancing problem-solving skills.</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h2>5+</h2>
                    <p>Projects Completed.</p>
                </div>
            </div>
        </div>
    )
}

export default About