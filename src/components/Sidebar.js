// src/components/Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faDownload, faPlay, faCogs, faInfoCircle, faCheck } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
      id="mySidebar"
    >
      <h4 className="w3-bar-item">
        <b>Men&aacute;</b>
      </h4>
      <a href="#justificacion" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faWrench} className="sidebar-icon" /> Justificación
      </a>
      <a href="#instalacion" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faDownload} className="sidebar-icon" /> Instalación
      </a>
      <a href="#primeros-pasos" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faPlay} className="sidebar-icon" /> Primeros pasos
      </a>
      <a href="#utilizacion" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faCogs} className="sidebar-icon" /> Utilización
      </a>
      <a href="#explicacion" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faInfoCircle} className="sidebar-icon" /> Funcionamiento
      </a>
      <a href="#conclusiones" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faCheck} className="sidebar-icon" /> Conclusiones
      </a>
    </nav>
  );
};

export default Sidebar;