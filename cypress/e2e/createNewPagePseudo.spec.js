const testData = require('/datosMock.json');
describe('Create Page', () => {
    it('despues del login crear una Page', () => {
        cy.request('https://my.api.mockaroo.com/users.json?key=bc217260').then((response) => {
        const datos = response.body;
      
      const data = datos[0];
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
      //cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', data.post_content).type('{enter}', { force: true })

      cy.get('p[data-koenig-dnd-droppable="true"]').invoke('html', data.post_content);
      cy.contains('button', 'Publish').click();
      cy.contains('button', 'Continue, final review').click();
      cy.screenshot();
      cy.wait(1000); 
      cy.contains('button', 'Publish page, right now').click();
      cy.contains('span.green', 'Boom. It’s out there.').should('be.visible');
      cy.screenshot();
    });
  });
      
  });