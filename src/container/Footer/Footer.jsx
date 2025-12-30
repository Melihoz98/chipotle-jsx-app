import React from 'react';
import { FiFacebook } from 'react-icons/fi';
// import { FaRegSmile } from 'react-icons/fa'; // Import the smiley icon
import { images } from '../../constants';
// import { FooterOverlay } from '../../components';
import { PiSmileyMeh } from "react-icons/pi";
import pdfFile from '../../assets/midsmileydoc.pdf'; // Adjust the path as necessary
import { PiSmileyLight } from "react-icons/pi";
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
      <h1 className='headtext__cormorant'> Addresse & Tlf</h1>
        <p className='p__opensans2'>Jernbanegade 3</p> <br></br>
        <p className='p__opensans2'>4200 Slagelse </p> <br></br>
        <p className='p__opensans2'>+45 55 66 28 00</p>
      </div>
      <div className='app__footer-links_logo'>
      <div className='app__navbar-logo'>
      </div>
     <div>

     </div>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: 15 }} />
        <div className='app__footer-links_icons'>
        <a href="https://www.facebook.com/profile.php?id=61559160222369" target="_blank" rel="noopener noreferrer">
            <FiFacebook size={24} />
          </a>
   <a
  href="https://www.findsmiley.dk/Sider/KontrolRapport.aspx?Virk6878475"
  target="_blank"
  rel="noopener noreferrer"
  className="smiley__link"
>
  <PiSmileyLight size={24} className="smiley__icon" />
</a>

        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='headtext__cormorant'>Åbningstider</h1>
        <p className='p__opensans2'>Søndag - Torsdag  11:00 - 21:00</p>
        <p className='p__opensans2'>Fredag - Lørdag  11:00 - 22:00</p>
        <div className='footer__copyright'>
          <p className='p__opensans2'> 2024 Chipotle Mexican</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
