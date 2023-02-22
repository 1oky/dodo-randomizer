import React, { useEffect } from 'react';
import axios from 'axios';

const RandomizerCard = () => {
  const [randomPizza, setRandomPizza] = React.useState({name: 'Ветчина и грибы', imageUrl: './images/DodoPizzaImages/vetchinagriby.webp', price: '389'})
  
  function randomPizzaIndex () {
    return Math.floor(Math.random() * (24 - 1 + 1) + 1);
    console.log(randomPizzaIndex())
  };
  console.log(randomPizzaIndex())

  const handleClick = () => {
    async function fetchData() {
      await axios
      .get("https://63ebe7aa31ef61473b1b2e23.mockapi.io/Pizza")
      .then((res) => {
        setRandomPizza(res.data[randomPizzaIndex()]);
      })
    }
    fetchData()
  }
  
  React.useEffect(() => {
    handleClick()
  }, [])

  return (
    <div onClick={handleClick} className='pizza-card'>
      <img src={randomPizza.imageUrl} alt='Пицца'></img>
      <h4>{randomPizza.name}</h4>
      <span>от {randomPizza.price} руб.</span>
    </div>
  );
};

export default RandomizerCard;