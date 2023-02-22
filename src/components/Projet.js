import React  from 'react';

import logoecofi from "../assets/logo_ecofi.png";
import logogroupomania from "../assets/logo-groupomania.png";
import logotwstudio from "../assets/logo-tw22studio.svg";
import logoqhare from "../assets/logo-qhare.png";
import logoohmyfood from "../assets/logo-ohmyfood.png";

export const Projet = () =>  {
        return (         <div id="project">
                            <div className='title-project-home'>
                                <h1>Projet</h1>
                            </div>
                            <div className='block-project'>
                                <div className='container-block-project'>
                                    <div className='element-container-block-projet'>
                                    <img src={logogroupomania} alt="Logo Groupomania"/>
                                    <h2 className='title-projet'>Groupomania</h2>
                                    <p>Techno front: React.js/redux</p>
                                    <p>Techno back: MySQL/sequelize</p>
                                    <p>Quelques mots: Project Fullstack / Réseau Social d'entreprise</p>
                                    <div className='btn-voir-projet'>
                                        <a href='#' target="_blank">Voir Projet</a>
                                    </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                    <img src={logotwstudio} alt="Logo Tw22Studio"/>
                                    <h2 className='title-projet'>Tw22Studio</h2>
                                    <p>Techno front: Fromscratch (html/scss/js)</p>
                                    <p>Quelques mots: Colaboration avec Tw22Studio/ création du site d'après maquette figma</p>
                                    <div className='btn-voir-projet'>
                                        <a href='https://tw22studio.com/' target="_blank">Voir Projet</a>
                                    </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                    <img src={logoecofi} alt="Logo Ecofi"/>
                                    <h2 className='title-projet'>Ecofi</h2>
                                    <p>CMS: Drupal</p>
                                    <p>Quelques mots: Intégration + animation JS</p>
                                    <div className='btn-voir-projet'>
                                        <a href='https://www.ecofi.fr/' target="_blank">Voir Projet</a>
                                    </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                    <img src={logoqhare} alt="Logo Ecofi"/>
                                    <h2 className='title-projet'>Qhare CRM</h2>
                                    <p>Techno: Fromscratch (html/css)</p>
                                    <p>Quelques mots: Création d'une onepage Fromscratch</p>
                                    <div className='btn-voir-projet'>
                                        <a href='https://www.crm-qhare.fr/' target="_blank">Voir Projet</a>
                                    </div>
                                    </div>
                                    <div className='element-container-block-projet'>
                                    <img src={logoohmyfood} alt="Logo Ecofi"/>
                                    <h2 className='title-projet'>OhMyFood</h2>
                                    <p>Techno: Fromscratch (html/css/scss)</p>
                                    <p>Quelques mots: Début de création d'un site commande en ligne et de livraison de repas</p>
                                    <p>Apprentissage d'animation fluide et moderne</p>
                                    <div className='btn-voir-projet'>
                                        <a href='https://elodiej18.github.io/ElodieJean_3_04122021/a_la_francaise.html' target="_blank">Voir Projet</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
   );
}

   export default Projet;