import React from 'react'
import './Footer.css'
import { FaFacebook,FaInstagram,FaWhatsapp,FaClinicMedical} from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className='footer-content'>
        <h3>INSTITUTE WELLNESS GROUP</h3>
        <p>Technology Students Gymkhana , IIT Kharagpur</p>
        <ul className='socials'>
          <li><a href="https://www.facebook.com/iwg.iitkgp" target="_blank" ><FaFacebook  className="social-media-icon"/></a></li>
          <li><a href="https://www.instagram.com/iwg_iitkgp/" target="_blank"><FaInstagram className="social-media-icon"/></a></li>
          <li><a  href="https://wa.me/+919705385084" target="_blank"><FaWhatsapp className="social-media-icon"/></a></li>
        </ul>
    </div>
    
    </>
  )
}

export default Footer