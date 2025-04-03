import React from 'react';
import './Main.css';
import greeksalad from '../../icons_assets/greeksalad.jpg';
import delivery from '../../icons_assets/delivery.png';
import bruchetta from '../../icons_assets/bruchetta.svg';
import lemondessert from '../../icons_assets/lemondessert.jpg';

const Main = () => {
  return (
   <> 
   <div className='center'>
   <div className='main-upper-part'>
     <div> <h1>This weeks specials</h1></div>
     <div><button>Online Menu</button></div>
     </div></div>
    

 <div className='option-section'>
    <div className='main-lower-part'>
      <div className='dish'>
      <img className='dish-img' src={greeksalad} alt="greeksalad" />
      <div className='Dish-name'>
        <div className='first-row'>
      <h2>Greek Salad</h2>
      <div className='dish-price'>$12.90</div>
      </div>

      <div className='details'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div>


    <div className='main-lower-part'>
      <div className='dish'>
      <img className='dish-img' src={bruchetta} alt="bruchetta" />
      <div className='Dish-name'>
        <div className='first-row'>
      <h2>bruchetta</h2>
      <div className='dish-price'>$9.90</div>
      </div>

      <div className='details'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div> 


    <div className='main-lower-part'>
      <div className='dish'>
      <img className='dish-img' src={lemondessert} alt="lemondessert" />
      <div className='Dish-name'>
        <div className='first-row'>
      <h2>Lemon Dessert</h2>
      <div className='dish-price'>$12.90</div>
      </div>

      <div className='details'>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lpsum Lorem  </div>
      <div className='order'><h5>Order a delivery</h5>
      <div>
      <img src={delivery} alt="delivery" />
      </div>
      </div>
      </div>
      </div>
    </div>

    </div>  
    </>
  );
}

export default Main;