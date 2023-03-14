
import React  from 'react';
import {Navbar} from "../components/Navbar";
import {Projet} from "../components/Projet";
import {Form} from "../components/Form";
import {Footer} from "../components/Footer";
import titrePortfolio from "../assets/titre-portfolio.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Resume from '../components/Resume';


library.add(fas, faArrowDown);

function Home() {

  return (
   <div>
        <div id="home"> 
          <Navbar />
          <div className="home-container">
                <img className="titrePortfolio" src={titrePortfolio} alt="Portfolio Elodie Jean" />
          </div> 
          <div className='arrow-next-on-home'>
            <a className='arrow-down-home' href='#experiences'><FontAwesomeIcon icon="fa-arrow-down" className='icon-arrow-down-home'/></a>
          </div>
        </div>
        <Resume/>
        <Projet />
        <div id='form'> 
          <div className='title-form'>
                                <h1>Contact</h1>
                          
            <Form/>  
          </div>
        </div>
        <Footer/>
   </div>
 
  );
}

export default Home;
