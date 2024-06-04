import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
<SubHeading title='Contact' />
<h1 className='headtext__cormorant' style={{marginBottom: '3rem'}}>Find os</h1>
<div className='app__wrapper-content'>
  <p className='p__opensans'>Jernbanegade 3</p>
  <p className='p__opensans' style={{color: '#DCCA87', margin:'2rem 0'}}>Åbningstider</p>
  <p className='p__opensans'>Søndag - torsdag  11:00 - 21:00</p>
  <p className='p__opensans'>Fredag - Lørdag  11:00 - 22:00</p>
</div>
<button className='custom__button' style={{marginTop: '2rem'}}>Find os nu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus' />
    </div>
  </div>
);

export default FindUs;
