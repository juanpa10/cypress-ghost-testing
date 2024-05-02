describe('New Post Test', () => {
    it('despues del login entra a crear un post nuevo', () => {
      cy.visit('/dashboard'); 
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Posts').click();    
      cy.wait(2000); 
      cy.contains('a', 'New post').click(); 
      cy.url().should('include', '/editor/post');
      cy.get('[data-test-editor-title-input]').type(Cypress.env('POST_TITLE'));
      const randomText = Math.random().toString(36).substring(2, 15);
      cy.get('p[data-koenig-dnd-droppable="true"]').click(); 
      cy.wait(500); 
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText);
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.wait(1000); 
      cy.contains('button', 'Publish post, right now').click();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      
      
    });
  });