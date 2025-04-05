import React from 'react';
import './Footer.css'
import logo from '../../icons_assets/Logo.svg';
import facebook from '../../icons_assets/facebook.png';
import whatsapp from '../../icons_assets/whatsapp.png';
import insta from '../../icons_assets/insta.png';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, hic vero, totam sunt similique nobis voluptates modi culpa quasi ut earum aut ducimus placeat aspernatur saepe animi eum voluptatem atque.</p>
                <div className="footer-social-icons">
                    <img src={facebook} alt="" />
                    <img src={whatsapp} alt="" />
                    <img src={insta} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>Compony</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Dilivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+0546-557588</li>
                    <li>abcd@gmail.com</li>
                </ul>
            </div>
            
        </div>
      <hr />
      <p className='footer-copyright'>
      copyright 2024 Little_Lemon.com All rights reserved
      </p>
    </div>
  );
}

export default Footer;