import React from 'react';
import SelectPizzaCount from './SelectPizzaCount';

const PizzaCount = ({countOfPizza, setCountOfPizza}) => {
    return (
      <div className='select-count-container'>
        <SelectPizzaCount id={1} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={2} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={3} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={4} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={5} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={6} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={7} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={8} setActive={setCountOfPizza} activeCount={countOfPizza}/>
        <SelectPizzaCount id={9} setActive={setCountOfPizza} activeCount={countOfPizza}/>
      </div>
    );
};

export default PizzaCount;