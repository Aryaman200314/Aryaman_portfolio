import React from 'react';
import './Mywork.css';
import Myproject from '../../assets/My_word_data/Myproject.js'
const Mywork = () => {
  return (
    <div id='projects' className='my-work'>
      <div className='my-work-heading'>
        <h1>My latest work</h1>
        <hr className='hr' />
      </div>
      <div className='projects-container'>
        {Myproject.map((projects, index) => {
          return (
            <div key={index} className='projects-format'>
              <h2>{projects.w_no}</h2>
              <h3>{projects.w_name}</h3>
              <p>{projects.w_desc}</p>
              <hr />
              <img src={projects.w_img} alt='Images coming soon' className='my-work-images' />
              
              <div className='services-readmore'>
                <p className='webpage-link'>Link to Website</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Mywork;
