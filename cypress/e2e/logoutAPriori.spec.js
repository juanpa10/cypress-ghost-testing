const { faker } = require('@faker-js/faker');
describe('Log out', () => {beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      console.log('Uncaught exception', err);
      return false;
    });
  });
    it('despues del login gregar un member', () => {
      cy.visit('/dashboard'); 
      cy.screenshot();
      
      const randomText = faker.lorem.paragraph(); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.screenshot();
      
      cy.contains('button', 'Sign in').click();
      
      cy.wait(1000); 
      cy.get('.gh-user-avatar').click();   
      cy.wait(200); 
      cy.contains('a', 'Sign out').click(); 
      cy.screenshot();
      cy.get('input[name="identification"]').should('be.visible');
    });
  });