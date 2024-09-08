import React from 'react';
import './Mywork.css';
import alt_img from './alt_img.png'; // Consider using a meaningful alt text
import My_work_data from '../../assets/My_word_data/My_work_data.js';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Mywork = () => {
  return (
    <div className='my-work'>
      <div className='my-work-heading'>
        <h1>My latest work</h1>
      </div>
      <div className='my-work-container'>
        {My_work_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={alt_img || 'My Work Image'}
            className='my-work-images'
          />
        ))}
      </div>
      <div className='my-work-show-more'>
        <p>Show More <ChevronRightIcon /></p>
      </div>
    </div>
  );
};

export default Mywork;
