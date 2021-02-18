import React from 'react';

import './header.scss';

const Header = ({ score }) => {
    return (
        <header className='header'>
            <h1 className='header__title'>
                <span>rock</span>
                <span>paper</span>
                <span>scissors</span>
            </h1>
            <div className='header__score__container'>
                <span className='header__score__subtitle'>Score</span>
                <span className='header__score__value'>{score}</span>
            </div>
        </header>
    );
}

export default Header;
