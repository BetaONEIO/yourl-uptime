describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.castlechurch.org.uk')
    cy.url().should('include', 'https');
    // became client 1st Apr 2023
  })
})