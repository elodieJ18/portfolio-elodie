import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";
import logo from "../assets/logo.png";




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
                  <p className="linkName">home</p>
                </div>
              </NavLink>
              <a href="#create-comment">
                <div className="navbar-element">
                  <p className="linkicon"></p>
                  <p className="linkName">experience</p>
                </div>
              </a>
              <NavLink  to="/mycomment">
                <div className="navbar-element">
                <p className="linkicon"></p>
                <p  className="linkName">project</p>
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
    </div>
  );
}

export default Navbar;
