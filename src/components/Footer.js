import React from 'react';
import logoGithub from "../assets/logo-github.svg";
import logoLinkedin from "../assets/logo-linkedin.svg";

export const Footer = () => {

  return (
   <footer>
    <div className='footer-container'>
        <div className='reseaux-sociaux'>
            <a href="https://github.com/elodieJ18" target="_blank" className='reseaux-sociaux-container'>
                <img src={logoGithub}/>
                <p>github</p>
            </a>
            <a href="https://www.linkedin.com/in/elodie-cjean/" target="_blank" className='reseaux-sociaux-container'>
                <img src={logoLinkedin}/>
                <p>Linkedin</p>
            </a>
        
        </div>
        <div className='info-creation'>
            <p>Fait via React by Elodie Jean</p>
            <a href='mailto: elodie.jean18@gmail.com' target="_blank">elodie.jean18@gmail.com</a>
        </div>
        
    </div>
   </footer>
  );
};

export default Footer;