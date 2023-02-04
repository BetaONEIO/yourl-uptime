describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('https://www.thecryptowiki.io/')
    cy.url().should('include', 'https');

  })
})