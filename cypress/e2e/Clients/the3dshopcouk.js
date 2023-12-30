describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.fragranti.co.uk')
    cy.url().should('include', 'https');
  })
})