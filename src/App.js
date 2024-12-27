// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SidebarMedium from './components/SidebarMedium';
import MainContent from './components/MainContent';
import MediumContent from './components/MediumContent';
import Referencias from './components/Referencias'; // Importar el componente Referencias
import './App.css'; // Archivo CSS para estilos generales

// Componente para manejar la disposición según la ruta
const AppContent = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      {/* Renderiza Sidebar o SidebarMedium según la ruta */}
      {location.pathname.startsWith('/tutorial-basico') && <Sidebar />}
      {location.pathname.startsWith('/tutorial-nivel-medio') && <SidebarMedium />}
      {/* Puedes agregar más sidebars si tienes más rutas */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/tutorial-basico" />} />
          <Route path="/tutorial-basico/*" element={<MainContent />} />
          <Route path="/tutorial-nivel-medio/*" element={<MediumContent />} />
          {/* Nueva Ruta para Referencias */}
          <Route path="/referencias" element={<Referencias />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
      </div>
    </div>
  );
};

// Componente principal App
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;