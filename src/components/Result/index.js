import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getRandomInt } from '../../utils/getRandomInt';

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
            setResult("win");
            // score gets incremented by 1
            setScore(score + 1);
        } else if (playerChoice === 'rock' && cpuChoice === 'paper') {
            // Play loses...
            setResult("lose");
            // score gets decremented by 1
            setScore(score - 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'paper') {
            setResult("win");
            setScore(score + 1);
        } else if (playerChoice === 'scissors' && cpuChoice === 'rock') {
            setResult("lose");
            setScore(score - 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'rock') {
            setResult("win");
            setScore(score + 1);
        } else if (playerChoice === 'paper' && cpuChoice === 'scissors') {
            setResult("lose");
            setScore(score - 1);
        } else {
            setResult("draw");
        }
    }

    // When the computer's choice is set it calls the getResultFunction 
    useEffect(() => {
        getResult()
    }, [cpuChoice])
        
    return (
        <section className="result">
            <div>my choice:{playerChoice}</div>
            <div>computer's choice: {cpuChoice}</div>
            <div>Result:
            {/* Conditional rendering depending on result outcome */}
                {result === "win" && <h2>You Win!</h2>}
                {result === "lose" && <h2>You Lose...</h2>}
                {result === "draw" && <h2>It's a Draw</h2>}
            </div>

            {/* Link to reset computer's choice and bring back to homepage */}
            <Link to='/' onClick={()=> setCpuChoice('')}>
                Play Again
            </Link>

        </section>
    );
}

export default Result;
