import React from 'react'
import './Footer.css' 
import { AiOutlineFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <footer  id='footer'>
      
    <a href="#" className='footer_logo'>EGATOR</a>

    <ul className='permalinks'>
    <li><a href="#">Home</a></li>
     <li><a href="#about">About</a></li>
    <li><a href="#experiance">Experiance</a></li>
    <li><a href="#service">Services</a></li>
    <li><a href="#protfolio">Protfolio</a></li>
    <li><a href="#testmonial">Testmonialies</a></li>
    <li><a href="#contact">Contact</a></li>

    </ul>
    
<div className="footer_socialies">
  <a href="https://facebook.com"><AiOutlineFacebook />

</a>
    <a href="https://instgram.com"><CiInstagram />

</a>
  <a href="https://twitter.com"><FaTwitter />
</a>

</div>

<div className="footer_copyright">
<small>&copy; AMLNUSIER</small>

</div>
    </footer>
  )
}

export default Footer

