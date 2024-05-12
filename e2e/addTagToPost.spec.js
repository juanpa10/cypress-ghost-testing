describe('Edit Tag', () => {
    it('despues del login editar un tag', () => {
      cy.visit('/dashboard'); 
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.screenshot();
      cy.contains('a', 'Tags').click();    
      cy.wait(2000); 
      cy.contains('a', 'New tag').click(); 
      cy.url().should('include', '/tags/new');
      cy.screenshot();
      const randomTextTag = Math.random().toString(36).substring(2, 15);
      cy.get('#tag-name').type(Cypress.env('TAG_POST')+randomTextTag);
      cy.get('#tag-slug').type('sample-tag-slug');
      cy.get('#tag-description').type('This is a description for the sample tag.');
      cy.screenshot();
      cy.contains('button', 'Save').click();
      cy.wait(1000); 
      cy.contains('a', 'Tags').click();   
      cy.contains('a', Cypress.env('TAG_POST')+randomTextTag).click(); 
      cy.screenshot();
      cy.wait(2000); 
      const randomNewTextTag = Math.random().toString(36).substring(2, 15);
      cy.get('#tag-name').type(Cypress.env('TAG_POST')+randomNewTextTag);
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon"]');
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });