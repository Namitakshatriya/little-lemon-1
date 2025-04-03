import React from 'react';
import './Footer.css';
import logo from '../../icons_assets/Logo.svg';
import facebook from '../../icons_assets/facebook.png';
import insta from '../../icons_assets/insta.png';
import whatsapp from '../../icons_assets/whatsapp.png';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
        <img src={logo} alt="Logo" />
        </div>


        <div className='address'>
       <p className='bold'> Address</p>
<p className='not-bold'>Abc squre, Main Road,
New York<br/>
Phone
023-12 12 12 12<br/>
E-MAIL
ingfuj@gmail.com</p>
        </div>


<div className='social-media'>
  <h1>Follow us on</h1>

  <div className='inside-col'>
    <div><img src={facebook} alt="facebook" /></div>
    <div>Facebook</div>
  </div>
  <div className='inside-col'>
    <div><img src={insta} alt="insta" /></div>
    <div>Instagram</div>
  </div>
  <div className='inside-col'>
    <div><img src={whatsapp} alt="whatsapp" /></div>
    <div>Whats App</div>
  </div>
</div>
    </div>
  );
}

export default Footer;