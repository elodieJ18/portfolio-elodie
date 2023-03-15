import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";
import logo from "../assets/logo-plus-petit.svg";
import Burger from '../components/Burger';


export const Navbar = () => {


  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-navbar">
          <NavLink  to="/">
            <img className="logo" src={logo} alt="logo Elodie Jean" />
          </NavLink>
        </div>
        <div id="navbar">
          <div id="navbar-container">
              <NavLink to="/">
                <div className="navbar-element">
                  <p className="linkName">accueil</p>
                </div>
              </NavLink>
              <a href="#experiences">
                <div className="navbar-element">
                  <p className="linkName">experiences</p>
                </div>
              </a>
              <NavLink  to="#projet">
                <div className="navbar-element">
                <p className="linkName">projet</p>
                </div>
              </NavLink>
              <NavLink  to="#contact">
                <div className="navbar-element">
                <p className="linkName">contact</p>
                </div>
              </NavLink>
          </div> 
          <Burger pageWrapId={'navbar-container'} outerContainerId={'navbar'}/>
        </div> 
       
      </div>
    
    </div>
  );
}

export default Navbar;
