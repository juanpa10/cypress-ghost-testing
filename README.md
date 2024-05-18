# Configuración del Proyecto

Este README proporciona los pasos para instalar y configurar Cypress para ejecutar pruebas de extremo a extremo en este proyecto.
Integrantes: Juan Pablo Camacho -> jp.camacho10@uniandes.edu.co y  Felipe Rivera -> yf.rivera1851@uniandes.edu.co

## Instalar Cypress

npm install cypress --save-dev

## Instalar faker

npm install --save-dev @faker-js/faker

## Configurar Cypress

Si necesario, modifica el archivo `cypress.config.js` que se creo con el primer comando, con el siguiente código:

   module.exports = {
  e2e: {
    baseUrl: 'https://ghost-3llp.onrender.com/ghost',
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js,spec.jsx,spec.ts,spec.tsx}',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    USER_EMAIL: 'testerJunior@gmail.com',
    USER_PASSWORD: 'testerjunior1'
  }
};

modifica los valores que sean necesarios

## Ejecutar Pruebas

Finalmente, ejecuta en la raiz en comando:

    cypress run

## Ubicación pruebas

Las pruebas se pueden ver en la carpeta e2e en la carpeta cypress