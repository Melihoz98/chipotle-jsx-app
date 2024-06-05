import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
   

    </div>
    <div className='app__aboutus-content flex__center'>
<div className='app__aboutus-content_about'>
<h1 className='headtext__cormorant'>Vi er beliggende i hjertet af Slagelse.</h1>
<img src={images.spoon} alt='about_spoon' className='spoon__img' />
<p className='p__opensans2'> vi serverer autentiske mexicanske retter lavet med friske råvarer og kærlighed.
 Oplev den livlige atmosfære, krydrede smagsoplevelser og varme gæstfrihed.
  Kom og nyd en uforglemmelig aften fyldt med mexicansk kultur og madglæde!</p>

</div>
<div className='app__aboutus-content_knife flex__center'>
<img src={images.knife} alt='about_knife' />
</div>


<div className='app__aboutus-content_history'>
<h1 className='headtext__cormorant'>Moderne Mexikansk Steakhouse</h1>
<img src={images.spoon} alt='about_spoon' className='spoon__img' />
<p className='p__opensans2'> Restauranten byder på en hyggelig indretning med en fusion af rustikke 
og moderne elementer.
Et besøg her lover en uforglemmelig kulinarisk rejse til Mexicos hjerte.</p>
<button type='button' className='custom__button'>Se vores Menu</button>
</div>


    </div>
  </div>
);

export default AboutUs;
