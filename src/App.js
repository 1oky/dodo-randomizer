import './App.css';
import React from 'react';
import Header from './components/Header';
import PizzaCount from './components/PizzaCount';
import RandomizerCard from './components/RandomizerCard';

function App() {
  const [activePizzaIconCount, setActivePizzaIconCount] = React.useState(1);
  
  return (
    <div className="App">
      <Header />
      <h1>Доверь свой выбор случайности</h1>
      <PizzaCount countOfPizza={activePizzaIconCount} setCountOfPizza={setActivePizzaIconCount} />
      <div className='card-container'>
        {[...Array(activePizzaIconCount)].map(() => <RandomizerCard countOfCards={activePizzaIconCount} />)}
      </div>
    </div>
  );
}

export default App;
