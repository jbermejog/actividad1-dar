// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('myOverlay');
    if (sidebar.style.display === 'block') {
      sidebar.style.display = 'none';
      overlay.style.display = 'none';
    } else {
      sidebar.style.display = 'block';
      overlay.style.display = 'block';
    }
  };

  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme w3-top w3-left-align w3-large">
        <a
          className="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
          href="#"
          onClick={handleSidebarToggle}
        >
          <i className="fa fa-bars"></i>
        </a>
        <Link to="/tutorial-basico" className="w3-bar-item w3-button w3-theme-l1">
          Tutorial básico
        </Link>
        <Link to="/tutorial-nivel-medio" className="w3-bar-item w3-button w3-hide-small w3-hover-white">
          Tutorial nivel medio
        </Link>
        <Link to="/referencias" className="w3-bar-item w3-button w3-hide-small w3-hover-white">
          Referencias
        </Link>
      </div>
    </div>
  );
};

export default Navbar;