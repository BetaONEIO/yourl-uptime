describe('https and uptime check', () => {
  it('passes', () => {
    cy.visit('www.cutandcolourbaschurch.co.uk')
    cy.url().should('include', 'https');
    // became client 15th Feb 2023
  })
})