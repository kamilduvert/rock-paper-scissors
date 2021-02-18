import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Play from './components/Play';
import Result from './components/Result';
import Footer from './components/Footer';
import Modal from './components/Modal';


const App = () => {

  // Set initial score to 0
  const [score, setScore] = useState(0);

  // Set initial player's choice to an empty string
  const [playerChoice, setPlayerChoice] = useState('');

  return (
    <>
    <div className='container'>
      <Header score={score} />
      <Switch>
        <Route exact path='/'>
          <Play setPlayerChoice={setPlayerChoice} />
        </Route>
        <Route path='/result'>
          <Result playerChoice={playerChoice} score={score} setScore={setScore} />
        </Route>
      </Switch>
    </div>
    <Footer/>
    </>
  );
}

export default App
