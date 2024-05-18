const { faker } = require('@faker-js/faker');
describe('New Tag Test', () => {
    it('despues del login entra a crear un post nuevo', () => {
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
    
      cy.wait(1000); 
      cy.contains('a', 'Tags').click();  
      cy.screenshot();  
      cy.wait(2000); 
      cy.contains('a', 'New tag').click(); 
      cy.screenshot();
      cy.url().should('include', '/tags/new');
  
      const randomTagName = faker.lorem.word(); // Nombre del tag aleatorio
      const randomTagSlug = faker.lorem.slug(); // Slug del tag aleatorio
      const randomTagDescription = faker.lorem.sentence(); // Descripción del tag aleatoria
  
      cy.get('#tag-name').type(randomTagName);
      cy.get('#tag-slug').type(randomTagSlug);
      cy.screenshot();
      cy.get('#tag-description').type(randomTagDescription);
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });