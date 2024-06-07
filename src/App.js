import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import MenuPage from './container/MenuPage/MenuPage';

const App = () => (
  <div>
    <Navbar />
    
    <Header />
   {/* <MenuPage />*/}
    <AboutUs />

  <SpecialMenu /> 
    <Chef />
    {/* <Intro /> */}
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
