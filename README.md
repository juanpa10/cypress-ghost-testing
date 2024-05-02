# Configuración del Proyecto

Este README proporciona los pasos para instalar y configurar Cypress para ejecutar pruebas de extremo a extremo en este proyecto.

## Instalar Cypress

Navega a la carpeta `/current` en la raíz del proyecto Ghost y ejecuta el siguiente comando:

    npm install cypress --save-dev

## Copiar Carpeta de Pruebas

Después de instalar Cypress, copia la carpeta `e2e` desde el repositorio a la carpeta `cypress` recién creada.

## Configurar Cypress

Modifica el archivo `cypress.config.js` en la carpeta `/current` con el siguiente código:

   module.exports = {
  e2e: {
    baseUrl: 'http://localhost:2368/ghost/',
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js,spec.jsx,spec.ts,spec.tsx}',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    USER_EMAIL: 'jp.camacho10@uniandes.edu.co',
    USER_PASSWORD: 'juan876896878',
    POST_TITLE: 'Test Title',
    DRAFT_POST_TITLE: 'Draft Test Title',
    TAG_POST: 'Sample Tag'
  }
};

modifica los valores que sean necesarios

## Ejecutar Pruebas

Finalmente, ejecuta las pruebas mediante el siguiente comando en la carpeta `/current`:

    cypress run