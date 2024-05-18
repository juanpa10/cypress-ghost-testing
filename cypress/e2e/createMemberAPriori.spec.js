const testData = require('/datosMock.json');
describe('Add Member', () => {
    it('despues del login gregar un member', () => {
      const data = testData[0];
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
    
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Members').click();  
      cy.screenshot();  
      cy.wait(2000); 
      cy.contains('a', 'New member').click(); 
      cy.url().should('include', '/members/new');
      cy.screenshot();
      cy.get('#member-name').type('Sample member name' , { force: true });
      cy.get('#member-email').type(data.email);
      cy.get('#member-note').type('This is a note for the sample member.');
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });