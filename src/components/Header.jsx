import React from 'react';
import './Header.css';
import {GiHambugerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import ImageLogo from '../images/navbar-logo.png';
const Header = () => {
  return (
    <nav className='app_navbar'>
<div className='app_navbar-logo'>
    <img src={ImageLogo} alt='app logo'/>
</div>
<ul className='app_navbar-links'>
    <li className='p_opensans'><a href="#home">Hjem</a></li>
    <li className='p_opensans'><a href="#home">Om</a></li>
    <li className='p_opensans'><a href="#home">Menu</a></li>
    <li className='p_opensans'><a href="#home">Kontakt</a></li>
    <li className='p_opensans'><a href="#home">Andet</a></li>
</ul>



<div className='app_navbar-smallscreen'>
    <GiHambugerMenu color='#fff' fontsize={27}
    onclick={() => {} } />

<div className='app_navbar-smallscreen flex_center slide-bottom'>
<MdOutlineRestaurantMenu fontSize={27} className='overlay_close'
onClick={() => {}} />
</div>

<ul className='app_navbar-smallscreen-links'>
    <li className='p_opensans'><a href="#home">Hjem</a></li>
    <li className='p_opensans'><a href="#home">Om</a></li>
    <li className='p_opensans'><a href="#home">Menu</a></li>
    <li className='p_opensans'><a href="#home">Kontakt</a></li>
    <li className='p_opensans'><a href="#home">Andet</a></li>
</ul>
</div>
    </nav>
  );
};

export default Header;
