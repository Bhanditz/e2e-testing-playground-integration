describe('E2E testing', function() {
  it('Should load data from server docker container', function() {

  	cy.visit("http://localhost");

  	expect(cy.get('#name')).not.to.be.undefined;

    cy.contains("Dani").should('be.visible');
  })
})