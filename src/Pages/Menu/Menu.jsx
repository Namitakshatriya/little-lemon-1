import React, { useState } from 'react';
import './Menu.css';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
const Menu = () => {

  const[category,setCategory] = useState("All")
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Menu;
