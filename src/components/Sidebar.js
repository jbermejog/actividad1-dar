// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  const handleClose = () => {
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('myOverlay');
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  };

  return (
    <nav
      className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
      id="mySidebar"
    >
      <a
        href="#"
        onClick={handleClose}
        className="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large"
        title="Close Menu"
      >
        <i className="fa fa-remove"></i>
      </a>
      <h4 className="w3-bar-item">
        <b>Menu</b>
      </h4>
      <a href="#justificacion" className="w3-bar-item w3-button w3-hover-black">
        Justificación
      </a>
      <a href="#instalacion" className="w3-bar-item w3-button w3-hover-black">
        Instalación
      </a>
      <a href="#primeros-pasos" className="w3-bar-item w3-button w3-hover-black">
        Primeros Pasos
      </a>
      <a href="#utilizacion" className="w3-bar-item w3-button w3-hover-black">
        Utilización
      </a>
      <a href="#explicacion" className="w3-bar-item w3-button w3-hover-black">
        Funcionamiento
      </a>
      <a href="#conclusiones" className="w3-bar-item w3-button w3-hover-black">
        Conclusiones
      </a>
    </nav>
  );
};

export default Sidebar;