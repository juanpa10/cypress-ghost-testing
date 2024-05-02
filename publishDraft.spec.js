describe('Publish Draft Post Test', () => {
    it('despues del login entra a crear un post nuevo sin guardar y luego publicarlos por borradores', () => {
      cy.visit('/dashboard');
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
      
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Posts').click();    
      cy.wait(2000); 
      cy.contains('a', 'New post').click(); 
      cy.url().should('include', '/editor/post');
      cy.get('[data-test-editor-title-input]').type(Cypress.env('DRAFT_POST_TITLE'));
      const randomText = Math.random().toString(36).substring(2, 15);
      cy.get('p[data-koenig-dnd-droppable="true"]').click(); 
      cy.wait(500); 
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText);
      cy.go('back');
      cy.wait(500); 
      cy.contains('a', 'Drafts').click(); 
      cy.wait(500); 
      cy.contains('a', Cypress.env('DRAFT_POST_TITLE')).click(); 
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText);
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.contains('button', 'Publish post, right now').click();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      
      
    });
  });