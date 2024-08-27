import React from 'react';
import './Services.css';
import Services_Data from '../../assets/Services_data.js';
import arrow_icon from '../../assets/arrow-icon.png';

function Services() {
  return (
    <div className='services'>
        <div className='services-title'>
            <h1>My Services</h1>
            {/* <img src='' alt=''/> */}
        </div>
        <div className='services-container'>
            {Services_Data.map((service, index) => {
                return 
                  <div key={index} className='services-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <img src={arrow_icon} alt='Arrow Icon'/>
                    </div>
                  </div>
            })}
        </div>
    </div>
  );
}

export default Services;
