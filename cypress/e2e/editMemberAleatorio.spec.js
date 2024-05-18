const { faker } = require('@faker-js/faker');
describe('Edit Member', () => {
    beforeEach(() => {
      cy.on('uncaught:exception', (err, runnable) => {
        console.log('Uncaught exception', err);
        return false;
      });
    });
    it('despues del login editar un member', () => {
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
  
      const memberName = faker.name.fullName; 
      const memberEmail = faker.internet.email(); 
      const memberNote = faker.lorem.sentence(); 
  
      cy.get('#member-name').type(memberName, { force: true });
      cy.get('#member-email').type(memberEmail);
      cy.get('#member-note').type(memberNote);
      cy.screenshot();
      cy.contains('button', 'Save').click();
      
      cy.go('back');
      cy.wait(500); 
      cy.contains('span', 'Leave').click();
      cy.wait(1000); 
      cy.contains('a', 'Members').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('a', memberName).first().click(); 
  
      const editedMemberName = faker.name.fullName; 
      const editedMemberNote = faker.lorem.sentence();
  
      cy.get('#member-name').clear().type(editedMemberName, { force: true });
      cy.get('#member-note').clear().type(editedMemberNote);
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });