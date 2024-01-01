describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.thecryptowiki.io')
    cy.url().should('include', 'https');
  })
})