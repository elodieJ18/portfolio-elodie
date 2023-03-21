
import React  from 'react';
import {Navbar} from "../components/Navbar";
import {Projet} from "../components/Projet";
import {Form} from "../components/Form";
import {Footer} from "../components/Footer";

import Resume from '../components/Resume'; 
import ResumeToggle from "../components/ResumeToggle"; 
import Burger from '../components/Burger';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import p from "../assets/p.svg";
import o from "../assets/o.svg";
import r from "../assets/r.svg";
import t from "../assets/t.svg";
import f from "../assets/f.svg";
import o2 from "../assets/o2.svg";
import l from "../assets/l.svg";
import i from "../assets/i.svg";
import o3 from "../assets/o3.svg";




library.add(fas, faArrowDown);

function Home() {

  return (
   <div>
        <div id="home"> 
          <Navbar />
          <Burger pageWrapId={'navbar-container'} outerContainerId={'navbar'}/>
          <div className="home-container">
            <div className='titrePortfolio'>
              <div className='titrePortfolio-container'>
                 <img className="position-p" src={p} alt="Portfolio Elodie Jean" />
                <img className=" position-o" src={o} alt="Portfolio Elodie Jean" />
                <img className="position-r" src={r} alt="Portfolio Elodie Jean" />
                <img className="position-t" src={t} alt="Portfolio Elodie Jean" />
                <img className="position-o2" src={o2} alt="Portfolio Elodie Jean" />
                <img className="position-l" src={l} alt="Portfolio Elodie Jean" />
                <img className="position-i" src={i} alt="Portfolio Elodie Jean" />
                <img className="position-o3" src={o3} alt="Portfolio Elodie Jean" />
              </div>
              
            </div>  
          </div> 
          <div className='arrow-next-on-home'>
            <a className='arrow-down-home' href='#exp'><FontAwesomeIcon icon="fa-arrow-down" className='icon-arrow-down-home'/></a>
          </div>
        </div> 
        <div id="exp">
        <Resume/>
        <ResumeToggle/>
        </div>
        <div id="project">
        <Projet />
        </div>
        <div id="form"> 
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
