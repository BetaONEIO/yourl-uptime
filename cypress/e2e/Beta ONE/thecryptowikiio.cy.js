describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('http://www.thecryptowiki.io/')
    cy.url().should('include', 'https');
  })
})