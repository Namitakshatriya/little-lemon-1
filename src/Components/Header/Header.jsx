import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import restauranfood from '../../icons_assets/restauranfood.jpg';

const Header = () => {
  const navigate = useNavigate();
  const handleReservationClick = () => {
    navigate('/reservations'); 
  };
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem <br/>Ipsum Lorem Ipsum Lorem Ipsum Ipsum <br/>Lorem Ipsum Lorem Ipsum Lorem <br/> Lorem Ipsum </p>
            <button  onClick={handleReservationClick}>Reserve a Table</button>
     </div>
     <div className='header-right'>
    <img src={restauranfood} alt="restauranfood" /> 
     </div>
    </div>
  );
}

export default Header;
