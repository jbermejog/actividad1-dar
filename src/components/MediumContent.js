// src/components/MediumContent.js
import React from 'react';

const MediumContent = () => {
  return (
      <div className="w3-main" style={{ marginLeft: '250px', padding: '20px' }}>
      <div className="w3-container">
        <p>&nbsp;</p>
        <h1 className="w3-text-teal">Tutorial nivel medio</h1>
        <p>
          Bienvenido al tutorial de React de nivel medio. En este apartado, profundizaremos en conceptos más avanzados que te ayudarán a construir aplicaciones más robustas y eficientes.
        </p>

        {/* Sección 1 */}
        <section id="gestion-estado-redux" className="w3-section">
          <h1 className="w3-text-teal">Gestión avanzada de estado con Redux</h1>
          <p>
            Redux es una librería para la gestión del estado de aplicaciones JavaScript. Se integra perfectamente con React y facilita el manejo de estados complejos en aplicaciones grandes.
          </p>
          <pre>
            <code>
              {`// Ejemplo básico de configuración de Redux
import { createStore } from 'redux';

// Reducer
const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Crear la tienda
const store = createStore(reducer);

export default store;
              `}
            </code>
          </pre>
        </section>

        {/* Sección 2 */}
        <section id="hooks-personalizados" className="w3-section">
          <h1 className="w3-text-teal">Hooks personalizados</h1>
          <p>
            Los Hooks personalizados permiten reutilizar lógica de estado entre componentes. Esto promueve un código más limpio y modular.
          </p>
          <pre>
            <code>
              {`// useFetch.js - Hook personalizado para realizar fetch de datos
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
              `}
            </code>
          </pre>
        </section>

        {/* Sección 3 */}
        <section id="optimizacion-rendimiento" className="w3-section">
          <h1 className="w3-text-teal">Optimización de rendimiento</h1>
          <p>
            Para mejorar el rendimiento de tus aplicaciones React, puedes implementar técnicas como la carga diferida (lazy loading) y la memorización de componentes con <code>React.memo</code>.
          </p>
          <pre>
            <code>
              {`import React, { Suspense, lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default App;
              `}
            </code>
          </pre>
        </section>

        {/* Sección 4 */}
        <section id="pruebas-jest" className="w3-section">
          <h1 className="w3-text-teal">Pruebas con Jest y React Testing Library</h1>
          <p>
            Implementar pruebas unitarias y de integración garantiza que tus componentes funcionen correctamente y facilita el mantenimiento del código.
          </p>
          <pre>
            <code>
              {`// Ejemplo de prueba con Jest y React Testing Library
import React from 'react';
import { render, screen } from '@testing-library/react';
import Saludo from './Saludo';

test('muestra el saludo correcto', () => {
  render(<Saludo nombre="Juan" edad={30} />);
  const saludoElement = screen.getByText(/Hola, Juan!/i);
  expect(saludoElement).toBeInTheDocument();
});
              `}
            </code>
          </pre>
        </section>

        {/* Sección 5 */}
        <section id="integracion-apis" className="w3-section">
          <h1 className="w3-text-teal">Integración con APIs externas</h1>
          <p>
            Conectar tus aplicaciones React con APIs externas permite obtener y enviar datos de manera dinámica, mejorando la funcionalidad y la experiencia del usuario.
          </p>
          <pre>
            <code>
              {`// Ejemplo de integración con una API externa
import React, { useEffect, useState } from 'react';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
              `}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default MediumContent;