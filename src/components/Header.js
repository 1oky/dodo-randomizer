import React from 'react';

const Header = () => {
    return (
        <div className='header'>
          <div className='logo-title'>
            <img src='./images/logo-dodopizza.svg' alt='Логотип Dodo'></img>
            <h4>Рандомайзер by 1oky</h4>
          </div>
          <button onClick={() => {window.location = 'https://dodopizza.ru/'}}>Сделать заказ</button>
        </div>
    );
};

export default Header;