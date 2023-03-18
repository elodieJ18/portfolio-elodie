import React, {useState} from "react";
import "../css/styles.css";
import logo from "../assets/logo-plus-petit.svg";
import Burger from '../components/Burger';
import { HashLink as Link } from 'react-router-hash-link';


export const Navbar = () => {
  const [ fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true)
    }else {
        setFix(false)
      }
    }
  window.addEventListener("scroll", setFixed)

  return (
    <div className={fix ? 'header fixed' : "header"}>
      <div className="header-content">
        <div className="logo-navbar">
          <Link  to="/#home">
            <img className="logo" src={logo} alt="logo Elodie Jean" />
          </Link>
        </div>
        <div id="navbar">
          <div id="navbar-container">
              <Link to="/#home">
                <div className="navbar-element">
                  <p className="linkName">accueil</p>
                </div>
              </Link>
              <a href="#exp">
                <div className="navbar-element">
                  <p className="linkName">experiences</p>
                </div>
              </a>
              <Link  to="/#project">
                <div className="navbar-element">
                <p className="linkName">projet</p>
                </div>
              </Link>
              <Link  to="#form">
                <div className="navbar-element">
                <p className="linkName">contact</p>
                </div>
              </Link>
          </div> 
        </div> 
       
      </div>
    
    </div>
  );
}

export default Navbar;
