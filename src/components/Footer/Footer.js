import React, { useState } from 'react';
import Modal from '../Modal';

import './footer.scss';

const Footer = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
        <footer className='footer'>
            <div className='footer__attribution'>
                Challenge by <a href='https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH' target='_blank'>Frontend Mentor</a>.
                 Coded by <a href='#'>Kamil Duvert</a>.
            </div>
            <button className='footer__rules' onClick={toggleModal}>Rules</button>
        </footer>
        {modal && <Modal toggleModal={toggleModal} />}
        </>
    );
}

export default Footer;
