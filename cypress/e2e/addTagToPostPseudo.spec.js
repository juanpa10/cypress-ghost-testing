describe('Edit Tag', () => {
  it('después del login editar un tag', () => {
      cy.request('https://my.api.mockaroo.com/users.json?key=bc217260')
      .then((response) => {
          console.log("Response: ", response);
          const data = response.body[0];
          console.log("los datos ", data);
          cy.log("los datos ", data);

          cy.visit('/dashboard'); 
          cy.get('input[name="identification"]').type(Cypress.env('USER_EMAIL'));
          cy.get('input[name="password"]').type(Cypress.env('USER_PASSWORD'));
          cy.contains('button', 'Sign in').click();
    
          cy.wait(1000); 
          cy.screenshot();
          cy.contains('a', 'Tags').click();    
          cy.wait(2000); 
          cy.contains('a', 'New tag').click(); 
          cy.url().should('include', '/tags/new');
          cy.screenshot();
          cy.get('#tag-name').type(data.TAG_POST);
          cy.get('#tag-slug').type('sample-tag-slug');
          cy.get('#tag-description').type('This is a description for the sample tag.');
          cy.screenshot();
          cy.contains('button', 'Save').click();
          cy.wait(1000); 
          cy.contains('a', 'Tags').click();   
          cy.contains('a', data.TAG_POST).click(); 
          cy.screenshot();
          cy.wait(2000); 
          cy.get('#tag-name').type(data.NEW_TAG_POST); 
          cy.contains('button', 'Save').click();
      });
  });
});