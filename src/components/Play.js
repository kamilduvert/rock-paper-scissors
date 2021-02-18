import React from 'react';
import { Link } from 'react-router-dom';

const Play = ({ setPlayerChoice }) => {

    // This 
    const handleClick = (e) => {
        setPlayerChoice(e.target.id)

    }
    return (
        <div className='play'>
            <Link to='game'>
                <div id='paper' onClick={handleClick} className='icon icon--paper'>
                    paper
                </div>
            </Link>
            <Link to='game'>
                <div id='rock' onClick={handleClick} className='icon icon--scissors'>
                    scissors
                </div>
            </Link>
            <Link to='game'>
                <div id='scissors' onClick={handleClick} className='icon icon--rock'>
                    rock
                </div>
            </Link>
        </div>
    )
}

export default Play;
