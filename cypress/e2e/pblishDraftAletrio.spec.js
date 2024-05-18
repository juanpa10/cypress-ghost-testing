const { faker } = require('@faker-js/faker');
describe('Publish Draft Post Test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      console.log('Uncaught exception', err);
      return false;
    });
  });
    it('despues del login entra a crear un post nuevo sin guardar y luego publicarlos por borradores', () => {
      cy.visit('/dashboard');
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
    
      cy.wait(1000); 
      cy.contains('a', 'Posts').click();    
      cy.wait(2000); 
      cy.screenshot();
      cy.contains('a', 'New post').click(); 
      cy.url().should('include', '/editor/post');
      cy.screenshot();
  
      const randomDraftPostTitle = faker.lorem.words(3); 
      const randomText = faker.lorem.paragraph(); 
  
      cy.get('textarea[placeholder="Post title"]').type(randomDraftPostTitle);
      cy.get('.koenig-editor__editor').click(); 
      cy.wait(500); 
      cy.get('.koenig-editor__editor').invoke('html', randomText);
      cy.screenshot();
      cy.go('back');
      cy.wait(500); 
      cy.contains('span', 'Leave').click();
      cy.wait(1000); ;
      cy.screenshot();
      cy.contains('a', 'Drafts').click(); 
      cy.wait(500); 
      cy.screenshot();
      cy.contains('a', randomDraftPostTitle).click(); 
      cy.screenshot();
      cy.get('.koenig-editor__editor').invoke('html', randomText);
      cy.screenshot();
      cy.contains('button', 'Publish').click();
      cy.screenshot();
      cy.contains('button', 'Continue, final review').click();
      cy.screenshot();
      cy.contains('button', 'Publish post, right now').click();
      cy.screenshot();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      cy.screenshot();
    });
  });