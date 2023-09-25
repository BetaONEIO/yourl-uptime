describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.betaone.io/')
    cy.url().should('include', '9999');
  })
})