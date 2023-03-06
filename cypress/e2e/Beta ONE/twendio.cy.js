describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.twend.io/')
    cy.url().should('include', 'https');
  })
})