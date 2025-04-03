import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Menu from './Pages/Menu/Menu';
import OrderOnline from './Pages/OrderOnline/OrderOnline';
import Reservations from './Pages/Reservations/Reservations';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/About' element ={<About/>}/>
        <Route path='/Menu' element ={<Menu/>}/>
        <Route path='/OrderOnline' element ={<OrderOnline/>}/>
        <Route path='/Reservations' element ={<Reservations/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
