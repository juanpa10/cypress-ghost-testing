describe('Edit Member', () => {
    it('despues del login editar un member', () => {
      cy.visit('/dashboard'); 
      cy.get('#identification').type(Cypress.env('USER_EMAIL'));
      cy.get('#password').type(Cypress.env('USER_PASSWORD'));
    
      
      cy.get('#ember5').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Members').click(); 
      cy.screenshot();   
      cy.wait(2000); 
      cy.contains('a', 'New member').click(); 
      cy.screenshot();
      cy.url().should('include', '/members/new');
      cy.get('#member-name').type('To Edit Sample member name');
      const randomText = Math.random().toString(36).substring(2, 6);
      cy.get('#member-email').type('sampleMem'+randomText+'ber@hotmail.com');
      cy.get('#member-note').type('This is a note for the sample member.');
      cy.screenshot();
      cy.contains('button', 'Save').click();
      
      cy.go('back');
      cy.wait(1000); 
      cy.contains('a', 'Members').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('a', 'To Edit Sample member name').first().click(); 
      cy.get('#member-name').type('To Edit Sample member name now');
      cy.get('#member-note').type('This is a note thats now edited for the sample member.');
      cy.screenshot();
      cy.contains('button', 'Save').click();
    });
  });