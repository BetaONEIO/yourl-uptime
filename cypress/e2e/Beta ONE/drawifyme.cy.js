describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.drawify.me')
    cy.url().should('include', 'https');

  })
})