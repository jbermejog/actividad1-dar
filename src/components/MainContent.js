import React from 'react';

const MainContent = () => {
    return (
        <div className="w3-main" style={{ marginLeft: '250px' }}>
            {/* Justificación del Framework */}
            <section id="justificacion" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Justificación del Framework React</h1>
                    <h2>¿Para qué sirve?</h2>
                    <p>
                        React es una biblioteca de JavaScript diseñada para construir interfaces de usuario interactivas y eficientes. Facilita el desarrollo de aplicaciones web dinámicas al permitir a los desarrolladores crear componentes reutilizables que encapsulan tanto la lógica como la presentación. Gracias a su <strong>arquitectura basada en componentes</strong>, React promueve la modularidad y la mantenibilidad del código, lo que resulta especialmente beneficioso en proyectos de gran escala.</p>
                    <figure>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="Logotipo de React"
                            width="400"
                            height="400" />
                        <figcaption>
                            React. (n.d.). *React logo* [SVG]. Wikimedia Commons.
                            <a href="https://commons.wikimedia.org/wiki/File:React.svg" target="_blank" rel="noopener noreferrer">
                                https://commons.wikimedia.org/wiki/File:React.svg
                            </a>
                        </figcaption>
                    </figure>

                    <p>Una de las características clave de React es su <strong>Virtual DOM,</strong> que optimiza las actualizaciones de la interfaz de usuario al minimizar las manipulaciones directas del DOM real, mejorando así el rendimiento y la velocidad de las aplicaciones. Además, React soporta <strong>JSX</strong>, una sintaxis que combina JavaScript y HTML, lo que simplifica la creación y comprensión de los componentes.</p>

                    <p>React también se integra de manera fluida con otras bibliotecas y frameworks, lo que permite ampliar sus capacidades según las necesidades del proyecto. Por ejemplo, mediante el uso de <strong>React Router</strong>, es posible gestionar la navegación dentro de una aplicación de una sola página (SPA), mientras que Redux facilita la gestión del estado global de la aplicación.</p>

                    <p>También, React cuenta con un ecosistema robusto y una comunidad activa que continuamente aporta herramientas, extensiones y recursos educativos, lo que facilita a los desarrolladores mantenerse actualizados con las mejores prácticas y tendencias del desarrollo web moderno.          </p>
                    <h2>¿Qué aplicaciones tiene?</h2>
                    <ul>
                        <li>Desarrollo de interfaces de usuario</li>
                        <li>Aplicaciones de una sola página (SPA)</li>
                        <li>Aplicaciones móviles con React Native</li>
                        <li>Aplicaciones de escritorio con Electron</li>
                    </ul>

                    <h2>¿Sobre qué lenguajes se apoya?</h2>
                    <p>
                        React, siendo una <strong>biblioteca</strong> de <strong>JavaScript</strong>, se apoya principalmente en una combinación de lenguajes y tecnologías que trabajan en conjunto para crear interfaces de usuario dinámicas y eficientes. Las tecnologías clave que sustentan React son:
                    </p>
                    <p>
                        <strong>JavaScript</strong> es el lenguaje de programación principal en el que está construido React. Es un lenguaje interpretado, dinámico y multiparadigma que permite la creación de aplicaciones web interactivas.
                    </p>
                    <p>
                        <strong>Características clave de JavaScript en React:</strong>
                    </p>
                    <ul>
                        <li><strong>Manipulación del DOM:</strong> React utiliza JavaScript para manipular el <strong>Document Object Model (DOM)</strong> de manera eficiente a través del Virtual DOM.</li>
                        <li><strong>Funciones y clases:</strong> React permite la creación de componentes tanto funcionales como basados en clases, aprovechando las características de JavaScript.</li>
                        <li><strong>Asincronía:</strong> Maneja operaciones asincrónicas como llamadas a APIs utilizando promesas y <strong>async/await</strong>.</li>
                    </ul>
                    <p>
                        <strong>JSX</strong> es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML dentro del código JavaScript. Aunque no es obligatorio, JSX facilita la creación y visualización de componentes de React de manera más intuitiva.
                    </p>
                    <p>
                        <strong>Características clave de JSX:</strong>
                    </p>
                    <ul>
                        <li><strong>Sintaxis declarativa:</strong> Permite describir cómo debería verse la interfaz de usuario de manera declarativa.</li>
                        <li><strong>Interoperabilidad:</strong> Se compila a llamadas de función de JavaScript, lo que permite la integración con cualquier lógica de JavaScript.</li>
                        <li><strong>Facilidad de lectura:</strong> Mejora la legibilidad del código al combinar la lógica y la presentación en un solo lugar.</li>
                    </ul>
                    <p>
                        <strong>Ejemplo de JSX:</strong>
                    </p>
                    <img src="https://jbermejog.github.io//actividad1-dar/ejemplo1.png" alt="Ejemplo de Hola Mundo en React" />
                    <p>
                        <strong>TypeScript</strong> es un superconjunto de JavaScript que añade tipado estático y otras características avanzadas. Aunque no es obligatorio, su uso en proyectos React mejora la calidad del código y facilita la detección de errores en tiempo de compilación.
                    </p>
                    <p>
                        <strong>Características clave de TypeScript en React:</strong>
                    </p>
                    <ul>
                        <li><strong>Tipado estático:</strong> Permite definir tipos para variables, funciones y componentes, reduciendo errores en tiempo de ejecución.</li>
                        <li><strong>IntelliSense:</strong> Mejora la experiencia de desarrollo con autocompletado y documentación en tiempo real.</li>
                        <li><strong>Refactorización segura:</strong> Facilita la refactorización del código sin introducir errores.</li>
                    </ul>
                    <p>
                        <strong>Ejemplo de un Componente en TypeScript:</strong>
                    </p>
                    <pre><code>{`
    import React from 'react';

    interface Props {
      nombre: string;
      edad: number;
    }

    const Saludo: React.FC<Props> = ({ nombre, edad }) => {
      return (
        <div>
          <h1>Hola, {nombre}!</h1>
          <p>Tienes {edad} años.</p>
        </div>
      );
    };

    export default Saludo;
    `}</code></pre>

                    <p>
                        Aunque React maneja la lógica y estructura de la interfaz de usuario a través de JavaScript y JSX, sigue dependiendo de <strong>HTML</strong> y <strong>CSS</strong> para la presentación y el diseño visual.
                    </p>
                    <p>
                        <strong>Características clave de HTML y CSS en React:</strong>
                    </p>
                    <ul>
                        <li><strong>Estructura:</strong> JSX se traduce en elementos HTML que estructuran la interfaz de usuario.</li>
                        <li><strong>Estilos:</strong> Los estilos pueden aplicarse mediante archivos CSS, CSS Modules, o librerías de estilos en línea como Styled Components.</li>
                        <li><strong>Responsividad:</strong> Utiliza CSS para hacer que las aplicaciones sean responsivas y se adapten a diferentes tamaños de pantalla.</li>
                    </ul>
                    <p>
                        <strong>Ejemplo de estilos en un componente React:</strong>
                    </p>
                    <pre><code>{`
    /* App.css */
    .App {
      text-align: center;
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }
    `}</code></pre>



                    <p>
                        Además de los lenguajes mencionados, React puede integrarse con otras tecnologías para ampliar su funcionalidad:
                    </p>
                    <ul>
                        <li><strong>GraphQL:</strong> Un lenguaje de consulta para APIs que permite obtener datos de manera eficiente.</li>
                        <li><strong>JSON:</strong> Formato de intercambio de datos ampliamente utilizado en aplicaciones web.</li>
                        <li><strong>SQL:</strong> Para gestionar bases de datos relacionales en aplicaciones más complejas.</li>
                        <li><strong>WebAssembly:</strong> Permite ejecutar código de alto rendimiento en el navegador, complementando las capacidades de React.</li>
                    </ul>


                    <h2>¿Qué prerrequisitos necesita?</h2>
                    <p>
                        Conocimientos básicos de JavaScript, HTML y CSS.
                    </p>
                </div>


            </section>

            {/* Instalación */}
            <section id="instalacion" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Instalación</h1>
                    <h2>¿Se precisa instalación?</h2>

                    <p>
                        Sí, es necesario <strong>instalar Node.js</strong> y <strong>npm</strong> para gestionar las <strong>dependencias</strong> de React. <strong>Node.js</strong> proporciona el entorno de ejecución de JavaScript necesario para ejecutar herramientas de desarrollo como <em>Create React App</em>, mientras que <strong>npm</strong> (Node Package Manager) facilita la instalación y gestión de los paquetes y bibliotecas que React utiliza. Estas herramientas son esenciales para configurar, desarrollar y mantener una aplicación React de manera eficiente. Además, contar con la versión correcta de <strong>Node.js</strong> garantiza la compatibilidad y el rendimiento óptimo de las herramientas y dependencias utilizadas en el proyecto.

                    </p>
                    <h2>¿Qué pasos hay que realizar para realizar la instalación?</h2>

                    <strong>Instalar Node.js y npm desde <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a></strong>.
                    <p>
                        Para comenzar a desarrollar con React, es imprescindible <strong>instalar Node.js</strong> y <strong>npm</strong> (Node Package Manager). Node.js proporciona el entorno de ejecución de JavaScript necesario para ejecutar herramientas de desarrollo como <em>Create React App</em>, mientras que npm facilita la gestión de las <strong>dependencias</strong> y bibliotecas que React utiliza.
                    </p>
                    <p>
                        <strong>Pasos para la instalación:</strong>
                    </p>
                    <ul>
                        <li>Visita la página oficial de Node.js en <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a> y descarga el instalador adecuado para tu sistema operativo.</li>
                        <li>Ejecuta el instalador y sigue las instrucciones en pantalla para completar la instalación.</li>
                        <li>Verifica la instalación abriendo una terminal y ejecutando los siguientes comandos para comprobar las versiones instaladas:
<pre><code>{`
node -v
npm -v
`}</code></pre>
                        </li>
                    </ul>

                    <strong>Crear una aplicación React utilizando Create React App</strong>.
                    <p>
                        Una vez que Node.js y npm están instalados correctamente, el siguiente paso es crear una nueva aplicación React. <strong>Create React App</strong> es una herramienta oficial de React que simplifica el proceso de configuración inicial, proporcionando una estructura de proyecto estándar y preconfiguraciones optimizadas.
                    </p>
                    <p>
                        <strong>Pasos para crear una aplicación React:</strong>
                    </p>
                    <ul>
                        <li>Abre una terminal y ejecuta el siguiente comando para crear una nueva aplicación React llamada <code>react-tutorial</code>:
                            <pre><code>{`npx create-react-app react-tutorial`}</code></pre>
                            <span>Este comando utiliza <strong>npx</strong> para ejecutar <strong>Create React App</strong> sin necesidad de instalarlo globalmente.</span>
                        </li>
                        <li>Una vez finalizada la creación del proyecto, navega al directorio de la aplicación:
                            <pre><code>{`cd react-tutorial`}</code></pre>
                        </li>
                        <li>Inicia el servidor de desarrollo para ver la aplicación en acción:
                            <pre><code>{`npm start`}</code></pre>
                            <span>Este comando abrirá la aplicación en tu navegador predeterminado en <strong>http://localhost:3000</strong>, donde podrás ver la página de inicio predeterminada de React.</span>
                        </li>
                    </ul>


                    <h2>¿Versiones necesarias?</h2>

                            <strong>Node.js: Versión 14.x o superior</strong>
                            <p>
                                Para desarrollar aplicaciones con React, es esencial contar con una versión de <strong>Node.js</strong> que sea <strong>14.x o superior</strong>. Esta versión garantiza la compatibilidad con las últimas características y mejoras de rendimiento que React y sus herramientas asociadas requieren.
                            </p>
                            <p>
                                <strong>Razones para usar Node.js 14.x o superior:</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Compatibilidad con Create React App:</strong> Las versiones más recientes de <strong>Create React App</strong> están optimizadas para funcionar con Node.js 14.x y superiores, asegurando una configuración y ejecución sin problemas.
                                </li>
                                <li>
                                    <strong>Mejoras de rendimiento:</strong> Las versiones más nuevas de Node.js incluyen mejoras significativas en el rendimiento y la eficiencia, lo que resulta en tiempos de compilación y ejecución más rápidos.
                                </li>
                                <li>
                                    <strong>Soporte de características Modernas:</strong> Las versiones más recientes soportan las últimas características de JavaScript y mejoras en el manejo de dependencias, lo que facilita el desarrollo de aplicaciones modernas y escalables.
                                </li>
                                <li>
                                    <strong>Seguridad:</strong> Las versiones actuales de Node.js reciben actualizaciones de seguridad, lo que protege tu entorno de desarrollo contra vulnerabilidades conocidas.
                                </li>
                            </ul>

                            <strong>npm: Versión 6.x o superior</strong>
                            <p>
                                <strong>npm</strong> (Node Package Manager) es la herramienta de gestión de paquetes predeterminada para Node.js. Es crucial tener una versión de <strong>6.x o superior</strong> para asegurar la compatibilidad con las últimas dependencias y paquetes que React utiliza.
                            </p>
                            <p>
                                <strong>Razones para usar npm 6.x o superior:</strong>
                            </p>
                            <ul>
                                <li>
                                    <strong>Gestión eficiente de Dependencias:</strong> Las versiones más recientes de npm mejoran la gestión de dependencias, reduciendo conflictos y facilitando la instalación de paquetes necesarios para el desarrollo de aplicaciones React.
                                </li>
                                <li>
                                    <strong>Nuevas funcionalidades:</strong> npm 6.x introduce nuevas funcionalidades y mejoras en la interfaz de línea de comandos, lo que optimiza la experiencia de desarrollo.
                                </li>
                                <li>
                                    <strong>Compatibilidad con librerias modernas:</strong> Muchas librerias modernas de desarrollo web, incluyendo Create React App, requieren versiones más recientes de npm para funcionar correctamente.
                                </li>
                                <li>
                                    <strong>Mejoras de seguridad:</strong> Las versiones actuales de npm incluyen parches de seguridad y mejoras que protegen tu entorno de desarrollo contra vulnerabilidades.
                                </li>
                            </ul>


                    <h2>¿Rutas para tener en cuenta?</h2>
                    <p>
                        El proyecto se <strong>ubicará en el directorio especificado</strong> durante la creación. Es fundamental seleccionar una <strong>ruta adecuada</strong> para tu proyecto React para asegurar una <strong>organización eficiente</strong> y facilitar el <strong>mantenimiento</strong> a largo plazo. A continuación, se detallan las consideraciones clave a tener en cuenta al elegir la ruta y la estructura de directorios para tu aplicación React.
                    </p>

                    <p>
                    <strong>Selección del directorio padre</strong><br />
                        Es recomendable crear tu proyecto React en un <strong>directorio padre</strong> dedicado a tus proyectos de desarrollo. Por ejemplo, puedes tener una carpeta llamada <code>~/Proyectos</code> o <code>~/Development</code> donde almacenarás todos tus proyectos web.
                    </p>
                    <pre><code>{`~/Proyectos/react-tutorial`}</code></pre>

                    <p>
                    <strong>Nombre del proyecto</strong><br />
                        Elige un <strong>nombre descriptivo</strong> y <strong>único</strong> para tu proyecto. Esto no solo facilita la identificación del proyecto, sino que también evita conflictos de nombres si tienes múltiples proyectos.
                    </p>
                    <pre><code>{`npx create-react-app mi-tutorial-react`}</code></pre>

                    <p>
                    <strong>Acceso y permisos</strong><br />
                        Asegúrate de que tienes los <strong>permisos necesarios</strong> para leer y escribir en el directorio seleccionado. Esto es crucial para evitar problemas durante la instalación de dependencias y la ejecución de scripts de desarrollo.
                    </p>

                    <p>
                    <strong>Compatibilidad con sistemas de control de versiones</strong><br />
                        Si planeas utilizar un sistema de control de versiones como <strong>Git</strong>, elige una ruta que sea <strong>compatible</strong> y fácil de gestionar. Por ejemplo, evita rutas con espacios o caracteres especiales que puedan complicar la gestión de repositorios.
                    </p>
                    <pre><code>{`~/Proyectos/react-tutorial`}</code></pre>

                    <p>
                    <strong>Integración con librerias de desarrollo</strong><br />
                        Considera cómo la ruta seleccionada se integrará con otras <strong>herramientas de desarrollo</strong> que utilizas, como editores de código, terminales, y sistemas de construcción. Una estructura de directorios bien organizada facilita la configuración y el uso eficiente de estas herramientas.
                    </p>

                    <p>
                    <strong>Organización interna del proyecto</strong><br />
                        Dentro del directorio del proyecto, es recomendable seguir una <strong>estructura de directorios estándar</strong> para organizar tus archivos y carpetas. Esto incluye separar los componentes, estilos, assets, y otros recursos en carpetas específicas.
                    </p>
                    <figure>
                        <img src="https://jbermejog.github.io//actividad1-dar/directorios.jpg"
                            alt="Estructura de directorios"
                            height="400" />
                        <figcaption>
                            Fuente: Elaboración propia.

                        </figcaption>
                    </figure>

                    <p>
                        <strong>Consideraciones Adicionales:</strong>
                    </p>
                        <ul>
                            <li>
                                <strong>Consistencia</strong>: Mantén una <strong>estructura de directorios consistente</strong> en todos tus proyectos para facilitar la navegación y el mantenimiento.
                            </li>
                            <li>
                                <strong>Documentación</strong>: Incluye un archivo <code>README.md</code> en la raíz del proyecto que describa la estructura de directorios y brinde información sobre cómo configurar y ejecutar la aplicación.
                            </li>
                            <li>
                                <strong>Uso de Variables de Entorno</strong>: Si tu proyecto requiere configuraciones específicas, considera utilizar archivos de variables de entorno (.env) ubicados en la raíz del proyecto para gestionar configuraciones sensibles y rutas personalizadas.
                            </li>
                        </ul>

                    <h2>¿Variables de entorno?</h2>
                    <p>
                        <strong>No es necesario para este tutorial básico.</strong> En el contexto de este tutorial, que se centra en la creación y comprensión de una aplicación React sencilla, no se requieren <strong>variables de entorno</strong>. Las variables de entorno son útiles para gestionar configuraciones sensibles y personalizar comportamientos en diferentes entornos (desarrollo, producción, etc.), pero su uso puede ser complejo para principiantes.
                    </p>

                    <h2>¿Necesita base de datos?</h2>
                    <p>
                        <strong>No, no es necesario para este tutorial básico.</strong> En el contexto de este tutorial, que se enfoca en la creación y comprensión de una aplicación React sencilla, no se requiere una <strong>base de datos</strong>. La aplicación se centrará en la construcción de la interfaz de usuario y la gestión del estado local, sin necesidad de almacenar o recuperar datos persistentes.
                    </p>

                </div>


            </section>

            {/* Primeros Pasos */}
            <section id="primeros-pasos" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Primeros pasos</h1>
                    <h2>¿Cómo realizar una primera aproximación “Hola Mundo”?</h2>
                    <p>
                        Realizar una primera aproximación en React es una excelente manera de familiarizarse con la <strong>creación de componentes</strong>, la <strong>gestión del estado</strong>, y la <strong>renderización</strong> de contenido dinámico. A continuación, se detallan los pasos necesarios para crear una aplicación React básica que muestre el mensaje "Hola Mundo".
                    </p>
                    <p><strong>Iniciar la aplicación con <code>npm start</code></strong>.
                        Una vez creada la aplicación React utilizando <strong>Create React App</strong>, el siguiente paso es iniciar el servidor de desarrollo para ver la aplicación en acción. Este servidor soporta el <strong>hot reloading</strong>, lo que significa que cualquier cambio realizado en el código se reflejará automáticamente en el navegador sin necesidad de recargar la página manualmente.
                    </p>
                    <pre><code>{`npm start`}</code></pre>
                    <p>
                        Al ejecutar este comando, el servidor de desarrollo iniciará y abrirá automáticamente la aplicación en tu navegador predeterminado en <strong>http://localhost:3000</strong>. Verás la página de inicio predeterminada de React.
                    </p>

                    <p><strong>Modificar el componente <code>App.js</code> para mostrar "Hola Mundo"</strong>.</p>
                    <p>
                        El siguiente paso es editar el archivo <code>App.js</code> para cambiar el contenido que se muestra en la página. Por defecto, <code>Create React App</code> genera una plantilla con un logotipo de React y algunos enlaces. Vamos a simplificarlo para mostrar únicamente el mensaje "Hola Mundo".
                    </p>
                    <img src="https://jbermejog.github.io//actividad1-dar/ejemplo1.png" alt="Ejemplo de Hola Mundo en React" />
                </div>
            </section>

            {/* Utilización del Framework */}
            <section id="utilizacion" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Utilización del Framework</h1>
                    <h2>¿Cómo empezar a crear una aplicación base?</h2>
                    <p>
                        Iniciar el desarrollo de una aplicación React sólida y escalable requiere una planificación adecuada y la implementación de buenas prácticas desde el principio. A continuación, se detallan los pasos esenciales para crear una aplicación base efectiva, enfocándose en la creación de componentes reutilizables, la organización de la estructura de directorios y la utilización de rutas para la navegación entre diferentes secciones.
                    </p>

                            <p>
                            <strong>Crear componentes reutilizables.</strong><br />
                                Una de las principales ventajas de React es su arquitectura basada en componentes, lo que permite crear <strong>componentes reutilizables</strong> que encapsulan tanto la lógica como la presentación. Esto no solo mejora la <strong>mantenibilidad</strong> del código, sino que también agiliza el desarrollo al evitar la duplicación de código.
                            </p>
                            <p>
                                <strong>Beneficios de los componentes reutilizables:</strong>
                            </p>
                                <ul>
                                    <li><strong>Consistencia:</strong> Garantizan una apariencia y comportamiento uniformes en toda la aplicación.</li>
                                    <li><strong>Eficiencia:</strong> Reducen el tiempo de desarrollo al permitir la reutilización de código existente.</li>
                                    <li><strong>Facilidad de Mantenimiento:</strong> Simplifican las actualizaciones y mejoras, ya que los cambios en un componente se reflejan en todas las instancias donde se utiliza.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de un componente reutilizable:</strong>
                                <br />
                                A continuación, se muestra cómo crear un componente <code>Button</code> que puede ser utilizado en diferentes partes de la aplicación con distintas propiedades.
                            </p>
                            <pre><code>{`
import React from 'react';
import './Button.css'; // Archivo de estilos para el botón

const Button = ({ onClick, children, type = 'button' }) => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
    `}</code></pre>
                            <p>
                                <strong>Uso del componente Button:</strong>
                                <br />
                                Puedes utilizar el componente <code>Button</code> en otros componentes de la siguiente manera:
                            </p>
                            <pre><code>{`
import React from 'react';
import Button from './components/Button';

const App = () => {
  const handleClick = () => {
    alert('¡Has pulsado el bot&oacute;n!');
  };

  return (
    <div className="App">
      <h1>Bienvenido a React</h1>
      <Button onClick={handleClick}>Haz click aqu&iacute;</Button>
    </div>
  );
};

export default App;
`}</code></pre>

                            <p>
                            <strong>Organizar la estructura de directorios.</strong><br />
                                Una <strong>estructura de directorios bien organizada</strong> es fundamental para la escalabilidad y el mantenimiento de la aplicación. Facilita la navegación por el código, mejora la colaboración entre desarrolladores y simplifica la identificación de componentes y recursos.
                            </p>
                            <p>
                                <strong>Recomendaciones para la organización de directorios:</strong>
                            </p>
                                <ul>
                                    <li>
                                        <strong>src/</strong>: Contiene todo el código fuente de la aplicación.
                                        <ul>
                                            <li><strong>components/</strong>: Almacena los componentes reutilizables.</li>
                                            <li><strong>pages/</strong>: Contiene los componentes que representan páginas completas.</li>
                                            <li><strong>assets/</strong>: Incluye recursos estáticos como imágenes, estilos y fuentes.</li>
                                            <li><strong>utils/</strong>: Guarda funciones utilitarias y helpers.</li>
                                            <li><strong>services/</strong>: Almacena lógica relacionada con llamadas a APIs y servicios externos.</li>
                                        </ul>
                                    </li>
                                    <li><strong>public/</strong>: Contiene archivos públicos como <code>index.html</code> y favicon.</li>
                                    <li><strong>tests/</strong>: Almacena pruebas unitarias y de integración.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de estructura de directorios:</strong>
                            </p>
                            <pre><code>{`
react-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Navbar.js
│   │   └── Sidebar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
├── package.json
└── README.md
    `}</code></pre>
                            <p>
                                <strong>Beneficios de una estructura organizada:</strong>
                            </p>
                                <ul>
                                    <li><strong>Mantenibilidad:</strong> facilita la localización y actualización de componentes y archivos.</li>
                                    <li><strong>Escalabilidad:</strong> permite agregar nuevas funcionalidades sin desorganizar el proyecto.</li>
                                    <li><strong>Colaboración:</strong> simplifica el trabajo en equipo al establecer una convención clara para la organización del código.</li>
                                </ul>

                            <p>
                            <strong>Utilizar rutas para navegar entre diferentes secciones.</strong><br />
                                La <strong>navegación entre diferentes secciones</strong> de la aplicación es esencial para proporcionar una experiencia de usuario fluida y coherente. React Router es una de las herramientas más populares para manejar las rutas en aplicaciones React, permitiendo definir rutas dinámicas y anidadas de manera sencilla.
                            </p>
                            
                                <strong>Pasos para implementar la navegación con React Router:</strong><br />

                                        <p>
                                        <strong>Instalar React Router:</strong><br />
                                            Primero, necesitas instalar <strong>React Router</strong> utilizando npm o yarn:
                                        </p>
                                        <pre><code>npm install react-router-dom</code></pre>
     
                                        <p>
                                        <strong>Configurar las rutas en App.js:</strong><br />
                                            Luego, debes configurar las rutas en tu archivo <code>App.js</code> utilizando los componentes proporcionados por React Router.
                                        </p>
                                        <pre><code>{`
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
          `}</code></pre>
             
                                        <p>
                                        <strong>Crear enlaces de navegación:</strong><br />
                                            En el componente <code>Navbar</code>, utiliza el componente <code>Link</code> de React Router para crear enlaces que permitan a los usuarios navegar entre las diferentes páginas.
                                        </p>
                                        <pre><code>{`
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Mi Aplicación React</h2>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Acerca de</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
          `}</code></pre>

                                        <p>
                                        <strong>Crear componentes de página:</strong><br />
                                            Crea componentes para cada sección de tu aplicación, como <code>Home.js</code>, <code>About.js</code> y <code>Contact.js</code>, que se renderizarán cuando se accedan a sus respectivas rutas.
                                        </p>
                                        
                                        <pre><code>{`
// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="page">
      <h1>Inicio</h1>
      <p>Bienvenido a la página de inicio de mi aplicación React.</p>
    </div>
  );
};

export default Home;

// About.js
import React from 'react';

const About = () => {
  return (
    <div className="page">
      <h1>Acerca de</h1>
      <p>Esta es la página de información sobre nuestra aplicación.</p>
    </div>
  );
};

export default About;

// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="page">
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de este formulario.</p>
    </div>
  );
};

export default Contact;
          `}</code></pre>

                            <p>
                                <strong>Consideraciones Adicionales:</strong>
                            </p>
                                <ul>
                                    <li>
                                        <strong>Rutas Anidadas:</strong> Puedes definir rutas anidadas para manejar sub-secciones dentro de una página principal.
                                    </li>
                                    <li>
                                        <strong>Protección de Rutas:</strong> Implementa rutas protegidas que requieran autenticación para acceder a ciertas secciones de la aplicación.
                                    </li>
                                    <li>
                                        <strong>Lazy Loading:</strong> Optimiza el rendimiento de tu aplicación cargando componentes de manera diferida cuando se acceden a sus rutas.
                                    </li>
                                </ul>


                    <h2>¿Cómo visualizar los resultados de la ejecución?</h2>
                    <p>
                        Utilizando el servidor de desarrollo iniciado con <code>npm start</code>, que soporta hot reloading para ver cambios en tiempo real.
                    </p>
                </div>

            </section>

            {/* Explicación del Funcionamiento del Framework */}
            <section id="explicacion" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Explicación del funcionamiento del Framework</h1>
                    <p>
                        React es un <strong>framework</strong> de <strong>JavaScript</strong> desarrollado por Facebook que se utiliza para construir interfaces de usuario interactivas y dinámicas. A diferencia de otros frameworks que actúan directamente sobre el <strong>DOM</strong> (Document Object Model), React introduce conceptos innovadores que optimizan la <strong>renderización</strong> y el <strong>rendimiento</strong> de las aplicaciones web.
                    </p>
                    <h3>¿Actúa sobre páginas, ficheros, secciones…?</h3>
                    <p>
                        React no actúa directamente sobre <strong>páginas</strong>, <strong>ficheros</strong> o <strong>secciones</strong> de manera tradicional. En su lugar, React utiliza un enfoque basado en <strong>componentes</strong>, que son bloques de construcción independientes y reutilizables que conforman la interfaz de usuario de una aplicación. A continuación, se detallan los aspectos clave de cómo React interactúa con diferentes partes de una aplicación:
                    </p>

                            <strong>Componentes:</strong>
                            <p>
                                Los componentes son las unidades básicas de React. Cada componente encapsula su propia estructura (HTML), estilos (CSS) y lógica (JavaScript), lo que facilita su reutilización y mantenimiento. Por ejemplo, un componente <code>Header</code> puede ser utilizado en múltiples páginas sin duplicar código.
                            </p>

                            <strong>Virtual DOM:</strong>
                            <p>
                                React utiliza un <strong>Virtual DOM</strong>, que es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React actualiza el Virtual DOM y luego compara esta nueva versión con la anterior utilizando un algoritmo eficiente. Solo las partes del DOM real que han cambiado se actualizan, lo que mejora significativamente el rendimiento de la aplicación.
                            </p>

                            <strong>JSX (JavaScript XML):</strong>
                            <p>
                                JSX es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de archivos JavaScript. Esto facilita la creación de componentes al combinar la lógica y la presentación en un solo lugar. Por ejemplo:
                                </p>
                                <pre><code>{`
const Welcome = () => {
  return &lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;;
};
`}</code></pre>
  
                            <strong>Estado y Props:</strong>
                            <p>
                                <strong>Estado</strong> (<em>State</em>) y <strong>props</strong> son mecanismos que permiten a los componentes manejar y pasar datos respectivamente. El estado es mutable y se utiliza para gestionar datos que pueden cambiar con el tiempo, mientras que las props son inmutables y se utilizan para pasar datos de un componente padre a uno hijo.
                            </p>
 
                            <strong>Enrutamiento:</strong>
                            <p>
                                Aunque React en sí mismo no maneja el enrutamiento, se suele utilizar junto con bibliotecas como <strong>React Router</strong> para gestionar la navegación entre diferentes <strong>páginas</strong> o <strong>secciones</strong> de la aplicación. Esto permite crear aplicaciones de una sola página (<em>Single Page Applications</em>, SPA) donde la navegación es rápida y fluida.
                            </p>



                    <h2>¿Cómo se editan/modifican los ficheros que actúan en el framework?</h2>
                    <p>
                        Para <strong>editar</strong> y <strong>modificar</strong> los ficheros que conforman una aplicación React, es fundamental trabajar directamente con los archivos <strong>JSX</strong> y <strong>CSS</strong> ubicados en el directorio <code>src/</code>. Este proceso permite personalizar la interfaz de usuario y la lógica de la aplicación de manera eficiente. A continuación, se detallan los pasos y consideraciones clave para realizar estas modificaciones.
                    </p>

                            <strong>Configurar un Editor de Código Adecuado</strong>
                            <p>
                                Utilizar un <strong>editor de código</strong> potente y eficiente facilita la edición de archivos JSX y CSS. Algunos de los editores más populares incluyen:
                            </p>
                            <ul>
                                <li><strong>Visual Studio Code (VSCode):</strong> Ofrece extensiones específicas para React, soporte para JSX, y herramientas de depuración integradas.</li>
                                <li><strong>Sublime Text:</strong> Ligero y personalizable con paquetes para mejorar el desarrollo en React.</li>
                                <li><strong>Atom:</strong> Editor de código de GitHub con paquetes comunitarios para React y JSX.</li>
                            </ul>

                            <strong>Editar los Archivos JSX</strong>
                            <p>
                                Los archivos <strong>JSX</strong> son la columna vertebral de las aplicaciones React, ya que definen la estructura y la lógica de los componentes. Para modificar la interfaz de usuario, sigue estos pasos:
                            </p>
                            <p>
                                <strong>Pasos para editar archivos JSX:</strong>
                            </p>
                                <ul>
                                    <li><strong>Navegar al directorio <code>src/</code>:</strong> Todos los componentes y archivos principales se encuentran dentro de este directorio.</li>
                                    <li><strong>Abrir el archivo JSX correspondiente:</strong> Por ejemplo, <code>App.js</code> es el componente raíz que puedes modificar.</li>
                                    <li><strong>Realizar cambios en el JSX:</strong> Puedes agregar, eliminar o modificar elementos HTML y componentes personalizados.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de modificación en <code>App.js</code>:</strong>
                            </p>
                            <pre><code>{`
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>¡Hola Mundo!</h1>
      <p>Bienvenido a tu primera aplicación React.</p>
    </div>
  );
}

export default App;
`}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>Importaciones:</strong> Importamos React, los estilos de <code>App.css</code> y el componente <code>Navbar</code>.</li>
                                    <li><strong>Función App:</strong> Definimos una función llamada <code>App</code> que retorna el JSX que representa la estructura de nuestra interfaz de usuario.</li>
                                    <li><strong>Renderización del Mensaje:</strong> Dentro del <code>div</code> con la clase <code>App</code>, incluimos un encabezado <code>&lt;h1&gt;</code> y un párrafo <code>&lt;p&gt;</code> con el mensaje "¡Hola Mundo!" y una bienvenida.</li>
                                    <li><strong>Exportación:</strong> Exportamos el componente <code>App</code> para que pueda ser utilizado en otras partes de la aplicación.</li>
                                </ul>

                            <strong>Editar los Archivos CSS</strong>
                            <p>
                                Los archivos <strong>CSS</strong> se utilizan para estilizar los componentes y definir la apariencia de la interfaz de usuario. Para modificar los estilos, sigue estos pasos:
                            </p>
                            <p>
                                <strong>Pasos para editar archivos CSS:</strong>
                            </p>
                                <ul>
                                    <li><strong>Navegar al directorio <code>src/</code>:</strong> Los archivos de estilos suelen estar organizados dentro de carpetas como <code>src/styles/</code> o directamente en <code>src/</code>.</li>
                                    <li><strong>Abrir el archivo CSS correspondiente:</strong> Por ejemplo, <code>App.css</code> contiene los estilos para el componente <code>App</code>.</li>
                                    <li><strong>Realizar cambios en los estilos:</strong> Puedes modificar propiedades CSS para cambiar colores, fuentes, márgenes, etc.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de modificación en <code>App.css</code>:</strong>
                            </p>
                            <pre><code>{`
/* App.css */
.App {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
}

h1 {
  color: #61dafb;
}

p {
  font-size: 18px;
  color: #333;
}
`}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>.App:</strong> Define estilos generales para el componente <code>App</code>, incluyendo alineación de texto, color de fondo y padding.</li>
                                    <li><strong>h1:</strong> Estiliza el encabezado principal con un color específico.</li>
                                    <li><strong>p:</strong> Establece el tamaño de fuente y el color para los párrafos dentro del componente.</li>
                                </ul>

                            <strong>Buenas Prácticas al Editar JSX y CSS</strong>
                            <p>
                                Para mantener un código limpio y eficiente, considera las siguientes buenas prácticas:
                            </p>
                            <ul>
                                <li><strong>Mantenibilidad:</strong> Mantén los componentes pequeños y enfocados en una sola responsabilidad.</li>
                                <li><strong>Reutilización:</strong> Crea componentes reutilizables para evitar la duplicación de código.</li>
                                <li><strong>Consistencia:</strong> Sigue una convención de nombres consistente para archivos y clases CSS.</li>
                                <li><strong>Modularidad:</strong> Divide los estilos en archivos CSS separados para cada componente si es necesario.</li>
                                <li><strong>Uso de Preprocesadores:</strong> Considera utilizar preprocesadores como SASS o LESS para facilitar la gestión de estilos complejos.</li>
                            </ul>
                            <strong>Herramientas y Extensiones Recomendadas</strong>
                            <p>
                                Para mejorar tu flujo de trabajo al editar JSX y CSS, puedes utilizar las siguientes herramientas y extensiones:
                            </p>
                            <ul>
                                <li><strong>ESLint:</strong> Herramienta de análisis de código para identificar y corregir problemas en JavaScript y JSX.</li>
                                <li><strong>Prettier:</strong> Formateador de código que asegura una apariencia consistente en todo el proyecto.</li>
                                <li><strong>React Developer Tools:</strong> Extensión para navegadores que permite inspeccionar la jerarquía de componentes y el estado en tiempo real.</li>
                                <li><strong>CSS Modules:</strong> Permiten el uso de estilos locales a componentes, evitando conflictos de nombres de clases.</li>
                            </ul>

                    <h2>¿Cómo se referencian los ficheros creados desde otras aplicaciones?</h2>
                    <p>
                        Integrar <strong>ficheros</strong> creados en otras aplicaciones dentro de tu proyecto React puede ampliar significativamente la funcionalidad y reutilización de componentes existentes. Este proceso implica referenciar y utilizar módulos, componentes o recursos que han sido desarrollados en proyectos separados. A continuación, se detallan los métodos y consideraciones clave para lograr esta integración de manera efectiva.
                    </p>

                            <strong>Publicar y Consumir Paquetes NPM</strong>
                            <p>
                                Una de las formas más comunes de compartir y referenciar ficheros entre diferentes aplicaciones es a través de la publicación de <strong>paquetes NPM</strong>. Esto permite que los componentes, utilidades o bibliotecas desarrolladas en una aplicación sean fácilmente consumidas por otras aplicaciones.
                            </p>
                            <p>
                                <strong>Pasos para publicar y consumir paquetes NPM:</strong>
                            </p>
                                <ul>
                                    <li><strong>Crear un Paquete NPM:</strong> Desarrolla tus componentes o módulos y asegúrate de que estén correctamente configurados con un archivo <code>package.json</code>.</li>
                                    <li><strong>Publicar el Paquete:</strong> Utiliza el comando <code>npm publish</code> para subir tu paquete al registro de NPM.</li>
                                    <li><strong>Instalar el Paquete en la Aplicación Destino:</strong> En la otra aplicación, ejecuta <code>npm install nombre-del-paquete</code> para agregarlo como dependencia.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de uso:</strong>
                                </p>
                                <pre><code>{`
    // Instalación del paquete
    npm install mi-paquete-react

    // Uso en un componente React
    import React from 'react';
    import { MiComponente } from 'mi-paquete-react';

    const App = () => {
      return (
        <div className="App">
          <MiComponente />
        </div>
      );
    };

    export default App;
    `}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>Instalación del Paquete:</strong> Se instala el paquete publicado utilizando <code>npm install</code>.</li>
                                    <li><strong>Importación del Componente:</strong> Se importa el componente <code>MiComponente</code> desde el paquete instalado.</li>
                                    <li><strong>Uso del Componente:</strong> El componente importado se utiliza dentro del componente <code>App</code>.</li>
                                </ul>

                            <strong>Referenciar Componentes mediante Enlaces Simbólicos (Symlinks)</strong>
                            <p>
                                Durante el desarrollo, es posible que desees trabajar con paquetes locales sin publicarlos en NPM. Para ello, puedes utilizar enlaces simbólicos con el comando <code>npm link</code>.
                            </p>
                            <p>
                                <strong>Pasos para crear y usar symlinks:</strong>
                            </p>
                                <ul>
                                    <li><strong>Crear el Enlace Simbólico:</strong> En el directorio del paquete que deseas compartir, ejecuta <code>npm link</code>.</li>
                                    <li><strong>Enlazar en la Aplicación Destino:</strong> En la otra aplicación, ejecuta <code>npm link nombre-del-paquete</code> para crear un enlace simbólico.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de uso:</strong>
                                </p>
                                <pre><code>{`
    // En el paquete a compartir
    cd mi-paquete-react
    npm link

    // En la aplicación destino
    cd mi-aplicacion
    npm link mi-paquete-react

    // Uso en un componente React
    import React from 'react';
    import { MiComponente } from 'mi-paquete-react';

    const App = () => {
      return (
        <div className="App">
          <MiComponente />
        </div>
      );
    };

    export default App;
    `}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>Crear el Enlace Simbólico:</strong> Se utiliza <code>npm link</code> en el paquete para hacerlo disponible globalmente.</li>
                                    <li><strong>Enlazar en la Aplicación Destino:</strong> Se crea un enlace simbólico en la aplicación destino que apunta al paquete local.</li>
                                    <li><strong>Uso del Componente:</strong> El componente importado se utiliza dentro del componente <code>App</code>.</li>
                                </ul>

                            <strong>Importación de Componentes desde Repositorios Git</strong>
                            <p>
                                Otra forma de referenciar ficheros creados en otras aplicaciones es importarlos directamente desde repositorios Git. Esto es útil cuando deseas incluir componentes específicos sin publicarlos en NPM.
                            </p>
                            <p>
                                <strong>Pasos para importar desde Git:</strong>
                            </p>
                                <ul>
                                    <li><strong>Especificar la URL del Repositorio:</strong> En el archivo <code>package.json</code> de tu aplicación, agrega la dependencia con la URL del repositorio.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de uso:</strong>
                                </p>
                                <pre><code>{`
    // package.json de la aplicación destino
    {
      "dependencies": {
        "mi-paquete-react": "git+https://github.com/usuario/mi-paquete-react.git"
      }
    }

    // Instalación de dependencias
    npm install

    // Uso en un componente React
    import React from 'react';
    import { MiComponente } from 'mi-paquete-react';

    const App = () => {
      return (
        <div className="App">
          <MiComponente />
        </div>
      );
    };

    export default App;
    `}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>Especificar la URL del Repositorio:</strong> Se agrega la dependencia en <code>package.json</code> con la URL del repositorio Git.</li>
                                    <li><strong>Instalación de Dependencias:</strong> Se ejecuta <code>npm install</code> para descargar e instalar el paquete desde Git.</li>
                                    <li><strong>Uso del Componente:</strong> El componente importado se utiliza dentro del componente <code>App</code>.</li>
                                </ul>
 
                            <strong>Compartir Recursos Estáticos y Medios</strong>
                            <p>
                                Además de componentes y módulos de JavaScript, es común compartir recursos estáticos como imágenes, fuentes y estilos CSS entre diferentes aplicaciones.
                            </p>
                            <p>
                                <strong>Pasos para compartir recursos estáticos:</strong>
                            </p>
                                <ul>
                                    <li><strong>Crear una Biblioteca de Recursos:</strong> Organiza los recursos estáticos en una carpeta dedicada dentro de tu paquete o aplicación.</li>
                                    <li><strong>Importar los Recursos en la Aplicación Destino:</strong> Utiliza rutas relativas o absolutas para importar y utilizar los recursos en tus componentes.</li>
                                </ul>
                            <p>
                                <strong>Ejemplo de uso:</strong>
                                </p>
                                <pre><code>{`
    // Estructura del paquete
    mi-paquete-react/
    ├── src/
    │   ├── components/
    │   │   └── MiComponente.js
    │   └── assets/
    │       └── logo.png
    ├── package.json
    └── README.md

    // MiComponente.js
    import React from 'react';
    import logo from '../assets/logo.png';
    import './MiComponente.css';

    const MiComponente = () => {
      return (
        <div className="mi-componente">
          <img src={logo} alt="Logo" />
          <h2>Componente Compartido</h2>
        </div>
      );
    };

    export default MiComponente;
    `}</code></pre>
                            <p>
                                <strong>Explicación del Código:</strong>
                            </p>
                                <ul>
                                    <li><strong>Importación de Recursos:</strong> Se importa una imagen <code>logo.png</code> desde la carpeta de <code>assets</code>.</li>
                                    <li><strong>Uso de Recursos:</strong> La imagen importada se utiliza dentro del componente React.</li>
                                    <li><strong>Estilos CSS:</strong> Se importan estilos específicos para el componente desde <code>MiComponente.css</code>.</li>
                                </ul>
                    <p>
                        <strong>Consideraciones Adicionales:</strong>
                    </p>
                        <ul>
                            <li>
                                <strong>Compatibilidad de Versiones:</strong> Asegúrate de que las versiones de los paquetes o componentes que estás referenciando sean compatibles con tu aplicación para evitar conflictos y errores.
                            </li>
                            <li>
                                <strong>Mantenimiento y Actualizaciones:</strong> Cuando se referencian ficheros desde otras aplicaciones, es importante mantener un control sobre las actualizaciones y cambios en esos ficheros para asegurar que tu aplicación siga funcionando correctamente.
                            </li>
                            <li>
                                <strong>Gestión de Dependencias:</strong> Utiliza herramientas como <strong>Yarn Workspaces</strong> o <strong>Lerna</strong> para gestionar múltiples paquetes dentro de un mismo repositorio, facilitando la referencia y actualización de dependencias compartidas.
                            </li>
                        </ul>
                </div>


            </section>

            {/* Conclusiones */}
            <section id="conclusiones" className="w3-row w3-padding-64">
                <div className="w3-twothird w3-container">
                    <h1 className="w3-text-teal">Conclusiones</h1>
                    <p>
                        A lo largo de este tutorial, hemos explorado los fundamentos esenciales de <strong>React</strong>, un <strong>framework</strong> de <strong>JavaScript</strong> que ha revolucionado la forma en que construimos interfaces de usuario dinámicas y eficientes. Desde la creación de componentes básicos hasta la implementación de rutas y la gestión de estilos, React ofrece una estructura robusta y flexible que facilita el desarrollo de aplicaciones escalables y mantenibles.
                    </p>
                    <h3>Resumen de los Puntos Clave</h3>
                    <ul>
                        <li><strong>Componentes React:</strong> Entendimos cómo crear y utilizar componentes reutilizables para construir interfaces modulares.</li>
                        <li><strong>JSX:</strong> Aprendimos a combinar JavaScript con sintaxis similar a HTML para definir la estructura de los componentes.</li>
                        <li><strong>Virtual DOM:</strong> Descubrimos cómo React optimiza las actualizaciones de la interfaz utilizando el Virtual DOM para mejorar el rendimiento.</li>
                        <li><strong>Gestión de Estado y Props:</strong> Exploramos cómo manejar datos internos de los componentes y pasar información entre ellos de manera eficiente.</li>
                        <li><strong>React Router:</strong> Implementamos la navegación entre diferentes vistas de la aplicación utilizando rutas.</li>
                        <li><strong>Estilos y CSS:</strong> Vimos cómo aplicar estilos a los componentes utilizando archivos CSS y prácticas recomendadas.</li>
                    </ul>
                    <h3>Ventajas de Utilizar React</h3>
                    <ul>
                        <li><strong>Reutilización de Código:</strong> La naturaleza basada en componentes de React permite reutilizar bloques de código, reduciendo la duplicación y facilitando el mantenimiento.</li>
                        <li><strong>Rendimiento Optimizado:</strong> El uso del Virtual DOM minimiza las actualizaciones costosas del DOM real, mejorando la eficiencia de la aplicación.</li>
                        <li><strong>Comunidad Activa:</strong> React cuenta con una amplia comunidad de desarrolladores que contribuyen con herramientas, bibliotecas y recursos, facilitando el aprendizaje y la resolución de problemas.</li>
                        <li><strong>Flexibilidad:</strong> React se puede integrar fácilmente con otras tecnologías y bibliotecas, permitiendo una gran flexibilidad en el desarrollo de aplicaciones.</li>
                        <li><strong>Escalabilidad:</strong> La estructura modular de React facilita la construcción de aplicaciones grandes y complejas de manera organizada y mantenible.</li>
                    </ul>
                    <h3>Próximos Pasos</h3>
                    <p>
                        Ahora que tienes una comprensión sólida de los conceptos básicos de React, puedes continuar profundizando en temas más avanzados para mejorar aún más tus habilidades de desarrollo. Algunas áreas recomendadas incluyen:
                    </p>
                    <ul>
                        <li><strong>Gestión de Estado Avanzada:</strong> Explora herramientas como <strong>Redux</strong> o la <strong>Context API</strong> para manejar estados globales en aplicaciones más complejas.</li>
                        <li><strong>Hooks de React:</strong> Aprende a utilizar <strong>Hooks</strong> como <code>useState</code>, <code>useEffect</code> y otros para manejar estados y efectos secundarios de manera más eficiente.</li>
                        <li><strong>Optimización de Rendimiento:</strong> Investiga técnicas para optimizar el rendimiento de tus aplicaciones React, como la carga diferida (<strong>lazy loading</strong>) y la memorización de componentes.</li>
                        <li><strong>Pruebas y Depuración:</strong> Familiarízate con herramientas y bibliotecas para probar y depurar tus aplicaciones React, asegurando su fiabilidad y calidad.</li>
                        <li><strong>Integración con APIs:</strong> Aprende a conectar tus aplicaciones React con APIs externas para obtener y enviar datos de manera dinámica.</li>
                    </ul>
                    <p>
                        Además, considera participar en la comunidad de React asistiendo a conferencias, contribuyendo a proyectos de código abierto o siguiendo blogs y tutoriales especializados. La constante actualización y práctica son clave para dominar React y mantenerse al día con sus evoluciones y mejores prácticas.
                    </p>
                    <p>
                        <strong>¡Felicidades!</strong> Has dado un paso importante hacia la creación de aplicaciones web modernas y eficientes utilizando React. Sigue explorando, practicando y construyendo proyectos desafiantes para consolidar tus conocimientos y habilidades en este poderoso framework.
                    </p>
                </div>


            </section>

            {/* Footer */}
            <footer id="myFooter">
                <div className="w3-container w3-theme-l2 w3-padding-32">
                    <h4>Tutorial de Actividad de DAR - realizada por Javier Bermejo Gonz&aacute;lez </h4>
                </div>

                <div className="w3-container w3-theme-l1">
                    <p>
                        Plantilla w3c utilizada para la actividad, obtenida de {' '}
                        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">
                            w3.css
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default MainContent;
