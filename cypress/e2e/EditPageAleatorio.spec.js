const { faker } = require('@faker-js/faker');
describe('Edit Page', () => {
    it('despues del login editar un page', () => {
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
    
      cy.wait(1000); 
      cy.contains('a', 'Pages').click();    
      cy.screenshot();
      cy.wait(2000); 
      cy.contains('a', 'New page').click(); 
      cy.url().should('include', '/editor/page');
      cy.screenshot();
  
      const randomPageTitle = faker.lorem.words(3); 
      const randomText = faker.lorem.paragraph(); 
  
      cy.get('textarea[placeholder="Page title"]').type(randomPageTitle);
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText);
      cy.screenshot();
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('button', 'Publish page, right now').click();
      cy.screenshot();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      cy.go('back');
      cy.screenshot();
  
      const randomNewText = faker.lorem.paragraph(); 
  
      cy.contains('a', randomPageTitle).first().click(); 
      cy.screenshot();
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomNewText).first();
      cy.contains('button', 'Update').first().click();
      cy.screenshot();
      cy.contains('button', 'Updated').should('be.visible');
    });
  });