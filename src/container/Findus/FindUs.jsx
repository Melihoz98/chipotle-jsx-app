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
      <img src={images.restaurantFront} alt='findus' />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4530.586786825967!2d11.350445377391381!3d55.40523337295752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464d617cdcf95555%3A0xd3d716ed4486a0bb!2sJernbanegade%203%2C%204200%20Slagelse!5e0!3m2!1sda!2sdk!4v1717534055906!5m2!1sda!2sdk" width="300" height="200" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
);

export default FindUs;
