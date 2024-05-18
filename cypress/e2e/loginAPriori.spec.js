describe('Login Test', () => {
    it('Logs in and navigates to the Sites tab', () => {
      cy.visit('/signin'); 
      cy.screenshot();
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
      cy.contains('posts').should('be.visible');
      cy.screenshot();
    });
  });