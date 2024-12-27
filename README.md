
# React Tutorial Application

Este repositorio contiene un proyecto React diseñado para enseñar los conceptos básicos e intermedios del desarrollo con React. Incluye dos tutoriales principales: **Tutorial básico** y **Tutorial nivel medio**, además de una sección de referencias.

## Contenido

- [React Tutorial Application](#react-tutorial-application)
  - [Contenido](#contenido)
  - [Características](#características)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Ejecución](#ejecución)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Descripción de las secciones](#descripción-de-las-secciones)
    - [1. **Tutorial Básico**](#1-tutorial-básico)
    - [2. **Tutorial Nivel Medio**](#2-tutorial-nivel-medio)
    - [3. **Referencias**](#3-referencias)
  - [Deploy](#deploy)
  - [Licencia](#licencia)

---

## Características

- **Tutorial Básico:** Introducción a React, incluyendo componentes, estados, y propiedades.
- **Tutorial Nivel Medio:** Conceptos intermedios como Redux, Hooks personalizados, pruebas con Jest, y optimización de rendimiento.
- **Navegación Dinámica:** Uso de React Router para navegación entre tutoriales y referencias.
- **Iconos Personalizados:** Integración con Font Awesome para mejorar la experiencia de usuario.
- **Despliegue Automatizado:** Configuración lista para desplegar en GitHub Pages.

---

## Requisitos

- **Node.js:** Versión 14.x o superior.
- **npm:** Versión 6.x o superior.
- **React:** Versión 18.x.

---

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jbermejog/actividad1-dar.git
   ```

2. Accede al directorio del proyecto:

   ```bash
   cd actividad1-dar
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

---

## Ejecución

Inicia el servidor de desarrollo con el siguiente comando:

```bash
npm start
```

Esto abrirá la aplicación en `http://localhost:3000` en tu navegador.

---

## Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```plaintext
src/
├── components/
│   ├── Navbar.js          # Menú de navegación superior
│   ├── Sidebar.js         # Barra lateral del tutorial básico
│   ├── SidebarMedium.js   # Barra lateral del tutorial nivel medio
│   ├── MainContent.js     # Contenido del tutorial básico
│   ├── MediumContent.js   # Contenido del tutorial nivel medio
├── App.js                 # Componente principal
├── index.js               # Punto de entrada
├── App.css                # Estilos globales
```

---

## Descripción de las secciones

### 1. **Tutorial Básico**
   Introducción a conceptos fundamentales de React:
   - Componentes funcionales.
   - Uso de estados y propiedades.
   - Primera aplicación React.

### 2. **Tutorial Nivel Medio**
   Conceptos más avanzados para aplicaciones React robustas:
   - Implementación de Redux para gestión de estado.
   - Creación de Hooks personalizados.
   - Optimización de rendimiento con React.memo.
   - Uso de Jest para pruebas unitarias.

### 3. **Referencias**
   Recursos útiles y documentación adicional para ampliar tus conocimientos sobre React.

---

## Deploy

El proyecto está configurado para ser desplegado en GitHub Pages.

1. Actualiza el campo `homepage` en `package.json` con la URL de tu repositorio:

   ```json
   "homepage": "https://<tu-usuario>.github.io/<nombre-del-repositorio>"
   ```

2. Ejecuta el comando de despliegue:

   ```bash
   npm run deploy
   ```

3. Accede a la aplicación en la URL configurada en `homepage`.

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
