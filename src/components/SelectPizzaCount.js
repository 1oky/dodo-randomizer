import React from 'react';

const SelectPizzaCount = ({id, setActive, activeCount}) => {
  const [isActive, setIsActive] = React.useState(false);
  
  const handleClick = () => {
    setIsActive(current => !current)
    setActive(id)
  }
    return (
        <div className='pizza-counter'>
          <button onClick={handleClick}>
            <img style={{
              backgroundColor: id <= activeCount ? '#ff6900' : 'white',
            }} className='pizza-icon' src='./images/pizza-icon.svg' alt='pizza-icon'>
            </img>
          </button>
        </div>
    );
};

export default SelectPizzaCount;