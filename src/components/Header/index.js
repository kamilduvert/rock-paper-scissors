import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ playerScore, cpuScore }) => {
    return (
        <header className='header'>
            <h1 className='header__title'>
                <span>rock</span>
                <span>paper</span>
                <span>scissors</span>
            </h1>
            <div className='header__score__container'>
                <span className='header__score__subtitle'>PLAYER</span>
                <span className='header__score__value'>{playerScore}</span>
            </div>
            <div className='header__score__container'>
                <span className='header__score__subtitle'>COMPUTER</span>
                <span className='header__score__value'>{cpuScore}</span>
            </div>
        </header>
    );
};

Header.propTypes = {
    playerScore: PropTypes.number.isRequired,
    cpuScore: PropTypes.number.isRequired
};

export default Header;
