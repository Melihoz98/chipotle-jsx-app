import React, { useState } from 'react';
import Modal from 'react-modal';
import { images } from '../../constants';
import './SpecialMenu.css';

Modal.setAppElement('#root'); // Set your root element for accessibility

const SpecialMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const openModal = (images) => {
    setModalImages(images);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImages([]);
  };

  return (
    <div className='app__bg3 app__wrapper section__padding' id='menu'>
      <div className='app__wrapper_info'>
        <h1 className='headtext__cormorant'>MenuKort</h1>
        <p className='p__opensans3' style={{ margin: '10rem 0' }}>
          Oplev ægte mexicansk smag hos vores steakhouse.<br />
          Saftige bøffer, krydret krydderier, autentiske retter.<br />
          Prøv vores tacos, quesadillas og burritos.<br />
          Velkommen til en smagsrejse!<br />
        </p>
        <button type='button' className='custom__button' onClick={() => openModal([images.aftenKort1, images.aftenKort2])}>Aften Kort</button>
      </div>
      <div className='app__wrapper_info'>
        <p className='p__opensans3' style={{ margin: '2rem 0' }}>
          Oplev ægte mexicansk smag hos vores steakhouse.<br />
          Saftige bøffer, krydret krydderier, autentiske retter.<br />
          Prøv vores tacos, quesadillas og burritos.<br />
          Velkommen til en smagsrejse!<br />
        </p>
        <button type='button' className='custom__button' onClick={() => openModal([images.lunchMenu])}>Frokost Kort</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.steakChipotle} alt='header img' />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Menu Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        {modalImages.map((image, index) => (
          <img key={index} src={image} alt={`Menu ${index + 1}`} className="modal-image" />
        ))}
      </Modal>
    </div>
  );
};

export default SpecialMenu;
