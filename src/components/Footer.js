import React from 'react';
import logoGithub from "../assets/logo-github.svg";
import logoLinkedin from "../assets/logo-linkedin.svg";

export const Footer = () => {

  return (
   <footer>
    <div className='footer-container'>
        <div className='reseaux-sociaux'>
            <a href=""className='reseaux-sociaux-container'>
                <img src={logoGithub}/>
                <p>github</p>
            </a>
            <a href="" className='reseaux-sociaux-container'>
                <img src={logoLinkedin}/>
                <p>Linkedin</p>
            </a>
        
        </div>
        <p>Fait via React by Elodie Jean</p>
        <a href='mailto: elodie.jean18@gmail.com'>elodie.jean18@gmail.com</a>
    </div>
   </footer>
  );
};

export default Footer;