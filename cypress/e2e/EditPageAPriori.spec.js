const testData = require('/datosMock.json');
describe('Edit Page', () => {
    it('despues del login editar un page', () => {
      const data = testData[0];
      const newData = testData[1];
      cy.visit('/dashboard'); 
      cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
      cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'))
      cy.contains('button', 'Sign in').click();
      
      cy.wait(1000); 
      cy.contains('a', 'Pages').click();    
      cy.screenshot();
      cy.wait(2000); 
      cy.contains('a', 'New page').click(); 
      cy.url().should('include', '/editor/page');
      cy.screenshot();
      cy.get('textarea[placeholder="Page title"]').type(data.page_title);
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', data.post_content);
      cy.screenshot();
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('button', 'Publish page, right now').click();
      cy.screenshot();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      cy.go('back');
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('a', data.page_title).first().click(); 
      cy.wait(1000); 
      cy.screenshot();
      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', newData.post_content).first();
      cy.contains('button', 'Publish').first().click();
      cy.screenshot();
      cy.contains('button', 'Updated').should('be.visible');
    });
  });