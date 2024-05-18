module.exports = {
  e2e: {
    baseUrl: 'https://ghost-3llp.onrender.com/ghost/',
    specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,spec.js,spec.jsx,spec.ts,spec.tsx}',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    USER_EMAIL: 'testerJunior@gmail.com',
    USER_PASSWORD: 'testerjunior1'
  }
};
