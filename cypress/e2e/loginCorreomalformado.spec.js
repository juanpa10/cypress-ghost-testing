const testData = require('/datosMock.json');
describe('Login Test', () => {
    it('Logs in and navigates to the Sites tab', () => {
      
      const data = testData[2];
      cy.visit('/signin'); 
      cy.screenshot();
      cy.get('input[name="identification"]').type(data.email);
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
      cy.contains('p', 'Please fill out the form to sign in').should('be.visible');
      cy.screenshot();
    });
  });