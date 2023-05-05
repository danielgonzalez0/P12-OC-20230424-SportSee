import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../header/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="sportsee logo" />
      </div>
      <ul className="header_nav">
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
