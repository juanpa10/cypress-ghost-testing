# Configuración del Proyecto

Este README proporciona los pasos para instalar y configurar Cypress para ejecutar pruebas de extremo a extremo en este proyecto.
Integrantes: Juan Pablo Camacho -> jp.camacho10@uniandes.edu.co y  Felipe Rivera -> yf.rivera1851@uniandes.edu.co

## Instalar Cypress

npm install cypress --save-dev

## Copiar Carpeta de Pruebas

Después de instalar Cypress, copia la carpeta `e2e` desde el repositorio a la carpeta `cypress` recién creada.

## Configurar Cypress

Modifica el archivo `cypress.config.js` que se creo con el primer comando, con el siguiente código:

   module.exports = {
  e2e: {
    baseUrl: 'https://ghost-3llp.onrender.com/ghost/#/signin',
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js,spec.jsx,spec.ts,spec.tsx}',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    USER_EMAIL: 'testerJunior@gmail.com',
    USER_PASSWORD: 'testerjunior1',
    POST_TITLE: 'Test Title',
    DRAFT_POST_TITLE: 'Draft Test Title',
    TAG_POST: 'Sample Tag',
    PAGE_TITLE: 'Page Test Title'
  }
};

modifica los valores que sean necesarios

## Ejecutar Pruebas

Finalmente, ejecuta en la raiz en comando:

    cypress run
