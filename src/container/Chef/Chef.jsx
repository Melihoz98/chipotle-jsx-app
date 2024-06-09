import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { FiPhone } from 'react-icons/fi'; // Import the Phone icon

const Chef = () => {
  const handleButtonClick = () => {
    window.location.href = 'tel:+4555662800';
  };

  return (
    <div className='app__bg2 app__wrapper section__padding' id='chef'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.insideImage} alt='chef' />
      </div>
      <div className='app__wrapper_info'>
        <h1 className='headtext__cormorant'>Vi glæder os til at se jer!</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <p className='p__opensans2'> Der plads til alle slags selskab</p>
          </div>
          <p className='p__opensans2'>
            Ring og bestil bord.  vi sørger for resten  
            <button type='button' className='custom__button' onClick={handleButtonClick}>
              <FiPhone size={18} style={{ marginRight: 8 }} /> Bestil bord
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chef;
