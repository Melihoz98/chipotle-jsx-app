import React from 'react';

import './SpecialMenu.css';
import { SubHeading } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'> 
   <div className='app__specialMenu-title'>
    <SubHeading title= 'Menu til dig' />
    <h1 className='headtext__cormoroant'> Vores specialiteter</h1>

   </div>

<div className='app__specialMenu-menu'>
<div ></div>
</div>

  </div>
);

export default SpecialMenu;
