describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('https://yourl.co.uk')
    cy.url().should('include', 'https');
  })
})