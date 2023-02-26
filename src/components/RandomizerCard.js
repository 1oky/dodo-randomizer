import React from 'react';
import axios from 'axios';

function randomPizzaIndex () {
  const pizzasCount = 24
  return Math.floor(Math.random() * (pizzasCount - 1 + 1) + 1);
};

const RandomizerCard = () => {
  const [randomPizza, setRandomPizza] = React.useState({name: 'Ветчина и грибы', imageUrl: './images/DodoPizzaImages/vetchinagriby.webp', price: '389'})
 
  const handleClick = () => {
    async function fetchData() {
      try {
        await axios
        .get("https://63ebe7aa31ef61473b1b2e23.mockapi.io/Pizza")
        .then((res) => {
        setRandomPizza(res.data[randomPizzaIndex()]);
        })
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  };
  React.useEffect(() => {
    handleClick()
  }, []);
  
  if (!randomPizza) {
    return (
      <div onClick={handleClick} className='pizza-card-error'>
        <h4>Тут должна быть пицца :(</h4>
        <span>При запросе произошла ошибка, попробуйте снова</span>
      </div>
    )
  } else {
    return (
      <div onClick={handleClick} className='pizza-card'>
        <img src={randomPizza?.imageUrl} alt='Пицца'></img>
        <h4>{randomPizza?.name}</h4>
        <span>от {randomPizza?.price} руб.</span>
      </div>
    );
  }
};

export default RandomizerCard;
