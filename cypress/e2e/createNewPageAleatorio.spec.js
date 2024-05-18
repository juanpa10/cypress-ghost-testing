const { faker } = require('@faker-js/faker');
describe('Create Page', () => {
    it('despues del login crear una Page', () => {
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

    cy.get('textarea[placeholder="Page title"]').type(randomPageTitle, { force: true });
    cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText);
    cy.contains('button', 'Publish').click();
    cy.contains('button', 'Continue, final review').click();
    cy.screenshot();
    cy.wait(1000); 
    cy.contains('button', 'Publish page, right now').click();
    cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
    cy.screenshot();
  });
});