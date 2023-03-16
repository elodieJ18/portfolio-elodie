import React  from 'react';
import { elastic as Menu } from 'react-burger-menu';
import { HashLink as Link } from 'react-router-hash-link';

export default props => {

  const [menuOpen, setMenuOpen] = React.useState(false)

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <div id='menu-burger'>
      <Menu right  isOpen={menuOpen}
        onStateChange={state => handleStateChange(state)}>
         <Link  to="/" onClick={() => {
            closeMenu()
          }}>
          <p className="menu-item">
            accueil
          </p>
        </ Link>
        <Link  to="/#experiences"  onClick={() => {
            closeMenu()
          }}>
            <p className="menu-item">
              experiences
            </p>
        </Link>
        <Link  to="/#project" onClick={() => {
            closeMenu()
          }}>
           <p className="menu-item">
            projet
            </p>
        </Link>
        <Link  to="/#form" onClick={() => {
            closeMenu()
          }}>
            <p className="menu-item">
              contact
            </p>
        </Link>
      </Menu>
    </div>
  );
};