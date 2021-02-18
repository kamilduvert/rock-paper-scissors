import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getRandomInt } from '../../utils/getRandomInt';

import './result.scss';

const Result = ({ score, setScore, playerChoice }) => {

    // Set initial computer's choice to an empty string
    const [cpuChoice, setCpuChoice] = useState('');

    // Set initial winning result to false
    const [result, setResult] = useState('');

    // Function that sets the computer choice based on a random number between 0 and 2
    const randomCpuChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomInt = getRandomInt(0, 3);
        setCpuChoice(choices[randomInt]);
    }

    // When the component loads it sets the computer's choice
    useEffect(() => {
        randomCpuChoice()
    }, [])

    // Function that sets the result according to the different outcomes
    const getResult = () => {
        if (playerChoice === 'rock' && cpuChoice === 'scissors') {
            // Play wins!
            setResult("You Win");
            // score gets incremented by 1
            setScore(score + 1);
        } else if (playerChoice === 'rock' && cpuChoice === 'paper') {
            // Play loses...
            setResult("You Lose");
            // score gets decremented by 1
            setScore(score - 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'paper') {
            setResult("You Win");
            setScore(score + 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'rock') {
            setResult("You Lose");
            setScore(score - 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'rock') {
            setResult("You Win");
            setScore(score + 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'scissors') {
            setResult("You Lose");
            setScore(score - 1);
        } else {
            setResult("Draw");
        }
    }

    // When the computer's choice is set it calls the getResultFunction 
    useEffect(() => {
        getResult()
    }, [cpuChoice])
        
    return (
        <section className='result'>
            <div className='result__column'>
                <h3 className='result__column__text'>You picked</h3>
                <div className={`result__icon result__icon--${playerChoice} ${result === "You Win" ? `result__icon--${playerChoice}--winner` : ''}`}></div>
            </div>
            <div className='result__column result__game'>
                <p className='result__game__text'>{`${result}`}</p>
                <Link to='' className='result__game__again' onClick={() => setCpuChoice('')}>
                    Play Again
                </Link>
            </div>
            <div className='result__column'>
                <h3 className='result__column__text'>Computer picked</h3>
                <div className={`result__icon result__icon--${cpuChoice} ${result === "You Lose" ? `result__icon--${cpuChoice}--winner` : ''}`}></div>
            </div>
            
        </section>
    );
}

export default Result;

