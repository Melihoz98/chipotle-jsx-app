import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { images } from '../../constants';
import { FooterOverlay} from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
<h1 className='app__footer-headtext'> Kontakt os</h1>
<p className='p__opensans'>Jernbanegade 3</p>
<p className='p__opensans'>88888888</p>
      </div>
      <div className='app__footer-links_logo'>
<img  src={images.logoMexico} alt='footer_logo' />
<p className='p__opensans'>Byens bedste mexikansk mad</p>
<img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:15}} />
      <div className='app__footer-links_icons'>
<FiFacebook />
<img src={images.smileyIcon} alt='smiley' height='50' />
      </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'> Åbningstider</h1>
<p className='p__opensans'>Søndag - Torsdag  11:00 - 21:00</p>
<p className='p__opensans'>Fredag - Lørdag  11:00 - 22:00</p>
<div className='footer__copyright'>
  <p className='p__opensans'> 2024 Chipotle Mexican</p>
</div>
      </div>
    </div>
  </div>
);

export default Footer;
