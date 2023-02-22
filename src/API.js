import axios from 'axios';

async function fetchData () { 
  function randomPizzaIndex () {
    return Math.floor(Math.random() * (24 - 1 + 1) + 1)
  };
  try {
    const response = await axios.get("https://63ebe7aa31ef61473b1b2e23.mockapi.io/Pizza");
    return response.data[randomPizzaIndex()];
  }
  catch (error) {
    alert('При запросе произошла ошибка')
  }
}

export default fetchData;