import './App.css';
import React from 'react';
import Header from './components/Header';
import PizzaCount from './components/PizzaCount';
import RandomizerCard from './components/RandomizerCard';
import SelectPizzaCount from './components/SelectPizzaCount';

function App() {
  const [activePizzaIconCount, setActivePizzaIconCount] = React.useState(1);
  return (
    <div className="App">
      <Header />
      <h1>Доверь свой выбор случайности</h1>
      <PizzaCount countOfPizza={activePizzaIconCount} setCountOfPizza={setActivePizzaIconCount}/>
      <RandomizerCard countOfCards={activePizzaIconCount} />
    </div>
  );
}

export default App;
