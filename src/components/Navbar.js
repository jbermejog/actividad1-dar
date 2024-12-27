// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookOpen, faBookmark, faCode } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme w3-top w3-left-align w3-large">

        <Link to="/tutorial-basico" className="w3-bar-item w3-button w3-theme-l1">
          <FontAwesomeIcon icon={faGraduationCap} className="navbar-icon" /> Tutorial básico
        </Link>
        <Link to="/tutorial-nivel-medio" className="w3-bar-item w3-button w3-hide-small w3-hover-white">
          <FontAwesomeIcon icon={faBookOpen} className="navbar-icon" /> Tutorial nivel medio
        </Link>
        <Link to="/referencias" className="w3-bar-item w3-button w3-hide-small w3-hover-white">
          <FontAwesomeIcon icon={faBookmark} className="navbar-icon" /> Referencias
        </Link>
        <a href="https://github.com/jbermejog/actividad1-dar" className="w3-bar-item w3-button w3-hide-small w3-hover-white">
          <FontAwesomeIcon icon={faCode} className="navbar-icon" /> Código en github
        </a>
      </div>
    </div>
  );
};

export default Navbar;