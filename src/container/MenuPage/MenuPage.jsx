import React, { useState } from 'react';
import FrokostMenu from './FrokostMenu';
import AftenMenu from './AftenMenu';
import Drinks from './Drinks';
import Footer from '../Footer/Footer';
import './MenuPage.css'; // Import your custom CSS for MenuPage styling

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState('frokost');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="menu-page">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-tabs">
        <button onClick={() => handleTabClick('frokost')} className={activeTab === 'frokost' ? 'active' : ''}>
          Frokostkort
        </button>
        <button onClick={() => handleTabClick('aften')} className={activeTab === 'aften' ? 'active' : ''}>
          Aftenkort
        </button>
        <button onClick={() => handleTabClick('drinks')} className={activeTab === 'drinks' ? 'active' : ''}>
          Drikkevare
        </button>
      </div>
      <div className="menu-content">
        {activeTab === 'frokost' && <FrokostMenu />}
        {activeTab === 'aften' && <AftenMenu />}
        {activeTab === 'drinks' && <Drinks />}
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
