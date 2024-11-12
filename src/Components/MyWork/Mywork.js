import React from 'react';
import './Mywork.css';
import Myproject from '../../assets/My_word_data/Myproject.js';

const Mywork = () => {
  const a = "https://inconvenience-page.vercel.app/";

  return (
    <div id='projects' className='my-work'>
      <div className='my-work-heading'>
        <h1>My latest work</h1>
        <hr className='hr' />
      </div>
      <div className='projects-container'>
        {Myproject.map((projects, index) => {
          return ( // Added return statement here
            <div key={index} className='projects-format'>
              <h2>{projects.w_no}</h2>
              <h3>{projects.w_name}</h3>
              <p>{projects.w_desc}</p>
              <hr />
              <div className='img-container-my-work'>
                <img src={projects.w_img} alt='Images coming soon' className='my-work-images' />
              </div>
              <div className='services-readmore'>
                <a className="webpage-link" href={projects.w_links ? projects.w_links : a} target="_blank" rel="noreferrer">Link to the Website</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mywork;
