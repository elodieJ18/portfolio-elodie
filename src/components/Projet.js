import React  from 'react';

import logoecofi from "../assets/logo-ecofi.svg";
import logogroupomania from "../assets/logo-groupomania.svg";
import logotwstudio from "../assets/logo-tw22studio.svg";
import logoqhare from "../assets/logo-qhare.svg";
import logoohmyfood from "../assets/logo-ohmyfood.svg";
import logoexcel from "../assets/logo-excel-01.png";
import logobeer from "../assets/logo-beer.png";

export const Projet = () =>  {
        return (         <div>
                            <div className='title-project-home'>
                                <h1>Projet</h1>
                            </div>
                            <div className='block-project'>
                                <div className='container-block-project'>
                                    <div className='element-container-block-projet'>
                                        <div className='info-projet'>
                                            <div className='block-projet-logo'>
                                                <img src={logobeer} alt="Logo Excel"/>
                                            </div>
                                            <div className='info-element-container-block-projet'>
                                                <h2 className='title-projet'>Loving Beer</h2>
                                                <p><strong>Techno :</strong> React.js</p>
                                                <p><strong>Quelques mots :</strong> Réalisé avec l'API "PUNK API" : Création d'un site internet de A à Z en faisant de appelle à API opensource</p>
                                            </div>
                                        </div>  
                                            <div className='btn-projet'>
                                                <a href='https://elodiej18.github.io/punk-api-frontend/' rel="noreferrer" className='btn-voir-projet' target="_blank">VOIR LE PROJET</a>
                                            </div>
                                        </div>
                                        <div className='element-container-block-projet'>
                                            <div className='info-projet'>
                                                <div className='block-projet-logo'>  
                                                    <img src={logogroupomania} alt="Logo Groupomania"/>
                                                </div> 
                                            
                                                <div className='info-element-container-block-projet'>
                                                    <h2 className='title-projet'>Groupomania</h2>
                                                    <p><strong>Techno front :</strong> React.js/redux</p>
                                                    <p><strong>Techno back :</strong> MySQL/sequelize/Node.js</p>
                                                    <p><strong>Quelques mots :</strong> Project Fullstack / Réseau Social d'entreprise (lancé sur <strong>Heroku</strong>)</p>
                                                </div> 
                                            </div>
                                            <div className='btn-projet'>
                                                <a href='https://groupomaniademo.herokuapp.com/' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
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
                                            <p><strong>Quelques mots :</strong> Colaboration avec Tw22Studio/ création du site d'après maquette figma (lancé sur <strong>Filezilla</strong>)</p>
                                        </div>
                                    </div>
                                        <div className='btn-projet'>
                                            <a href='https://tw22studio.com/' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
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
                                            <p><strong>Quelques mots :</strong> Réalisé avec l'agence 50A : Intégration + animation JS </p>
                                        </div>
                                      </div>
                                        <div className='btn-projet'>
                                            <a href='https://www.ecofi.fr/' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                      <div className='info-projet'>
                                        <div className='block-projet-logo'> 
                                            <img src={logoqhare} alt="Logo qhare"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>Qhare CRM</h2>
                                            <p><strong>Techno :</strong> Fromscratch (html/css)</p>
                                            <p><strong>Quelques mots :</strong> Réalisé avec l'agence 50A : Création d'une onepage Fromscratch (lancé sur <strong>Filezilla</strong>)</p>
                                        </div>
                                      </div> 
                                        <div className='btn-projet'>
                                            <a href='https://www.crm-qhare.fr/' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                     <div className='info-projet'>
                                        <div className='block-projet-logo'>
                                            <img src={logoexcel} alt="Logo Excel"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>Excel Industrie</h2>
                                            <p><strong>Techno :</strong> Wordpress</p>
                                            <p><strong>Quelques mots :</strong> Réalisé avec l'agence 50A : Intégration de pages statiques et amériolation de l'Experience Design/responsive</p>
                                        </div>
                                      </div>  
                                        <div className='btn-projet'>
                                            <a href='https://www.exel-industries.com/?lang=en' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                     <div className='info-projet'>
                                        <div className='block-projet-logo'>
                                            <img src={logoohmyfood} alt="Logo ohmyfood"/>
                                        </div>
                                        <div className='info-element-container-block-projet'>
                                            <h2 className='title-projet'>OhMyFood</h2>
                                            <p><strong>Techno :</strong> Fromscratch (html/css/scss)</p>
                                            <p><strong>Quelques mots :</strong> Apprentissage d'animation fluide et moderne, demo d'un site de commande en ligne et de livraison de repas</p>
                                        </div>
                                      </div>  
                                        <div className='btn-projet'>
                                            <a href='https://elodiej18.github.io/ElodieJean_3_04122021/index.html' className='btn-voir-projet' rel="noreferrer" target="_blank">VOIR LE PROJET</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
   );
}

   export default Projet;