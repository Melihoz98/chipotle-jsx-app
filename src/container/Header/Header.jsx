import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
   <div className='app__wrapper_info'>
<SubHeading title=''/>
<h1 className='app__header-h1'> Smagsoplevelser fra Mexico

</h1>
<p className='p__opensans' style={{margin: '2rem 0'}}>vildt lækker mexikans mad her hos os i slagelse! kom</p>
    <button type='button' className='custom__button'>Se vores Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.steakChipotle} alt='header img' />

    </div>
  </div>
);

export default Header;
