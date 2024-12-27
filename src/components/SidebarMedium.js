// src/components/SidebarMedium.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faWebAwesome, faTachometerAlt, faVial, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const SidebarMedium = () => {
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
      id="mySidebar"
    >
      <h4 className="w3-bar-item">
        <b>Menu</b>
      </h4>
      <a href="#gestion-estado-redux" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" /> Gestión de Estado (Redux)
      </a>
      <a href="#hooks-personalizados" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faWebAwesome} className="sidebar-icon" /> Hooks Personalizados
      </a>
      <a href="#optimizacion-rendimiento" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faTachometerAlt} className="sidebar-icon" /> Optimización de Rendimiento
      </a>
      <a href="#pruebas-jest" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faVial} className="sidebar-icon" /> Pruebas con Jest
      </a>
      <a href="#integracion-apis" className="w3-bar-item w3-button w3-hover-black">
        <FontAwesomeIcon icon={faNetworkWired} className="sidebar-icon" /> Integración con APIs
      </a>

    </nav>
  );
};

export default SidebarMedium;