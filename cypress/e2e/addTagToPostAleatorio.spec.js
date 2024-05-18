const { faker } = require('@faker-js/faker');

describe('Edit Tag', () => {
  it('despues del login editar un tag', () => {
    cy.visit('/dashboard'); 
    cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
    cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
    cy.contains('button', 'Sign in').click();

    cy.wait(1000); 
    cy.screenshot();
    cy.contains('a', 'Tags').click();    
    cy.wait(2000); 
    cy.contains('a', 'New tag').click(); 
    cy.url().should('include', '/tags/new');
    cy.screenshot();

    const randomTextTag = faker.lorem.word();
    cy.get('#tag-name').type(randomTextTag);
    cy.get('#tag-slug').type(faker.lorem.slug());
    cy.get('#tag-description').type(faker.lorem.sentence());
    cy.screenshot();
    cy.contains('button', 'Save').click();

    cy.wait(1000); 
    cy.contains('a', 'Tags').click();   
    cy.contains('a', randomTextTag).click(); 
    cy.screenshot();
    cy.wait(2000); 

    const randomNewTextTag = faker.lorem.word();
  
    cy.get('#tag-name').type(randomNewTextTag);
    cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]');
    cy.screenshot();
    cy.contains('button', 'Save').click();
  });
});