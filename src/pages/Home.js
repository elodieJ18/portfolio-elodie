
import React  from 'react';
import {Navbar} from "../components/Navbar";
import titrePortfolio from "../assets/titre-portfolio.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faArrowDown);

function Home() {

  return (
   <div>
        <div id="home"> 
          <Navbar />
            <div className="home-container">
            <img className="titrePortfolio" src={titrePortfolio} alt="Portfolio Elodie Jean" />
            <a><FontAwesomeIcon icon="fa-arrow-down" /></a>
            
            </div>
        </div>
   </div>
 
  );
}

export default Home;
