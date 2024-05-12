describe('Logu¿out', () => {
    it('despues del login gregar un member', () => {
      cy.visit('/dashboard'); 
      cy.screenshot();
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    
      cy.screenshot();
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.get('.gh-user-avatar').click();   
      cy.wait(200); 
      cy.contains('a', 'Sign out').click(); 
      cy.screenshot();
      cy.get('#identification').should('be.visible');
    });
  });