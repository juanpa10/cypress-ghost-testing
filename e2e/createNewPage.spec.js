describe('Create Page', () => {
    it('despues del login crear una Page', () => {
      cy.visit('/dashboard'); 
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Pages').click();  
      cy.screenshot();  
      cy.wait(2000); 
      cy.contains('a', 'New page').click(); 
      cy.url().should('include', '/editor/page');
      cy.screenshot();
      const randomText = Math.random().toString(36).substring(2, 15);
      cy.get('textarea[placeholder="Page title"]').type(Cypress.env('PAGE_TITLE'));
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', randomText).type('{enter}')
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('button', 'Publish page, right now').click();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      cy.screenshot();
    });
  });