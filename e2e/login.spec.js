describe('Login Test', () => {
    it('Logs in and navigates to the Sites tab', () => {
      cy.visit('/signin'); 
      cy.screenshot();
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
      cy.get('#ember5').click();
      cy.contains('posts').should('be.visible');
      cy.screenshot();
    });
  });