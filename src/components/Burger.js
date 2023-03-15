import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
  return (
    <div id='menu-burger'>
      <Menu right>
        <a className="menu-item" href="/">
          accueil
        </a>
        <a className="menu-item" href="#experiences">
          experiences
        </a>
        <a className="menu-item" href="#projet">
          projet
        </a>
        <a className="menu-item" href="#contact">
          contact
        </a>
      </Menu>
    </div>
  );
};