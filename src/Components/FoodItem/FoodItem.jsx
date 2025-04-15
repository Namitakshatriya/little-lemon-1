import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../icons_assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
       const {cartItems,addToCart,removeFromCart} = useContext (StoreContext);

  return (
    <div className='food-item'>
     <div className="food-item-img-container">
        <img className='food-item-img' src={image} alt=''/>
        
        </div>        
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;