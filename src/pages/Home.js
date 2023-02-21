
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
            <div className='resume-left'>
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
              <div className='formation'>
                <div className='title-formation'>
                  <h2>Expériences Professionnelles</h2>
                </div>
                <div className='block-formation'>
                    <div className='date'>
                      <p className='subtitle-resume'>Aout-2021/2022</p>
                      <p className='ligne'></p>
                    </div>
                    <div className='aboutformation'>
                      <p className='subtitle-resume'>Développeuse Front-end <span>(1 an)</span></p>
                      <p className='where-formation'>50A agence digitale</p>
                      <p>Développeuse front-end /Intégratrice /Webmaster</p>
                    </div>
                </div>
                <div className='block-formation'>
                    <div className='date'>
                      <p className='subtitle-resume'>Juin-Nov 2020</p>
                      <p className='ligne'></p>
                    </div>
                    <div className='aboutformation'>
                      <p className='subtitle-resume'>Conseillère en vente <span>(6 mois)</span></p>
                      <p className='where-formation'>Rougier & plé</p>
                      <p>Conseillère en vente d’articles d’art</p>
                    </div>
                </div>
                <div className='block-formation'>
                    <div className='date'>
                      <p className='subtitle-resume'>Fév- Mars 2020</p>
                      <p className='ligne'></p>
                    </div>
                    <div className='aboutformation'>
                      <p className='subtitle-resume'>Graphiste<span>(freelance 1 mois)</span></p>
                      <p className='where-formation'>Gossiperz/influence4u</p>
                      <p>exécution cartes de visite, bannière web, Identité d’agence d’architecture</p>
                    </div>
                </div>
              </div>
            </div> 

            <div className='resume-right'>
              <div className='block-right'>
                <div className='block-langue'> 
                  <div className='title-formation'>
                    <h2>Langues</h2>
                  </div>
                  <div className='container-block-langue'>
                    <p>Anglais</p>
                    <div className='block-jauge'>
                      <div className='title-jauge'>
                        <p>Intermédiraire</p>
                      </div>
                      <div className='jauge-background'>
                        <div className='jaune-over'></div>
                      </div>
                    </div>
                  </div>
                  <div className='container-block-langue'>
                    <p>Espagnol</p>
                    <div className='block-jauge'>
                      <div className='title-jauge'>
                        <p>Bilingue </p>
                      </div>
                      <div className='jauge-background'>
                        <div className='jaune-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='block-qualite'>
                  <div className='title-formation'>
                    <h2>Qualités</h2>
                  </div>
                  <div className='list-qualite'>
                    <ul>
                      <li>Impliquée</li>
                      <li>Perséverante</li>
                      <li>Dynamique</li>
                    </ul>
                    <ul>
                      <li>Travail en équipe</li>
                      <li>Force de proposition</li>
                      <li>Adaptabilité</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
   </div>
 
  );
}

export default Home;
