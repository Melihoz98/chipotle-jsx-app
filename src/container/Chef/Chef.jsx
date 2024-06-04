import React from 'react';

import './Chef.css';
import { images } from '../../constants'
import { SubHeading } from '../../components';
const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
    <img src={images.restaurantFront} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
<SubHeading title='Chefs word' />
<h1 className='headtext__cormorant'>
  hvad vi tror ppå
</h1>
<div className='app__chef-content'>
  <div className='app__chef-content_quote'>
    <img src={images.quote} alt='quote' />
    <p className='p__opensans'> vi har det bedste mad</p>
  </div>
  <p className='p__opensans'>
    meget god mad vi har
  </p>
</div>

<div className='app__chef-sign'>
  <p>Cengiz</p>
  <p className='p__opensans'>Chef and founder</p>
  <img src={images.sign} alt='sign' />
</div>

    </div>
  </div>
);

export default Chef;
