import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuItemClick = () => {
    setToggleMenu(false);
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='/'><img src={images.logoMexico} alt='app logo' /></a>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans2'><a href='#home'>HJEM</a> </li>
        <li className='p__opensans2'><a href='#about'>OM</a> </li>
        <li className='p__opensans2'><a href='#menu'>MENU</a> </li>
        <li className='p__opensans2'><a href='#contact'>KONTAKT</a> </li>
      </ul>

      <div className='app__navbar-login'>
        <a href='#bookBord' className='p__opensans2'> BOOK BORD</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans2'><a href='#home' onClick={handleMenuItemClick}>HJEM</a> </li>
              <li className='p__opensans2'><a href='#about' onClick={handleMenuItemClick}>OM</a> </li>
              <li className='p__opensans2'><a href='#menu' onClick={handleMenuItemClick}>MENU</a> </li>
              <li className='p__opensans2'><a href='#contact' onClick={handleMenuItemClick}>KONTAKT</a> </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
