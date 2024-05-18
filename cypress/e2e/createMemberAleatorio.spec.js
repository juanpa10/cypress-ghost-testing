const { faker } = require('@faker-js/faker');
describe('Add Member', () => {
    it('despues del login gregar un member', () => {
      cy.viewport(1280, 800); 
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
    
      cy.wait(1000); 
      cy.contains('a', 'Members').click();  
      cy.screenshot();  
      cy.wait(2000); 
      cy.contains('a', 'New member').click(); 
      cy.url().should('include', '/members/new');
      cy.screenshot();
  
      cy.get('#member-name').type(faker.name.fullName); 
      const randomEmail = faker.internet.email();
      cy.get('#member-email').type(randomEmail);
      cy.get('#member-note').type(faker.lorem.sentence()); 
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });