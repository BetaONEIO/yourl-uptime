describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('https://alovetowardourneighbour.org.uk/')
    cy.url().should('include', 'https');
  })
})



