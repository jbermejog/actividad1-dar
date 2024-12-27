// index.js en React 18
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Selecciona el elemento DOM donde se montará la aplicación
const container = document.getElementById('root');

// Crea un root
const root = ReactDOM.createRoot(container);

// Renderiza la aplicación dentro del root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);