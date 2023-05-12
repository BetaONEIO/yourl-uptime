describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.ercallcoltsjfc.co.uk')
    cy.url().should('include', 'https');
  })
})