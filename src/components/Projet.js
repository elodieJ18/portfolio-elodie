import React  from 'react';

import logoecofi from "../assets/logo-ecofi.svg";
import logogroupomania from "../assets/logo-groupomania.svg";
import logotwstudio from "../assets/logo-tw22studio.svg";
import logoqhare from "../assets/logo-qhare.svg";
import logoohmyfood from "../assets/logo-ohmyfood.svg";

export const Projet = () =>  {
        return (         <div id="project">
                            <div className='title-project-home'>
                                <h1>Projet</h1>
                            </div>
                            <div className='block-project'>
                                <div className='container-block-project'>
                                        <div className='element-container-block-projet'>
                                            <div className='info-projet'>
                                                <div className='block-projet-logo'>  
                                                    <img src={logogroupomania} alt="Logo Groupomania"/>
                                                </div> 
                                            
                                                <div className='info-element-container-block-projet'>
                                                    <h2 className='title-projet'>Groupomania</h2>
                                                    <p><strong>Techno front :</strong> React.js/redux</p>
                                                    <p><strong>Techno back :</strong> MySQL/sequelize</p>
                                                    <p><strong>Quelques mots :</strong> Project Fullstack / Réseau Social d'entreprise</p>
                                                </div> 
                                            </div>
                                            <div className='btn-projet'>
                                                <a href='#' className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                            </div>
                                        </div>
                                    <div className='element-container-block-projet'>
                                     <div className='info-projet'>
                                        <div className='block-projet-logo'> 
                                            <img src={logotwstudio} className="size-image-tw22" alt="Logo Tw22Studio"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>Tw22Studio</h2>
                                            <p><strong>Techno front :</strong> Fromscratch (html/scss/js)</p>
                                            <p><strong>Quelques mots :</strong> Colaboration avec Tw22Studio/ création du site d'après maquette figma</p>
                                        </div>
                                    </div>
                                        <div className='btn-projet'>
                                            <a href='https://tw22studio.com/' className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                      <div className='info-projet'>
                                        <div className='block-projet-logo'> 
                                            <img src={logoecofi} alt="Logo Ecofi"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>Ecofi</h2>
                                            <p><strong>CMS :</strong> Drupal</p>
                                            <p><strong>Quelques mots :</strong> Intégration + animation JS </p>
                                        </div>
                                      </div>
                                        <div className='btn-projet'>
                                            <a href='https://www.ecofi.fr/' className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                      <div className='info-projet'>
                                        <div className='block-projet-logo'> 
                                            <img src={logoqhare} alt="Logo Ecofi"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>Qhare CRM</h2>
                                            <p><strong>Techno :</strong> Fromscratch (html/css)</p>
                                            <p><strong>Quelques mots :</strong> Création d'une onepage Fromscratch</p>
                                        </div>
                                      </div> 
                                        <div className='btn-projet'>
                                            <a href='https://www.crm-qhare.fr/' className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                     <div className='info-projet'>
                                        <div className='block-projet-logo'>
                                            <img src={logoohmyfood} alt="Logo Ecofi"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>OhMyFood</h2>
                                            <p><strong>Techno :</strong> Fromscratch (html/css/scss)</p>
                                            <p><strong>Quelques mots :</strong> Début de création d'un site commande en ligne et de livraison de repas</p>
                                            <p>Apprentissage d'animation fluide et moderne</p>
                                        </div>
                                      </div>  
                                        <div className='btn-projet'>
                                            <a href='https://elodiej18.github.io/ElodieJean_3_04122021/index.html' className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
   );
}

   export default Projet;