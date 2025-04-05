import React from 'react';
import './Home.css'
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Header />   
      <Main />
      <Testimonials />
    </div>
  );
}

export default Home;
