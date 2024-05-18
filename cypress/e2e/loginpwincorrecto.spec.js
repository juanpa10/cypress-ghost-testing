const { faker } = require('@faker-js/faker');
describe('Login Test', () => {
    it('Logs in and navigates to the Sites tab', () => {
      
      const randomText = faker.lorem.paragraph(); 
      cy.visit('/signin'); 
      cy.screenshot();
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(randomText)
      cy.contains('button', 'Sign in').click();
      cy.contains('p', 'Your password is incorrect').should('be.visible');
      cy.screenshot();
    });
  });