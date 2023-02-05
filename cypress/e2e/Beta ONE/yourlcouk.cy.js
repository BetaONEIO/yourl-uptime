describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.yourl.co.uk')
    cy.url().should('include', 'https');
  })
})