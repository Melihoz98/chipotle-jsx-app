import React, { useState } from 'react';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

import images from '../../constants/images';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);


  return (

 <nav className='app__navbar'>
<div className='app__navbar-logo'>
<img src={images.logoMexico} alt='app logo' />
</div>
<ul className='app__navbar-links'>
  <li className='p__opensans'><a href='#home'>HJEM</a> </li>
  <li className='p__opensans'><a href='#about'>OM</a> </li>
  <li className='p__opensans'><a href='#menu'>MENU</a> </li>
  <li className='p__opensans'><a href='#contact'>KONTAKT</a> </li>
</ul>

<div className='app__navbar-login'>
  <a href='#bookBord' className='p__opensans'> BOOK BORD</a>
</div>
<div className='app__navbar-smallscreen'>
  <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true) } />


{toggleMenu && (

<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
<MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
  <ul className='app__navbar-smallscreen_links'>
  <li className='p__opensans'><a href='#home'>HJEM</a> </li>
  <li className='p__opensans'><a href='#about'>OM</a> </li>
  <li className='p__opensans'><a href='#menu'>MENU</a> </li>
  <li className='p__opensans'><a href='#contact'>KONTAKT</a> </li>
</ul>
</div>
)}

</div>
 </nav>
 )
}

export default Navbar;
