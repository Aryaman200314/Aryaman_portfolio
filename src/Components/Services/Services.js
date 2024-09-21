import React from 'react';
import './Services.css';
import Services_Data from '../../assets/Services_data.js';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function Services() {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1>My Skills</h1>
            <hr className='services-title-hr'/>
        </div>
        <div className='services-container'>
            {Services_Data.map((service, index) => {
                return (
                  <div key={index} className='services-format'>
                    <h2>{service.s_no}</h2>
                    <hr />
                    <h3>{service.s_name}</h3>
                    <p>{service.s_desc}</p>
                    <div className='services-readmore'>
                        <p>Read More</p>
                        <ChevronRightIcon fontSize='medium' />
                    </div>
                  </div>
                )
            })}
        </div>
    </div>
  );
}

export default Services;
