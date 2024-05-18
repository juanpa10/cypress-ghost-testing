const testData = require('/datosMock.json');
describe('Edit Member', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        console.log('Uncaught exception', err);
        return false;
      });
    });
    it('despues del login editar un member', () => {
      const data = testData[0];
      const newData = testData[1];
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Members').click(); 
      cy.screenshot();   
      cy.wait(2000); 
      cy.contains('a', 'New member').click(); 
      cy.screenshot();
      cy.url().should('include', '/members/new');
      cy.get('#member-name').type(data.member_name, { force: true });
      cy.get('#member-email').type(data.email);
      cy.get('#member-note').type(data.member_note);
      cy.screenshot();
      cy.contains('button', 'Save').click();
      
      cy.wait(2000); 
      cy.go('back');
      cy.wait(500); 
      cy.contains('span', 'Leave').click();
      cy.wait(1000); ;
      cy.contains('a', 'Members').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('a', data.member_name).first().click(); 
      cy.get('#member-name').type(newData.member_name, { force: true });
      cy.get('#member-note').type(newData.member_note);
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });