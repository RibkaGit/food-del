import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Hagere is simple dummy text of the printing and typesetting industry.Hagere has been the industry's standard dummy text ever since the 1500s.when an unknown printer took a gallery of type and scramebled it to make a type speimen book.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />

          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About as</li>
            <li>Delivery</li>
            <li>Privacy police</li>
           </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+251907192716</li>
            <li>contact@hagere.com</li>
          </ul>
        </div>
       </div>
       <hr />
       <p className='footer-copy-right'>Copyright 2025 hagere.com - All Right Reserved.</p>
      
    </div>
  );
}

export default Footer
