describe('New Tag Test', () => {
    it('despues del login entra a crear un post nuevo', () => {
      cy.visit('/dashboard'); 
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Tags').click();  
      cy.screenshot();  
      cy.wait(2000); 
      cy.contains('a', 'New tag').click(); 
      cy.screenshot();
      cy.url().should('include', '/tags/new');            
      cy.get('#tag-name').type(Cypress.env('TAG_POST'));
      cy.get('#tag-slug').type('sample-tag-slug');
      cy.screenshot();
      cy.get('#tag-description').type('This is a description for the sample tag.');
      cy.screenshot();
      cy.contains('button', 'Save').click();
      
    });
  });