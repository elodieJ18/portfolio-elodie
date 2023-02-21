
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
          </div> 
          <div className='arrow-next-on-home'>
            <a className='arrow-down-home' href='#experiences'><FontAwesomeIcon icon="fa-arrow-down" className='icon-arrow-down-home'/></a>
          </div>
        </div>
        <div id="experiences">
          <div className='title-experience-home'>
            <h1>Experiences</h1>
          </div>
          <div className='resume'>
            <div className='formation'>
              <div className='title-formation'>
                <h2>Formation</h2>
              </div>
              <div className='block-formation'>
                  <div className='date'>
                    <p className='subtitle-resume'>2021-2022</p>
                    <p className='ligne'></p>
                  </div>
                  <div className='aboutformation'>
                    <p className='subtitle-resume'>Front-end (titre RNCP niveau 5)Formation Web Développeuse</p>
                    <p className='where-formation'>Openclassrooms</p>
                    <ul>
                      <li>-Optimisez un site web existant (pratiques de SEO)</li>
                      <li>-Créez le backend et l'API d'une application</li>
                      <li>-Construisez un site e-commerce (A l’aide du JavaScript )</li>
                      <li>-Créez un réseau social d’entreprise (bases de données SQL, React.js)</li>
                    </ul>
                  </div>
              </div>
              <div className='block-formation'>
                  <div className='date'>
                    <p className='subtitle-resume'>2017-2019</p>
                    <p className='ligne'></p>
                  </div>
                  <div className='aboutformation'>
                    <p className='subtitle-resume'>Bachelor Concepteur Designer Graphique</p>
                    <p className='where-formation'>Axe Sud Toulouse (école condé)</p>
                    <p>Design Graphique et Communication Visuelle</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
   </div>
 
  );
}

export default Home;
