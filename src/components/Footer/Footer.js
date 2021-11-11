import React from "react";
import './Footer.css';
import { FaInstagram , FaFacebook , FaTwitter , FaGooglePlus } from 'react-icons/fa';
import BrandLogo from "../Brand-Logo/Brand-Logo";

const Footer = ()=>{ 
    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='top-branding footer-block'>
                       <h3>Офіційна сторінка компанії</h3> 
                       <p>Увімкни майбутнє разом з нами</p>
                    </div>
                    <div className='footer-block'>
                        <BrandLogo/>
                    </div>
                    <div className='footer-block footer-links'>
                        <a href='/' className='footer-link'><FaFacebook></FaFacebook></a>
                        <a href='/' className='footer-link'><FaInstagram></FaInstagram></a>
                        <a href='/' className='footer-link'><FaTwitter></FaTwitter></a>
                        <a href='/' className='footer-link'><FaGooglePlus></FaGooglePlus></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;