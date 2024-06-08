import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import MenuPage from './container/MenuPage/MenuPage';
import AftenMenu from './container/MenuPage/AftenMenu';

const App = () => (

    <div>
      <Navbar />
      
      
            <Header />
            <AboutUs />
            
            <SpecialMenu />
            <Chef />
            <Gallery />
            <FindUs />
            <Footer />
     
    
       
    </div> 
 
);

export default App;
