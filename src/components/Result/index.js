import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import utils
import { getRandomInt } from '../../utils/getRandomInt';

// Styles
import './result.scss';

const Result = ({ playerChoice, playerScore, setPlayerScore, cpuScore, setCpuScore }) => {

    // Set initial computer's choice to an empty string
    const [cpuChoice, setCpuChoice] = useState('');

    // Set initial winning result to false
    const [result, setResult] = useState('');

    // Set timer to 3 to get 3 x 1s of total interval
    const [counter, setCounter] = useState(3);

    // When the component loads it sets the computer's choice
    useEffect(() => {
        // Before getting the computer's choice there is a 3s delay
        const timer = counter > 0 ? setInterval(() => {
            setCounter(counter - 1);
        }, 1000) : randomCpuChoice();
        // and then it clears the timer
        return () => {
            clearInterval(timer);
        }
    }, [counter]);

    // Function that sets the computer choice based on a random number between 0 and 2
    const randomCpuChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomInt = getRandomInt(0, 3);
        setCpuChoice(choices[randomInt]);
    };

    useEffect( () => {
        getResult();
    }, [cpuChoice])

    // Function that sets the result according to the different outcomes
    const getResult = () => {
        if (playerChoice === 'rock' && cpuChoice === 'scissors') {
            // Player wins!
            setResult("You Win");
            // player's score gets incremented by 1
            setPlayerScore(playerScore + 1);
        } else if (playerChoice === 'rock' && cpuChoice === 'paper') {
            // Play loses...
            setResult("You Lose");
            // computer's score gets incremented by 1
            setCpuScore(cpuScore + 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'paper') {
            setResult("You Win");
            setPlayerScore(playerScore + 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'rock') {
            setResult("You Lose");
            setCpuScore(cpuScore + 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'rock') {
            setResult("You Win");
            setPlayerScore(playerScore + 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'scissors') {
            setResult("You Lose");
            setCpuScore(cpuScore + 1);
        } else {
            setResult("Draw");
        }
    };

    return (
        <section className='result'>
            <div className='result__column'>
                <h3 className='result__column__text'>You picked</h3>
                <div className={`result__icon result__icon--${playerChoice} ${result === 'You Win' ? `result__icon--${playerChoice}--winner` : ''}`}></div>
            </div>

            {cpuChoice && (<div className='result__column result__game'>
                <p className='result__game__text'>{`${result}`}</p>
                <Link 
                    to=''
                    className='result__game__again'
                    onClick={() => {
                        setCpuChoice('');
                    }}
                >
                Play Again
                </Link>
            </div>)
            }
            
            <div className="result__column">
                <h3 className='result__column__text'>The computer Picked</h3>
                {counter == 0 ? (
                    <div className={`result__icon result__icon--${cpuChoice} ${result === 'You Lose' ? `result__icon--${cpuChoice}--winner` : ''}`}></div>
                ) : (
                        <div className="result__counter">{counter}</div>
                    )}
            </div>
        </section>
    );
};

export default Result;

