import React  from 'react';
import logocv from "../assets/photo-cv.svg";
import logocard from "../assets/logo-plus-petit.svg";
import logocontact from "../assets/logo-contact.svg";


export const Resume = () =>  {
        return (         <div id="experiences">
        <div className='title-experience-home'>
          <h1>Experiences</h1>
        </div>
        <div className='resume'>
          
          <div className='resume-card-presentation'>
            <img src={logocv} alt='elodie-jean'/>
            <div className='resume-card-logo-titre'>
              <img src={logocard} alt='elodie-jean'/>
              <p>DEVELOPPEUR WEB <br/> Front-end</p>
             
            </div>
            <div className='resume-card-contact-into'>
              <img src={logocontact} alt='contact-elodie-jean' />
              <a href='mailto: elodie.jean18@gmail.com'>elodie.jean18@gmail.com</a>
              <p>Paris, 75000</p>
            </div>
            <div className='resume-card-contact'>
              <a href='https://www.linkedin.com/in/elodie-cjean/'>Linkedin</a>
              <a href='https://www.linkedin.com/in/elodie-cjean/'>Github</a>
            </div>
          </div>
          
          <div className='resume-left'>
            <div className='formation'>
              <div className='title-formation first-color'>
                <h2>Formation</h2>
              </div>
              <div className='block-formation'>
                  <div className='date'>
                    <p className='subtitle-resume'>2021-2022</p>
                    <p className='ligne'></p>
                  </div>
                  <div className='aboutformation'>
                    <p className='title-job-formation'>Formation Web Développeuse</p>
                    <p className='title-job-formation'>Front-end (titre RNCP niveau 5)</p>
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
                    <p className='title-job-formation'>Bachelor Concepteur Designer Graphique</p>
                    <p className='where-formation'>Axe Sud Toulouse (école condé)</p>
                    <p>Design Graphique et Communication Visuelle</p>
                  </div>
              </div>
            </div>
            <div className='formation'>
              <div className='title-formation second-color'>
                <h2>Expériences Professionnelles</h2>
              </div>
              <div className='block-formation'>
                  <div className='date'>
                    <p className='subtitle-resume'>Aout-2021/2022</p>
                    <span className='ligne'></span>
                  </div>
                  <div className='aboutformation'>
                    <p className='title-job-formation'>Développeuse Front-end <span>(1 an)</span></p>
                    <p className='where-formation'>50A agence digitale</p>
                    <ul><li>Développeuse front-end /Intégratrice /Webmaster</li></ul>
                  </div>
              </div>
              <div className='block-formation'>
                  <div className='date'>
                    <p className='subtitle-resume'>Juin-Nov 2020</p>
                    <p className='ligne'></p>
                  </div>
                  <div className='aboutformation'>
                    <p className='title-job-formation'>Conseillère en vente <span>(6 mois)</span></p>
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
                    <p className='title-job-formation'>Graphiste<span>(freelance 1 mois)</span></p>
                    <p className='where-formation'>Gossiperz/influence4u</p>
                    <ul>
                      <li>exécution cartes de visite, bannière web, Identité d’agence d’architecture</li>
                    </ul>
                  
                  </div>
              </div>
            </div>
          </div> 

          <div className='resume-right'>
            <div className='block-right'>
              <div className='block-langue'> 
                <div className='title-formation first-color'>
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
                <div className='title-formation first-color'>
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
              <div className='block-competence'>
                <div className='title-formation first-color'>
                  <h2>Compétences</h2>
                </div>
                <div className='list-competence'>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                  <ul>
                    <li>Drupal</li>
                    <li>Wordpress</li>
                  </ul>
                  <p className='list-competence-plus'>+</p>
                  <ul>
                    <li>Intégration Laravel</li>
                    <li>Github</li>
                  </ul>
                </div>
              </div>
              <div className='block-interet'>
                <div className='title-formation'>
                  <h2>Centres d'intérêt</h2>
                </div>
                <div className='container-block-interet'>
                    <div className='list-interet'>
                      <div className='block-list-competence'>
                        <h3 className='subtitle-bold'>Cinéma</h3>
                        <ul>
                          <li>Phantom of the paradise</li>
                          <li>Au revoir là-haut</li>
                          <li>Planète Sauvage</li>
                          <li>5ème Element</li>
                        </ul>
                      </div>
                      <div className='block-list-competence'>
                        <h3 className='subtitle-bold'>Illustration</h3>
                          <p>Illustration sur carnet,</p><p> Felix Colgrave</p>
                      </div>
                    </div>
                    <div className='list-compétence'>
                      <div className='block-list-competence'>
                        <h3 className='subtitle-bold'>Photographie/video</h3>
                        <ul>
                          <li>Montage video/photo</li>
                        </ul>
                      </div>
                      <div className='block-list-competence'>
                        <h3 className='subtitle-bold'>Animation</h3>
                        <ul>
                          <li>GIF, animation par frame 2D</li>
                        </ul>
                      </div>
                      <div className='block-list-competence'>
                        <h3 className='subtitle-bold'>Activités</h3>
                        <ul>
                          <li>Ping Pong, Rugby, E-sport</li>
                        </ul>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
  </div>
   );
}

   export default Resume;