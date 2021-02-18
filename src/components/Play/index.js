import React from 'react';
import { Link } from 'react-router-dom';

import './play.scss';

import Triangle from '/src/images/bg-triangle.svg';


const Play = ({ setPlayerChoice }) => {

    // Function that will set the player's choice according to the item clicked's id
    const handleClick = (e) => {
        setPlayerChoice(e.target.id)

    }
    return (
        <section className='play'>
            <img src={Triangle} alt="triangle-shaped background" className='play__triangle' />
            <div className='play__icons'>
                <Link to='/result'>
                    <div id='paper' onClick={handleClick} className='play__icon play__icon--paper'>
                        
                    </div>
                </Link>
                <Link to='/result'>
                    <div id='rock' onClick={handleClick} className='play__icon play__icon--rock'>
                        
                    </div>
                </Link>
                <Link to='/result'>
                    <div id='scissors' onClick={handleClick} className='play__icon play__icon--scissors'>
                        
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Play;
