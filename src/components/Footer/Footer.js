import React from 'react';

import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__attribution'>
                Challenge by <a href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">Frontend Mentor</a>.
                 Coded by <a href="#">Kamil Duvert</a>.
            </div>
            <button className='footer__rules'>Rules</button>
        </footer>
    );
}

export default Footer;
