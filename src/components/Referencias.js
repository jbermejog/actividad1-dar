// src/pages/Referencias.js
import React from 'react';

const Referencias = () => {
  return (
    <div className="w3-main" style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="w3-container">
        <p>&nbsp;</p>
        <h1 className="w3-text-teal">Referencias</h1>
        
        {/* Referencias del Tutorial Básico */}
        <section className="w3-section">
          <h2 className="w3-text-teal">Tutorial Básico</h2>
          <h3>Bibliográficas:</h3>
          <ul>
            <li>
              React Official Documentation: <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/getting-started.html</a>
            </li>
            <li>
              JavaScript Info: <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">https://javascript.info/</a>
            </li>
            <li>
              MDN Web Docs: <a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/es/</a>
            </li>
          </ul>

          <h3>Ilustraciones:</h3>
          <ul>
            <li>
              Diagrama de Componentes de React: <a href="https://reactjs.org/docs/faq-structure.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/faq-structure.html</a>
            </li>
            <li>
              Flux vs Redux: <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">https://redux.js.org/introduction/getting-started</a>
            </li>
          </ul>
        </section>

        {/* Referencias del Tutorial Nivel Medio */}
        <section className="w3-section">
          <h2 className="w3-text-teal">Tutorial Nivel Medio</h2>
          <h3>Bibliográficas:</h3>
          <ul>
            <li>
              Redux Official Documentation: <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">https://redux.js.org/introduction/getting-started</a>
            </li>
            <li>
              React Testing Library: <a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noopener noreferrer">https://testing-library.com/docs/react-testing-library/intro</a>
            </li>
            <li>
              React Hooks: <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/hooks-intro.html</a>
            </li>
          </ul>

          <h3>Ilustraciones:</h3>
          <ul>
            <li>
              Arquitectura de Redux: <a href="https://redux.js.org/introduction/getting-started#architecture-overview" target="_blank" rel="noopener noreferrer">https://redux.js.org/introduction/getting-started#architecture-overview</a>
            </li>
            <li>
              Uso de Hooks Personalizados: <a href="https://reactjs.org/docs/hooks-custom.html" target="_blank" rel="noopener noreferrer">https://reactjs.org/docs/hooks-custom.html</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Referencias;