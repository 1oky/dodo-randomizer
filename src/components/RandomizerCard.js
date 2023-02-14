import React from 'react';

const RandomizerCard = ({countOfCards}) => {
  console.log(countOfCards)
    return (
        <div className='pizza-card'>
          <img src='./images/pizza.webp'></img>
          <h4>Ветчина сыр</h4>
          <span>666 руб.</span>
        </div>
    );
};

export default RandomizerCard;