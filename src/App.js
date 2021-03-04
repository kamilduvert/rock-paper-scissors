import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Header from './components/Header';
import Play from './components/Play';
import Result from './components/Result';
import Footer from './components/Footer/Footer';

// Styles
import './styles/index.scss';

const App = () => {

  // Set initial scores to 0
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  // Set initial player's choice to an empty string
  const [playerChoice, setPlayerChoice] = useState('');

  return (
    <>
    <div className='app'>
      <Header 
        playerScore={playerScore} 
        cpuScore={cpuScore}
      />
      <Switch>
        <Route exact path='/'>
          <Play 
            setPlayerChoice={setPlayerChoice} />
        </Route>
        <Route path='/result'>
          {playerChoice ? <Result 
            playerChoice={playerChoice}
            playerScore={playerScore}
            setPlayerScore={setPlayerScore} 
            cpuScore={cpuScore} 
            setCpuScore={setCpuScore}
            />
          : <Redirect to='/' />
          }
        </Route>
      </Switch>
      <Footer/>
    </div>
    </>
  );
};

export default App;
