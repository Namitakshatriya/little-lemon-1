import React from 'react';
import './Story.css';
import restaurant from '../../icons_assets/restaurant.jpg';
import MarioandAdrianA from '../../icons_assets/MarioandAdrianA.jpg';
import MarioandAdrianb from '../../icons_assets/MarioandAdrianb.jpg';


const Story = () => {
  return (
    <><div className='tagline'>
          <h1>Welcome to Little Lemon Restaurant</h1><br />
          <h4>– where passion for food meets a beautiful ambiance!</h4>
      </div>

      <div className='section1'>
      <img className='img' src={restaurant} alt="restaurant"/>
      <h2>Step into our restaurant and feel transported to a warm, inviting space where rustic charm meets modern elegance. Whether you're here for a cozy dinner or a celebration, our ambiance sets the perfect mood.</h2>
      </div>

      <div className='section2'>
        <h2>Mario and Adrian, lifelong friends and culinary enthusiasts, embarked on a journey to bring their shared passion to life. Combining their skills as chefs and their love for vibrant, flavorful dishes, they opened Little Lemon Restaurant – a place where every meal tells a story.</h2>
        <img className='img' src={MarioandAdrianA} alt="MarioandAdrianA" />
      </div>


      <div className='section3'>
      <img className='img' src={MarioandAdrianb} alt="MarioandAdrianb" />
      <h2>Mario and Adrian pour their hearts into every dish they create. With decades of experience and a love for crafting unique flavors, they ensure that every bite at Little Lemon Restaurant is a memorable one.</h2>
      </div>


      </>
  );
}

export default Story;
