import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa'; // Import the smiley icon
import { images } from '../../constants';
import { FooterOverlay } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      
        <p className='p__opensans3'>Jernbanegade 3</p> <br></br>
        <p className='p__opensans3'> Slagelse 4200</p> <br></br>
        <p className='p__opensans3'>55 66 28 00</p>
      </div>
      <div className='app__footer-links_logo'>
      <div className='app__navbar-logo'>
        <a href='/'><img src={images.logoMexico} alt='app logo' /></a>
      </div>
        <p className='p__opensans2'>Byens bedste mexikansk mad</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <a href="/smileydocument.pdf" target="_blank" rel="noopener noreferrer">
            <FaRegSmile size={24} className='smiley__icon' />
          </a>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <p className='p__opensans3'>Søndag - Torsdag  11:00 - 21:00</p>
        <p className='p__opensans3'>Fredag - Lørdag  11:00 - 22:00</p>
        <div className='footer__copyright'>
          <p className='p__opensans3'> 2024 Chipotle Mexican</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
