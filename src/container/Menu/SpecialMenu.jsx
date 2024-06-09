import React, { useState } from 'react';
import { images } from '../../constants';
import './SpecialMenu.css';
import AftenMenu from '../MenuPage/AftenMenu';
import FrokostMenu from '../MenuPage/FrokostMenu';
import Drinks from '../MenuPage/Drinks';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SpecialMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalType) => {
    setCurrentModal(modalType);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentModal(null);
  };

  return (
    <div className='app__bg3 app__wrapper section__padding' id='menu'>
      <div className='app__wrapper_info'>
        <h1 className='headtext__cormorant'>MenuKort</h1>
        <p className='p__opensans2' style={{ margin: '10rem 0' }}>
          Oplev ægte mexicansk smag hos vores steakhouse.<br />
          Saftige bøffer, krydret krydderier, autentiske retter.<br />
          Se vores menukort her<br />
       
        </p>
        <div className='button-container'>
          <button className='custom__button' onClick={() => openModal('AftenMenu')}>Aften Menu</button>
          <button className='custom__button' onClick={() => openModal('FrokostMenu')}>Frokost Menu</button>
          <button className='custom__button' onClick={() => openModal('Drinks')}>Drikkevare</button>
        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.madImage} alt='header img' />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Menu Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {currentModal === 'AftenMenu' && <AftenMenu closeModal={closeModal} />}
        {currentModal === 'FrokostMenu' && <FrokostMenu closeModal={closeModal} />}
        {currentModal === 'Drinks' && <Drinks closeModal={closeModal} />}
      </Modal>
    </div>
  );
};

export default SpecialMenu;
