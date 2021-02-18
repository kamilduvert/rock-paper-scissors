import React, { useState, useEffect } from 'react';

import { getRandomInt } from '../utils/getRandomInt';

const Result = ({ score, setScore, playerChoice }) => {

    // Set initial computer's choice to an empty string
    const [cpuChoice, setCpuChoice] = useState('');

    // Set initial winning result to false
    const [isWin, setIsWin] = useState(false);

    // Function that will set the computer choice based on a random number between 0 and 2
    const randomCpuChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const randomInt = getRandomInt(0, 3);
        setCpuChoice(choices[randomInt]);
    }

    // When the component loads it sets the computer's choice
    useEffect(() => {
        randomCpuChoice()
    }, [])

    return (
        <div className="result">
            my choice:{playerChoice} <br/>
            computer's choice: {cpuChoice}
        </div>
    );
}

export default Result;
