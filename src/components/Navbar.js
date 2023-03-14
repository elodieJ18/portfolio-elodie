import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";
import logo from "../assets/logo-plus-petit.svg";




export const Navbar = () => {

  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-navbar">
          <NavLink  to="/">
            <img className="logo" src={logo} alt="logo Elodie Jean" />
          </NavLink>
        </div>
        <div className="navbar">
          <div className="navbar-container">
              <NavLink to="/">
                <div className="navbar-element">
                  <p className="linkicon"></p>
                  <p className="linkName">accueil</p>
                </div>
              </NavLink>
              <a href="#create-comment">
                <div className="navbar-element">
                  <p className="linkicon"></p>
                  <p className="linkName">experiences</p>
                </div>
              </a>
              <NavLink  to="/mycomment">
                <div className="navbar-element">
                <p className="linkicon"></p>
                <p  className="linkName">projet</p>
                </div>
              </NavLink>
              <NavLink  to="/mycomment">
                <div className="navbar-element">
                <p className="linkicon"></p>
                <p  className="linkName">contact</p>
                </div>
              </NavLink>
              
          </div>
        </div>
      </div>
      <ul className="menuMobile">
      <li><a className="menuItems navbar-brand logo-image" href="index.html"><img src="" alt="Qhare"/></a></li>
      <li><a className="menuItems" href="#header">Accueil</a></li>
      <li><a className="menuItems" href="#fonctionality">Fonctionnalités</a></li>
      <li><a className="menuItems btn-outline-full btn-outline-sm" href="#contact">Demander une démonstration</a></li>
      <li><a className="menuItems btn-outline-empty btn-outline-sm" href="https://qhare.fr/connexion">Se connecter</a></li>
      </ul> 
      <button href="#" class="hamburger">
        <i className="fas fa-bars menuIcon"></i>
        <i className="fas fa-times closeIcon"></i>
      </button>
    </div>
  );
}

export default Navbar;
