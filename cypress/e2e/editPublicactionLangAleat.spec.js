const { faker } = require('@faker-js/faker');
describe('Editar Idioma', () => {
    it('editar la configuaración de idioma dentro de los settings', () => {
      cy.visit('/settings/general'); 
      cy.screenshot();
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
      
      cy.screenshot();
      cy.wait(1000); 
      cy.wait(200);  
      cy.screenshot();
      const randomNotISOCODEText= faker.lorem.words(10); 
      cy.contains('.gh-expandable-title', 'Publication Language').parents('.gh-expandable-block').within(() => {
        cy.screenshot();
        cy.get('button.gh-btn:contains("Expand")').click(); 
        cy.get('.ember-text-field.gh-input').type(randomNotISOCODEText);
      });
     
      cy.get('button').contains('Save').click();
      cy.contains('button', 'Saved').should('be.visible');
     
    });
  });